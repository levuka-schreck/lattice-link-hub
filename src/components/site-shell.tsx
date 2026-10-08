import { Link } from '@tanstack/react-router';
import { useState } from 'react';
import { ArrowRight, Download, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';

export function Brand() {
  return <Link to="/" className="brand" aria-label="Grafinate Partners home"><svg className="brand-mark" viewBox="0 0 40 44" fill="none" aria-hidden="true"><path d="M20 2 37 12v20L20 42 3 32V12L20 2Z" stroke="currentColor" strokeWidth="1.8"/><path d="m20 9 11 6v13l-11 7-11-7V15l11-6Zm0 0v12m-11 7 11-7 11 7M3 12l6 3m22 0 6-3M20 35v7" stroke="currentColor" strokeWidth="1.5"/></svg><span className="brand-name">grafinate<small>PARTNERS</small></span></Link>;
}

export function ContactButton({ label = 'Let’s talk', className = '' }: { label?: string; className?: string }) {
  const [open, setOpen] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  return <><Button variant="enterprise" size="lg" className={className} onClick={() => { setDownloaded(false); setOpen(true); }}>{label}<ArrowRight /></Button><Dialog open={open} onOpenChange={setOpen}><DialogContent className="max-w-[calc(100%-32px)] sm:max-w-lg"><DialogHeader><DialogTitle>Start a conversation</DialogTitle><DialogDescription>Tell us where you want to go next.</DialogDescription></DialogHeader><form className="inquiry-form" onSubmit={(event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const text = `Grafinate Partners — Partnership inquiry\n\nName: ${data.get('name')}\nWork email: ${data.get('email')}\nCompany: ${data.get('company')}\nInterest: ${data.get('interest')}\n\n${data.get('message')}`;
    const url = URL.createObjectURL(new Blob([text], { type: 'text/plain;charset=utf-8' }));
    const anchor = document.createElement('a'); anchor.href = url; anchor.download = 'grafinate-partnership-inquiry.txt'; anchor.click(); setTimeout(() => URL.revokeObjectURL(url), 1000); setDownloaded(true);
  }}><label>Name<input name="name" autoComplete="name" required /></label><label>Work email<input name="email" type="email" autoComplete="email" required /></label><label>Company<input name="company" autoComplete="organization" required /></label><label>I’m interested in<select name="interest"><option>Technology channel programs</option><option>Soteria governance</option><option>Technical alliances</option><option>Other opportunities</option></select></label><label>What are you looking to achieve?<textarea name="message" rows={3} required /></label><p className="form-note">Direct contact details are coming soon. Download your inquiry to share with your Grafinate contact. This form does not send your information.</p><Button type="submit" variant="enterprise"><Download />Download inquiry</Button>{downloaded && <p className="form-note" role="status">Your inquiry is ready. No information has been sent.</p>}</form></DialogContent></Dialog></>;
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const nav = <><Link to="/" hash="expertise" className="nav-link" onClick={() => setMenuOpen(false)}>Our expertise</Link><Link to="/soteria" className="nav-link" onClick={() => setMenuOpen(false)}>Soteria <span className="text-primary">↗</span></Link><Link to="/" hash="markets" className="nav-link" onClick={() => setMenuOpen(false)}>Who we serve</Link><Link to="/" hash="about" className="nav-link" onClick={() => setMenuOpen(false)}>About us</Link></>;
  return <header className="site-header"><div className="site-container header-inner"><Brand /><nav className="desktop-nav" aria-label="Main navigation">{nav}</nav><ContactButton className="header-cta" /><Button variant="ghost" size="icon" className="mobile-menu-button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button></div>{menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">{nav}<ContactButton /></nav>}</header>;
}

export function ContactBand() { return <section className="contact-band" id="contact"><div className="eyebrow">The next connection starts here</div><h2>Let’s build your next advantage.</h2><p>The right technology. The right partners. A stronger path forward.</p><ContactButton label="Start a conversation" /></section>; }
export function SiteFooter() { return <footer className="site-footer"><div className="site-container footer-inner"><Brand /><span className="footer-note">© 2026 Grafinate Partners. All rights reserved.</span><div className="footer-links"><Link to="/" hash="expertise">Our expertise</Link><Link to="/soteria">Soteria</Link><Link to="/" hash="contact">Contact</Link></div></div></footer>; }