"use client";

import { useEffect, useState } from "react";

const sections = ["about", "services", "projects", "contact"];

export default function ScrollSpyNav() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // 60% of section in view = active
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex">
      {/* Sidebar Navigation */}
      <nav className="w-60 space-y-2">
        {sections.map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className={`block px-2 py-1 border-l-2 transition ${
              activeSection === section
                ? "border-white text-white font-medium"
                : "border-transparent text-gray-400"
            }`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
      </nav>

      {/* Page Content */}
      <div className="ml-6 space-y-20">
        {sections.map((section) => (
          <section
            key={section}
            id={section}
            className="h-screen border border-gray-200 flex items-center justify-center"
          >
            <h2 className="text-3xl">{section}</h2>
          </section>
        ))}
      </div>
    </div>
  );
}
