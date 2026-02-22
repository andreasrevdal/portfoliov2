import { motion } from "framer-motion";
import { ArrowRight, Copy, Github, Linkedin, Mail, Send } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const subjectOptions = [
  { value: "consulting", label: "Consulting inquiry" },
  { value: "collaboration", label: "Collaboration" },
  { value: "job", label: "Job opportunity" },
  { value: "other", label: "Other" },
];

const messageTemplates: Record<string, string> = {
  consulting: "Hi Andreas,\n\nI'm reaching out regarding a consulting opportunity. I'd love to discuss how your expertise in infrastructure could help us.\n\nLooking forward to hearing from you.",
  collaboration: "Hi Andreas,\n\nI came across your work and think we could collaborate on something great. Let me know if you're open to discussing further.",
  job: "Hi Andreas,\n\nWe have an exciting role that matches your skillset. I'd love to share more details with you.\n\nBest regards,",
  other: "",
};

const Home = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const copyEmail = () => {
    navigator.clipboard.writeText("andreas@revdal.no");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubjectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      subject: value,
      message: messageTemplates[value] ?? "",
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(formData.subject ? subjectOptions.find(s => s.value === formData.subject)?.label ?? formData.subject : "Contact");
    const body = encodeURIComponent(`${formData.message}\n\nFrom: ${formData.name} (${formData.email})`);
    window.location.href = `mailto:andreas@revdal.no?subject=${subject}&body=${body}`;
  };

  const inputClass = "w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all";

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center">
      <div className="container px-6 py-20 max-w-2xl text-center">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary font-mono text-sm mb-4">Hi, my name is</p>
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-4">
            <span className="gradient-text">Andreas</span>
            <br />
            <span className="text-foreground">Revdal</span>
          </h1>
          <p className="text-lg text-muted-foreground mx-auto max-w-md mb-8">
            IT Consultant — building and securing infrastructure.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={copyEmail}
              className="glass glow-border px-5 py-2.5 rounded-lg text-sm font-medium text-primary hover:bg-primary/10 transition-all flex items-center gap-2"
            >
              <Copy className="w-4 h-4" />
              {copied ? "Copied!" : "Copy email"}
            </button>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="glass px-5 py-2.5 rounded-lg text-sm font-medium text-foreground hover:text-primary hover:bg-secondary transition-all flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="glass px-5 py-2.5 rounded-lg text-sm font-medium text-foreground hover:text-primary hover:bg-secondary transition-all flex items-center gap-2"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-left"
        >
          <h2 className="text-2xl font-semibold mb-2 flex items-center justify-center gap-3">
            <Mail className="w-5 h-5 text-primary" />
            Get in touch
          </h2>
          <p className="text-muted-foreground text-sm mb-6 text-center">
            Got an idea or need help with something? Reach out and let's have a look together.
          </p>
          <form onSubmit={handleSubmit} className="glass p-6 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                required
                maxLength={100}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={inputClass}
              />
              <input
                type="email"
                placeholder="Email"
                required
                maxLength={255}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={inputClass}
              />
            </div>
            <div>
              <select
                value={formData.subject}
                onChange={(e) => handleSubjectChange(e.target.value)}
                className={`${inputClass} ${!formData.subject ? "text-muted-foreground" : ""}`}
                required
              >
                <option value="" disabled>Select a subject…</option>
                {subjectOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
            <div>
              <textarea
                placeholder={formData.subject === "other" ? "Write your message here…" : "Select a subject above to get a template, or just write freely."}
                required
                rows={6}
                maxLength={2000}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={`${inputClass} resize-none`}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground font-medium py-3 rounded-lg hover:brightness-110 transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Send message
            </button>
          </form>
        </motion.div>

        {/* Link to About */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex justify-center"
        >
          <Link
            to="/about"
            className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2 group"
          >
            Learn more about me
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
