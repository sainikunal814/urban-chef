import { Product, Review, RecipeArticle, Coupon } from '../types';
import {
  KADAI_IMG_1,
  KADAI_IMG_2,
  COOKER_IMG_1,
  FRYPAN_IMG_1,
  CASSEROLE_IMG_1,
  DINNERSET_IMG_1,
  TAWA_IMG_1,
  BOTTLE_IMG_1,
  SAUCEPAN_IMG_1,
  LUNCHBOX_IMG_1,
  TOOLS_IMG_1,
  MASTERSET_IMG_1,
  MASALA_DABBA_IMG_1
} from './productImages';

export const CATEGORIES = [
  { id: 'all', name: 'All Collections', count: 15, icon: 'Flame', image: KADAI_IMG_1 },
  { id: 'pressure-cookers', name: 'Pressure Cookers', count: 3, icon: 'Gauge', image: COOKER_IMG_1 },
  { id: 'kadai', name: 'Tri-Ply Kadai & Woks', count: 3, icon: 'Soup', image: KADAI_IMG_1 },
  { id: 'fry-pans', name: 'Fry & Tawa Pans', count: 3, icon: 'CookingPot', image: FRYPAN_IMG_1 },
  { id: 'casserole', name: 'Casseroles & Pots', count: 2, icon: 'Box', image: CASSEROLE_IMG_1 },
  { id: 'dinner-sets', name: 'Laser Etched Dinner Sets', count: 2, icon: 'Utensils', image: DINNERSET_IMG_1 },
  { id: 'bottles-lunch', name: 'Bottles & Lunch Boxes', count: 2, icon: 'Coffee', image: BOTTLE_IMG_1 },
  { id: 'tools-accessories', name: 'Kitchen Tools & Sets', count: 2, icon: 'Wrench', image: TOOLS_IMG_1 }
];

