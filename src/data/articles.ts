const blog1 = "/images/blog-1.jpg";
const blog2 = "/images/blog-2.jpg";
const blog3 = "/images/blog-3.jpg";
const commercialImg = "/images/project-commercial.jpg";
const industrialImg = "/images/project-industrial.jpg";
const stadiumImg = "/images/project-stadium.jpg";
const teamImg = "/images/about-team.jpg";
const governmentImg = "/images/project-government.jpg";
const infrastructureImg = "/images/project-infrastructure.jpg";

export type ArticleSection = {
  heading: string;
  paragraphs: string[];
  points?: string[];
};

export type Article = {
  slug: string;
  image: string;
  tag: string;
  title: string;
  read: string;
  excerpt: string;
  introduction: string;
  sections: ArticleSection[];
};

export const ARTICLES: Article[] = [
  {
    slug: "designing-66-kv-substations-for-load-growth",
    image: blog1,
    tag: "Engineering",
    title: "Designing 66 kV Substations for India's Load Growth",
    read: "8 min read",
    excerpt: "How early planning, system coordination and lifecycle thinking help substations respond to changing demand.",
    introduction: "A substation is not simply a collection of equipment. It is a coordinated system whose layout, protection, interfaces and maintainability must support the network throughout its operating life.",
    sections: [
      {
        heading: "Begin with the load, not the equipment",
        paragraphs: ["Good substation planning starts with a realistic understanding of present demand, future expansion and the operating conditions around the site. Selecting equipment before these inputs are aligned can create avoidable constraints later.", "The design team should evaluate demand patterns, supply arrangements, redundancy expectations and the physical path for future additions before the layout is fixed."],
        points: ["Present and anticipated load", "Supply reliability requirements", "Space for safe access and expansion", "Interfaces with downstream distribution"],
      },
      {
        heading: "Coordinate the complete electrical system",
        paragraphs: ["Transformers, switchgear, protection, cabling, earthing and control systems must work as one system. Coordination between these disciplines reduces site changes and supports clearer testing and commissioning.", "Civil and electrical interfaces deserve the same attention. Equipment access, cable routing, drainage, ventilation and maintenance clearances all influence long-term operability."],
      },
      {
        heading: "Design for dependable operation",
        paragraphs: ["Reliability is created through appropriate system architecture, protection coordination, installation quality and disciplined commissioning. It also depends on whether operators can inspect and maintain the installation safely.", "Clear labels, accessible equipment, current documentation and a defined maintenance plan make the engineering intent useful after handover."],
      },
      {
        heading: "Treat commissioning as part of engineering",
        paragraphs: ["Testing should confirm that individual components and the combined system perform as intended. Planning test requirements early helps align documentation, responsibilities and energisation activities.", "A well-structured handover gives the operating team the records and understanding required to manage the asset with confidence."],
      },
    ],
  },
  {
    slug: "arc-flash-protection-for-facility-managers",
    image: blog2,
    tag: "Electrical Safety",
    title: "Arc-Flash Protection: What Every Facility Manager Must Know",
    read: "6 min read",
    excerpt: "A practical overview of assessment, protection, maintenance and operating discipline around electrical equipment.",
    introduction: "Arc-flash risk cannot be managed by personal protective equipment alone. Effective protection combines engineering controls, maintained equipment, clear procedures and informed people.",
    sections: [
      {
        heading: "Understand where exposure can occur",
        paragraphs: ["Facility teams should know which electrical tasks may expose people to energized equipment and how the system behaves under fault conditions. The assessment must reflect the actual installation rather than assumptions based only on equipment labels.", "Changes to transformers, cables, protection settings or operating configurations can affect the risk profile and should trigger an appropriate technical review."],
      },
      {
        heading: "Prioritize engineering controls",
        paragraphs: ["The safest intervention is the one that reduces the need for energized work. System design, remote operation, suitable protection and clear isolation arrangements can all reduce exposure.", "Protective-device coordination also matters. Settings should support both system reliability and timely fault clearance, based on a project-specific engineering assessment."],
        points: ["Clear isolation and lockout arrangements", "Appropriate protective-device settings", "Remote operation where suitable", "Accurate single-line diagrams and labels"],
      },
      {
        heading: "Keep equipment and information current",
        paragraphs: ["Maintenance affects how electrical equipment performs during a fault. Inspection, cleaning, testing and timely corrective work help ensure protective systems remain dependable.", "Documentation should evolve with the facility. Drawings, equipment records and operating procedures lose value when they no longer reflect site conditions."],
      },
      {
        heading: "Build safety into everyday operation",
        paragraphs: ["Training should connect technical hazards with the tasks people actually perform. Teams need to understand equipment condition, work boundaries, isolation procedures and the limits of their authorization.", "For any specific facility, risk assessment and safe-work procedures should be prepared by qualified professionals using current system information."],
      },
    ],
  },
  {
    slug: "smart-city-backbone-reliable-power",
    image: blog3,
    tag: "Infrastructure",
    title: "The Smart City Backbone Is Built on Reliable Power",
    read: "5 min read",
    excerpt: "Why connected public systems still depend on resilient distribution, coordinated controls and maintainable field infrastructure.",
    introduction: "Smart infrastructure may be visible through sensors, controls and data, but every connected service still depends on dependable electrical power at the field level.",
    sections: [
      {
        heading: "Digital systems need a physical foundation",
        paragraphs: ["Lighting controls, surveillance, access systems, parking technology and public information networks all rely on distribution equipment, cabling and field enclosures. Weakness in that foundation can undermine the intelligence layered above it.", "Electrical and digital teams should coordinate loads, interfaces, communication paths and environmental conditions from the beginning."],
      },
      {
        heading: "Plan for continuity, not only connectivity",
        paragraphs: ["A connected asset is useful only when it remains available. Designers should identify critical services, acceptable interruptions and the practical options for backup or restoration.", "The right approach varies by application, but maintainable architecture and clear fault isolation help teams restore service more effectively."],
        points: ["Critical-load identification", "Coordinated power and communication paths", "Field equipment suited to its environment", "Practical monitoring and fault visibility"],
      },
      {
        heading: "Integration requires clear ownership",
        paragraphs: ["Smart-city projects often involve multiple suppliers and specialist systems. Defined interfaces, common documentation and coordinated testing help prevent gaps between packages.", "A single view of responsibilities is especially important when electrical, controls, security and communication systems meet at the same field asset."],
      },
      {
        heading: "Lifecycle support keeps systems smart",
        paragraphs: ["Monitoring can reveal system conditions, but teams still need processes to inspect, respond and maintain assets. Spare strategy, access, documentation and trained support personnel are part of the infrastructure design.", "The most effective smart systems connect useful data with a realistic operating and maintenance model."],
      },
    ],
  },
  {
    slug: "planning-high-performance-stadium-lighting",
    image: stadiumImg,
    tag: "Sports Lighting",
    title: "Planning High-Performance Stadium Lighting",
    read: "7 min read",
    excerpt: "The coordination decisions behind consistent illumination, effective controls and maintainable venue lighting.",
    introduction: "Stadium lighting is a specialist system shaped by the sport, venue geometry, operating model and viewing requirements. Strong results begin with coordination long before luminaires arrive on site.",
    sections: [
      {
        heading: "Define how the venue will be used",
        paragraphs: ["A community ground, professional venue and broadcast stadium do not have the same operating requirements. The design brief should identify sports, competition levels, event modes and any broadcasting expectations.", "Future uses matter as well. A system planned around clear operating scenarios can support training, events, cleaning and emergency modes without unnecessary complexity."],
        points: ["Sports and competition levels", "Event and training modes", "Broadcasting requirements", "Operating and maintenance access"],
      },
      {
        heading: "Coordinate position, structure and power",
        paragraphs: ["Mast positions, mounting heights and aiming geometry influence visual performance. These decisions must be coordinated with structures, sightlines, access and the surrounding environment.", "Power distribution and control architecture should be developed alongside the lighting design so cable routes, panels and switching arrangements support the intended modes."],
      },
      {
        heading: "Controls shape the operating experience",
        paragraphs: ["A well-designed control system makes complex lighting easier to operate. Preset scenes, controlled switching and appropriate monitoring help venue teams move between operating modes consistently.", "Controls should remain understandable for the people who use them, with clear permissions, interfaces and recovery procedures."],
      },
      {
        heading: "Commission through measurement and aiming",
        paragraphs: ["Installation is followed by careful aiming, testing and adjustment. Field measurements help the team compare actual performance with the design intent and address site-specific conditions.", "Final documentation should record settings, operating modes and maintenance information so performance can be protected over time."],
      },
    ],
  },
  {
    slug: "preventive-maintenance-protects-electrical-assets",
    image: industrialImg,
    tag: "Maintenance",
    title: "How Preventive Maintenance Protects Electrical Assets",
    read: "6 min read",
    excerpt: "Why planned inspection, testing and documentation are essential to reliable electrical operations.",
    introduction: "Electrical assets often appear healthy until a developing issue interrupts operation. Preventive maintenance creates structured opportunities to identify deterioration and act before it becomes a larger problem.",
    sections: [
      {
        heading: "Build the plan around asset criticality",
        paragraphs: ["Not every asset carries the same operational consequence. Maintenance planning should consider the role of each transformer, panel, cable, protection device and control system within the facility.", "Critical equipment may require closer monitoring, more detailed testing or a clearer contingency strategy than non-critical loads."],
        points: ["Asset function and consequence of failure", "Operating environment and duty", "Manufacturer guidance", "Site history and observed condition"],
      },
      {
        heading: "Combine inspection with meaningful testing",
        paragraphs: ["Visual inspection can reveal contamination, damage, overheating indicators or loose components, while suitable testing helps evaluate conditions that are not visible.", "The method and frequency should be selected for the equipment and installation. Testing is most useful when results are recorded and compared over time."],
      },
      {
        heading: "Turn findings into controlled action",
        paragraphs: ["A report alone does not improve reliability. Findings should be prioritized, assigned and closed through a clear corrective-work process.", "Facilities also need a safe plan for outages, isolation and restoration so maintenance can be completed without creating new operational risks."],
      },
      {
        heading: "Keep records aligned with the site",
        paragraphs: ["Updated drawings, settings, equipment histories and test records help teams understand how the system has changed. They also support faster technical decisions during faults or future projects.", "A useful maintenance program evolves with operating experience rather than remaining a fixed checklist."],
      },
    ],
  },
  {
    slug: "bus-trunking-or-cables-planning-power-distribution",
    image: commercialImg,
    tag: "Power Distribution",
    title: "Bus Trunking or Cables? Planning the Right Distribution Path",
    read: "7 min read",
    excerpt: "A practical framework for comparing distribution options across capacity, routing, expansion and lifecycle needs.",
    introduction: "Bus-trunking systems and power cables can both serve dependable distribution. The right choice comes from the building, load arrangement, installation constraints and lifecycle plan—not from a single product preference.",
    sections: [
      {
        heading: "Start with the distribution architecture",
        paragraphs: ["The location and concentration of loads influence whether a centralized cable network, a rising main or a distributed bus-trunking arrangement is more practical. Vertical buildings, production lines and large concentrated loads each create different routing needs.", "Designers should compare the complete path from source to load, including interfaces, tap-offs, containment and access."],
      },
      {
        heading: "Evaluate installation conditions",
        paragraphs: ["Space, bends, structural openings, fire separation and installation sequence can affect both options. A solution that works well on a drawing must still be transportable, installable and accessible within the real building.", "Coordination with civil, architectural and mechanical teams helps protect the required route before construction makes changes difficult."],
        points: ["Available route and clearances", "Installation and lifting access", "Environmental conditions", "Coordination with other services"],
      },
      {
        heading: "Consider change over the asset life",
        paragraphs: ["Facilities rarely remain static. Teams should consider whether future loads are likely to be concentrated, relocated or added along the distribution path.", "Expansion flexibility is valuable only when the operating team has compatible equipment, clear records and safe procedures for making changes."],
      },
      {
        heading: "Compare systems on complete lifecycle value",
        paragraphs: ["The comparison should include equipment, containment, installation, space, testing, downtime and maintenance—not only the initial material cost.", "A project-specific engineering review can then balance technical performance, constructability and long-term operating needs."],
      },
    ],
  },
  {
    slug: "electrical-panels-reliability-and-maintainability",
    image: governmentImg,
    tag: "Electrical Panels",
    title: "Planning Electrical Panels for Reliability and Maintainability",
    read: "6 min read",
    excerpt: "The design and coordination choices that make panels safer to operate, easier to maintain and ready for change.",
    introduction: "An electrical panel is a working interface between the distribution system and the people who operate it. Capacity matters, but so do protection, access, identification and the ability to maintain the assembly over time.",
    sections: [
      {
        heading: "Define the panel's operating role",
        paragraphs: ["Panel planning begins with the connected loads, operating sequence and upstream and downstream interfaces. The duty of a main distribution panel differs from that of a motor-control or local process panel.", "Clear operating requirements help the design team select appropriate architecture, protection and control arrangements."],
        points: ["Connected and future loads", "Fault and protection requirements", "Control and monitoring needs", "Operating environment"],
      },
      {
        heading: "Create space for safe work",
        paragraphs: ["Panel location, access and internal arrangement affect both operation and maintenance. Cable entries, working clearances and component placement should be coordinated before fabrication.", "Good identification and logical grouping help site teams understand the system and reduce avoidable errors during intervention."],
      },
      {
        heading: "Coordinate protection as a system",
        paragraphs: ["Protective devices should be selected and coordinated as part of the wider distribution system. Changes made to one part can influence fault clearance and continuity elsewhere.", "Settings and system information should be documented so the operating team can preserve the engineering intent."],
      },
      {
        heading: "Verify before energisation",
        paragraphs: ["Inspection and testing should confirm assembly quality, wiring, labels, protection and functional operation before the panel enters service.", "Handover records, drawings and equipment information provide the foundation for future maintenance and modification."],
      },
    ],
  },
  {
    slug: "testing-and-commissioning-done-well",
    image: teamImg,
    tag: "Project Delivery",
    title: "What Good Testing and Commissioning Looks Like",
    read: "7 min read",
    excerpt: "Why successful energisation depends on preparation, coordinated checks and useful handover records.",
    introduction: "Testing and commissioning are not final boxes to tick after construction. They are the structured process that connects design intent, installed work and dependable operation.",
    sections: [
      {
        heading: "Plan tests before installation finishes",
        paragraphs: ["A commissioning plan should define systems, responsibilities, prerequisites and records early enough to influence the project sequence. Waiting until energisation approaches often exposes missing information too late.", "Clear boundaries help multiple contractors and equipment suppliers understand where individual checks end and integrated testing begins."],
        points: ["Approved drawings and settings", "Defined test responsibilities", "Calibrated test equipment", "Safe energisation sequence"],
      },
      {
        heading: "Confirm readiness systematically",
        paragraphs: ["Pre-commissioning checks verify installation condition, identification, connections and supporting systems before equipment is energized.", "Issues should be recorded, assigned and closed through a controlled process rather than carried forward informally."],
      },
      {
        heading: "Test interfaces, not only components",
        paragraphs: ["Individual equipment may pass its own checks while the combined system still has interface problems. Functional testing should verify protection, controls, interlocks, communication and operating sequences together.", "The test method should reflect how the facility will actually be operated."],
      },
      {
        heading: "Make handover useful",
        paragraphs: ["A good handover gives operators current drawings, test results, settings, manuals and clear information about outstanding actions.", "Training and walk-throughs help transform project documents into practical knowledge for the people responsible for the asset."],
      },
    ],
  },
  {
    slug: "automation-with-operational-simplicity",
    image: infrastructureImg,
    tag: "Automation",
    title: "Integrating Automation Without Losing Operational Simplicity",
    read: "6 min read",
    excerpt: "How clear objectives, sensible interfaces and lifecycle planning keep control systems useful for operators.",
    introduction: "Automation creates value when it makes operation clearer, more consistent and easier to manage. Complexity that is not tied to an operating need can instead make systems harder to support.",
    sections: [
      {
        heading: "Start with the operating outcome",
        paragraphs: ["Teams should define what the system must monitor, control or improve before selecting platforms and interfaces. A clear operating narrative gives designers and vendors a shared reference.", "Useful automation focuses attention on decisions and exceptions rather than presenting every available data point."],
        points: ["Required operating modes", "Critical alarms and responses", "User roles and permissions", "Reporting and integration needs"],
      },
      {
        heading: "Keep interfaces clear",
        paragraphs: ["Automation often connects electrical, mechanical, security and process systems. Each interface should have defined signals, ownership and test responsibilities.", "Common naming and current documentation reduce confusion during integration and later troubleshooting."],
      },
      {
        heading: "Design for real operators",
        paragraphs: ["Screens, alarms and controls should match the tasks and authority of the people using them. Consistent navigation and meaningful priorities help teams respond effectively.", "Manual operation and recovery should also be considered so the facility remains manageable when part of the automated system is unavailable."],
      },
      {
        heading: "Plan the support model",
        paragraphs: ["Software, communication hardware and connected field devices all change over time. Backup, access control, spares and update responsibilities should be part of the lifecycle plan.", "A maintainable system is one the owner can understand, test and support after project handover."],
      },
    ],
  },
];

export function getArticle(slug: string) {
  return ARTICLES.find((article) => article.slug === slug);
}
