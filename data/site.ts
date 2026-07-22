// Central content/config file. Swap the placeholder contact details
// below whenever the real ones are ready — nothing else needs to change.

export const site = {
  name: "Research Connect Pro",
  domain: "researchconnectpro.com",
  tagline: "Research support services, end to end.",
  email: "researchconnectpro@gmail.com",
  phone: "+917708641046",
  phoneDisplay: "+91 77086 41046",
  whatsapp: "https://wa.me/917708641046",
  address: "Coimbatore, India",
  social: {
    linkedin: "https://www.linkedin.com/company/researcher-connect-pro/",
    instagram: "https://www.instagram.com/researcher_connect_pro",
    facebook: "https://www.facebook.com/profile.php?id=61591660671189",
  },
};

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  summary: string;
  image: string;
  imageAlt: string;
  href: string;
  iconName: string;
  points: string[];
  process: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "editorial-solutions",
    title: "Editorial Solutions",
    shortTitle: "Editorial Solutions",
    tagline: "Polish your writing for clarity, flow and journal readiness.",
    summary:
      "Getting published in a good journal is as much about presentation as it is about the research itself. We polish your writing for clarity, flow, and journal readiness while keeping your technical meaning intact.",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Hands writing and editing a scientific manuscript with a pen",
    href: "/services/editorial-solutions",
    iconName: "PenTool",
    points: [
      "Clarity and flow enhancement for complex academic texts",
      "Style alignment with target journal guidelines",
      "Detailed grammar, syntax, and phrasing correction",
      "Support with pre-submission checks and editorial compliance",
    ],
    process: [
      { title: "Manuscript review", body: "We read your draft and flag structure, clarity, and formatting issues." },
      { title: "Polish and format", body: "Language, structure, and references brought in line with requirements." },
      { title: "Feedback discussion", body: "Review the polished draft together and finalize any specific changes." },
    ],
    faqs: [
      { q: "Will editing change the meaning of my research?", a: "No. We polish clarity and language — the technical content and conclusions stay entirely yours." },
      { q: "Do you offer quick turnaround times?", a: "Yes, we can support tight timelines depending on the length and quality of the draft." },
    ],
  },
  {
    slug: "conference-management",
    title: "Conference Management",
    shortTitle: "Conference Management",
    tagline: "From abstract to event logistics, we've got it covered.",
    summary:
      "Running an academic conference well takes more than a venue and a schedule. We handle the parts that are easy to underestimate — submissions, review, a registration site people can actually use, and the logistics that keep the day running on time.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "A presenter on stage speaking to a large audience at an academic conference",
    href: "/services/conference-management",
    iconName: "Users",
    points: [
      "Theme development and a clear call for papers",
      "A dedicated event website for registration, updates and schedules",
      "Abstract submission and peer review, run through a secure system",
      "On-the-day coordination, from registration desk to closing remarks",
    ],
    process: [
      { title: "Plan the shape of the event", body: "Theme, tracks, key dates, and who you want in the room." },
      { title: "Open submissions", body: "We set up the call for papers and manage abstract and peer review." },
      { title: "Build the event site", body: "A clean, simple site for registration, updates and the final schedule." },
      { title: "Run the day", body: "On-site or remote support so the event runs the way it was planned." },
    ],
    faqs: [
      { q: "Can you support both in-person and virtual conferences?", a: "Yes, and hybrid formats as well — the submission and review workflow stays the same either way." },
      { q: "How far in advance should we start?", a: "Ideally three to six months out, though we've supported tighter timelines when needed." },
    ],
  },
  {
    slug: "visibility-impact",
    title: "Visibility & Impact",
    shortTitle: "Visibility & Impact",
    tagline: "Increase your reach and elevate your research presence.",
    summary:
      "Promote your findings, track impact metrics, and showcase research contributions. We help design clear infographics, write research summaries for non-technical audiences, and build academic profile hubs.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Laptop displaying web analytics dashboard with metrics and charts",
    href: "/services/visibility-impact",
    iconName: "Megaphone",
    points: [
      "Academic profile creation and optimization across platforms",
      "Layperson summaries (plain English) for broader public outreach",
      "Data visualization and graphics explaining your key discoveries",
      "Impact reporting tracking citations and media mentions",
    ],
    process: [
      { title: "Assess current visibility", body: "Review where your work is indexed and how it's presented to the public." },
      { title: "Create communication assets", body: "Draft plain language summaries and design custom data visual aids." },
      { title: "Distribute and track", body: "Publish updates to relevant academic hubs and monitor citation / press impact." },
    ],
    faqs: [
      { q: "Why is public visibility important for academic research?", a: "It boosts your citation potential, attracts funding agencies, and demonstrates real-world impact for institutional reviews." },
    ],
  },
  {
    slug: "manuscript-preparation",
    title: "Manuscript Preparation",
    shortTitle: "Manuscript Prep",
    tagline: "Formatting, referencing, and submission support.",
    summary:
      "A manuscript ready for submittal must strictly align with guidelines. We handle standard formatting, reference style conversion (APA, MLA, IEEE, Nature, etc.), figure alignment, and compiling all supplementary materials.",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "A notebook, open laptop, and coffee cup on a modern desk setup",
    href: "/services/manuscript-preparation",
    iconName: "FileText",
    points: [
      "Journal-specific layout and typesetting alignment",
      "Comprehensive citation audit and reference styling conversion",
      "Figure and table positioning and caption compliance",
      "Cover letter drafting and submission portal assistance",
    ],
    process: [
      { title: "Review requirements", body: "Analyze the chosen journal's styling and formatting manual." },
      { title: "Format the document", body: "Tweak spacing, headings, margins, tables, and convert citations." },
      { title: "Quality check", body: "Perform final proofing on all pages and compile submission files." },
    ],
    faqs: [
      { q: "Do you write content for the manuscript?", a: "No, we only handle formatting, citation editing, and layout adjustments. The content remains entirely yours." },
    ],
  },
  {
    slug: "author-support",
    title: "Author Support",
    shortTitle: "Author Support",
    tagline: "Guidance at every step of your research journey.",
    summary:
      "Get support navigating the journal system. From choosing the right target journals based on fit and impact factor, to writing letters to the editor and preparing responses to review comments, we guide you all the way.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Team members collaborating and pointing at notes during a meeting",
    href: "/services/author-support",
    iconName: "Compass",
    points: [
      "Target journal shortlist compiled for your specific field",
      "Assistance responding to peer review critiques and editors",
      "Pre-submission review and editorial inquiry formulation",
      "Mentorship and guidance through publication milestones",
    ],
    process: [
      { title: "Target selection", body: "Analyze your manuscript and recommend journals matching its scope and timeline." },
      { title: "Peer-review strategy", body: "Develop clear response templates to address reviewer and editor feedback." },
      { title: "Ongoing consultation", body: "Advice on handling copyright, open access options, or resubmission." },
    ],
    faqs: [
      { q: "Can you help after a rejection?", a: "Yes. We review editor/reviewer comments and suggest adjustments for resubmission elsewhere." },
    ],
  },
  {
    slug: "project-planning",
    title: "Project Planning",
    shortTitle: "Project Planning",
    tagline: "Structure, deadlines, and tracking that keep you ahead.",
    summary:
      "Turn a research proposal into a well-managed project. We assist in mapping milestones, tracking research progress, coordinating tasks across multi-institutional teams, and setting up collaborative project management spaces.",
    image:
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "A paper calendar showing organized tasks and schedule deadlines",
    href: "/services/project-planning",
    iconName: "Calendar",
    points: [
      "Work breakdown structure customized for research labs",
      "Milestone mapping and timeline setup using digital tools",
      "Multi-center or multi-department project coordination",
      "Resource allocation planning and progress check-ins",
    ],
    process: [
      { title: "Establish milestones", body: "Break down the research objective into clear work packages and dates." },
      { title: "Tool configuration", body: "Setup project boards or tracking documents that fit lab workflows." },
      { title: "Coordination support", body: "Regular syncs and reporting to ensure tasks stay on track." },
    ],
    faqs: [
      { q: "What project management tools do you support?", a: "We work with standard tools like Trello, Notion, Asana, or customized spreadsheet sheets based on lab preferences." },
    ],
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug);



export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Resources", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact-us" },
];

export const stats = [
  { value: "8+", label: "Years of experience" },
  { value: "1,300+", label: "Projects delivered" },
  { value: "120+", label: "Happy researchers" },
  { value: "6", label: "Core expert services" },
];
