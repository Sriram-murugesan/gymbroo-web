import { useEffect, useState } from 'react'
import hero from './assets/hero.png'
import { APK, RELEASES, REPO } from './links.js'

const FEATURES = [
  { icon: '🏋️', title: 'Log in seconds', text: 'Pick an exercise, add sets of kg × reps. Gymbroo shows what you did last time and a "beat it" target.' },
  { icon: '🏆', title: 'PR detection', text: 'Hit a new personal record and it lights up. Share it with a single tap.' },
  { icon: '📈', title: 'Real progress', text: 'Last session vs previous, this week vs last, with a trend chart. Compared by estimated 1-rep max, not just raw numbers.' },
  { icon: '⚖️', title: 'Muscle balance score', text: 'A 0–100 score across push, pull, legs and core, plus a push:pull ratio check. No more skipping leg day quietly.' },
  { icon: '🎯', title: 'Weekly goals', text: 'Set sessions per muscle per week. Logged workouts tick the boxes for you.' },
  { icon: '🔔', title: '7 PM reminders', text: "A daily nudge, or a roast, if you are behind. Train the muscle and tomorrow's roast is cancelled." },
]

const LEVELS = [
  { name: 'Gentle bro', mood: 'Supportive', quote: '“Legs missed you today, broo. Tomorrow?”' },
  { name: 'Drill sergeant', mood: 'Firm', quote: '“Two sessions short on back. Move it.”' },
  { name: 'No mercy', mood: 'Savage', quote: '“Skipped legs again? Your chicken legs called. They want a refund.”' },
]

const STEPS = [
  { n: '01', title: 'Set your goals', text: 'On first launch, choose sessions per week for each muscle and how harsh the roasts should be.' },
  { n: '02', title: 'Log your lifts', text: 'Add exercises and sets. Beat last time, collect PRs.' },
  { n: '03', title: 'Get held accountable', text: 'Watch your balance score, hit your goals, or get roasted.' },
]

function DownloadButtons({ size = '' }) {
  return (
    <div className="cta-row">
      <a className={`btn btn-primary ${size}`} href={APK}>
        <span aria-hidden>⬇</span> Download for Android
      </a>
      <a className={`btn btn-ghost ${size}`} href={RELEASES}>All releases</a>
    </div>
  )
}

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header className={`nav ${scrolled ? 'nav-solid' : ''}`}>
        <div className="wrap nav-in">
          <a className="brand" href="#top">
            <img src="./icon.png" alt="" width="32" height="32" />
            Gymbroo
          </a>
          <nav className="nav-links" aria-label="Sections">
            <a href="#features">Features</a>
            <a href="#roasts">Roasts</a>
            <a href="#how">How it works</a>
            <a href="#privacy">Privacy</a>
          </nav>
          <a className="btn btn-primary btn-sm" href={APK}>Download</a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="wrap hero-in">
            <div className="hero-copy">
              <p className="eyebrow">Free · Offline · No account</p>
              <h1>
                The gym tracker that <span className="hl">roasts you</span> for skipping.
              </h1>
              <p className="lead">
                Log your lifts, beat your last session, and get a 7 PM nudge, or a roast, when you fall behind on
                your weekly goals. All on your phone, nothing sent anywhere.
              </p>
              <DownloadButtons size="btn-lg" />
              <ul className="meta">
                <li>Android</li>
                <li>~18 MB</li>
                <li>v0.3.0</li>
              </ul>
            </div>
            <div className="hero-art">
              <img src={hero} alt="Low-poly illustration of a boxer in pink and navy" width="493" height="740" />
            </div>
          </div>
        </section>

        <section id="features" className="section">
          <div className="wrap">
            <p className="eyebrow">Features</p>
            <h2>Everything a lifter needs. Nothing they don't.</h2>
            <div className="grid">
              {FEATURES.map((f) => (
                <article key={f.title} className="card">
                  <span className="card-icon" aria-hidden>{f.icon}</span>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="roasts" className="section section-alt">
          <div className="wrap">
            <p className="eyebrow">Roasts 🍗</p>
            <h2>Pick your pain level.</h2>
            <p className="sub">
              Three intensities, all shareable as cards. You can even roast a friend and drop it in the group chat.
            </p>
            <div className="levels">
              {LEVELS.map((l) => (
                <article key={l.name} className="level">
                  <span className="tag">{l.mood}</span>
                  <h3>{l.name}</h3>
                  <p className="quote">{l.quote}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="how" className="section">
          <div className="wrap">
            <p className="eyebrow">How it works</p>
            <h2>Three steps. Zero setup pain.</h2>
            <ol className="steps">
              {STEPS.map((s) => (
                <li key={s.n}>
                  <span className="step-n">{s.n}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="privacy" className="section section-alt">
          <div className="wrap privacy">
            <div>
              <p className="eyebrow">Privacy</p>
              <h2>Your data stays on your phone.</h2>
              <p className="sub">
                No account, no tracking, and the app doesn't even request internet permission. Your workouts are
                stored on the device and only included in Android's encrypted backup if you have it on.
              </p>
            </div>
            <ul className="checks">
              <li>No sign-up or login</li>
              <li>No internet permission</li>
              <li>No ads, no analytics</li>
              <li>Open source on GitHub</li>
            </ul>
          </div>
        </section>

        <section className="section final">
          <div className="wrap final-in">
            <h2>Stop skipping. Start lifting.</h2>
            <p className="sub">Download Gymbroo and set your goals in under a minute.</p>
            <DownloadButtons size="btn-lg" />
            <p className="note">
              Android only for now. On first install, allow “Install unknown apps” for your browser. The iOS
              project is in the repo but hasn't been released yet.
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap foot-in">
          <span className="brand"><img src="./icon.png" alt="" width="24" height="24" /> Gymbroo</span>
          <span>Built with Flutter · <a href={REPO}>Source on GitHub</a></span>
        </div>
      </footer>
    </>
  )
}
