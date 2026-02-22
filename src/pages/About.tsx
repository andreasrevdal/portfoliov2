import { motion } from "framer-motion";
import { Briefcase, Award, Cpu } from "lucide-react";

const skills = [
  "Linux servers", "Windows servers", "Active Directory / LDAP",
  "Networking & switching (Layer 4)", "VMware / ESXi", "Proxmox",
  "TrueNAS / TrueNAS SCALE", "Kubernetes / K8s / K3s",
];

const certifications = [
  "Azure Active Directory: Basics",
  "Microsoft 365: Implement Modern Device Services",
  "Microsoft 365: Implement Security and Threat Management",
  "Microsoft Office 365: Administration",
  "Microsoft Office 365: Advanced Threat Protection",
  "Network Design and Performance Evaluation with Simulations",
  "Penetration Testing Active Directory",
  "NSM — Principles of ICT Security",
];

const workHistory = [
  {
    period: "March 2025 – present",
    company: "Sykehuspartner",
    role: "IT Consultant",
    tasks: [
      "Datacenter operations and infrastructure work",
      "Stability, security, and documentation",
      "Collaboration across teams and vendors",
    ],
  },
  {
    period: "November 2024 – March 2025",
    company: "Sykehuspartner",
    role: "IT Consultant — On-call & Critical Systems",
    tasks: [
      "24/7 responsibility for critical services",
      "Incident and outage coordination",
      "Fast troubleshooting under pressure",
    ],
  },
  {
    period: "March 2022 – November 2024",
    company: "Sykehuspartner",
    role: "IT Consultant",
    tasks: [
      "Cross-platform troubleshooting",
      "Training and knowledge sharing",
      "Adaptation, advisory work, and strong documentation",
    ],
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <div className="container px-6 py-20 max-w-4xl mx-auto">
      {/* Header */}
      <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-3">
          About <span className="gradient-text">me</span>
        </h1>
        <p className="text-muted-foreground text-lg">
          IT Consultant — Sykehuspartner · Norway
        </p>
      </motion.div>

      {/* Quick Info */}
      <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }} className="glass p-8 mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm">
          {[
            { label: "Role", value: "IT Consultant" },
            { label: "Since", value: "March 2025" },
            { label: "Languages", value: "Norwegian / English" },
            { label: "Email", value: "andreas@revdal.no" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <span className="px-3 py-1.5 bg-primary/15 text-primary rounded-md font-semibold text-xs uppercase tracking-wider">
                {item.label}
              </span>
              <span className="text-foreground">{item.value}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Skills & Certs */}
      <div className="grid md:grid-cols-2 gap-6 mb-14">
        <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.2 }} className="glass p-8">
          <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-primary" />
            Top Skills
          </h2>
          <p className="text-muted-foreground text-sm mb-5">Core infrastructure focus.</p>
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <span key={s} className="px-3 py-2 bg-secondary/80 text-foreground text-xs rounded-lg border border-border font-medium">
                {s}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.3 }} className="glass p-8">
          <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
            <Award className="w-5 h-5 text-primary" />
            Certifications
          </h2>
          <p className="text-muted-foreground text-sm mb-5">Identity, Microsoft 365, security, and networking.</p>
          <div className="flex flex-col gap-2">
            {certifications.map((c) => (
              <span key={c} className="px-4 py-2.5 bg-secondary/80 text-foreground text-xs rounded-lg border border-border font-medium leading-relaxed">
                {c}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Work History */}
      <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.4 }}>
        <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-primary" />
          Work
        </h2>
        <p className="text-muted-foreground text-sm mb-8">Previous roles and responsibilities.</p>

        <div className="space-y-5">
          {workHistory.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
              className="glass p-6 hover:glow-border transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                <div className="shrink-0 min-w-[180px]">
                  <span className="inline-block px-3 py-1.5 bg-primary/15 text-primary text-xs rounded-md font-semibold mb-1">
                    {job.period}
                  </span>
                  <p className="text-xs text-muted-foreground mt-1">{job.company}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-3">{job.role}</h3>
                  <ul className="space-y-2">
                    {job.tasks.map((t, j) => (
                      <li key={j} className="text-sm text-foreground/75 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About;
