export const siteContent = {
  primaryBrand: "Smile Detroit",
  businessName: "Dental Emergency of Royal Oak by Smile Detroit",
  doctorName: "Dr. Anthonio McFadden, DDS",
  domain: "smiledet.com",
  recognition: {
  magazineFeatureHref:
    "https://issuu.com/ndapublications/docs/40_under_40_-_final",
},
  slogan: "We are here when no one else is.",
  positioning: "Advanced Emergency Dentistry for Working People",
  signaturePromise: "We Show You What We See.",
  clinicalPromise:
    "We Listen for the Pattern. We Confirm with Evidence. We Show You What We See.",
  philosophy:
    "Careful confidence: confident enough to act, humble enough to consult.",

  contact: {
  phoneDisplay: "248-430-8307",
  phoneHref: "tel:+12484308307",
  addressLine1: "809 W 11 Mile Road",
  addressLine2: "Royal Oak, MI 48067",
  hoursLine1: "Open 24 Hours",
  hoursLine2: "7 Days a Week",
  googleMapsHref:
    "https://www.google.com/maps/search/?api=1&query=809%20W%2011%20Mile%20Road%2C%20Royal%20Oak%2C%20MI%2048067",
  appleMapsHref:
    "https://maps.apple.com/?q=809%20W%2011%20Mile%20Road%2C%20Royal%20Oak%2C%20MI%2048067",
},
 reviews: {
  googleReviewsHref:
    "https://www.google.com/search?q=Dental+Emergency+of+Royal+Oak+by+Smile+Detroit&stick=H4sIAAAAAAAA_-NgU1I1qLCwMDJJTjMxTTYyMLGwTDK0MqhINEk1tzBMNDczNDA1NrY0XsSq55KaV5KYo-Cam1qUnpqXXKmQn6YQlF8JFPJPzFZIqlQIzs3MSVVwSS0pys8sAQCrfgoHWgAAAA&hl=en&mat=CYucExkIkgJRElcBa0lj_wDpla3G_e1PIZgTexd80IpQY-07RmBYpiPSypB4JQAp0hK1lLA7RFlK6mhHlHikFzlweuwWDNLBFjow1YnYECZBEWaPo638Yqdk4GK4TymHslA&authuser=1#mpd=~5837388630503693451/customers/reviews",

  googleLeaveReviewHref:
    "https://g.page/r/CZMzBWGngeekEAE/review",
},
  nav: [
  { label: "Welcome", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Emergency Care", href: "/emergency-care" },
  { label: "Symptom Guide", href: "/symptom-guide" },
  { label: "Fees & Payment", href: "/fees-payment" },
  { label: "About", href: "/about" },
],

  hero: {
    eyebrow: "24/7 Concierge Dental Emergency • Royal Oak, MI",
    headline: "Advanced Emergency Dentistry for Working People",
    subheadline:
      "Dental emergencies do not wait for business hours. Smile Detroit was built for patients who need answers, relief, and treatment options outside traditional dental hours.",
    body:
      "We use focused symptom questions, radiographs, images, clinical testing, and visual education to help you understand what is happening before you decide.",
    primaryCta: "Call Now",
    secondaryCta: "Start Symptom Guide",
    tertiaryCta: "Learn Before You Decide",
  },

  learnSections: [
    {
      title: "Learn Before You Decide",
      description:
        "Dental emergencies often feel overwhelming because patients are told what they need without understanding why. At Smile Detroit, education is part of the treatment process.",
    },
    {
      title: "We Show You What We See",
      description:
        "Your radiographs, intraoral images, clinical findings, diagnosis, prognosis, and treatment options are reviewed with you so your decision is based on understanding.",
    },
    {
      title: "Careful Confidence",
      description:
        "Recommendations are based on evidence, imaging, clinical testing, patient health, risk, prognosis, and the patient’s goals.",
    },
  ],

  emergencyServices: [
    {
      title: "Tooth Pain",
      description:
        "Sharp, throbbing, lingering, biting, or spontaneous pain explained through symptoms, imaging, and testing.",
    },
    {
      title: "Dental Abscess / Swelling",
      description:
        "Evaluation for gum swelling, facial swelling, infection concerns, and urgent red-flag symptoms.",
    },
    {
      title: "Broken Tooth",
      description:
        "Care for chipped teeth, fractured teeth, broken crowns, and teeth broken near the gumline.",
    },
    {
      title: "Wisdom Teeth",
      description:
        "Evaluation of wisdom tooth pain, inflammation, impaction, swelling, and surgical treatment options.",
    },
    {
      title: "Root Canals",
      description:
        "Diagnosis and treatment planning for nerve inflammation, infection, lingering pain, and tooth preservation.",
    },
    {
      title: "Extractions",
      description:
        "Simple and surgical extraction options explained clearly, including risks, aftercare, and replacement planning.",
    },
  ],

  symptomQuestions: [
    "What is the main problem?",
    "How long has this been happening?",
    "What does the pain feel like?",
    "What triggers the pain?",
    "Does the pain linger?",
    "Is there swelling?",
    "Is the tooth broken?",
    "Has the tooth had dental work?",
    "Do you have a primary dentist?",
    "What are you most worried about?",
  ],

  payment: {
    title: "Fees & Payment",
    examFee: "$375 Emergency Exam Fee",
    note: "Treatment fees are separate. Payment options are available.",
  },

  primaryDentist: {
    title: "We Respect Your Primary Dentist",
    description:
      "Many patients come to Smile Detroit because they have an urgent problem and their regular dentist is closed, unavailable, or unable to see them quickly. Our goal is not to replace your dentist. We diagnose the emergency, explain what is happening, stabilize the situation when possible, and help you understand your options.",
  },
} as const;