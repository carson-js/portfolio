"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./curb-preview.module.css";

const store = "https://apps.apple.com/us/app/curb-your-garage-digitized/id6763365112";
const chapters = [
  { label: "The overview", title: "A home for every mile.", text: "From your daily driver to your weekend favorite. Keep vehicle details, running costs, and maintenance together, in one place.", image: "detail", alt: "Curb vehicle overview with vehicle details and maintenance information" },
  { label: "The details", title: "Every stop has a story.", text: "Fuel, charging, and service entries, with the details that matter. See where it happened and keep a clear picture of your vehicle’s care.", image: "service", alt: "Curb service entry details" },
  { label: "The history", title: "Less searching. More knowing.", text: "A month or a year ago—it’s all within reach. Browse your history by month or search for the entry you need.", image: "fuelhistory", alt: "Curb fuel history organized by month" },
  { label: "What’s next", title: "Stay one turn ahead.", text: "An oil change. A tire rotation. One less thing to remember. Set maintenance reminders by date or mileage and let Curb keep watch.", image: "reminders", alt: "Curb maintenance reminder notification" },
];

function Screenshot({ name, alt, mode, className = "", priority = false }: { name: string; alt: string; mode: "light" | "dark"; className?: string; priority?: boolean }) {
  return <Image src={`/screenshots/${name}-${mode}.png`} alt={alt} width={1470} height={3000} className={className} priority={priority} sizes="(max-width: 700px) 48vw, 28vw" />;
}

export default function CurbPreview() {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const [progress, setProgress] = useState(0);
  const tour = useRef<HTMLElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const active = Math.min(chapters.length - 1, Math.floor(progress + 0.5));

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener("change", update);
    const appearance = window.matchMedia("(prefers-color-scheme: dark)");
    const updateAppearance = () => setMode(appearance.matches ? "dark" : "light");
    updateAppearance();
    appearance.addEventListener("change", updateAppearance);
    return () => {
      query.removeEventListener("change", update);
      appearance.removeEventListener("change", updateAppearance);
    };
  }, []);

  useEffect(() => {
    let frame = 0;
    const measure = () => {
      frame = 0;
      if (!tour.current) return;
      const bounds = tour.current.getBoundingClientRect();
      const distance = bounds.height - window.innerHeight;
      setProgress(Math.max(0, Math.min(chapters.length - 1, (-bounds.top / Math.max(1, distance)) * (chapters.length - 1))));
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(measure); };
    measure();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", schedule); window.removeEventListener("resize", schedule); };
  }, []);

  function goToChapter(index: number) {
    if (!tour.current) return;
    if (reducedMotion || window.matchMedia("(max-width: 700px), (max-height: 620px)").matches) {
      document.getElementById(`curb-chapter-${index}`)?.scrollIntoView({ behavior: "auto", block: "center" });
      return;
    }
    const top = window.scrollY + tour.current.getBoundingClientRect().top;
    window.scrollTo({ top: top + ((tour.current.offsetHeight - window.innerHeight) * index) / (chapters.length - 1), behavior: "smooth" });
  }

  return (
    <main className={styles.page}>
      <nav className={styles.nav} aria-label="Curb navigation">
        <a href="/curb" className={styles.brand}><Image src={`/curb-icon-${mode}.png`} alt="" width={34} height={34} />curb</a>
        <div className={styles.navLinks}><a href="#features">Explore Curb</a><a href="/curb/privacy">Privacy</a></div>
        <a href={store} target="_blank" rel="noopener noreferrer" className={styles.navDownload}>Get Curb <span aria-hidden="true">↗</span></a>
      </nav>

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <h1>Your car.<br />Your story.<br /><em>Your Curb.</em></h1>
          <p className={styles.heroDescription}>A little more clarity for the road ahead. Track maintenance, fuel, and everything that makes your garage yours.</p>
          <div className={styles.heroActions}><a href={store} target="_blank" rel="noopener noreferrer" className={styles.primary}>Download Curb <span aria-hidden="true">↗</span></a></div>
          <p className={styles.platforms}>iPhone · iPad · Mac · Apple Watch</p>
        </div>
        <div className={styles.heroVisual}>
          <Screenshot name="home-screen" alt="Curb garage showing your vehicles" mode={mode} className={styles.heroPhoneBack} priority />
          <Screenshot name="detail" alt="Curb vehicle details overview" mode={mode} className={styles.heroPhoneFront} priority />
        </div>
      </section>

      <section id="features" ref={tour} className={styles.tour} aria-label="Explore Curb features">
        <div className={styles.stage}>
          <div className={styles.slides}>
            {chapters.map((chapter, index) => {
              const distance = Math.abs(progress - index);
              const opacity = reducedMotion ? 1 : Math.max(0, Math.min(1, (0.72 - distance) / 0.32));
              return <article id={`curb-chapter-${index}`} key={chapter.image} className={styles.slide} data-active={active === index} style={{ "--slide-opacity": opacity } as React.CSSProperties}>
                <div className={styles.chapterCopy}><h2>{chapter.title}</h2><p>{chapter.text}</p></div>
                <div className={styles.chapterVisual}><Screenshot name={chapter.image} alt={chapter.alt} mode={mode} className={styles.chapterPhone} /></div>
              </article>;
            })}
          </div>
          <div className={styles.chapterNav} aria-label="Feature chapters">{chapters.map((chapter, index) => <button key={chapter.image} onClick={() => goToChapter(index)} aria-current={active === index ? "step" : undefined}><span className={styles.chapterTrack}><span style={{ transform: `scaleX(${Math.max(0, Math.min(1, progress - index + 1))})` }} /></span><span>{chapter.label}</span></button>)}</div>
        </div>
      </section>

      <section className={styles.everywhere}><div><h2>One garage.<br /><em>Everywhere you are.</em></h2><p>Native on iPhone, iPad, Mac, and Apple Watch. Your garage stays in sync through your own iCloud account.</p></div><Image src={`/screenshots/hero-multiplatform-${mode}.png`} alt="Curb on iPhone, iPad, Mac, and Apple Watch" width={3200} height={2000} sizes="(max-width: 700px) 90vw, 65vw" /></section>
      <section className={styles.closing}><h2>Your garage.<br /><em>Your business.</em></h2><p>No ads. No tracking. Your data syncs through your personal iCloud account. A useful app, with your privacy built in.</p><a href={store} target="_blank" rel="noopener noreferrer" className={styles.primary}>Find your Curb <span aria-hidden="true">↗</span></a><a href="/curb/privacy" className={styles.privacyLink}>Read our privacy policy ↗</a></section>
      <footer className={styles.footer}><a href="/">© 2026 Carson Smith</a><a href="mailto:support@carsonjs.me">Get in touch ↗</a></footer>
      <details className={styles.credits}><summary>Screenshot photo credits</summary><a href="https://unsplash.com/photos/silver-mercedes-benz-coupe-on-road-during-daytime-dlqYkIlDa3k">Porsche — Martin Katler</a><a href="https://unsplash.com/photos/a-blue-and-white-motorcycle-parked-in-a-parking-lot-hrW7-73lL0Y">Suzuki — Faiz</a><a href="https://unsplash.com/photos/a-tesla-electric-car-charging-at-a-charging-station-W8IvFdsKsl8">Tesla — Bram Van Oost</a></details>


    </main>
  );
}
