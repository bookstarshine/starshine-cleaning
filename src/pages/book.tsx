// pages/book.tsx
import Head from "next/head";
import Link from "next/link";
import { FormEvent, useState } from "react";
import styles from "@/styles/BookPage.module.css";

type Category = "residential" | "commercial" | "";

type ResidentialService = "standard" | "deep" | "recurring" | "";
type CommercialService = "post_construction" | "commercial_space" | "turnover" | "";

type Frequency = "weekly" | "biweekly" | "monthly" | "";
type TimeWindow = "morning" | "afternoon" | "flexible";

type EntryMethod = "home" | "lockbox" | "key" | "garage" | "front_desk" | "other" | "";
type CommercialHours = "daytime" | "after_hours" | "weekends" | "flexible" | "";

// We only schedule Wed–Sun (Mon/Tue blocked)
type PreferredWeekday = "wednesday" | "thursday" | "friday" | "saturday" | "sunday" | "";

function dateMatchesPreferredWeekday(dateStr: string, weekday: PreferredWeekday) {
  if (!dateStr || !weekday) return false;

  // HTML date input returns YYYY-MM-DD. Parse into local date (avoid timezone drift).
  const [y, m, d] = dateStr.split("-").map(Number);
  if (!y || !m || !d) return false;

  const dt = new Date(y, m - 1, d);
  const dow = dt.getDay(); // 0 Sun ... 6 Sat

  const map: Record<Exclude<PreferredWeekday, "">, number> = {
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6,
    sunday: 0,
  };

  return map[weekday as Exclude<PreferredWeekday, "">] === dow;
}

// ---------- Style objects hoisted to module scope (avoid recreating every render) ----------
const weekdayGridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(7, minmax(0, 1fr))",
  gap: "clamp(0.25rem, 1.2vw, 0.5rem)",
  width: "100%",
  maxWidth: "100%",
};

const disabledDayButtonStyle: React.CSSProperties = {
  opacity: 0.35,
  width: "100%",
  minWidth: 0,
  boxSizing: "border-box",
  padding: "clamp(0.4rem, 1.6vw, 0.55rem) 0",
  fontSize: "clamp(0.78rem, 2.2vw, 0.92rem)",
  borderRadius: "var(--radius)",
  border: "1px solid var(--color-border)",
  background: "var(--color-surface)",
  cursor: "not-allowed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  overflow: "hidden",
};

function dayButtonStyle(selected: boolean, submitting: boolean): React.CSSProperties {
  return {
    width: "100%",
    minWidth: 0,
    boxSizing: "border-box",
    padding: "clamp(0.4rem, 1.6vw, 0.55rem) 0",
    fontSize: "clamp(0.78rem, 2.2vw, 0.92rem)",
    borderRadius: "var(--radius)",
    border: "1px solid var(--color-border)",
    background: selected
      ? "color-mix(in srgb, var(--color-accent) 14%, var(--color-surface))"
      : "var(--color-surface)",
    boxShadow: "var(--shadow-sm)",
    fontWeight: selected ? 700 : 600,
    cursor: submitting ? "not-allowed" : "pointer",
    opacity: submitting ? 0.7 : 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    overflow: "hidden",
  };
}

const disabledHintStyle: React.CSSProperties = { marginTop: "0.5rem" };

const alertBoxStyle: React.CSSProperties = {
  border: "1px solid var(--color-border)",
  padding: "0.75rem 0.9rem",
  borderRadius: "var(--radius)",
  background: "var(--color-surface)",
  marginBottom: "1rem",
};

const badDateHintStyle: React.CSSProperties = { color: "var(--color-danger, #b00020)" };

const checkboxLabelStyle: React.CSSProperties = {
  display: "flex",
  gap: "0.5rem",
  alignItems: "flex-start",
  fontWeight: 400,
};

const successWrapStyle: React.CSSProperties = {
  textAlign: "center",
  padding: "1.5rem 0",
};

