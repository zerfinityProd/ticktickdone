# ✅ Tick Tick Done — Smart Purchase Checklists

**Never buy without checking twice.** Tick Tick Done is an interactive, expert-curated checklist platform that empowers consumers to make confident, well-informed buying decisions.

## 🎯 What It Does

When you're about to make a big purchase — a sofa, a car, a laptop, jewelry — how do you know what to look for? Salespeople won't always tell you the full story. **Tick Tick Done** gives you a detailed, expert-curated checklist of everything to verify before you pay.

### How It Works:
1. **Browse** categories (Furniture, Electronics, Automobiles, etc.)
2. **Select** the product you're buying
3. **Check off** each verification point at the store
4. **Track progress** with a visual progress bar
5. **Share or download** your completed checklist

## 📱 Features

| Feature | Description |
|---|---|
| 📱 Mobile-First | Use it at the store on your phone |
| 🔍 Search | Find any product across all categories |
| 💾 Auto-Save | Progress saved to localStorage |
| 📊 Progress Bar | Track how many items you've verified |
| 🎉 Celebration | Confetti when all items are checked |
| 🔗 Share | Share via Web Share API or clipboard |
| 📥 Download | Download a text summary |
| 🏷️ Priority Tags | High/Medium/Low urgency on each item |
| 💡 Pro Tips | Expert advice with specific numbers |
| 🌙 Dark Mode | Automatic based on system preference |
| ♿ Accessible | Keyboard nav, ARIA labels, good contrast |

## 📦 Categories (21 Products, 236+ Checklist Items)

- 🪑 **Furniture** — Sofa, Dining Table, Bed/Mattress, Wardrobe, Office Chair
- 📱 **Electronics** — Smartphone, Laptop, Television, Washing Machine, Refrigerator
- 🚗 **Automobiles** — New Car, Used Car, Two-Wheeler
- 🏠 **Home & Interior** — Paint, Tiles & Flooring, Modular Kitchen, Curtains & Blinds
- 💎 **Jewelry** — Gold Jewelry, Diamond Jewelry
- 👔 **Fashion** — Formal Suit, Leather Shoes

## 🚀 Getting Started

No build tools, no dependencies, no setup. Just open the file:

```bash
# macOS
open index.html

# or simply double-click index.html in Finder
```

For a local development server (optional):
```bash
# Python 3
python3 -m http.server 8000

# Node.js
npx serve .
```

Then visit `http://localhost:8000`

## 🗂️ Project Structure

```
TickTickDone/
├── index.html          ← Single-page app entry point
├── css/
│   └── styles.css      ← All styles (modern CSS, responsive, dark mode)
├── js/
│   ├── app.js          ← Application logic (routing, search, checklist)
│   └── data.js         ← JSON data (categories, products, checklists)
├── assets/
│   └── favicon.svg     ← App favicon (green checkmark)
└── README.md           ← This file
```

## ➕ Adding New Products

All data lives in `js/data.js`. To add a new product, find the appropriate category and add a new product object:

```javascript
{
  "id": "your-product-id",
  "name": "Product Name",
  "icon": "🔧",
  "description": "Short description of what to look for",
  "tips": "General buying advice for this product.",
  "checklist": [
    {
      "id": "check-item-id",
      "title": "What to Check",
      "description": "Why this matters and what to look for.",
      "priority": "high",    // high | medium | low
      "proTip": "Expert insider tip with specific numbers."
    }
  ]
}
```

To add a new **category**, add a new object to the `categories` array with a unique `id`, `color`, and `products` array.

## 📄 License

MIT License — Feel free to use and modify.

---

**Shop Smart. Check Everything. Tick Tick Done! ✅**
