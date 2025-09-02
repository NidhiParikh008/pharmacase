import {
  FaBrain,
  FaVial,
  FaShieldAlt,
  FaCloud,
  FaChartLine,
  FaUserMd,
  FaHospital
} from "react-icons/fa";

// All content is original/paraphrased and India-only.
// You can freely edit phone/email, addresses, etc.

export const INDIA_PAGE = {
  hero: {
    title: "India Life Sciences & Healthcare Services",
    subtitle:
      "Regulatory, PV, and market access support for Pharma, MedTech, Biologics, and Healthcare providers across India.",
    ctaText: "Explore Services",
    ctaHref: "/services",
    video: null
  },
  trustLine:
    "Trusted by pharma, biotech, medical device, cosmetics and nutrition brands operating in India.",
  highlights: [
    {
      title: "CDSCO-Ready Processes",
      text: "India-specific dossiers, checklists, and pathways designed to meet local authority expectations."
    },
    {
      title: "Quality & Compliance",
      text: "GxP-aligned execution with documented controls from intake through submission and maintenance."
    },
    {
      title: "Speed to Market",
      text: "Clear timelines, predictable costs, and optimized workflows from strategy to approvals."
    }
  ]
};

export const SERVICES = [
  {
    slug: "pharmacase-services",
    title: "PHARMACASE Regulatory Services",
    short: "Comprehensive regulatory services at both Central and State levels in India.",
    long: "PHARMACASE offers regulatory services for obtaining Drugs and Cosmetics Manufacturing Licenses, CDSCO Medical Devices Manufacturing Licenses, and more.",
    bullets: [
      {
        heading: "Central Level Services",
        items: [
          "Import & Registration",
          "Cosmetics Licenses",
          "Biologicals Licenses",
          "New Drugs Registration",
          "Veterinary Product Registration",
          "Medical Devices & Diagnostics",
          "BA/BE",
          "Written Confirmation",
          "Post Approval Changes",
          "Export NOC",
          "Dual Use NOC"
        ]
      },
      {
        heading: "State Level Services",
        items: [
          "Plan Approval",
          "Manufacturing License",
          "Loan License",
          "Wholesale License",
          "WHO-GMP Certification",
          "State GMP-GLP Certification",
          "Test License",
          "Public Testing Laboratory",
          "Product Permission"
        ]
      }
    ],
    tags: ["CDSCO", "State", "Licenses"],
    icon: <FaVial />,
    image: "/images/Regulatory Services.jpg" // ✅ Add image path
  },
  {
    slug: "regulatory-intelligence",
    title: "Regulatory Intelligence",
    short: "Continuous monitoring of India regulations and guidance to inform development and launch decisions.",
    long: "We scan health authority updates, track regulatory changes, and curate insights specific to your portfolio...",
    bullets: [
      "Regulatory landscape scans and periodic digests",
      "Change impact assessments and action plans",
      "Competition and comparator tracking",
      "Authority Q&A tracking and responses"
    ],
    tags: ["India", "CDSCO", "Strategy"],
    icon: <FaBrain />,
    image: "/images/Regulatory Intelligence.jpg"
  },
  {
    slug: "regulatory-affairs",
    title: "Regulatory Affairs",
    short: "End-to-end support for India submissions across drugs, devices, cosmetics, and nutraceuticals.",
    long: "From gap assessments to dossier authoring and responses to queries, we provide complete lifecycle support...",
    bullets: [
      "Dossier authoring and publishing",
      "Registration, import, and manufacturing licenses",
      "Variations, renewals, and post-approval changes",
      "Agency communication and query handling"
    ],
    tags: ["CDSCO", "Dossier", "Licensing"],
    icon: <FaVial />,
    image: "/images/Regulatory Affairs.png"
  },
  {
    slug: "pharmacovigilance",
    title: "Pharmacovigilance (PV)",
    short: "Local safety case handling, signal management, and India vigilance reporting.",
    long: "We operate PV activities aligned to local standards: intake, processing, medical review, and reporting...",
    bullets: [
      "ICSR intake and case processing",
      "Aggregate reports and signal detection",
      "SOPs, CAPA, and audit readiness",
      "QPPV/local safety contact support"
    ],
    tags: ["Safety", "ICSR", "QPPV"],
    icon: <FaShieldAlt />,
    image: "/images/Pharmacovigilance (PV).jpg"
  },
  {
    slug: "market-access",
    title: "Market Access",
    short: "Pricing, reimbursement, and pathway advice for India launches and expansions.",
    long: "We analyze payer needs, competitor benchmarks, and evidence expectations...",
    bullets: [
      "Access strategy and stakeholder mapping",
      "Value propositions and HEOR inputs",
      "Budget impact and pricing scenarios",
      "Tender and reimbursement support"
    ],
    tags: ["HEOR", "Pricing", "Access"],
    icon: <FaChartLine />,
    image: "/images/Market Access.jpg"
  },
  {
    slug: "medical-writing",
    title: "Medical Writing & Labeling",
    short: "Clinical/regulatory writing and India-compliant labeling and artwork services.",
    long: "Clear documentation for submissions, safety, and clinical support...",
    bullets: [
      "Module summaries, clinical overviews",
      "PILs, SmPC/PI, and labeling",
      "Artwork management and change control",
      "Proofreading and QC"
    ],
    tags: ["Labeling", "Artwork", "Docs"],
    icon: <FaUserMd />,
    image: "/images/Medical Writing & Labeling.jpg"
  },
  {
    slug: "publishing-and-ops",
    title: "Publishing & Regulatory Operations",
    short: "Submission compilation, validation, and transmission with auditable controls.",
    long: "We build validated pipelines, maintain checklists, and perform pre-submission QA...",
    bullets: [
      "Compilation and technical validation",
      "Publishing tools and templates",
      "Checklist-driven QA and audits",
      "Submission tracking and archiving"
    ],
    tags: ["Ops", "QA", "Validation"],
    icon: <FaCloud />,
    image: "/images/Publishing & Regulatory Operations.jpg"
  },
  {
    slug: "local-representation",
    title: "Local Representation",
    short: "Authorized local representation and import/license holder coordination.",
    long: "Operate locally with trusted representation, take care of regulatory obligations...",
    bullets: [
      "Authorized representative services",
      "Import/manufacture license liaison",
      "Local QMS alignment",
      "Renewals and lifecycle management"
    ],
    tags: ["India", "License", "Local Rep"],
    icon: <FaHospital />,
    image: "/images/Local Representation.jpg"
  },
  {
    slug: "gxp-quality-compliance",
    title: "GxP Quality & Compliance",
    short: "Quality systems, SOPs, audits, and training for India operations.",
    long: "We design and optimize QMS, perform internal audits, and build training...",
    bullets: [
      "QMS design and SOP authoring",
      "Internal audits and CAPA",
      "Training and readiness programs",
      "Inspection support"
    ],
    tags: ["GxP", "QMS", "Audit"],
    icon: <FaShieldAlt />,
    image: "/images/GxP Quality & Compliance.jpg"
  }
];


