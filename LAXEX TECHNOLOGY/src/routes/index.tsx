import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import "../laxex-styles.css";

const BODY_HTML = '\n\n<div class="bg-grid"></div>\n<div class="bg-mesh"></div>\n\n<!-- ============ HEADER ============ -->\n<header>\n  <div class="nav-inner">\n    <div class="nav-pill">\n      <a href="#top" class="nav-logo">\n        <span style="font-family:\'Space Grotesk\',sans-serif;font-weight:700;font-size:17px;letter-spacing:0.02em;background:var(--grad);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;white-space:nowrap;">LAXEX TECHNOLOGY</span>\n      </a>\n      <nav class="links">\n        <a href="#services">Services</a>\n        <a href="#work">Work</a>\n        <a href="#process">Process</a>\n        <a href="#team">Team</a>\n        <a href="#pricing">Pricing</a>\n        <a href="#faq">FAQ</a>\n      </nav>\n      <div class="nav-cta">\n        <a href="https://wa.me/917990411572?text=Hi%20Laxex%20Technology%2C%20I%27d%20like%20to%20get%20in%20touch." target="_blank" class="btn btn-ghost btn-sm">Contact</a>\n        <a href="https://wa.me/917990411572?text=Hi%20Laxex%20Technology%2C%20I%27d%20like%20to%20know%20more%20about%20your%20services." target="_blank" class="btn btn-grad btn-sm">Get a Quote</a>\n        <button class="nav-toggle" id="navToggle" aria-label="Toggle menu"><div class="burger"><span></span><span></span><span></span></div></button>\n      </div>\n    </div>\n  </div>\n</header>\n\n<div class="mobile-menu" id="mobileMenu">\n  <a href="#services">Services</a>\n  <a href="#work">Work</a>\n  <a href="#process">Process</a>\n  <a href="#team">Team</a>\n  <a href="#pricing">Pricing</a>\n  <a href="#faq">FAQ</a>\n  <a href="#contact">Contact</a>\n  <a href="https://wa.me/917990411572" target="_blank" class="btn btn-grad">Chat on WhatsApp</a>\n</div>\n\n<main id="top">\n\n  <!-- ============ HERO ============ -->\n  <section class="hero">\n    <div class="wrap hero-inner">\n      <div class="hero-copy">\n        <div class="eyebrow">Digital growth studio</div>\n        <p class="slogan">Premier Digital Solutions</p>\n        <h1>We build the <span class="grad-text">internet presence</span><br>your business deserves.</h1>\n        <p class="lead">Laxex Technology designs websites, edits video, manages your socials and runs the ads — so you look established from day one, not eventually.</p>\n        <div class="hero-actions">\n          <a href="https://wa.me/917990411572?text=Hi%20Laxex%20Technology%2C%20I%27d%20like%20to%20start%20a%20project." target="_blank" class="btn btn-grad">Start a project →</a>\n          <a href="https://wa.me/917990411572?text=Hi%20Laxex%20Technology%2C%20I%27d%20like%20to%20discuss%20a%20project." target="_blank" class="btn btn-ghost">Chat on WhatsApp</a>\n        </div>\n        <div class="hero-stats">\n          <div class="stat"><b>120+</b><span>PROJECTS SHIPPED</span></div>\n          <div class="stat"><b>7</b><span>SERVICES UNDER ONE ROOF</span></div>\n          <div class="stat"><b>24/7</b><span>SUPPORT &amp; HOSTING</span></div>\n        </div>\n      </div>\n\n      <div class="hero-visual" aria-hidden="true">\n        <div class="hero-orbit-ring"></div>\n        <div class="hero-orbit-ring r2"></div>\n        <div class="center-mark"></div>\n\n        <div class="orbit-card glass oc1">\n          <div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M3 4h18v14H3z"/><path d="M3 9h18"/></svg></div>\n          <div><div class="label">Web Build</div><div class="sub">React / WordPress</div></div>\n        </div>\n        <div class="orbit-card glass oc2">\n          <div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M15 10l5-3v10l-5-3"/><path d="M3 6h11v12H3z"/></svg></div>\n          <div><div class="label">Video Edit</div><div class="sub">Reels / Ads</div></div>\n        </div>\n        <div class="orbit-card glass oc3" style="padding:20px 24px;">\n          <div class="ic" style="width:46px;height:46px;"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"/></svg></div>\n          <div><div class="label" style="font-size:15px;">Laxex Core</div><div class="sub">All-in-one growth</div></div>\n        </div>\n        <div class="orbit-card glass oc4">\n          <div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/></svg></div>\n          <div><div class="label">Social Mgmt</div><div class="sub">Content engine</div></div>\n        </div>\n        <div class="orbit-card glass oc5">\n          <div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg></div>\n          <div><div class="label">Branding</div><div class="sub">Identity systems</div></div>\n        </div>\n        <div class="orbit-card glass oc6">\n          <div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><circle cx="6" cy="6" r="1" fill="currentColor"/><circle cx="6" cy="18" r="1" fill="currentColor"/></svg></div>\n          <div><div class="label">Hosting</div><div class="sub">99.9% uptime</div></div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- ============ TRUST STRIP ============ -->\n  <div class="trust-strip">\n    <div class="wrap">\n      <p>Built for businesses ready to scale</p>\n      <div class="trust-tags">\n        <span>Startups</span>\n        <span>D2C Brands</span>\n        <span>Local Businesses</span>\n        <span>Coaches &amp; Creators</span>\n        <span>Real Estate</span>\n        <span>Clinics</span>\n      </div>\n    </div>\n  </div>\n\n  <!-- ============ TRACE DIVIDER ============ -->\n  <div class="trace" aria-hidden="true">\n    <svg viewBox="0 0 1180 90" preserveAspectRatio="none">\n      <defs>\n        <linearGradient id="traceGrad" x1="0%" y1="0%" x2="100%" y2="0%">\n          <stop offset="0%" stop-color="#3DD6F5"/>\n          <stop offset="100%" stop-color="#7C5CFF"/>\n        </linearGradient>\n      </defs>\n      <path d="M0 45 L300 45 L340 15 L840 15 L880 45 L1180 45"/>\n      <circle cx="340" cy="15" r="3.5"/>\n      <circle cx="880" cy="45" r="3.5"/>\n    </svg>\n  </div>\n\n  <!-- ============ SERVICES ============ -->\n  <section id="services">\n    <div class="wrap">\n      <div class="section-head reveal">\n        <div class="eyebrow">What we do</div>\n        <h2>Every piece of your online presence, handled.</h2>\n        <p>From the first pixel of your website to the ad that brings the customer in — one team, one inbox, no juggling five freelancers.</p>\n      </div>\n\n      <div class="services-grid">\n\n        <div class="svc-card reveal">\n          <span class="tag">Web</span>\n          <span class="num">01</span>\n          <div class="svc-icon"><svg viewBox="0 0 24 24" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M3 9h18"/><circle cx="6" cy="6.5" r=".6" fill="currentColor"/></svg></div>\n          <h3>Website Building</h3>\n          <p>Fast, mobile-first websites that load quick and convert — from landing pages to full e-commerce stores.</p>\n        </div>\n\n        <div class="svc-card reveal">\n          <span class="tag">Motion</span>\n          <span class="num">02</span>\n          <div class="svc-icon"><svg viewBox="0 0 24 24" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M15 10l6-4v12l-6-4"/><rect x="3" y="6" width="12" height="12" rx="2"/></svg></div>\n          <h3>Video Editing</h3>\n          <p>Reels, ad cuts and brand films edited with pacing that holds attention and a look that matches your brand.</p>\n        </div>\n\n        <div class="svc-card reveal">\n          <span class="tag">Identity</span>\n          <span class="num">03</span>\n          <div class="svc-icon"><svg viewBox="0 0 24 24" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3.5 7.5L22 11l-5.5 5L18 22l-6-3.5L6 22l1.5-6L2 11l6.5-1.5z"/></svg></div>\n          <h3>Branding</h3>\n          <p>Logos, color systems and guidelines that make you instantly recognizable across every touchpoint.</p>\n        </div>\n\n        <div class="svc-card reveal">\n          <span class="tag">Social</span>\n          <span class="num">04</span>\n          <div class="svc-icon"><svg viewBox="0 0 24 24" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="2.5"/><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="19" r="2.5"/><path d="M8.3 13.4l7.4 4.2M15.7 6.4l-7.4 4.2"/></svg></div>\n          <h3>Social Media Management</h3>\n          <p>Content calendars, captions and consistent posting so your pages stay active and on-brand, every week.</p>\n        </div>\n\n        <div class="svc-card reveal">\n          <span class="tag">Infra</span>\n          <span class="num">05</span>\n          <div class="svc-icon"><svg viewBox="0 0 24 24" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="7" rx="2"/><rect x="2" y="14" width="20" height="7" rx="2"/><circle cx="6" cy="6.5" r=".6" fill="currentColor"/><circle cx="6" cy="17.5" r=".6" fill="currentColor"/></svg></div>\n          <h3>Website Hosting</h3>\n          <p>Reliable, secure hosting with backups and monitoring — your site stays online, even on your busiest day.</p>\n        </div>\n\n        <div class="svc-card reveal">\n          <span class="tag">Growth</span>\n          <span class="num">06</span>\n          <div class="svc-icon"><svg viewBox="0 0 24 24" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l5-5 4 4 8-8"/><path d="M14 8h6v6"/></svg></div>\n          <h3>Ad Management</h3>\n          <p>Meta and Google campaigns set up, tracked and optimized to bring in leads, not just impressions.</p>\n        </div>\n\n      </div>\n    </div>\n  </section>\n\n  <!-- trace -->\n  <div class="trace" aria-hidden="true">\n    <svg viewBox="0 0 1180 90" preserveAspectRatio="none">\n      <path d="M0 45 L300 45 L340 75 L840 75 L880 45 L1180 45" stroke="url(#traceGrad)"/>\n      <circle cx="340" cy="75" r="3.5"/>\n      <circle cx="880" cy="45" r="3.5"/>\n    </svg>\n  </div>\n\n  <!-- ============ PROCESS ============ -->\n  <section id="process">\n    <div class="wrap">\n      <div class="section-head reveal">\n        <div class="eyebrow">How we work</div>\n        <h2>From first call to live launch.</h2>\n        <p>A straightforward process — no jargon, no surprise invoices, no disappearing freelancers.</p>\n      </div>\n\n      <div class="process-rail">\n        <div class="process-step reveal">\n          <div class="pnum">01</div>\n          <h4>Discover</h4>\n          <p>We learn your business, your customers and what "done well" looks like for you.</p>\n        </div>\n        <div class="process-step reveal">\n          <div class="pnum">02</div>\n          <h4>Design</h4>\n          <p>Wireframes and visual direction shared early, so there are no surprises later.</p>\n        </div>\n        <div class="process-step reveal">\n          <div class="pnum">03</div>\n          <h4>Build</h4>\n          <p>Development, content and creative come together — with regular check-ins along the way.</p>\n        </div>\n        <div class="process-step reveal">\n          <div class="pnum">04</div>\n          <h4>Launch &amp; grow</h4>\n          <p>We go live, then keep optimizing — hosting, content and ads — month over month.</p>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- ============ WORK ============ -->\n  <section id="work">\n    <div class="wrap">\n      <div class="section-head reveal">\n        <div class="eyebrow">Selected work</div>\n        <h2>Recent builds across industries.</h2>\n        <p>A glimpse of the kind of work we ship — websites, brand systems and campaigns built for real businesses.</p>\n      </div>\n\n      <div class="work-grid">\n        <div class="work-card w1 reveal">\n          <div class="wbg"></div>\n          <div class="wcontent">\n            <span class="wcat">Web · D2C</span>\n            <h4>Storefront rebuild for a skincare brand</h4>\n          </div>\n        </div>\n        <div class="work-card w2 reveal">\n          <div class="wbg"></div>\n          <div class="wcontent">\n            <span class="wcat">Branding · Hospitality</span>\n            <h4>Full identity for a boutique café chain</h4>\n          </div>\n        </div>\n        <div class="work-card w3 reveal">\n          <div class="wbg"></div>\n          <div class="wcontent">\n            <span class="wcat">Social · Fitness</span>\n            <h4>90-day content engine for a fitness coach</h4>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- trace -->\n  <div class="trace" aria-hidden="true">\n    <svg viewBox="0 0 1180 90" preserveAspectRatio="none">\n      <path d="M0 45 L300 45 L340 15 L840 15 L880 45 L1180 45" stroke="url(#traceGrad)"/>\n      <circle cx="340" cy="15" r="3.5"/>\n      <circle cx="880" cy="45" r="3.5"/>\n    </svg>\n  </div>\n\n  <!-- ============ TEAM ============ -->\n  <section id="team">\n    <div class="wrap">\n      <div class="section-head reveal">\n        <div class="eyebrow">The people behind Laxex</div>\n        <h2>Small team, full ownership.</h2>\n        <p>No account managers relaying messages — you work directly with the people building your project.</p>\n      </div>\n\n      <div class="team-grid">\n        <div class="team-card reveal">\n          <div class="avatar">VR</div>\n          <h3>Ronak Vaghela</h3>\n          <span class="role">Founder</span>\n          <p class="bio">Leads strategy, client direction and the overall vision for every Laxex project — end to end.</p>\n        </div>\n        <div class="team-card reveal">\n          <div class="avatar">RK</div>\n          <h3>Ravalji Kuldip</h3>\n          <span class="role">Co-Founder</span>\n          <p class="bio">Oversees execution and delivery, making sure design and development ship on time, every time.</p>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- ============ TESTIMONIALS ============ -->\n  <section id="testimonials">\n    <div class="wrap">\n      <div class="section-head reveal">\n        <div class="eyebrow">Client feedback</div>\n        <h2>What it\'s like working with us.</h2>\n      </div>\n\n      <div class="testi-grid">\n        <div class="testi-card reveal">\n          <div class="stars">★★★★★</div>\n          <p>Laxex took our website from an afterthought to actually our best salesperson. Quick replies, fair pricing, real results.</p>\n          <div class="testi-who"><div class="ta">AP</div><div><div class="tn">Aarav Patel</div><div class="tc">Founder, retail brand</div></div></div>\n        </div>\n        <div class="testi-card reveal">\n          <div class="stars">★★★★★</div>\n          <p>They handle our reels and posting calendar end-to-end now. Our page finally looks consistent and on-brand.</p>\n          <div class="testi-who"><div class="ta">SM</div><div><div class="tn">Sneha Mehta</div><div class="tc">Owner, café chain</div></div></div>\n        </div>\n        <div class="testi-card reveal">\n          <div class="stars">★★★★★</div>\n          <p>Hosting has been rock solid and support on WhatsApp is genuinely fast. Feels like having an in-house tech team.</p>\n          <div class="testi-who"><div class="ta">RJ</div><div><div class="tn">Rohit Joshi</div><div class="tc">Director, clinic group</div></div></div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- trace -->\n  <div class="trace" aria-hidden="true">\n    <svg viewBox="0 0 1180 90" preserveAspectRatio="none">\n      <path d="M0 45 L300 45 L340 75 L840 75 L880 45 L1180 45" stroke="url(#traceGrad)"/>\n      <circle cx="340" cy="75" r="3.5"/>\n      <circle cx="880" cy="45" r="3.5"/>\n    </svg>\n  </div>\n\n  <!-- ============ PRICING ============ -->\n  <section id="pricing">\n    <div class="wrap">\n      <div class="section-head reveal">\n        <div class="eyebrow">Plans</div>\n        <h2>Pricing that scales with you.</h2>\n        <p>Every plan is a starting point — we tailor scope to what your business actually needs. Final quotes shared over a quick call.</p>\n      </div>\n\n      <div class="pricing-grid">\n        <div class="price-card reveal">\n          <span class="plan-badge">Starter</span>\n          <h3>Launch</h3>\n          <p class="pdesc">For new businesses needing a strong first online presence.</p>\n          <div class="price">₹9,999<span> onwards</span></div>\n          <ul class="price-feats">\n            <li><svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2"><path d="M5 12l4 4 10-10"/></svg> 5-page responsive website</li>\n            <li><svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2"><path d="M5 12l4 4 10-10"/></svg> Basic branding kit</li>\n            <li><svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2"><path d="M5 12l4 4 10-10"/></svg> 1 month hosting included</li>\n            <li><svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2"><path d="M5 12l4 4 10-10"/></svg> WhatsApp support</li>\n          </ul>\n          <a href="#contact" data-plan="Launch Plan — I\'d like to know more about this plan and get started." class="btn btn-ghost">Choose Launch</a>\n        </div>\n\n        <div class="price-card featured reveal">\n          <span class="plan-badge">Most popular</span>\n          <h3>Growth</h3>\n          <p class="pdesc">For businesses ready to build presence and run paid traffic.</p>\n          <div class="price">₹24,999<span> onwards</span></div>\n          <ul class="price-feats">\n            <li><svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2"><path d="M5 12l4 4 10-10"/></svg> Full website + e-commerce ready</li>\n            <li><svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2"><path d="M5 12l4 4 10-10"/></svg> Complete brand identity</li>\n            <li><svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2"><path d="M5 12l4 4 10-10"/></svg> Social media management</li>\n            <li><svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2"><path d="M5 12l4 4 10-10"/></svg> Ad campaign setup</li>\n            <li><svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2"><path d="M5 12l4 4 10-10"/></svg> Priority support</li>\n          </ul>\n          <a href="#contact" data-plan="Growth Plan — I\'d like to know more about this plan and get started." class="btn btn-grad">Choose Growth</a>\n        </div>\n\n        <div class="price-card reveal">\n          <span class="plan-badge">Custom</span>\n          <h3>Enterprise</h3>\n          <p class="pdesc">For established brands needing a dedicated, ongoing team.</p>\n          <div class="price">Let\'s talk</div>\n          <ul class="price-feats">\n            <li><svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2"><path d="M5 12l4 4 10-10"/></svg> Custom web &amp; app builds</li>\n            <li><svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2"><path d="M5 12l4 4 10-10"/></svg> Dedicated video &amp; content team</li>\n            <li><svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2"><path d="M5 12l4 4 10-10"/></svg> Full-funnel ad management</li>\n            <li><svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2"><path d="M5 12l4 4 10-10"/></svg> SLA-backed hosting</li>\n          </ul>\n          <a href="#contact" data-plan="Scale Plan — I\'d like to talk about a custom scale package." class="btn btn-ghost">Talk to us</a>\n        </div>\n      </div>\n\n      <div class="hosting-divider reveal">\n        <span class="hd-line"></span>\n        <span class="hd-label">Website Hosting</span>\n        <span class="hd-line"></span>\n      </div>\n\n      <div class="section-head reveal" style="margin-bottom:40px;">\n        <p>Already have a site, or just need somewhere reliable to host the one we build? Hosting plans run independently of the packages above.</p>\n      </div>\n\n      <div class="pricing-grid hosting-grid">\n        <div class="price-card reveal">\n          <span class="plan-badge">Starter</span>\n          <h3>Starter Hosting</h3>\n          <p class="pdesc">For single-site businesses that need solid, no-fuss hosting.</p>\n          <div class="price">₹2,000<span> /year</span></div>\n          <ul class="price-feats">\n            <li><svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2"><path d="M5 12l4 4 10-10"/></svg> 1 website hosted</li>\n            <li><svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2"><path d="M5 12l4 4 10-10"/></svg> SSL certificate included</li>\n            <li><svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2"><path d="M5 12l4 4 10-10"/></svg> Monthly backups</li>\n            <li><svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2"><path d="M5 12l4 4 10-10"/></svg> Uptime monitoring</li>\n            <li><svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2"><path d="M5 12l4 4 10-10"/></svg> Email support</li>\n          </ul>\n          <a href="#contact" data-plan="Starter Hosting — I\'d like to go with the Starter hosting plan." class="btn btn-ghost">Choose Starter</a>\n        </div>\n\n        <div class="price-card featured reveal">\n          <span class="plan-badge">Most popular</span>\n          <h3>Growth Hosting</h3>\n          <p class="pdesc">For growing sites with more traffic and less room for downtime.</p>\n          <div class="price">₹3,500<span> /year</span></div>\n          <ul class="price-feats">\n            <li><svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2"><path d="M5 12l4 4 10-10"/></svg> 1 website hosted, higher bandwidth</li>\n            <li><svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2"><path d="M5 12l4 4 10-10"/></svg> SSL certificate included</li>\n            <li><svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2"><path d="M5 12l4 4 10-10"/></svg> Weekly backups</li>\n            <li><svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2"><path d="M5 12l4 4 10-10"/></svg> 24/7 uptime monitoring</li>\n            <li><svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2"><path d="M5 12l4 4 10-10"/></svg> Priority WhatsApp support</li>\n          </ul>\n          <a href="#contact" data-plan="Growth Hosting — I\'d like to go with the Growth hosting plan." class="btn btn-grad">Choose Growth</a>\n        </div>\n\n        <div class="price-card reveal">\n          <span class="plan-badge">Custom</span>\n          <h3>Enterprise Hosting</h3>\n          <p class="pdesc">For high-traffic sites, e-commerce stores or multi-site businesses.</p>\n          <div class="price">Contact for pricing</div>\n          <ul class="price-feats">\n            <li><svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2"><path d="M5 12l4 4 10-10"/></svg> Multiple sites / high traffic</li>\n            <li><svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2"><path d="M5 12l4 4 10-10"/></svg> Daily backups</li>\n            <li><svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2"><path d="M5 12l4 4 10-10"/></svg> SLA-backed uptime guarantee</li>\n            <li><svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2"><path d="M5 12l4 4 10-10"/></svg> Dedicated support contact</li>\n          </ul>\n          <a href="#contact" data-plan="Enterprise Hosting — I\'d like a custom quote for Enterprise hosting." class="btn btn-ghost">Contact for Enterprise</a>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- ============ FAQ ============ -->\n  <section id="faq">\n    <div class="wrap">\n      <div class="section-head reveal">\n        <div class="eyebrow">Questions</div>\n        <h2>Good to know before you reach out.</h2>\n      </div>\n\n      <div class="faq-list reveal">\n        <div class="faq-item">\n          <button class="faq-q">How long does a website take to build? <span class="plus"></span></button>\n          <div class="faq-a"><p>Most websites are live within 7–14 days depending on scope. E-commerce and custom builds typically take 3–4 weeks.</p></div>\n        </div>\n        <div class="faq-item">\n          <button class="faq-q">Do you offer ongoing maintenance? <span class="plus"></span></button>\n          <div class="faq-a"><p>Yes. All hosting plans include uptime monitoring, backups and minor content updates. Larger changes are quoted separately.</p></div>\n        </div>\n        <div class="faq-item">\n          <button class="faq-q">Can you manage our Instagram and Facebook together? <span class="plus"></span></button>\n          <div class="faq-a"><p>Yes — our social media management covers content planning, design, posting and basic community replies across both platforms.</p></div>\n        </div>\n        <div class="faq-item">\n          <button class="faq-q">Do you run the ad budget or just manage campaigns? <span class="plus"></span></button>\n          <div class="faq-a"><p>We manage strategy, creative and optimization. Ad spend is billed directly to your own Meta/Google account so you always stay in control of your budget.</p></div>\n        </div>\n        <div class="faq-item">\n          <button class="faq-q">How do we get started? <span class="plus"></span></button>\n          <div class="faq-a"><p>Message us on WhatsApp or email with what you need — we\'ll set up a quick call, scope the project and send a clear quote.</p></div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- ============ CONTACT ============ -->\n  <section id="contact">\n    <div class="wrap">\n      <div class="contact-wrap reveal">\n        <div class="contact-info">\n          <div class="eyebrow">Get in touch</div>\n          <h2>Let\'s build something that looks like you mean business.</h2>\n          <p>Tell us what you need — a new site, a content engine, or all of it. We\'ll reply within one business day, usually sooner over WhatsApp.</p>\n\n          <div class="contact-channel">\n            <div class="ci"><svg viewBox="0 0 24 24" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 5h18v14H3z"/><path d="M3 6l9 7 9-7"/></svg></div>\n            <div><div class="cl">Email</div><a class="cv" href="mailto:info.laxextech@gmail.com">info.laxextech@gmail.com</a></div>\n          </div>\n          <div class="contact-channel">\n            <div class="ci"><svg viewBox="0 0 24 24" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21l1.7-5A9 9 0 1112 21a9 9 0 01-5-1.5z"/></svg></div>\n            <div><div class="cl">WhatsApp</div><a class="cv" href="https://wa.me/917990411572" target="_blank">+91 79904 11572</a> &nbsp;/&nbsp; <a class="cv" href="https://wa.me/917990373975" target="_blank">+91 79903 73975</a></div>\n          </div>\n          <div class="contact-channel">\n            <div class="ci"><svg viewBox="0 0 24 24" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1" fill="currentColor"/></svg></div>\n            <div><div class="cl">Instagram</div><a class="cv" href="https://instagram.com/laxextech" target="_blank">@laxextech</a></div>\n          </div>\n        </div>\n\n        <form class="cform" id="contactForm">\n          <div class="form-row">\n            <div>\n              <label for="cname">Name</label>\n              <input type="text" id="cname" placeholder="Your name" required>\n            </div>\n            <div>\n              <label for="cphone">Phone</label>\n              <input type="tel" id="cphone" placeholder="+91 00000 00000" required>\n            </div>\n          </div>\n          <div>\n            <label for="cemail">Email</label>\n            <input type="email" id="cemail" placeholder="you@email.com" required>\n          </div>\n          <div>\n            <label for="cservice">Service</label>\n            <select id="cservice">\n              <option>Website Building</option>\n              <option>Video Editing</option>\n              <option>Branding</option>\n              <option>Social Media Management</option>\n              <option>Website Hosting</option>\n              <option>Ad Management</option>\n              <option>Something else / multiple</option>\n            </select>\n          </div>\n          <div>\n            <label for="cmsg">Project details</label>\n            <textarea id="cmsg" placeholder="Tell us a bit about what you need..."></textarea>\n          </div>\n          <button type="submit" class="btn btn-grad">Send via WhatsApp →</button>\n          <p class="form-note">This opens WhatsApp with your details pre-filled — nothing is sent until you hit send there.</p>\n        </form>\n      </div>\n    </div>\n  </section>\n\n</main>\n\n<!-- ============ FOOTER ============ -->\n<footer>\n  <div class="wrap">\n    <div class="foot-grid">\n      <div class="foot-col">\n        <div class="foot-brand"><span style="font-family:\'Space Grotesk\',sans-serif;font-weight:700;font-size:18px;letter-spacing:0.02em;background:var(--grad);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;white-space:nowrap;">LAXEX TECHNOLOGY</span></div>\n        <p class="foot-slogan">Premier Digital Solutions</p>\n        <p class="foot-desc">A full-stack digital studio — websites, video, branding, social and ads — built for businesses that want to look the part online.</p>\n        <div class="foot-social">\n          <a href="https://instagram.com/laxextech" target="_blank" aria-label="Instagram"><svg viewBox="0 0 24 24" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1" fill="currentColor"/></svg></a>\n          <a href="https://wa.me/917990411572" target="_blank" aria-label="WhatsApp"><svg viewBox="0 0 24 24" stroke-width="1.8"><path d="M3 21l1.7-5A9 9 0 1112 21a9 9 0 01-5-1.5z"/></svg></a>\n          <a href="mailto:info.laxextech@gmail.com" aria-label="Email"><svg viewBox="0 0 24 24" stroke-width="1.8"><path d="M3 5h18v14H3z"/><path d="M3 6l9 7 9-7"/></svg></a>\n        </div>\n      </div>\n      <div class="foot-col">\n        <h5>Services</h5>\n        <ul>\n          <li><a href="#services">Website Building</a></li>\n          <li><a href="#services">Video Editing</a></li>\n          <li><a href="#services">Branding</a></li>\n          <li><a href="#services">Social Media Management</a></li>\n          <li><a href="#services">Hosting</a></li>\n          <li><a href="#services">Ad Management</a></li>\n        </ul>\n      </div>\n      <div class="foot-col">\n        <h5>Company</h5>\n        <ul>\n          <li><a href="#work">Our Work</a></li>\n          <li><a href="#process">Process</a></li>\n          <li><a href="#team">Team</a></li>\n          <li><a href="#pricing">Pricing</a></li>\n          <li><a href="#faq">FAQ</a></li>\n        </ul>\n      </div>\n      <div class="foot-col">\n        <h5>Contact</h5>\n        <ul>\n          <li><a href="mailto:info.laxextech@gmail.com">info.laxextech@gmail.com</a></li>\n          <li><a href="https://wa.me/917990411572" target="_blank">+91 79904 11572</a></li>\n          <li><a href="https://wa.me/917990373975" target="_blank">+91 79903 73975</a></li>\n          <li><a href="https://instagram.com/laxextech" target="_blank">@laxextech</a></li>\n        </ul>\n      </div>\n    </div>\n    <div class="foot-bottom">\n      <p>© 2026 Laxex Technology. All rights reserved.</p>\n      <p>Designed &amp; built by Laxex Technology.</p>\n    </div>\n  </div>\n</footer>\n\n<!-- ============ WHATSAPP FLOAT ============ -->\n<div class="wa-menu" id="waMenu">\n  <div class="wa-head">Chat with Laxex Technology</div>\n  <a href="https://wa.me/917990411572?text=Hi%20Laxex%20Technology%2C%20I%27d%20like%20to%20know%20more%20about%20your%20services." target="_blank">\n    <div class="wa-ic"><svg viewBox="0 0 24 24"><path d="M3 21l1.7-5A9 9 0 1112 21a9 9 0 01-5-1.5z"/></svg></div>\n    <div>Ronak Vaghela<span class="wa-num">+91 79904 11572</span></div>\n  </a>\n  <a href="https://wa.me/917990373975?text=Hi%20Laxex%20Technology%2C%20I%27d%20like%20to%20know%20more%20about%20your%20services." target="_blank">\n    <div class="wa-ic"><svg viewBox="0 0 24 24"><path d="M3 21l1.7-5A9 9 0 1112 21a9 9 0 01-5-1.5z"/></svg></div>\n    <div>Ravalji Kuldip<span class="wa-num">+91 79903 73975</span></div>\n  </a>\n</div>\n<button class="wa-float" id="waFloat" aria-label="Chat on WhatsApp">\n  <svg viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.85.5 3.58 1.4 5.07L2 22l5.2-1.5a9.9 9.9 0 004.84 1.27c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.8 14.1c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.13.11-1.82-.11-.42-.13-.96-.31-1.66-.6-2.92-1.26-4.82-4.2-4.96-4.39-.15-.19-1.18-1.57-1.18-3 0-1.42.74-2.12 1-2.41.27-.29.58-.36.78-.36.2 0 .39.002.56.01.18.008.42-.07.66.5.24.59.83 2.02.9 2.17.07.15.12.32.02.51-.1.19-.15.31-.3.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.78 1.28 1.67 2.07 1.15 1.02 2.12 1.34 2.42 1.49.3.15.48.13.66-.05.18-.18.74-.86.94-1.16.2-.3.4-.25.66-.15.27.1 1.7.8 1.99.94.29.15.48.22.55.34.07.13.07.74-.17 1.42z"/></svg>\n</button>\n\n<script>\n  // Plan buttons -> prefill enquiry form\n  document.querySelectorAll(\'a[data-plan]\').forEach(a => {\n    a.addEventListener(\'click\', () => {\n      const plan = a.getAttribute(\'data-plan\');\n      const msgEl = document.getElementById(\'cmsg\');\n      if (msgEl) { msgEl.value = plan; setTimeout(() => msgEl.focus(), 600); }\n    });\n  });\n\n  // Mobile menu toggle\n  const navToggle = document.getElementById(\'navToggle\');\n  const mobileMenu = document.getElementById(\'mobileMenu\');\n  navToggle.addEventListener(\'click\', () => {\n    navToggle.classList.toggle(\'open\');\n    mobileMenu.classList.toggle(\'show\');\n  });\n  mobileMenu.querySelectorAll(\'a\').forEach(a => a.addEventListener(\'click\', () => {\n    navToggle.classList.remove(\'open\');\n    mobileMenu.classList.remove(\'show\');\n  }));\n\n  // WhatsApp float menu\n  const waFloat = document.getElementById(\'waFloat\');\n  const waMenu = document.getElementById(\'waMenu\');\n  waFloat.addEventListener(\'click\', () => waMenu.classList.toggle(\'show\'));\n  document.addEventListener(\'click\', (e) => {\n    if (!waMenu.contains(e.target) && !waFloat.contains(e.target)) waMenu.classList.remove(\'show\');\n  });\n\n  // FAQ accordion\n  document.querySelectorAll(\'.faq-item\').forEach(item => {\n    const q = item.querySelector(\'.faq-q\');\n    const a = item.querySelector(\'.faq-a\');\n    q.addEventListener(\'click\', () => {\n      const isOpen = item.classList.contains(\'open\');\n      document.querySelectorAll(\'.faq-item\').forEach(i => {\n        i.classList.remove(\'open\');\n        i.querySelector(\'.faq-a\').style.maxHeight = null;\n      });\n      if (!isOpen) {\n        item.classList.add(\'open\');\n        a.style.maxHeight = a.scrollHeight + \'px\';\n      }\n    });\n  });\n\n  // Reveal on scroll\n  const revealEls = document.querySelectorAll(\'.reveal\');\n  const io = new IntersectionObserver((entries) => {\n    entries.forEach(entry => {\n      if (entry.isIntersecting) {\n        entry.target.classList.add(\'in\');\n        io.unobserve(entry.target);\n      }\n    });\n  }, { threshold: 0.12 });\n  revealEls.forEach(el => io.observe(el));\n\n  // Contact form -> WhatsApp\n  const contactForm = document.getElementById(\'contactForm\');\n  contactForm.addEventListener(\'submit\', (e) => {\n    e.preventDefault();\n    const name = document.getElementById(\'cname\').value;\n    const phone = document.getElementById(\'cphone\').value;\n    const email = document.getElementById(\'cemail\').value;\n    const service = document.getElementById(\'cservice\').value;\n    const msg = document.getElementById(\'cmsg\').value;\n    const text = `Hi Laxex Technology, I\'m ${name}.%0APhone: ${phone}%0AEmail: ${email}%0AInterested in: ${service}%0ADetails: ${msg}`;\n    window.open(`https://wa.me/917990411572?text=${encodeURIComponent(text).replace(/%250A/g,\'%0A\')}`, \'_blank\');\n  });\n\n  // Header shrink/border on scroll\n  const navPill = document.querySelector(\'.nav-pill\');\n  window.addEventListener(\'scroll\', () => {\n    if (window.scrollY > 30) {\n      navPill.style.borderColor = \'rgba(234,240,255,0.18)\';\n      navPill.style.background = \'rgba(7,10,18,0.78)\';\n    } else {\n      navPill.style.borderColor = \'\';\n      navPill.style.background = \'\';\n    }\n  });\n\n  // Cursor-tracked glow on ghost buttons (lights up where you actually hover)\n  document.querySelectorAll(\'.btn-ghost\').forEach(btn => {\n    btn.addEventListener(\'mousemove\', (e) => {\n      const r = btn.getBoundingClientRect();\n      btn.style.setProperty(\'--mx\', `${e.clientX - r.left}px`);\n      btn.style.setProperty(\'--my\', `${e.clientY - r.top}px`);\n    });\n  });\n\n  // Magnetic pull on primary CTAs — button leans slightly toward the cursor\n  const isFinePointer = window.matchMedia(\'(hover: hover) and (pointer: fine)\').matches;\n  if (isFinePointer) {\n    document.querySelectorAll(\'.btn-grad\').forEach(btn => {\n      btn.addEventListener(\'mousemove\', (e) => {\n        const r = btn.getBoundingClientRect();\n        const relX = (e.clientX - r.left) / r.width - 0.5;\n        const relY = (e.clientY - r.top) / r.height - 0.5;\n        btn.style.transform = `translateY(-3px) scale(1.015) translate(${relX * 6}px, ${relY * 5}px)`;\n      });\n      btn.addEventListener(\'mouseleave\', () => { btn.style.transform = \'\'; });\n    });\n\n    // Service cards tilt gently toward cursor — echoes the logo\'s angled mark\n    document.querySelectorAll(\'.svc-card\').forEach(card => {\n      card.addEventListener(\'mousemove\', (e) => {\n        const r = card.getBoundingClientRect();\n        const relX = (e.clientX - r.left) / r.width - 0.5;\n        const relY = (e.clientY - r.top) / r.height - 0.5;\n        card.style.transform = `translateY(-6px) rotateX(${relY * -5}deg) rotateY(${relX * 7}deg)`;\n      });\n      card.addEventListener(\'mouseleave\', () => { card.style.transform = \'\'; });\n    });\n  }\n</script>\n\n<style>\n  .svc-card{ transform-style:preserve-3d; transition:transform .35s cubic-bezier(.2,.8,.2,1), border-color .35s ease, background .35s ease; }\n</style>\n\n';
const SCRIPT_JS = "\n  // Mobile menu toggle\n  const navToggle = document.getElementById('navToggle');\n  const mobileMenu = document.getElementById('mobileMenu');\n  navToggle.addEventListener('click', () => {\n    navToggle.classList.toggle('open');\n    mobileMenu.classList.toggle('show');\n  });\n  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {\n    navToggle.classList.remove('open');\n    mobileMenu.classList.remove('show');\n  }));\n\n  // WhatsApp float menu\n  const waFloat = document.getElementById('waFloat');\n  const waMenu = document.getElementById('waMenu');\n  waFloat.addEventListener('click', () => waMenu.classList.toggle('show'));\n  document.addEventListener('click', (e) => {\n    if (!waMenu.contains(e.target) && !waFloat.contains(e.target)) waMenu.classList.remove('show');\n  });\n\n  // FAQ accordion\n  document.querySelectorAll('.faq-item').forEach(item => {\n    const q = item.querySelector('.faq-q');\n    const a = item.querySelector('.faq-a');\n    q.addEventListener('click', () => {\n      const isOpen = item.classList.contains('open');\n      document.querySelectorAll('.faq-item').forEach(i => {\n        i.classList.remove('open');\n        i.querySelector('.faq-a').style.maxHeight = null;\n      });\n      if (!isOpen) {\n        item.classList.add('open');\n        a.style.maxHeight = a.scrollHeight + 'px';\n      }\n    });\n  });\n\n  // Reveal on scroll\n  const revealEls = document.querySelectorAll('.reveal');\n  const io = new IntersectionObserver((entries) => {\n    entries.forEach(entry => {\n      if (entry.isIntersecting) {\n        entry.target.classList.add('in');\n        io.unobserve(entry.target);\n      }\n    });\n  }, { threshold: 0.12 });\n  revealEls.forEach(el => io.observe(el));\n\n  // Contact form -> WhatsApp\n  const contactForm = document.getElementById('contactForm');\n  contactForm.addEventListener('submit', (e) => {\n    e.preventDefault();\n    const name = document.getElementById('cname').value;\n    const phone = document.getElementById('cphone').value;\n    const email = document.getElementById('cemail').value;\n    const service = document.getElementById('cservice').value;\n    const msg = document.getElementById('cmsg').value;\n    const text = `Hi Laxex Technology, I'm ${name}.%0APhone: ${phone}%0AEmail: ${email}%0AInterested in: ${service}%0ADetails: ${msg}`;\n    window.open(`https://wa.me/917990411572?text=${encodeURIComponent(text).replace(/%250A/g,'%0A')}`, '_blank');\n  });\n\n  // Header shrink/border on scroll\n  const navPill = document.querySelector('.nav-pill');\n  window.addEventListener('scroll', () => {\n    if (window.scrollY > 30) {\n      navPill.style.borderColor = 'rgba(234,240,255,0.18)';\n      navPill.style.background = 'rgba(7,10,18,0.78)';\n    } else {\n      navPill.style.borderColor = '';\n      navPill.style.background = '';\n    }\n  });\n\n  // Cursor-tracked glow on ghost buttons (lights up where you actually hover)\n  document.querySelectorAll('.btn-ghost').forEach(btn => {\n    btn.addEventListener('mousemove', (e) => {\n      const r = btn.getBoundingClientRect();\n      btn.style.setProperty('--mx', `${e.clientX - r.left}px`);\n      btn.style.setProperty('--my', `${e.clientY - r.top}px`);\n    });\n  });\n\n  // Magnetic pull on primary CTAs — button leans slightly toward the cursor\n  const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;\n  if (isFinePointer) {\n    document.querySelectorAll('.btn-grad').forEach(btn => {\n      btn.addEventListener('mousemove', (e) => {\n        const r = btn.getBoundingClientRect();\n        const relX = (e.clientX - r.left) / r.width - 0.5;\n        const relY = (e.clientY - r.top) / r.height - 0.5;\n        btn.style.transform = `translateY(-3px) scale(1.015) translate(${relX * 6}px, ${relY * 5}px)`;\n      });\n      btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });\n    });\n\n    // Service cards tilt gently toward cursor — echoes the logo's angled mark\n    document.querySelectorAll('.svc-card').forEach(card => {\n      card.addEventListener('mousemove', (e) => {\n        const r = card.getBoundingClientRect();\n        const relX = (e.clientX - r.left) / r.width - 0.5;\n        const relY = (e.clientY - r.top) / r.height - 0.5;\n        card.style.transform = `translateY(-6px) rotateX(${relY * -5}deg) rotateY(${relX * 7}deg)`;\n      });\n      card.addEventListener('mouseleave', () => { card.style.transform = ''; });\n    });\n  }\n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Laxex Technology — Build. Brand. Grow." },
      { name: "description", content: "Laxex Technology — Websites, video editing, branding, social media management, hosting and ad management for businesses that want to look bigger than they are." },
      { property: "og:title", content: "Laxex Technology — Build. Brand. Grow." },
      { property: "og:description", content: "Laxex Technology — Websites, video editing, branding, social media management, hosting and ad management for businesses." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    if (document.getElementById("laxex-inline-script")) return;
    const s = document.createElement("script");
    s.id = "laxex-inline-script";
    s.text = "(function(){" + SCRIPT_JS + "})();";
    document.body.appendChild(s);
  }, []);

  useEffect(() => {
    // Wait a tick so the injected script has wired its own listeners, then
    // replace the floating WhatsApp button with a clone (stripping those
    // listeners) and hook up the React-controlled contact modal instead.
    const t = setTimeout(() => {
      const waFloat = document.getElementById("waFloat");
      const waMenu = document.getElementById("waMenu");
      if (waMenu) waMenu.remove();
      if (waFloat && !waFloat.dataset.laxexHooked) {
        const clone = waFloat.cloneNode(true) as HTMLElement;
        clone.dataset.laxexHooked = "1";
        waFloat.replaceWith(clone);
        clone.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation();
          setContactOpen(true);
        });
      }
    }, 0);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!contactOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setContactOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [contactOpen]);

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: BODY_HTML }} />
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}

