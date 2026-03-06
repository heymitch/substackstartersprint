import './index.css'
import { useState, useEffect, useRef } from 'react'

const DEFAULT_CTA_URL = 'https://ship.samcart.com/products/substack-starter-sprint'

/* ─── Fade-up on scroll ─── */
function FadeIn({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return (
    <div ref={ref} className={className} style={{
      transform: visible ? 'translateY(0)' : 'translateY(30px)',
      opacity: visible ? 1 : 0,
      transition: `transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, opacity 0.7s ease ${delay}ms`,
    }}>{children}</div>
  )
}

/* ─── Section 1: Hero ─── */
function Hero() {
  return (
    <section className="bg-cream border-[12px] border-orange">
      {/* Logo + Title */}
      <div className="text-center pt-8 pb-4">
        <img src="/images/substack-wordmark.png" alt="Substack" className="h-6 mx-auto mb-3" />
        <h1 className="font-display text-[clamp(48px,7vw,80px)] font-black leading-[0.95] tracking-tight uppercase">
          Starter Sprint
        </h1>
      </div>

      <div className="w-full h-px bg-black/15 mx-auto max-w-page" />

      {/* Content: left text, right photos */}
      <div className="max-w-page mx-auto px-6 pt-10 pb-6 flex flex-col md:flex-row gap-8 md:gap-6">
        {/* Left column */}
        <div className="flex-1 md:max-w-[45%] pb-4">
          <h2 className="font-serif text-[clamp(28px,3.5vw,42px)] leading-[1.15] mb-6">
            Launch, market, and monetize a category-defining{' '}
            <strong>newsletter  in 14 days.</strong>
          </h2>
          <p className="font-sans text-[15px] text-black/70 leading-relaxed mb-2">
            6 live sessions. Built together — with the founders of the internet's most successful writing businesses.
          </p>
          <p className="font-sans text-[15px] text-black/70 leading-relaxed mb-8">
            This isn't self-paced content you buy and forget.
            You show up, you do the work, you leave with a newsletter — and the replays forever.
          </p>

          <a href="#how-it-works" className="inline-block bg-black text-white font-serif text-[14px] font-normal uppercase tracking-[0.1em] px-10 py-4 hover:bg-black/85 transition">
            How It Works
          </a>

          <p className="font-sans text-[12px] text-black/50 mt-4">
            Cart opens <strong className="text-black">March 9</strong> · Cart closes <strong className="text-black">March 15</strong> · <strong className="text-black">Limited seats</strong>
          </p>
        </div>

        {/* Right column — headshots, stretches to match left column height */}
        <div className="flex-1 flex gap-3 justify-center md:justify-end">
          <div className="flex flex-col items-start flex-1 max-w-[240px]">
            <div className="w-full flex-1 min-h-0 rounded overflow-hidden">
              <img src="/images/dickie.png" alt="Dickie Bush" className="w-full h-full object-cover object-top" />
            </div>
            <div className="w-full h-px bg-black/20 mt-2" />
            <span className="font-serif text-[14px] mt-1">Dickie Bush</span>
          </div>
          <div className="flex flex-col items-start flex-1 max-w-[240px]">
            <div className="w-full flex-1 min-h-0 rounded overflow-hidden">
              <img src="/images/cole.png" alt="Nicolas Cole" className="w-full h-full object-cover object-top" />
            </div>
            <div className="w-full h-px bg-black/20 mt-2" />
            <span className="font-serif text-[14px] mt-1">Nicolas Cole</span>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Section 2: How It Works ─── */
function HowItWorks() {
  const stats = [
    { num: '6', label: 'Live Sessions', desc: '3 per week over 2 weeks. 60 minutes each.\nAll held at 3:00 PM ET.' },
    { num: '14', label: 'Days to Launch', desc: 'From blank page to\npositioned, monetized,\nand running newsletter\nin two weeks.' },
    { num: '∞', label: 'Lifetime Access', desc: 'All replays, slides,\ntemplates, .Skills, and\nbonuses yours to\nkeep forever.' },
    { num: '2', label: 'World-Class\nInstructors', desc: 'Dickie Bush and Nicolas\nCole, the people\nbehind the internet\'s\nbiggest writing\nbusinesses.' },
  ]

  return (
    <section id="how-it-works" className="bg-cream border-x-[12px] border-orange pt-0 pb-16 px-6">
      {/* Gradient transition from hero */}
      <div className="h-16" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.49) 0%, rgba(0,0,0,1) 34%, rgba(0,0,0,0) 100%)' }} />
      <div className="max-w-page mx-auto">
        <p className="font-sans text-[12px] font-bold text-orange uppercase tracking-[0.15em] mb-3">How It Works</p>
        <h2 className="font-serif text-[clamp(30px,4vw,44px)] leading-[1.15] mb-3">
          What is the Substack Starter Sprint?
        </h2>
        <div className="w-full h-px bg-black/15 mb-4" />
        <p className="font-sans text-[15px] text-black/70 leading-relaxed mb-10 max-w-[700px]">
          A 14-day live cohort where you build your newsletter from the ground up or relaunch one that stalled. Every session, you leave with something done. Not notes. Not homework. A live deliverable running on your Substack.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-black/10">
          {stats.map((s, i) => (
            <div key={i} className="bg-cream p-6">
              <span className="font-display text-[clamp(36px,4vw,48px)] font-bold text-orange leading-none">{s.num}</span>
              <p className="font-sans text-[16px] font-bold mt-1 whitespace-pre-line">{s.label}</p>
              <p className="font-sans text-[13px] text-black/60 mt-2 whitespace-pre-line leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Section 3: Is This Right For You? ─── */
function RightForYou() {
  const questions = [
    {
      q: 'Do you want to <em>start a newsletter</em> but keep putting it off?',
      a: "You know you should own your audience. You've read the articles. You've bookmarked the tutorials. You just haven't done it. If you've been \"about to start\" for months, this sprint was built for you. You'll have a live Substack before Session 1 ends.",
    },
    {
      q: 'Do you have a following on social but <em>no email list?</em>',
      a: "X, LinkedIn, Instagram — you've built an audience on rented land. One algorithm change and it's gone. The sprint moves your audience to email, permanently, before the platform makes that decision for you.",
    },
    {
      q: 'Do you have a <em>Substack</em> that never really took off?',
      a: "You started, posted a few times, and went quiet. The sprint is a complete relaunch — better positioning, a real growth strategy, and the systems to stay consistent. Most stalled newsletters don't have a writing problem. They have a positioning problem. We fix that in Session 1.",
    },
    {
      q: 'Do you have a <em>free newsletter</em> but want to go paid?',
      a: "You've built a list but haven't made the jump. You're not sure what to put behind the paywall, how to price it, or how to pitch it. Sessions 4 and 6 were built specifically for this moment.",
    },
    {
      q: 'Do you have a paid newsletter but want <em>more revenue?</em>',
      a: "The revenue isn't where you want it to be. We'll show you how to improve your offer stack, your onboarding, your Notes strategy, and your monetization model and find exactly what's holding your numbers back.",
    },
  ]

  return (
    <section className="bg-dark pt-0 pb-20 px-6">
      <div className="max-w-page mx-auto">
        <div className="-mt-6">
          <img src="/images/substack-logo.svg" alt="" className="w-12 h-12" />
        </div>
        <p className="font-sans text-[12px] font-bold text-orange uppercase tracking-[0.15em] mt-6 mb-3">Is This Right For You?</p>
        <h2 className="font-serif text-[clamp(30px,4vw,44px)] text-cream leading-[1.15] mb-10">
          Hmm...let's see...
        </h2>

        <div className="space-y-0 divide-y divide-white/10">
          {questions.map((q, i) => (
            <div key={i} className="py-6">
              <h3
                className="font-serif text-[clamp(20px,2.5vw,26px)] text-cream leading-[1.3] mb-3 [&_em]:not-italic [&_em]:text-orange"
                dangerouslySetInnerHTML={{ __html: q.q }}
              />
              <p className="font-sans text-[14px] text-white/60 leading-relaxed max-w-[700px]">{q.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Section 4: Sessions / What You'll Build ─── */
function Sessions() {
  const sessions = [
    { num: 1, img: 'session-1.png', title: 'Category Newsletter Positioning', desc: "Pick a category, name it, and claim it before you write a word. You'll nail the credibility angle that makes readers say 'this is exactly what I've been looking for.'", skill: 'Your newsletter name, subtitle, and a positioning statement that owns your niche.' },
    { num: 2, img: 'session-2.png', title: 'Irresistible Newsletter Offer Stack', desc: "Every subscriber needs a reason to sign up and a reason to pay. The offer stack you build here gives them both: instant free bonuses, a paid upgrade path, and a subscriber value ladder that starts converting immediately.", skill: 'A complete free and paid offer stack live on your Substack.' },
    { num: 3, img: 'session-3.png', title: 'Substack Tech Stack', desc: "Set up Substack for revenue from the start. Paid tiers, your About page, and the automated welcome sequence that turns every new free subscriber into a warm lead before your next post lands.", skill: 'A fully configured Substack, paid setup live, and your welcome sequence running automatically.' },
    { num: 4, img: 'session-5.png', title: 'Newsletter Conversion Secrets', desc: "Free subscribers don't convert on their own. In this session, we'll give you the copywriting and paywall strategy that makes going paid feel like the obvious next move for your readers.", skill: 'A paywall strategy and paid subscriber plan ready before your first upgrade arrives.' },
    { num: 5, img: 'session-7.png', title: 'Substack Notes Traffic Strategy', desc: "Notes is the fastest organic growth lever on Substack. Build a strategy that pulls new subscribers from Substack's own discovery feed every week.", skill: 'A Notes traffic strategy and a 30-day content calendar ready to publish.' },
    { num: 6, img: 'session-6.png', title: 'Substack Monetization Mastery', desc: "Map every revenue lever your newsletter has: paid tiers, a founding member window, and product launches sold to a list you own. Then build a Claude Cowork .Skill trained on your writing so the newsletter that used to take 3 hours takes 45 minutes.", skill: 'A monetization plan and a custom AI writing tool trained on your voice.' },
  ]

  return (
    <section className="bg-cream py-20 px-6">
      <div className="max-w-page mx-auto">
        <p className="font-sans text-[12px] font-bold text-orange uppercase tracking-[0.15em] mb-3">The 6 Sessions</p>
        <h2 className="font-serif text-[clamp(30px,4vw,44px)] leading-[1.15] mb-3">
          Here's what you'll build.
        </h2>
        <p className="font-sans text-[14px] text-black/60 mb-10">
          All sessions are 60 minutes · Kickoff: Monday, March 16 · 3:00 PM ET
        </p>

        <div className="space-y-0 divide-y divide-black/10">
          {sessions.map((s) => (
            <div key={s.num} className="py-6 flex flex-col md:flex-row gap-4 md:gap-8">
              <div className="md:w-[80px] flex-shrink-0">
                <img src={`/images/${s.img}`} alt={`Session ${s.num}`} className="w-16 h-16 rounded-lg object-cover" />
              </div>
              <div className="flex-1">
                <span className="font-sans text-[11px] font-bold text-orange uppercase tracking-wider">Session {s.num}</span>
                <h3 className="font-serif text-[clamp(18px,2vw,22px)] font-bold leading-[1.3] mb-2">{s.title}</h3>
                <p className="font-sans text-[14px] text-black/60 leading-relaxed mb-2">{s.desc}</p>
                <p className="font-sans text-[13px] text-black/50">
                  <span className="text-green-700 font-semibold">+ You leave with:</span> {s.skill}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="font-serif text-[clamp(30px,4vw,48px)] leading-[1.15] mb-4">
            This isn't self-paced content<br />you buy and forget.
          </h2>
          <div className="inline-block bg-dark text-cream px-6 py-3 rounded">
            <p className="font-sans text-[15px] font-medium">
              We build <em className="text-orange not-italic font-bold">together</em>. You show up.
              <br />You leave with a <em className="text-orange not-italic font-bold">system</em>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Section 5: Free Bonuses ─── */
function Bonuses() {
  const bonuses = [
    { num: 1, title: 'Big Substack FAQ File', desc: "Every question you'll have about Substack — answered. Built from hundreds of real student questions so you never waste time searching.", value: '$99' },
    { num: 2, title: 'Design Secrets', desc: 'Cover art, logo placement, color palette, and the subtle visual choices that make a newsletter look established — even before it has thousands of subscribers.', value: '$149' },
    { num: 3, title: 'Substack Notes Swipe File', desc: 'The exact Notes formats that drive follows, subscribers, and engagement. Stop staring at the blank Notes field. Steal what works.', value: '$99' },
    { num: 4, title: 'Substack Sequence Writer', desc: 'A plug-and-play system for writing your email sequences — welcome emails, re-engagement emails, paid upgrade pitches without starting from scratch.', value: '$149' },
  ]

  return (
    <section className="bg-dark py-20 px-6">
      <div className="max-w-page mx-auto">
        <p className="font-sans text-[12px] font-bold text-orange uppercase tracking-[0.15em] mb-3">Free Bonuses Included</p>
        <h2 className="font-serif text-[clamp(30px,4vw,44px)] text-cream leading-[1.15] mb-3">
          Everything you need to launch and<br />stay consistent.
        </h2>
        <div className="w-full h-px bg-white/10 mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bonuses.map((b) => (
            <div key={b.num} className="bg-cream/5 border border-white/10 rounded-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                <img src={`/images/bonus-${b.num}.png`} alt={b.title} className="w-16 h-20 object-contain flex-shrink-0" />
                <div>
                  <span className="font-sans text-[11px] font-bold text-orange uppercase tracking-wider">Bonus #{b.num}</span>
                  <h3 className="font-serif text-[20px] font-bold text-cream">{b.title}</h3>
                </div>
              </div>
              <p className="font-sans text-[14px] text-white/60 leading-relaxed mb-4">{b.desc}</p>
              <p className="font-serif text-[18px] font-bold text-cream">{b.value} value</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Section 6: Instructors ─── */
function Instructors() {
  const newsletters = [
    { name: 'Category Pirates', desc: 'The leading newsletter on Category Design', stats: 'Top 10 Business Newsletter on Substack\n30,000+ free subscribers\n$150,000+/yr in paid subscriptions' },
    { name: 'Start Writing Online', desc: 'The leading newsletter on how to Start Writing Online', stats: '100,000+ free subscribers\nThe engine of Ship 30 for 30' },
    { name: 'Write With AI', desc: 'The leading newsletter on Writing With AI', stats: 'Top 5 Education Newsletter on Substack\n50,000+ free subscribers\n$300,000+/yr in paid subscriptions' },
    { name: 'Start Ghostwriting', desc: 'The leading newsletter on how to Start Ghostwriting', stats: '100,000+ free subscribers\nThe engine of Premium Ghostwriting Academy, an 8-figure business' },
  ]

  return (
    <section className="bg-yellow py-20 px-6">
      <div className="max-w-page mx-auto">
        <p className="font-sans text-[12px] font-bold text-orange uppercase tracking-[0.15em] mb-3">Meet Your Instructors</p>
        <p className="font-sans text-[15px] text-black/60 mb-6">Everything we teach, we use ourselves.</p>
        <h2 className="font-serif text-[clamp(28px,3.5vw,40px)] leading-[1.15] mb-10">
          Built by people who actually build<br />newsletters for a living.
        </h2>

        <div className="space-y-4 mb-12">
          <div className="bg-dark-deep text-cream rounded-xl p-6 flex flex-col md:flex-row gap-6 items-center">
            <div className="w-20 h-20 rounded-full flex-shrink-0 overflow-hidden">
              <img src="/images/cole.png" alt="Nicolas Cole" className="w-full h-full object-cover object-top" />
            </div>
            <div>
              <h4 className="font-serif text-[18px] font-bold text-cream mb-2">Nicolas Cole</h4>
              <p className="font-sans text-[14px] text-white/70 leading-relaxed">
                Author of the best-selling book <em>The Art & Business of Online Writing</em>.
                Founder of the first ghostwriting agency for Silicon Valley founders & executives.
                10+ years writing online. 400+ columns for Inc Magazine.
              </p>
            </div>
          </div>
          <div className="bg-dark-deep text-cream rounded-xl p-6 flex flex-col md:flex-row gap-6 items-center">
            <div className="w-20 h-20 rounded-full flex-shrink-0 overflow-hidden">
              <img src="/images/dickie.png" alt="Dickie Bush" className="w-full h-full object-cover object-top" />
            </div>
            <div>
              <h4 className="font-serif text-[18px] font-bold text-cream mb-2">Dickie Bush</h4>
              <p className="font-sans text-[14px] text-white/70 leading-relaxed">
                Former Wall Street trader at BlackRock turned Digital Writer & Digital Entrepreneur. Creator of Ship 30 for 30 — the fastest-growing cohort-based writing program on the internet.
              </p>
            </div>
          </div>
        </div>

        <h3 className="font-serif text-[clamp(22px,2.5vw,30px)] leading-[1.2] mb-2">
          Our Newsletters — Proof We Know What We're Talking About
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {newsletters.map((n, i) => (
            <div key={i} className="bg-white/50 border border-black/10 rounded-lg p-5">
              <h4 className="font-serif text-[18px] font-bold mb-1">{n.name}</h4>
              <p className="font-sans text-[13px] text-black/60 mb-2">{n.desc}</p>
              <p className="font-sans text-[12px] text-black/50 whitespace-pre-line">{n.stats}</p>
            </div>
          ))}
        </div>

        <p className="font-sans text-[14px] text-black/60 mt-8">
          Created by the founders of Ship 30 for 30, Premium Ghostwriting Academy, Typeshare, Write With AI, and more.
        </p>
      </div>
    </section>
  )
}

/* ─── Section 7: Pricing ─── */
function Pricing({ ctaUrl }: { ctaUrl: string }) {
  return (
    <section className="bg-yellow py-20 px-6">
      <div className="max-w-page mx-auto text-center">
        <h2 className="font-serif text-[clamp(30px,4vw,44px)] leading-[1.15] mb-3">
          Join the Bootcamp
        </h2>
        <p className="font-sans text-[16px] text-black/70 mb-2">
          This isn't self-paced content you buy and forget.
        </p>
        <p className="font-sans text-[16px] text-black/70 mb-10">
          We build together. You show up, you do the work, you leave<br />with a system and the replay recordings forever.
        </p>

        <div className="inline-block bg-white rounded-xl shadow-lg p-10 mb-6">
          <p className="font-sans text-[12px] font-bold text-black/50 uppercase tracking-wider mb-2">Your Price</p>
          <p className="font-serif text-[clamp(48px,8vw,72px)] font-bold leading-none mb-4">$800</p>
          <a href={ctaUrl} className="inline-block bg-orange text-white font-sans text-[15px] font-bold uppercase tracking-[0.08em] px-12 py-4 rounded-lg hover:bg-orange/90 transition w-full">
            Join the Bootcamp →
          </a>
        </div>

        <div className="max-w-[400px] mx-auto">
          <p className="font-sans text-[12px] text-black/40 mt-4">
            6 live sessions · Cart opens March 9 · Cart closes March 15 · Kickoff Monday March 16 · Limited seats
          </p>
        </div>
      </div>
    </section>
  )
}

/* ─── Section 8: Ready to Build + Guarantee ─── */
function ReadyToBuild({ ctaUrl }: { ctaUrl: string }) {
  return (
    <section className="bg-dark-deep py-20 px-6">
      <div className="max-w-page mx-auto text-center">
        <h2 className="font-serif text-[clamp(36px,5vw,56px)] text-cream leading-[1.1] mb-6">
          Ready to Build?
        </h2>
        <a href={ctaUrl} className="inline-block bg-orange text-white font-sans text-[15px] font-bold uppercase tracking-[0.08em] px-12 py-4 rounded-lg hover:bg-orange/90 transition mb-6">
          Join the Bootcamp — $800 →
        </a>
        <p className="font-sans text-[14px] text-white/50 mb-12 whitespace-pre-line">
          {'March 16 – March 27, 2026\nLimited seats\nLifetime access to all materials'}
        </p>

        <div className="max-w-[600px] mx-auto border border-white/10 rounded-xl p-8">
          <p className="font-sans text-[12px] font-bold text-orange uppercase tracking-wider mb-3">First-Week Guarantee</p>
          <h3 className="font-serif text-[24px] text-cream font-bold mb-4">7-Day Money-Back Guarantee</h3>
          <p className="font-sans text-[14px] text-white/60 leading-relaxed">
            If in the first session of the bootcamp you show up,
            do the work, and decide this isn't what you expected —
            just let us know within 7 days and
            we'll give you a full refund.
            No questions asked.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ─── Section 9: FAQ ─── */
function FAQ() {
  const faqs = [
    { q: "How much time do I need per week?", a: "Three 60-minute live sessions per week, plus 1–2 hours to implement between sessions. Intensive but doable — every deliverable is built during the session itself, so implementation time is minimal." },
    { q: "What if I can't attend live?", a: "Every session is recorded and the replay goes up quickly after the live ends. You'll also get the full slide deck. Showing up live is where the real value is — real-time Q&A can't be replicated in a replay." },
    { q: "Do I need writing experience?", a: "Not at all. The sprint starts from zero — how to position your newsletter, how to set it up technically, how to write your first content. No experience required." },
    { q: "I already have a newsletter. Is this still for me?", a: "Yes — especially Sessions 2, 4, 5, and 6. If your newsletter isn't growing or converting to paid the way you want, the issue is almost always positioning, offer stack, or monetization architecture." },
    { q: "How is this different from Category Newsletter Creator?", a: "Category Newsletter Creator is a self-paced digital product. The Substack Starter Sprint is a live cohort where you build everything in real time with Dickie and Nicolas. Different format, much higher accountability." },
    { q: "How is this different from Ship 30 for 30?", a: "Ship 30 teaches you how to write and publish on social platforms. The sprint teaches you how to move that audience to email and monetize it. They're complementary — Ship 30 builds your voice, the sprint builds your newsletter business." },
    { q: "Can't I just learn this for free?", a: "You can — and if you haven't started yet, the answer is clearly no. Free content gives you information, not accountability or a build environment. The sprint compresses 6+ months of trial and error into 14 days." },
    { q: "Is there a VIP option?", a: "Yes. A small-group VIP upgrade is available at $2,500 — direct access and personalized strategy from Dickie and Nicolas. Limited spots. Email us to inquire." },
    { q: "How long do I have access?", a: "Lifetime. All replays, slide decks, templates, .Skills, and bonuses are yours to keep forever." },
  ]

  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="bg-dark-deep py-20 px-6">
      <div className="max-w-page mx-auto">
        <h2 className="font-serif text-[clamp(30px,4vw,44px)] text-cream leading-[1.15] mb-10">
          Frequently Asked Questions
        </h2>
        <div className="divide-y divide-white/10">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left bg-transparent border-none cursor-pointer"
              >
                <span className="font-serif text-[18px] text-cream font-medium pr-4">{faq.q}</span>
                <span className="text-cream/50 text-[20px] flex-shrink-0">{open === i ? '−' : '+'}</span>
              </button>
              {open === i && (
                <p className="font-sans text-[14px] text-white/60 leading-relaxed pb-5 pr-8">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="font-sans text-[13px] text-white/30">© 2026 Substack Sprint. All rights reserved</p>
        </div>
      </div>
    </section>
  )
}

/* ─── App ─── */
export default function App({ withFbPixel = false, ctaUrl = DEFAULT_CTA_URL }: { withFbPixel?: boolean; ctaUrl?: string }) {
  const pixelLoaded = useRef(false)
  useEffect(() => {
    if (!withFbPixel || pixelLoaded.current) return
    pixelLoaded.current = true

    const script = document.createElement('script')
    script.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window,document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '1262296197955979');
      fbq('track', 'PageView');
    `
    document.head.appendChild(script)
  }, [withFbPixel])

  return (
    <main className="min-h-screen">
      <Hero />
      <FadeIn><HowItWorks /></FadeIn>
      <FadeIn><RightForYou /></FadeIn>
      <FadeIn><Sessions /></FadeIn>
      <FadeIn><Bonuses /></FadeIn>
      <FadeIn><Instructors /></FadeIn>
      <FadeIn><Pricing ctaUrl={ctaUrl} /></FadeIn>
      <FadeIn><ReadyToBuild ctaUrl={ctaUrl} /></FadeIn>
      <FadeIn><FAQ /></FadeIn>
    </main>
  )
}
