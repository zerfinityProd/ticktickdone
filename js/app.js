/**
 * TickTickDone — Quality Inspector & Purchase Checklists
 * Modern Interactive Web App Logic
 */

(function () {
  'use strict';

  /* ==========================================================================
     01. SVG ICON LIBRARY
     ========================================================================== */
  const ICONS = {
    'furniture': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"/><path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H7v-2a2 2 0 0 0-4 0Z"/><path d="M5 18v2"/><path d="M19 18v2"/></svg>',
    'electronics': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="12" x="3" y="4" rx="2"/><line x1="2" x2="22" y1="20" y2="20"/><line x1="12" x2="12" y1="16" y2="20"/></svg>',
    'automobiles': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>',
    'home-interior': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 10.5 9-7.5 9 7.5V20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/><path d="M9 22V12h6v10"/><path d="M19 8V5h-2v1.5"/></svg>',
    'jewelry': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12l4 6-10 12L2 9Z"/><path d="M11 3 8 9l4 12 4-12-3-6"/><path d="M2 9h20"/></svg>',
    'fashion': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/></svg>',

    'sofa': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 9V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v2"/><path d="M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M4 18v3"/><path d="M20 18v3"/><path d="M12 5v6"/></svg>',
    'dining-table': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="3" rx="1"/><line x1="5" y1="10" x2="4" y2="20"/><line x1="19" y1="10" x2="20" y2="20"/><line x1="5" y1="13" x2="19" y2="13"/></svg>',
    'bed-mattress': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 4v16"/><path d="M2 12h18a2 2 0 0 1 2 2v6"/><path d="M2 18h20"/><path d="M6 12V9a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3"/></svg>',
    'wardrobe-closet': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="20" x="3" y="2" rx="2"/><line x1="12" x2="12" y1="2" y2="22"/><line x1="9" x2="9.01" y1="12" y2="12"/><line x1="15" x2="15.01" y1="12" y2="12"/></svg>',
    'office-chair': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3h10a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"/><path d="M5 14h14a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1Z"/><line x1="12" y1="17" x2="12" y2="20"/><path d="m6 22 6-2 6 2"/><circle cx="5" cy="22" r="1"/><circle cx="19" cy="22" r="1"/></svg>',
    
    'smartphone': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2"/><line x1="11" x2="13" y1="18" y2="18"/></svg>',
    'laptop': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"/></svg>',
    'television': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="4" rx="2"/><line x1="7" x2="17" y1="21" y2="21"/><line x1="12" x2="12" y1="18" y2="21"/></svg>',
    'washing-machine': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2"/><circle cx="12" cy="13" r="5"/><circle cx="12" cy="13" r="2"/><line x1="7" y1="6" x2="9" y2="6"/></svg>',
    'refrigerator': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2"/><line x1="5" x2="19" y1="9" y2="9"/><line x1="8" x2="8" y1="5" y2="7"/><line x1="8" x2="8" y1="12" y2="15"/></svg>',

    'new-car': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 17h-1v-4c0-.6.4-1 1-1l2.5-4.5A2 2 0 0 1 8.2 6.5h4.8"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/><path d="M19 17h2c.6 0 1-.4 1-1v-2"/><path d="m19 2 .8 1.8 1.8.8-1.8.8-.8 1.8-.8-1.8-1.8-.8 1.8-.8Z"/></svg>',
    'used-car': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/><path d="M19 17h2c.6 0 1-.4 1-1v-3l-1.5-3.5"/><path d="M2 13v3c0 .6.4 1 1 1"/><path d="M4.5 12.5 7 8a1.5 1.5 0 0 1 1.3-.8h5.2"/><path d="m15 5 2.5 2.5L22 3"/></svg>',
    'two-wheeler': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="5" cy="17" r="3"/><circle cx="19" cy="17" r="3"/><path d="M5 17h4l4-8h4"/><path d="m15 9 3 4"/><path d="M17 6h2"/><path d="M9 17l3-8"/></svg>',

    'paint': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="6" x="2" y="2" rx="2"/><path d="M10 8v2a2 2 0 0 0 2 2h3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1"/><rect width="4" height="6" x="12" y="16" rx="1"/></svg>',
    'tiles-flooring': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>',
    'modular-kitchen': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="8" width="20" height="13" rx="2"/><line x1="2" y1="8" x2="22" y2="8"/><line x1="12" y1="8" x2="12" y2="21"/><circle cx="7" cy="13" r="1"/><circle cx="17" cy="13" r="1"/></svg>',
    'curtains-blinds': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="2" y1="3" x2="22" y2="3"/><path d="M3 3c3 4 3 10 0 18"/><path d="M21 3c-3 4-3 10 0 18"/></svg>',

    'gold-jewelry': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="14" r="7"/><path d="m10 7 2-3 2 3-2 2-2-2Z"/></svg>',
    'diamond-jewelry': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12l4 6-10 12L2 9Z"/><path d="M11 3 8 9l4 12 4-12-3-6"/><path d="M2 9h20"/></svg>',

    'formal-suit': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h4l4 5 4-5h4v16a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4Z"/><path d="m8 4 4 10 4-10"/></svg>',
    'leather-shoes': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 17h19a1 1 0 0 0 1-1c0-2-2-4.5-5-5-2-.3-3.5-2-5-3.5L10 6H7v5L4 13c-1.3.8-2 2-2 4Z"/><path d="M2 17v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2"/></svg>',

    // UI Utilities
    'search': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/></svg>',
    'check': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
    'arrow-left': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>',
    'arrow-right': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
    'shield': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>',
    'lightbulb': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>',
    'share': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" x2="12" y1="2" y2="15"/></svg>',
    'download': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>',
    'reset': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>',
    'celebration': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.45 1-1 1H8c-.55 0-1 .45-1 1v1h10v-1c0-.55-.45-1-1-1h-1c-.55 0-1-.45-1-1v-2.34"/><path d="M6 4h12a2 2 0 0 1 2 2v3a6 6 0 0 1-6 6h0a6 6 0 0 1-6-6V6a2 2 0 0 1 2-2Z"/></svg>',
    'clipboard': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M9 12h6"/><path d="M9 16h6"/></svg>'
  };

  function getIcon(key, fallbackKey = 'clipboard') {
    return ICONS[key] || ICONS[fallbackKey] || ICONS['clipboard'];
  }

  /* ==========================================================================
     02. AUDIO & HAPTIC INTERACTION
     ========================================================================== */
  function playPopSound() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(520, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(840, ctx.currentTime + 0.07);
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.08);
    } catch (e) {
      // Audio autoplay policy fallback
    }

    if (navigator.vibrate) {
      try { navigator.vibrate(12); } catch (e) {}
    }
  }

  /* ==========================================================================
     03. DATA ACCESS HELPERS
     ========================================================================== */
  function getAppData() {
    return window.APP_DATA || { categories: [] };
  }

  function getCategories() {
    return getAppData().categories || [];
  }

  function getCategory(categoryId) {
    return getCategories().find(c => c.id === categoryId) || null;
  }

  function getProduct(categoryId, productId) {
    const category = getCategory(categoryId);
    if (!category) return { category: null, product: null };
    const product = (category.products || []).find(p => p.id === productId) || null;
    return { category, product };
  }

  function getAllProducts() {
    const results = [];
    getCategories().forEach(cat => {
      (cat.products || []).forEach(prod => {
        results.push({ ...prod, categoryId: cat.id, categoryName: cat.name, categoryColor: cat.color });
      });
    });
    return results;
  }

  /* ==========================================================================
     04. LOCALSTORAGE STATE
     ========================================================================== */
  function storageKey(categoryId, productId) {
    return `ttd_checklist_${categoryId}_${productId}`;
  }

  function getCheckedItems(categoryId, productId) {
    try {
      const val = localStorage.getItem(storageKey(categoryId, productId));
      return val ? new Set(JSON.parse(val)) : new Set();
    } catch (e) {
      return new Set();
    }
  }

  function setCheckedItems(categoryId, productId, checkedSet) {
    try {
      localStorage.setItem(storageKey(categoryId, productId), JSON.stringify(Array.from(checkedSet)));
      updateGlobalActiveBadge();
    } catch (e) {}
  }

  function toggleItem(categoryId, productId, itemId) {
    const set = getCheckedItems(categoryId, productId);
    const wasChecked = set.has(itemId);
    if (wasChecked) {
      set.delete(itemId);
    } else {
      set.add(itemId);
      playPopSound();
    }
    setCheckedItems(categoryId, productId, set);
    return !wasChecked;
  }

  function resetChecklist(categoryId, productId) {
    try {
      localStorage.removeItem(storageKey(categoryId, productId));
      updateGlobalActiveBadge();
    } catch (e) {}
  }

  function getProgress(categoryId, productId) {
    const { product } = getProduct(categoryId, productId);
    if (!product || !product.checklist) return { checked: 0, total: 0, percentage: 0 };
    const total = product.checklist.length;
    const checkedSet = getCheckedItems(categoryId, productId);
    const checked = checkedSet.size;
    const percentage = total > 0 ? Math.round((checked / total) * 100) : 0;
    return { checked, total, percentage };
  }

  function getActiveChecklists() {
    const active = [];
    getCategories().forEach(cat => {
      (cat.products || []).forEach(prod => {
        const { checked, total, percentage } = getProgress(cat.id, prod.id);
        if (checked > 0) {
          active.push({
            categoryId: cat.id,
            categoryName: cat.name,
            categoryColor: cat.color,
            productId: prod.id,
            productName: prod.name,
            productIcon: prod.icon || prod.id,
            productImage: prod.image,
            checked,
            total,
            percentage
          });
        }
      });
    });
    return active;
  }

  function updateGlobalActiveBadge() {
    const active = getActiveChecklists();
    const count = active.length;
    const pill = document.getElementById('active-checks-count');
    const badge = document.getElementById('nav-active-badge');
    const indicator = document.getElementById('app-active-indicator');

    if (pill) {
      pill.textContent = count === 1 ? '1 Active Check' : `${count} Active Checks`;
    }
    if (badge) {
      if (count > 0) {
        badge.textContent = count;
        badge.hidden = false;
      } else {
        badge.hidden = true;
      }
    }
    if (indicator) {
      indicator.style.display = count > 0 ? 'inline-flex' : 'none';
    }
  }

  /* ==========================================================================
     05. BILL PROTECTION CLAUSE GENERATOR
     ========================================================================== */
  function generateBillClauses(categoryId, productId) {
    const { category, product } = getProduct(categoryId, productId);
    if (!product) return '';

    const checklist = product.checklist || [];
    const highPriority = checklist.filter(i => (i.priority || '').toLowerCase() === 'high');
    const selectedPoints = highPriority.length > 0 ? highPriority : checklist.slice(0, 6);

    let clauses = `🛡️ TICKTICKDONE BUYER PROTECTION CLAUSES\nProduct: ${product.name} (${category ? category.name : ''})\n`;
    clauses += `Date: ${new Date().toLocaleDateString('en-IN')}\n\n`;
    clauses += `IMPORTANT: Require the salesperson to record and sign these exact technical specifications on the estimate/bill before making any payment:\n\n`;

    selectedPoints.forEach((item, idx) => {
      clauses += `${idx + 1}. ${item.title}:\n`;
      clauses += `   • Specification: ${item.description}\n`;
      if (item.proTip) {
        clauses += `   • Contractual Guarantee: ${item.proTip}\n`;
      }
      clauses += `\n`;
    });

    clauses += `DISCLAIMER: Verbal assurances have no legal validity in consumer disputes. Ensure this is stamped on the official tax invoice.`;
    return clauses;
  }

  function openBillShieldModal(categoryId, productId) {
    const { product } = getProduct(categoryId, productId);
    if (!product) return;

    const modal = document.getElementById('bill-shield-modal');
    const title = document.getElementById('bill-modal-title');
    const body = document.getElementById('bill-modal-body');
    const btnWhatsapp = document.getElementById('btn-whatsapp-bill-clauses');

    const clausesText = generateBillClauses(categoryId, productId);

    if (title) title.textContent = `Bill Protection: ${product.name}`;
    if (body) {
      body.innerHTML = `
        <div class="bill-clauses-preview">
          <div class="bill-clauses-banner">
            <span>⚠️ Don't accept verbal promises. Show or send these clauses to the store salesperson:</span>
          </div>
          <pre class="bill-clauses-code">${escapeHtml(clausesText)}</pre>
        </div>
      `;
    }

    if (btnWhatsapp) {
      const whatsappText = encodeURIComponent(clausesText);
      btnWhatsapp.href = `https://api.whatsapp.com/send?text=${whatsappText}`;
    }

    window._currentBillClauses = clausesText;

    if (modal) {
      modal.hidden = false;
      modal.classList.add('show');
    }
  }

  function closeBillShieldModal() {
    const modal = document.getElementById('bill-shield-modal');
    if (modal) {
      modal.classList.remove('show');
      modal.hidden = true;
    }
  }

  /* ==========================================================================
     06. HTML ESCAPE & UTILITIES
     ========================================================================== */
  function escapeHtml(str) {
    if (typeof str !== 'string') return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function showToast(message, duration = 3000) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => {
      toast.classList.remove('show');
    }, duration);
  }

  function launchConfetti() {
    const container = document.getElementById('confetti-container');
    if (!container) return;
    container.innerHTML = '';
    const colors = ['#10b981', '#3b82f6', '#f97316', '#8b5cf6', '#eab308', '#ec4899'];
    for (let i = 0; i < 48; i++) {
      const el = document.createElement('div');
      el.className = 'confetti-piece';
      el.style.left = `${Math.random() * 100}%`;
      el.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      el.style.animationDelay = `${Math.random() * 0.4}s`;
      el.style.animationDuration = `${1.2 + Math.random() * 1.2}s`;
      container.appendChild(el);
    }
    setTimeout(() => {
      container.innerHTML = '';
    }, 3000);
  }

  function setView(html) {
    const main = document.getElementById('main-content');
    if (!main) return;
    main.innerHTML = html;
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }

  /* ==========================================================================
     07. VIEW RENDERERS
     ========================================================================== */

  /**
   * Home View: Interactive Category Carousel + Product Grid with Images
   */
  let currentHomeCategoryFilter = 'all';

  function renderHome() {
    setActiveNav('home');
    const categories = getCategories();
    const allProducts = getAllProducts();

    // Horizontal filter pills
    const filterPillsHtml = `
      <div class="category-pills-scroll" role="tablist" aria-label="Filter categories">
        <button type="button" class="category-pill ${currentHomeCategoryFilter === 'all' ? 'active' : ''}" data-filter="all">
          <span>✨ All Checks (${allProducts.length})</span>
        </button>
        ${categories.map(c => `
          <button type="button" class="category-pill ${currentHomeCategoryFilter === c.id ? 'active' : ''}" data-filter="${c.id}" style="--cat-color: ${c.color}">
            <span class="pill-icon">${getIcon(c.icon || c.id)}</span>
            <span>${escapeHtml(c.name)} (${(c.products || []).length})</span>
          </button>
        `).join('')}
      </div>
    `;

    // Filter products
    const filteredProducts = currentHomeCategoryFilter === 'all'
      ? allProducts
      : allProducts.filter(p => p.categoryId === currentHomeCategoryFilter);

    const productCardsHtml = filteredProducts.map(prod => {
      const { checked, total, percentage } = getProgress(prod.categoryId, prod.id);
      const isStarted = checked > 0;
      const isComplete = total > 0 && checked === total;

      const progressHtml = isStarted ? `
        <div class="card-progress-wrap">
          <div class="card-progress-info">
            <span class="card-progress-text">${checked}/${total} Verified</span>
            <span class="card-progress-pct">${percentage}%</span>
          </div>
          <div class="card-progress-track">
            <div class="card-progress-fill" style="width: ${percentage}%; background-color: ${isComplete ? '#10b981' : prod.categoryColor};"></div>
          </div>
        </div>
      ` : `
        <div class="card-meta-row">
          <span class="card-checks-count">${(prod.checklist || []).length} Inspection Points</span>
          <span class="card-action-hint">Inspect &rarr;</span>
        </div>
      `;

      return `
        <article class="interactive-product-card" data-category-id="${prod.categoryId}" data-product-id="${prod.id}" tabindex="0" role="button">
          <div class="card-image-hero">
            <img src="${prod.image}" alt="${escapeHtml(prod.name)}" class="card-img" loading="lazy" onerror="this.style.opacity='0'">
            <div class="card-img-scrim" style="background: linear-gradient(180deg, rgba(15,23,42,0.1) 0%, rgba(15,23,42,0.85) 100%);"></div>
            <span class="card-category-badge" style="background-color: ${prod.categoryColor};">
              ${getIcon(prod.icon || prod.id)} ${escapeHtml(prod.categoryName)}
            </span>
            ${isComplete ? `<span class="card-status-badge complete">🛡️ Verified Ready</span>` : ''}
            ${isStarted && !isComplete ? `<span class="card-status-badge in-progress">⚡ In Progress</span>` : ''}
          </div>
          <div class="card-body">
            <h3 class="card-title">${escapeHtml(prod.name)}</h3>
            <p class="card-description">${escapeHtml(prod.description || '')}</p>
            ${progressHtml}
          </div>
        </article>
      `;
    }).join('');

    const html = `
      <section class="app-hero-banner">
        <div class="hero-content">
          <div class="hero-top-tag">
            <span class="hero-tag-icon">🛡️</span>
            <span>Pre-Purchase Quality Scrutiny</span>
          </div>
          <h1 class="hero-heading">Don't buy without <span class="highlight-text">verifying twice.</span></h1>
          <p class="hero-subtext">Salespersons make bold verbal claims. TickTickDone gives you the exact technical checklist and written invoice clauses before you pay.</p>
          
          <div class="hero-stats-row">
            <div class="stat-pill">
              <span class="stat-num">21</span>
              <span class="stat-label">Product Checklists</span>
            </div>
            <div class="stat-pill">
              <span class="stat-num">230+</span>
              <span class="stat-label">Quality Points</span>
            </div>
            <div class="stat-pill">
              <span class="stat-num">100%</span>
              <span class="stat-label">Scam Protection</span>
            </div>
          </div>
        </div>
      </section>

      <section class="app-body-container">
        <!-- Interactive Category Switcher -->
        <div class="category-filter-header">
          <h2 class="section-title">Select What You're Buying</h2>
          <span class="section-count">${filteredProducts.length} Guides Available</span>
        </div>
        
        ${filterPillsHtml}

        <!-- Interactive Product Card Grid -->
        <div class="interactive-grid" id="home-product-grid">
          ${productCardsHtml}
        </div>

        <!-- Quick Help Card -->
        <div class="app-promo-card">
          <div class="promo-icon">🛡️</div>
          <div class="promo-text">
            <h4>Never Accept Verbal Promises in India</h4>
            <p>Showroom salespeople often promise 10-year warranties or genuine Italian leather. Use our <strong>Bill Shield</strong> to copy contractual clauses directly into your final invoice.</p>
          </div>
          <a href="#/bill-shield" class="btn btn-primary btn-sm">Open Bill Shield</a>
        </div>
      </section>
    `;

    setView(html);
  }

  /**
   * Categories Gallery View
   */
  function renderCategories() {
    setActiveNav('categories');
    const categories = getCategories();

    const categoriesHtml = categories.map(cat => {
      const products = cat.products || [];
      return `
        <article class="category-hero-card" data-category-id="${cat.id}" tabindex="0" role="button">
          <div class="cat-card-img-wrap">
            <img src="${cat.image}" alt="${escapeHtml(cat.name)}" class="cat-card-img" loading="lazy">
            <div class="cat-img-overlay" style="background: linear-gradient(135deg, ${cat.color}CC 0%, rgba(15,23,42,0.85) 100%);"></div>
          </div>
          <div class="cat-card-content">
            <div class="cat-icon-large">${getIcon(cat.icon || cat.id)}</div>
            <div class="cat-info">
              <h3 class="cat-name">${escapeHtml(cat.name)}</h3>
              <p class="cat-desc">${escapeHtml(cat.description || '')}</p>
              <div class="cat-footer-row">
                <span class="cat-badge-pill">${products.length} Product Checklists</span>
                <span class="cat-explore-link">Explore Category &rarr;</span>
              </div>
            </div>
          </div>
        </article>
      `;
    }).join('');

    const html = `
      <section class="app-body-container" style="padding-top: 1.5rem;">
        <div class="view-header-bar">
          <div>
            <h1 class="view-title">All Categories</h1>
            <p class="view-subtitle">Select an industry to explore quality verification checklists</p>
          </div>
        </div>

        <div class="categories-vibrant-list">
          ${categoriesHtml}
        </div>
      </section>
    `;

    setView(html);
  }

  /**
   * Category View (Shows products within a category)
   */
  function renderCategory(categoryId) {
    const category = getCategory(categoryId);
    if (!category) {
      renderHome();
      return;
    }
    setActiveNav('categories');

    const products = category.products || [];
    const productsHtml = products.map(prod => {
      const { checked, total, percentage } = getProgress(category.id, prod.id);
      return `
        <article class="interactive-product-card" data-category-id="${category.id}" data-product-id="${prod.id}" tabindex="0" role="button">
          <div class="card-image-hero">
            <img src="${prod.image}" alt="${escapeHtml(prod.name)}" class="card-img" loading="lazy">
            <div class="card-img-scrim"></div>
            <span class="card-category-badge" style="background-color: ${category.color};">
              ${escapeHtml(category.name)}
            </span>
          </div>
          <div class="card-body">
            <h3 class="card-title">${escapeHtml(prod.name)}</h3>
            <p class="card-description">${escapeHtml(prod.description || '')}</p>
            <div class="card-meta-row">
              <span class="card-checks-count">${(prod.checklist || []).length} Inspection Points</span>
              <span class="card-action-hint">Start Check &rarr;</span>
            </div>
          </div>
        </article>
      `;
    }).join('');

    const html = `
      <section class="app-body-container" style="padding-top: 1.25rem;">
        <div class="category-detail-header" style="--header-accent: ${category.color}">
          <a href="#/categories" class="back-link">&larr; Back to Categories</a>
          <div class="cat-detail-hero">
            <div class="cat-hero-text">
              <span class="cat-tag-pill">${getIcon(category.icon || category.id)} Quality Category</span>
              <h1>${escapeHtml(category.name)}</h1>
              <p>${escapeHtml(category.description || '')}</p>
            </div>
          </div>
        </div>

        <div class="interactive-grid">
          ${productsHtml}
        </div>
      </section>
    `;

    setView(html);
  }

  /**
   * Interactive Checklist View (Inspection tool with priority filters & bill clauses)
   */
  let currentChecklistFilter = 'all';

  function renderChecklist(categoryId, productId) {
    const { category, product } = getProduct(categoryId, productId);
    if (!category || !product) {
      renderHome();
      return;
    }

    const checklist = product.checklist || [];
    const checkedSet = getCheckedItems(categoryId, productId);
    const { checked, total, percentage } = getProgress(categoryId, productId);

    const isComplete = total > 0 && checked === total;

    // Filter items
    let filteredItems = checklist;
    if (currentChecklistFilter === 'high') {
      filteredItems = checklist.filter(i => (i.priority || '').toLowerCase() === 'high');
    } else if (currentChecklistFilter === 'pending') {
      filteredItems = checklist.filter(i => !checkedSet.has(i.id));
    } else if (currentChecklistFilter === 'checked') {
      filteredItems = checklist.filter(i => checkedSet.has(i.id));
    }

    const itemsHtml = filteredItems.map((item, idx) => {
      const isChecked = checkedSet.has(item.id);
      const priority = (item.priority || 'medium').toLowerCase();
      const priorityClass = `badge-${priority}`;

      return `
        <div class="checklist-row ${isChecked ? 'is-checked' : ''}" data-category-id="${categoryId}" data-product-id="${productId}" data-item-id="${item.id}">
          <button type="button" class="checklist-check-btn ${isChecked ? 'checked' : ''}" aria-label="Toggle ${escapeHtml(item.title)}">
            <span class="check-box-icon">${isChecked ? getIcon('check') : ''}</span>
          </button>
          
          <div class="checklist-row-content">
            <div class="checklist-row-header">
              <h4 class="checklist-item-title">${escapeHtml(item.title)}</h4>
              <span class="priority-pill ${priorityClass}">${priority.toUpperCase()}</span>
            </div>
            
            <p class="checklist-item-desc">${escapeHtml(item.description || '')}</p>

            ${item.proTip ? `
              <div class="checklist-protip-box">
                <span class="protip-badge">${getIcon('lightbulb')} Pro-Tip & Secret Specs:</span>
                <p class="protip-text">${escapeHtml(item.proTip)}</p>
              </div>
            ` : ''}
          </div>
        </div>
      `;
    }).join('');

    const html = `
      <section class="checklist-app-view">
        <!-- Sticky Sub-Bar -->
        <div class="checklist-subbar">
          <a href="#/" class="subbar-back-btn">&larr; Back</a>
          <span class="subbar-title">${escapeHtml(product.name)}</span>
          <button type="button" class="btn btn-secondary btn-sm" id="btn-open-bill-shield">
            ${getIcon('shield')} Bill Clauses
          </button>
        </div>

        <div class="checklist-canvas">
          <!-- Product Hero Card -->
          <div class="checklist-product-hero">
            <div class="checklist-hero-img-wrap">
              <img src="${product.image}" alt="${escapeHtml(product.name)}" class="checklist-hero-img">
              <div class="checklist-hero-scrim"></div>
              <span class="checklist-cat-pill" style="background-color: ${category.color}">${escapeHtml(category.name)}</span>
            </div>
            <div class="checklist-hero-details">
              <h1>${escapeHtml(product.name)} Inspection</h1>
              <p>${escapeHtml(product.description || '')}</p>
            </div>
          </div>

          <!-- Sticky Interactive Progress Box -->
          <div class="interactive-progress-card">
            <div class="progress-info-row">
              <div class="progress-metric">
                <span class="progress-big-number">${checked}</span>
                <span class="progress-total-label">of ${total} verified</span>
              </div>
              <div class="progress-status-pill ${isComplete ? 'certified' : 'in-progress'}">
                ${isComplete ? '🛡️ Certified Ready to Buy!' : `${percentage}% Completed`}
              </div>
            </div>
            <div class="progress-bar-container">
              <div class="progress-bar-fill" id="checklist-progress-fill" style="width: ${percentage}%;"></div>
            </div>
          </div>

          <!-- Interactive Filter Tabs -->
          <div class="checklist-filter-bar">
            <button type="button" class="check-filter-pill ${currentChecklistFilter === 'all' ? 'active' : ''}" data-filter="all">
              All (${checklist.length})
            </button>
            <button type="button" class="check-filter-pill ${currentChecklistFilter === 'high' ? 'active' : ''}" data-filter="high">
              🔥 Critical (${checklist.filter(i => (i.priority || '').toLowerCase() === 'high').length})
            </button>
            <button type="button" class="check-filter-pill ${currentChecklistFilter === 'pending' ? 'active' : ''}" data-filter="pending">
              ⏳ Pending (${checklist.length - checked})
            </button>
            <button type="button" class="check-filter-pill ${currentChecklistFilter === 'checked' ? 'active' : ''}" data-filter="checked">
              ✅ Verified (${checked})
            </button>
          </div>

          <!-- Items List -->
          <div class="checklist-items-stack" id="checklist-items-stack">
            ${itemsHtml || `
              <div class="empty-state-card">
                <p>No items matching this filter.</p>
              </div>
            `}
          </div>

          <!-- Actions Bar -->
          <div class="checklist-actions-dock">
            <button type="button" class="btn btn-primary" id="btn-bill-clauses-action">
              ${getIcon('shield')} Get Invoice Clauses
            </button>
            <button type="button" class="btn btn-secondary" id="btn-share-checklist">
              ${getIcon('share')} Share
            </button>
            <button type="button" class="btn btn-ghost" id="btn-reset-checklist">
              ${getIcon('reset')} Reset
            </button>
          </div>
        </div>
      </section>
    `;

    setView(html);
  }

  /**
   * "My Checks" View (Active / In-Progress checklists)
   */
  function renderActiveChecks() {
    setActiveNav('active');
    const active = getActiveChecklists();

    const activeListHtml = active.map(item => `
      <article class="active-check-card" data-category-id="${item.categoryId}" data-product-id="${item.productId}">
        <img src="${item.productImage}" alt="${escapeHtml(item.productName)}" class="active-card-thumb">
        <div class="active-card-info">
          <span class="active-cat-tag" style="color: ${item.categoryColor}">${escapeHtml(item.categoryName)}</span>
          <h3 class="active-card-title">${escapeHtml(item.productName)}</h3>
          <div class="active-progress-row">
            <div class="active-track">
              <div class="active-fill" style="width: ${item.percentage}%; background-color: ${item.categoryColor};"></div>
            </div>
            <span class="active-pct">${item.checked}/${item.total} (${item.percentage}%)</span>
          </div>
        </div>
        <button type="button" class="btn btn-primary btn-sm active-resume-btn">Continue &rarr;</button>
      </article>
    `).join('');

    const html = `
      <section class="app-body-container" style="padding-top: 1.5rem;">
        <div class="view-header-bar">
          <div>
            <h1 class="view-title">My In-Progress Checks</h1>
            <p class="view-subtitle">Products you're actively evaluating before making a purchase</p>
          </div>
        </div>

        ${active.length > 0 ? `
          <div class="active-cards-stack">
            ${activeListHtml}
          </div>
        ` : `
          <div class="empty-active-card">
            <span class="empty-icon">📝</span>
            <h3>No checks started yet</h3>
            <p>Select any item from Furniture, Cars, Electronics or Jewelry to start evaluating quality points in the showroom!</p>
            <a href="#/" class="btn btn-primary" style="margin-top: 1rem;">Explore Checklists</a>
          </div>
        `}
      </section>
    `;

    setView(html);
  }

  /**
   * "Bill Shield" View (Salesperson protection guide & Invoice Clauses)
   */
  function renderBillShield() {
    setActiveNav('shield');

    const products = getAllProducts();
    const productOptionsHtml = products.map(p => `
      <option value="${p.categoryId}/${p.id}">${escapeHtml(p.name)} (${escapeHtml(p.categoryName)})</option>
    `).join('');

    const html = `
      <section class="app-body-container" style="padding-top: 1.5rem;">
        <div class="bill-shield-hero">
          <span class="shield-badge-large">🛡️ Bill Shield</span>
          <h1 class="view-title">How to Never Get Cheated in India</h1>
          <p class="view-subtitle">Why 80% of buyers regret purchases: they trust verbal salesperson claims without checking the paperwork.</p>
        </div>

        <div class="rules-grid">
          <div class="rule-card">
            <div class="rule-num">1</div>
            <h4>Verbal Promises Have Zero Legal Value</h4>
            <p>If a salesperson says "It's 100% teak wood" or "Foam won't sag for 10 years", ask them: <em>"Please write that specification right here on this estimate."</em> Watch how fast their tone changes.</p>
          </div>

          <div class="rule-card">
            <div class="rule-num">2</div>
            <h4>Store Warranty vs Brand Warranty</h4>
            <p>Stores often sell grey-market appliances or imported TVs with "store warranty". Always insist on the official manufacturer warranty card and verify the serial number on the tax invoice.</p>
          </div>

          <div class="rule-card">
            <div class="rule-num">3</div>
            <h4>New Car PDI Before RTO Registration</h4>
            <p>Never let the dealer register the vehicle with the RTO or disburse your bank loan until you personally conduct a Pre-Delivery Inspection (PDI) in daylight with our 15-point checklist.</p>
          </div>

          <div class="rule-card">
            <div class="rule-num">4</div>
            <h4>Gold BIS Hallmark Verification</h4>
            <p>Every genuine gold jewel in India must carry a 6-digit alphanumeric HUID code. Enter that code into the official government <strong>BIS Care App</strong> right in front of the jeweler.</p>
          </div>
        </div>

        <!-- Quick Generator Tool -->
        <div class="bill-generator-tool">
          <h3>⚡ Instant Invoice Clause Generator</h3>
          <p>Pick what you are buying right now to generate the exact clauses to send to the seller:</p>
          
          <div class="generator-controls">
            <select id="bill-product-select" class="app-select">
              ${productOptionsHtml}
            </select>
            <button type="button" class="btn btn-primary" id="btn-generate-selected-bill">
              Generate Clauses
            </button>
          </div>
        </div>
      </section>
    `;

    setView(html);
  }

  function setActiveNav(tab) {
    document.querySelectorAll('.bottom-nav-bar .nav-tab').forEach(el => {
      el.classList.toggle('active', el.dataset.tab === tab);
    });
  }

  /* ==========================================================================
     08. SEARCH FUNCTIONALITY
     ========================================================================== */
  function setupSearch() {
    const input = document.getElementById('search-input');
    const results = document.getElementById('search-results');
    if (!input || !results) return;

    let timeout;
    input.addEventListener('input', () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        const query = (input.value || '').trim().toLowerCase();
        if (!query) {
          results.hidden = true;
          results.innerHTML = '';
          return;
        }

        const allProducts = getAllProducts();
        const matches = allProducts.filter(p => {
          return p.name.toLowerCase().includes(query) ||
            p.categoryName.toLowerCase().includes(query) ||
            (p.checklist || []).some(item => item.title.toLowerCase().includes(query) || item.description.toLowerCase().includes(query));
        }).slice(0, 8);

        if (matches.length === 0) {
          results.innerHTML = `
            <div class="search-empty-item">
              <span>No checklists found for "${escapeHtml(query)}"</span>
            </div>
          `;
        } else {
          results.innerHTML = matches.map(p => `
            <div class="search-result-row" data-category-id="${p.categoryId}" data-product-id="${p.id}">
              <span class="search-result-icon" style="color: ${p.categoryColor}">${getIcon(p.icon || p.id)}</span>
              <div class="search-result-text">
                <span class="search-result-title">${escapeHtml(p.name)}</span>
                <span class="search-result-cat">${escapeHtml(p.categoryName)} &bull; ${(p.checklist || []).length} checks</span>
              </div>
            </div>
          `).join('');
        }
        results.hidden = false;
      }, 150);
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.search-container')) {
        results.hidden = true;
      }
    });

    // Hotkey '/' to focus search
    window.addEventListener('keydown', (e) => {
      if (e.key === '/' && document.activeElement !== input) {
        e.preventDefault();
        input.focus();
      } else if (e.key === 'Escape') {
        results.hidden = true;
        input.blur();
      }
    });
  }

  /* ==========================================================================
     09. EVENT DELEGATION
     ========================================================================== */
  function setupEventDelegation() {
    const main = document.getElementById('main-content');
    if (!main) return;

    main.addEventListener('click', (e) => {
      // 1. Category Pill Filter on Home View
      const pill = e.target.closest('.category-pill');
      if (pill) {
        const filter = pill.dataset.filter;
        currentHomeCategoryFilter = filter;
        renderHome();
        return;
      }

      // 2. Interactive Product Card Click
      const card = e.target.closest('.interactive-product-card');
      if (card) {
        const catId = card.dataset.categoryId;
        const prodId = card.dataset.productId;
        if (catId && prodId) {
          currentChecklistFilter = 'all';
          window.location.hash = `#/category/${catId}/${prodId}`;
        }
        return;
      }

      // 3. Category Hero Card in /categories
      const catCard = e.target.closest('.category-hero-card');
      if (catCard) {
        const catId = catCard.dataset.categoryId;
        if (catId) {
          window.location.hash = `#/category/${catId}`;
        }
        return;
      }

      // 4. Checklist Item Toggle
      const checkBtn = e.target.closest('.checklist-check-btn') || e.target.closest('.checklist-row');
      if (checkBtn) {
        const row = checkBtn.closest('.checklist-row');
        if (row) {
          const catId = row.dataset.categoryId;
          const prodId = row.dataset.productId;
          const itemId = row.dataset.itemId;
          if (catId && prodId && itemId) {
            const isChecked = toggleItem(catId, prodId, itemId);
            row.classList.toggle('is-checked', isChecked);
            const iconEl = row.querySelector('.check-box-icon');
            const btnEl = row.querySelector('.checklist-check-btn');
            if (iconEl) iconEl.innerHTML = isChecked ? getIcon('check') : '';
            if (btnEl) btnEl.classList.toggle('checked', isChecked);

            // Update live progress bar
            const { checked, total, percentage } = getProgress(catId, prodId);
            const fill = document.getElementById('checklist-progress-fill');
            if (fill) fill.style.width = `${percentage}%`;

            if (total > 0 && checked === total) {
              launchConfetti();
              showToast('🎉 All checkpoints verified! Ready to buy with confidence!');
            }
          }
        }
        return;
      }

      // 5. Checklist Filter Tabs
      const checkFilter = e.target.closest('.check-filter-pill');
      if (checkFilter) {
        currentChecklistFilter = checkFilter.dataset.filter;
        const hash = window.location.hash.replace(/^#\/?/, '').split('/');
        if (hash[1] && hash[2]) {
          renderChecklist(hash[1], hash[2]);
        }
        return;
      }

      // 6. Bill Shield Modal Triggers
      if (e.target.closest('#btn-open-bill-shield') || e.target.closest('#btn-bill-clauses-action')) {
        const hash = window.location.hash.replace(/^#\/?/, '').split('/');
        if (hash[1] && hash[2]) {
          openBillShieldModal(hash[1], hash[2]);
        }
        return;
      }

      // 7. Reset Checklist
      if (e.target.closest('#btn-reset-checklist')) {
        const hash = window.location.hash.replace(/^#\/?/, '').split('/');
        if (hash[1] && hash[2]) {
          if (confirm('Reset all verified checkpoints for this product?')) {
            resetChecklist(hash[1], hash[2]);
            renderChecklist(hash[1], hash[2]);
            showToast('Checklist reset.');
          }
        }
        return;
      }

      // 8. Share Checklist
      if (e.target.closest('#btn-share-checklist')) {
        const hash = window.location.hash.replace(/^#\/?/, '').split('/');
        if (hash[1] && hash[2]) {
          const { product } = getProduct(hash[1], hash[2]);
          const { checked, total, percentage } = getProgress(hash[1], hash[2]);
          const text = `✅ TickTickDone Inspection for ${product ? product.name : 'Product'}: ${checked}/${total} verified (${percentage}% ready). Check quality before buying at https://ticktickdone.zerfinity.com/`;
          if (navigator.share) {
            navigator.share({ title: 'TickTickDone Inspection', text }).catch(() => {});
          } else {
            navigator.clipboard.writeText(text).then(() => showToast('Checklist link copied!')).catch(() => {});
          }
        }
        return;
      }

      // 9. Active Check Item Resume
      const activeCard = e.target.closest('.active-check-card');
      if (activeCard) {
        const catId = activeCard.dataset.categoryId;
        const prodId = activeCard.dataset.productId;
        if (catId && prodId) {
          window.location.hash = `#/category/${catId}/${prodId}`;
        }
        return;
      }

      // 10. Bill Generator Tool in /bill-shield
      if (e.target.closest('#btn-generate-selected-bill')) {
        const sel = document.getElementById('bill-product-select');
        if (sel && sel.value) {
          const [cId, pId] = sel.value.split('/');
          openBillShieldModal(cId, pId);
        }
        return;
      }
    });

    // Modal Copy Button
    document.addEventListener('click', (e) => {
      if (e.target.closest('#btn-copy-bill-clauses')) {
        if (window._currentBillClauses) {
          navigator.clipboard.writeText(window._currentBillClauses).then(() => {
            showToast('📋 Bill clauses copied to clipboard!');
          }).catch(() => {});
        }
      }
      if (e.target.closest('#btn-close-bill-modal') || e.target.closest('#bill-modal-backdrop')) {
        closeBillShieldModal();
      }

      // Search Result Click
      const sRow = e.target.closest('.search-result-row');
      if (sRow) {
        const cId = sRow.dataset.categoryId;
        const pId = sRow.dataset.productId;
        const results = document.getElementById('search-results');
        if (results) results.hidden = true;
        const inp = document.getElementById('search-input');
        if (inp) inp.value = '';
        if (cId && pId) {
          window.location.hash = `#/category/${cId}/${pId}`;
        }
      }
    });
  }

  /* ==========================================================================
     10. ROUTER
     ========================================================================== */
  function handleRoute() {
    const hash = window.location.hash || '#/';
    const clean = hash.replace(/^#\/?/, '');
    const parts = clean.split('/').filter(Boolean);

    if (parts.length === 0) {
      renderHome();
    } else if (parts[0] === 'categories') {
      renderCategories();
    } else if (parts[0] === 'active') {
      renderActiveChecks();
    } else if (parts[0] === 'bill-shield') {
      renderBillShield();
    } else if (parts[0] === 'category') {
      const catId = parts[1];
      const prodId = parts[2];
      if (prodId) {
        renderChecklist(catId, prodId);
      } else if (catId) {
        renderCategory(catId);
      } else {
        renderHome();
      }
    } else {
      renderHome();
    }
  }

  /* ==========================================================================
     11. INIT
     ========================================================================== */
  function init() {
    setupSearch();
    setupEventDelegation();
    updateGlobalActiveBadge();

    window.addEventListener('hashchange', handleRoute);
    handleRoute();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
