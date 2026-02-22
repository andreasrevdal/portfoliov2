import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "Homelab Infrastructure",
    description: "Full virtualized homelab running Proxmox, K3s, and TrueNAS for self-hosted services.",
    tags: ["Proxmox", "Kubernetes", "TrueNAS"],
    github: "#",
  },
  {
    title: "Network Monitoring Dashboard",
    description: "Real-time monitoring solution for datacenter networking using Grafana and Prometheus.",
    tags: ["Grafana", "Prometheus", "Docker"],
    github: "#",
  },
  {
    title: "Active Directory Automation",
    description: "PowerShell scripts for automating AD user provisioning, group management, and auditing.",
    tags: ["PowerShell", "Active Directory", "Automation"],
    github: "#",
  },
  {
    title: "Security Hardening Toolkit",
    description: "Collection of scripts and configs for hardening Windows Server and Linux environments.",
    tags: ["Security", "Linux", "Windows Server"],
    github: "#",
  },
  {
    title: "Personal Portfolio",
    description: "This website — built with React, TypeScript, Tailwind CSS, and Framer Motion.",
    tags: ["React", "TypeScript", "Tailwind"],
    github: "#",
    live: "#",
  },
  {
    title: "Backup & DR Solution",
    description: "Automated backup and disaster recovery pipeline for critical infrastructure services.",
    tags: ["Bash", "Rsync", "Cron"],
    github: "#",
  },
];

const Projects = () => {
  return (
    <div className="container px-6 py-20 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h1 className="text-4xl font-bold mb-3">
          <span className="gradient-text">Projects</span>
        </h1>
        <p className="text-muted-foreground text-lg">Things I've built and worked on.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
            className="glass p-7 group hover:glow-border transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <Folder className="w-9 h-9 text-primary/50 group-hover:text-primary transition-colors" />
              <div className="flex gap-3">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
            <p className="text-sm text-foreground/65 mb-5 leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs font-mono text-primary bg-primary/10 px-2.5 py-1 rounded-md font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
