# Fred Benjamin Onyango — ICT Support Portfolio

A responsive, single-page portfolio for **Fred Benjamin Onyango**, an ICT Support Technician and Network Support professional based in Homa Bay County, Kenya. The site brings together professional experience, education, technical skills, selected projects, certifications, and contact information in one place.

**Live portfolio:** [fredportfolio-one.vercel.app](https://fredportfolio-one.vercel.app)  
**GitHub repository:** [benjaminfred-onyango/Portfolio](https://github.com/benjaminfred-onyango/Portfolio)

## About the portfolio

The site presents Fred’s experience supporting healthcare, corporate, and academic environments. It highlights practical ICT service delivery, reliable systems, secure information handling, and end-user support.

### What’s included

- **Professional profile:** An introduction, location, languages, and career highlights.
- **Work experience:** Current ICT Technician role and previous industrial attachments.
- **Education and skills:** ICT qualifications and capabilities across support, networking, cybersecurity, healthcare systems, data management, and user training.
- **Selected projects:** Six examples covering local area networks, Wi-Fi, healthcare systems, cybersecurity, sports management, and hostel management.
- **Certifications and training:** Professional development in cybersecurity, networking, programming, data analytics, and AI.
- **Recommendations and services:** A recommendation and an overview of ICT support services.
- **Responsive navigation:** Section links, a mobile menu, and current-section highlighting.
- **Contact and CV:** A downloadable CV and a contact form that validates the message and opens WhatsApp with a pre-filled draft.
- **Accessibility-minded details:** Semantic page sections, descriptive image text, visible form feedback, and keyboard support for the mobile menu.

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript

There is no package manager, framework, build step, or server-side application required. Google Fonts are loaded from Google Fonts when an internet connection is available; local system fonts are used as fallbacks.

## Run locally

1. Clone or download this repository.
2. Open `index.html` in a modern web browser.

Alternatively, open the project folder in Visual Studio Code and use a local static-file server extension such as Live Server. The site’s HTML, CSS, JavaScript, and assets are served as static files.

## Deployment on Vercel

This static site is hosted on [Vercel](https://vercel.com/). To deploy it from GitHub:

1. Import the [GitHub repository](https://github.com/benjaminfred-onyango/Portfolio) into a Vercel project, or connect it in the settings of the existing Vercel project.
2. Keep the project root set to the repository root.
3. Use the **Other** framework preset. This project has no build or install command; leave those fields empty.
4. Deploy the project. Subsequent commits to the connected branch can trigger new deployments automatically.

The deployment serves `index.html` directly from the repository root. CSS, JavaScript, and asset references use relative paths, so no build step or environment variables are required.

## Project structure

```text
.
├── index.html       # Page content and metadata
├── styles.css       # Layout, responsive styling, and animations
├── script.js        # Navigation, scroll effects, and contact form behavior
├── README.md        # Project documentation
└── assets/
    ├── favicon.ico
    ├── favicon.svg
    ├── fred-portrait.png
    ├── project-*.jpg
    └── *.pdf        # CV, recommendation, and certificates
```

## Contact form behavior

The form runs entirely in the visitor’s browser. It validates the entered name, email, subject, and message, then opens WhatsApp with a pre-filled message. **It does not send the message to a server or submit it automatically.** The visitor must review and send the draft in WhatsApp. Opening the contact link requires an internet connection and a browser or device capable of handling WhatsApp links.

## Public files and privacy

This repository is public. Files committed here—including the CV, recommendation, portrait, and certificate PDFs—can be viewed or downloaded by anyone. Do not add passwords, private contact records, confidential documents, or other sensitive material to this repository.

## Maintenance

To update the portfolio, edit the relevant content in `index.html`, visual styles in `styles.css`, or interactive behavior in `script.js`. Keep linked files in the expected locations under `assets/`, or update their relative paths in the HTML. After a change, open the page in a browser and check the desktop and mobile layouts, navigation links, asset links, and contact flow.
