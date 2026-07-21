const pCommercial = "/images/project-commercial.jpg";
const pGovernment = "/images/project-government.jpg";
const pIndustrial = "/images/project-industrial.jpg";
const pInfra = "/images/project-infrastructure.jpg";
const pStadium = "/images/project-stadium.jpg";
const pSubstation = "/images/project-substation.jpg";

export type Project = {
  slug: string;
  image: string;
  tag: string;
  title: string;
  location: string;
  client: string;
  services: string[];
  year: string;
  overview: string;
  scope: string[];
};

export const PROJECTS: Project[] = [
  {
    slug: "66-kv-grid-substation",
    image: pSubstation,
    tag: "Substations",
    title: "66 kV Grid Substation",
    location: "Uttar Pradesh",
    client: "State Utility",
    services: ["EPC", "Testing", "Commissioning"],
    year: "2024",
    overview: "A coordinated grid-substation assignment bringing engineering, equipment, installation and commissioning responsibilities into one delivery framework.",
    scope: ["Engineering and equipment coordination", "Electrical installation and cabling", "Testing, commissioning and handover"],
  },
  {
    slug: "international-cricket-stadium-lighting",
    image: pStadium,
    tag: "Sports Stadiums",
    title: "International Cricket Stadium Lighting",
    location: "New Delhi",
    client: "Sports Authority",
    services: ["Floodlighting", "Controls"],
    year: "2023",
    overview: "A specialist sports-lighting project focused on coordinated floodlighting, controls and site commissioning for a major cricket venue.",
    scope: ["Floodlighting system coordination", "Lighting controls integration", "Testing, aiming and commissioning"],
  },
  {
    slug: "manufacturing-plant-electrification",
    image: pIndustrial,
    tag: "Industrial Plants",
    title: "Manufacturing Plant Electrification",
    location: "Gurugram",
    client: "Fortune 500 OEM",
    services: ["HT/LT", "Bus Trunking", "Panels"],
    year: "2024",
    overview: "Integrated electrical infrastructure for a manufacturing environment, coordinating power distribution with equipment and operational requirements.",
    scope: ["HT and LT distribution", "Bus-trunking integration", "Panel installation and coordination"],
  },
  {
    slug: "grade-a-corporate-campus",
    image: pCommercial,
    tag: "Commercial Buildings",
    title: "Grade-A Corporate Campus",
    location: "Bengaluru",
    client: "Confidential",
    services: ["MEP", "Automation", "Security"],
    year: "2025",
    overview: "A multidisciplinary commercial-campus assignment combining electrical services with automation and integrated security systems.",
    scope: ["Electrical-services coordination", "Building automation integration", "Security-system interfaces"],
  },
  {
    slug: "national-highway-illumination",
    image: pInfra,
    tag: "Infrastructure",
    title: "National Highway Illumination",
    location: "NH-48 Corridor",
    client: "NHAI",
    services: ["Highway Lighting", "SCADA"],
    year: "2023",
    overview: "Public-infrastructure illumination coordinated with control and monitoring systems for a national-highway environment.",
    scope: ["Highway-lighting infrastructure", "SCADA and controls integration", "System testing and handover"],
  },
  {
    slug: "government-complex-retrofit",
    image: pGovernment,
    tag: "Government Projects",
    title: "Government Complex Retrofit",
    location: "New Delhi",
    client: "CPWD",
    services: ["Electrification", "Smart Systems"],
    year: "2024",
    overview: "An electrical retrofit for an operational government facility, combining upgraded electrification with coordinated smart systems.",
    scope: ["Electrical-system retrofit", "Smart-systems integration", "Testing and project documentation"],
  },
];

export function getProject(slug: string) {
  return PROJECTS.find((project) => project.slug === slug);
}

