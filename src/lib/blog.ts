export type BlogContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  tag: string;
  date: string;
  author: string;
  read: string;
  img: string;
  excerpt: string;
  summary: string;
  content: BlogContentBlock[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "designing-66kv-substations-for-indias-load-growth",
    title: "Designing 66 kV Substations for India’s Load Growth",
    tag: "Substations",
    date: "2026-07-09",
    author: "Tejveer",
    read: "12 min read",
    img: "/images/blog-1.jpg",
    excerpt:
      "A practical guide to building reliable 66 kV substations that support expanding demand and simplify operations.",
    summary:
      "Discover the engineering choices, safety planning, and commissioning steps that make substations dependable and future-ready.",
    content: [
      {
        type: "paragraph",
        text: "Budhiraja designs 66 kV substations for growing industrial and utility networks. The right substation is more than equipment—it is a long-term operating asset that must stand up to load growth, regulatory expectations, and maintenance needs.",
      },
      { type: "heading", text: "Planning for future demand" },
      {
        type: "paragraph",
        text: "Early-stage site assessment is vital. We evaluate road access, soil conditions, flood risk, and future expansion capacity before finalizing the layout.",
      },
      {
        type: "list",
        items: [
          "Forecast future load growth and reserve capacity",
          "Choose locations that support safe equipment delivery",
          "Design service corridors for future cable and bus work",
        ],
      },
      { type: "heading", text: "Safe, maintainable engineering" },
      {
        type: "paragraph",
        text: "The substation layout must enable safe work while minimizing energy losses. We arrange primary equipment, transformers, and auxiliary systems to keep maintenance access clear and faults easy to manage.",
      },
      {
        type: "list",
        items: [
          "Separate primary and secondary sections clearly",
          "Use protective barriers and working clearances",
          "Design earthing and lighting for reliable night-time service",
        ],
      },
      { type: "heading", text: "Protection and control integration" },
      {
        type: "paragraph",
        text: "Modern substations need a complete protection and control strategy. Budhiraja configures relay coordination, metering, and SCADA so operators can see the full system and isolate faults quickly.",
      },
      {
        type: "paragraph",
        text: "We also provide the documentation and training required for safe operation, reducing handover risk and enabling faster response to alarms.",
      },
      { type: "heading", text: "Testing and commissioning" },
      {
        type: "paragraph",
        text: "Commissioning is where design meets reality. Budhiraja performs insulation testing, secondary injection, and full-power verification to ensure the substation performs as intended.",
      },
      {
        type: "list",
        items: [
          "Verify protection relay settings and coordination",
          "Test transformer insulation and winding resistance",
          "Validate power quality and fault response",
        ],
      },
      {
        type: "heading",
        text: "Delivering long-term value",
      },
      {
        type: "paragraph",
        text: "A well-designed 66 kV substation is built to last. By engineering for expandability, maintainability, and safety, Budhiraja helps clients keep operating costs low and service reliability high.",
      },
    ],
  },
  {
    slug: "arc-flash-protection-for-facility-managers",
    title: "Arc-Flash Protection for Facility Managers",
    tag: "Safety",
    date: "2026-03-13",
    author: "Bhuvnesh",
    read: "11 min read",
    img: "/images/blog-2.jpg",
    excerpt:
      "A practical guide to building arc-flash protection programs that keep people safe and equipment online.",
    summary:
      "Learn how hazard analysis, protective coordination, and workforce training work together to reduce arc-flash risk and downtime.",
    content: [
      {
        type: "paragraph",
        text: "Arc-flash incidents are among the most dangerous electrical events in industrial and commercial facilities. They can cause injury, equipment damage, and extended downtime if the system is not protected and managed correctly.",
      },
      { type: "heading", text: "Why arc-flash is a business risk" },
      {
        type: "paragraph",
        text: "A proper arc-flash program begins with a detailed hazard analysis. This assessment identifies where faults are likely to occur and estimates the energy that would be released in a failure.",
      },
      {
        type: "list",
        items: [
          "Map the electrical distribution layout and key hazard points",
          "Calculate incident energy levels for each panel and switchgear",
          "Define safe working distances and minimum approach boundaries",
        ],
      },
      { type: "heading", text: "Protective coordination" },
      {
        type: "paragraph",
        text: "Relay settings must be coordinated so the smallest possible section clears a fault. That reduces the scope of interruptions while preserving equipment and protecting personnel.",
      },
      {
        type: "list",
        items: [
          "Coordinate upstream and downstream relays",
          "Verify backup protection for critical feeders",
          "Avoid nuisance trips during normal operations",
        ],
      },
      { type: "heading", text: "Procedures and training" },
      {
        type: "paragraph",
        text: "Even the best protection design is only effective when crews understand it. Budhiraja helps facilities document safe switching procedures, hazard zone signage, and training practices that reduce human error.",
      },
      {
        type: "paragraph",
        text: "A strong safety culture turns training into a competitive advantage: fewer incidents, smoother maintenance, and greater trust from regulators and insurers.",
      },
      { type: "heading", text: "Operational benefits" },
      {
        type: "paragraph",
        text: "Arc-flash planning is not just about compliance. It also saves money by reducing repair costs after faults, lowering insurance risk, and minimizing unplanned downtime.",
      },
      {
        type: "list",
        items: [
          "Reduce downtime from electrical incidents",
          "Lower support costs for emergency repairs",
          "Improve confidence in operational resilience",
        ],
      },
      {
        type: "heading", text: "Continuous improvement" },
      {
        type: "paragraph",
        text: "After every event or maintenance activity, we review performance and update settings. This continuous improvement ensures the facility grows safer and more reliable over time.",
      },
    ],
  },
  {
    slug: "smart-city-backbone-built-on-reliable-power",
    title: "Smart City Backbone Built on Reliable Power",
    tag: "Infrastructure",
    date: "2026-02-15",
    author: "Bhuvnesh",
    read: "11 min read",
    img: "/images/blog-3.jpg",
    excerpt:
      "A detailed look at the power infrastructure needed to support smart lighting, transit operations, and urban services.",
    summary:
      "Explore the design principles that keep smart city systems reliable, visible, and prepared for future digital services.",
    content: [
      {
        type: "paragraph",
        text: "A smart city is only as capable as its electrical backbone. Budhiraja designs urban power infrastructure that supports street lighting, transit hubs, public safety networks, and data services without sacrificing reliability.",
      },
      { type: "heading", text: "Resilience for city services" },
      {
        type: "paragraph",
        text: "City infrastructure must stay online even when faults occur. Our designs include redundant feeders, sectionalizing switches, and automated restoration paths to keep essential services running.",
      },
      {
        type: "list",
        items: [
          "Use parallel feed paths for critical systems",
          "Automate fault isolation to limit outage impact",
          "Plan for fast switching and restoration",
        ],
      },
      { type: "heading", text: "Lighting as infrastructure" },
      {
        type: "paragraph",
        text: "Modern street lighting does more than illuminate roads. It supports safety, civic identity, and digital control systems that adjust to traffic, weather, and events.",
      },
      {
        type: "list",
        items: [
          "Implement centralized LED dimming and fault management",
          "Design for consistent, glare-controlled illumination",
          "Enable remote monitoring for faster repairs",
        ],
      },
      { type: "heading", text: "Power for public systems" },
      {
        type: "paragraph",
        text: "Transit stations, CCTV, EV chargers, and municipal services all rely on dependable power. We design distribution systems with surge protection, backup feeds, and accessible maintenance points.",
      },
      { type: "heading", text: "Visibility through monitoring" },
      {
        type: "paragraph",
        text: "Visibility is essential. Our supervisory control systems provide operators with real-time data on consumption, outages, and equipment health so they can act quickly.",
      },
      {
        type: "paragraph",
        text: "That visibility also helps cities evolve over time, using data to prioritize upgrades and improve service efficiency.",
      },
      { type: "heading", text: "Built for future services" },
      {
        type: "paragraph",
        text: "A strong electrical backbone should make it easier to add new city services later. From smart parking to environmental sensors, the infrastructure should be flexible and scalable.",
      },
      {
        type: "list",
        items: [
          "Keep capacity for future digital loads",
          "Design accessible equipment layouts for upgrades",
          "Use scalable control systems and open protocols",
        ],
      },
    ],
  },
  {
    slug: "turnkey-power-distribution-for-faster-project-delivery",
    title: "Turnkey Power Distribution for Faster Project Delivery",
    tag: "Power Distribution",
    date: "2025-08-28",
    author: "sagar patel",
    read: "10 min read",
    img: "/images/project-commercial.jpg",
    excerpt:
      "How integrated HT/LT distribution services reduce coordination risk and accelerate handover on commercial and industrial projects.",
    summary:
      "See why a single distribution partner delivers more predictable schedules, cleaner commissioning, and lower delivery risk.",
    content: [
      {
        type: "paragraph",
        text: "Delivering complete HT and LT distribution systems avoids the handoff gaps that typically slow projects. Budhiraja coordinates equipment supply, cabling, panels, and protection in one integrated workflow.",
      },
      { type: "heading", text: "Clear accountability" },
      {
        type: "paragraph",
        text: "When one team owns the entire distribution scope, technical responsibility is clear and schedules become easier to manage. That means fewer change orders and smoother progress on site.",
      },
      {
        type: "list",
        items: [
          "Single point of contact for HT/LT distribution delivery",
          "Integrated design reviews across power, protection, and control",
          "Coordinated testing and commissioning workflows",
        ],
      },
      { type: "heading", text: "Protective coordination and energy efficiency" },
      {
        type: "paragraph",
        text: "We perform comprehensive load studies and protection coordination so the system is balanced, energy-efficient, and safe. This reduces the risk of equipment damage and keeps operating costs under control.",
      },
      { type: "heading", text: "Simplified handover" },
      {
        type: "paragraph",
        text: "Turnkey delivery includes complete documentation, testing records, and commissioning reports. That makes handover easier and helps owners operate the system from day one.",
      },
      {
        type: "paragraph",
        text: "For commercial campuses and industrial plants, that means faster project closeout and fewer post-handover issues.",
      },
      { type: "heading", text: "Operational reliability" },
      {
        type: "paragraph",
        text: "A distribution system built as a single package is simpler to maintain and troubleshoot. Budhiraja’s approach helps facilities avoid fragmentation and delivers more predictable long-term performance.",
      },
    ],
  },
  {
    slug: "robust-maintenance-for-electrical-assets",
    title: "Robust Maintenance for Electrical Assets",
    tag: "Operations",
    date: "2026-01-20",
    author: "siddharth",
    read: "10 min read",
    img: "/images/project-substation.jpg",
    excerpt:
      "Preventive care, condition monitoring and fast response that keep substations and power systems running smoothly.",
    summary:
      "Understand how planned maintenance, digital monitoring, and rapid response preserve asset life and minimize outages.",
    content: [
      {
        type: "paragraph",
        text: "Routine maintenance separates reliable electrical systems from the ones that fail unexpectedly. Budhiraja helps clients build maintenance programs that catch issues early and keep systems operating safely.",
      },
      { type: "heading", text: "Preventive maintenance" },
      {
        type: "paragraph",
        text: "Preventive inspections are the foundation. We schedule regular checks for switchgear, transformers, panels, and protective devices so small problems do not become major failures.",
      },
      {
        type: "list",
        items: [
          "Visual and thermal inspections of key electrical equipment",
          "Insulation resistance and contact resistance testing",
          "Verification of relay settings and protection coordination",
        ],
      },
      { type: "heading", text: "Condition monitoring" },
      {
        type: "paragraph",
        text: "Digital monitoring gives owners real-time insight into asset health. We deploy sensors and analytics that surface trends before they become faults.",
      },
      {
        type: "paragraph",
        text: "This approach reduces surprise outages and helps teams plan maintenance around production needs rather than reacting to emergencies.",
      },
      { type: "heading", text: "Rapid response" },
      {
        type: "paragraph",
        text: "When an issue does occur, fast corrective action is essential. Budhiraja provides response procedures and support so faults are isolated and repaired with minimum disruption.",
      },
      {
        type: "list",
        items: [
          "Clear escalation paths for electrical faults",
          "Spare parts planning for critical components",
          "Structured troubleshooting and root cause analysis",
        ],
      },
      { type: "heading", text: "Asset life and cost control" },
      {
        type: "paragraph",
        text: "Well-managed maintenance extends asset life and lowers total cost of ownership. By investing in reliability, facilities reduce downtime, emergency repair costs, and replacement cycles.",
      },
    ],
  },
  {
    slug: "performance-lighting-for-large-venues-and-stadiums",
    title: "Performance Lighting for Large Venues and Stadiums",
    tag: "Lighting",
    date: "2026-07-09",
    author: "Kalika sir ",
    read: "10 min read",
    img: "/images/project-stadium.jpg",
    excerpt:
      "Designing sports and event lighting that meets broadcast, safety, and spectator comfort requirements.",
    summary:
      "Learn what it takes to deliver stadium lighting systems that work for athletes, cameras, and fans while staying energy-efficient.",
    content: [
      {
        type: "paragraph",
        text: "Large venues demand lighting that performs for broadcast, competition, and spectator experience. Budhiraja designs systems that balance uniformity, glare control, and energy efficiency for stadiums and arenas.",
      },
      { type: "heading", text: "Broadcast-ready performance" },
      {
        type: "paragraph",
        text: "Sports lighting must meet strict illuminance and color rendering standards for television. We select fixtures and layouts that deliver stable, crisp light across the playing surface.",
      },
      {
        type: "list",
        items: [
          "Design for even vertical and horizontal illuminance",
          "Keep glare low for players and cameras",
          "Choose fixtures with reliable color consistency",
        ],
      },
      { type: "heading", text: "Flexible control systems" },
      {
        type: "paragraph",
        text: "Controls are essential for different event modes. Budhiraja integrates dimming, zoning, and scheduling so venues can adapt lighting for training, matches, concerts, and low-use periods.",
      },
      {
        type: "paragraph",
        text: "That flexibility also supports energy savings and reduces wear on the lighting system over time.",
      },
      { type: "heading", text: "Reliability and maintenance" },
      {
        type: "paragraph",
        text: "A stadium lighting installation must be serviceable. We design access routes, create inspection plans, and specify robust fixtures that stand up to weather and heavy use.",
      },
      {
        type: "list",
        items: [
          "Plan for safe access to light towers and controls",
          "Use durable fixtures with long service life",
          "Build monitoring into the lighting control system",
        ],
      },
      { type: "heading", text: "Fan experience and safety" },
      {
        type: "paragraph",
        text: "Good venue lighting improves visibility, reduces glare for spectators, and supports safe movement in concourses and parking areas. It is a key part of the overall event experience.",
      },
      {
        type: "paragraph",
        text: "The right lighting solution helps venues create memorable events while controlling operating costs and keeping systems ready for every match or show.",
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string) {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getBlogPostSlugs() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

