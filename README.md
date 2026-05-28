# 🚀 Sciqus Infotech — High-Performance Enterprise Platform

An ultra-premium, highly-responsive corporate technology platform designed and developed for **Sciqus Infotech**. Modeled after high-end "editorial tech" visual frameworks (like Stripe, Vercel, and Linear), this platform acts as a showcase of elite-level **CSS layouts, fluid responsiveness, custom interactive states, and mobile app-consistent UX design**.

🔗 **Live Production Link:** [navneet-interview-assigment.onrender.com](https://navneet-interview-assigment.onrender.com)


## 📸 Application Screen Showcases

To experience the premium responsive styling and clean corporate color layouts without running the server, explore these actual screenshots captured directly across different viewports:

### 🖥️ Desktop Web Experience
* **Main Landing & Immersive Carousel:**
  ![Desktop Hero Landing](src/assets/Screenshot%202026-05-25%20064649.png)
* **Our Philosophy & Narrative Chapter pivots:**
  ![Desktop Philosophy Grid](src/assets/Screenshot%202026-05-25%20064658.png)
* **Capabilities Service slider & Operational metrics:**
  ![Desktop Services Slider](src/assets/Screenshot%202026-05-25%20064708.png)
* **Interactive Modals & Parallax CTAs:**
  ![Desktop Inquiries Modals](src/assets/Screenshot%202026-05-25%20064719.png)
* **Partnership RFP Form Submission:**
  ![Desktop RFP Submission](src/assets/Screenshot%202026-05-25%20064732.png)
* **Discovery Topology Modal Form:**
  ![Desktop Topology Modal](src/assets/Screenshot%202026-05-25%20064741.png)
* **Success Receipt Generation:**
  ![Desktop Success Receipt](src/assets/Screenshot%202026-05-25%20064753.png)

### 📱 Responsive Mobile App Experience
* **Mobile Landing & Top Navigation Bar:**
  ![Mobile Splash Landing](src/assets/Screenshot%202026-05-25%20064851.png)
* **Sidebar Off-Canvas Hamburger Menu:**
  ![Mobile Sidebar Drawer](src/assets/Screenshot%202026-05-25%20064902.png)
* **Mobile Capabilities & Stack Details:**
  ![Mobile Capabilities Stacks](src/assets/Screenshot%202026-05-25%20064911.png)
* **Mobile Safe Modal Scroll & Form Inputs:**
  ![Mobile Modal Scroll Safety](src/assets/Screenshot%202026-05-25%20064919.png)

---

## 🎯 Task Objectives & Deliverables Met

Every objective outlined in the frontend engineering challenge has been implemented with rigorous design fidelity:

### 1. 📱 Responsive Website (Desktop & Mobile Viewports)
* **Fluid Layout Grid:** Uses advanced CSS3 Flexbox and fractional Grid structures to seamlessly adapt from large desktop monitors down to portrait mobile phones (`320px` width) with zero layout overflow.
* **Liquid Sidebar Navigation:** Displays a elegant fixed left vertical navigation panel on desktop screens, which collapses into a sticky, frosted-glass header on mobile screens.
* **Hamburger Drawer Menu:** On mobile layouts, tapping the top-left hamburger button slides in the drawer sidebar smoothly from the left using a custom `cubic-bezier` transition. Body-level scrolling is locked automatically while open to prevent secondary touch disruptions.
* **Fluid Typography & Paddings:** Typography scales dynamically (e.g. Hero headings scale from `4rem` down to `2.2rem` and `1.6rem` on small phones) to guarantee absolute readability without clipping.

### 2. 🤖 Mobile Application UI Consistency
* **Native Navigation Patterns:** The hamburger off-canvas drawer is styled and structured to mirror the behavior of native React Native and Flutter slide-out drawers, keeping navigation unified.
* **Touch-Friendly Controls:** Slider buttons, carousel trackers, tab steps, and buttons have generous tap-targets (`min-height: 48px`) satisfying mobile ergonomic guidelines.
* **Viewport Form Scroll Safety:** The Consultation and RFP modals are engineered with a specialized `max-height: 90vh; overflow-y: auto;` scroll boundary. This guarantees that on short mobile screens (or when screens are rotated horizontally), the input fields and confirmation CTAs remain fully scrollable, reachable, and readable.
* **Fast In-Memory Performance:** All assets are compressed and optimized for mobile performance, with the production build compiling in under **600ms**!

---

## 📦 Detailed Container Manifest

The application is structured into the requested six distinct responsive containers:

### 1. 🖼️ Container 1: Immersive Hero Carousel (Splash Section)
* **Visual:** Full-viewport immersive slideshow showcasing modern server racks, neural AI lattices, and development environments.
* **Interactions:** Automatic cross-fade slides transition every 6 seconds, manual page indicators on the bottom left, and direct overlay nav-arrows on the bottom right.
* **CTA Button:** Vibrant primary outlines that animate with an expanding sapphire fill on hover.

### 2. 💡 Container 2: Philosophy & Core Narrative (Info Block)
* **Structure:** Horizontal split-column grid on desktop, stacking into a single vertical column on mobile screens.
* **Interactions:** A dynamic panel labeled **"Tap to Reveal Next Chapter"**. Clicking this panel cycles through a 3-step React state sequence (*Observed Bottlenecks*, *The Resilience Shift*, and *The Sciqus Sanctuary*), sliding in italicized quotes and corporate narrative chapters.

### 3. 🛠️ Container 3: Core Service Slider
* **Visual:** Horizontal card deck presenting Sciqus' technical capabilities, layered in front of a phantom backdrop watermark spelling `"SCIQUS"`.
* **Price Tags:** Configured as clean corporate badges showing system metrics (e.g. *SLA: 99.99%*, *GPU: L40S*, *CI/CD Stack*, *Kafka / Spark*).
* **Interactions:** Top-right arrow buttons slide cards horizontally. The track calculates viewport widths dynamically, translating by `100%` on mobile (1 card visible), `50%` on tablets (2 cards visible), and `33.333%` on desktop monitors (3 cards visible).

### 4. 📊 Container 4: Static Content Collage (Masonry Grid)
* **Visual:** Asymmetric grid displaying:
  1. A landscape, high-resolution photo of professional software developers collaborating.
  2. **Operations & SLAs Block:** Border-framed card outlining corporate system metrics: standard business hours, 24/7/365 Severity 1 incident response, ticket SLAs under 2 hours, and a 99.95% system uptime guarantee.
  3. **Blueprint Details Card:** Details low-latency decoupled microservice guidelines.

### 5. 📨 Container 5: Engagement Portals & Interactive Modals
* **Structure:** A fixed-background parallax visual overlaid with a translucent glassmorphism box.
* **Action Buttons:** Displays two side-by-side call-to-action buttons that launch custom responsive form systems:
  * **Button A ("BOOK TOPOLOGY CALL"):** Launches a **Topology Audit Form** (captures name, business email, direct phone, dates, primary cloud topology, and engineering squad size).
  * **Button B ("REQUEST COMPREHENSIVE RFP"):** Launches an **Enterprise RFP Proposal Form** (captures target launch, budget brackets, and system scope details).
* **Success Receipts:** Completing either form triggers an in-memory success page, displaying unique generated serial confirmation receipts (e.g. `#SI-7491` or `#SI-RFP-58291`) matching booking requirements.

### 6. 🌐 Container 6: Rebranded Slate Blue Footer
* **Visual:** A solid space-navy (`#0f1c30`) panel providing strong visual grounding for the light corporate canvas.
* **Interactions:** Displays sliding action buttons for **LinkedIn**, **GitHub**, and direct telephone calls. Hovering slides their responsive icons to the right with satisfying micro-animations.

---

## 🛠️ Technology Stack & Tools

* **Core Framework:** React 19 (Modern component lifecycles, structured state management)
* **Bundler & Dev Server:** Vite 8 (Hot Module Replacement, ultra-fast production builds)
* **Styling Layer:** Vanilla CSS3 + Flexbox + Grid + Media Queries (Zero third-party weight, 100% visual layout control)
* **Iconography:** Lucide React (Clean, thin modern vector outlines)
* **Typography:** Outfit (Sans-serif display headings) and Cormorant Garamond (Italic serif narrative text) sourced dynamically from Google Fonts.

---

## ⚙️ How to Setup & Run Locally

### 1. Installation
Ensure you have **Node.js** installed, then run:
```powershell
# Navigate into the project folder
cd "c:\Users\navneet\Desktop\sciqus_frontend"

# Install all standard development packages
npm install
```

### 2. Launch Local Dev Host
To boot up the local dev server with hot reloading enabled:
```powershell
npm run dev
```
Open your browser and navigate to **`http://localhost:5173/`**.

### 3. Compile for Production
To bundle and compress assets for official static hosting deployment:
```powershell
npm run build
```
The optimized bundle is saved inside the `/dist` folder.

---

## 🚀 Push to Public GitHub Repository

Follow this sequential command block to initialize git locally, bind it to your public GitHub repository, and push the codebase:

```powershell
# 1. Initialize git locally
git init

# 2. Track all rebranded project files
git add .

# 3. Commit files with an explicit initial commit message
git commit -m "feat: initial commit - Sciqus Infotech fully responsive light corporate platform"

# 4. Rename default branch to main
git branch -M main

# 5. Add your public GitHub remote origin URL
# (Replace USERNAME and REPO-NAME with your GitHub details)
git remote add origin https://github.com/USERNAME/REPO-NAME.git

# 6. Push code to main
git push -u origin main
```
