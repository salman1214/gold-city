# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Gold City Islamabad is a real estate marketing website for a luxury residential development project. It's a static multi-page website built with vanilla HTML, CSS, and JavaScript, deployed on Vercel.

## Tech Stack

- **Frontend**: HTML5, CSS3, vanilla JavaScript (ES6+)
- **Libraries**: jQuery 3.6.0, jQuery Mask Plugin
- **Integrations**: Google Tag Manager (GTM-M7MNLRL), Google reCAPTCHA v3, WhatsApp Web Widget
- **Fonts**: Gotham Rounded (custom), Font Awesome icons
- **Hosting**: Vercel (static deployment, no build step)

## Project Structure

```
├── index.html           # Homepage with loan calculator
├── about.html           # About Us page
├── contact.html         # Contact form with reCAPTCHA
├── gallery.html         # Photo gallery
├── gold-farm.html       # Gold Farms product page
├── css/
│   ├── combined.css     # Main compiled stylesheet (26K lines)
│   └── stylesheet.css   # Custom font declarations
├── js/
│   ├── api.js           # reCAPTCHA initialization
│   ├── calculator.js    # Loan calculator sliders (HL, TL, SL, CVL products)
│   ├── whatsapp-widget.js # WhatsApp chat integration (currently disabled)
│   ├── gtm.js           # Google Tag Manager
│   └── combinedjs.min.js # Bundled JavaScript
├── fonts/               # Gotham Rounded and Font Awesome fonts
└── gold-img/            # Asset images (~161 MB, 34+ directories)
```

## Key JavaScript Modules

**calculator.js**: Implements loan calculators for multiple products:
- Home Loan (HL): Max 3M PKR, up to 20 years
- Tractor Loan (TL): Max 3M PKR, up to 10 years
- School Loan (SL): Up to 10 years
- Car/Vehicle Loan (CVL): Max 3M PKR, up to 10 years

Each product has slider functions: `loanSlider{PRODUCT}()`, `tenureSlider{PRODUCT}()`, and some have `dPaymentSlider{PRODUCT}()`.

**whatsapp-widget.js**: `CreateWhatsappChatWidget()` factory function with configurable phone number (9251111962962) and branding. Currently `enabled: false`.

## Development Notes

- No package.json or build process - static files served directly
- No test framework configured
- CSS uses custom grid system with Bootstrap-like classes (`col-sm-*`, `col-md-*`, etc.)
- Theme support via `data-theme` attribute on elements
- Form validation uses browser validation + reCAPTCHA v3

## Deployment

Push to main branch triggers automatic Vercel deployment. No build commands required.