export const PRODUCTS: Product[] = [
  {
    id: 'uc-triply-kadai-01',
    name: 'Royal Tri-Ply Stainless Steel Heavy Kadai',
    subtitle: 'With Toughened Glass Lid & Cool-Touch Stainless Handles',
    category: 'Tri-Ply Kadai & Woks',
    categorySlug: 'kadai',
    price: 2499,
    originalPrice: 3899,
    discountPercentage: 36,
    rating: 4.9,
    reviewCount: 342,
    images: [
      KADAI_IMG_1,
      KADAI_IMG_2
    ],
    threeSixtyImages: [
      KADAI_IMG_1,
      KADAI_IMG_2,
      KADAI_IMG_1,
      KADAI_IMG_2
    ],
    isBestSeller: true,
    isDealOfDay: true,
    dealEndTime: new Date(Date.now() + 18 * 3600 * 1000).toISOString(),
    material: 'Tri-Ply 304 Surgical Grade Stainless Steel',
    finish: 'Mirror Finish Exterior + Satin Interior',
    warranty: '10 Years Replacement Guarantee',
    inductionCompatible: true,
    dishwasherSafe: true,
    inStock: true,
    stockCount: 8,
    description: 'Constructed with 3-Layer Sandwich Metal Technology: Food Grade 18/8 SS304 inside, Pure Heavy Aluminium Core in the middle for zero hotspot heat distribution, and Magnetic 430 Stainless Steel outside for 100% Induction & Gas compatibility.',
    highlights: [
      '3-Ply Full Body Heat Distribution (No Burning or Sticking)',
      'Consumes 30% Less Gas & Energy',
      'Surgical Grade SS304 Inner Coating - Zero Toxins & Lead Free',
      'Ergonomic Riveted Die-Cast Handles with Heat Shield',
      'Toughened Steam-Vented Borosilicate Glass Lid'
    ],
    specifications: [
      { label: 'Inner Layer', value: 'SS 304 Surgical Food Grade (18/8)' },
      { label: 'Middle Core', value: 'High Thermal Pure Aluminium (1.5mm)' },
      { label: 'Outer Layer', value: 'SS 430 Magnetic Induction Compatible' },
      { label: 'Total Thickness', value: '2.5 mm Heavy Gauge' },
      { label: 'Handles', value: 'Die-Cast Stainless Steel Riveted' },
      { label: 'Compatibility', value: 'Induction, Gas, Halogen, Electric Top' }
    ],
    variants: [
      { id: 'v1', name: '2.5 Litre (24 cm)', capacityOrSize: '2.5 Litre', price: 2499, originalPrice: 3899, inStock: true, weightGrams: 1450 },
      { id: 'v2', name: '3.5 Litre (26 cm)', capacityOrSize: '3.5 Litre', price: 2999, originalPrice: 4499, inStock: true, weightGrams: 1780 },
      { id: 'v3', name: '5.0 Litre (30 cm)', capacityOrSize: '5.0 Litre', price: 3699, originalPrice: 5299, inStock: true, weightGrams: 2200 }
    ],
    dimensions: '24 cm Diameter x 9.5 cm Height',
    boxContents: '1 x Tri-Ply Kadai, 1 x Toughened Glass Lid, 1 x Recipe Booklet & Warranty Card',
    recipeRecommendation: 'Perfect for Paneer Butter Masala, Slow-Cooked Chicken Curry, & Crispy Pakoras.'
  },
  {
    id: 'uc-pressure-cooker-3l',
    name: 'Tri-Ply Heavy Bottom Outer Lid Pressure Cooker',
    subtitle: 'Precision Gasket Release System & Triple Safety Shield',
    category: 'Pressure Cookers',
    categorySlug: 'pressure-cookers',
    price: 3199,
    originalPrice: 4999,
    discountPercentage: 36,
    rating: 4.8,
    reviewCount: 289,
    images: [
      COOKER_IMG_1,
      COOKER_IMG_1
    ],
    isBestSeller: true,
    material: 'Tri-Ply 304 Surgical Grade Stainless Steel',
    finish: 'High Gloss Mirror Finish',
    warranty: '10 Years Guarantee on Cooker Body',
    inductionCompatible: true,
    dishwasherSafe: true,
    inStock: true,
    stockCount: 14,
    description: 'Engineered for safe, swift, and energy-efficient pressure cooking. Featuring an extra thick 3.0mm Tri-Ply base and body, safety metallic valve, and food-grade long life silicone gasket.',
    highlights: [
      'Cooks Dal, Rice, and Meats 40% Faster',
      'Triple Safety Device: Precision Weight, Safety Valve, & Gasket Venting',
      'Food-Grade Silicone Gasket with 5000+ Cycle Durability',
      'Zero Pit Corrosion & Stain Resistance',
      'Heavy Heavy-Bottom prevents burning of milk & lentils'
    ],
    specifications: [
      { label: 'Capacity', value: '3 Litre / 5 Litre Options' },
      { label: 'Working Pressure', value: '1.0 kg/cm² (14 PSI)' },
      { label: 'Base Thickness', value: '3.0 mm Tri-Ply' },
      { label: 'Lid Type', value: 'Outer Lid Stainless Steel' },
      { label: 'Certifications', value: 'ISI Mark & ISO 9001:2015' }
    ],
    variants: [
      { id: 'pc1', name: '3 Litre (Family of 3-4)', capacityOrSize: '3 Litre', price: 3199, originalPrice: 4999, inStock: true, weightGrams: 2100 },
      { id: 'pc2', name: '5 Litre (Family of 5-8)', capacityOrSize: '5 Litre', price: 3999, originalPrice: 5999, inStock: true, weightGrams: 2850 }
    ],
    dimensions: '20 cm Base Diameter x 16 cm Height',
    boxContents: '1 x Stainless Steel Cooker Body, 1 x Outer Lid with Whistle, 1 x Spare Silicone Ring, 1 x Manual',
    recipeRecommendation: 'Ideal for Rajma Masala, Dum Biryani, and Dal Tadka.'
  },
  {
    id: 'uc-honeycomb-pan-28',
    name: 'Pro-Shield Honeycomb Non-Stick Tri-Ply Fry Pan',
    subtitle: 'Laser Etched Micro-Structure for Metal Spoon Safe Cooking',
    category: 'Fry & Tawa Pans',
    categorySlug: 'fry-pans',
    price: 2199,
    originalPrice: 3299,
    discountPercentage: 33,
    rating: 4.9,
    reviewCount: 198,
    images: [
      FRYPAN_IMG_1,
      FRYPAN_IMG_1
    ],
    isBestSeller: true,
    isNewArrival: true,
    material: 'Tri-Ply Steel + German Greblon Honeycomb Laser Structure',
    finish: 'Dual Finish Honeycomb Mesh',
    warranty: '5 Years Warranty',
    inductionCompatible: true,
    dishwasherSafe: true,
    inStock: true,
    stockCount: 12,
    description: 'The ultimate hybrid pan! Combines the durability of 304 Stainless Steel with raised honeycomb laser ridges that protect the inner non-stick coating from metal spatula scratches.',
    highlights: [
      '100% Metal Spatula & Ladle Safe',
      'Requires 80% Less Oil for Healthy Daily Cooking',
      'Heavy Tri-Ply Body Prevents Warping & Hotspots',
      'Cool-Touch Ergonomic Stainless Steel Handle',
      'PFOA, Lead, and Cadmium Free Safety Guarantee'
    ],
    specifications: [
      { label: 'Size', value: '24 cm / 28 cm Diameter' },
      { label: 'Coating', value: 'German Tech Honeycomb Laser Shield' },
      { label: 'Body', value: 'Full Tri-Ply Stainless Steel' },
      { label: 'Spatula Tolerance', value: 'Metal Spatula Safe' }
    ],
    variants: [
      { id: 'hp1', name: '24 cm (Medium)', capacityOrSize: '24 cm', price: 2199, originalPrice: 3299, inStock: true },
      { id: 'hp2', name: '28 cm (Large with Lid)', capacityOrSize: '28 cm', price: 2699, originalPrice: 3999, inStock: true }
    ],
    dimensions: '28 cm Diameter x 5.5 cm Height',
    boxContents: '1 x Honeycomb Fry Pan, 1 x Care Sheet',
    recipeRecommendation: 'Great for Crispy Omelettes, Fish Fry, Crispy Dosa & Pancakes.'
  },
  {
    id: 'uc-casserole-set-3',
    name: 'Insulated Thermal Stainless Steel Casserole Set',
    subtitle: 'Double-Wall Vacuum Insulation Keeps Food Hot for 8 Hours',
    category: 'Casseroles & Pots',
    categorySlug: 'casserole',
    price: 3499,
    originalPrice: 5499,
    discountPercentage: 36,
    rating: 4.8,
    reviewCount: 164,
    images: [
      CASSEROLE_IMG_1,
      CASSEROLE_IMG_1
    ],
    isNewArrival: true,
    material: 'Double-Wall Food Grade 304 Stainless Steel + PUF Insulation',
    finish: 'Mirror Polish with Rose Gold Trim',
    warranty: '5 Years Insulation Guarantee',
    inductionCompatible: false,
    dishwasherSafe: true,
    inStock: true,
    stockCount: 18,
    description: 'Keep your rotis soft, fresh, and steaming hot from lunch to dinner. Features double-wall PUF thermal insulation, twist-lock leak-proof lid, and mirror-finished inner bowl.',
    highlights: [
      'Retains Heat & Freshness for up to 8 Hours',
      'Odourless & 100% Non-Reactive Stainless Steel Inside',
      'Aesthetic Rose Gold Accent Handles for Dining Table Luxury',
      '3-Piece Set: 1000ml, 1500ml & 2500ml Capacities',
      'Condensation-Control Dome Lid'
    ],
    specifications: [
      { label: 'Set Includes', value: '1.0L + 1.5L + 2.5L Casseroles' },
      { label: 'Insulation Layer', value: 'High-Density Polyurethane Foam (PUF)' },
      { label: 'Inner Liner', value: 'Food Grade 304 Stainless Steel' }
    ],
    variants: [
      { id: 'cs1', name: '3-Piece Master Set (1L + 1.5L + 2.5L)', capacityOrSize: '3-Piece Set', price: 3499, originalPrice: 5499, inStock: true }
    ],
    dimensions: 'Multiple sizes',
    boxContents: '3 x Insulated Stainless Steel Casseroles with Lids',
    recipeRecommendation: 'Essential for Soft Rotis, Naans, Biryani, and Sabzi.'
  },
  {
    id: 'uc-dinner-set-51',
    name: 'Imperial Laser Etched 51-Piece Dinner Set',
    subtitle: 'Heavy-Gauge Mirror Finish Stainless Steel Dining Collection',
    category: 'Laser Etched Dinner Sets',
    categorySlug: 'dinner-sets',
    price: 6999,
    originalPrice: 10999,
    discountPercentage: 36,
    rating: 5.0,
    reviewCount: 412,
    images: [
      DINNERSET_IMG_1,
      DINNERSET_IMG_1
    ],
    isBestSeller: true,
    material: 'High-Grade Heavy Gauge Stainless Steel (200 Series Premium)',
    finish: 'Laser Floral Engraved + Mirror Sheen',
    warranty: 'Lifetime Anti-Rust Guarantee',
    inductionCompatible: false,
    dishwasherSafe: true,
    inStock: true,
    stockCount: 6,
    description: 'Transform family gatherings and festive celebrations. Includes full dinner thali plates, curry bowls, sweet dish bowls, tumblers, serving spoons, and dessert spoons with exquisite laser etching.',
    highlights: [
      '51 Complete Pieces for a Family of 6',
      'Intricate Laser-Etched Royal Border Artwork',
      'Unbreakable Heavy Gauge - No Dents or Bending',
      'Easy to Wash, Stain Resistant & Hygienic',
      'Delivered in Luxury Gift Box Packaging'
    ],
    specifications: [
      { label: 'Plates (Full)', value: '6 x Royal Thali Plates (31 cm)' },
      { label: 'Bowls (Katori)', value: '12 x Heavy Curry Bowls' },
      { label: 'Glasses/Tumblers', value: '6 x Stainless Steel Glasses' },
      { label: 'Cutlery', value: '18 x Spoons & Forks' },
      { label: 'Serving Tools', value: '5 x Serving Bowls & Spoons' },
      { label: 'Halwa/Dessert Bowls', value: '4 x Dessert Bowls' }
    ],
    variants: [
      { id: 'ds1', name: '51-Piece Family Dining Set', capacityOrSize: '51-Piece Set', price: 6999, originalPrice: 10999, inStock: true }
    ],
    dimensions: 'Gift Box: 45 cm x 35 cm x 25 cm',
    boxContents: '51 Pieces Stainless Steel Dining Ware + Royal Gift Box',
    recipeRecommendation: 'The ultimate canvas for traditional Indian Thali feasts.'
  },
  {
    id: 'uc-triply-tawa-28',
    name: 'Tri-Ply Heavy Duty Roti & Dosa Tawa',
    subtitle: 'Flat Base for Crisp Dosas, Chapatis, Parathas & Crepes',
    category: 'Fry & Tawa Pans',
    categorySlug: 'fry-pans',
    price: 1899,
    originalPrice: 2899,
    discountPercentage: 34,
    rating: 4.8,
    reviewCount: 221,
    images: [
      TAWA_IMG_1,
      TAWA_IMG_1
    ],
    material: 'Tri-Ply 304 Stainless Steel Heavy Construction',
    finish: 'Satin Brushed Interior',
    warranty: '10 Years Replacement Warranty',
    inductionCompatible: true,
    dishwasherSafe: true,
    inStock: true,
    stockCount: 19,
    description: 'Engineered with a perfectly flat 3.0mm thick Tri-Ply base that maintains uniform heat across the entire surface. Dosa glides smoothly without puffing or bending under high heat.',
    highlights: [
      'Zero Warping Guaranteed even at high flame',
      'Spreads heat evenly to the edges for perfect golden dosas',
      '100% Chemical-Free Healthy Steel Surface',
      'Comfort-Grip Stainless Steel Handle'
    ],
    specifications: [
      { label: 'Diameter', value: '28 cm / 30 cm Options' },
      { label: 'Base Thickness', value: '3.0 mm Tri-Ply' }
    ],
    variants: [
      { id: 'tw1', name: '28 cm Diameter', capacityOrSize: '28 cm', price: 1899, originalPrice: 2899, inStock: true },
      { id: 'tw2', name: '30 cm Diameter (Grand)', capacityOrSize: '30 cm', price: 2199, originalPrice: 3299, inStock: true }
    ],
    dimensions: '28 cm Diameter',
    boxContents: '1 x Tri-Ply Tawa',
    recipeRecommendation: 'Ideal for Crispy Paper Dosa, Butter Paratha, and Uttapam.'
  },
  {
    id: 'uc-bottle-1000',
    name: 'Hydro-Shield Vacuum Insulated Stainless Steel Bottle',
    subtitle: '24 Hours Cold / 12 Hours Hot Temperature Retention',
    category: 'Bottles & Lunch Boxes',
    categorySlug: 'bottles-lunch',
    price: 999,
    originalPrice: 1599,
    discountPercentage: 37,
    rating: 4.9,
    reviewCount: 380,
    images: [
      BOTTLE_IMG_1,
      BOTTLE_IMG_1
    ],
    isBestSeller: true,
    material: 'Double-Wall Vacuum SS304 Food Grade',
    finish: 'Matte Powder Coating + Brushed Steel Cap',
    warranty: '2 Years Insulation Guarantee',
    inductionCompatible: false,
    dishwasherSafe: false,
    inStock: true,
    stockCount: 45,
    description: 'Stay hydrated with Urban Chef insulated flask. Leak-proof silicon gasket, sweat-free exterior, and copper coating inside for maximum temperature retention.',
    highlights: [
      'Keeps Water Icy Cold for 24 Hours & Tea Hot for 12 Hours',
      'Sweat-Proof Exterior - No Condensation Drops',
      '100% BPA Free & Eco-Friendly Alternative to Plastic',
      'Fits standard car cup holders and backpack side pockets'
    ],
    specifications: [
      { label: 'Capacity', value: '750ml / 1000ml' },
      { label: 'Steel Grade', value: 'SS 304 Inner & Outer' }
    ],
    variants: [
      { id: 'bt1', name: '750 ml Silver Sheen', capacityOrSize: '750 ml', price: 899, originalPrice: 1399, inStock: true },
      { id: 'bt2', name: '1000 ml Matte Charcoal', capacityOrSize: '1000 ml', price: 999, originalPrice: 1599, inStock: true }
    ],
    dimensions: '8 cm x 8 cm x 28 cm',
    boxContents: '1 x Insulated Flask, 1 x Bottle Cleaning Brush'
  },
  {
    id: 'uc-sauce-pan-15',
    name: 'Tri-Ply Heavy Sauce Pan with Pour Spout & Glass Lid',
    subtitle: 'Ideal for Tea, Coffee, Milk Boiling & Soups',
    category: 'Casseroles & Pots',
    categorySlug: 'casserole',
    price: 1699,
    originalPrice: 2499,
    discountPercentage: 32,
    rating: 4.7,
    reviewCount: 140,
    images: [
      SAUCEPAN_IMG_1
    ],
    material: 'Tri-Ply 304 Stainless Steel',
    finish: 'Mirror Polish Exterior',
    warranty: '10 Years Warranty',
    inductionCompatible: true,
    dishwasherSafe: true,
    inStock: true,
    stockCount: 22,
    description: 'Boil chai and milk without burning at the base. Features precise dual pour spouts for mess-free serving and internal volume markings.',
    highlights: [
      'Dual Pour Spouts for Left & Right Hand Pouring',
      'Etched Measuring Marks inside (500ml, 1000ml, 1500ml)',
      'Stay-Cool Hollow Steel Handle'
    ],
    specifications: [
      { label: 'Capacity', value: '1.5 Litre / 2.0 Litre' },
      { label: 'Inner Layer', value: '304 Surgical Grade Steel' }
    ],
    variants: [
      { id: 'sp1', name: '1.5 Litre', capacityOrSize: '1.5 Litre', price: 1699, originalPrice: 2499, inStock: true }
    ],
    dimensions: '16 cm Diameter x 10 cm Height',
    boxContents: '1 x Tri-Ply Sauce Pan, 1 x Glass Lid',
    recipeRecommendation: 'The ultimate pot for Masala Chai, Filter Coffee, & Creamy Soups.'
  },
  {
    id: 'uc-lunchbox-4tier',
    name: 'Thermal Executive 4-Tier Stainless Steel Lunch Box',
    subtitle: '100% Leak-Proof Containers with Thermal Insulated Fabric Bag',
    category: 'Bottles & Lunch Boxes',
    categorySlug: 'bottles-lunch',
    price: 1499,
    originalPrice: 2299,
    discountPercentage: 35,
    rating: 4.8,
    reviewCount: 210,
    images: [
      LUNCHBOX_IMG_1
    ],
    material: 'SS304 Food Grade Containers + Silicon Seal Lids',
    finish: 'Satin Steel Finish',
    warranty: '2 Years Warranty',
    inductionCompatible: false,
    dishwasherSafe: true,
    inStock: true,
    stockCount: 16,
    description: 'Pack homemade rotis, dal, rice, and sabzi hot for office or school. High-grade food seal silicone rings ensure zero liquid spillage inside your bag.',
    highlights: [
      '4 Independent Leak-Proof Containers (300ml x 4)',
      'Includes Premium Padded Thermal Carry Bag with Strap',
      'Dishwasher Safe & Rust-Proof'
    ],
    specifications: [
      { label: 'Containers', value: '4 x 300ml SS304 Bowls' }
    ],
    variants: [
      { id: 'lb1', name: '4-Tier Lunch Set', capacityOrSize: '4 Containers', price: 1499, originalPrice: 2299, inStock: true }
    ],
    dimensions: 'Bag: 15 cm x 15 cm x 24 cm',
    boxContents: '4 x SS Containers with Lids, 1 x Insulated Bag, 1 x Spoon Set'
  },
  {
    id: 'uc-tools-set-7',
    name: 'Master Chef 7-Piece Stainless Steel Cooking Tool Set',
    subtitle: 'Ladle, Skimmer, Slotted Turner, Solid Spoon, Whisk, Tongs & Stand',
    category: 'Kitchen Tools & Sets',
    categorySlug: 'tools-accessories',
    price: 1299,
    originalPrice: 1999,
    discountPercentage: 35,
    rating: 4.9,
    reviewCount: 175,
    images: [
      TOOLS_IMG_1
    ],
    material: 'Heavy Gauge Food Grade Stainless Steel',
    finish: 'Mirror Polish with Hanging Loop',
    warranty: '5 Years Guarantee',
    inductionCompatible: false,
    dishwasherSafe: true,
    inStock: true,
    stockCount: 30,
    description: 'Elevate your kitchen countertop. Includes every essential cooking tool engineered with seamless one-piece construction so food particles never get stuck.',
    highlights: [
      'Seamless One-Piece Hygienic Design',
      'Heat Resistant & Unbendable Heavy Steel',
      'Rotatable Countertop Organiser Stand Included'
    ],
    specifications: [
      { label: 'Total Pieces', value: '7 Pieces (6 Tools + 1 Stand)' }
    ],
    variants: [
      { id: 'ts1', name: '7-Piece Tool Kit + Stand', capacityOrSize: '7 Pieces', price: 1299, originalPrice: 1999, inStock: true }
    ],
    dimensions: 'Tools length ~32 cm',
    boxContents: '6 x Cooking Utensils, 1 x Stainless Steel Revolving Stand'
  },
  {
    id: 'uc-starter-set-5',
    name: 'Grand Royal 5-Piece Tri-Ply Cookware Master Set',
    subtitle: 'Kadai + Pressure Cooker + Fry Pan + Sauce Pan + Glass Lids',
    category: 'Kitchen Tools & Sets',
    categorySlug: 'tools-accessories',
    price: 8999,
    originalPrice: 13999,
    discountPercentage: 35,
    rating: 5.0,
    reviewCount: 520,
    images: [
      MASTERSET_IMG_1,
      MASTERSET_IMG_1
    ],
    isBestSeller: true,
    material: 'Full Tri-Ply 304 Surgical Grade Stainless Steel',
    finish: 'Mirror Polish Outer, Satin Inner',
    warranty: '10 Years Replacement Guarantee',
    inductionCompatible: true,
    dishwasherSafe: true,
    inStock: true,
    stockCount: 5,
    description: 'The complete kitchen upgrade bundle! Equipped with everything a modern chef or newlywed couple needs to prepare daily gourmet Indian meals.',
    highlights: [
      'Complete Kitchen Starter Kit - Save 40% vs buying individually',
      'Includes 2.5L Kadai, 3L Pressure Cooker, 24cm Fry Pan, 1.5L Saucepan',
      '10-Year Replacement Guarantee Across All Pieces',
      '100% Toxins & Chemical Free Cooking'
    ],
    specifications: [
      { label: 'Set Includes', value: '1 x Kadai (2.5L), 1 x Pressure Cooker (3L), 1 x Frypan (24cm), 1 x Saucepan (1.5L), 2 x Toughened Lids' }
    ],
    variants: [
      { id: 'ms1', name: '5-Piece Royal Master Kit', capacityOrSize: '5 Cookware Items', price: 8999, originalPrice: 13999, inStock: true }
    ],
    dimensions: 'Master Box 60cm x 40cm x 30cm',
    boxContents: '5 x Tri-Ply Cookware Pieces, Warranty Cards, Recipe Guide'
  },
  {
    id: 'uc-masala-dabba',
    name: 'Airtight Stainless Steel Spice Box (Masala Dabba) with Glass Lid',
    subtitle: '7 Removable Containers + 1 Spice Spoon + Clear Acrylic Lid',
    category: 'Kitchen Tools & Sets',
    categorySlug: 'tools-accessories',
    price: 899,
    originalPrice: 1399,
    discountPercentage: 35,
    rating: 4.8,
    reviewCount: 290,
    images: [
      MASALA_DABBA_IMG_1
    ],
    material: 'Food Grade Heavy SS304 + See-Through Acrylic Lid',
    finish: 'Mirror Finish',
    warranty: 'Lifetime Warranty',
    inductionCompatible: false,
    dishwasherSafe: true,
    inStock: true,
    stockCount: 35,
    description: 'Keep your aromatic Indian spices fresh, moisture-free, and visible at a glance. Features a transparent see-through lid so you never open the wrong box.',
    highlights: [
      'Transparent Glass-Look Top Lid for instant identification',
      'Air-tight Silicone Seal protects spices from air & humidity',
      '7 Heavy Stainless Steel Katoris + 1 Brass/Steel Spoon'
    ],
    specifications: [
      { label: 'Diameter', value: '20 cm Round' }
    ],
    variants: [
      { id: 'md1', name: '20 cm Masala Dabba', capacityOrSize: '7 Katoris', price: 899, originalPrice: 1399, inStock: true }
    ],
    dimensions: '20 cm Diameter x 7 cm Height',
    boxContents: '1 x Outer Container, 1 x Clear Lid, 7 x Inner Cups, 1 x Spoon'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    userName: 'Chef Ranveer M.',
    location: 'Mumbai, Maharashtra',
    rating: 5,
    date: '3 days ago',
    title: 'Absolute game changer for Indian curries & slow cooking!',
    comment: 'The heat distribution on the Urban Chef Tri-Ply Kadai is phenomenal. No hotspots at all. Milk and paneer gravy never burn at the bottom. The steel shine after 6 months of daily washing is still like brand new!',
    verifiedPurchase: true,
    productName: 'Royal Tri-Ply Stainless Steel Heavy Kadai',
    userAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80'
  },
  {
    id: 'r2',
    userName: 'Ananya Sharma',
    location: 'Bengaluru, Karnataka',
    rating: 5,
    date: '1 week ago',
    title: 'Worth every rupee. Truly premium quality steel.',
    comment: 'I replaced all my old coated non-stick cookware with Urban Chef Tri-Ply. Food cooks faster, uses less gas, and I feel so much safer knowing there are no toxic chemical fumes entering my child’s food.',
    verifiedPurchase: true,
    productName: 'Pro-Shield Honeycomb Non-Stick Tri-Ply Fry Pan',
    userAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80'
  },
  {
    id: 'r3',
    userName: 'Vikramaditya K.',
    location: 'Delhi NCR',
    rating: 5,
    date: '2 weeks ago',
    title: '51-Piece Dinner Set was the star of our Diwali gift box!',
    comment: 'The laser engraving on the plates is so elegant. Unboxing felt like a luxury jewelry box. Thick gauge steel that doesn’t bend when pressed.',
    verifiedPurchase: true,
    productName: 'Imperial Laser Etched 51-Piece Dinner Set',
    userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80'
  }
];