export const INDUSTRIES = [
  {
    slug: "pharmaceuticals",
    title: "Pharmaceuticals",
    intro:
      "Support for innovators and generics across regulatory, PV, access, and ongoing lifecycle management.",
    items: [
      "Strategy for India approvals and post-approval changes",
      "PV case management and aggregate reporting",
      "Labeling, artwork, and change control",
      "CMC documentation and variations"
    ],
    icon: <FaVial />,
    image: "/images/Pharmaceuticals.jpg" // ✅ Add your downloaded image path
  },
  {
    slug: "medtech",
    title: "Medical Devices & IVD",
    intro:
      "Classification, registration, labeling, and vigilance for devices and diagnostics in India.",
    items: [
      "Device classification and dossier preparation",
      "UDI/labeling and post-market surveillance",
      "Authorized representative and import licensing",
      "Clinical/performance evidence guidance"
    ],
    icon: <FaHospital />,
    image: "/images/Medical Devices & IVD.jpg"
  },
  {
    slug: "biologics",
    title: "Biologics & Vaccines",
    intro:
      "Tailored pathways and evidence plans for biologics portfolios, from filings to PV.",
    items: [
      "Regulatory roadmap and data expectations",
      "Safety case handling and signal detection",
      "CMC documentation and cold-chain aspects",
      "Risk management and PSURs"
    ],
    icon: <FaBrain />,
    image: "/images/Biologics & Vaccines.jpg"
  },
  {
    slug: "cosmetics",
    title: "Cosmetics & Personal Care",
    intro:
      "Ingredient compliance, labeling, and registrations to place products on the Indian market.",
    items: [
      "Formula review and ingredient compliance",
      "Claims review and labeling",
      "Import registration and renewals",
      "Surveillance and complaints handling"
    ],
    icon: <FaShieldAlt />,
    image: "/images/Cosmetics & Personal Care.jpg"
  },
  {
    slug: "nutrition",
    title: "Nutrition & Supplements",
    intro:
      "Pathways for nutraceuticals and functional foods with clear labeling and safety practices.",
    items: [
      "Category assessment and formulation review",
      "Label text and artwork",
      "Notifications/registrations",
      "Market monitoring and updates"
    ],
    icon: <FaChartLine />,
    image: "/images/Nutrition & Supplements1.jpg"
  },
  {
    slug: "veterinary",
    title: "Veterinary Health",
    intro:
      "Regulatory and safety support for veterinary pharmaceuticals and devices.",
    items: [
      "Dossier authoring and variations",
      "Field vigilance and reporting",
      "Labeling and pack compliance",
      "Import and manufacturing licenses"
    ],
    icon: <FaUserMd />,
    image: "/images/Veterinary Health.png"
  }
];


export const FOOTER = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Industries", href: "/industries" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" }
  ],
  contact: {
    email: "info@yourpharma.in",
    phone: "+91 75 6711 0545",
    address: `GF-16, Auro Residency,
B/H Samanvay Status-II,
Bil-Canal Road, Bil,
Vadodara – 391410, India`
  },
  socials: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
    youtube: "https://youtube.com/",
    whatsapp: "https://wa.me/917567110545"
  }
};
