"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./Header.module.css";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const servicesRef = useRef<HTMLDivElement | null>(null);

  const isActive = useMemo(() => {
    const p = pathname || "/";
    return (href: string) => (href === "/" ? p === "/" : p.startsWith(href));
  }, [pathname]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setServicesOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      const target = e.target as Node;
      if (menuRef.current && !menuRef.current.contains(target)) setMobileOpen(false);
      if (servicesRef.current && !servicesRef.current.contains(target)) setServicesOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <header className={styles.wrap}>
      <a className="skip-link" href="#main">Skip to content</a>

      <div className={`${styles.bar} container`}>
        <Link className={styles.brand} href="/" aria-label={`${site.name} home`}>
          <img
            src="/assets/images/logo-titanium-barrier.svg"
            alt="Titanium Barrier Pest Control"
            className={styles.logo}
            width={210}
            height={56}
            loading="eager"
          />
        </Link>

        <nav className={styles.nav} aria-label="Primary">
          <Link className={`${styles.link} ${isActive("/") ? styles.active : ""}`} href="/">Home</Link>

          <div className={styles.dropdown} ref={servicesRef}>
            <button
              className={`${styles.link} ${isActive("/services") ? styles.active : ""}`}
              aria-haspopup="menu"
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen(v => !v)}
            >
              Services <span className={styles.caret} aria-hidden="true">▾</span>
            </button>

            {servicesOpen && (
              <div className={styles.menu} role="menu" aria-label="Services menu">
                <Link role="menuitem" className={styles.menuItem} href="/services" onClick={() => setServicesOpen(false)}>
                  All Services
                </Link>
                <div className={styles.menuDivider} />
                {services.map(s => (
                  <Link
                    key={s.slug}
                    role="menuitem"
                    className={styles.menuItem}
                    href={`/services/${s.slug}`}
                    onClick={() => setServicesOpen(false)}
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link className={`${styles.link} ${isActive("/about") ? styles.active : ""}`} href="/about">About</Link>
          <Link className={`${styles.link} ${isActive("/testimonials") ? styles.active : ""}`} href="/testimonials">Testimonials</Link>
          <Link className={`${styles.link} ${isActive("/blog") ? styles.active : ""}`} href="/blog">Blog</Link>
          <Link className={`${styles.link} ${isActive("/contact") ? styles.active : ""}`} href="/contact">Contact</Link>

          <a className="btn btn-primary" href="/contact#contact-form">Request a Quote</a>
        </nav>

        <div className={styles.mobile} ref={menuRef}>
          <button
            className={styles.burger}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(v => !v)}
          >
            <span aria-hidden="true">{mobileOpen ? "✕" : "☰"}</span>
          </button>

          {mobileOpen && (
            <div className={styles.mobilePanel} role="dialog" aria-label="Mobile menu">
              <Link className={styles.mobileLink} href="/" onClick={() => setMobileOpen(false)}>Home</Link>
              <Link className={styles.mobileLink} href="/about" onClick={() => setMobileOpen(false)}>About</Link>
              <Link className={styles.mobileLink} href="/services" onClick={() => setMobileOpen(false)}>Services</Link>
              <Link className={styles.mobileLink} href="/testimonials" onClick={() => setMobileOpen(false)}>Testimonials</Link>
              <Link className={styles.mobileLink} href="/blog" onClick={() => setMobileOpen(false)}>Blog</Link>
              <Link className={styles.mobileLink} href="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>

              <div className={styles.mobileDivider} />
              <a className="btn btn-primary" href="/contact#contact-form" onClick={() => setMobileOpen(false)}>Book Inspection</a>
              <a className="btn btn-quiet" href={`tel:${site.phoneE164}`} onClick={() => setMobileOpen(false)}>Call {site.phoneDisplay}</a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
