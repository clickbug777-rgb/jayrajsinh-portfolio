# JayrajSinh (Jay) — Personal Portfolio Website

A bespoke, high-performance portfolio website crafted with inspiration from the design language and micro-interactions of [therishithakor.com](https://therishithakor.com).

## 🚀 Key Features

1. **Stacked Pill Intro Loader**:
   - Sequential animated entry of the 4 focus disciplines.
   - Smooth numerical percentage counter (0% to 100%) and progress bar.
   - Cinematic slide-out transition revealing the page.

2. **Interactive Hanging Pull-Cord (Light / Dark Switcher)**:
   - Positioned in the upper right.
   - Clickable and draggable with recoil spring physics animation.
   - Toggles between Warm Stone/Parchment (Light Mode) and Obsidian Charcoal (Dark Mode), persisting user preference in `localStorage`.

3. **Hero Section & 3D Ability Card with Real Photo**:
   - Features your cutout portrait integrated seamlessly into the 3D Ability Card with dynamic lighting and tilt response.
   - Large neo-grotesque typography with honest, grounded positioning (*"Finance graduate, business enthusiast & digital builder"*).
   - Live time tracker synchronized with **Gandhinagar / Ahmedabad (IST – UTC+5:30)**.
   - Status indicator: *Bank of America · GIFT City*.
   - 3D Interactive Ability Card with real-time perspective tilt on hover/mouse tracking.

4. **The Four Doors ("My Focus, One Door Per Discipline")**:
   - **Door 01 · Business & Finance**: Banking operations at Bank of America (CVL), Robo-Advisory vs. Traditional research, BBA (Hons.) Finance from PDEU.
   - **Door 02 · Web & Digital Projects**: Elwont Pharmaceuticals B2B platform, TapStars NFC review solution, Claude Code development workflows.
   - **Door 03 · Entrepreneurship & Strategy**: TapStars NFC hardware cards, Bachpan Play School business development, SunFuel Electric brand research.
   - **Door 04 · Creative & Visual Content**: Street and portrait photography, visual design, branding concepts, visual storytelling.
   - Interactive Modal/Drawer: Clicking any door opens a detailed case study view with competencies and showcase cards, plus Previous/Next door navigation.

5. **"My Story" Reverse Chronological Time-Tunnel**:
   - Mechanical rolling odometer digits tracking the years backwards from 2026.
   - Dynamic canvas clock dials and depth particle tunnel responsive to scroll velocity.
   - Clean timeline cards detailing Bank of America CVL, TapStars, Elwont, Bachpan, SunFuel Electric, and PDEU (8.4 CGPA).

6. **Full-Bleed Responsive Name Banner**:
   - Dynamically auto-fits the name `JAYRAJSINH` across 100% of the viewport width.

7. **Project Inquiry & Contact Modal**:
   - Slide-out contact overlay with project brief inputs and automatic mail client launch.

---

## 📁 File Structure

```text
jayrajsinh-portfolio/
├── index.html              # Main HTML markup
├── styles.css              # Custom styling, dark mode tokens, and animations
├── script.js               # Logic for doors, loader, time tunnel, pull-cord, and clock
├── README.md               # Documentation & customization guide
└── assets/
    └── images/
        ├── portrait.png    # Your uploaded portrait cutout!
        └── portrait.svg    # Geometric fallback badge
```

---

## 🎨 How to Customize

### 1. Update Social Links & Email
Open `index.html` and look for the following placeholders:
- `mailto:your.email@example.com`
- `https://linkedin.com/in/YOUR-LINKEDIN`
- `https://github.com/YOUR-GITHUB`
- `https://instagram.com/YOUR-INSTAGRAM`

Replace them with your actual profiles.

---

## 🌐 How to Preview / Run Locally

You can open `index.html` directly in any modern browser:
- Double click `index.html`, OR
- Run a lightweight local server:
  ```bash
  npx serve .
  # or
  python -m http.server 8000
  ```
