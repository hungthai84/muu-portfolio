"use client";

import { useState } from "react";
import { useTheme } from "./ThemeProvider";

const LINKS = [
  { href: "#home", label: "trang chủ" },
  { href: "#about", label: "về tôi" },
  { href: "#skills", label: "kỹ năng" },
  { href: "#education", label: "học vấn" },
  { href: "#employment", label: "kinh nghiệm" },
  { href: "#portfolio", label: "dự án" },
  { href: "#awards", label: "giải thưởng" },
  { href: "#blog", label: "blog" },
  { href: "#contact", label: "liên hệ" },
];

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home">
          MUU — Portfolio
        </a>
        <div className="header-actions">
          <button
            type="button"
            className="icon-btn"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Chuyển sang giao diện sáng" : "Chuyển sang giao diện tối"}
            title={theme === "dark" ? "Giao diện sáng" : "Giao diện tối"}
          >
            <span className="moon" aria-hidden="true">
              🌙
            </span>
            <span className="sun" aria-hidden="true">
              ☀️
            </span>
          </button>
          <button
            type="button"
            className="icon-btn"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Đóng menu" : "Mở menu"}
            aria-expanded={open}
          >
            <i className={`fa ${open ? "fa-times" : "fa-bars"}`} aria-hidden="true" />
          </button>
        </div>
      </header>

      <nav className={`nav-drawer ${open ? "open" : ""}`} aria-hidden={!open}>
        <ul>
          {LINKS.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={close}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
