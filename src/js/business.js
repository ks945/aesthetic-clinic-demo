/*
|--------------------------------------------------------------------------
| BUSINESS CONFIGURATION
|--------------------------------------------------------------------------
| Change this file to turn this template into a different clinic website.
|
| The HTML/CSS/JS should NOT contain business-specific information.
|--------------------------------------------------------------------------
*/

export const business = {

  // -----------------------------------------------------------------------
  // BRAND
  // -----------------------------------------------------------------------

  name: "Your Aesthetic Clinic",

  shortName: "Your Clinic",

  tagline: "Modern aesthetics. Thoughtfully done.",

  logo: {
    type: "letter",
    value: "Y"
  },


  // -----------------------------------------------------------------------
  // SEO / BROWSER
  // -----------------------------------------------------------------------

  seo: {
    title: "Your Aesthetic Clinic | Modern Aesthetic Medicine",

    description:
      "Personalized aesthetic treatments designed around your features, goals, and lifestyle.",

    keywords:
      "aesthetic clinic, medical aesthetics, skin treatments, injectables, laser treatments"
  },


  // -----------------------------------------------------------------------
  // HERO
  // -----------------------------------------------------------------------

  hero: {

    eyebrow: "Aesthetic medicine",

    titleLine1: "Subtle changes.",

    titleLine2: "Confident results.",

    description:
      "Personalized aesthetic treatments designed around your features, your goals, and what feels right for you.",

    primaryButton: "Book a consultation",

    secondaryButton: "Explore treatments",

    note:
      "Consultations are personalized to you",

    image:
      "/assets/hero.jpg"
  },


  // -----------------------------------------------------------------------
  // LOCATION
  // -----------------------------------------------------------------------

  location: {

    city: "Your City",

    country: "Your Country",

    short: "Your City",

    address: "Your City, Your Country",

    mapUrl:
      "https://maps.google.com/"
  },


  // -----------------------------------------------------------------------
  // CONTACT
  // -----------------------------------------------------------------------
  //
  // IMPORTANT:
  // phone      = machine-readable
  // displayPhone = what the customer sees
  //
  // Never hardcode phone numbers in HTML.
  // -----------------------------------------------------------------------

  contact: {

    phone: "+9613XXXXXX",

    displayPhone: "03 XXX XXX",

    whatsapp: "9613XXXXXX",

    email: "example@gmail.com",

    instagram: "@yourclinic",

    instagramUrl:
      "https://instagram.com/",

    facebook: "",

    facebookUrl: "",

    bookingUrl: "#consultation"
  },


  // -----------------------------------------------------------------------
  // OPENING HOURS
  // -----------------------------------------------------------------------

  hours: [

    {
      day: "Monday",
      hours: "09:00 – 19:00"
    },

    {
      day: "Tuesday",
      hours: "09:00 – 19:00"
    },

    {
      day: "Wednesday",
      hours: "09:00 – 19:00"
    },

    {
      day: "Thursday",
      hours: "09:00 – 19:00"
    },

    {
      day: "Friday",
      hours: "09:00 – 19:00"
    },

    {
      day: "Saturday",
      hours: "10:00 – 16:00"
    },

    {
      day: "Sunday",
      hours: "Closed"
    }

  ],


  // -----------------------------------------------------------------------
  // NAVIGATION
  // -----------------------------------------------------------------------

  navigation: {

    treatments: "Treatments",

    results: "Results",

    about: "About",

    faq: "FAQ",

    booking: "Book a consultation"
  },


  // -----------------------------------------------------------------------
  // INTRO SECTION
  // -----------------------------------------------------------------------

  intro: {

    eyebrow: "A more considered approach",

    titleLine1: "Look refreshed.",

    titleLine2: "Still look like you.",

    description:
      "From skin quality to facial balance, every treatment starts with understanding what you want to improve — not simply choosing a procedure.",

    button: "Meet the clinic"
  },


  // -----------------------------------------------------------------------
  // CONCERNS
  // -----------------------------------------------------------------------

  concerns: {

    eyebrow: "Start with what you want to change",

    title: "What can we help with?",

    description:
      "Not sure which treatment is right for you? That is exactly what your consultation is for.",

    items: [

      {
        title: "Fine lines & wrinkles",

        image:
          "/assets/concern-wrinkles.jpg",

        link: "#treatments"
      },

      {
        title: "Skin texture & scars",

        image:
          "/assets/concern-texture.jpg",

        link: "#treatments"
      },

      {
        title: "Pigmentation & tone",

        image:
          "/assets/concern-pigmentation.jpg",

        link: "#treatments"
      },

      {
        title: "Unwanted hair",

        image:
          "/assets/concern-hair.jpg",

        link: "#treatments"
      }

    ]
  },


  // -----------------------------------------------------------------------
  // TREATMENTS
  // -----------------------------------------------------------------------

  treatments: {

    eyebrow: "Treatments",

    title: "Designed around your goals.",

    button: "Not sure? Ask us",

    items: [

      {
        name: "Botox",

        category: "Injectables",

        description:
          "Subtle softening of expression lines while preserving natural movement.",

        image:
          "/assets/treatment-botox.jpg",

        slug: "botox"
      },

      {
        name: "Dermal Fillers",

        category: "Facial balancing",

        description:
          "Restore or refine facial volume with a tailored, conservative approach.",

        image:
          "/assets/treatment-fillers.jpg",

        slug: "dermal-fillers"
      },

      {
        name: "Laser Hair Removal",

        category: "Laser",

        description:
          "Long-term hair reduction with a treatment plan built around your skin.",

        image:
          "/assets/treatment-laser.jpg",

        slug: "laser-hair-removal"
      },

      {
        name: "Microneedling",

        category: "Skin",

        description:
          "Stimulate collagen and improve texture, tone and the appearance of scars.",

        image:
          "/assets/treatment-microneedling.jpg",

        slug: "microneedling"
      },

      {
        name: "Chemical Peels",

        category: "Skin",

        description:
          "Target dullness, uneven tone and congestion with a peel chosen for your skin.",

        image:
          "/assets/treatment-peels.jpg",

        slug: "chemical-peels"
      },

      {
        name: "PRP",

        category: "Regenerative",

        description:
          "A personalized platelet-rich plasma treatment for selected skin concerns.",

        image:
          "/assets/treatment-prp.jpg",

        slug: "prp"
      }

    ]
  },


  // -----------------------------------------------------------------------
  // FEATURED TREATMENT
  // -----------------------------------------------------------------------

  featuredTreatment: {

    eyebrow: "Featured treatment",

    titleLine1: "Skin that looks",

    titleLine2: "healthy, not overdone.",

    description:
      "Our skin-focused treatments are selected according to your skin, lifestyle and desired outcome. We prioritize gradual, natural-looking improvement.",

    benefits: [

      "Personalized treatment planning",

      "Clear expectations before treatment",

      "Aftercare guidance included"

    ],

    button:
      "Discuss your skin goals",

    image:
      "/assets/featured.jpg"
  },


  // -----------------------------------------------------------------------
  // RESULTS
  // -----------------------------------------------------------------------

  results: {

    eyebrow: "Real treatment journeys",

    title: "Results worth understanding.",

    description:
      "Results vary by individual. During your consultation, we explain what is realistic for you.",

    disclaimer:
      "Individual results vary.",

    items: [

      {
        title: "Skin rejuvenation",

        image:
          "/assets/result-1.jpg"
      },

      {
        title: "Texture & tone",

        image:
          "/assets/result-2.jpg"
      },

      {
        title: "Facial balance",

        image:
          "/assets/result-3.jpg"
      }

    ]
  },


  // -----------------------------------------------------------------------
  // PROVIDER / ABOUT
  // -----------------------------------------------------------------------

  provider: {

    eyebrow: "Your care team",

    titleLine1: "Expertise first.",

    titleLine2: "Aesthetics second.",

    name: "Dr. Firstname Lastname",

    role: "Medical Director",

    credentials: "Personalized",

    credentialDescription:
      "Consultation-led care",

    description:
      "Our approach combines medical knowledge with a restrained aesthetic philosophy. We believe the best work should look like you — just more rested, balanced and confident.",

    button:
      "Meet your provider",

    image:
      "/assets/provider.jpg"
  },


  // -----------------------------------------------------------------------
  // REVIEWS
  // -----------------------------------------------------------------------

  reviews: {

    eyebrow: "Patient experience",

    title:
      "What our patients say",

    items: [

      {
        quote:
          "The consultation made all the difference. I never felt pressured into doing anything.",

        name:
          "Patient Name"
      },

      {
        quote:
          "Everything was explained clearly, and the result is exactly what I hoped for — very natural.",

        name:
          "Patient Name"
      },

      {
        quote:
          "Beautiful clinic, but more importantly, I felt genuinely cared for.",

        name:
          "Patient Name"
      }

    ]
  },


  // -----------------------------------------------------------------------
  // FAQ
  // -----------------------------------------------------------------------

  faq: {

    eyebrow:
      "Good questions deserve clear answers.",

    title:
      "Before you book.",

    items: [

      {
        question:
          "Do I need to know which treatment I want?",

        answer:
          "No. Your consultation is designed to understand your goals and recommend appropriate options. You do not need to arrive knowing the name of a procedure."
      },

      {
        question:
          "Will my result look natural?",

        answer:
          "Our philosophy is conservative and individualized. We discuss realistic outcomes, limitations and alternatives before recommending treatment."
      },

      {
        question:
          "How much does treatment cost?",

        answer:
          "Pricing depends on the treatment, amount required and your individual plan. During your consultation, we explain the recommended options and their costs clearly."
      },

      {
        question:
          "What happens at my first consultation?",

        answer:
          "We discuss your goals, relevant history, assess the area you're concerned about, and explain suitable options, expected results, downtime and aftercare."
      }

    ]
  },


  // -----------------------------------------------------------------------
  // CONSULTATION
  // -----------------------------------------------------------------------

  consultation: {

    eyebrow:
      "Start with a conversation",

    titleLine1:
      "Let's find the right",

    titleLine2:
      "next step.",

    description:
      "Tell us what you'd like to improve and we'll guide you toward the most appropriate consultation or treatment.",

    nameLabel:
      "Name",

    namePlaceholder:
      "Your name",

    phoneLabel:
      "Phone",

    phonePlaceholder:
      "Your phone number",

    interestLabel:
      "I'm interested in",

    interestPlaceholder:
      "Choose an area",

    messageLabel:
      "Message",

    messagePlaceholder:
      "Tell us a little about your goals",

    button:
      "Request consultation",

    disclaimer:
      "By submitting, you'll be contacted using the details provided."
  },


  // -----------------------------------------------------------------------
  // FOOTER
  // -----------------------------------------------------------------------

  footer: {

    description:
      "Personalized aesthetic care with a focus on natural-looking results.",

    exploreTitle:
      "Explore",

    visitTitle:
      "Visit",

    copyright:
      "All rights reserved.",

    credit:
      "Website concept by Kevin"
  }

};