import { useEffect, useState } from "react";

type NavItem = {
  label: string;
  id: string;
};

const navItems: NavItem[] = [
  { label: "Home", id: "home" },
  { label: "Engineering", id: "engineering" },
  { label: "Music", id: "music" },
  { label: "Contact", id: "contact" },
];

export function NavBar() {
  const [activeId, setActiveId] = useState("home");

  const handleNavigation = (item: NavItem) => {
    document.getElementById(item.id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    const scroller = document.querySelector("#scrollContainer");

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActiveId(visible.target.id);
        }
      },
      {
        threshold: [0, 0.25, 0.5],
        rootMargin: "-20% 0px -60% 0px",
        root: scroller,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 mx-auto bg-(--content-bg) backdrop-blur h-16 w-fit rounded-4xl flex gap-6 px-6 font-medium text-slate-200 shadow-lg">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => handleNavigation(item)}
          className={
            activeId === item.id
              ? "transition text-cyan-200 cursor-pointer"
              : "transition hover:text-slate-400 cursor-pointer"
          }
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}