export const RECIPES: RecipeArticle[] = [
  {
    id: 'rec-1',
    title: 'Mastering Slow-Cooked Shahi Paneer in a Tri-Ply Kadai',
    category: 'Cooking Tips & Recipes',
    readTime: '6 min read',
    prepTime: '15 mins',
    servings: '4 Persons',
    author: 'Chef Sanjeev Kumar',
    authorRole: 'Master Culinary Consultant',
    image: KADAI_IMG_1,
    excerpt: 'Discover why Tri-Ply 304 Stainless Steel is essential for simmering rich cashew, tomato, and butter gravy without curdling or charring.',
    utensilUsed: 'Royal Tri-Ply Stainless Steel Heavy Kadai 2.5L',
    utensilProductId: 'uc-triply-kadai-01',
    ingredients: [
      '400g Fresh Cottage Cheese (Paneer), cubed',
      '3 Medium Tomatoes, pureed',
      '15 Cashew Nuts, soaked and blended to smooth paste',
      '2 tbsp Desi Ghee & 1 tbsp Butter',
      '1 tsp Shahi Jeera & Whole Spices (Cardamom, Cloves, Bay Leaf)',
      '1/2 cup Fresh Cream & Kasuri Methi'
    ],
    steps: [
      'Heat 2 tbsp Ghee in your Urban Chef Tri-Ply Kadai on medium flame. The 3-ply body spreads heat uniformly within seconds.',
      'Add Shahi Jeera and whole spices. Sauté until fragrant without scorching.',
      'Pour in tomato puree and simmer for 6 minutes. Notice how the thick aluminium core prevents tomato splatter and bottom sticking.',
      'Fold in cashew paste, spices, and fresh cream. Stir gently.',
      'Add paneer cubes, cover with the toughened glass lid for 4 minutes to trap natural aromas.',
      'Garnish with kasuri methi and serve steaming hot!'
    ],
    tips: [
      'Always preheat stainless steel cookware on medium heat for 1 minute before adding oil for zero sticking.',
      'Covering with the glass lid retains 95% of moisture, reducing cream usage.'
    ],
    date: 'August 02, 2026'
  },
  {
    id: 'rec-2',
    title: 'Why Tri-Ply Stainless Steel Beats Traditional Non-Stick & Cast Iron',
    category: 'Kitchen Hacks',
    readTime: '8 min read',
    prepTime: 'N/A',
    servings: 'N/A',
    author: 'Dr. Meera Vasudevan',
    authorRole: 'Food Scientist & Nutritionist',
    image: KADAI_IMG_2,
    excerpt: 'An in-depth chemical and thermal analysis comparing 304 Surgical Stainless Steel against Teflon, Anodized Aluminium, and Cast Iron.',
    utensilUsed: 'Urban Chef Stainless Steel Cookware Range',
    utensilProductId: 'uc-starter-set-5',
    ingredients: [],
    steps: [
      'Non-stick coatings degrade above 260°C and can leach PTFE fumes. SS304 is 100% inert and heat stable up to 800°C.',
      'Tri-Ply sandwich construction features pure aluminium sealed safely between two stainless steel sheets, giving you cast-iron heat retention without the heavy rust maintenance.',
      'Surgical 18/8 steel does not react with acidic foods like lemon, tamarind, or tomato curry, keeping food natural and toxin-free.'
    ],
    tips: [
      'Wash your cookware with warm water and mild dish soap after it cools down to maintain mirror gloss forever.'
    ],
    date: 'July 28, 2026'
  }
];

