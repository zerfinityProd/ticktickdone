/**
 * Tick Tick Done — Smart Purchase Checklists
 * Main Application Logic
 */

(function () {
  'use strict';

  /* ==========================================================================
     SVG Icon Library (Lucide/Feather-style 24x24 line icons)
     ========================================================================== */
  const ICONS = {
    // Category icons
    'furniture': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"/><path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H7v-2a2 2 0 0 0-4 0Z"/><path d="M5 18v2"/><path d="M19 18v2"/></svg>',
    'electronics': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="12" x="3" y="4" rx="2"/><line x1="2" x2="22" y1="20" y2="20"/><line x1="12" x2="12" y1="16" y2="20"/></svg>',
    'automobiles': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>',
    'home-interior': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="m3 10.5 9-7.5 9 7.5V20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/><path d="M9 22V12h6v10"/><path d="M19 8V5h-2v1.5"/></svg>',
    'jewelry': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12l4 6-10 12L2 9Z"/><path d="M11 3 8 9l4 12 4-12-3-6"/><path d="M2 9h20"/></svg>',
    'fashion': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/></svg>',

    // Product icons
    'sofa': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M20 9V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v2"/><path d="M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M4 18v3"/><path d="M20 18v3"/><path d="M12 5v6"/></svg>',
    'dining-table': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="3" rx="1"/><line x1="5" y1="10" x2="4" y2="20"/><line x1="19" y1="10" x2="20" y2="20"/><line x1="5" y1="13" x2="19" y2="13"/></svg>',
    'bed-mattress': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M2 4v16"/><path d="M2 12h18a2 2 0 0 1 2 2v6"/><path d="M2 18h20"/><path d="M6 12V9a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3"/></svg>',
    'wardrobe': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="20" x="3" y="2" rx="2"/><line x1="12" x2="12" y1="2" y2="22"/><line x1="9" x2="9.01" y1="12" y2="12"/><line x1="15" x2="15.01" y1="12" y2="12"/><line x1="6" x2="6" y1="22" x2="6" y2="23"/><line x1="18" x2="18" y1="22" x2="18" y2="23"/></svg>',
    'office-chair': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3h10a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"/><path d="M5 14h14a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1Z"/><line x1="12" y1="17" x2="12" y2="20"/><path d="m6 22 6-2 6 2"/><circle cx="5" cy="22" r="1"/><circle cx="19" cy="22" r="1"/></svg>',
    'smartphone': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2"/><line x1="11" x2="13" y1="18" y2="18"/></svg>',
    'laptop': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"/></svg>',
    'television': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="4" rx="2"/><line x1="7" x2="17" y1="21" y2="21"/><line x1="12" x2="12" y1="18" y2="21"/></svg>',
    'washing-machine': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2"/><circle cx="12" cy="13" r="5"/><circle cx="12" cy="13" r="2"/><line x1="7" y1="6" x2="9" y2="6"/><circle cx="16" cy="6" r="0.5" fill="currentColor"/></svg>',
    'refrigerator': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2"/><line x1="5" x2="19" y1="9" y2="9"/><line x1="8" x2="8" y1="5" y2="7"/><line x1="8" x2="8" y1="12" y2="15"/></svg>',
    'new-car': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M4 17h-1v-4c0-.6.4-1 1-1l2.5-4.5A2 2 0 0 1 8.2 6.5h4.8"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/><path d="M19 17h2c.6 0 1-.4 1-1v-2"/><path d="m19 2 .8 1.8 1.8.8-1.8.8-.8 1.8-.8-1.8-1.8-.8 1.8-.8Z"/></svg>',
    'used-car': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/><path d="M19 17h2c.6 0 1-.4 1-1v-3l-1.5-3.5"/><path d="M2 13v3c0 .6.4 1 1 1"/><path d="M4.5 12.5 7 8a1.5 1.5 0 0 1 1.3-.8h5.2"/><path d="m15 5 2.5 2.5L22 3"/></svg>',
    'two-wheeler': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="5" cy="17" r="3"/><circle cx="19" cy="17" r="3"/><path d="M5 17h4l4-8h4"/><path d="m15 9 3 4"/><path d="M17 6h2"/><path d="M9 17l3-8"/></svg>',
    'paint': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="6" x="2" y="2" rx="2"/><path d="M10 8v2a2 2 0 0 0 2 2h3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1"/><rect width="4" height="6" x="12" y="16" rx="1"/></svg>',
    'tiles-flooring': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>',
    'modular-kitchen': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="8" width="20" height="13" rx="2"/><line x1="2" y1="8" x2="22" y2="8"/><line x1="12" y1="8" x2="12" y2="21"/><circle cx="7" cy="13" r="1"/><circle cx="17" cy="13" r="1"/><path d="M6 4h4v4H6z"/><circle cx="16" cy="5" r="2"/></svg>',
    'curtains-blinds': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="2" y1="3" x2="22" y2="3"/><path d="M3 3c3 4 3 10 0 18"/><path d="M21 3c-3 4-3 10 0 18"/><line x1="12" y1="3" x2="12" y2="21"/></svg>',
    'gold-jewelry': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="14" r="7"/><path d="m10 7 2-3 2 3-2 2-2-2Z"/></svg>',
    'diamond-jewelry': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12l4 6-10 12L2 9Z"/><path d="M11 3 8 9l4 12 4-12-3-6"/><path d="M2 9h20"/></svg>',
    'formal-suit': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h4l4 5 4-5h4v16a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4Z"/><path d="m8 4 4 10 4-10"/><path d="m11 9 1 2 1-2-1-1z"/><line x1="12" y1="14" x2="12" y2="21"/></svg>',
    'leather-shoes': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M2 17h19a1 1 0 0 0 1-1c0-2-2-4.5-5-5-2-.3-3.5-2-5-3.5L10 6H7v5L4 13c-1.3.8-2 2-2 4Z"/><path d="M2 17v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2"/><path d="M16 17v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2"/></svg>',

    // UI icons
    'search': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/></svg>',
    'arrow-right': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><line x1="5" x2="19" y1="12" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
    'check': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
    'chevron-down': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>',
    'star': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
    'share': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" x2="12" y1="2" y2="15"/></svg>',
    'download': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>',
    'reset': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>',
    'lightbulb': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>',
    'info': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="16" y2="12"/><line x1="12" x2="12.01" y1="8" y2="8"/></svg>',
    'celebration': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.45 1-1 1H8c-.55 0-1 .45-1 1v1h10v-1c0-.55-.45-1-1-1h-1c-.55 0-1-.45-1-1v-2.34"/><path d="M6 4h12a2 2 0 0 1 2 2v3a6 6 0 0 1-6 6h0a6 6 0 0 1-6-6V6a2 2 0 0 1 2-2Z"/></svg>',
    'clipboard': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M9 12h6"/><path d="M9 16h6"/></svg>'
  };

  // Aliases for compatibility with IDs and alternative names
  ICONS['wardrobe-closet'] = ICONS['wardrobe'];
  ICONS['vehicles'] = ICONS['automobiles'];
  ICONS['real-estate'] = ICONS['home-interior'];
  ICONS['used-laptop'] = ICONS['laptop'];
  ICONS['mattress'] = ICONS['bed-mattress'];
  ICONS['apartment-inspection'] = ICONS['home-interior'];

  function getIcon(key, fallbackKey = 'clipboard') {
    return ICONS[key] || ICONS[fallbackKey] || '';
  }

  /* ==========================================================================
     Fallback Data (Used only if data.js / window.APP_DATA is not yet defined)
     ========================================================================== */
  const DEFAULT_APP_DATA = {
    categories: [
      {
        id: 'furniture',
        name: 'Furniture & Home',
        icon: 'furniture',
        description: 'Ensure structural strength, foam durability, fabric grade, and long-term comfort before buying.',
        accentColor: '#4CAF50',
        products: [
          {
            id: 'sofa',
            name: 'Sofa / Couch',
            icon: 'sofa',
            description: 'Evaluate frame construction, foam density, suspension springs, and fabric durability.',
            generalTips: [
              'Sit in multiple positions: lounging, sitting upright, and on the edges.',
              'Lift one front corner 6 inches off the ground; the other corner should lift as well without twisting.',
              'Ask for the manufacturer foam density specification sheet in writing.'
            ],
            checklist: [
              {
                id: 'foam-density',
                title: 'Foam Density (32+ D)',
                description: 'Ensure the seat cushion uses at least 32-40 density polyurethane foam or latex layer so it won’t sag within 2 years.',
                priority: 'high',
                proTip: 'Press firmly with your fist into the center cushion. Quality high-density foam snaps back immediately without lingering indentation.'
              },
              {
                id: 'frame-material',
                title: 'Kiln-Dried Hardwood Frame',
                description: 'Verify the frame is made from kiln-dried solid hardwood (like teak, oak, or ash) rather than cheap particleboard or green pine.',
                priority: 'high',
                proTip: 'Ask the seller whether corners are reinforced with glued and screwed corner blocks, not just staples.'
              },
              {
                id: 'suspension-system',
                title: 'Suspension & Spring System',
                description: 'Check for 8-way hand-tied springs or heavy-gauge sinuous (S-shaped) springs.',
                priority: 'medium',
                proTip: 'Feel the bottom through the dust cover if possible. Springs should feel firm, quiet, and evenly spaced without squeaks.'
              },
              {
                id: 'fabric-martindale',
                title: 'Fabric Martindale Rub Count (15,000+)',
                description: 'For active homes, upholstery fabric should have a Martindale rating of 20,000+ rubs (or Wyzenbeek 15,000+ double rubs).',
                priority: 'medium',
                proTip: 'Look for tightly woven textiles or performance fabrics (crypton/polyolefin) if you have pets or children.'
              },
              {
                id: 'warranty-coverage',
                title: 'Frame & Foam Warranty Terms',
                description: 'Ensure at least a 3-year warranty on the frame and 1-2 years on cushions/foam replacement.',
                priority: 'high',
                proTip: 'Clarify if warranty covers transportation costs or on-site replacement for defects.'
              },
              {
                id: 'doorway-dimensions',
                title: 'Doorway & Hallway Clearances',
                description: 'Measure doorway width, elevator depth, and stair turns to make sure the sofa can physically enter your home.',
                priority: 'high',
                proTip: 'Diagonal depth is key: measure sofa from back of frame to front of arm, and compare with door frame opening.'
              },
              {
                id: 'removable-covers',
                title: 'Removable & Washable Covers',
                description: 'Check if cushion covers have sturdy zippers for cleaning or foam replacement down the line.',
                priority: 'low',
                proTip: 'Unzip one cover in the showroom to inspect the inner lining and stitch reinforcement.'
              }
            ]
          },
          {
            id: 'mattress',
            name: 'Mattress',
            icon: 'bed-mattress',
            description: 'Evaluate spine alignment, pocket coils, motion isolation, and trial return policies.',
            generalTips: [
              'Lie down on the mattress for at least 10 minutes in your actual sleep position.',
              'Never buy without an in-home trial period (at least 30-100 nights).'
            ],
            checklist: [
              {
                id: 'trial-period',
                title: '100-Night Risk-Free Trial',
                description: 'Verify full refund policy if mattress causes back stiffness during the adaptation period.',
                priority: 'high',
                proTip: 'Confirm if return shipping fees are deducted or if mattress pickup is fully free.'
              },
              {
                id: 'spine-support',
                title: 'Spinal Alignment & Firmness',
                description: 'Your spine should stay in a neutral straight line when sleeping on your side or back.',
                priority: 'high',
                proTip: 'Have a friend take a photo of your back posture while you lie on your side on the showroom bed.'
              },
              {
                id: 'pocket-coils',
                title: 'Independently Pocketed Coils',
                description: 'Pocket coils prevent motion transfer from your partner compared to interconnected Bonnell coils.',
                priority: 'medium',
                proTip: 'A queen mattress should have between 700 to 1,000 zoned pocket coils.'
              },
              {
                id: 'breathability',
                title: 'Breathability & Cooling Layer',
                description: 'Look for natural latex, open-cell foam, or cooling gel infusions if you tend to sleep hot.',
                priority: 'medium',
                proTip: 'Traditional dense memory foam traps body heat unless paired with phase-change materials.'
              },
              {
                id: 'edge-support',
                title: 'Reinforced Perimeter Edge Support',
                description: 'Heavy edge support prevents rolling off and allows comfortable sitting on the side of the bed.',
                priority: 'low',
                proTip: 'Sit on the very edge of the bed; quality models will not compress more than 2-3 inches.'
              }
            ]
          }
        ]
      },
      {
        id: 'vehicles',
        name: 'Used Vehicles',
        icon: 'automobiles',
        description: 'Comprehensive inspection checks for used cars, two-wheelers, and electric vehicles.',
        accentColor: '#1976D2',
        products: [
          {
            id: 'used-car',
            name: 'Used Car',
            icon: 'used-car',
            description: 'Inspect engine health, chassis damage, odometer fraud, and ownership documents.',
            generalTips: [
              'Always inspect the car in broad daylight, never when wet or at night.',
              'Spend $100-$150 on an independent pre-purchase inspection (PPI) by a trusted mechanic.'
            ],
            checklist: [
              {
                id: 'vin-history',
                title: 'VIN / Vehicle History Report',
                description: 'Run Carfax or official registry check for accident reports, flood salvage, and salvage titles.',
                priority: 'high',
                proTip: 'Check that the VIN stamped under the windshield matches the VIN under the hood and on registration papers.'
              },
              {
                id: 'fluid-inspection',
                title: 'Oil & Coolant Inspection (Under Hood)',
                description: 'Check oil cap for milky residue (indicates blown head gasket) and coolant for rust or oil sheen.',
                priority: 'high',
                proTip: 'Smell the transmission fluid: burnt brownish smell means impending transmission failure.'
              },
              {
                id: 'cold-start',
                title: 'True Cold Start Test',
                description: 'Touch the engine block before starting; ensure it is stone cold. Listen for initial rattle or blue/white smoke.',
                priority: 'high',
                proTip: 'Blue smoke means burning oil; thick white sweet-smelling smoke means coolant burning.'
              },
              {
                id: 'body-panel-gaps',
                title: 'Uniform Panel Gaps & Paint Overspray',
                description: 'Uneven gaps between fenders, hood, and doors indicate past collision repairs.',
                priority: 'medium',
                proTip: 'Run your finger along panel edges; rough spots or masking lines indicate a respray.'
              },
              {
                id: 'tire-wear',
                title: 'Tire Tread Depth & Date Stamp',
                description: 'Check DOT code for manufacturing year (tires over 6 years old are dangerous even with tread left).',
                priority: 'medium',
                proTip: 'Uneven inner or outer edge wear reveals poor wheel alignment or damaged suspension bushings.'
              },
              {
                id: 'obd-scan',
                title: 'OBD-II Diagnostic Scan',
                description: 'Plug in an OBD scanner to check for cleared trouble codes and readiness monitor status.',
                priority: 'high',
                proTip: 'If readiness monitors say "Not Ready", the seller may have reset the check engine light right before you arrived.'
              }
            ]
          }
        ]
      },
      {
        id: 'electronics',
        name: 'Electronics & Gadgets',
        icon: 'electronics',
        description: 'Inspection routines for pre-owned laptops, smartphones, cameras, and audio gear.',
        accentColor: '#F57F17',
        products: [
          {
            id: 'used-laptop',
            name: 'Used Laptop / MacBook',
            icon: 'laptop',
            description: 'Check battery health cycles, display dead pixels, thermal throttling, and iCloud / BIOS locks.',
            generalTips: [
              'Bring a USB drive with diagnostic tools (e.g., HWMonitor, Display test images).',
              'Boot into recovery mode to ensure BIOS is not password locked.'
            ],
            checklist: [
              {
                id: 'battery-health',
                title: 'Battery Health & Cycle Count',
                description: 'Check battery maximum capacity percentage (should be > 80%) and total charging cycles.',
                priority: 'high',
                proTip: 'On macOS: Apple menu > About This Mac > System Report > Power. On Windows: run `powercfg /batteryreport`.'
              },
              {
                id: 'activation-lock',
                title: 'Activation / iCloud / MDM Lock Removed',
                description: 'Verify device is completely wiped and signed out of iCloud, Google Account, or corporate MDM profile.',
                priority: 'high',
                proTip: 'Factory reset the device yourself right in front of the seller and advance to the initial desktop setup.'
              },
              {
                id: 'display-dead-pixels',
                title: 'Screen Test (Dead Pixels & Backlight Bleed)',
                description: 'View full-screen solid red, green, blue, white, and black wallpapers to spot stuck pixels.',
                priority: 'medium',
                proTip: 'Check maximum brightness in a bright room to ensure the backlight LED array has not degraded.'
              },
              {
                id: 'keyboard-trackpad',
                title: 'Every Key & Trackpad Click',
                description: 'Open a text editor or keyboardtester.com and press every single key, modifier, and function key.',
                priority: 'medium',
                proTip: 'Check for sticky keys caused by previous liquid spills.'
              },
              {
                id: 'thermal-stress',
                title: 'Thermal & Fan Noise Stress Test',
                description: 'Run a 3-minute 4K YouTube video or benchmark to verify cooling fans spin cleanly without bearing squeal.',
                priority: 'low',
                proTip: 'If fans immediately scream at 100% or CPU throttles under 1.5GHz, internal thermal paste is dried up.'
              }
            ]
          }
        ]
      },
      {
        id: 'real-estate',
        name: 'Apartments & Rentals',
        icon: 'home-interior',
        description: 'Crucial checklist for property walkthroughs, lease inspections, and handover audits.',
        accentColor: '#9C27B0',
        products: [
          {
            id: 'apartment-inspection',
            name: 'Apartment Move-In Walkthrough',
            icon: 'home-interior',
            description: 'Inspect plumbing pressure, water seepage, electrical outlets, acoustic insulation, and locks.',
            generalTips: [
              'Photograph and timestamp every pre-existing scuff, scratch, and crack before signing the lease.',
              'Visit the property at two different times: noon for sunlight, and 8 PM for noise levels.'
            ],
            checklist: [
              {
                id: 'water-pressure',
                title: 'Water Pressure & Drainage Speed',
                description: 'Flush toilet while running the bathroom sink faucet and shower simultaneously.',
                priority: 'high',
                proTip: 'Fill the sink and release the stopper: water should swirl down fast without gurgling or sewer odors.'
              },
              {
                id: 'wall-seepage',
                title: 'Dampness & Wall Seepage Signs',
                description: 'Examine ceiling corners, baseboards, and walls adjacent to bathrooms for bubbling paint or mold.',
                priority: 'high',
                proTip: 'Freshly painted isolated patches often conceal active water seepage problems.'
              },
              {
                id: 'cell-reception',
                title: 'Mobile Phone Signal & 5G Reception',
                description: 'Check mobile data and cellular bars in the bedroom, living room, and kitchen.',
                priority: 'medium',
                proTip: 'Make a test phone call and walk throughout the unit to ensure no dead zones.'
              },
              {
                id: 'outlet-testing',
                title: 'Electrical Outlets & Breaker Box',
                description: 'Test all wall outlets with a phone charger to confirm working current and proper grounding.',
                priority: 'medium',
                proTip: 'Flip open the circuit breaker panel to check for clean labeling and no scorch marks.'
              },
              {
                id: 'sound-insulation',
                title: 'Acoustic Sound Insulation & Window Seal',
                description: 'Close all windows and listen for street traffic, elevator hum, or neighbor footsteps.',
                priority: 'low',
                proTip: 'Check if windows are double-glazed with intact rubber weatherstripping.'
              }
            ]
          }
        ]
      }
    ]
  };

  /* ==========================================================================
     Data Helpers
     ========================================================================== */
  function getAppData() {
    return window.APP_DATA || DEFAULT_APP_DATA;
  }

  function getCategories() {
    const data = getAppData();
    if (Array.isArray(data)) return data;
    if (Array.isArray(data.categories)) return data.categories;
    if (typeof data.categories === 'object' && data.categories !== null) {
      return Object.values(data.categories);
    }
    return [];
  }

  function getCategory(categoryId) {
    const categories = getCategories();
    return categories.find(cat => cat.id === categoryId || cat.slug === categoryId) || null;
  }

  function getProduct(categoryId, productId) {
    const category = getCategory(categoryId);
    if (!category) return { category: null, product: null };

    const products = Array.isArray(category.products)
      ? category.products
      : (typeof category.products === 'object' && category.products !== null
          ? Object.values(category.products)
          : (category.items || []));

    const product = products.find(prod => prod.id === productId || prod.slug === productId) || null;
    return { category, product };
  }

  /* ==========================================================================
     Checklist State Management (localStorage)
     ========================================================================== */
  function getStorageKey(categoryId, productId) {
    return `ttd_checklist_${categoryId}_${productId}`;
  }

  function getCheckedItems(categoryId, productId) {
    try {
      const raw = localStorage.getItem(getStorageKey(categoryId, productId));
      if (!raw) return new Set();
      const parsed = JSON.parse(raw);
      return new Set(Array.isArray(parsed) ? parsed : []);
    } catch (e) {
      console.warn('Error reading from localStorage', e);
      return new Set();
    }
  }

  function toggleItem(categoryId, productId, itemId) {
    const checked = getCheckedItems(categoryId, productId);
    if (checked.has(itemId)) {
      checked.delete(itemId);
    } else {
      checked.add(itemId);
    }
    try {
      localStorage.setItem(getStorageKey(categoryId, productId), JSON.stringify(Array.from(checked)));
    } catch (e) {
      console.warn('Error saving to localStorage', e);
    }
    return checked;
  }

  function resetChecklist(categoryId, productId) {
    try {
      localStorage.removeItem(getStorageKey(categoryId, productId));
    } catch (e) {
      console.warn('Error clearing localStorage', e);
    }
  }

  function getProgress(categoryId, productId) {
    const { product } = getProduct(categoryId, productId);
    if (!product) return { checked: 0, total: 0, percentage: 0 };

    const checklist = product.checklist || product.items || [];
    const total = checklist.length;
    const checkedSet = getCheckedItems(categoryId, productId);
    const checked = checklist.filter(item => checkedSet.has(item.id)).length;
    const percentage = total === 0 ? 0 : Math.round((checked / total) * 100);

    return { checked, total, percentage };
  }

  /* ==========================================================================
     DOM Elements
     ========================================================================== */
  const mainContent = document.getElementById('main-content');
  const breadcrumbEl = document.getElementById('breadcrumb');
  const searchInput = document.getElementById('search-input');
  const searchResultsEl = document.getElementById('search-results');
  const toastEl = document.getElementById('toast');
  const confettiContainer = document.getElementById('confetti-container');

  let toastTimeout = null;

  /* ==========================================================================
     Toast Notifications
     ========================================================================== */
  function showToast(message, duration = 3000) {
    if (!toastEl) return;
    toastEl.textContent = message;
    toastEl.classList.add('show');

    if (toastTimeout) {
      clearTimeout(toastTimeout);
    }

    toastTimeout = setTimeout(() => {
      toastEl.classList.remove('show');
    }, duration);
  }

  /* ==========================================================================
     Confetti Animation
     ========================================================================== */
  function launchConfetti() {
    if (!confettiContainer) return;

    confettiContainer.innerHTML = '';
    const colors = ['#1B5E20', '#4CAF50', '#81C784', '#FF6F00', '#FFCA28', '#2196F3', '#AB47BC', '#E91E63'];
    const totalPieces = 70;

    for (let i = 0; i < totalPieces; i++) {
      const piece = document.createElement('div');
      piece.className = 'confetti-piece';

      const color = colors[Math.floor(Math.random() * colors.length)];
      const left = Math.random() * 100;
      const animDuration = 2 + Math.random() * 2.5;
      const animDelay = Math.random() * 0.8;
      const size = 6 + Math.random() * 8;
      const isCircle = Math.random() > 0.5;

      piece.style.backgroundColor = color;
      piece.style.left = `${left}%`;
      piece.style.width = `${size}px`;
      piece.style.height = `${size}px`;
      piece.style.borderRadius = isCircle ? '50%' : '2px';
      piece.style.animationDuration = `${animDuration}s`;
      piece.style.animationDelay = `${animDelay}s`;

      confettiContainer.appendChild(piece);
    }

    setTimeout(() => {
      confettiContainer.innerHTML = '';
    }, 4500);
  }

  /* ==========================================================================
     Utilities & Transitions
     ========================================================================== */
  function debounce(fn, delay = 300) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), delay);
    };
  }

  function setViewContent(html) {
    if (!mainContent) return;

    // View transition effect
    mainContent.className = 'view-enter';
    mainContent.innerHTML = html;

    // Trigger reflow to apply transition
    void mainContent.offsetWidth;
    mainContent.classList.add('view-enter-active');

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });

    try {
      mainContent.focus({ preventScroll: true });
    } catch (error) {
      mainContent.focus();
    }
  }

  function updateProgressBar(categoryId, productId) {
    const { checked, total, percentage } = getProgress(categoryId, productId);
    const barEl = document.getElementById('progress-bar');
    const textEl = document.getElementById('progress-text');

    if (barEl) {
      barEl.style.width = `${percentage}%`;
    }
    if (textEl) {
      textEl.textContent = `${checked} of ${total} checked (${percentage}%)`;
    }

    return { checked, total, percentage };
  }

  /* ==========================================================================
     Breadcrumb Component
     ========================================================================== */
  function updateBreadcrumb(items = []) {
    if (!breadcrumbEl) return;

    const baseItem = { title: 'Home', hash: '#/' };
    const allItems = [baseItem, ...items];

    breadcrumbEl.innerHTML = allItems.map((item, index) => {
      const isLast = index === allItems.length - 1;
      if (isLast) {
        return `<span class="breadcrumb-item"><span class="breadcrumb-current" aria-current="page">${escapeHtml(item.title)}</span></span>`;
      }
      return `
        <span class="breadcrumb-item">
          <a href="${item.hash}" class="breadcrumb-link">${escapeHtml(item.title)}</a>
          <span class="breadcrumb-separator" aria-hidden="true">&rsaquo;</span>
        </span>
      `;
    }).join('');
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  /* ==========================================================================
     View Renderers
     ========================================================================== */

  /**
   * Home View: Hero + Categories Grid
   */
  function renderHome() {
    updateBreadcrumb([]);

    const categories = getCategories();

    const categoriesHtml = categories.map(cat => {
      const products = Array.isArray(cat.products)
        ? cat.products
        : (typeof cat.products === 'object' && cat.products !== null ? Object.values(cat.products) : (cat.items || []));
      const count = products.length;
      const countLabel = count === 1 ? '1 checklist' : `${count} checklists`;
      const accentColor = cat.accentColor || cat.color || '#2E7D32';
      const borderStyle = accentColor ? `style="border-left-color: ${accentColor};"` : '';

      return `
        <article 
          class="category-card" 
          ${borderStyle} 
          data-category-id="${escapeHtml(cat.id)}" 
          tabindex="0" 
          role="button" 
          aria-label="View category ${escapeHtml(cat.name)}"
        >
          <div class="category-card-top">
            <span class="card-icon" aria-hidden="true" style="background: ${accentColor}12; color: ${accentColor};">${getIcon(cat.icon || cat.id, 'clipboard')}</span>
            <span class="card-badge">${countLabel}</span>
          </div>
          <h2 class="category-card-title">${escapeHtml(cat.name)}</h2>
          <p class="category-card-desc">${escapeHtml(cat.description || '')}</p>
          <div class="card-footer">
            <span>Explore checklists</span>
            <span class="arrow" aria-hidden="true">&rarr;</span>
          </div>
        </article>
      `;
    }).join('');

    const html = `
      <section class="hero">
        <div class="hero-inner">
          <div class="hero-badge">
            <span class="hero-badge-icon" aria-hidden="true">${getIcon('star')}</span> Smart Purchase Decisions
          </div>
          <h1>Never Buy Without <span class="highlight">Checking Twice</span></h1>
          <p>Don't regret your next big purchase. Interactive, expert-curated checklists for sofas, cars, apartments, electronics, and more.</p>
        </div>
      </section>

      <section class="container">
        <div class="section-header">
          <div>
            <h2 class="section-title">Purchase Categories</h2>
            <p class="section-subtitle">Select a category to inspect available purchase guides.</p>
          </div>
        </div>

        <div class="categories-grid" role="list">
          ${categoriesHtml || `
            <div class="empty-state">
              <div class="empty-state-icon">${getIcon('clipboard')}</div>
              <h3 class="empty-state-title">No categories found</h3>
              <p class="empty-state-text">Check your data source or configure categories.</p>
            </div>
          `}
        </div>
      </section>
    `;

    setViewContent(html);
  }

  /**
   * Category View: Products Grid + Back Button
   */
  function renderCategory(categoryId) {
    const category = getCategory(categoryId);

    if (!category) {
      updateBreadcrumb([{ title: 'Not Found', hash: `#/category/${categoryId}` }]);
      setViewContent(`
        <div class="container" style="padding-top: 3rem;">
          <div class="empty-state">
            <div class="empty-state-icon">${getIcon('search')}</div>
            <h2 class="empty-state-title">Category Not Found</h2>
            <p class="empty-state-text">We couldn't find the requested category. It may have been moved or removed.</p>
            <a href="#/" class="btn btn-primary" style="margin-top: 1.5rem;">&larr; Back to Home</a>
          </div>
        </div>
      `);
      return;
    }

    updateBreadcrumb([
      { title: category.name, hash: `#/category/${category.id}` }
    ]);

    const accentColor = category.accentColor || category.color || '#2E7D32';

    const products = Array.isArray(category.products)
      ? category.products
      : (typeof category.products === 'object' && category.products !== null ? Object.values(category.products) : (category.items || []));

    const productsHtml = products.map(prod => {
      const checklist = prod.checklist || prod.items || [];
      const count = checklist.length;
      const countLabel = count === 1 ? '1 check' : `${count} checks`;

      return `
        <article 
          class="product-card" 
          data-category-id="${escapeHtml(category.id)}" 
          data-product-id="${escapeHtml(prod.id)}" 
          tabindex="0" 
          role="button" 
          aria-label="View checklist for ${escapeHtml(prod.name)}"
        >
          <div class="category-card-top">
            <span class="card-icon" aria-hidden="true" style="background: ${accentColor}12; color: ${accentColor};">${getIcon(prod.icon || prod.id, category.id)}</span>
            <span class="card-badge">${countLabel}</span>
          </div>
          <h2 class="product-card-title">${escapeHtml(prod.name)}</h2>
          <p class="product-card-desc">${escapeHtml(prod.description || '')}</p>
          <div class="card-footer">
            <span>Open checklist</span>
            <span class="arrow" aria-hidden="true">&rarr;</span>
          </div>
        </article>
      `;
    }).join('');

    const html = `
      <section class="container" style="padding-top: 2rem;">
        <div class="section-header">
          <div>
            <h1 class="section-title"><span class="category-header-icon" style="color: ${accentColor}; margin-right: 0.5rem; display: inline-flex; vertical-align: middle;">${getIcon(category.icon || category.id)}</span>${escapeHtml(category.name)}</h1>
            <p class="section-subtitle">${escapeHtml(category.description || 'Choose an item to review its purchase checklist.')}</p>
          </div>
          <a href="#/" class="back-btn" aria-label="Back to all categories">&larr; All Categories</a>
        </div>

        <div class="products-grid" role="list">
          ${productsHtml || `
            <div class="empty-state">
              <div class="empty-state-icon">${getIcon('clipboard')}</div>
              <h3 class="empty-state-title">No checklists available yet</h3>
              <p class="empty-state-text">Checklists for this category are coming soon.</p>
            </div>
          `}
        </div>
      </section>
    `;

    setViewContent(html);
  }

  /**
   * Checklist View: Product Header + General Tips + Sticky Progress + Items + Actions
   */
  function renderChecklist(categoryId, productId) {
    const { category, product } = getProduct(categoryId, productId);

    if (!category || !product) {
      updateBreadcrumb([{ title: 'Not Found', hash: `#/category/${categoryId}/${productId}` }]);
      setViewContent(`
        <div class="container" style="padding-top: 3rem;">
          <div class="empty-state">
            <div class="empty-state-icon">${getIcon('search')}</div>
            <h2 class="empty-state-title">Checklist Not Found</h2>
            <p class="empty-state-text">The requested checklist could not be found.</p>
            <a href="#/" class="btn btn-primary" style="margin-top: 1.5rem;">&larr; Back to Home</a>
          </div>
        </div>
      `);
      return;
    }

    updateBreadcrumb([
      { title: category.name, hash: `#/category/${category.id}` },
      { title: product.name, hash: `#/category/${category.id}/${product.id}` }
    ]);

    const accentColor = category.accentColor || category.color || '#2E7D32';
    const checklist = product.checklist || product.items || [];
    const checkedSet = getCheckedItems(categoryId, productId);
    const { checked, total, percentage } = getProgress(categoryId, productId);

    const rawTips = product.generalTips || product.tips || [];
    const generalTips = Array.isArray(rawTips) ? rawTips : (typeof rawTips === 'string' && rawTips.trim() ? [rawTips] : []);
    const generalTipsHtml = generalTips.length > 0 ? `
      <div class="general-tips">
        <button type="button" class="tips-toggle" id="general-tips-toggle" aria-expanded="false">
          <span style="display: inline-flex; align-items: center; gap: 0.4rem;">${getIcon('lightbulb')} Inspection Master Tips (${generalTips.length})</span>
          <span class="chevron" aria-hidden="true">&#9660;</span>
        </button>
        <div class="tips-content" id="general-tips-content">
          <ul class="tips-list">
            ${generalTips.map(tip => `<li>${escapeHtml(tip)}</li>`).join('')}
          </ul>
        </div>
      </div>
    ` : '';

    const itemsHtml = checklist.map((item, idx) => {
      const isChecked = checkedSet.has(item.id);
      const priorityClass = item.priority ? `priority-${item.priority.toLowerCase()}` : 'priority-medium';
      const priorityLabel = item.priority ? item.priority.toUpperCase() : 'MEDIUM';

      const proTipHtml = item.proTip ? `
        <button type="button" class="pro-tip-toggle" data-toggle-tip="tip-${idx}" aria-expanded="false">
          <span class="pro-tip-icon">${getIcon('lightbulb')}</span> Pro Tip
        </button>
        <div class="pro-tip" id="tip-${idx}">
          ${escapeHtml(item.proTip)}
        </div>
      ` : '';

      return `
        <div 
          class="checklist-item ${isChecked ? 'checked' : ''}" 
          id="item-row-${item.id}"
          data-category-id="${escapeHtml(categoryId)}"
          data-product-id="${escapeHtml(productId)}"
          data-item-id="${escapeHtml(item.id)}"
        >
          <input 
            type="checkbox" 
            class="checklist-checkbox" 
            id="checkbox-${item.id}"
            data-item-id="${escapeHtml(item.id)}"
            ${isChecked ? 'checked' : ''}
            aria-label="Check ${escapeHtml(item.title)}"
          >
          <div class="item-content">
            <div class="item-header">
              <label for="checkbox-${item.id}" class="item-title" style="cursor: pointer;">
                ${escapeHtml(item.title)}
              </label>
              <span class="priority-badge ${priorityClass}">${priorityLabel}</span>
            </div>
            <p class="item-description">${escapeHtml(item.description || '')}</p>
            ${proTipHtml}
          </div>
        </div>
      `;
    }).join('');

    const html = `
      <div class="checklist-container">
        <div style="margin-bottom: 1.25rem;">
          <a href="#/category/${category.id}" class="back-btn" aria-label="Back to ${escapeHtml(category.name)}">
            &larr; Back to ${escapeHtml(category.name)}
          </a>
        </div>

        <section class="product-header">
          <div class="product-header-top">
            <span class="product-header-icon" aria-hidden="true" style="color: ${accentColor};">${getIcon(product.icon || product.id, category.id)}</span>
            <div class="product-header-info">
              <span class="product-category-tag">${escapeHtml(category.name)}</span>
              <h1>${escapeHtml(product.name)}</h1>
            </div>
          </div>
          <p class="product-header-desc">${escapeHtml(product.description || '')}</p>
          ${generalTipsHtml}
        </section>

        <aside class="progress-container" aria-label="Checklist completion status">
          <div class="progress-header">
            <span class="progress-title">Checklist Progress</span>
            <span class="progress-text" id="progress-text">${checked} of ${total} checked (${percentage}%)</span>
          </div>
          <div class="progress-track">
            <div class="progress-bar" id="progress-bar" style="width: ${percentage}%;"></div>
          </div>
        </aside>

        <section class="checklist-list" role="list">
          ${itemsHtml || `
            <div class="empty-state">
              <div class="empty-state-icon">${getIcon('clipboard')}</div>
              <h3 class="empty-state-title">No items in this checklist yet</h3>
            </div>
          `}
        </section>

        <footer class="actions-bar">
          <button 
            type="button" 
            class="btn btn-secondary" 
            id="btn-reset" 
            data-category-id="${escapeHtml(categoryId)}" 
            data-product-id="${escapeHtml(productId)}"
          >
            ${getIcon('reset')} Reset All
          </button>
          <button 
            type="button" 
            class="btn btn-secondary" 
            id="btn-share" 
            data-category-id="${escapeHtml(categoryId)}" 
            data-product-id="${escapeHtml(productId)}"
          >
            ${getIcon('share')} Share
          </button>
          <button 
            type="button" 
            class="btn btn-primary" 
            id="btn-download" 
            data-category-id="${escapeHtml(categoryId)}" 
            data-product-id="${escapeHtml(productId)}"
          >
            ${getIcon('download')} Download Checklist
          </button>
        </footer>
      </div>

      <!-- Celebration Modal Placeholder -->
      <div id="celebration-modal" class="celebration" style="display: none;" role="dialog" aria-modal="true" aria-labelledby="celebration-title">
        <div class="celebration-content">
          <span class="celebration-icon" aria-hidden="true">${getIcon('celebration')}</span>
          <h2 id="celebration-title" class="celebration-title">Ready to Buy!</h2>
          <p class="celebration-subtitle">You have verified every critical checkpoint for this <strong>${escapeHtml(product.name)}</strong>. You can make this purchase with 100% confidence!</p>
          <div class="celebration-actions">
            <button type="button" class="btn btn-primary" id="btn-celebration-close">Awesome!</button>
            <button type="button" class="btn btn-secondary" id="btn-celebration-share" data-category-id="${escapeHtml(categoryId)}" data-product-id="${escapeHtml(productId)}">Share Results</button>
          </div>
        </div>
      </div>
    `;

    setViewContent(html);
  }

  function checkCompletionCelebration(categoryId, productId) {
    const { checked, total } = getProgress(categoryId, productId);
    if (total > 0 && checked === total) {
      launchConfetti();
      const modal = document.getElementById('celebration-modal');
      if (modal) {
        modal.style.display = 'flex';
      }
    }
  }

  /* ==========================================================================
     Share & Download Logic
     ========================================================================== */
  function generateChecklistText(categoryId, productId) {
    const { category, product } = getProduct(categoryId, productId);
    if (!product) return '';

    const checklist = product.checklist || product.items || [];
    const checkedSet = getCheckedItems(categoryId, productId);
    const { checked, total, percentage } = getProgress(categoryId, productId);

    const lines = [];
    lines.push(`✅ Tick Tick Done — ${product.name} Checklist`);
    if (category) lines.push(`Category: ${category.name}`);
    lines.push('--------------------------------------------------');

    checklist.forEach(item => {
      const isChecked = checkedSet.has(item.id);
      const symbol = isChecked ? '✓' : '✗';
      const statusText = isChecked ? 'Checked' : 'Not checked';
      lines.push(`${symbol} ${item.title} — ${statusText}`);
    });

    lines.push('--------------------------------------------------');
    lines.push(`Progress: ${checked}/${total} (${percentage}%)`);
    lines.push(`Completed via Tick Tick Done: https://ticktickdone.com`);

    return lines.join('\n');
  }

  async function shareChecklist(categoryId, productId) {
    const { product } = getProduct(categoryId, productId);
    const title = product ? `Tick Tick Done — ${product.name} Checklist` : 'Purchase Checklist';
    const text = generateChecklistText(categoryId, productId);

    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: text
        });
        showToast('Checklist shared successfully!');
        return;
      } catch (err) {
        if (err.name !== 'AbortError') {
          console.warn('Share API error:', err);
        } else {
          return;
        }
      }
    }

    // Fallback: Clipboard
    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(text);
        showToast('Checklist copied to clipboard!');
        return;
      } catch (err) {
        console.warn('Clipboard writeText failed', err);
      }
    }

    // Secondary fallback: prompt
    window.prompt('Copy your checklist text below:', text);
  }

  function downloadChecklist(categoryId, productId) {
    const { product } = getProduct(categoryId, productId);
    const filename = `${(product?.name || 'checklist').toLowerCase().replace(/[^a-z0-9]+/g, '-')}-checklist.txt`;
    const text = generateChecklistText(categoryId, productId);

    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    showToast('Checklist downloaded!');
  }

  /* ==========================================================================
     Search Implementation
     ========================================================================== */
  function handleSearch(query) {
    if (!searchResultsEl) return;

    const trimmed = (query || '').trim().toLowerCase();
    if (!trimmed) {
      searchResultsEl.innerHTML = '';
      searchResultsEl.hidden = true;
      if (searchInput) searchInput.setAttribute('aria-expanded', 'false');
      return;
    }

    const categories = getCategories();
    const results = [];

    categories.forEach(cat => {
      const catMatches = cat.name.toLowerCase().includes(trimmed) ||
        (cat.description && cat.description.toLowerCase().includes(trimmed));

      const products = Array.isArray(cat.products)
        ? cat.products
        : (typeof cat.products === 'object' && cat.products !== null ? Object.values(cat.products) : (cat.items || []));

      products.forEach(prod => {
        const prodMatches = prod.name.toLowerCase().includes(trimmed) ||
          (prod.description && prod.description.toLowerCase().includes(trimmed));

        const checklistMatches = (prod.checklist || []).some(item =>
          item.title.toLowerCase().includes(trimmed) ||
          (item.description && item.description.toLowerCase().includes(trimmed))
        );

        if (prodMatches || checklistMatches || catMatches) {
          results.push({
            type: 'product',
            categoryId: cat.id,
            categoryName: cat.name,
            productId: prod.id,
            productName: prod.name,
            icon: prod.icon || prod.id || cat.id,
            desc: prod.description || `In ${cat.name}`
          });
        }
      });
    });

    if (results.length === 0) {
      searchResultsEl.innerHTML = `
        <div style="padding: 1rem; text-align: center; color: var(--color-text-secondary); font-size: 0.9rem;">
          No matching checklists found for "${escapeHtml(query)}"
        </div>
      `;
      searchResultsEl.hidden = false;
      if (searchInput) searchInput.setAttribute('aria-expanded', 'true');
      return;
    }

    searchResultsEl.innerHTML = results.slice(0, 8).map(res => `
      <div 
        class="search-result-item" 
        role="option" 
        tabindex="0"
        data-category-id="${escapeHtml(res.categoryId)}" 
        data-product-id="${escapeHtml(res.productId)}"
      >
        <span class="search-result-icon">${getIcon(res.icon || res.productId || res.categoryId, 'clipboard')}</span>
        <div class="search-result-info">
          <span class="search-result-title">${escapeHtml(res.productName)}</span>
          <span class="search-result-category">${escapeHtml(res.categoryName)}</span>
        </div>
      </div>
    `).join('');

    searchResultsEl.hidden = false;
    if (searchInput) searchInput.setAttribute('aria-expanded', 'true');
  }

  function closeSearchResults() {
    if (searchResultsEl) {
      searchResultsEl.hidden = true;
      searchResultsEl.innerHTML = '';
    }
    if (searchInput) {
      searchInput.setAttribute('aria-expanded', 'false');
    }
  }

  /* ==========================================================================
     Router
     ========================================================================== */
  function navigateTo(hash) {
    if (window.location.hash === hash) {
      handleRoute();
    } else {
      window.location.hash = hash;
    }
  }

  function handleRoute() {
    closeSearchResults();
    const hash = window.location.hash || '#/';
    const cleanHash = hash.replace(/^#\/?/, '');
    const parts = cleanHash.split('/').filter(Boolean);

    if (parts.length === 0) {
      renderHome();
    } else if (parts[0] === 'category') {
      const categoryId = parts[1];
      const productId = parts[2];

      if (productId) {
        renderChecklist(categoryId, productId);
      } else if (categoryId) {
        renderCategory(categoryId);
      } else {
        renderHome();
      }
    } else {
      renderHome();
    }
  }

  /* ==========================================================================
     Event Delegation on #main-content & Global Listeners
     ========================================================================== */
  function setupEventDelegation() {
    if (!mainContent) return;

    // Click delegation
    mainContent.addEventListener('click', (e) => {
      // 1. Category card click
      const categoryCard = e.target.closest('.category-card');
      if (categoryCard) {
        const catId = categoryCard.dataset.categoryId;
        if (catId) navigateTo(`#/category/${catId}`);
        return;
      }

      // 2. Product card click
      const productCard = e.target.closest('.product-card');
      if (productCard) {
        const catId = productCard.dataset.categoryId;
        const prodId = productCard.dataset.productId;
        if (catId && prodId) navigateTo(`#/category/${catId}/${prodId}`);
        return;
      }

      // 3. Checklist checkbox toggle
      const checkbox = e.target.closest('.checklist-checkbox');
      if (checkbox) {
        const itemRow = checkbox.closest('.checklist-item');
        const catId = itemRow?.dataset.categoryId;
        const prodId = itemRow?.dataset.productId;
        const itemId = checkbox.dataset.itemId;

        if (catId && prodId && itemId) {
          toggleItem(catId, prodId, itemId);
          itemRow.classList.toggle('checked', checkbox.checked);
          updateProgressBar(catId, prodId);
          if (checkbox.checked) {
            checkCompletionCelebration(catId, prodId);
          }
        }
        return;
      }

      // 4. Pro tip toggle
      const proTipToggle = e.target.closest('.pro-tip-toggle');
      if (proTipToggle) {
        const targetId = proTipToggle.dataset.toggleTip;
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          const isExpanded = targetEl.classList.toggle('expanded');
          proTipToggle.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
        }
        return;
      }

      // 5. General Tips toggle
      const tipsToggle = e.target.closest('#general-tips-toggle');
      if (tipsToggle) {
        const content = document.getElementById('general-tips-content');
        if (content) {
          const isExpanded = content.classList.toggle('expanded');
          tipsToggle.classList.toggle('expanded', isExpanded);
          tipsToggle.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
        }
        return;
      }

      // 6. Action: Reset All
      const btnReset = e.target.closest('#btn-reset');
      if (btnReset) {
        const catId = btnReset.dataset.categoryId;
        const prodId = btnReset.dataset.productId;
        if (confirm('Are you sure you want to reset all checked items in this checklist?')) {
          resetChecklist(catId, prodId);
          // Uncheck all checkboxes visually
          document.querySelectorAll('.checklist-checkbox').forEach(cb => {
            cb.checked = false;
          });
          document.querySelectorAll('.checklist-item').forEach(row => {
            row.classList.remove('checked');
          });
          updateProgressBar(catId, prodId);
          showToast('Checklist reset.');
        }
        return;
      }

      // 7. Action: Share
      const btnShare = e.target.closest('#btn-share, #btn-celebration-share');
      if (btnShare) {
        const catId = btnShare.dataset.categoryId;
        const prodId = btnShare.dataset.productId;
        shareChecklist(catId, prodId);
        return;
      }

      // 8. Action: Download
      const btnDownload = e.target.closest('#btn-download');
      if (btnDownload) {
        const catId = btnDownload.dataset.categoryId;
        const prodId = btnDownload.dataset.productId;
        downloadChecklist(catId, prodId);
        return;
      }

      // 9. Celebration modal close
      const btnCelebrationClose = e.target.closest('#btn-celebration-close');
      if (btnCelebrationClose) {
        const modal = document.getElementById('celebration-modal');
        if (modal) modal.style.display = 'none';
        return;
      }
    });

    // Keyboard navigation (Enter / Space) for accessible cards
    mainContent.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        const target = e.target.closest('.category-card, .product-card, .search-result-item');
        if (target) {
          e.preventDefault();
          target.click();
        }
      }
    });
  }

  function setupSearchListeners() {
    if (!searchInput) return;

    const debouncedSearch = debounce((query) => {
      handleSearch(query);
    }, 300);

    searchInput.addEventListener('input', (e) => {
      debouncedSearch(e.target.value);
    });

    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeSearchResults();
        searchInput.blur();
      }
    });

    // Click on search result item
    if (searchResultsEl) {
      searchResultsEl.addEventListener('click', (e) => {
        const item = e.target.closest('.search-result-item');
        if (item) {
          const catId = item.dataset.categoryId;
          const prodId = item.dataset.productId;
          if (catId && prodId) {
            closeSearchResults();
            searchInput.value = '';
            navigateTo(`#/category/${catId}/${prodId}`);
          }
        }
      });
    }

    // Close search dropdown on click outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.search-container')) {
        closeSearchResults();
      }
    });
  }

  /* ==========================================================================
     Initialization
     ========================================================================== */
  function init() {
    // Replace search emoji with SVG
    const searchIconEl = document.querySelector('.search-icon');
    if (searchIconEl) {
      searchIconEl.innerHTML = getIcon('search');
    }

    setupEventDelegation();
    setupSearchListeners();

    window.addEventListener('hashchange', handleRoute);
    handleRoute();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Export functions to global scope for testing/inspection if needed
  window.TickTickDone = {
    navigateTo,
    getCheckedItems,
    toggleItem,
    resetChecklist,
    getProgress,
    shareChecklist,
    downloadChecklist,
    launchConfetti,
    showToast,
    getIcon,
    ICONS
  };
})();