const successTitleStyle: React.CSSProperties = {
  color: "var(--color-accent)",
  fontWeight: 700,
  marginBottom: "0.75rem",
};

const successHintStyle: React.CSSProperties = {
  maxWidth: "520px",
  margin: "0 auto 1.75rem",
};

const successBtnStyle: React.CSSProperties = {
  fontSize: "1rem",
  padding: "0.65rem 1.2rem",
};

// Keep list outside render
const weekdayOptions: Array<[PreferredWeekday, string]> = [
  ["wednesday", "Wed"],
  ["thursday", "Thu"],
  ["friday", "Fri"],
  ["saturday", "Sat"],
  ["sunday", "Sun"],
];

// ----------------------------------------------------------------------------------------

export default function BookPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const [form, setForm] = useState({
    // Contact (both)
    name: "",
    email: "",
    phone: "",
    address: "",

    // Category
    category: "" as Category,

    // Services (conditional)
    residentialService: "" as ResidentialService,
    commercialService: "" as CommercialService,

    // Residential only
    bedrooms: 2,
    bathrooms: 1,

    // Recurring only (residential)
    frequency: "biweekly" as Frequency,

    // Schedule (both)
    preferredWeekday: "" as PreferredWeekday,
    preferredDate: "",
    timeWindow: "morning" as TimeWindow,

    // Residential logistics (structured)
    entryMethod: "" as EntryMethod,
    accessDetails: "",
    petsInHome: "" as "yes" | "no" | "",
    parkingNotes: "",
    priorityAreas: "",

    // Add-ons (Residential only)
    addOnLaundry: false,
    addOnPlantCare: false,
    addOnCarpetExtraction: false,

    // Commercial only (structured)
    businessName: "",
    onSiteContact: "",
    approximateSqFt: "",
    numberOfRestrooms: "",
    commercialFrequency: "weekly" as Frequency,
    preferredServiceHours: "" as CommercialHours,

    // Notes (optional, both)
    notes: "",

    // Terms
    acceptedServiceTerms: false,
  });

  const isResidential = form.category === "residential";
  const isCommercial = form.category === "commercial";
  const isTurnover = isCommercial && form.commercialService === "turnover";

  // Reset dependent fields when switching category (prevents stale selections)
  function setCategory(next: Category) {
    setForm((prev) => ({
      ...prev,
      category: next,
      residentialService: "",
      commercialService: "",

      // Residential
      frequency: "biweekly",
      addOnLaundry: next === "residential" ? prev.addOnLaundry : false,
      addOnPlantCare: next === "residential" ? prev.addOnPlantCare : false,
      addOnCarpetExtraction: next === "residential" ? prev.addOnCarpetExtraction : false,
      entryMethod: next === "residential" ? prev.entryMethod : "",
      accessDetails: next === "residential" ? prev.accessDetails : "",
      petsInHome: next === "residential" ? prev.petsInHome : "",
      parkingNotes: next === "residential" ? prev.parkingNotes : "",
      priorityAreas: next === "residential" ? prev.priorityAreas : "",

      // Commercial
      businessName: next === "commercial" ? prev.businessName : "",
      onSiteContact: next === "commercial" ? prev.onSiteContact : "",
      approximateSqFt: next === "commercial" ? prev.approximateSqFt : "",
      numberOfRestrooms: next === "commercial" ? prev.numberOfRestrooms : "",
      commercialFrequency: "weekly",
      preferredServiceHours: next === "commercial" ? prev.preferredServiceHours : "",
    }));
  }

  const isRecurringResidential =
    form.category === "residential" && form.residentialService === "recurring";

  // Label swap: "Start date" for recurring, otherwise "Preferred date"
  const dateLabel = isRecurringResidential ? "Start date" : "Preferred date";

  // Required selection depends on category
  const serviceIsSelected =
    (isResidential && form.residentialService !== "") ||
    (isCommercial && form.commercialService !== "");

  // Schedule validation: require weekday selection, then date must match
  const scheduleReady =
    form.preferredWeekday !== "" &&
    form.preferredDate !== "" &&
    dateMatchesPreferredWeekday(form.preferredDate, form.preferredWeekday);

  // Access required for Residential AND for Commercial Turnovers
  const accessRequired = isResidential || isTurnover;

  const accessReady =
    !accessRequired || (form.entryMethod !== "" && form.accessDetails.trim().length > 0);

  // Pets required only for Residential (not for turnovers)
  const petsReady = !isResidential || form.petsInHome !== "";

  // Commercial business details required only for non-turnover commercial
  const commercialDetailsReady =
    !isCommercial ||
    isTurnover ||
    (form.businessName.trim().length > 0 &&
      form.onSiteContact.trim().length > 0 &&
      form.approximateSqFt.trim().length > 0 &&
      form.numberOfRestrooms.trim().length > 0 &&
      form.preferredServiceHours !== "");

  const canSubmit =
    serviceIsSelected &&
    scheduleReady &&
    form.acceptedServiceTerms &&
    accessReady &&
    petsReady &&
    commercialDetailsReady;

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitError(null);

    if (submitting) return;
    setSubmitting(true);

    try {
      const params = new URLSearchParams();
      Object.entries(form).forEach(([key, value]) => {
        params.append(key, String(value));
      });

      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbx0jFfXMe0W5DnBVawAcYCIFK8uaFcFqclTD0sJLBVTxK9CE93lSkDIlHwUQJnalyAD/exec",
        {
          method: "POST",
          // IMPORTANT: do NOT set Content-Type manually; fetch will set it correctly for URLSearchParams
          body: params,
        }
      );

      const data = await res.json().catch(() => ({}));
      if (!res.ok || (data as any)?.ok === false)
        throw new Error((data as any)?.error || "Submit failed");

      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setSubmitError(
        "Sorry — something went wrong submitting your request. Please try again, or email bookstarshine@gmail.com."
      );
      setSubmitted(false);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <Head>
        <title>Book | Starshine Cleaning</title>
        <meta
          name="description"
          content="Book residential or commercial cleaning services in Park City, Utah. Request deep cleaning, recurring cleaning, or vacation rental cleaning online."
        />

        {/* Open Graph */}
        <meta property="og:title" content="Book a Cleaning | Starshine Cleaning" />
        <meta
          property="og:description"
          content="Request a cleaning in under a minute. Choose your service and preferred schedule, and we’ll confirm details within 24 hours."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bookstarshine.com/book" />
        <meta property="og:image" content="https://bookstarshine.com/images/kitchen.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Book a Cleaning | Starshine Cleaning" />
        <meta
          name="twitter:description"
          content="Request a cleaning in under a minute. Choose your service and preferred schedule, and we’ll confirm details within 24 hours."
        />
        <meta name="twitter:image" content="https://bookstarshine.com/images/kitchen.webp" />
      </Head>

      <div className={styles.page}>
        <main className={styles.container}>
          <header className={styles.hero}>
            <h1 className={styles.h1}>Book a Cleaning</h1>

            <p className={styles.subhead}>
              Starshine Cleaning books residential and commercial cleaning services in Park City,
              Utah and nearby Summit County communities.
            </p>
          </header>

          <section className={styles.card}>
            {!submitted ? (
              <form onSubmit={onSubmit} className={styles.form} aria-label="Booking form">
                {submitError ? (
                  <div role="alert" style={alertBoxStyle}>
                    {submitError}
                  </div>
                ) : null}

                {/* SERVICE */}
                <div className={styles.sectionHeader}>
                  <h2 className={styles.h2}>Service</h2>
                  <p className={styles.hint}>
                    Choose residential or commercial, then pick the service type.
                  </p>
                </div>

                <div className={styles.grid2}>
                  {/* Category */}
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="category">
                      Category
                    </label>
                    <select
                      id="category"
                      className={styles.input}
                      value={form.category}
                      onChange={(e) => setCategory(e.target.value as Category)}
                      required
                      disabled={submitting}
                    >
                      <option value="" disabled>
                        Select a category
                      </option>
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                    </select>
                  </div>

                  {/* Service type (depends on category) */}
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="serviceType">
                      Service type
                    </label>

                    {form.category === "" ? (
                      <select
                        id="serviceType"
                        className={styles.input}
                        value=""
                        onChange={() => {}}
                        disabled
                        required
                      >
                        <option value="">Select a category first</option>
                      </select>
                    ) : isResidential ? (
                      <select
                        id="serviceType"
                        className={styles.input}
                        value={form.residentialService}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            residentialService: e.target.value as ResidentialService,
                          })
                        }
                        required
                        disabled={submitting}
                      >
                        <option value="" disabled>
                          Select a service
                        </option>
                        <option value="standard">Standard Clean</option>
                        <option value="deep">Deep Clean</option>
                        <option value="recurring">Recurring Clean</option>
                      </select>
                    ) : (
                      <select
                        id="serviceType"
                        className={styles.input}
                        value={form.commercialService}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            commercialService: e.target.value as CommercialService,
                          })
                        }
                        required
                        disabled={submitting}
                      >
                        <option value="" disabled>
                          Select a service
                        </option>
                        <option value="post_construction">Post-Construction Cleaning</option>
                        <option value="commercial_space">Commercial Space Cleaning</option>
                        <option value="turnover">Vacation Rental Turnover</option>
                      </select>
                    )}
                  </div>
                </div>

                {/* Conditional frequency (Residential recurring only) */}
                {isRecurringResidential ? (
                  <div className={styles.grid2}>
                    <div className={styles.field}>
                      <label className={styles.label} htmlFor="frequency">
                        Frequency
                      </label>
                      <select
                        id="frequency"
                        className={styles.input}
                        value={form.frequency}
                        onChange={(e) =>
                          setForm({ ...form, frequency: e.target.value as Frequency })
                        }
                        required
                        disabled={submitting}
                      >
                        <option value="weekly">Weekly</option>
                        <option value="biweekly">Biweekly</option>
                        <option value="monthly">Monthly</option>
                      </select>
                    </div>
                    <div className={styles.field} aria-hidden="true" />
                  </div>
                ) : null}

                {/* ADD-ONS (Residential only) */}
                {isResidential ? (
                  <>
                    <hr className={styles.rule} />
                    <div className={styles.sectionHeader}>
                      <h2 className={styles.h2}>Add-Ons</h2>
                      <p className={styles.hint}>Optional add-ons for residential cleanings.</p>
                    </div>

                    <div className={styles.grid2}>
                      <div className={styles.field}>
                        <label style={checkboxLabelStyle}>
                          <input
                            type="checkbox"
                            checked={form.addOnLaundry}
                            onChange={(e) =>
                              setForm({ ...form, addOnLaundry: e.target.checked })
                            }
                            disabled={submitting}
                          />
                          <span>Laundry (wash, dry, fold if machines are present)</span>
                        </label>
                      </div>

                      <div className={styles.field}>
                        <label style={checkboxLabelStyle}>
                          <input
                            type="checkbox"
                            checked={form.addOnPlantCare}
                            onChange={(e) =>
                              setForm({ ...form, addOnPlantCare: e.target.checked })
                            }
                            disabled={submitting}
                          />
                          <span>Plant care (watering and light cleanup)</span>
                        </label>
                      </div>

                      <div className={styles.field}>
                        <label style={checkboxLabelStyle}>
                          <input
                            type="checkbox"
                            checked={form.addOnCarpetExtraction}
                            onChange={(e) =>
                              setForm({ ...form, addOnCarpetExtraction: e.target.checked })
                            }
                            disabled={submitting}
                          />
                          <span>Carpet extraction (hot water extraction for high-traffic areas)</span>
                        </label>
                      </div>
                    </div>
                  </>
                ) : null}

                <hr className={styles.rule} />

                {/* SCHEDULING */}
                <div className={styles.sectionHeader}>
                  <h2 className={styles.h2}>Schedule</h2>
                  <p className={styles.hint}>
                    We’ll do our best to match your preference. Final timing is confirmed after
                    booking.
                  </p>
                </div>

                {/* Preferred weekday */}
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="preferredWeekday">
                    Preferred day
                  </label>

                  <div style={weekdayGridStyle}>
                    <button
                      type="button"
                      disabled
                      aria-disabled="true"
                      style={disabledDayButtonStyle}
                      title="We do not schedule cleanings on Mondays"
                    >
                      Mon
                    </button>

                    <button
                      type="button"
                      disabled
                      aria-disabled="true"
                      style={disabledDayButtonStyle}
                      title="We do not schedule cleanings on Tuesdays"
                    >
                      Tue
                    </button>

                    {weekdayOptions.map(([value, label]) => {
                      const selected = form.preferredWeekday === value;
                      return (
                        <button
                          key={value}
                          type="button"
                          disabled={submitting}
                          onClick={() =>
                            setForm((prev) => ({
                              ...prev,
                              preferredWeekday: value,
                              preferredDate: "",
                            }))
                          }
                          aria-pressed={selected}
                          style={dayButtonStyle(selected, submitting)}
                        >
                          {label}
                        </button>
                      );
                    })}
                  </div>

                  <p className={styles.hint} style={disabledHintStyle}>
                    We schedule cleanings Wednesday–Sunday.
                  </p>
                </div>

                {/* Preferred date */}
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="preferredDate">
                    {dateLabel}
                  </label>
                  <input
                    id="preferredDate"
                    className={styles.input}
                    type="date"
                    value={form.preferredDate}
                    onChange={(e) => setForm({ ...form, preferredDate: e.target.value })}
                    required
                    disabled={!form.preferredWeekday || submitting}
                  />

                  {!form.preferredWeekday ? (
                    <p className={styles.hint}>Select a preferred day first.</p>
                  ) : form.preferredDate &&
                    !dateMatchesPreferredWeekday(form.preferredDate, form.preferredWeekday) ? (
                    <p className={styles.hint} style={badDateHintStyle}>
                      That date doesn’t match your selected day. Please choose a{" "}
                      {form.preferredWeekday}.
                    </p>
                  ) : null}
                </div>

                {/* Time window */}
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="timeWindow">
                    Time window
                  </label>
                  <select
                    id="timeWindow"
                    className={styles.input}
                    value={form.timeWindow}
                    onChange={(e) =>
                      setForm({ ...form, timeWindow: e.target.value as TimeWindow })
                    }
                    required
                    disabled={submitting}
                  >
                    <option value="morning">Morning (8–12)</option>
                    <option value="afternoon">Afternoon (12–4)</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>

                <hr className={styles.rule} />

                {/* HOME (Residential only) */}
                {isResidential ? (
                  <>
                    <div className={styles.sectionHeader}>
                      <h2 className={styles.h2}>Home</h2>
                      <p className={styles.hint}>This helps us plan appropriately.</p>
                    </div>

                    <div className={styles.grid2}>
                      <div className={styles.field}>
                        <label className={styles.label} htmlFor="bedrooms">
                          Bedrooms{" "}
                          <span className={styles.muted}>(living room &amp; kitchen included)</span>
                        </label>
                        <input
                          id="bedrooms"
                          className={styles.input}
                          type="number"
                          min={0}
                          step={1}
                          value={form.bedrooms}
                          onChange={(e) =>
                            setForm({ ...form, bedrooms: Number(e.target.value) })
                          }
                          required
                          disabled={submitting}
                        />
                      </div>

                      <div className={styles.field}>
                        <label className={styles.label} htmlFor="bathrooms">
                          Bathrooms <span className={styles.muted}>(round half baths up)</span>
                        </label>
                        <input
                          id="bathrooms"
                          className={styles.input}
                          type="number"
                          min={0}
                          step={1}
                          value={form.bathrooms}
                          onChange={(e) =>
                            setForm({ ...form, bathrooms: Number(e.target.value) })
                          }
                          required
                          disabled={submitting}
                        />
                      </div>
                    </div>

                    <hr className={styles.rule} />
                  </>
                ) : null}

                {/* ACCESS — Residential OR Commercial Turnover */}
                {accessRequired ? (
                  <>
                    <div className={styles.sectionHeader}>
                      <h2 className={styles.h2}>Access</h2>
                      <p className={styles.hint}>
                        This keeps your booking from stalling while we chase keys.
                      </p>
                    </div>

                    <div className={styles.grid2}>
                      <div className={styles.field}>
                        <label className={styles.label} htmlFor="entryMethod">
                          Entry method
                        </label>
                        <select
                          id="entryMethod"
                          className={styles.input}
                          value={form.entryMethod}
                          onChange={(e) =>
                            setForm({ ...form, entryMethod: e.target.value as EntryMethod })
                          }
                          required
                          disabled={submitting}
                        >
                          <option value="" disabled>
                            Select one
                          </option>
                          <option value="home">Home / meet in person</option>
                          <option value="lockbox">Lockbox</option>
                          <option value="key">Key</option>
                          <option value="garage">Garage code</option>
                          <option value="front_desk">Front desk / concierge</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      {/* Pets only for Residential */}
                      {isResidential ? (
                        <div className={styles.field}>
                          <label className={styles.label} htmlFor="petsInHome">
                            Pets in home?
                          </label>
                          <select
                            id="petsInHome"
                            className={styles.input}
                            value={form.petsInHome}
                            onChange={(e) =>
                              setForm({
                                ...form,
                                petsInHome: e.target.value as "yes" | "no" | "",
                              })
                            }
                            required
                            disabled={submitting}
                          >
                            <option value="" disabled>
                              Select one
                            </option>
                            <option value="no">No</option>
                            <option value="yes">Yes</option>
                          </select>
                        </div>
                      ) : (
                        <div className={styles.field} aria-hidden="true" />
                      )}

                      <div className={`${styles.field} ${styles.span2}`}>
                        <label className={styles.label} htmlFor="accessDetails">
                          Access details
                        </label>
                        <input
                          id="accessDetails"
                          className={styles.input}
                          value={form.accessDetails}
                          onChange={(e) => setForm({ ...form, accessDetails: e.target.value })}
                          placeholder="Lockbox location/code, entry instructions, where to find key, alarm notes, etc."
                          required
                          disabled={submitting}
                        />
                      </div>

                      <div className={`${styles.field} ${styles.span2}`}>
                        <label className={styles.label} htmlFor="parkingNotes">
                          Parking notes <span className={styles.muted}>(optional)</span>
                        </label>
                        <input
                          id="parkingNotes"
                          className={styles.input}
                          value={form.parkingNotes}
                          onChange={(e) => setForm({ ...form, parkingNotes: e.target.value })}
                          placeholder="Gate code, garage instructions, best place to park, etc."
                          disabled={submitting}
                        />
                      </div>

                      <div className={`${styles.field} ${styles.span2}`}>
                        <label className={styles.label} htmlFor="priorityAreas">
                          Priority areas <span className={styles.muted}>(optional)</span>
                        </label>
                        <input
                          id="priorityAreas"
                          className={styles.input}
                          value={form.priorityAreas}
                          onChange={(e) => setForm({ ...form, priorityAreas: e.target.value })}
                          placeholder="Anything you want us to focus on (e.g., kitchen floors, showers, guest rooms)."
                          disabled={submitting}
                        />
                      </div>
                    </div>

                    <hr className={styles.rule} />
                  </>
                ) : null}

                {/* COMMERCIAL DETAILS (non-turnover only) */}
                {isCommercial && !isTurnover ? (
                  <>
                    <div className={styles.sectionHeader}>
                      <h2 className={styles.h2}>Business Details</h2>
                      <p className={styles.hint}>
                        Commercial jobs are confirmed after we review scope and access details.
                      </p>
                    </div>

                    <div className={styles.grid2}>
                      <div className={styles.field}>
                        <label className={styles.label} htmlFor="businessName">
                          Business name
                        </label>
                        <input
                          id="businessName"
                          className={styles.input}
                          value={form.businessName}
                          onChange={(e) => setForm({ ...form, businessName: e.target.value })}
                          required
                          disabled={submitting}
                        />
                      </div>

                      <div className={styles.field}>
                        <label className={styles.label} htmlFor="onSiteContact">
                          On-site contact
                        </label>
                        <input
                          id="onSiteContact"
                          className={styles.input}
                          value={form.onSiteContact}
                          onChange={(e) => setForm({ ...form, onSiteContact: e.target.value })}
                          placeholder="Name / role"
                          required
                          disabled={submitting}
                        />
                      </div>

                      <div className={styles.field}>
                        <label className={styles.label} htmlFor="approximateSqFt">
                          Approx. sq ft
                        </label>
                        <input
                          id="approximateSqFt"
                          className={styles.input}
                          value={form.approximateSqFt}
                          onChange={(e) => setForm({ ...form, approximateSqFt: e.target.value })}
                          placeholder="e.g., 2,500"
                          required
                          disabled={submitting}
                        />
                      </div>

                      <div className={styles.field}>
                        <label className={styles.label} htmlFor="numberOfRestrooms">
                          # of restrooms
                        </label>
                        <input
                          id="numberOfRestrooms"
                          className={styles.input}
                          value={form.numberOfRestrooms}
                          onChange={(e) =>
                            setForm({ ...form, numberOfRestrooms: e.target.value })
                          }
                          placeholder="e.g., 2"
                          required
                          disabled={submitting}
                        />
                      </div>

                      <div className={styles.field}>
                        <label className={styles.label} htmlFor="commercialFrequency">
                          Frequency
                        </label>
                        <select
                          id="commercialFrequency"
                          className={styles.input}
                          value={form.commercialFrequency}
                          onChange={(e) =>
                            setForm({
                              ...form,
                              commercialFrequency: e.target.value as Frequency,
                            })
                          }
                          required
                          disabled={submitting}
                        >
                          <option value="weekly">Weekly</option>
                          <option value="biweekly">Biweekly</option>
                          <option value="monthly">Monthly</option>
                        </select>
                      </div>

                      <div className={styles.field}>
                        <label className={styles.label} htmlFor="preferredServiceHours">
                          Preferred service hours
                        </label>
                        <select
                          id="preferredServiceHours"
                          className={styles.input}
                          value={form.preferredServiceHours}
                          onChange={(e) =>
                            setForm({
                              ...form,
                              preferredServiceHours: e.target.value as CommercialHours,
                            })
                          }
                          required
                          disabled={submitting}
                        >
                          <option value="" disabled>
                            Select one
                          </option>
                          <option value="daytime">Daytime</option>
                          <option value="after_hours">After hours</option>
                          <option value="weekends">Weekends</option>
                          <option value="flexible">Flexible</option>
                        </select>
                      </div>
                    </div>

                    <hr className={styles.rule} />
                  </>
                ) : null}

                {/* CONTACT */}
                <div className={styles.sectionHeader}>
                  <h2 className={styles.h2}>Contact</h2>
                  <p className={styles.hint}>
                    Confirm your details so that we can contact you with next steps.
                  </p>
                </div>

                <div className={styles.grid2}>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="name">
                      Name
                    </label>
                    <input
                      id="name"
                      className={styles.input}
                      autoComplete="name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                      disabled={submitting}
                    />
                  </div>

                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="phone">
                      Phone
                    </label>
                    <input
                      id="phone"
                      className={styles.input}
                      autoComplete="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      required
                      disabled={submitting}
                    />
                  </div>

                  <div className={`${styles.field} ${styles.span2}`}>
                    <label className={styles.label} htmlFor="email">
                      Email
                    </label>
                    <input
                      id="email"
                      className={styles.input}
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                      disabled={submitting}
                    />
                  </div>

                  <div className={`${styles.field} ${styles.span2}`}>
                    <label className={styles.label} htmlFor="address">
                      Address
                    </label>
                    <input
                      id="address"
                      className={styles.input}
                      autoComplete="street-address"
                      value={form.address}
                      onChange={(e) => setForm({ ...form, address: e.target.value })}
                      required
                      disabled={submitting}
                    />
                  </div>
                </div>

                {/* NOTES */}
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="notes">
                    Notes <span className={styles.muted}>(optional)</span>
                  </label>
                  <textarea
                    id="notes"
                    className={styles.textarea}
                    rows={4}
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    placeholder="Anything else we should know."
                    disabled={submitting}
                  />
                </div>

                <div className={styles.footer}>
                  {/* TERMS CHECKBOX */}
                  <div className={styles.field} style={{ marginBottom: "1.25rem" }}>
                    <label style={checkboxLabelStyle}>
                      <input
                        type="checkbox"
                        checked={form.acceptedServiceTerms}
                        onChange={(e) =>
                          setForm({ ...form, acceptedServiceTerms: e.target.checked })
                        }
                        required
                        disabled={submitting}
                      />
                      <span>
                        I agree to the{" "}
                        <strong>
                          <Link href="/policy" target="_blank" rel="noopener noreferrer">
                            Terms of Service &amp; Cancellation Policy
                          </Link>
                        </strong>
                        .
                      </span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className={`btn btnPrimary ${styles.submitBtn}`}
                    disabled={!canSubmit || submitting}
                    title={
                      !serviceIsSelected
                        ? "Select a service to continue"
                        : !scheduleReady
                        ? "Select a preferred day, then choose a matching date"
                        : accessRequired && !accessReady
                        ? "Please complete access details (entry method + access details)"
                        : isResidential && !petsReady
                        ? "Please tell us whether pets are in the home"
                        : isCommercial && !isTurnover && !commercialDetailsReady
                        ? "Please complete business details (sq ft, restrooms, hours, frequency)"
                        : !form.acceptedServiceTerms
                        ? "Please accept the terms to continue"
                        : submitting
                        ? "Submitting..."
                        : undefined
                    }
                  >
                    {submitting ? "Submitting..." : "Book Now"}
                  </button>
                </div>
              </form>
            ) : (
              <div
                className={styles.success}
                role="status"
                aria-live="polite"
                style={successWrapStyle}
              >
                <h2 style={successTitleStyle}>Thank you for your interest in Starshine Cleaning</h2>

                <p className={styles.hint} style={successHintStyle}>
                  We have received your request and will get back to you within 24 hours to confirm
                  access details and payment.
                </p>

                <button
                  type="button"
                  className="btn btnSecondary"
                  style={successBtnStyle}
                  onClick={() => {
                    setSubmitted(false);
                    setSubmitError(null);
                  }}
                >
                  Submit another request
                </button>
              </div>
            )}
          </section>

          {/* OUTSIDE THE FORM */}
          <p className={styles.altContact}>
            Though inquiries submitted through the booking form are generally reviewed more promptly,
            we can also be reached at{" "}
            <a href="mailto:bookstarshine@gmail.com">bookstarshine@gmail.com</a>.
          </p>
        </main>
      </div>
    </>
  );
}