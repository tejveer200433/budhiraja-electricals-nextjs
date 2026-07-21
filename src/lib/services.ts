import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Cable,
  Cpu,
  Factory,
  KeyRound,
  LayoutGrid,
  Lightbulb,
  Shield,
  TreePine,
  Wrench,
  Zap,
  Car,
} from "lucide-react";

export type ServiceEntry = {
  slug: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  detail: string;
  offerings: string[];
  sectors: string[];
};

export const SERVICES: ServiceEntry[] = [
  {
    slug: "electrical-substations",
    icon: Zap,
    title: "Electrical Substations",
    desc: "Turnkey 11 / 33 / 66 kV substations delivered with full engineering, procurement, erection, testing and commissioning for utility and industrial clients.",
    detail:
      "Budhiraja Electricals specializes in the complete delivery of high-voltage substations. We handle civil works, cable routing, protection relay systems, control rooms and commissioning protocols so the substation is prepared for reliable 24/7 operation.\n\nOur team works with utilities and industrial customers to design systems that meet stringent grid, safety and operational standards, while optimizing lifecycle cost and maintainability. We coordinate with multiple vendors and authorities to keep the project moving smoothly from concept to energization.\n\nFrom foundation design to secondary injection testing and performance handover, our substation packages are built for dependable power delivery in demanding environments.",
    offerings: [
      "Site engineering & civil coordination",
      "Primary and secondary equipment installation",
      "Protection relay and control system integration",
      "Testing, commissioning and handover documentation",
    ],
    sectors: ["Utilities", "Industrial parks", "Government facilities"],
  },
  {
    slug: "power-distribution",
    icon: Cable,
    title: "Power Distribution",
    desc: "End-to-end HT & LT distribution design and execution for campuses, plants and commercial buildings, with emphasis on safety and reliability.",
    detail:
      "Our distribution services cover the complete electrical network from substations to point-of-use connections. We deliver HT switchgear, transformers, LT mains, distribution boards and earthing infrastructure designed for robust operation.\n\nSafety is a core requirement in every installation, and our designs incorporate clear segregation, protective devices and maintenance access. We also optimize the distribution layout for energy efficiency and future expansion.\n\nWhether it’s a manufacturing facility, corporate campus or public infrastructure project, Budhiraja ensures the distribution system is scalable, fault-tolerant and fully compliant with Indian standards.",
    offerings: [
      "HT/LT switchgear installation",
      "Power cabling and distribution boards",
      "Energy metering and protection coordination",
      "System balancing and reliability studies",
    ],
    sectors: ["Manufacturing", "Commercial buildings", "Infrastructure"],
  },
  {
    slug: "industrial-electrification",
    icon: Factory,
    title: "Industrial Electrification",
    desc: "Complete electrification solutions for manufacturing, processing and heavy industry, including power systems, wiring, lighting and controls.",
    detail:
      "Budhiraja provides turnkey industrial electrification that powers factories, plants and process facilities. Our services include power system design, equipment selection, cable distribution and final equipment connections.\n\nWe work closely with plant teams to understand operational requirements, safety protocols and phase-wise execution constraints. This enables us to deliver electrification with minimal disruption to production schedules.\n\nOur industrial solutions are tailored for heavy-duty use, offering high availability, clear fault diagnostics and easy maintenance for long-term plant performance.",
    offerings: [
      "Plant power distribution design",
      "Motor control and starter systems",
      "Industrial lighting and grounding",
      "Turnkey installation and commissioning",
    ],
    sectors: ["Automotive", "Pharma", "FMCG", "Process industries"],
  },
  {
    slug: "stadium-lighting",
    icon: Lightbulb,
    title: "Stadium Lighting",
    desc: "Broadcast-quality sports lighting systems designed to meet TV, player and spectator performance requirements in stadiums and arenas.",
    detail:
      "Our stadium lighting solutions are engineered for broadcast-grade performance, ensuring even illumination, minimal glare and consistent color rendering. We design systems that support night events, camera coverage and spectator comfort.\n\nFrom tower installation to control and automation, our lighting packages are optimized for long-term energy efficiency and simple maintenance. We also coordinate with venue architects and operators to preserve the stadium aesthetic.\n\nBudhiraja has delivered lighting for large-scale sports facilities with a focus on reliability, compliance with competition standards and operational control.",
    offerings: [
      "Floodlight design and installation",
      "Control and dimming systems",
      "Glare reduction and uniformity planning",
      "Energy-efficient LED upgrades",
    ],
    sectors: ["Sports stadiums", "Event venues", "Public arenas"],
  },
  {
    slug: "smart-security-solutions",
    icon: Shield,
    title: "Smart Security Solutions",
    desc: "Integrated security infrastructure with CCTV, access control and command center systems that protect assets and people across critical sites.",
    detail:
      "Budhiraja’s security systems bring together surveillance, access control and emergency response into a centralized solution. We design CCTV, intrusion detection and command-center workflows for high-risk environments.\n\nOur deployments are tailored for secure facilities, ensuring that operators have real-time visibility, incident logging and rapid escalation paths. We also integrate with physical access systems to maintain a consistent security posture.\n\nThe result is a smart security framework that can be monitored, audited and scaled as your site requirements grow.",
    offerings: [
      "IP CCTV and analytics",
      "Biometric access control",
      "Command center integration",
      "Perimeter protection and alarms",
    ],
    sectors: ["Government", "Industrial", "Healthcare"],
  },
  {
    slug: "automation-controls",
    icon: Cpu,
    title: "Automation & Controls",
    desc: "PLC, SCADA, BMS and IoT automation systems that optimize plant performance, energy use and asset availability.",
    detail:
      "Our automation services connect sensors, controllers and human interfaces to make building and industrial systems smarter. We implement PLC, SCADA and BMS solutions that automate processes, improve monitoring and reduce manual intervention.\n\nThe systems we build are designed for resilience, with redundant communication paths and structured control logic. That means faster fault detection, better energy management and higher uptime for equipment.\n\nBudhiraja also supports IoT-enabled dashboards and remote access so decision-makers can view plant performance from anywhere.",
    offerings: [
      "PLC and SCADA engineering",
      "BMS for intelligent buildings",
      "IoT monitoring dashboards",
      "Control panel programming",
    ],
    sectors: ["Manufacturing", "Commercial buildings", "Smart campuses"],
  },
  {
    slug: "bus-trunking-systems",
    icon: LayoutGrid,
    title: "Bus Trunking Systems",
    desc: "High-current busway systems for high-rise, industrial and commercial installations, built for efficiency and easy maintenance.",
    detail:
      "Bus trunking offers a compact, modular solution for power distribution in large buildings and industrial plants. Budhiraja installs high-current bus ducts that reduce cable runs, improve flexibility and simplify future expansion.\n\nOur engineers design the system layout keeping accessibility, cooling and fire safety in mind. The result is a distribution system that can be expanded without major rebuilds.\n\nWe also provide commissioning and testing so the trunking system performs reliably under full operational load.",
    offerings: [
      "High-current busway installation",
      "Modular distribution design",
      "System testing and commissioning",
      "Future-ready expansion planning",
    ],
    sectors: ["High-rise buildings", "Industrial plants", "Data centers"],
  },
  {
    slug: "electrical-panels",
    icon: Activity,
    title: "Electrical Panels",
    desc: "Custom LT, MCC and PCC panels manufactured to IEC and Indian standards, with quality wiring, protection and control integration.",
    detail:
      "Budhiraja fabricates and installs control and distribution panels that form the backbone of electrical systems. Our panels include MCC, PCC and LT distribution boards with integrated protection, metering and automation.\n\nWe follow strict quality assurance practices during panel assembly, wiring and factory acceptance testing. This ensures consistent performance and simplifies commissioning on site.\n\nOur panel solutions are tailored to customer needs, whether for industrial drives, building services or specialized process equipment.",
    offerings: [
      "Custom panel fabrication",
      "Protection and metering integration",
      "Factory acceptance testing",
      "On-site installation support",
    ],
    sectors: ["Industrial", "Commercial", "Government"],
  },
  {
    slug: "access-control",
    icon: KeyRound,
    title: "Access Control",
    desc: "Enterprise access solutions using biometric, RFID and mobile credentials to secure buildings, campuses and restricted areas.",
    detail:
      "Our access control systems are designed for secure, user-friendly operation in corporate, industrial and government environments. We deploy biometric readers, RFID credentials and mobile access to manage entry points efficiently.\n\nThe systems we install support visitor management, time attendance and layered security zones. That makes it easy to enforce policies and monitor movement through critical areas.\n\nIntegration with CCTV and alarm systems adds another layer of security, so the overall solution can respond to incidents quickly and reliably.",
    offerings: [
      "Biometric and RFID readers",
      "Visitor and credential management",
      "Security zone design",
      "Integration with CCTV and alarms",
    ],
    sectors: ["Enterprise", "Healthcare", "Education"],
  },
  {
    slug: "parking-solutions",
    icon: Car,
    title: "Parking Solutions",
    desc: "Automated parking and guidance systems that improve traffic flow, safety and revenue capture for commercial properties.",
    detail:
      "Budhiraja delivers intelligent parking solutions for commercial buildings, malls and transport hubs. Our systems include automated entry/exit, bay guidance and payment integration to streamline vehicle movement.\n\nWe design the parking infrastructure to reduce congestion and enhance safety for drivers and pedestrians. Real-time guidance and monitoring help minimize search times and maximize occupancy.\n\nThese solutions also integrate with access control and facility management systems to give operators clear visibility and better revenue control.",
    offerings: [
      "Automated entry and exit systems",
      "Bay guidance displays",
      "Revenue control integration",
      "Safety and lighting coordination",
    ],
    sectors: ["Retail", "Commercial", "Transport hubs"],
  },
  {
    slug: "landscape-lighting",
    icon: TreePine,
    title: "Landscape Lighting",
    desc: "Architectural and landscape lighting systems that enhance outdoor spaces, facades and public realms with precision illumination.",
    detail:
      "Our landscape lighting designs enrich campuses, parks and building exteriors with elegant illumination that balances aesthetics and functionality. We select fixtures, layouts and control strategies to complement architecture and night-time activity.\n\nEnergy efficiency is built into every design, using LED and smart controls to reduce consumption while preserving visual impact. We also focus on light pollution mitigation and safety lighting for walkways and entrances.\n\nBudhiraja combines design sensitivity with robust electrical execution to produce lighting environments that are beautiful, safe and low-maintenance.",
    offerings: [
      "Architectural facade lighting",
      "Pathway and landscape illumination",
      "Smart lighting controls",
      "Energy-efficient LED upgrades",
    ],
    sectors: ["Hospitality", "Corporate campuses", "Public spaces"],
  },
  {
    slug: "maintenance-services",
    icon: Wrench,
    title: "Maintenance Services",
    desc: "Preventive and corrective electrical maintenance backed by 24×7 response, asset audits and SLA-driven uptime assurance.",
    detail:
      "Budhiraja’s maintenance services keep electrical systems healthy and reliable through planned inspections and fast corrective action. We offer preventive maintenance, periodic testing and troubleshooting for substations, distribution systems and control equipment.\n\nOur response teams are available around the clock, helping customers minimize downtime and preserve production schedules. We also provide asset condition reporting and improvement recommendations.\n\nWith a focus on compliance and operational continuity, our maintenance contracts are designed to protect critical infrastructure and support safe, efficient performance.",
    offerings: [
      "Preventive maintenance plans",
      "24×7 corrective response",
      "Asset audits and reporting",
      "Testing and compliance support",
    ],
    sectors: ["Industrials", "Infrastructure", "Facilities management"],
  },
];

export function getServiceBySlug(slug?: string) {
  return SERVICES.find((service) => service.slug === slug) ?? null;
}

export function getServiceSlugs() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}
