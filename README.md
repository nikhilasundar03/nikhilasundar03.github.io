# nikhilasundar.github.io

Personal portfolio website for **Nikhila Sundar** — fully static, hosted on GitHub Pages.

**Live:** [nikhilasundar.github.io](https://nikhilasundar.github.io)

## About

Nikhila is a Computer Science M.S. student at **New York University** (AI concentration, graduating Dec 2026) with a B.S. in Computer Science from **Rutgers University - New Brunswick**. Her experience spans full-stack development, cloud services, AI/ML, and mobile applications.

## Tech Stack

- **Framework:** [Astro 5](https://astro.build) (static output, zero JS by default)
- **Styling:** Tailwind CSS 3, custom dark neon design system
- **Components:** React Islands (contact form only)
- **Content:** Astro Content Collections (Markdown + Zod schemas)
- **Contact:** [Web3Forms](https://web3forms.com) (static form service)
- **Fonts:** Space Grotesk, Inter, JetBrains Mono
- **CI/CD:** GitHub Actions → GitHub Pages

## Local Development

```bash
cd apps/web
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

## Build

```bash
cd apps/web
npm run build    # outputs to apps/web/dist/
npm run preview  # preview the build locally
```

## Deployment

Automated via GitHub Actions — every push to `master` triggers a build and deploy to GitHub Pages.

Workflow: `.github/workflows/deploy.yml`

## Project Structure

```
├── apps/web/                  # Astro site
│   ├── src/
│   │   ├── components/        # Navigation, Footer, ContactForm
│   │   ├── content/
│   │   │   ├── projects/      # Project markdown files (6)
│   │   │   ├── experience/    # Experience markdown files (4)
│   │   │   └── config.ts      # Collection schemas
│   │   ├── layouts/           # Layout.astro
│   │   ├── pages/             # index, about, projects, contact
│   │   │   └── projects/[slug].astro
│   │   └── styles/            # global.css (neon design system)
│   ├── public/                # favicon, robots.txt
│   ├── astro.config.mjs
│   ├── tailwind.config.js
│   └── package.json
├── .github/workflows/         # CI/CD
│   └── deploy.yml
└── README.md
```

## Content

### Projects (6)

| Project | Description |
|---------|-------------|
| Stock Market Tracker | Real-time price-alert program with interactive search, threshold alerts, and buy/sell algorithm |
| Pico LLM | PyTorch pipeline for K-gram MLPs, LSTMs, and Transformers with structured logging and automated analysis |
| Pizza Store Application | Android app in Java replicating an online pizza store platform |
| Time Series Forecaster | Meta Prophet-based forecasting using dates and anomalies — won Rutgers Datathon Fall 2023 |
| Banking Platform | Java program simulating an online banking platform with deposits, withdrawals, and account management |
| Facial Expression Predictor | Neural network that processes and predicts facial expressions |

### Experience (4)

| Role | Company | Period |
|------|---------|--------|
| CS112 Grader | Rutgers University | Jan 2023 – Dec 2024 |
| Technology Intern | Fiserv | Jun 2024 – Aug 2024 |
| Intern (OCR) | East Consultancy Services | Jun 2023 – Aug 2023 |
| Coding Instructor | Code Ninjas | Mar 2020 – Jun 2021 |

## Adding a Project

1. Create a new `.md` file in `apps/web/src/content/projects/`
2. Add frontmatter matching the schema in `config.ts` (title, description, date, tags, category, etc.)
3. Write the project body in Markdown
4. Set `featured: true` to show on the home page
5. Use the `liveUrl` field to link to external demos (Hugging Face, Railway, etc.)
6. Push to `master` — auto-deploys

## Setup Notes

- **Web3Forms:** Replace `YOUR_WEB3FORMS_ACCESS_KEY` in `ContactForm.tsx` with your key from [web3forms.com](https://web3forms.com)
- **GitHub Pages:** Repo must be named `nikhilasundar.github.io` and Pages source set to "GitHub Actions" in repo settings

## Contact

- **Email:** nikhilasundar03@gmail.com
- **LinkedIn:** [nikhilasundar](https://linkedin.com/in/nikhilasundar/)
- **GitHub:** [nikhilasundar](https://github.com/nikhilasundar)
