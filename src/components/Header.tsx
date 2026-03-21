import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  // Close on Escape
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Close on click outside the mobile controls/dropdown
  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (!open) return;
      const panel = panelRef.current;
      if (!panel) return;
      if (!panel.contains(e.target as Node)) setOpen(false);
    };

    window.addEventListener("mousedown", onClickOutside);
    return () => window.removeEventListener("mousedown", onClickOutside);
  }, [open]);

  // Add a subtle shadow once the user scrolls
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}>
      <div className={styles.inner}>
        <Link
          href="/"
          className={styles.brand}
          aria-label="Home"
          onClick={() => setOpen(false)}
        >
         <img
  src="images/logo.webp"
  alt="Starshine Cleaning"
  width="84"
  height="84"
/>
        </Link>

        {/* Desktop nav */}
        <nav className={styles.nav} aria-label="Primary navigation">
          <Link href="/services" className={styles.link}>
            Services
          </Link>

          <Link href="/about" className={styles.link}>
            About
          </Link>

          <Link href="/faq" className={styles.link}>
            FAQ
          </Link>

          <Link href="/book" className={`${styles.cta} btn btnAccent btnSm`}>
            Book Now
          </Link>
        </nav>

        {/* Mobile controls (hamburger + dropdown) */}
        <div className={styles.mobileControls} ref={panelRef}>
          <button
            type="button"
            className={styles.menuBtn}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={styles.menuIcon} aria-hidden="true" />
          </button>

          {open && (
            <div className={styles.dropdown} role="menu" aria-label="Mobile navigation">
              <Link
                href="/services"
                className={styles.dropdownLink}
                onClick={() => setOpen(false)}
              >
                Services
              </Link>

              <Link
                href="/about"
                className={styles.dropdownLink}
                onClick={() => setOpen(false)}
              >
                About
              </Link>

              <Link href="/faq" className={styles.dropdownLink} onClick={() => setOpen(false)}>
                FAQ
              </Link>

              <div className={styles.dropdownDivider} />

              <Link
                href="/book"
                className={`${styles.dropdownCta} btn btnAccent`}
                onClick={() => setOpen(false)}
              >
                Book Now
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}