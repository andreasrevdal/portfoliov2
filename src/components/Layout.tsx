import { NavLink, Outlet } from "react-router-dom";

const linkBase =
  "text-sm px-3 py-2 rounded-md transition-colors hover:text-primary";

const Layout = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="container mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
          <NavLink to="/" className="font-mono text-sm text-primary">
            andreas.revdal
          </NavLink>
          <nav className="flex items-center gap-2">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `${linkBase} ${isActive ? "bg-secondary text-primary" : "text-muted-foreground"}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? "bg-secondary text-primary" : "text-muted-foreground"}`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? "bg-secondary text-primary" : "text-muted-foreground"}`
              }
            >
              Projects
            </NavLink>
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
