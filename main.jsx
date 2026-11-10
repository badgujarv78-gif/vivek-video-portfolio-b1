import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { ArrowDownRight, ArrowUpRight, Play, Plus, Menu, X, Clapperboard, Aperture, Send, Linkedin, Instagram, Mail, Film, Layers, MonitorPlay, Sparkles } from "lucide-react";
import "./styles.css";

const projects = [
  // Replace each YouTube ID and project details with your own work.
  { id: "SeBXgxVKD9E", number: "01", type: "SHOWREEL", title: "Selected work / showreel", note: "A fast-cut overview of editing, pacing and visual storytelling.", tag: "Showreel" },
  { id: "Q05VB_gZXzs", number: "02", type: "TECHNOLOGY", title: "Technology story", note: "A product-led story built to make complex technology easier to understand.", tag: "B2B Tech" },
  { id: "uJH0EP1sc24", number: "03", type: "BRAND FILM", title: "Brand & business film", note: "Corporate storytelling with a clean, confident visual language.", tag: "Corporate" },
  { id: "WQNGm1B-MCA", number: "04", type: "MOTION", title: "Motion graphics piece", note: "Movement, typography and graphic elements designed to hold attention.", tag: "Motion" },
  { id: "R-KSkFfs1uY", number: "05", type: "CAMPAIGN", title: "Campaign cut", note: "A concise edit shaped for digital audiences and campaign delivery.", tag: "Campaign" },
  { id: "JRtDDklk2Lc", number: "06", type: "SOCIAL VIDEO", title: "Short-form edit", note: "A social-first format with rhythm, clarity and a strong opening.", tag: "Social" }
];