export const FAQS = [
  {
    question: 'What is Tri-Ply Stainless Steel and why is it better?',
    answer: 'Tri-Ply cookware consists of three bonded layers: an inner layer of Food-Grade 18/8 (304) Stainless Steel for hygienic toxin-free cooking, a middle core of heavy-gauge Pure Aluminium for fast 360° heat distribution, and an outer magnetic 430 Stainless Steel layer for induction top compatibility. It prevents hotspots and burns food 3x less than single-ply steel.'
  },
  {
    question: 'Are Urban Chef utensils compatible with both Gas Stoves and Induction Cooktops?',
    answer: 'Yes! All Urban Chef Tri-Ply cookware, pressure cookers, tawas, and saucepans are 100% compatible with Gas Stoves, Induction Hobs, Infrared Cooktops, and Electric Coils.'
  },
  {
    question: 'How do I claim my 10-Year Replacement Guarantee?',
    answer: 'Every Urban Chef product comes with a QR code warranty card inside the box. Scan the card to register your purchase online. In case of any structural or manufacturing issue, our doorstep pickup team collects the item and delivers a brand-new unit to your address.'
  },
  {
    question: 'Is stainless steel cookware safe for dishwashers?',
    answer: 'Yes, 100% of our surgical steel products are dishwasher safe and rust-proof. They resist tarnishing, pit corrosion, and food stains.'
  },
  {
    question: 'Do you offer Cash on Delivery (COD) and Free Shipping across India?',
    answer: 'Yes, we provide Free Express Shipping across 19,000+ Indian Pincodes for all orders above ₹499. Cash on Delivery (COD) is available with live OTP verification.'
  }
];

export const COUPONS: Coupon[] = [
  { code: 'URBAN200', discountPercent: 10, maxDiscount: 200, minSpend: 999, description: 'Flat 10% Off (Up to ₹200) on your first purchase' },
  { code: 'TRIPLY500', discountPercent: 15, maxDiscount: 500, minSpend: 2499, description: 'Save ₹500 on Tri-Ply Cookware & Pressure Cookers' },
  { code: 'ROYALCHEF', discountPercent: 20, maxDiscount: 1000, minSpend: 4999, description: 'Flat 20% Off on Orders above ₹4,999' }
];