type ContactPerson = {
  name: string;
  role: string;
  phone: string;
  waLink: string;
};

const CONTACTS: ContactPerson[] = [
  {
    name: "RONAK VAGHELA",
    role: "Founder",
    phone: "+91 7990411572",
    waLink:
      "https://wa.me/917990411572?text=Hi%20Laxex%20Technology%2C%20I%27d%20like%20to%20get%20in%20touch.",
  },
  {
    name: "KULDIP RAVALJI",
    role: "Co-Founder",
    phone: "+91 7990373975",
    waLink:
      "https://wa.me/917990373975?text=Hi%20Laxex%20Technology%2C%20I%27d%20like%20to%20get%20in%20touch.",
  },
];

function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="laxex-contact-title"
      aria-hidden={!open}
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 300,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        background: "rgba(3,5,12,0.62)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        opacity: open ? 1 : 0,
        pointerEvents: open ? "auto" : "none",
        transition: "opacity .22s ease",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "440px",
          borderRadius: "22px",
          padding: "28px 24px 24px",
          background:
            "linear-gradient(180deg, rgba(20,24,40,0.85) 0%, rgba(10,14,26,0.92) 100%)",
          border: "1px solid rgba(234,240,255,0.12)",
          boxShadow:
            "0 30px 80px -20px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04) inset",
          backdropFilter: "blur(24px) saturate(160%)",
          WebkitBackdropFilter: "blur(24px) saturate(160%)",
          color: "#eaf0ff",
          fontFamily: "'Inter', system-ui, sans-serif",
          transform: open ? "scale(1) translateY(0)" : "scale(0.94) translateY(8px)",
          opacity: open ? 1 : 0,
          transition: "transform .25s cubic-bezier(.2,.8,.2,1), opacity .22s ease",
        }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close contact dialog"
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            width: "34px",
            height: "34px",
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.1)",
            background: "rgba(255,255,255,0.04)",
            color: "#eaf0ff",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "18px",
            lineHeight: 1,
            transition: "background .2s ease, transform .2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.04)";
          }}
        >
          ×
        </button>

        <h3
          id="laxex-contact-title"
          style={{
            margin: 0,
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "22px",
            fontWeight: 700,
            letterSpacing: "-0.01em",
          }}
        >
          Contact Our Team
        </h3>
        <p
          style={{
            margin: "6px 0 22px",
            fontSize: "14px",
            color: "rgba(234,240,255,0.62)",
            lineHeight: 1.5,
          }}
        >
          Choose the person you'd like to contact on WhatsApp.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {CONTACTS.map((c) => (
            <div
              key={c.phone}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                padding: "14px",
                borderRadius: "14px",
                border: "1px solid rgba(234,240,255,0.08)",
                background: "rgba(255,255,255,0.03)",
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background:
                    "linear-gradient(135deg, rgba(61,214,245,0.18), rgba(124,92,255,0.18))",
                  color: "#eaf0ff",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: "15px",
                  letterSpacing: "0.02em",
                }}
              >
                {c.name
                  .split(" ")
                  .map((p) => p[0])
                  .slice(0, 2)
                  .join("")}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    letterSpacing: "0.02em",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {c.name}
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "rgba(234,240,255,0.55)",
                    marginTop: "2px",
                  }}
                >
                  {c.role} · {c.phone}
                </div>
              </div>
              <a
                href={c.waLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Chat with ${c.name} on WhatsApp`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "9px 14px",
                  borderRadius: "10px",
                  background: "linear-gradient(135deg,#22c55e,#16a34a)",
                  color: "#fff",
                  fontSize: "13px",
                  fontWeight: 600,
                  textDecoration: "none",
                  boxShadow: "0 8px 20px -8px rgba(34,197,94,0.6)",
                  whiteSpace: "nowrap",
                }}
              >
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
                  <path d="M3 21l1.7-5A9 9 0 1112 21a9 9 0 01-5-1.5z" />
                </svg>
                Chat
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
