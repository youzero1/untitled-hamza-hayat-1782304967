---
status: pending
title: Plumbing business website with contact form
---

1. Update `/app/src/styles/global.css` so it starts with the Tailwind v4 import and defines a clean, minimal design palette (off‑white background, deep navy primary, muted slate text, a single accent color for the call‑to‑action). Expected outcome: shared colors and base typography are available across the whole site.

2. Confirm `/app/src/main.tsx` imports `./styles/global.css` exactly once and renders the root page from `/app/src/pages/Home.tsx`. Expected outcome: the home page is what loads when the site opens.

3. Create `/app/src/types/contact.ts` to hold the shape of a contact form submission (name, email, phone, message). Expected outcome: a single reusable definition for form data used by the form component and hook.

4. Create `/app/src/components/Header.tsx` — a simple top bar with the business name on the left ("Clearflow Plumbing" as a sensible default, easy to change later) and anchor links on the right ("Services", "About", "Contact") that smooth‑scroll to the matching sections. Include a mobile menu that collapses the links behind a hamburger button on small screens. Expected outcome: visitors can navigate between sections from any screen size.

5. Create `/app/src/components/Hero.tsx` — the intro banner. It should contain: a short headline ("Reliable plumbing, done right the first time"), a one‑sentence subheading, a primary button that scrolls to the contact section, and a secondary button that scrolls to services. Use generous white space, large heading type, and a subtle background treatment (soft gradient or single muted shape) consistent with the minimal style. Expected outcome: the first thing visitors see clearly explains the business and pushes them toward contacting.

6. Create `/app/src/components/TrustBar.tsx` — a thin strip directly under the hero showing 3–4 short trust points (e.g. "Licensed & insured", "24/7 emergency callouts", "Upfront pricing", "Local family business") as plain text with small icons. Expected outcome: builds credibility immediately without heavy visuals.

7. Create `/app/src/components/Services.tsx` — a section titled "What we fix" with a responsive grid of 6 service cards (Leak repairs, Blocked drains, Hot water systems, Tap & toilet repairs, Bathroom renovations, Emergency callouts). Each card has an icon, a short title, and a 1‑line description. Cards have light borders, lots of padding, and hover lift. Expected outcome: customers can quickly see whether their problem is something this business handles.

8. Create `/app/src/components/About.tsx` — a two‑column section: short story about the business on the left (experience, area served, approach to pricing) and a stacked stats block on the right (e.g. "15+ years experience", "2,000+ jobs completed", "Same‑day response"). Expected outcome: builds trust and personal connection.

9. Create `/app/src/hooks/useContactForm.ts` — a custom hook that manages the contact form's field values, basic validation (required name, valid email format, non‑empty message), submission state (idle / submitting / success / error), and a submit handler. For now, the submit handler simulates a short delay and resolves successfully so the form is fully usable; a real email/backend integration can be wired in later. Expected outcome: the form behaves like a real submission and shows clear feedback.

10. Create `/app/src/components/ContactForm.tsx` — the form itself, using the hook from step 9. Fields: full name, email, phone (optional), message. Show inline validation messages under each field, disable the submit button while submitting, and show a clear success message ("Thanks — we'll be in touch within 1 business day") that replaces the form after a successful send, with a link to send another message. Style: large input fields, rounded corners, clear focus states, generous spacing. Expected outcome: a polished, accessible contact form that gives customers confidence their message went through.

11. Create `/app/src/components/ContactSection.tsx` — the "Contact" section wrapping the form. Left column has a short heading ("Get in touch"), one‑sentence prompt, and the area served ("Servicing Greater Springfield and surrounds"). Right column holds the form from step 10. Expected outcome: contacting the business is the clear final step of the page.

12. Create `/app/src/components/Footer.tsx` — a minimal footer with the business name, a copyright line with the current year, and the service area. No social links unless added later. Expected outcome: a clean closing element to the page.

13. Create `/app/src/pages/Home.tsx` that composes, in order: Header, Hero, TrustBar, Services, About, ContactSection, Footer. Wrap content in a max‑width container and ensure each section has a stable id (`services`, `about`, `contact`) so the header anchor links work. Expected outcome: a single scrollable landing page that tells the story end‑to‑end and ends on the contact form.

14. Verify the final result in the browser: the page loads with no console errors, the layout looks clean and minimal on both desktop and mobile widths, the nav links scroll to the right sections, and the contact form validates inputs and shows the success state after submitting. Expected outcome: a working business website where customers can clearly reach the owner via the contact form.
