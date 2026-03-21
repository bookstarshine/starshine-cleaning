import Link from "next/link";
import styles from "@/styles/Footer.module.css";
import { SiInstagram } from "@react-icons/all-files/si/SiInstagram";
import { SiFacebook } from "@react-icons/all-files/si/SiFacebook";
import { SiLinkedin } from "@react-icons/all-files/si/SiLinkedin";
import { SiYelp } from "@react-icons/all-files/si/SiYelp";
import { SiGoogle } from "@react-icons/all-files/si/SiGoogle";
export default function Footer() {
  return (
    <footer className={styles.footer}>
 

   <div className={styles.socialRow}>
  <a
    href="https://www.instagram.com/book.starshine/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Starshine Cleaning on Instagram"
    className={styles.socialIcon}
  >
    <SiInstagram />
  </a>

  <a
    href="https://www.facebook.com/profile.php?id=61587684502741"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Starshine Cleaning on Facebook"
    className={styles.socialIcon}
  >
    <SiFacebook />
  </a>

  <a
    href="https://linkedin.com/company/starshine-cleaning"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Starshine Cleaning on LinkedIn"
    className={styles.socialIcon}
  >
    <SiLinkedin />
  </a>
</div>

      {/* ROW 2 — LEGAL */}
      <div className={styles.linksRow}>
        <Link href="/accessibility" target="_blank">
          Accessibility
        </Link>
        <Link href="/privacy" target="_blank">
          Privacy Policy
        </Link>
        <Link href="/terms" target="_blank">
          Terms of Use
        </Link>
        <Link href="/policy" target="_blank">
          Service Terms
        </Link>
        
         <Link href="/scope" target="_blank">
          Scope
        </Link>
      </div>

      {/* ROW 3 — CONTACT */}
      <div className={styles.contactRow}>
       <a
  className={styles.contactLink}
  href="mailto:bookstarshine@gmail.com"
>
  Contact
</a>
        <span className={styles.dot}>·</span>



        <span>© 2026 Starshine Cleaning LLC</span>

        <span className={styles.dot}>·</span>

        <span>Park City, Utah</span>
      </div>
    </footer>
  );
}
