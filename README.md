# Maison Veloura Perfumes 🌹👑

> *"The Scent of Royalty"*

An ultra-premium, multi-page luxury perfume e-commerce web application for **Maison Veloura Perfumes**, built with **Next.js 14 (App Router)**, **Tailwind CSS**, **Framer Motion**, and **Lucide React**.

---

## 🎨 Design System & Palette

- **Background (Blush Pink)**: `#FFF5F7`
- **Sections (Soft Rose)**: `#FDE4EA`
- **Primary Accent (Deep Rose)**: `#C9566F`
- **Details & Prices (Champagne Gold)**: `#B98A4E`
- **Primary Text (Dark Plum)**: `#4A2330`
- **Typography**: `Cormorant Garamond` (Serif Headings) + `Jost` (Body Sans)

---

## 🚀 Features & Architecture

- **Sticky Blur Header**: Transparent over hero, transitions into a frosted blush glass header on scroll with thin gold hairline border.
- **Announcement Bar**: Top banner with complimentary gift wrapping and shipping thresholds.
- **Mega-Menu Dropdown**: Interactive hover menu categorized by Gender and Scent Family with featured product highlights.
- **Full-Screen Live Search**: Instant searching across fragrances, notes (Rose, Oud, Vanilla), and categories.
- **Slide-in Cart Drawer & Cart Page**: Real-time React Context state management with localStorage persistence and free delivery progress tracking.
- **Wishlist Management**: Context-driven wishlist toggling with count badges and saved view.
- **Filtered Collection Page**: Real-time filtering by Gender, Scent Family, and Price range slider with sorting options.
- **Product Detail Page (PDP)**: High-resolution image zoom, size selection (50ml / 100ml), quantity adjustments, and **Fragrance Pyramid (Top, Heart, Base notes icons)**.
- **Royal Checkout Page**: Customer details, address, payment method selector (Cash on Delivery / Credit & Debit Card UI), and order confirmation.
- **Bespoke Pages**: About Us (Grasse Atelier heritage & pillars), Contact Us with "Book a Private Fragrance Session" form, and a custom luxury 404 page.

---

## 🛍️ Product Catalog (`/data/products.ts`)

1. **Rose Impériale** — Rs 28,500 | Scent: Floral | Target: Women
2. **Velvet Oud** — Rs 34,000 | Scent: Oud | Target: Unisex
3. **Blanc Soleil** — Rs 26,000 | Scent: Fresh | Target: Women
4. **Noir Pétale** — Rs 31,500 | Scent: Woody | Target: Men
5. **Or Rosé** — Rs 39,000 | Scent: Floral | Target: Unisex

*Listing cards showcase only image, name, and gold price. Fragrance notes appear exclusively on the product detail page.*

---

## ⚙️ Running Locally

### Prerequisites
- Node.js 18.x or later (v24 LTS recommended)
- npm or yarn

### Installation & Development Server

```bash
# 1. Clone or navigate to the directory
cd d:/Perfume

# 2. Install dependencies
npm install

# 3. Start the Next.js local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the store.

### Build Verification

```bash
# Create an optimized production build
npm run build

# Start the production server
npm start
```

---

## 📩 Contact & Brand Info

- **Brand Name**: Maison Veloura Perfumes
- **Tagline**: The Scent of Royalty
- **Email**: `hello@maisonveloura.com`
