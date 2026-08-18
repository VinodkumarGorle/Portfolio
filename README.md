# Vinod Kumar Gorle — AI / GenAI Engineer Portfolio

Production-ready static portfolio website for an AI / GenAI Engineer specializing in LLMs, RAG, Multimodal AI, Agentic AI, and Azure AI systems.

Built with HTML5, CSS3, Bootstrap 5, and vanilla JavaScript. No frontend framework or backend required.

## Live Preview Locally

Open `index.html` in a browser, or serve with any static file server:

```bash
# Python
python -m http.server 8080

# Node.js (npx)
npx serve .
```

Then visit `http://localhost:8080`

## Folder Structure

```text
/
├── index.html
├── about.html
├── projects.html
├── architecture.html
├── skills.html
├── experience.html
├── certifications.html
├── contact.html
│
├── projects/
│   ├── logo-search.html
│   ├── document-rag.html
│   └── computer-vision.html
│
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   ├── images/
│   │   ├── profile/
│   │   ├── projects/
│   │   └── architecture/
│   ├── icons/
│   └── resume/
│       └── Vinod_Kumar_Gorle_AI_GenAI_Resume.pdf
│
├── generate_resume.py
└── README.md
```

## Features

- Dark/light theme toggle with `localStorage` persistence
- Fully responsive (320px to 1920px+)
- Real navigation — no placeholder buttons or dead links
- CSS-based AI architecture visualizations
- SEO meta tags and Open Graph on every page
- Accessible navigation with keyboard support and reduced motion

## Deployment

This site works with any static hosting:

### GitHub Pages

1. Push the repository to GitHub
2. Go to Settings → Pages
3. Select branch and root folder (`/`)
4. `index.html` will serve as the homepage

### Netlify

1. Drag and drop the folder to [Netlify Drop](https://app.netlify.com/drop)
2. Or connect the repo and set publish directory to `/`

### Vercel

```bash
npx vercel --prod
```

Set the output directory to the project root.

### Azure Static Web Apps

1. Create a Static Web App in Azure Portal
2. Connect your repository
3. Set app location to `/` and output location to empty (static HTML)

## Update Contact & Social Links

| Field    | Current Value |
|----------|---------------|
| Email    | `vinodkumargorle5@gmail.com` |
| Phone    | `+91 8367256076` |
| LinkedIn | `https://linkedin.com/in/vinodkumargorle8367` |
| GitHub   | `https://github.com/VinodkumarGorle` |

## Add a New Project

1. Create `projects/your-project.html` using an existing project page as a template
2. Use `../` for asset paths and navigation links
3. Add a project card to `index.html` and `projects.html`
4. Optionally add to `experience.html` if tied to a role

## Update Canonical URLs

Replace `https://vinodkumargorle.dev/` in `<link rel="canonical">` and Open Graph tags with your actual domain after deployment.

## Tech Stack

- HTML5, CSS3, Vanilla JavaScript
- Bootstrap 5.3.3 (local — `assets/vendor/bootstrap/`)
- Bootstrap Icons 1.11.3 (local — `assets/vendor/bootstrap-icons/`)
- No CDN dependencies — works fully offline

## Offline / Local Assets

```text
assets/vendor/
├── bootstrap/css/bootstrap.min.css
├── bootstrap/js/bootstrap.bundle.min.js
└── bootstrap-icons/font/
    ├── bootstrap-icons.min.css
    └── fonts/bootstrap-icons.woff2
```

No jQuery or AJAX libraries are used.

## Replace Resume

Replace `assets/resume/Vinod_Kumar_Gorle_AI_GenAI_Resume.pdf` with your PDF. Keep the same filename. Your actual resume is the source of truth — do not regenerate it with `generate_resume.py` for deployment.

## License

© 2026 Vinod Kumar Gorle. All rights reserved.
