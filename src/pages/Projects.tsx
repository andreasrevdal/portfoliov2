import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "Docker Disk Doctor",
    description: "Docker Disk Doctor is a safe, explain-first CLI tool that shows how Docker is using disk space and what is safe to clean",
    tags: ["Proxmox", "Docker", "Linux"],
    github: "https://github.com/andreasrevdal/docker-disk-doctor",
  },
  {
    title: "WIP - ssh-multitool",
    description: "Tool for managing and automating SSH connections, with features like session management, command execution, and configuration handling.",
    tags: ["Linux", "SysAdmin", "Docker"],
    github: "https://github.com/andreasrevdal/ssh-multitool",
  },
  {
    title: "SDOAB: Simple Discord OpenAI Bot",
    description: "Integrate OpenAI's ChatGPT into your Discord bot. Customize this bot to behave exactly as you like.",
    tags: ["Discord", "OpenAI", "Fun"],
    github: "https://github.com/andreasrevdal/sdoab",
  },
  {
    title: "SDWS: Simple Discord Webhook Sender",
    description: "A simple tool to send messages to Discord channels via webhooks, with support for embeds and attachments.",
    tags: ["Discord", "Fun", "API"],
    github: "https://github.com/andreasrevdal/sdws",
  },
  {
    title: "WEMX Installer - OUTDATED",
    description: "A installer script for linux to setup Wemx automatically. This project is outdated and no longer maintained, but the installer script can be found in the repository.",
    tags: ["Linux", "SH", "Wemx"],
    github: "https://github.com/andreasrevdal/wemxinstaller",
  },
  {
    title: "Map-Styles",
    description: "A custom mapstyle for daymap and nightmap for immich. can be used for other map applications as well. The mapstyle is open source and can be found on github.",
    tags: ["Json", "Immich", "useful"],
    github: "https://github.com/andreasrevdal/Map-Styles",
  },
  {
    title: "First porfolio project",
    description: "A project to test and learn React, Tailwind and Framer Motion. This project is a portfolio website to showcase my skills and projects. The project is open source and can be found on github.",
    tags: ["TS", "React", "NGINX"],
    github: "https://github.com/andreasrevdal/portfolio",
  },
  {
    title: "Current porfolio site v2 (this one)",
    description: "Current site you are on now.",
    tags: ["TS", "React", "NGINX"],
    github: "https://github.com/andreasrevdal/portfoliov2",
    live: "https://revdal.no",
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
