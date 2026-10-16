/**
 * TickTickDone - Comprehensive Product Buying & Pre-Delivery Checklists
 * Data file containing expert-curated verification checklists, priority levels, and pro tips.
 */

const APP_DATA = {
  "categories": [
    {
      "id": "furniture",
      "name": "Furniture",
      "icon": "🪑",
      "description": "Sofas, tables, beds & more",
      "color": "#2E7D32",
      "products": [
        {
          "id": "sofa",
          "name": "Sofa / Couch",
          "icon": "🛋️",
          "description": "Ensure long-lasting frame integrity, seating comfort & premium upholstery",
          "tips": "Always test the sofa by sitting in various positions—upright, lounging, and leaning against armrests. Don't compromise on the internal hardwood frame or foam density, as they dictate whether your couch lasts 10 years or sags in two.",
          "checklist": [
            {
              "id": "foam-density",
              "title": "Foam Density & Resilience",
              "description": "Verify the density of the seating foam in kg/m³ (D-rating) to ensure the cushions hold their shape over years of use.",
              "priority": "high",
              "proTip": "Target 32 to 40 kg/m³ (32D-40D) High Resilience (HR) foam for seat cushions. Anything under 28D will develop permanent body sags within 12 months."
            },
            {
              "id": "foam-company-brand",
              "title": "Foam Manufacturer / Brand",
              "description": "Confirm the manufacturer brand of the foam slabs used inside the sofa cushions.",
              "priority": "medium",
              "proTip": "Trusted foam brands like Sleepwell, Featherlite, or Bayer PU print density stamps directly on the slab. Ask the maker or showroom for proof of the branded slab cut."
            },
            {
              "id": "foam-warranty",
              "title": "Foam Sagging Warranty",
              "description": "Check the written warranty terms specifically protecting against cushion compression and sagging.",
              "priority": "high",
              "proTip": "Quality manufacturers provide a 5 to 10-year warranty covering permanent sagging exceeding 15-20% of original thickness. Ensure replacement terms are unconditional."
            },
            {
              "id": "wood-type-frame",
              "title": "Wood Species Used in Frame",
              "description": "Identify the exact timber species used for the internal structural frame to prevent snapping and creaking.",
              "priority": "high",
              "proTip": "Insist on kiln-dried hardwoods such as Teak, Marandi, Sheesham, or Sal wood. Avoid untreated pine or rubberwood, which flex and warp under sustained adult weight."
            },
            {
              "id": "wood-quality-defects",
              "title": "Wood Quality & Moisture Content",
              "description": "Inspect the structural timber for unseasoned moisture, knots, cracks, or borer/termite vulnerabilities.",
              "priority": "high",
              "proTip": "Properly kiln-dried wood maintains a moisture content of 8-12%. Ensure chemical vacuum pressure impregnation (anti-termite and borer treatment) was performed."
            },
            {
              "id": "spring-type-suspension",
              "title": "Seat Suspension Springs (Sinuous vs Pocket)",
              "description": "Inspect the underlying suspension system that supports the foam layers and bears human load.",
              "priority": "high",
              "proTip": "Heavy 8-gauge steel sinuous (S-shaped) springs or individually wrapped pocket springs offer optimal support. Avoid sofas relying entirely on thin elastic webbing bands."
            },
            {
              "id": "edges-touch-and-feel",
              "title": "Edge Padding & Frame Feel",
              "description": "Run your hands firmly along the arms, top back rail, and front edge to check for sufficient internal padding.",
              "priority": "medium",
              "proTip": "You should never feel sharp wooden edges through the fabric. High-end builds wrap all hardwood edges with thick bonded wadding or 20D foam before upholstering."
            },
            {
              "id": "fabric-brand-grade",
              "title": "Upholstery Fabric Brand & Rub Count",
              "description": "Check the origin, composition, and Martindale abrasion resistance rating of the upholstery fabric.",
              "priority": "medium",
              "proTip": "Choose fabrics with a Martindale rating of 25,000+ double rubs for active households (pets/kids). Well-known brands like D'Decor, Pure, or Sunbrella offer superior stain guards."
            },
            {
              "id": "fabric-warranty",
              "title": "Fabric Warranty & Stain Guard",
              "description": "Review warranty coverage against premature pilling, fiber thinning, color fading, and liquid staining.",
              "priority": "medium",
              "proTip": "Look for a 2-year warranty against fabric pilling (ISO pilling grade 4 or higher) and colorfastness to light (Grade 5). Check if Scotchgard coating is applied."
            },
            {
              "id": "stitching-quality",
              "title": "Stitching Quality & Seam Reinforcement",
              "description": "Inspect the seam lines across corners, cushions, and piping for straightness, tension, and durability.",
              "priority": "high",
              "proTip": "Check for double-needle topstitching with high-tensile bonded nylon thread. Seams should show 6 to 8 stitches per inch without gaping or puckering when pulled."
            },
            {
              "id": "leg-material-stability",
              "title": "Leg Material, Mounting & Corner Blocks",
              "description": "Examine how the legs are attached to the base frame and whether corner braces are present.",
              "priority": "high",
              "proTip": "Legs should be solid wood or cast metal secured with heavy steel hanger bolts into triangular hardwood corner blocks. Avoid legs glued or stapled into thin plywood."
            },
            {
              "id": "cushion-removability",
              "title": "Cushion Removability & Washable Covers",
              "description": "Verify whether seat and back cushions are detachable and feature heavy-duty hidden zippers.",
              "priority": "medium",
              "proTip": "Removable cushion covers allow dry cleaning and let you rotate cushions regularly, which extends overall foam lifespan by up to 40% through even wear."
            },
            {
              "id": "frame-warranty",
              "title": "Structural Frame Warranty",
              "description": "Confirm the written structural warranty duration covering the internal wooden skeleton and joints.",
              "priority": "high",
              "proTip": "A reputable manufacturer will provide a 5 to 10-year warranty covering frame breakage, joint detachment, or weld separation under standard residential usage."
            },
            {
              "id": "delivery-assembly-terms",
              "title": "Delivery & In-Home Assembly Terms",
              "description": "Confirm transit safety, building doorway clearance, room-of-choice placement, and packaging disposal.",
              "priority": "medium",
              "proTip": "Measure entryway diagonal dimensions and elevator doors against sofa dimensions (add 4 inches for packaging). Ensure white-glove assembly is explicitly covered in writing."
            }
          ]
        },
        {
          "id": "dining-table",
          "name": "Dining Table",
          "icon": "🍽️",
          "description": "Inspect structural alignment, hardwood quality, tabletop durability & joinery",
          "tips": "Dining tables endure daily hot plates, water condensation, and heavy elbows. Always sit down, lean your elbows on the edge to check stability, and look down the tabletop plane from eye level to detect any bowing.",
          "checklist": [
            {
              "id": "chair-alignment-accuracy",
              "title": "Chair Alignment & Height Consistency",
              "description": "Line up all dining chairs together to check uniform backrest heights, seat levels, and parallel spacing under the table.",
              "priority": "medium",
              "proTip": "Chair heights should match within 2-3mm. Ensure all chairs slide cleanly between table legs with at least 20-25 cm clearance between seat top and tabletop underside."
            },
            {
              "id": "wood-type-species",
              "title": "Table & Chair Wood Species",
              "description": "Verify the solid wood species used for both the tabletop surface and the primary load-bearing legs.",
              "priority": "high",
              "proTip": "Solid Teak, Sheesham (Indian Rosewood), White Oak, or Walnut offer the highest density and moisture stability. Avoid rubberwood or particle board cores for dining tables."
            },
            {
              "id": "wood-quality-cracks",
              "title": "Wood Quality, Fillers & Seasoning",
              "description": "Inspect the tabletop surface and apron for natural cracks, excessive filler patches, knots, or wood warping.",
              "priority": "high",
              "proTip": "Look across the tabletop from eye level at a glancing angle. A seasoned tabletop has no ripples or cupping. Wood filler should only appear on minute pin knots (<3mm)."
            },
            {
              "id": "polish-type-finish",
              "title": "Polish Type & Heat Resistance",
              "description": "Check whether the protective finish is Polyurethane (PU), Melamine, NC lacquer, or natural hardwax oil.",
              "priority": "medium",
              "proTip": "Insist on Italian Polyurethane (PU) coating. PU withstands heat up to 100°C without whitening and resists water glass condensation rings, unlike cheap Melamine finishes."
            },
            {
              "id": "polish-warranty",
              "title": "Polish & Surface Coating Warranty",
              "description": "Inquire about written warranty protection against surface yellowing, peeling, flaking, or thermal ring stains.",
              "priority": "medium",
              "proTip": "Look for a minimum 1 to 2-year warranty on the topcoat finish that covers lacquer blistering and spontaneous discoloration under normal dining usage."
            },
            {
              "id": "joint-construction-type",
              "title": "Joint Construction Type (Mortise & Tenon)",
              "description": "Inspect the joints connecting the tabletop apron to the supporting corner legs.",
              "priority": "high",
              "proTip": "Look underneath the table for traditional mortise-and-tenon joints reinforced with diagonal wooden corner blocks and heavy machine bolts. Avoid tables held merely with drywall screws."
            },
            {
              "id": "edge-finishing-underside",
              "title": "Edge Finishing & Underside Sealing",
              "description": "Check that the table perimeter is smoothly chamfered and the bottom surface is fully sealed.",
              "priority": "medium",
              "proTip": "Run your fingers under the table apron and top edge. It must be splinter-free and sealed with at least one base coat of lacquer; unsealed bottoms absorb moisture and cup over time."
            },
            {
              "id": "tabletop-thickness",
              "title": "Tabletop Solid Thickness",
              "description": "Measure the solid cross-sectional thickness of the table slab rather than relying on a thickened outer edge trim.",
              "priority": "high",
              "proTip": "A solid hardwood dining slab should be at least 25mm to 35mm thick (1 to 1.4 inches). If veneer on plywood is used, ensure an 18-25mm core with a solid 30mm edge band."
            },
            {
              "id": "stability-wobble-test",
              "title": "Stability & Wobble Resistance",
              "description": "Apply firm, downward, and lateral rocking force to the corners and center of the table.",
              "priority": "high",
              "proTip": "Place your hands on diagonal corners and push firmly. A well-built 6-seater dining table should not rock, flex, or creak under 60-80 kg of downward edge pressure."
            },
            {
              "id": "chairs-weight-capacity",
              "title": "Chair Weight Capacity & Frame Bracing",
              "description": "Verify the weight-bearing rating and structural bracing of the accompanying dining chairs.",
              "priority": "medium",
              "proTip": "Quality dining chairs should be rated for at least 120-150 kg (265-330 lbs). Check that the chair legs feature horizontal side stretchers or reinforced corner blocks."
            },
            {
              "id": "delivery-assembly-leveling",
              "title": "Delivery, Assembly & Adjustable Glides",
              "description": "Ensure white-glove setup, bolt torqueing, and floor leveling glides are provided at delivery.",
              "priority": "medium",
              "proTip": "Verify that adjustable threaded nylon glides are pre-installed beneath each table leg to balance uneven floor tiles without needing ugly cardboard shims."
            }
          ]
        },
        {
          "id": "bed-mattress",
          "name": "Bed / Mattress",
          "icon": "🛏️",
          "description": "Verify spinal ergonomics, mattress core density, frame structure & storage lift ease",
          "tips": "You spend a third of your life on your mattress. Never buy without lying down in your natural sleeping position for at least 10-15 minutes. Check the slat spacing on the bed frame, as improper slats can ruin even the most expensive mattress.",
          "checklist": [
            {
              "id": "mattress-core-type",
              "title": "Mattress Construction Type",
              "description": "Verify the core internal structure (Pocket Spring, 100% Natural Latex, Memory Foam, or Orthopedic Coir Hybrid).",
              "priority": "high",
              "proTip": "Pocket spring hybrids provide zero motion transfer and cooling, while 100% natural Dunlop latex offers hypoallergenic, sag-free durability lasting 12-15 years."
            },
            {
              "id": "mattress-density-gauge",
              "title": "Foam Density & Spring Wire Gauge",
              "description": "Check the exact foam density rating (kg/m³) and the steel wire gauge used in coil springs.",
              "priority": "high",
              "proTip": "For memory foam, target 50-60 kg/m³ top layer with a 32D+ base core. For spring mattresses, insist on 14-gauge pocket coils with 800+ coil count in Queen size."
            },
            {
              "id": "mattress-brand-certification",
              "title": "Mattress Brand & Safety Certifications",
              "description": "Verify official manufacturer authenticity and independent non-toxic material certifications.",
              "priority": "medium",
              "proTip": "Look for CertiPUR-US (no toxic flame retardants/heavy metals), OEKO-TEX Standard 100 (skin safe), or GOLS (Global Organic Latex Standard) tags sewn into seams."
            },
            {
              "id": "mattress-warranty-indentation",
              "title": "Mattress Warranty & Sag Threshold",
              "description": "Read the fine print defining the exact indentation depth needed to qualify for a sagging warranty replacement.",
              "priority": "high",
              "proTip": "A standard 10-year warranty must cover permanent sagging of 1 inch (2.5 cm) or more without human weight applied. Avoid warranties with a 1.5+ inch threshold."
            },
            {
              "id": "bed-frame-material",
              "title": "Bed Frame Structural Material",
              "description": "Confirm the material used in the main frame, side rails, headboard, and internal storage box.",
              "priority": "high",
              "proTip": "Insist on kiln-dried hardwood or IS 710 BWP (Boiling Water Proof) / IS 303 BWR plywood for side rails. Avoid 12mm particleboard which disintegrates under heavy mattress weight."
            },
            {
              "id": "bed-frame-wood-quality",
              "title": "Bed Frame Wood Quality & Internal Lamination",
              "description": "Inspect inner storage compartments, joints, and corner reinforcements for smooth finish and pest treatment.",
              "priority": "high",
              "proTip": "Internal storage boxes should have white or fabric lamination. Raw unlaminated plywood inside the box absorbs dampness and snags stored blankets and winter clothes."
            },
            {
              "id": "storage-mechanism-hydraulics",
              "title": "Hydraulic Lift Mechanism Rating",
              "description": "Test the hydraulic gas lift pistons to ensure smooth, effortless opening and safe locking.",
              "priority": "high",
              "proTip": "For a King bed with a heavy mattress, hydraulic gas pistons should be rated between 1500N and 2000N (Newtons) each, equipped with safety lock pins to prevent accidental closure."
            },
            {
              "id": "headboard-upholstery-material",
              "title": "Headboard Cushioning & Material",
              "description": "Check the comfort, padding thickness, and durability of the upholstered headboard fabric or leatherette.",
              "priority": "medium",
              "proTip": "Ensure headboard foam is at least 2 inches thick and high density (28D+). If using leatherette, verify it is breathable, anti-peeling Grade A PU to prevent flaking from body oils."
            },
            {
              "id": "bed-slat-quality-spacing",
              "title": "Mattress Support Slats & Spacing",
              "description": "Measure the gap between wooden slats supporting the mattress platform.",
              "priority": "high",
              "proTip": "Slat spacing must not exceed 2.5 to 3 inches (6.5-7.5 cm). Wider gaps allow mattress coils and foam to push through, damaging the core and immediately voiding warranty."
            },
            {
              "id": "total-weight-capacity",
              "title": "Total Weight Capacity Rating",
              "description": "Verify the static and dynamic load capacity of the bed frame and center support legs.",
              "priority": "medium",
              "proTip": "A King size bed must support at least 400-500 kg (including a 50 kg mattress and occupants) and should have at least 2-3 heavy-duty central support legs reaching the floor."
            },
            {
              "id": "mattress-trial-period",
              "title": "In-Home Sleep Trial Period",
              "description": "Confirm the risk-free sleep trial duration, return shipping coverage, and refund process.",
              "priority": "high",
              "proTip": "Insist on a 30 to 100-night trial. Confirm that mattress return pickups are 100% free with no hidden restocking, sanitization, or reverse shipping fees."
            }
          ]
        },
        {
          "id": "wardrobe-closet",
          "name": "Wardrobe / Closet",
          "icon": "🚪",
          "description": "Evaluate carcass sheet durability, premium hardware brands, edge banding & depth",
          "tips": "Wardrobes are long-term built-ins. Always ask for branded, stamped plywood (IS 710 or IS 303) rather than generic commercial ply, and verify that the internal depth is at least 22 inches so your suits hang without diagonal crumpling.",
          "checklist": [
            {
              "id": "material-type-core",
              "title": "Core Material Grade (Plywood / HDHMR / MDF)",
              "description": "Identify the core board substrate used for the wardrobe carcass frame, shelves, and shutter doors.",
              "priority": "high",
              "proTip": "Opt for IS 710 Marine Grade BWP Plywood or High Density High Moisture Resistance (HDHMR) board. Never accept standard MDF or particleboard in humid climates or near bathrooms."
            },
            {
              "id": "board-brand-stamp",
              "title": "Board Manufacturer Brand & ISI Stamp",
              "description": "Look for the manufacturer brand name and official Bureau of Indian Standards (BIS) mark printed on boards.",
              "priority": "high",
              "proTip": "Trusted brands like CenturyPly, Greenply, or Action TESA print their IS 710/303 certification and batch codes every few feet. Inspect the raw boards before lamination."
            },
            {
              "id": "board-thickness-panels",
              "title": "Board Thickness (Carcass, Shutters, Backing)",
              "description": "Measure the thickness in millimeters of the side panels, internal shelves, and back sheet.",
              "priority": "high",
              "proTip": "Main carcass panels and load-bearing shelves must be 18mm thick to prevent shelf sag. Shutters should be 18-19mm, while the back panel must be at least 8-9mm (avoid 3mm sheets)."
            },
            {
              "id": "hinge-brand-soft-close",
              "title": "Hinge Brand & Soft-Close Action",
              "description": "Inspect the brand, opening degree, and soft-closing damping mechanism of the cabinet hinges.",
              "priority": "high",
              "proTip": "Insist on certified German hardware like Blum (Clip Top Blumotion) or Hettich (Sensys). These are cycle-tested for 200,000 openings and prevent heavy shutters from slamming."
            },
            {
              "id": "drawer-slides-brand",
              "title": "Drawer Slide Hardware & Load Rating",
              "description": "Check the brand and weight capacity of the drawer runner channels (telescopic vs undermount tandem).",
              "priority": "high",
              "proTip": "Opt for soft-close undermount runners (e.g., Hettich Quadro or Blum Tandem) rated for 30-45 kg. They provide 100% full extension so you can access items tucked in the back."
            },
            {
              "id": "mirror-quality-backing",
              "title": "Dressing Mirror Quality & Safety Film",
              "description": "Check the mirror glass for optical clarity, zero wave distortion, and protective shatter backing.",
              "priority": "medium",
              "proTip": "Insist on 4mm or 5mm copper-free Saint-Gobain or Asahi glass with beveled edges and a shatter-proof safety film on the back to prevent injury if cracked."
            },
            {
              "id": "locking-mechanism-brand",
              "title": "Locking Mechanism & Key Security",
              "description": "Inspect the wardrobe lock cylinders, throw bolt depth, and master key features.",
              "priority": "medium",
              "proTip": "Ensure locks have brass cylinders from reputable brands like Godrej or Yale with computerized dimple keys. Check that double doors include internal brass tower bolts."
            },
            {
              "id": "internal-layout-usable-depth",
              "title": "Internal Layout & Usable Depth",
              "description": "Measure the clear internal depth of the hanging section with doors closed.",
              "priority": "medium",
              "proTip": "The clear internal depth must be 22 to 24 inches (550-600mm). Anything less than 21 inches will crush suit jacket shoulders and coat sleeves whenever the doors shut."
            },
            {
              "id": "edge-banding-quality",
              "title": "Edge Banding Thickness & Adhesion",
              "description": "Examine the PVC edge tape along all exposed board edges for seamless bonding and clean trimming.",
              "priority": "high",
              "proTip": "Look for 1.5mm to 2mm thick PVC edge tape applied via automated hot-melt PUR edge-banding machines. Hand-glued thin 0.8mm tape easily chips and lifts within a couple of years."
            },
            {
              "id": "wardrobe-warranty",
              "title": "Board & Hardware Warranty",
              "description": "Review written warranty coverage for termite damage, board warping, and mechanical hardware failure.",
              "priority": "high",
              "proTip": "High-quality modular wardrobes offer a 10 to 25-year warranty on BWP plywood against borer/termites and delamination, plus a 5 to 10-year warranty on Blum/Hettich hinges."
            }
          ]
        },
        {
          "id": "office-chair",
          "name": "Office Chair",
          "icon": "💺",
          "description": "Target ergonomic health with lumbar adjustability, synchro tilt, gas lift & mesh tensile strength",
          "tips": "Never buy an office chair solely based on looks or thick plush cushioning. True ergonomic support comes from spine curvature alignment, adjustable arm heights to relieve neck strain, and a Class 4 gas lift that won't sink during your workday.",
          "checklist": [
            {
              "id": "lumbar-support-adjustability",
              "title": "Lumbar Support Adjustability",
              "description": "Verify whether the lumbar support cushion adjusts both up/down (height) and forward/backward (depth).",
              "priority": "high",
              "proTip": "Your lumbar support must align directly with your L1-L5 lordotic curve. Fixed lumbar curves force unnatural postures if your torso length differs even slightly from the mold."
            },
            {
              "id": "seat-height-travel",
              "title": "Seat Height Adjustment Range",
              "description": "Test the pneumatic height travel range relative to your desk height and leg length.",
              "priority": "high",
              "proTip": "The seat should adjust from 42 cm to 54 cm (16.5-21 inches), allowing your feet to rest flat on the floor with knees at a 90-degree angle and thighs horizontal."
            },
            {
              "id": "armrest-adjustability-dimensions",
              "title": "Armrest Adjustability (3D or 4D)",
              "description": "Check if armrests adjust in height, width, forward/backward depth, and pivot inward/outward.",
              "priority": "medium",
              "proTip": "Choose 3D or 4D armrests with soft PU pads. Being able to slide armrests flush with desk height prevents ulnar nerve compression and shoulder strain during typing."
            },
            {
              "id": "mesh-vs-cushion-quality",
              "title": "Mesh Tensile Strength vs Molded Foam",
              "description": "Inspect the seat material for breathability, sagging resistance, and body contouring.",
              "priority": "high",
              "proTip": "If mesh, look for Korean or German elastomeric weave (e.g., DuPont nylon blend) that springs back immediately. If foam, insist on cold-cured molded foam (55-65 kg/m³ density)."
            },
            {
              "id": "tilt-recline-mechanism",
              "title": "Synchro-Tilt & Multi-Position Lock",
              "description": "Test the recline angle, tilt-tension control knob, and tilt-lock positions.",
              "priority": "high",
              "proTip": "Opt for a synchro-tilt mechanism with a 2:1 ratio (back reclines 2 degrees for every 1 degree of seat tilt). This keeps your feet grounded while you recline to stretch your spine."
            },
            {
              "id": "wheelbase-material-casters",
              "title": "Wheelbase Material & Caster Type",
              "description": "Examine the 5-star base diameter and the caster wheel composition for smooth rolling without floor damage.",
              "priority": "medium",
              "proTip": "Choose a 680-700mm diameter base made of cast aluminum or heavy fiberglass-reinforced nylon. Look for dual-wheel PU (polyurethane) casters that won't scratch wood or tile floors."
            },
            {
              "id": "gas-lift-cylinder-class",
              "title": "Gas Lift Cylinder Class & Brand",
              "description": "Check the engraving on the pneumatic gas cylinder column to verify its safety class.",
              "priority": "high",
              "proTip": "Insist on a stamped 'Class 4' cylinder (TUV, LGA, or Samhongsa certified). Class 4 cylinders feature 2.5mm thick outer walls and withstand daily heavy cycling without sinking."
            },
            {
              "id": "weight-capacity-rating",
              "title": "Certified Weight Capacity Rating",
              "description": "Confirm the manufacturer's certified maximum user weight rating.",
              "priority": "high",
              "proTip": "Ensure the chair is certified for at least 136 kg (300 lbs) for 8+ hour continuous daily use. Heavy-duty 24/7 task chairs should be rated for 150 kg (330 lbs) or more."
            },
            {
              "id": "chair-warranty-period",
              "title": "Comprehensive Warranty Period",
              "description": "Review written warranty coverage across the tilt mechanism, gas lift cylinder, base, and mesh.",
              "priority": "medium",
              "proTip": "Top commercial ergonomic brands (Herman Miller, Steelcase, Haworth, Featherlite) provide 3 to 12-year warranties covering mechanical moving parts and gas cylinders."
            },
            {
              "id": "bifma-certification",
              "title": "ANSI/BIFMA X5.1 Ergonomic Certification",
              "description": "Check whether the chair complies with recognized international commercial furniture safety standards.",
              "priority": "high",
              "proTip": "BIFMA X5.1 compliance ensures the chair underwent severe proof load tests: 136 kg drop impact, 300 lb back pull test, and 100,000 caster cycle tests without structural failure."
            }
          ]
        }
      ]
    },
    {
      "id": "electronics",
      "name": "Electronics",
      "icon": "📱",
      "description": "Smartphones, laptops, appliances & TVs",
      "color": "#1565C0",
      "products": [
        {
          "id": "smartphone",
          "name": "Smartphone",
          "icon": "📱",
          "description": "Check display quality, processor silicon, camera sensors & warranty verification",
          "tips": "Always unbox the device right in front of the retailer or courier delivery agent. Match the 15-digit IMEI on the device screen with the retail box and tax invoice before leaving the store.",
          "checklist": [
            {
              "id": "display-panel-type",
              "title": "Display Panel Type & Refresh Rate",
              "description": "Confirm the display technology (OLED / AMOLED vs IPS LCD) and dynamic refresh rate capability.",
              "priority": "high",
              "proTip": "Look for LTPO AMOLED displays capable of 1-120Hz adaptive refresh rate and at least 1000+ nits outdoor brightness. OLED provides true blacks and superior battery efficiency."
            },
            {
              "id": "processor-model-lithography",
              "title": "Processor Chipset Model & Node",
              "description": "Verify the exact mobile platform SoC model (Snapdragon, MediaTek Dimensity, Apple A-series) and fabrication node.",
              "priority": "high",
              "proTip": "Check the exact chip model number (e.g. Snapdragon 8 Gen 3 vs 7s Gen 2). 4nm or 3nm chipsets run significantly cooler and deliver 30% longer battery runtimes than older 6nm/7nm chips."
            },
            {
              "id": "ram-storage-variant",
              "title": "RAM & Storage Variant Verification",
              "description": "Check device Settings > About to confirm you received the exact RAM and internal storage capacity you paid for.",
              "priority": "high",
              "proTip": "Verify the memory speed protocols: look for LPDDR5X RAM and UFS 4.0 (or UFS 3.1) storage. UFS 4.0 provides double the read/write speeds of UFS 2.2, drastically reducing app load times."
            },
            {
              "id": "battery-capacity-endurance",
              "title": "Battery Capacity (mAh) & Health",
              "description": "Check the battery capacity rating and initial cycle health in device diagnostics.",
              "priority": "high",
              "proTip": "Ensure battery capacity is at least 5000 mAh for modern 5G smartphones. On iPhones, verify Battery Health shows 100% Maximum Capacity right out of the box."
            },
            {
              "id": "charging-speed-wattage",
              "title": "Fast Charging Speed (Watts) & Protocol",
              "description": "Verify supported charging wattage and compatibility with standard USB Power Delivery (USB-PD).",
              "priority": "medium",
              "proTip": "Check whether the phone uses universal USB-PD / PPS charging standards or proprietary protocols (like SuperVOOC). Universal PD chargers can charge your phone, tablet, and laptop interchangeably."
            },
            {
              "id": "camera-specs-ois",
              "title": "Camera Sensor Specs & OIS",
              "description": "Verify primary sensor size, aperture, and whether Optical Image Stabilization (OIS) is present.",
              "priority": "high",
              "proTip": "Do not judge cameras merely by megapixels. A 50MP sensor with 1/1.3-inch large sensor size and hardware OIS produces vastly sharper low-light photos than a 200MP sensor with no OIS."
            },
            {
              "id": "water-resistance-ip-rating",
              "title": "Water & Dust Resistance Rating (IP)",
              "description": "Check the certified Ingress Protection (IP) rating against accidental water immersion and dust ingress.",
              "priority": "medium",
              "proTip": "Look for IP68 certification (submersible up to 1.5 meters for 30 minutes) or IP67. Be aware that splash-resistant ratings like IP54 do not protect against accidental drops in water."
            },
            {
              "id": "warranty-card-period",
              "title": "Manufacturer Warranty & Service Terms",
              "description": "Confirm the warranty duration and service coverage across motherboard, battery, and screen.",
              "priority": "high",
              "proTip": "Ensure the brand provides at least 1-year comprehensive hardware warranty and check their commitment to Android OS version updates (top brands provide 4-7 years of OS/security patches)."
            },
            {
              "id": "imei-number-match",
              "title": "IMEI Number Match with Box & Invoice",
              "description": "Dial *#06# on the phone keypad and match both IMEI numbers against the retail box sticker and tax invoice.",
              "priority": "high",
              "proTip": "All 15 digits of IMEI 1 and IMEI 2 must match identically across screen, box sticker, and invoice. Any discrepancy will cause warranty claim rejections at service centers."
            },
            {
              "id": "charger-accessories-in-box",
              "title": "Charger & In-Box Accessories Check",
              "description": "Verify whether the retail package includes a fast charger adapter, USB cable, SIM ejector tool, and case.",
              "priority": "medium",
              "proTip": "Many flagship brands no longer include power adapters in the box. Check if you need to budget an extra $30-50 / ₹2,000-3,000 for an authentic original fast charger."
            },
            {
              "id": "serial-numbered-bill",
              "title": "Tax Invoice with Serial Number & GST",
              "description": "Ensure the retailer issues an official tax invoice with the smartphone serial and IMEI numbers clearly printed.",
              "priority": "high",
              "proTip": "Handwritten bills or bills without the IMEI printed are invalid for insurance claims and brand warranty service. Confirm the dealer is an authorized brand retailer."
            },
            {
              "id": "return-exchange-policy",
              "title": "Store & Brand Return/Replacement Policy",
              "description": "Review the dead-on-arrival (DOA) replacement terms within the first 7 to 14 days.",
              "priority": "high",
              "proTip": "Confirm whether the retailer handles a 7-day direct unit replacement for manufacturing defects, or if you must take the device to an authorized service center for a DOA certificate first."
            }
          ]
        },
        {
          "id": "laptop",
          "name": "Laptop",
          "icon": "💻",
          "description": "Verify CPU generation, RAM speed, NVMe SSD protocol, display color gamut & thermal design",
          "tips": "Always boot up the laptop and run initial hardware diagnostics before parting with payment. Inspect the screen on a pure black background in a dim room to detect backlight bleed or dead pixels.",
          "checklist": [
            {
              "id": "processor-generation-model",
              "title": "Processor Generation, Architecture & Model",
              "description": "Verify the exact CPU tier, generation, core configuration (Performance vs Efficiency cores), and TDP wattage.",
              "priority": "high",
              "proTip": "Ensure you get the current or preceding CPU generation (e.g., Intel Core Ultra / 14th Gen or AMD Ryzen 8000/7000 series). Check the suffix: 'H/HS' means high performance, while 'U' means low-power battery-saving."
            },
            {
              "id": "ram-type-speed-upgrade",
              "title": "RAM Type, Clock Speed & Expandability",
              "description": "Check whether the RAM is DDR4, DDR5, or soldered LPDDR5, and if dual-channel slots are available.",
              "priority": "high",
              "proTip": "Target at least 16GB DDR5 (5200MHz+). Check if RAM is upgradable via SO-DIMM slots; if memory is soldered to the motherboard (LPDDR5), buy 16GB or 32GB upfront because you cannot upgrade it later."
            },
            {
              "id": "storage-type-protocol",
              "title": "Storage Protocol (NVMe PCIe Gen 4 vs SATA)",
              "description": "Verify the SSD interface protocol and read/write transfer speeds.",
              "priority": "high",
              "proTip": "Ensure the SSD is an NVMe M.2 PCIe Gen 4 SSD (3500-7000 MB/s read speed). Avoid any budget laptop with eMMC flash or legacy SATA SSDs (<500 MB/s)."
            },
            {
              "id": "display-resolution-panel-color",
              "title": "Display Resolution, Panel & Color Gamut",
              "description": "Confirm panel technology (IPS vs OLED), resolution, anti-glare coating, and sRGB/DCI-P3 color coverage.",
              "priority": "high",
              "proTip": "Avoid cheap 250-nit 45% NTSC panels which look washed out. Insist on 100% sRGB or 100% DCI-P3 IPS/OLED display with at least 300-400 nits brightness and 1920x1200 (16:10 aspect ratio) or higher."
            },
            {
              "id": "battery-capacity-watt-hours",
              "title": "Battery Capacity (Wh) & Fast Charging",
              "description": "Check the battery size rating in Watt-Hours (Wh) rather than vague 'all-day battery' marketing claims.",
              "priority": "high",
              "proTip": "Look for at least 50-70 Wh for ultrabooks, and 80-99 Wh for gaming or creative workstations (99.9 Wh is the maximum legal airline limit). Check if it supports 65W+ USB-C PD fast charging."
            },
            {
              "id": "build-material-chassis",
              "title": "Chassis Build Material & Hinge Rigidity",
              "description": "Inspect chassis rigidity (aluminum/magnesium alloy vs polycarbonate plastic) and one-finger hinge opening.",
              "priority": "medium",
              "proTip": "Test opening the lid with one finger; the base should stay flat on the desk without lifting. Press firmly on the center of the keyboard and lid; excessive flex indicates cheap plastic housing."
            },
            {
              "id": "keyboard-travel-backlight",
              "title": "Keyboard Key Travel & Glass Trackpad",
              "description": "Test typing comfort, key tactile feedback (1.3mm to 1.5mm travel), backlighting, and trackpad precision.",
              "priority": "medium",
              "proTip": "Ensure the keyboard features multi-level white LED backlighting and a smooth glass Precision touchpad. Tap corners of the trackpad to ensure there is no loose rattling or dead pre-travel."
            },
            {
              "id": "port-selection-thunderbolt",
              "title": "Port Selection (Thunderbolt 4 / USB 4 / HDMI)",
              "description": "Check that the laptop includes modern high-speed ports without forcing you to carry bulky dongles.",
              "priority": "medium",
              "proTip": "Look for at least one Thunderbolt 4 or USB4 Type-C port (supports 40 Gbps data, dual 4K monitors, and power delivery) along with an HDMI 2.1 port and a standard USB-A port."
            },
            {
              "id": "webcam-privacy-microphones",
              "title": "Webcam Resolution & Hardware Privacy Shutter",
              "description": "Verify webcam sensor clarity (1080p FHD vs 720p) and check for dual beam-forming array microphones.",
              "priority": "low",
              "proTip": "Avoid grainy 720p webcams. Look for a 1080p FHD webcam with IR facial recognition (Windows Hello) and a physical sliding privacy shutter for peace of mind."
            },
            {
              "id": "warranty-onsite-vs-carryin",
              "title": "Warranty Type (On-Site vs Carry-In Service)",
              "description": "Clarify whether manufacturer warranty includes in-home technician repair or requires carrying it to a service center.",
              "priority": "high",
              "proTip": "On-site warranty is vastly preferable—a certified technician comes to your home/office to swap parts. Check if an Accidental Damage Protection (ADP) add-on is available at purchase."
            },
            {
              "id": "dead-pixel-screen-test",
              "title": "Dead Pixel & Backlight Bleed Test",
              "description": "Run a full-screen solid red, green, blue, white, and black test to inspect for dead pixels and IPS glow.",
              "priority": "high",
              "proTip": "Visit a free web tool like deadpixeltest.org immediately during unboxing. Even 1 dead subpixel is ground for an immediate replacement if caught within the first 48 hours."
            },
            {
              "id": "original-os-license",
              "title": "Genuine Operating System & Bundled Software",
              "description": "Check Settings > Activation to confirm digital entitlement to a genuine Windows / macOS operating system.",
              "priority": "medium",
              "proTip": "Verify whether a lifetime Microsoft Office Home & Student license is bundled and digitally tied to your Microsoft account. Make sure it is activated before signing off delivery."
            }
          ]
        },
        {
          "id": "television",
          "name": "Television",
          "icon": "📺",
          "description": "Evaluate OLED/QLED panel contrast, native 120Hz refresh rate, HDMI 2.1 & Dolby Vision",
          "tips": "Showroom demo mode pumps brightness and saturation to unrealistic levels under harsh retail lighting. Always request the showroom salesperson to set picture mode to 'Cinema' or 'Standard' and feed standard streaming content to evaluate true contrast.",
          "checklist": [
            {
              "id": "panel-type-technology",
              "title": "Panel Technology (OLED vs QLED vs Mini-LED)",
              "description": "Determine the display panel category based on your room's ambient lighting and viewing angle needs.",
              "priority": "high",
              "proTip": "OLED delivers infinite contrast, true blacks, and wide viewing angles for dark-room viewing. Mini-LED / QLED delivers intense peak brightness (1000-2000+ nits) suited for sunlit living rooms."
            },
            {
              "id": "resolution-upscaling-engine",
              "title": "Resolution (4K vs 8K) & AI Upscaling",
              "description": "Verify native panel resolution (3840x2160 for 4K) and processing chip capabilities for upscaling HD content.",
              "priority": "high",
              "proTip": "Stick with 4K UHD. 8K TVs cost double with virtually zero native 8K content. Ensure the processor has deep-learning AI upscaling to make 1080p cable TV look crisp on a 65-inch screen."
            },
            {
              "id": "refresh-rate-vrr-gaming",
              "title": "Native Refresh Rate (60Hz vs 120Hz) & VRR",
              "description": "Distinguish between true native 120Hz hardware refresh rate and simulated software motion smoothing.",
              "priority": "high",
              "proTip": "Ignore marketing terms like 'Motion Rate 240' or 'Clear Motion 480'—these are 60Hz panels with backlight strobing. Insist on a true native 120Hz panel if you watch fast sports or game on PS5/Xbox."
            },
            {
              "id": "hdr-formats-support",
              "title": "HDR Format Support (Dolby Vision, HDR10+)",
              "description": "Check dynamic HDR metadata support to ensure compatibility with major streaming services.",
              "priority": "medium",
              "proTip": "Dolby Vision and HDR10+ adjust brightness frame-by-frame. Samsung TVs support HDR10+ but lack Dolby Vision; LG and Sony support Dolby Vision. Check your preferred streaming platform."
            },
            {
              "id": "smart-tv-operating-system",
              "title": "Smart TV Operating System & App Store",
              "description": "Evaluate the TV's operating system interface (Google TV, LG webOS, Samsung Tizen, Apple tvOS).",
              "priority": "medium",
              "proTip": "Google TV provides the widest app selection, built-in Chromecast, and personalized content discovery. Ensure the OS has at least 2-3 years of promised software and security update support."
            },
            {
              "id": "hdmi-ports-and-version",
              "title": "HDMI Port Count & HDMI 2.1 Bandwidth",
              "description": "Count the number of HDMI ports and check for 48Gbps HDMI 2.1 capabilities with eARC.",
              "priority": "high",
              "proTip": "Look for at least 4 HDMI ports with at least 2 certified HDMI 2.1 ports supporting 4K @ 120Hz, VRR (Variable Refresh Rate), ALLM, and eARC (enhanced Audio Return Channel) for soundbars."
            },
            {
              "id": "audio-output-speakers",
              "title": "Sound Output (Watts) & Dolby Atmos Support",
              "description": "Inspect built-in speaker wattage, driver configuration (e.g. 2.1 or 3.1.2 with subwoofer), and surround decoding.",
              "priority": "medium",
              "proTip": "Most slim modern TVs have weak 20W downward-firing speakers. Look for models with 40-60W sound with dedicated acoustic tweeters/subwoofer, or plan to pair the TV with a soundbar."
            },
            {
              "id": "wall-mount-vesa-compatibility",
              "title": "VESA Wall Mount Compatibility & In-Box Mount",
              "description": "Confirm the standard VESA mounting dimensions (e.g., 300x300, 400x400) and whether a wall bracket is included.",
              "priority": "medium",
              "proTip": "Clarify if the wall-mount bracket and installation service are complimentary. For swivel mounts, ensure the bracket is rated for at least double the TV's net weight."
            },
            {
              "id": "brand-warranty-panel-coverage",
              "title": "Panel & Motherboard Warranty Terms",
              "description": "Review the specific warranty duration covering the display panel, power supply board, and burn-in.",
              "priority": "high",
              "proTip": "The panel accounts for 70% of a TV's replacement cost. Look for brands offering a comprehensive 2 to 3-year panel warranty, and check whether OLED models explicitly include 5-year burn-in coverage."
            },
            {
              "id": "dead-pixel-uniformity-check",
              "title": "Dead Pixel & Grey Screen Uniformity Test",
              "description": "Inspect the display using solid white, green, red, and 5% grey full-screen test slides.",
              "priority": "high",
              "proTip": "Check for 'dirty screen effect' (DSE) and edge bleeding on a uniform 5% grey screen. If you find stuck or dead subpixels during delivery installation, refuse sign-off immediately."
            },
            {
              "id": "disable-retail-demo-mode",
              "title": "Disable Store / Demo Mode Setting",
              "description": "Ensure the TV is set to 'Home Mode' rather than 'Store / Retail Demo Mode' upon initial setup.",
              "priority": "medium",
              "proTip": "Store Mode resets picture settings to hyper-vivid every 30 minutes and runs internal promo loops that consume maximum power and accelerate OLED wear. Ensure 'Home Use' is selected."
            }
          ]
        },
        {
          "id": "washing-machine",
          "name": "Washing Machine",
          "icon": "🧺",
          "description": "Compare front-load vs top-load efficiency, direct drive inverter motor & RPM spin speeds",
          "tips": "Front-load washing machines use up to 50% less water and electricity while being gentler on fabrics compared to top-loaders. Crucially, always ensure the installation technician removes the transit shipping bolts before the first test cycle.",
          "checklist": [
            {
              "id": "machine-type-front-vs-top",
              "title": "Machine Type (Front-Load vs Top-Load)",
              "description": "Select between tumble-wash front-load and agitator/pulsator top-load designs.",
              "priority": "high",
              "proTip": "Front-loaders tumble clothes without an agitator, reducing fabric wear and drying clothes faster thanks to higher RPMs. Top-loaders are ergonomic for people with back issues who avoid bending."
            },
            {
              "id": "wash-capacity-family-size",
              "title": "Drum Capacity (kg) for Household Size",
              "description": "Select drum capacity based on family headcount and bulky linen/blanket wash requirements.",
              "priority": "high",
              "proTip": "Choose 6-7 kg for couples/singles, 8 kg for a family of 3-4, and 9-10 kg+ for larger households or heavy king-size quilts. Under-sizing causes motor strain and poor wash results."
            },
            {
              "id": "motor-technology-inverter",
              "title": "Motor Type (Inverter Direct Drive vs Belt)",
              "description": "Verify whether the motor is brushless direct-drive or traditional belt-and-pulley.",
              "priority": "high",
              "proTip": "Inverter Direct Drive (DD) motors attach directly to the drum without belts or pulleys. This reduces vibration, eliminates belt wear, operates below 54 dB, and saves up to 35% electricity."
            },
            {
              "id": "spin-speed-rpm",
              "title": "Maximum Spin Speed (RPM)",
              "description": "Check the maximum spin cycle revolutions per minute for moisture extraction.",
              "priority": "medium",
              "proTip": "Target 1200 to 1400 RPM for front-loaders (800-1000 RPM for top-loaders). Higher spin speeds extract up to 70% of moisture, drastically reducing air-drying and clothesline time."
            },
            {
              "id": "energy-star-bee-rating",
              "title": "Energy & Water Efficiency (BEE Star Rating)",
              "description": "Check official energy star efficiency labels for electricity and water consumption per cycle.",
              "priority": "high",
              "proTip": "Insist on a 5-Star BEE energy rated machine. A 5-star front-loader consumes approximately 6-8 liters of water per kg of laundry compared to 15-20 liters for non-inverter machines."
            },
            {
              "id": "wash-programs-heater",
              "title": "Wash Cycles & Built-In Water Heater",
              "description": "Verify availability of specialized fabric cycles, allergy steam care, and built-in heating coils.",
              "priority": "medium",
              "proTip": "Ensure the machine includes an internal ceramic heater capable of 60°C and 90°C wash cycles. Hot water wash dissolves tough detergent residue, kills 99.9% of dust mites, and sanitizes infant wear."
            },
            {
              "id": "drum-material-build",
              "title": "Drum & Tub Material (SS 304 Stainless Steel)",
              "description": "Inspect the inner drum surface design and material composition.",
              "priority": "high",
              "proTip": "Insist on a seamless stainless steel drum (e.g., SS 304 laser-welded with pillow-shaped perforations). Avoid plastic drums, which can crack, harbor mold, and snag delicate laces."
            },
            {
              "id": "water-inlet-pressure-valve",
              "title": "Water Inlet Type & Low-Pressure Valve",
              "description": "Check minimum water inlet pressure requirements for apartments or overhead tanks.",
              "priority": "medium",
              "proTip": "Check the operating pressure range (typically 0.3 to 10 bar). If your apartment has low gravity water pressure from an overhead tank, look for machines with a low-water-pressure sensor."
            },
            {
              "id": "child-lock-voltage-protection",
              "title": "Child Lock & Voltage Surge Protection",
              "description": "Confirm safety lock features and internal voltage fluctuation resistance.",
              "priority": "medium",
              "proTip": "Look for built-in voltage protection that safely handles 165V to 260V fluctuations without frying the sensitive electronic control board (PCB), plus a dual-button child lock."
            },
            {
              "id": "warranty-motor-vs-product",
              "title": "Split Warranty (Motor vs Full Machine)",
              "description": "Check the exact warranty breakdown between the inverter motor and the complete appliance.",
              "priority": "high",
              "proTip": "Brands routinely advertise '10-Year Warranty' in large font, which usually only applies to the motor. Ensure the comprehensive machine warranty is at least 2 to 4 years covering the PCB and pump."
            },
            {
              "id": "installation-transit-bolts",
              "title": "Free Installation & Transit Bolt Removal",
              "description": "Ensure official brand technician installation, rat-mesh attachment, and transit bolt removal.",
              "priority": "high",
              "proTip": "CRITICAL: The 4 shipping transit bolts on the back of a front-loader MUST be unscrewed before operation. Running the machine with transit bolts attached will violently throw and destroy the drum."
            },
            {
              "id": "drainage-plumbing-compatibility",
              "title": "Drainage Height & Plumbing Requirements",
              "description": "Verify whether the machine uses a pumped drain or gravity drain hose connection.",
              "priority": "medium",
              "proTip": "Front-loaders use motorized pump drainage and require the drain hose to be looped at a height of 65-100 cm off the floor to prevent water from automatically siphoning out during fills."
            }
          ]
        },
        {
          "id": "refrigerator",
          "name": "Refrigerator",
          "icon": "🧊",
          "description": "Inspect inverter compressor efficiency, net usable capacity, frost-free cooling & shelf glass",
          "tips": "Always compare 'Net Usable Storage Capacity' rather than 'Gross Volume'—gross numbers include hollow wall insulation space. Place the fridge at least 3-4 inches away from the wall to allow the condenser coils to breathe efficiently.",
          "checklist": [
            {
              "id": "refrigerator-type-door-layout",
              "title": "Refrigerator Architecture & Door Layout",
              "description": "Select the ideal configuration (Single Door, Top Mount Double Door, Bottom Mount, French Door, or Side-by-Side).",
              "priority": "high",
              "proTip": "Bottom-mount refrigerators put the fresh food section at eye level so you don't bend down 20 times a day. French door models provide wide horizontal storage for party platters and large pots."
            },
            {
              "id": "gross-vs-net-capacity",
              "title": "Gross vs Net Usable Capacity (Litres)",
              "description": "Check the certified Net Usable Capacity rating stamped on the manufacturer specification sticker.",
              "priority": "high",
              "proTip": "Gross capacity is external volume minus wall thickness. A '350L gross' fridge often has only ~290L net usable capacity. Verify the freezer-to-fridge ratio matches your dietary habits."
            },
            {
              "id": "energy-efficiency-bee-rating",
              "title": "Energy Star BEE Rating & Annual kWh",
              "description": "Review the BEE star rating label to calculate annual electricity consumption in kilowatt-hours (kWh).",
              "priority": "high",
              "proTip": "A 5-star inverter double-door refrigerator consumes under 200 kWh per year, saving substantial electricity over a 3-star model over a 10-year lifespan."
            },
            {
              "id": "compressor-type-inverter",
              "title": "Digital Inverter Compressor Technology",
              "description": "Verify whether the compressor features smart variable-speed digital inverter technology.",
              "priority": "high",
              "proTip": "Inverter compressors adjust operating speeds across multiple steps (e.g. 7 speeds) rather than cycling fully on and off. This keeps internal temperature within ±0.5°C and cuts wear."
            },
            {
              "id": "cooling-technology-frost-free",
              "title": "Cooling System (Frost-Free Multi-Airflow)",
              "description": "Check multi-directional airflow vents and automatic defrost cycles.",
              "priority": "high",
              "proTip": "Insist on Frost-Free technology with multi-air flow tower ducts on every shelf level. Look for dual cooling evaporators that isolate freezer air from fridge air to prevent odor transfer."
            },
            {
              "id": "shelf-material-toughened-glass",
              "title": "Shelf Material & Weight Rating (Toughened Glass)",
              "description": "Inspect the shelf material, spill-proof lip rims, and weight-bearing capacity.",
              "priority": "medium",
              "proTip": "Shelves must be tempered toughened glass rated to hold 100-150 kg each. Look for raised spill-proof silicone perimeter borders that prevent leaked milk or juice from dripping to lower shelves."
            },
            {
              "id": "compressor-warranty-duration",
              "title": "Compressor vs Product Warranty Duration",
              "description": "Confirm the exact warranty duration on the compressor versus the full unit and electronics.",
              "priority": "high",
              "proTip": "Leading refrigerator brands (Samsung, LG, Whirlpool) offer a 10 to 20-year warranty on the digital inverter compressor, and 1 to 2 years comprehensive coverage on the body, sensor, and PCB."
            },
            {
              "id": "stabilizer-free-operation",
              "title": "Stabilizer-Free Voltage Operation Range",
              "description": "Verify the built-in operating voltage range to determine if an external voltage stabilizer is necessary.",
              "priority": "medium",
              "proTip": "Ensure the refrigerator specifies stabilizer-free operation from 100V to 300V. If your locality experiences frequent voltage surges above 300V, invest in an external voltage stabilizer."
            },
            {
              "id": "door-finish-gasket-quality",
              "title": "Door Finish & Removable Antibacterial Gasket",
              "description": "Inspect the exterior door finish (fingerprint-resistant steel vs glass) and the magnetic door gasket.",
              "priority": "medium",
              "proTip": "Ensure the magnetic door gasket is easily removable for periodic washing. Gaskets that cannot be removed harbor black mold and bacteria, causing cool air leaks and premature compressor wear."
            },
            {
              "id": "operating-noise-level",
              "title": "Operating Noise Level (dB Rating)",
              "description": "Check the rated acoustic sound level of the compressor and circulating fan.",
              "priority": "low",
              "proTip": "Modern inverter refrigerators operate between 35 dB and 39 dB (whisper quiet). Anything over 42 dB will produce noticeable humming in open-concept kitchens or studio apartments."
            }
          ]
        }
      ]
    },
    {
      "id": "automobiles",
      "name": "Automobiles",
      "icon": "🚗",
      "description": "Cars, bikes & pre-delivery inspections",
      "color": "#E65100",
      "products": [
        {
          "id": "new-car",
          "name": "New Car",
          "icon": "🚘",
          "description": "Conduct thorough pre-delivery inspection (PDI), verify pricing transparency & VIN decode",
          "tips": "Never sign the registration documents or pay the final balance until you conduct a rigorous Pre-Delivery Inspection (PDI) in broad daylight at the dealership stockyard. Once registered with the RTO, the car is legally yours, flaws and all.",
          "checklist": [
            {
              "id": "price-breakdown-ex-showroom",
              "title": "Ex-Showroom vs On-Road Price Breakdown",
              "description": "Demand an itemized price sheet separating statutory taxes from dealership add-ons and handling fees.",
              "priority": "high",
              "proTip": "Illegal dealer charges like 'Logistics / Handling / Depot Charges' (₹10,000-30,000) have been repeatedly declared unlawful by Supreme Court and transport departments. Refuse to pay them."
            },
            {
              "id": "insurance-terms-addons",
              "title": "Insurance Details & Add-on Covers",
              "description": "Compare dealership insurance quotes against online insurers for the identical IDV and add-on covers.",
              "priority": "high",
              "proTip": "Dealerships often inflate insurance premiums by 30-50%. You have the legal right to purchase insurance outside. Ensure your policy includes Zero Depreciation, Engine Protect, and Return to Invoice."
            },
            {
              "id": "accessories-genuine-markup",
              "title": "Accessories Pricing (Genuine vs Dealer Bundles)",
              "description": "Scrutinize the mandatory accessories package forced by the sales team.",
              "priority": "medium",
              "proTip": "Dealerships routinely bundle ₹25,000 worth of basic mud flaps, floor mats, and perfume at 3x markup. Insist on choosing only the specific genuine OEM accessories you actually want."
            },
            {
              "id": "delivery-timeline-commitment",
              "title": "Written Delivery Timeline & Price Lock",
              "description": "Obtain a written booking docket stating the expected delivery date and price protection clause.",
              "priority": "high",
              "proTip": "Ensure the booking receipt explicitly states whether the agreed price is locked against future manufacturer price hikes before delivery, and the exact refund timeline if delayed."
            },
            {
              "id": "pdi-daylight-inspection",
              "title": "Pre-Delivery Inspection (PDI) in Daylight",
              "description": "Conduct an exhaustive inspection in open daylight before vehicle registration and before releasing payment.",
              "priority": "high",
              "proTip": "Never accept a PDI inside a dimly lit dealer basement or under artificial showroom spotlights. Bring a microfiber cloth, flashlight, and tyre gauge to examine every surface under bright sunlight."
            },
            {
              "id": "vin-chassis-number-decode",
              "title": "Chassis & VIN Number Manufacturing Month",
              "description": "Decode the 17-digit Vehicle Identification Number (VIN) to verify the exact manufacturing month and year.",
              "priority": "high",
              "proTip": "Unscrupulous dealers may push 6 to 9-month-old unsold inventory. Decode the 10th and 19th character of the VIN to confirm the car was manufactured within the last 30-60 days."
            },
            {
              "id": "paint-quality-transit-damage",
              "title": "Paint Quality & Touch-Up Inspection",
              "description": "Inspect body panels at acute angles for overspray, color mismatch, transit scratches, or repainting.",
              "priority": "high",
              "proTip": "Run your fingers along door sills, bumper edges, and wheel arches. If rough texture or paint ridges are felt, the car may have suffered in-transit damage and received an unauthorized dealer repaint."
            },
            {
              "id": "panel-gap-consistency",
              "title": "Panel Gap Consistency & Rubber Beadings",
              "description": "Check the symmetry of shut lines between bonnet, headlights, doors, and boot lid.",
              "priority": "high",
              "proTip": "Panel gaps should be completely uniform (3mm to 4mm) across both left and right sides. Uneven gaps or crooked door latches indicate poor assembly alignment or accidental transit impacts."
            },
            {
              "id": "spare-tire-and-tools",
              "title": "Spare Tire, Jack & Toolkit Check",
              "description": "Inspect the boot well to confirm the presence and condition of the spare wheel and emergency tools.",
              "priority": "medium",
              "proTip": "Confirm the spare wheel tire brand matches the other 4 tyres and check if it is a full-size alloy or steel space-saver. Verify the jack, wheel spanner, tow hook, and reflective hazard triangle."
            },
            {
              "id": "standard-warranty-terms",
              "title": "Standard Manufacturer Warranty Terms",
              "description": "Review the factory warranty duration in years and kilometers, plus terms on battery and consumables.",
              "priority": "high",
              "proTip": "Verify the standard warranty (typically 2-3 years or 100,000 km). Ensure the warranty service booklet has the dealer stamp and vehicle VIN recorded accurately."
            },
            {
              "id": "service-schedule-costs",
              "title": "Periodic Service Schedule & Maintenance Costs",
              "description": "Review the required maintenance intervals (e.g. 10,000 km or 1 year) and free service coupon terms.",
              "priority": "medium",
              "proTip": "Clarify what 'Free Services' cover—they generally waive only labor charges for inspection, while engine oil, oil filter, and consumables remain chargeable to the owner."
            },
            {
              "id": "extended-warranty-options",
              "title": "Extended Warranty & 24/7 Roadside Assistance",
              "description": "Evaluate purchasing extended warranty coverage up to 5 to 7 years directly from the manufacturer.",
              "priority": "high",
              "proTip": "Always opt for the maximum available factory extended warranty (e.g., 5-7 years). Modern cars with complex dual-clutch transmissions (DCT) or touchscreen electronics are expensive to repair."
            },
            {
              "id": "rto-charges-breakdown",
              "title": "RTO Charges, Road Tax & FASTag Breakdown",
              "description": "Verify official state road tax receipts, registration charges, and FASTag balance allocation.",
              "priority": "high",
              "proTip": "Match the road tax receipt amount against the official state Parivahan portal calculation. Dealers often round up RTO fees by ₹5,000-15,000 for unspecified 'agent charges'."
            },
            {
              "id": "fuel-type-variant-confirmation",
              "title": "Fuel Type & Engine Variant Confirmation",
              "description": "Double-check the engine bay specification plate and fuel lid sticker for correct fuel and transmission spec.",
              "priority": "high",
              "proTip": "Check the fuel cap label (Petrol / Diesel / Hybrid / EV) and emission standard badge (e.g., BS6 Phase 2 / Euro 6d / OBD-II compliant). Check engine oil and coolant levels before leaving."
            },
            {
              "id": "test-drive-specific-unit",
              "title": "Odometer Check & Yard Test Drive",
              "description": "Check the vehicle's odometer reading and perform a short test drive of the exact assigned chassis unit.",
              "priority": "high",
              "proTip": "A brand-new car should have an odometer reading below 30-50 km (factory testing and transporter loading). An odometer showing 150+ km suggests the car was used for customer joyrides or driven via road."
            }
          ]
        },
        {
          "id": "used-car",
          "name": "Used Car",
          "icon": "🚙",
          "description": "Detect accidental damage, odometer rollbacks, flood immersion & verify legal title",
          "tips": "Never buy a pre-owned car without hiring an independent third-party mechanic with an OBD-II scanner. Always verify ownership history, hypothecation status, and challans on the central transport database before transferring money.",
          "checklist": [
            {
              "id": "service-history-records",
              "title": "Authorized Service History & Maintenance Logs",
              "description": "Obtain official authorized dealership service records showing dates, odometer logs, and replaced parts.",
              "priority": "high",
              "proTip": "Call the brand's authorized service center with the VIN to request full service history. Consistent, timely scheduled oil changes and brake services indicate a well-maintained vehicle."
            },
            {
              "id": "accident-insurance-claims",
              "title": "Insurance Claim History & Accidental Records",
              "description": "Check the car's insurance policy renewal history to verify the No Claim Bonus (NCB) percentage.",
              "priority": "high",
              "proTip": "If the NCB is 0% on a multi-year-old car, an insurance claim was filed recently. Ask the insurer for the claim assessment report to determine whether it was a fender bender or structural chassis damage."
            },
            {
              "id": "odometer-tampering-ecu",
              "title": "Odometer Tampering & ECU Mileage Verification",
              "description": "Check whether the digital cluster odometer reading has been rolled back to inflate resale value.",
              "priority": "high",
              "proTip": "A mechanic should plug an OBD-II scanner into the ECU/ABS module to read internal wheel speed sensor logs, which often reveal the true mileage even if the instrument cluster was digitally rolled back."
            },
            {
              "id": "engine-oil-under-hood",
              "title": "Engine Oil Condition & Under-Hood Leaks",
              "description": "Pull the engine oil dipstick, check under the oil filler cap, and inspect head gaskets for seepage.",
              "priority": "high",
              "proTip": "Milky, frothy 'mayonnaise' under the oil filler cap indicates a blown head gasket mixing coolant with engine oil. Dark, thick sludge indicates prolonged deferred maintenance."
            },
            {
              "id": "tire-tread-dot-code",
              "title": "Tire Tread Depth & DOT Age Codes",
              "description": "Inspect tire tread wear uniformity and decode the 4-digit DOT manufacturing week/year on sidewalls.",
              "priority": "medium",
              "proTip": "Tire tread depth should exceed 3mm (use a coin test). Ensure the DOT code (e.g. '2421' = 24th week of 2021) matches across all tyres. Uneven inner shoulder wear signals severe suspension or alignment faults."
            },
            {
              "id": "battery-health-voltage",
              "title": "Battery Age, Cranking Voltage & Health",
              "description": "Check the battery manufacturing date sticker and test resting vs cranking voltage.",
              "priority": "medium",
              "proTip": "A healthy 12V battery shows 12.6V resting and should not drop below 9.6V during engine cranking. If the battery is older than 3-4 years, budget ₹5,000-8,000 for immediate replacement."
            },
            {
              "id": "ac-cooling-performance",
              "title": "Air Conditioning & Heater Core Performance",
              "description": "Test the AC cooling speed, compressor clutch engagement, blower speeds, and dual-zone climate controls.",
              "priority": "medium",
              "proTip": "Set AC to maximum cold with engine idling; vent temperature should drop below 8-10°C within 3 minutes. Hissing noises or musty odors suggest evaporator coil leaks or clogged cabin filters."
            },
            {
              "id": "electrical-systems-accessories",
              "title": "Electricals, Power Windows & Warning Lights",
              "description": "Test every power window, motorized side mirror, sunroof mechanism, and infotainment touchscreen.",
              "priority": "medium",
              "proTip": "Turn the ignition to ON without starting the engine: the Check Engine, ABS, and Airbag lights must illuminate. Once the engine starts, ALL warning lights must extinguish within 3 seconds."
            },
            {
              "id": "paint-magnet-putty-test",
              "title": "Repaint & Body Putty Check (Paint Gauge / Magnet)",
              "description": "Inspect body panels with a digital coating thickness gauge or magnet to detect heavy Bondo/putty layers.",
              "priority": "high",
              "proTip": "Original factory automotive paint measures 90 to 140 microns. Readings exceeding 250-400 microns indicate body filler and post-accident repainting. Check apron and pillar weld spots."
            },
            {
              "id": "ownership-transfer-documents",
              "title": "Original Ownership Transfer Forms (29 & 30)",
              "description": "Ensure the seller has signed valid RTO Form 29 and 30 ownership transfer dockets.",
              "priority": "high",
              "proTip": "Confirm the seller is the registered owner listed on the RC book (avoid jumping titles through middlemen). Both owner signatures on transfer forms must match the original signature on RTO records."
            },
            {
              "id": "bank-noc-hypothecation",
              "title": "Bank NOC & Loan Hypothecation Clearance",
              "description": "Verify whether the vehicle was financed and ensure Form 35 with a valid Bank NOC is in hand.",
              "priority": "high",
              "proTip": "If the RC shows 'Hypothecated to [Bank]', you cannot transfer ownership without an official No Objection Certificate (NOC) and Form 35 from the bank certifying zero outstanding loan balance."
            },
            {
              "id": "puc-emission-certificate",
              "title": "Pollution Under Control (PUC) Certificate",
              "description": "Verify that the car has an active, valid government-certified PUC emission certificate.",
              "priority": "medium",
              "proTip": "A valid PUC is legally mandatory for RTO ownership transfer. High hydrocarbon or carbon monoxide readings indicate engine misfiring, worn piston rings, or a failing catalytic converter."
            },
            {
              "id": "rc-verification-portal",
              "title": "Parivahan RC Verification & Challan Search",
              "description": "Check the central Parivahan / mParivahan portal for pending traffic challans, blacklisting, or theft reports.",
              "priority": "high",
              "proTip": "Check for unpaid traffic violation challans or pending court notices against the registration number. Unpaid challans must be settled by the seller before the RTO will process transfer papers."
            },
            {
              "id": "insurance-validity-transfer",
              "title": "Insurance Policy Validity & Transfer Terms",
              "description": "Verify the remaining validity of comprehensive insurance and initiate policy transfer within 14 days.",
              "priority": "medium",
              "proTip": "Under Section 157 of the Motor Vehicles Act, the buyer must apply to the insurance company to transfer the policy within 14 days of RC transfer, or all third-party and own-damage claims become void."
            }
          ]
        },
        {
          "id": "two-wheeler",
          "name": "Two-Wheeler (Bike/Scooter)",
          "icon": "🏍️",
          "description": "Inspect motorcycle/scooter chassis, brake lines, 5-year insurance package & PDI checks",
          "tips": "Always insist on taking delivery during daytime hours. Two-wheelers are shipped stacked in carrier trucks and are particularly susceptible to handlebar misalignment, mirror bracket scratches, and disc brake warping.",
          "checklist": [
            {
              "id": "price-breakdown-ex-showroom",
              "title": "Ex-Showroom vs On-Road Price Transparency",
              "description": "Verify itemized charges for road tax, registration, mandatory insurance, and optional accessories.",
              "priority": "high",
              "proTip": "Dealers often add ₹1,500-3,000 for helmet, side stand, or seat covers under 'mandatory delivery kit'. Stand your ground: only the ex-showroom, RTO tax, and basic insurance are legally mandatory."
            },
            {
              "id": "chassis-engine-number-match",
              "title": "Chassis & Engine Number Matching",
              "description": "Physically read the stamped number on the bike's steering headstock and engine casing.",
              "priority": "high",
              "proTip": "Match the stamped alphanumeric characters on the vehicle against the tax invoice and insurance cover note. Even a single character typo like '0' instead of 'O' will stall RTO registration."
            },
            {
              "id": "daylight-pdi-checklist",
              "title": "Daylight Pre-Delivery Inspection (PDI)",
              "description": "Conduct a 360-degree walkaround in open sunlight before signing the delivery acceptance receipt.",
              "priority": "high",
              "proTip": "Check for oil weeping around fork seals, engine crankcase gaskets, and rear monoshock. Inspect exhaust pipe header chrome for blue heat-discoloration indicative of prolonged high-rev idling."
            },
            {
              "id": "paint-body-fairing-inspection",
              "title": "Paint Finish, Fiber Fairing & Tank Inspection",
              "description": "Inspect the fuel tank, front mudguard, side cowls, and grab rail for clearcoat scratches or stress cracks.",
              "priority": "high",
              "proTip": "Gently wiggle plastic side fairings and headlamp cowls. Loose mounting tabs or mismatched panel seams indicate rough transit strapping on transporter trucks."
            },
            {
              "id": "tire-brand-and-condition",
              "title": "Tire Brand, Tread & Wheel Truing",
              "description": "Check tire brand, directional rotation arrow, air pressure, and spoke/alloy wheel trueness.",
              "priority": "medium",
              "proTip": "Spin both front and rear wheels on the center stand; the wheel rims must spin completely true without lateral wobble. Check for MRF, CEAT, or TVS Eurogrip tread freshness."
            },
            {
              "id": "electrical-systems-console",
              "title": "Electricals, Headlamps, Horn & Console",
              "description": "Test the high/low beam, indicators, hazard lights, brake switch, horn, and digital instrument display.",
              "priority": "high",
              "proTip": "Test the engine kill switch and side-stand engine inhibitor sensor (the engine should immediately cut off if gear is engaged while side-stand is down)."
            },
            {
              "id": "warranty-handbook-coupons",
              "title": "Manufacturer Warranty Card & Service Coupons",
              "description": "Confirm the warranty booklet contains stamped coupons for free scheduled periodic maintenance.",
              "priority": "high",
              "proTip": "Standard warranties span 5 years or 50,000-75,000 km. Ensure the dealer stamps the booklet and registers your mobile number on the brand's server for warranty validation."
            },
            {
              "id": "service-schedule-intervals",
              "title": "Service Schedule Intervals & Oil Change Timeline",
              "description": "Clarify the first service milestone (typically 500-750 km or 30 days) and oil break-in rules.",
              "priority": "medium",
              "proTip": "The first 1,000 km run-in period is critical for seating engine piston rings. Adhere strictly to the recommended speed cap (typically <50-60 km/h) and avoid aggressive acceleration."
            },
            {
              "id": "rto-road-tax-hsrp",
              "title": "RTO Registration & High Security Number Plate (HSRP)",
              "description": "Confirm road tax payment receipts, permanent registration timeline, and laser-etched HSRP plates.",
              "priority": "high",
              "proTip": "It is illegal to ride a brand new vehicle on the road with merely 'Applied For / A/F' paper plates. Ensure the permanent laser-branded HSRP plate is riveted onto the bike prior to delivery."
            },
            {
              "id": "insurance-tenure-package",
              "title": "Mandatory 5-Year Insurance Package Details",
              "description": "Verify the 5-year insurance composition (1-year Own Damage + 5-year Third Party liability).",
              "priority": "high",
              "proTip": "Ensure the insurance policy includes mandatory Personal Accident (PA) cover for the owner-driver (₹15 Lakh coverage) unless you already maintain a separate standalone general PA policy."
            },
            {
              "id": "accessories-pricing-helmets",
              "title": "Accessories Pricing & ISI/DOT Certified Helmet",
              "description": "Review pricing for crash guards, saree guards, center stands, and confirm a certified helmet is provided.",
              "priority": "medium",
              "proTip": "By law in most states, the vehicle manufacturer/dealer must supply one Bureau of Indian Standards (BIS/ISI) certified helmet matching consumer safety standards free with every new two-wheeler."
            },
            {
              "id": "fuel-efficiency-claim-verification",
              "title": "Fuel Efficiency Expectations vs Claimed Mileage",
              "description": "Understand realistic real-world fuel economy (km/l) versus lab test certification figures.",
              "priority": "medium",
              "proTip": "Real-world city mileage is typically 20-25% lower than ARAI/WMTC certified figures due to stop-and-go traffic and payload. Mileage will improve noticeably after the first engine oil change."
            }
          ]
        }
      ]
    },
    {
      "id": "home-interior",
      "name": "Home & Interior",
      "icon": "🏠",
      "description": "Modular kitchen, paints, tiles & decor",
      "color": "#6A1B9A",
      "products": [
        {
          "id": "paint",
          "name": "Paint",
          "icon": "🎨",
          "description": "Evaluate VOC levels, wall putty preparation, sheen levels & coverage per litre",
          "tips": "80% of paint durability depends on thorough wall surface preparation, not the liquid in the bucket. Never let painters apply expensive topcoat emulsion over loose, unprimed putty or damp walls.",
          "checklist": [
            {
              "id": "brand-and-shade-code",
              "title": "Brand Name, Product Tier & Computerized Shade Code",
              "description": "Verify the manufacturer brand, exact product tier (economy vs premium vs luxury), and computerized color formula code.",
              "priority": "high",
              "proTip": "Ensure all cans share the exact same computerized tinting batch code. Save the shade formula code (e.g., Asian Paints Royale 7843) for touch-ups years later."
            },
            {
              "id": "paint-type-formulation",
              "title": "Paint Formulation (Emulsion vs Enamel vs Distemper)",
              "description": "Check whether the paint is 100% acrylic interior emulsion, oil-based enamel, or PU wall coating.",
              "priority": "high",
              "proTip": "Use 100% acrylic emulsion for living rooms and bedrooms. For kitchens and high-moisture bathrooms, choose scrubbable, cross-linking acrylic emulsions with anti-fungal bactericides."
            },
            {
              "id": "finish-sheen-type",
              "title": "Sheen Level (Matte vs Satin vs High Gloss)",
              "description": "Select the finish level best suited to wall surface smoothness and desired light reflectivity.",
              "priority": "medium",
              "proTip": "Matte finishes hide minor undulations on uneven plaster walls but are harder to scrub. Satin/Soft Sheen (15-25% sheen) provides the ideal balance of wipeability and elegance."
            },
            {
              "id": "number-of-coats-included",
              "title": "Specified Number of Coats (Primer + 2 Topcoats)",
              "description": "Ensure the contractor contract explicitly specifies 1 coat of primer plus a minimum of 2 full coats of topcoat emulsion.",
              "priority": "high",
              "proTip": "Never accept a single coat of emulsion, even over existing paint. Two thin coats are essential for uniform film thickness, true color saturation, and scrub resistance."
            },
            {
              "id": "wall-preparation-putty-primer",
              "title": "Wall Preparation (Putty Sanding & Acrylic Primer)",
              "description": "Verify the full multi-step surface preparation process: scraping, moisture checking, 2 coats of putty, and priming.",
              "priority": "high",
              "proTip": "Check wall moisture with a protimeter (must be below 12%). Putty must be sanded smooth with 180-grit then 320-grit paper, and wiped clean of dust before the primer coat."
            },
            {
              "id": "coverage-area-per-litre",
              "title": "Coverage Area per Litre & Dilution Ratio",
              "description": "Verify the manufacturer's certified coverage rate (sq. ft. per litre) and adhere strictly to water dilution limits.",
              "priority": "medium",
              "proTip": "Quality acrylic emulsions cover 120-140 sq. ft. per litre for 2 coats. Never let painters over-dilute paint with excess water beyond the 30-40% manufacturer specification."
            },
            {
              "id": "warranty-peeling-fading",
              "title": "Manufacturer Performance Warranty",
              "description": "Review written warranty coverage against flaking, peeling, efflorescence, and premature fading.",
              "priority": "high",
              "proTip": "Luxury exterior and interior paints (e.g. Asian Paints Royale / Ultima Protek, Berger Silk) offer 5 to 10-year performance warranties when applied through authorized painting services."
            },
            {
              "id": "voc-level-green-certification",
              "title": "VOC Levels & Green Guard Certification",
              "description": "Confirm that the paint is certified Low-VOC or Zero-VOC to safeguard indoor air quality and eliminate toxic fumes.",
              "priority": "medium",
              "proTip": "Choose paints with VOC levels below 50 grams per litre (conforming to Green Seal GS-11 or LEED v4.1 criteria) to prevent respiratory irritation and chemical off-gassing."
            },
            {
              "id": "labor-charges-and-timeline",
              "title": "Labor Contract, Masking & Timeline Milestones",
              "description": "Clarify whether masking tape, floor protective sheets, ceiling scaffolding, and post-painting cleanup are included.",
              "priority": "high",
              "proTip": "Ensure the contractor covers your furniture and marble/tile floors with 50-micron polythene masking film. Retain 15-20% payment until final walkthrough under warm lighting."
            },
            {
              "id": "touch-up-policy-leftover-cans",
              "title": "Touch-Up Policy & Leftover Paint Cans",
              "description": "Ensure at least 1-2 litres of properly sealed leftover paint is kept in airtight plastic containers for future patch repairs.",
              "priority": "low",
              "proTip": "Store leftover tinted paint in a tightly sealed glass jar or airtight can away from direct sunlight. Wall nail holes and minor scuffs can be touched up seamlessly within the first 3 years."
            }
          ]
        },
        {
          "id": "tiles-flooring",
          "name": "Tiles & Flooring",
          "icon": "🧱",
          "description": "Inspect vitrified tile water absorption, anti-skid ratings, caliber consistency & epoxy grouting",
          "tips": "Always open 3-4 random boxes from the shipment and place tiles edge-to-edge on a flat surface to check for diagonal warpage (banana effect). Make sure all boxes share the exact same 'Batch / Shade Run Number'.",
          "checklist": [
            {
              "id": "tile-material-body",
              "title": "Tile Material (Double-Charged Vitrified vs Glazed vs Ceramic)",
              "description": "Verify whether the tile body is full-body/double-charge vitrified, glazed porcelain (GVT), or basic ceramic.",
              "priority": "high",
              "proTip": "For high-traffic living rooms and hallways, Double-Charge Vitrified tiles or Full-Body Porcelain have a 3-4mm top wear layer that never wears off even after decades of heavy foot traffic."
            },
            {
              "id": "tile-thickness-structural",
              "title": "Tile Structural Thickness (mm)",
              "description": "Measure the edge thickness of the tile slab to ensure structural crack resistance under heavy point loads.",
              "priority": "high",
              "proTip": "Floor tiles should be at least 9mm to 12mm thick for standard residential slabs (600x1200mm or 800x1600mm). Wall tiles can be 7-8mm, but thin wall tiles must never be laid on floors."
            },
            {
              "id": "anti-skid-rating-r-value",
              "title": "Anti-Skid Coefficient & R-Rating",
              "description": "Check the slip resistance rating, particularly for wet zones like bathrooms, balconies, and kitchens.",
              "priority": "high",
              "proTip": "Insist on R10 or R11 anti-skid matte tiles (or Pendulum Test Value 36+) for bathroom floors. High-gloss polished mirror vitrified tiles become dangerously slick when wet with soap or water."
            },
            {
              "id": "water-absorption-rate",
              "title": "Water Absorption Rate (< 0.05%)",
              "description": "Verify the certified water absorption percentage of the tile body.",
              "priority": "high",
              "proTip": "True vitrified porcelain tiles have a water absorption rate of less than 0.05% (tested under ISO 10545-3). Ceramic tiles absorb 3-10% water, making them prone to dampness, stains, and cracking."
            },
            {
              "id": "shade-variation-batch-lot",
              "title": "Shade & Batch Lot Number Consistency",
              "description": "Check the printed Lot / Batch Number on every single box to ensure 100% color and tone uniformity.",
              "priority": "high",
              "proTip": "Tile kilns produce subtle color shifts between batches. If you mix Box Lot #102 with Lot #103, your finished floor will have noticeable mismatched tile patches. Reject mixed lot deliveries."
            },
            {
              "id": "grout-type-and-color",
              "title": "Grout Type (Epoxy vs Cementitious)",
              "description": "Select the appropriate grout formulation and color shade for joint filling.",
              "priority": "medium",
              "proTip": "Always use two-part Epoxy Resin Grout (e.g., Laticrete or Roff) for bathroom, kitchen, and balcony joints. Standard cement grout absorbs water, shrinks, turns black, and develops mold."
            },
            {
              "id": "laying-charges-spacers-adhesive",
              "title": "Laying Charges, Tile Spacers & Polymer Adhesive",
              "description": "Ensure the mason uses calibrated plastic tile spacers (2-3mm) and polymer-modified tile adhesive.",
              "priority": "high",
              "proTip": "Large format vitrified tiles (e.g. 2x4 ft or larger) must NOT be laid with plain cement slurry—they require C2TE polymer tile adhesive (like MYK Laticrete) and leveling clips to prevent hollow sounds."
            },
            {
              "id": "wastage-percentage-order",
              "title": "Wastage Percentage Buffer (Order 10-15% Extra)",
              "description": "Calculate the exact square footage required and include a buffer for diagonal cuts, breakage, and future repairs.",
              "priority": "medium",
              "proTip": "Order 10% extra for straight laying layouts, and 15% extra for herringbone or 45-degree diagonal patterns. Keep 1 sealed box in storage because finding an identical match years later is nearly impossible."
            },
            {
              "id": "manufacturer-warranty",
              "title": "Manufacturer Warranty & Warping Tolerances",
              "description": "Review manufacturer guarantees regarding surface glazing defects, pinholes, and dimensional curvature.",
              "priority": "medium",
              "proTip": "Check that the tiles meet EN 14411 / ISO 13006 international standards for edge straightness (deviation < 0.2%) and surface flatness."
            },
            {
              "id": "brand-and-grade-certification",
              "title": "Brand Name & Grade A / Premium Stamp",
              "description": "Inspect the box stamping to ensure you received First Quality / Premium Grade tiles.",
              "priority": "high",
              "proTip": "Tile manufacturers classify tiles into Grade 1 (Premium / Standard), Grade 2 (Commercial / Seconds), and Grade 3 (Rejects). Ensure the box label explicitly states 'Grade A' or 'Premium Quality'."
            }
          ]
        },
        {
          "id": "modular-kitchen",
          "name": "Modular Kitchen",
          "icon": "🍳",
          "description": "Inspect waterproof sink cabinets, soft-close hardware, 18mm BWP ply & chimney suction",
          "tips": "The kitchen is your home's highest-stress zone, combining boiling water, hot oil, spices, and heavy cookware. Never cut corners on the sink carcass material—insist on 100% waterproof materials and German soft-close hinges.",
          "checklist": [
            {
              "id": "carcass-material-type",
              "title": "Carcass Core Material (BWP Plywood vs HDHMR vs MDF)",
              "description": "Identify the base board material used for the structural cabinet boxes, especially under wet sink zones.",
              "priority": "high",
              "proTip": "Use 100% Boiling Water Proof (IS 710 BWP) Marine Grade Plywood or High Density High Moisture Resistance (HDHMR) board. Never allow MDF or particleboard anywhere near kitchen wet zones."
            },
            {
              "id": "carcass-brand-and-thickness",
              "title": "Carcass Brand & 18mm Calibrated Thickness",
              "description": "Verify the board manufacturer brand and ensure structural panels are 18mm thick calibrated boards.",
              "priority": "high",
              "proTip": "Insist on 18mm calibrated plywood (e.g. CenturyPly or Greenply) with 0.8mm internal white laminate. Calibrated ply ensures uniform thickness across the entire sheet so hinges fit tight."
            },
            {
              "id": "shutter-material-and-finish",
              "title": "Shutter Finish (Acrylic vs PU vs Laminate)",
              "description": "Select the shutter exterior face finish based on scratch resistance, UV stability, and maintenance.",
              "priority": "high",
              "proTip": "High-gloss Acrylic gives a stunning glass-like finish but can show fingerprints. 1mm High-Pressure Anti-Fingerprint Matte Laminate or PU lacquer offers superior scratch durability."
            },
            {
              "id": "hinge-brand-and-type",
              "title": "Hinge Brand & Soft-Close Rating (Blum / Hettich)",
              "description": "Inspect the brand, opening angle, and integrated soft-close damping cylinders on all cabinet doors.",
              "priority": "high",
              "proTip": "Demand authentic Blum (Blumotion) or Hettich (Sensys) clip-on hinges with nickel plating. They are salt-spray tested against corrosion and rated for 200,000 silent closures."
            },
            {
              "id": "channel-drawer-slides-brand",
              "title": "Drawer System Hardware & Weight Capacity",
              "description": "Inspect drawer runners (e.g. Blum Antaro/Legrabox or Hettich InnoTech/Atira tandem boxes).",
              "priority": "high",
              "proTip": "Opt for double-walled steel tandem drawer boxes rated for 30 kg to 50 kg dynamic weight. They pull out 100% smoothly even when fully loaded with cast-iron cookware and heavy spice jars."
            },
            {
              "id": "countertop-material-slab",
              "title": "Countertop Material (Granite vs Quartz vs Porcelain)",
              "description": "Evaluate countertop resistance to hot pans, turmeric/lemon acid stains, and scratch resistance.",
              "priority": "high",
              "proTip": "South Indian Black Granite (e.g., Jet Black or Telephone Black) is virtually indestructible, resisting 400°C heat and lemon acid. Engineered Quartz is gorgeous but can scorch above 150°C."
            },
            {
              "id": "hardware-mechanism-warranty",
              "title": "Hardware Mechanism Warranty (10 to 25 Years)",
              "description": "Confirm the written manufacturer warranty on all hinges, drawer channels, gas lifts, and corner carousels.",
              "priority": "high",
              "proTip": "Original Blum and Hettich hardware comes with a 10-year to lifetime mechanical performance warranty. Request the official warranty certificate from the modular kitchen vendor."
            },
            {
              "id": "skirting-and-edge-banding",
              "title": "PVC Skirting & 2mm PUR Hot-Melt Edge Banding",
              "description": "Inspect bottom cabinet skirting and edge tape bonding around all shutter edges.",
              "priority": "high",
              "proTip": "Insist on 100mm waterproof PVC or aluminum skirting with silicone gasket at the base to prevent water from mopping creeping underneath. Shutters must use 2mm PUR hot-melt edge banding."
            },
            {
              "id": "chimney-brand-suction-power",
              "title": "Chimney Brand, Suction (m³/hr) & Auto-Clean",
              "description": "Check kitchen chimney air extraction capacity, filter type, and thermal auto-clean features.",
              "priority": "high",
              "proTip": "For Indian frying and heavy cooking, ensure suction power is at least 1200 to 1500 m³/hr with curved baffle filters or filterless auto-clean technology, paired with a 6-inch rigid exhaust duct."
            },
            {
              "id": "design-approval-cad-drawings",
              "title": "Signed 2D/3D CAD Drawings & Clearances",
              "description": "Ensure detailed 2D architectural CAD drawings with exact millimeter elevations are approved and signed.",
              "priority": "high",
              "proTip": "Verify the 'Golden Kitchen Triangle' clearance (refrigerator, sink, hob should be 4 to 9 feet apart). Confirm overhead cabinet height is 20-22 inches above the countertop for headroom safety."
            },
            {
              "id": "timeline-and-penalty-clause",
              "title": "Handover Timeline with Delay Penalty Clause",
              "description": "Include a written milestone schedule with a contractual per-day penalty clause for handover delays.",
              "priority": "high",
              "proTip": "Incorporate a clause deducting 0.5% of the total project value per week of unexcused handover delay. Reputable turnkey modular kitchen studios agree to standard 45-day delivery commitments."
            },
            {
              "id": "sink-waterproof-treatment",
              "title": "Under-Sink Waterproofing (SS 304 Tray / PVC Foam)",
              "description": "Inspect the specialized water protection lining installed beneath the kitchen sink cabinet.",
              "priority": "high",
              "proTip": "The under-sink cabinet carcass should be made of 100% waterproof PVC foam board (WPC) or lined with a custom-formed SS 304 stainless steel drip tray to catch plumbing leaks."
            }
          ]
        },
        {
          "id": "curtains-blinds",
          "name": "Curtains & Blinds",
          "icon": "🪟",
          "description": "Check fabric GSM, blackout opacity, motorized tracks & UV resistance",
          "tips": "Always measure curtain length from the hanging rod/track all the way down to 1 inch above the floor (or floor-puddling length) with a steel measuring tape. Never use a flexible tailor's tape which stretches and causes uneven hems.",
          "checklist": [
            {
              "id": "fabric-fiber-type",
              "title": "Fabric Composition (Cotton vs Polyester vs Linen vs Silk)",
              "description": "Verify the textile fiber blend and choose based on light filtration, drape fluidity, and care requirements.",
              "priority": "high",
              "proTip": "High-grade Polyester blends or Polyester-Linen provide the best drape without shrinking or wrinkling in humidity. Pure silk or fine linen degrades rapidly under direct sun exposure."
            },
            {
              "id": "fabric-gsm-thickness",
              "title": "Fabric Weight & Density (GSM Rating)",
              "description": "Check the fabric weight measured in Grams per Square Meter (GSM) to assess drape quality.",
              "priority": "medium",
              "proTip": "Quality drapery fabric should have a GSM of 250 to 400 g/m² for proper structural drape. Sheer curtains should have a GSM between 80 and 120 g/m²."
            },
            {
              "id": "lining-included-blackout",
              "title": "Blackout / Thermal Lining Inclusion",
              "description": "Verify whether a separate blackout lining layer is sewn into the rear of the drapery.",
              "priority": "high",
              "proTip": "For bedrooms, insist on a 100% 3-pass silicone blackout lining. It completely blocks morning sun, dampens street noise by up to 30%, and insulates windows to reduce AC power consumption."
            },
            {
              "id": "rod-track-material-brand",
              "title": "Curtain Track / Rod Material & Brackets",
              "description": "Inspect the track or rod construction (heavy-gauge aluminum alloy vs MS iron) and mounting bracket strength.",
              "priority": "medium",
              "proTip": "Choose heavy-duty extruded aluminum silent-glider tracks (e.g. Forest or Somfy motorized tracks) with ball-bearing wheeled runners that glide silently without jamming."
            },
            {
              "id": "stitching-heading-style",
              "title": "Stitching Heading Style (Eyelet vs Pinch Pleat vs Wave)",
              "description": "Confirm the heading pleat style and ensure high-density buckram tape is stitched into the header.",
              "priority": "medium",
              "proTip": "S-Fold (Wave Pleat) and Triple Pinch Pleats offer the most elegant tailored drape. Ensure 4-inch stiff buckram canvas is stitched inside the header to prevent unsightly droop."
            },
            {
              "id": "measurement-accuracy-fullness",
              "title": "Measurement Precision & Fullness Ratio (2.5x)",
              "description": "Verify window measurements and the fabric gather fullness ratio used when quoting yardage.",
              "priority": "high",
              "proTip": "Insist on a 2x to 2.5x fullness ratio (fabric width should be 2 to 2.5 times the window track width). Cheap curtain tailors cut costs by using 1.5x fullness, leaving curtains looking flat and skimpy."
            },
            {
              "id": "uv-sun-protection-fastness",
              "title": "UV Sun Protection & Color Fastness Rating",
              "description": "Check the fabric's UV resistance and lightfastness score to prevent sun bleaching.",
              "priority": "medium",
              "proTip": "Look for a Colorfastness to Light score of Grade 5 or above (ISO 105-B02). South-facing windows receive intense solar UV that will bleach low-grade dyed fabrics within 18 months."
            },
            {
              "id": "washability-instructions",
              "title": "Wash Care Instructions (Dry Clean vs Machine Wash)",
              "description": "Check whether the drapes are machine washable or strictly dry-clean only.",
              "priority": "low",
              "proTip": "Curtains with blackout silicone backing or delicate pinch pleats must be professionally dry cleaned. Putting rubberized blackout drapes in a hot washing machine will crack the rubber membrane."
            },
            {
              "id": "installation-and-steaming",
              "title": "Professional Installation & On-Site Steaming",
              "description": "Confirm whether wall drilling, anchor mounting, hanging, and industrial steam dressing are included.",
              "priority": "medium",
              "proTip": "Professional curtain installers must use heavy steel wall plugs and steam the curtains top-to-bottom with a handheld commercial steamer after hanging to lock the pleats in place."
            },
            {
              "id": "blinds-mechanism-warranty",
              "title": "Mechanism & Motor Warranty (for Blinds)",
              "description": "Check the mechanical chain clutch, spring roller, or tubular motor warranty for window blinds.",
              "priority": "high",
              "proTip": "For motorized roller or zebra blinds, look for tubular motors from reputable brands (Somfy, Tuya, or Dooya) that offer a 5-year replacement warranty on motors and remotes."
            }
          ]
        }
      ]
    },
    {
      "id": "jewelry",
      "name": "Jewelry",
      "icon": "💎",
      "description": "Gold, diamonds & precious ornaments",
      "color": "#F57F17",
      "products": [
        {
          "id": "gold-jewelry",
          "name": "Gold Jewelry",
          "icon": "🪙",
          "description": "Verify BIS HUID hallmarking, net gold weight, stone deductions & buyback terms",
          "tips": "Always insist on a 100% computerized tax invoice with the unique 6-digit alphanumeric BIS Hallmark Unique Identification (HUID) printed on it. Never pay for the weight of embedded stones at the price of gold.",
          "checklist": [
            {
              "id": "bis-hallmark-huid",
              "title": "BIS Hallmark & 6-Digit Alphanumeric HUID",
              "description": "Inspect the jewelry piece under a jeweler's 10x loupe for the official 3-symbol BIS hallmark stamp.",
              "priority": "high",
              "proTip": "Mandatory BIS hallmarking features 3 stamps: the BIS triangular logo, purity fineness (e.g. 22K916), and a unique 6-digit alphanumeric HUID number (e.g., AB12CD). Verify it on the BIS Care App."
            },
            {
              "id": "purity-karat-fineness",
              "title": "Karat Purity Grade (24K, 22K, 18K, 14K)",
              "description": "Verify the purity fineness percentage engraved on the ornament against your purchase intent.",
              "priority": "high",
              "proTip": "24K is 99.9% pure (999), 22K is 91.6% pure (916 - standard for traditional jewelry), 18K is 75.0% pure (750 - standard for diamond studded jewelry), and 14K is 58.5% pure (585)."
            },
            {
              "id": "exact-weight-calibrated-scale",
              "title": "Exact Gross Weight on Calibrated Digital Scale",
              "description": "Have the ornament weighed in front of you on a certified, government-stamped digital scale accurate to 0.001g.",
              "priority": "high",
              "proTip": "Ensure the digital scale displays 3 decimal places (e.g., 14.385 grams) and that the scale's annual weights & measures verification sticker is up to date."
            },
            {
              "id": "making-charges-transparency",
              "title": "Making Charges Breakdown (Per Gram vs Flat %)",
              "description": "Clarify making charges / wastage charges and negotiate them before billing.",
              "priority": "high",
              "proTip": "Making charges range from 6% to 14% for machine-made chains/bangles and up to 18-25% for intricate handcrafted antique/temple jewelry. Ask for making charges as a transparent per-gram fee."
            },
            {
              "id": "gst-tax-invoice",
              "title": "Official Tax Invoice with 3% GST",
              "description": "Ensure an official GST invoice is generated with detailed metal weight, stone weight, and HUID.",
              "priority": "high",
              "proTip": "Never buy gold 'without bill' to evade 3% GST. Without an official invoice, you cannot claim insurance, cannot verify HUID authenticity, and will suffer heavy deductions during future buyback."
            },
            {
              "id": "buyback-lifetime-exchange-policy",
              "title": "Buyback & Lifetime Exchange Terms",
              "description": "Get clear written buyback terms stamped on the invoice for both future gold exchange and cash buyback.",
              "priority": "high",
              "proTip": "Reputed jewellers provide 100% gold value on exchange (based on net gold weight at prevailing market rate with zero melting loss) and 97-98% value on cash refund."
            },
            {
              "id": "stone-weight-deduction",
              "title": "Net Gold Weight Deduction for Studded Stones",
              "description": "Verify that the weight of all semi-precious stones, beads, pearls, and enamel wax (lac) is deducted.",
              "priority": "high",
              "proTip": "CRITICAL: You must only pay gold rate for the NET gold weight. If an ornament weighs 30g gross with 5g of cubic zirconia, you must be billed for 25g gold, not 30g."
            },
            {
              "id": "current-gold-rate-reference",
              "title": "Current Bullion Gold Rate Matching",
              "description": "Compare the jeweler's quoted 22K/24K per-gram rate against the official bullion association rate of the day.",
              "priority": "high",
              "proTip": "Gold rates fluctuate daily based on international markets. Check the day's local Bullion Jewellers Association rate before entering the showroom to ensure no arbitrary markup is applied."
            },
            {
              "id": "detailed-invoice-breakup",
              "title": "Itemized Invoice Price Breakup",
              "description": "Review the invoice line items for gross weight, stone weight, net gold weight, gold rate, making charges, and GST.",
              "priority": "high",
              "proTip": "A transparent bill has clear columns: [Gross Wt] - [Stone Wt] = [Net Gold Wt] x [Rate/g] + [Making Charges] + [Stone Cost] + [3% GST]. Reject lump-sum invoices."
            },
            {
              "id": "purity-karatmeter-testing",
              "title": "Karatmeter XRF Assay Testing",
              "description": "Request a non-destructive X-Ray Fluorescence (XRF) Karatmeter test right in the showroom.",
              "priority": "medium",
              "proTip": "Reputable showrooms feature an in-house XRF Karatmeter machine. It scans the ornament in 30 seconds and outputs an exact elemental breakdown (e.g. 91.72% Gold, 5.2% Copper, 3.08% Silver)."
            }
          ]
        },
        {
          "id": "diamond-jewelry",
          "name": "Diamond Jewelry",
          "icon": "💍",
          "description": "Evaluate GIA/IGI certificates, the 4Cs, lab-grown vs natural disclosure & laser inscriptions",
          "tips": "Never purchase a diamond without an independent laboratory certificate from GIA, IGI, or SGL. Match the certificate number laser-engraved on the diamond's girdle using the jeweler's microscope before leaving.",
          "checklist": [
            {
              "id": "gemological-certificate-brand",
              "title": "Independent Gemological Certification (GIA / IGI / SGL)",
              "description": "Verify that the diamond is accompanied by an authentic report from a world-renowned grading laboratory.",
              "priority": "high",
              "proTip": "The Gemological Institute of America (GIA) is the global gold standard for loose diamonds. International Gemological Institute (IGI) and SGL are widely respected for mounted diamond jewelry."
            },
            {
              "id": "the-four-cs-grading",
              "title": "The 4Cs (Cut, Color, Clarity, Carat Weight)",
              "description": "Examine the exact 4Cs grades listed on the laboratory certificate.",
              "priority": "high",
              "proTip": "Cut is most critical for sparkle: insist on 'Excellent' or 'Ideal' cut. For color, G-H is near-colorless and offers the best value. For clarity, VS1-VS2 is eye-clean without paying VVS premiums."
            },
            {
              "id": "natural-vs-lab-grown-disclosure",
              "title": "Natural vs Lab-Grown (CVD / HPHT) Disclosure",
              "description": "Ensure the certificate and invoice explicitly declare whether the diamond is natural earth-mined or lab-grown.",
              "priority": "high",
              "proTip": "Lab-grown diamonds have identical chemical and optical properties but trade at an 80-90% discount compared to natural diamonds and have very low resale buyback value. Confirm full disclosure."
            },
            {
              "id": "setting-metal-purity-hallmark",
              "title": "Metal Setting Purity & BIS Hallmark (14K / 18K / Platinum)",
              "description": "Check the hallmark stamped inside the ring band or setting holding the diamond.",
              "priority": "high",
              "proTip": "Diamonds are usually mounted in 18K gold (750) or 14K gold (585) for prongs rigidity, or 950 Platinum. Ensure the metal setting features its own separate BIS hallmark and HUID."
            },
            {
              "id": "exact-carat-weight-inscription",
              "title": "Exact Diamond Carat Weight Stamping",
              "description": "Verify that the diamond carat weight (cents/carats) is laser-stamped inside the jewelry setting.",
              "priority": "high",
              "proTip": "Look inside the ring band: you should see stamps like 'D 0.52 ct' (solitaire weight) and 'd 0.24 ct' (side accent diamonds). Match these numbers precisely with the certificate."
            },
            {
              "id": "laser-inscription-on-girdle",
              "title": "Girdle Laser Inscription Matching Certificate",
              "description": "Inspect the diamond's outer perimeter (girdle) under a 20x gemological microscope.",
              "priority": "high",
              "proTip": "Certified diamonds feature a microscopic laser inscription on the girdle edge matching the GIA/IGI report number. Verify this number in front of the jeweler to ensure the stone wasn't swapped."
            },
            {
              "id": "fluorescence-grade-evaluation",
              "title": "Fluorescence Grade (None vs Faint vs Strong)",
              "description": "Check the diamond's UV fluorescence rating on the laboratory certificate.",
              "priority": "medium",
              "proTip": "Opt for 'None' or 'Faint' fluorescence. 'Strong Blue' fluorescence in colorless diamonds (D-F) can make the stone appear milky or hazy in natural sunlight, reducing market value by 10-20%."
            },
            {
              "id": "making-charges-and-setting",
              "title": "Setting Charges & Design Labor Transparency",
              "description": "Check the separate itemized charges for metal weight, diamond value, and setting labor.",
              "priority": "medium",
              "proTip": "Ensure the jeweler does not hide inflated diamond prices inside bundled 'making charges'. Solitaire settings should have transparent pricing for mount labor ($50-150 / ₹3,000-10,000)."
            },
            {
              "id": "buyback-exchange-policy",
              "title": "Buyback & Upgrade Value Policy",
              "description": "Review written terms for future diamond upgrades, trade-ins, and cash buybacks.",
              "priority": "high",
              "proTip": "Reputable diamond jewelers provide 100% exchange value when upgrading to a diamond of higher value, and 85-90% cash buyback on the prevailing diamond benchmark rate."
            },
            {
              "id": "insurance-valuation-certificate",
              "title": "Insurance Valuation & Retail Replacement Appraisal",
              "description": "Request an official insurance valuation certificate detailing replacement cost for policy coverage.",
              "priority": "medium",
              "proTip": "High-value diamond jewelry should be insured under an all-risk personal valuables floater. An official retail replacement appraisal certificate allows immediate claims without dispute if lost or stolen."
            }
          ]
        }
      ]
    },
    {
      "id": "fashion",
      "name": "Fashion",
      "icon": "👔",
      "description": "Suits, leather goods & bespoke tailoring",
      "color": "#37474F",
      "products": [
        {
          "id": "formal-suit",
          "name": "Formal Suit",
          "icon": "🤵",
          "description": "Inspect natural wool micron counts, full-canvas construction, cupro lining & tailoring fits",
          "tips": "The true mark of a quality suit lies beneath the surface. Squeeze the jacket chest between your thumb and forefinger: if you feel a floating internal layer between the outer wool and inside lining, it is canvas-tailored rather than cheap fused glue.",
          "checklist": [
            {
              "id": "fabric-composition-wool",
              "title": "Fabric Composition & Wool Super Count",
              "description": "Verify the natural fiber composition percentage (Pure Wool vs Wool-Silk vs Polyester blend) and Super 'S' number.",
              "priority": "high",
              "proTip": "Choose 100% Merino wool with a 'Super 110s to 130s' yarn count for daily business wear. It provides the ideal balance of drape, wrinkle recovery, and durability. Super 160s+ is luxurious but fragile."
            },
            {
              "id": "fabric-mill-origin",
              "title": "Fabric Mill & Provenance",
              "description": "Check the woven selvedge brand name along the fabric edge to identify the manufacturing textile mill.",
              "priority": "medium",
              "proTip": "World-class Italian and British mills include Vitale Barberis Canonico (VBC), Loro Piana, Zegna, Holland & Sherry, and Scabal. For premium domestic tailoring, Raymond's exotic wool blends excel."
            },
            {
              "id": "lining-material-cupro",
              "title": "Lining Material (Cupro / Bemberg vs Polyester)",
              "description": "Inspect the inner jacket lining material for breathability and static resistance.",
              "priority": "high",
              "proTip": "Insist on 100% Cupro (Bemberg) lining. Bemberg is made from natural cotton linter, breathes like silk, dissipates body heat, and slides effortlessly over dress shirts. Cheap polyester linings trap sweat."
            },
            {
              "id": "button-material-craft",
              "title": "Button Material (Horn / Corozo / Mother-of-Pearl vs Plastic)",
              "description": "Check whether buttons are crafted from natural organic materials or injection-molded synthetic plastic.",
              "priority": "medium",
              "proTip": "Fine suits feature genuine water buffalo horn, Corozo nut, or Mother-of-Pearl buttons with subtle natural color striations. Avoid shiny plastic buttons that crack under dry-cleaning heat."
            },
            {
              "id": "stitching-craftsmanship",
              "title": "Stitching Quality & Pick Stitching (AMF Stitch)",
              "description": "Inspect lapel borders, shoulder seams, and armhole stitching for clean, tight construction.",
              "priority": "high",
              "proTip": "Look for delicate AMF hand-pick stitching along the lapels and pocket flaps. Check that the sleeve cuff buttons are functional ('surgeon's cuffs') rather than decorative fake buttons."
            },
            {
              "id": "jacket-canvassing-construction",
              "title": "Internal Canvassing (Full Canvas vs Half Canvas vs Fused)",
              "description": "Determine the internal construction technique that gives the jacket its three-dimensional shape.",
              "priority": "high",
              "proTip": "Full-canvas or half-canvas construction uses natural horsehair canvas that molds to your body shape over time and breathes. Avoid fused (glued) jackets which bubble and ripple after a few dry cleanings."
            },
            {
              "id": "trouser-fabric-matching",
              "title": "Trouser Fabric Matching & Inseam Allowances",
              "description": "Verify trouser cut, rise, curtained waistband, and internal hem fabric allowances.",
              "priority": "medium",
              "proTip": "Check that the trouser waistband has a traditional split back curtain for easy waist adjustments. Ensure at least 1.5 to 2 inches of hem inlay allowance inside the leg cuffs for future lengthening."
            },
            {
              "id": "alterations-basting-fittings",
              "title": "Alterations Included & Basting Trial Stages",
              "description": "Clarify how many trial fittings (e.g. skeleton basted trial, forward trial) and alterations are included.",
              "priority": "high",
              "proTip": "Bespoke tailoring requires at least two fittings: a raw 'basted fitting' (stitched with white temporary thread to adjust shoulder posture and chest drape) and a final fitting. Ensure alterations are free."
            },
            {
              "id": "tailoring-delivery-timeline",
              "title": "Tailoring Delivery Timeline & Event Commitment",
              "description": "Obtain a firm delivery date in writing, allowing at least 7 days before your target event for final tweaks.",
              "priority": "medium",
              "proTip": "A true bespoke suit takes 3 to 5 weeks to construct properly. Never rush custom tailoring into 3 days, as natural canvassing and pad-stitching require time to set."
            },
            {
              "id": "care-instructions-label",
              "title": "Dry Cleaning & Steaming Care Instructions",
              "description": "Check the garment care tag and receive maintenance guidance from the master tailor.",
              "priority": "low",
              "proTip": "Never dry-clean a wool suit more than 1-2 times a year—harsh chemical solvents strip natural lanolin oils from wool fibers. Use a handheld garment steamer and horsehair clothes brush between wears."
            }
          ]
        },
        {
          "id": "leather-shoes",
          "name": "Leather Shoes",
          "icon": "👞",
          "description": "Verify full-grain leather authenticity, Goodyear welt resoling, calfskin lining & arch fit",
          "tips": "Always try on leather dress shoes in the late afternoon when your feet are at their maximum natural expansion. A proper leather shoe should fit snug across the ball of the foot with zero pinch at the toes.",
          "checklist": [
            {
              "id": "leather-type-grain-grade",
              "title": "Leather Grade (Full-Grain vs Top-Grain vs Bonded)",
              "description": "Confirm the exact grade of upper leather and ask for genuine leather material certification.",
              "priority": "high",
              "proTip": "Insist on Full-Grain leather (or fine European Box Calf). Full-grain retains the complete natural grain surface, develops a rich patina with age, and breathes. Avoid 'Genuine Leather' which is bonded scrap leather."
            },
            {
              "id": "sole-material-construction",
              "title": "Sole Material (Oak-Bark Leather vs Dainite Rubber vs TPR)",
              "description": "Inspect outsole material, edge beveling, and suitability for dry vs wet walking conditions.",
              "priority": "high",
              "proTip": "Traditional dress shoes feature vegetable-tanned leather soles (e.g. J. Rendenbach oak-bark tanned) for unmatched breathability. For rainy climates, British Dainite studded rubber soles provide traction."
            },
            {
              "id": "welt-stitching-vs-glued",
              "title": "Stitching Construction (Goodyear Welted vs Blake vs Cemented)",
              "description": "Examine how the leather upper is joined to the sole (stitched welt vs glued cement).",
              "priority": "high",
              "proTip": "Look for Goodyear Welt construction. A leather welt is stitched to both upper and insole, making the shoe completely waterproof and allowing the sole to be replaced 4-5 times over decades of wear."
            },
            {
              "id": "insole-lining-material",
              "title": "Full Leather Insole & Calfskin Lining",
              "description": "Inspect the interior shoe lining and footbed construction.",
              "priority": "high",
              "proTip": "The interior should be lined 100% in supple vegetable-tanned calfskin. High-end welted shoes feature a layer of natural cork filler beneath the leather insole that molds to your unique footprint."
            },
            {
              "id": "heel-construction-toplift",
              "title": "Heel Construction & Rubber Dovetail Top-Lift",
              "description": "Examine the heel stack to confirm solid leather lifts with a protective rubber corner insert.",
              "priority": "medium",
              "proTip": "Look for stacked leather heels secured with brass nails and a rubber 'dovetail' or quarter-rubber top-lift. Avoid hollow plastic heels painted to look like wood or leather."
            },
            {
              "id": "brand-warranty-resoling",
              "title": "Brand Warranty & Factory Resoling Service",
              "description": "Inquire whether the shoemaker offers an official factory recrafting and resoling service.",
              "priority": "medium",
              "proTip": "Heritage welted shoe brands (Church's, Allen Edmonds, Loake 1880, Crockett & Jones) offer factory restoration programs where they rebuild the shoe on the original wooden last for a modest fee."
            },
            {
              "id": "fit-sizing-both-feet",
              "title": "Dual-Foot Sizing, Width Fit & Afternoon Try-On",
              "description": "Stand up and walk on a carpeted floor, trying on both the left and right shoes simultaneously.",
              "priority": "high",
              "proTip": "Most people have one foot slightly larger than the other. Ensure there is about 0.5 inches (thumb's width) of space between your longest toe and the shoe tip, and zero heel slippage when walking."
            },
            {
              "id": "color-grain-uniformity",
              "title": "Color Consistency, Hand Burnishing & Grain Symmetry",
              "description": "Compare both shoes side-by-side in direct light to check leather dye uniformity and grain texture.",
              "priority": "medium",
              "proTip": "Both shoes must come from matching hide sections. Inspect the toe caps for symmetric hand-burnished antiquing and ensure there are no loose grain wrinkles or dye blotches."
            },
            {
              "id": "leather-finish-type",
              "title": "Leather Finish (Aniline vs Suede vs Corrected Grain)",
              "description": "Identify the surface treatment applied to the leather hide.",
              "priority": "medium",
              "proTip": "Choose pure aniline or semi-aniline finishes that let the natural hide pores breathe. Avoid 'corrected grain' or high-shine 'bookbinder' leathers coated in heavy plastic film that crack irreversibly."
            },
            {
              "id": "care-kit-and-accessories",
              "title": "Shoe Trees, Dust Bags & Leather Care Kit",
              "description": "Check whether breathable flannel travel dust bags and cedar shoe trees are included.",
              "priority": "low",
              "proTip": "Always insert unfinished aromatic red cedar shoe trees into leather shoes immediately after taking them off. Cedar absorbs moisture and sweat salts while smoothing out walking creases in the vamp."
            }
          ]
        }
      ]
    }
  ]
};

// Export for Node.js environments and module bundlers
if (typeof module !== 'undefined' && module.exports) {
  module.exports = APP_DATA;
}

// Attach to window object for browser script tag usage
if (typeof window !== 'undefined') {
  window.APP_DATA = APP_DATA;
}
