"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "./Nav.module.css";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <div
        className={`${styles.divider} ${styles.dividerTop}`}
        aria-hidden="true"
      >
        <span className={styles.diamond} />
        <span className={styles.line} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/nav/flourish.svg"
          alt=""
          className={styles.flourish}
        />
        <span className={styles.line} />
        <span className={styles.diamond} />
      </div>

      <nav className={styles.nav} aria-label="Main navigation">
        <ul className={styles.navLeft}>
          <li>
            <Link href="/halloween">Halloween</Link>
          </li>
          <li>
            <Link href="/christmas">Christmas</Link>
          </li>
          <li>
            <Link href="/stl">STL</Link>
          </li>
        </ul>

        <div className={styles.center}>
          <span className={styles.verticalRule} aria-hidden="true" />

          <Image
            src="/images/nav/fleur.svg"
            alt=""
            width={32}
            height={32}
            className={styles.icon}
            aria-hidden="true"
          />

          <Link
            href="/"
            className={styles.logo}
            aria-label="Gateway Haunts and Holly home"
          >
            <Image
              src="/images/logos/gatewayhhLogo.svg"
              alt="Gateway Haunts and Holly"
              width={160}
              height={64}
              priority
            />
          </Link>

          <Image
            src="/images/nav/fleur.svg"
            alt=""
            width={32}
            height={32}
            className={styles.icon}
            aria-hidden="true"
          />

          <span className={styles.verticalRule} aria-hidden="true" />
        </div>

        <ul className={styles.navRight}>
          <li>
            <Link href="/recipes">Recipes</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <div className={styles.mobileBar}>
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <Link
          href="/"
          className={styles.mobileLogo}
          aria-label="Gateway Haunts and Holly home"
          onClick={closeMenu}
        >
          <Image
            src="/images/logos/gatewayhhLogo.svg"
            alt="Gateway Haunts and Holly"
            width={140}
            height={56}
            priority
          />
        </Link>
      </div>

      <div className={styles.divider} aria-hidden="true">
        <span className={styles.diamond} />
        <span className={styles.line} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/nav/flourish.svg"
          alt=""
          className={styles.flourish}
        />
        <span className={styles.line} />
        <span className={styles.diamond} />
      </div>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          <ul>
            <li>
              <Link href="/halloween" onClick={closeMenu}>
                Halloween
              </Link>
            </li>
            <li>
              <Link href="/christmas" onClick={closeMenu}>
                Christmas
              </Link>
            </li>
            <li>
              <Link href="/stl" onClick={closeMenu}>
                STL
              </Link>
            </li>
            <li>
              <Link href="/recipes" onClick={closeMenu}>
                Recipes
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={closeMenu}>
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