const skills = [
  ["01", "Video editing", "Story structure · pacing · sound design · finishing"],
  ["02", "Motion graphics", "2D animation · kinetic type · transitions · compositing"],
  ["03", "B2B technology", "Product explainers · corporate films · technical storytelling"],
  ["04", "AI-assisted creation", "Google Flow · AI visual workflows · creative experimentation"]
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("All");
  const filters = ["All", "B2B Tech", "Corporate", "Motion", "Campaign", "Social"];
  const shown = active === "All" ? projects : projects.filter(p => p.tag === active);

  const closeMenu = () => setMenuOpen(false);
  return (
    <div className="site-shell">
      <div className="grain" />
      <header className="topbar">
        <a className="brand" href="#top" onClick={closeMenu}><span className="brand-mark">VB<span>✳</span></span><span>VIVEK BADGUJAR<small>VIDEO EDITOR / MOTION DESIGNER</small></span></a>
        <button className="menu-toggle" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          <a href="#work" onClick={closeMenu}>WORK <i>01</i></a>
          <a href="#about" onClick={closeMenu}>ABOUT <i>02</i></a>
          <a href="#toolkit" onClick={closeMenu}>TOOLKIT <i>03</i></a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>LET'S TALK <ArrowUpRight size={14}/></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-meta"><span><b className="live-dot"/> AVAILABLE FOR SELECT PROJECTS</span><span>BASED IN INDIA · WORKING WORLDWIDE</span></div>
          <div className="hero-title-wrap">
            <p className="eyebrow">I TURN COMPLEX IDEAS INTO</p>
            <h1>VISUAL<br/><em>STORIES.</em></h1>
            <div className="hero-stamp"><Aperture size={29}/><span>EDIT WITH<br/>INTENTION.</span></div>
          </div>
          <div className="hero-bottom">
            <p className="hero-intro">Video Editor & Motion Graphics Designer focused on <strong>B2B technology, corporate films and digital-first content.</strong> Making every frame work harder.</p>
            <a className="round-link" href="#work" aria-label="Explore selected work"><ArrowDownRight size={27}/></a>
            <div className="hero-index"><span>SCROLL TO EXPLORE</span><strong>© 2026</strong></div>
          </div>
          <div className="hero-graphic" aria-hidden="true"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orbit-core"><Play fill="currentColor" size={20}/></div><span className="graphic-label">FRAME<br/>01—24</span></div>
        </section>

        <section className="ticker" aria-label="Specialties"><div className="ticker-track">{Array.from({length: 2}).map((_,i)=><span key={i}>EDITING <b>✳</b> MOTION DESIGN <b>✳</b> B2B TECHNOLOGY <b>✳</b> STORYTELLING <b>✳</b> CREATIVE PRODUCTION <b>✳</b></span>)}</div></section>

        <section id="work" className="work section-wrap section-space">
          <div className="section-heading"><div><span className="eyebrow">01 / THE PORTFOLIO</span><h2>SELECTED<br/><em>FRAMES.</em></h2></div><p>A collection of edits, visual experiments and stories. Replace these starter embeds with your latest work whenever you're ready.</p></div>
          <div className="filter-row">{filters.map(f=><button key={f} className={active===f?"filter active":"filter"} onClick={()=>setActive(f)}>{f}</button>)}</div>
          <div className="project-grid">
            {shown.map((p,i)=><article className="project-card" key={p.id}>
              <a className="video-frame" href={`https://www.youtube.com/watch?v=${p.id}`} target="_blank" rel="noreferrer" aria-label={`Open ${p.title} on YouTube`}>
                <img src={`https://img.youtube.com/vi/${p.id}/hqdefault.jpg`} alt={`${p.title} video thumbnail`} onError={e=>{e.currentTarget.style.display="none"}}/>
                <div className="video-overlay"><span className="play-button"><Play fill="currentColor" size={18}/></span><span className="watch-label">WATCH PROJECT <ArrowUpRight size={15}/></span></div>
                <span className="project-number">{p.number}</span>
              </a>
              <div className="project-info"><div><span className="project-type">{p.type}</span><h3>{p.title}</h3><p>{p.note}</p></div><ArrowUpRight className="project-arrow" size={20}/></div>
            </article>)}
          </div>
          <div className="project-note"><Plus size={16}/> YOUR NEXT PROJECT GOES HERE — UPDATE THE PROJECTS LIST IN <code>src/main.jsx</code></div>
        </section>

        <section className="statement">
          <div className="statement-inner"><span className="eyebrow">THE CREATIVE POINT OF VIEW</span><p>GOOD EDITING ISN'T JUST WHAT YOU <em>SHOW.</em><br/>IT'S WHAT YOU MAKE PEOPLE <em>FEEL.</em></p><div className="statement-foot"><span>CLARITY OVER CLUTTER.</span><span>EVERY FRAME HAS A PURPOSE. ↗</span></div></div>
        </section>

        <section id="about" className="about section-wrap section-space">
          <div className="about-side"><span className="eyebrow">02 / A LITTLE ABOUT ME</span><div className="about-symbol"><Clapperboard size={42}/><span>STORY<br/>IN MOTION</span></div></div>
          <div className="about-main"><h2>MAKING TECH<br/>FEEL <em>HUMAN.</em></h2><p className="about-lead">I'm Vivek — a video editor and motion graphics designer with 2–3 years of hands-on experience creating content for brands and businesses.</p><p>My work sits at the intersection of technology and storytelling: corporate videos, B2B reels, product explainers and digital campaigns. I enjoy taking information-heavy subjects — from networking and data centres to cybersecurity — and shaping them into stories people can follow and remember.</p><p>I bring an editor's eye for rhythm, a designer's attention to detail and a curiosity for new creative tools, including AI-assisted workflows.</p><div className="about-facts"><div><strong>2–3</strong><span>YEARS EXPERIENCE</span></div><div><strong>B2B</strong><span>CORE FOCUS</span></div><div><strong>∞</strong><span>IDEAS TO EXPLORE</span></div></div></div>
        </section>

        <section id="toolkit" className="toolkit section-wrap section-space">
          <div className="section-heading"><div><span className="eyebrow">03 / WHAT I BRING</span><h2>THE <em>TOOLKIT.</em></h2></div><p>From the first rough cut to the final export, I care about the details that make a video feel finished.</p></div>
          <div className="skill-list">{skills.map(([n,t,d])=><div className="skill-row" key={n}><span className="skill-no">{n}</span><h3>{t}</h3><p>{d}</p><ArrowUpRight size={19}/></div>)}</div>
          <div className="software"><span className="eyebrow">SOFTWARE & WORKFLOWS</span><div className="software-tags"><span>ADOBE PREMIERE PRO</span><span>AFTER EFFECTS</span><span>GOOGLE FLOW</span><span>AI CREATIVE TOOLS</span><span>EDITORIAL STORYTELLING</span></div></div>
        </section>

        <section className="services-band"><div><Film size={25}/><span>EDIT</span></div><div><Layers size={25}/><span>ANIMATE</span></div><div><MonitorPlay size={25}/><span>EXPLAIN</span></div><div><Sparkles size={25}/><span>EXPERIMENT</span></div></section>

        <section id="contact" className="contact section-wrap section-space">
          <span className="eyebrow">04 / HAVE A GOOD STORY?</span><h2>LET'S MAKE<br/><em>IT MOVE.</em></h2>
          <div className="contact-bottom"><p>Have a project, a role or an idea in mind? I'd love to hear what you're working on.</p><a className="email-link" href="mailto:hello@vivekbadgujar.com">GET IN TOUCH <ArrowUpRight size={20}/></a></div>
          <div className="contact-links"><a href="mailto:hello@vivekbadgujar.com"><Mail size={16}/> EMAIL</a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={16}/> LINKEDIN</a><a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><Instagram size={16}/> INSTAGRAM</a></div>
        </section>
      </main>
      <footer className="footer"><a className="brand" href="#top"><span className="brand-mark">VB<span>✳</span></span><span>VIVEK BADGUJAR<small>VIDEO EDITOR / MOTION DESIGNER</small></span></a><span>BUILT TO TELL BETTER STORIES. © 2026</span><a href="#top">BACK TO TOP ↑</a></footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);