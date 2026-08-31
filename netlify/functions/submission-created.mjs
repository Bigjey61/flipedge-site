// Fires automatically on EVERY Netlify form submission.
// Pushes the lead straight into the distress-intel pipeline as an INBOUND lead
// (the hottest kind — self-selected, reachable, and consented: the seller typed
// their own number and asked to be contacted). Never blocks the form UX.
//
// Requires Netlify env vars: SUPABASE_URL, SUPABASE_SERVICE_KEY.
import { createClient } from "@supabase/supabase-js";

export async function handler(event) {
  try {
    const { payload } = JSON.parse(event.body || "{}");
    const d = (payload && payload.data) || {};

    // honeypot: silently drop bot submissions
    if (d["bot-field"]) return { statusCode: 200, body: "spam ignored" };

    const url = process.env.SUPABASE_URL, key = process.env.SUPABASE_SERVICE_KEY;
    if (!url || !key) { console.error("missing SUPABASE env vars"); return { statusCode: 200 }; }
    const sb = createClient(url, key, { auth: { persistSession: false } });

    const addr = (d.property_address || "").trim();
    const town = (d.town || "").trim();
    const name = (d.name || "").trim();
    const phone = (d.phone || "").trim();
    const email = (d.email || "").trim();
    const situation = (d.message || d.situation || d["cash-offer"] || "").trim();

    const norm = (addr || `${name}-${phone}`).toLowerCase().replace(/[^a-z0-9]/g, "");
    const lead = {
      source: "website_form",
      source_id: String(payload.id || norm || Date.now()).slice(0, 64),
      signal: "INBOUND_SELLER",
      lead_type: "inbound_seller",
      address: addr || `${name || "web lead"}${town ? " (" + town + ")" : ""}`,
      municipality: town ? town.toUpperCase() : null,
      state: "NJ",
      county: "bergen-nj",
      owner_name: name || null,
      urgency_score: 90, // inbound is the hottest lane — reachable + consented
      workflow_status: "new",
      enrichment_status: "inbound",
      do_not_contact: false,
      outreach_blocked: false,
      notes: `INBOUND website form (${payload.form_name || "form"}). ` +
             `Phone: ${phone || "n/a"} | Email: ${email || "n/a"} | ` +
             `Situation: ${situation || "n/a"}`,
      // Seller PROVIDED these -> express consent, not a scraped/DNC number.
      skip_trace_data: {
        matched: true, source: "inbound-form",
        emails: email ? [email] : [],
        phones: phone ? [{ number: phone, dnc: false, type: "self-provided", score: 100 }] : [],
      },
      raw: { website_form: d, form_name: payload.form_name, submitted_at: payload.created_at },
    };

    const { error } = await sb.from("leads")
      .upsert(lead, { onConflict: "source,source_id,signal" });
    if (error) console.error("supabase upsert error", error.message);
    return { statusCode: 200, body: "captured" };
  } catch (e) {
    console.error("submission-created error", e);
    return { statusCode: 200, body: "error-logged" }; // never break the form
  }
}
