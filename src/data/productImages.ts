// High-resolution studio-grade SVG data URIs for 100% accurate product cookware visualization

function svgToDataUri(svgString: string): string {
  return `data:image/svg+xml;utf8,${encodeURIComponent(svgString.trim())}`;
}

// 1. Royal Tri-Ply Kadai
export const KADAI_IMG_1 = svgToDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="100%" height="100%">
  <defs>
    <radialGradient id="bgGlow" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#333333"/>
      <stop offset="100%" stop-color="#141414"/>
    </radialGradient>
    <linearGradient id="metalBody" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f0f3f7"/>
      <stop offset="25%" stop-color="#d0d7de"/>
      <stop offset="50%" stop-color="#9aa2ab"/>
      <stop offset="75%" stop-color="#e2e8f0"/>
      <stop offset="100%" stop-color="#64748b"/>
    </linearGradient>
    <linearGradient id="metalHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.9"/>
      <stop offset="50%" stop-color="#cbd5e1" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="#475569" stop-opacity="0.8"/>
    </linearGradient>
    <linearGradient id="glassLid" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.4"/>
      <stop offset="30%" stop-color="#38bdf8" stop-opacity="0.15"/>
      <stop offset="70%" stop-color="#ffffff" stop-opacity="0.05"/>
      <stop offset="100%" stop-color="#0284c7" stop-opacity="0.2"/>
    </linearGradient>
    <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="25" stdDeviation="20" flood-color="#000000" flood-opacity="0.7"/>
    </filter>
  </defs>

  <!-- Studio Background -->
  <rect width="800" height="800" fill="url(#bgGlow)"/>
  
  <!-- Countertop Reflection Shadow -->
  <ellipse cx="400" cy="650" rx="280" ry="45" fill="#000000" opacity="0.6" filter="blur(15px)"/>

  <!-- KADAI MAIN CONTAINER -->
  <g filter="url(#dropShadow)">
    
    <!-- Left Loop Handle -->
    <path d="M 120 380 C 60 380 50 430 110 450 C 130 455 140 435 135 410 Z" fill="url(#metalBody)" stroke="#475569" stroke-width="3"/>
    <circle cx="130" cy="400" r="5" fill="#334155"/>
    <circle cx="130" cy="430" r="5" fill="#334155"/>

    <!-- Right Loop Handle -->
    <path d="M 680 380 C 740 380 750 430 690 450 C 670 455 660 435 665 410 Z" fill="url(#metalBody)" stroke="#475569" stroke-width="3"/>
    <circle cx="670" cy="400" r="5" fill="#334155"/>
    <circle cx="670" cy="430" r="5" fill="#334155"/>

    <!-- Outer Deep Bowl Outer Base -->
    <path d="M 130 390 C 140 580 250 630 400 630 C 550 630 660 580 670 390 Z" fill="url(#metalBody)"/>
    
    <!-- Metallic Specular Highlight Curve -->
    <path d="M 160 410 C 180 560 270 600 400 600 C 530 600 620 560 640 410 C 580 430 490 440 400 440 C 310 440 220 430 160 410 Z" fill="url(#metalHighlight)" opacity="0.6"/>

    <!-- Heavy Rim Flange -->
    <ellipse cx="400" cy="390" rx="270" ry="45" fill="url(#metalBody)" stroke="#e2e8f0" stroke-width="4"/>
    <ellipse cx="400" cy="390" rx="255" ry="38" fill="#1e293b"/>

    <!-- GLASS LID -->
    <path d="M 150 385 C 160 250 280 200 400 200 C 520 200 640 250 650 385 Z" fill="url(#glassLid)" stroke="url(#metalBody)" stroke-width="8"/>
    
    <!-- Lid Steam Vent -->
    <circle cx="520" cy="270" r="6" fill="#0f172a" stroke="#e2e8f0" stroke-width="2"/>

    <!-- Lid Stainless Handle Knob Base & Loop -->
    <ellipse cx="400" cy="200" rx="45" ry="12" fill="url(#metalBody)"/>
    <path d="M 370 200 C 370 150 430 150 430 200 Z" fill="url(#metalHighlight)" stroke="#334155" stroke-width="3"/>
    
  </g>

  <!-- Product Badge Label -->
  <rect x="250" y="700" width="300" height="40" rx="20" fill="#242424" stroke="#FFD600" stroke-width="2"/>
  <text x="400" y="725" text-anchor="middle" fill="#FFD600" font-family="sans-serif" font-size="14" font-weight="bold" letter-spacing="1">
    ROYAL TRI-PLY KADAI (2.5L)
  </text>
</svg>
`);

export const KADAI_IMG_2 = svgToDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="100%" height="100%">
  <defs>
    <radialGradient id="bgGlow2" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#2a2a2a"/>
      <stop offset="100%" stop-color="#111111"/>
    </radialGradient>
    <linearGradient id="metalBody2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="30%" stop-color="#cbd5e1"/>
      <stop offset="70%" stop-color="#64748b"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
  </defs>
  <rect width="800" height="800" fill="url(#bgGlow2)"/>
  
  <!-- Angle View Kadai without Lid -->
  <ellipse cx="400" cy="620" rx="260" ry="40" fill="#000" opacity="0.5"/>
  <g>
    <!-- Left handle -->
    <path d="M 130 360 C 80 360 70 410 120 430 Z" fill="url(#metalBody2)"/>
    <!-- Right handle -->
    <path d="M 670 360 C 720 360 730 410 680 430 Z" fill="url(#metalBody2)"/>
    <!-- Body -->
    <path d="M 140 370 C 150 560 260 610 400 610 C 540 610 650 560 660 370 Z" fill="url(#metalBody2)"/>
    <ellipse cx="400" cy="370" rx="260" ry="50" fill="url(#metalBody2)" stroke="#fff" stroke-width="3"/>
    <ellipse cx="400" cy="370" rx="240" ry="40" fill="#334155"/>
    <ellipse cx="400" cy="370" rx="230" ry="35" fill="#f8fafc" opacity="0.95"/>
    <text x="400" y="375" text-anchor="middle" fill="#475569" font-family="sans-serif" font-size="12" font-weight="bold">
      SS 304 SURGICAL STEEL INTERIOR
    </text>
  </g>
  <rect x="250" y="700" width="300" height="40" rx="20" fill="#242424" stroke="#FFD600" stroke-width="2"/>
  <text x="400" y="725" text-anchor="middle" fill="#FFD600" font-family="sans-serif" font-size="14" font-weight="bold">
    3-PLY BODY NO HOTSPOTS
  </text>
</svg>
`);

// 2. Pressure Cooker
export const COOKER_IMG_1 = svgToDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="100%" height="100%">
  <defs>
    <radialGradient id="bgGlowC" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#333333"/>
      <stop offset="100%" stop-color="#141414"/>
    </radialGradient>
    <linearGradient id="cookerSteel" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#64748b"/>
      <stop offset="20%" stop-color="#f8fafc"/>
      <stop offset="50%" stop-color="#cbd5e1"/>
      <stop offset="80%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#475569"/>
    </linearGradient>
    <linearGradient id="blackHandle" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#334155"/>
      <stop offset="50%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#020617"/>
    </linearGradient>
  </defs>

  <rect width="800" height="800" fill="url(#bgGlowC)"/>
  <ellipse cx="400" cy="660" rx="230" ry="35" fill="#000000" opacity="0.6"/>

  <!-- COOKER BODY -->
  <g>
    <!-- Helper Side Handle Right -->
    <rect x="610" y="440" width="70" height="30" rx="8" fill="url(#blackHandle)" stroke="#475569"/>

    <!-- Main Long Bakelite Handle Left -->
    <path d="M 80 340 L 250 340 L 250 375 L 80 365 Z" fill="url(#blackHandle)" stroke="#475569"/>

    <!-- Cooker Main Body -->
    <path d="M 230 350 L 230 600 C 230 640 270 650 400 650 C 530 650 570 640 570 600 L 570 350 Z" fill="url(#cookerSteel)"/>
    <ellipse cx="400" cy="350" rx="170" ry="25" fill="url(#cookerSteel)" stroke="#ffffff" stroke-width="2"/>

    <!-- Cooker Outer Lid -->
    <path d="M 220 350 C 220 300 300 270 400 270 C 500 270 580 300 580 350 Z" fill="url(#cookerSteel)"/>
    <ellipse cx="400" cy="350" rx="180" ry="22" fill="none" stroke="#000" stroke-width="4" opacity="0.3"/>

    <!-- Lid Locking Bar Handle -->
    <path d="M 80 330 L 400 330 L 400 350 L 80 345 Z" fill="url(#blackHandle)"/>

    <!-- Pressure Whistle Weight Valve -->
    <rect x="385" y="210" width="30" height="60" rx="5" fill="url(#cookerSteel)" stroke="#000" stroke-width="2"/>
    <rect x="380" y="195" width="40" height="20" rx="4" fill="url(#blackHandle)"/>
    <circle cx="400" cy="185" r="8" fill="#e2e8f0"/>
  </g>

  <rect x="230" y="710" width="340" height="40" rx="20" fill="#242424" stroke="#FFD600" stroke-width="2"/>
  <text x="400" y="735" text-anchor="middle" fill="#FFD600" font-family="sans-serif" font-size="14" font-weight="bold">
    TRI-PLY PRESSURE COOKER (3L)
  </text>
</svg>
`);

// 3. Honeycomb Fry Pan
export const FRYPAN_IMG_1 = svgToDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="100%" height="100%">
  <defs>
    <radialGradient id="bgGlowF" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#2c2c2c"/>
      <stop offset="100%" stop-color="#121212"/>
    </radialGradient>
    <linearGradient id="panSteel" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="40%" stop-color="#cbd5e1"/>
      <stop offset="80%" stop-color="#64748b"/>
      <stop offset="100%" stop-color="#334155"/>
    </linearGradient>
    <pattern id="honeycombPattern" width="20" height="34.64" patternUnits="userSpaceOnUse">
      <path d="M 10 0 L 20 5.77 L 20 17.32 L 10 23.09 L 0 17.32 L 0 5.77 Z" fill="none" stroke="#FFD600" stroke-width="1" opacity="0.6"/>
      <path d="M 10 17.32 L 20 23.09 L 20 34.64 L 10 40.41 L 0 34.64 L 0 23.09 Z" fill="none" stroke="#FFD600" stroke-width="1" opacity="0.6"/>
    </pattern>
  </defs>

  <rect width="800" height="800" fill="url(#bgGlowF)"/>
  <ellipse cx="400" cy="580" rx="250" ry="40" fill="#000" opacity="0.6"/>

  <g>
    <!-- Long Stainless Handle Left -->
    <path d="M 100 280 L 260 400 L 240 425 L 80 305 Z" fill="url(#panSteel)" stroke="#1e293b" stroke-width="3"/>
    <circle cx="105" cy="300" r="8" fill="#0f172a"/>

    <!-- Pan Outer Shallow Body -->
    <path d="M 230 410 C 240 550 310 590 470 590 C 630 590 690 550 700 410 Z" fill="url(#panSteel)"/>
    
    <!-- Pan Rim -->
    <ellipse cx="465" cy="410" rx="235" ry="75" fill="url(#panSteel)" stroke="#fff" stroke-width="3"/>
    <ellipse cx="465" cy="410" rx="220" ry="65" fill="#18181b"/>
    
    <!-- Inner Honeycomb Surface Base -->
    <ellipse cx="465" cy="420" rx="190" ry="50" fill="url(#honeycombPattern)"/>
  </g>

  <rect x="220" y="700" width="360" height="40" rx="20" fill="#242424" stroke="#FFD600" stroke-width="2"/>
  <text x="400" y="725" text-anchor="middle" fill="#FFD600" font-family="sans-serif" font-size="14" font-weight="bold">
    PRO-SHIELD HONEYCOMB PAN (28CM)
  </text>
</svg>
`);

// 4. Casserole Set
export const CASSEROLE_IMG_1 = svgToDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="100%" height="100%">
  <defs>
    <radialGradient id="bgGlowCas" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#333"/>
      <stop offset="100%" stop-color="#111"/>
    </radialGradient>
    <linearGradient id="casSteel" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="50%" stop-color="#cbd5e1"/>
      <stop offset="100%" stop-color="#475569"/>
    </linearGradient>
    <linearGradient id="roseGold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f2d7d5"/>
      <stop offset="50%" stop-color="#e6b0aa"/>
      <stop offset="100%" stop-color="#c0392b"/>
    </linearGradient>
  </defs>

  <rect width="800" height="800" fill="url(#bgGlowCas)"/>
  
  <!-- Large Casserole Back Right -->
  <g transform="translate(100, -20)">
    <ellipse cx="450" cy="480" rx="170" ry="25" fill="#000" opacity="0.4"/>
    <path d="M 300 350 L 300 470 C 300 500 340 510 450 510 C 560 510 600 500 600 470 L 600 350 Z" fill="url(#casSteel)"/>
    <ellipse cx="450" cy="350" rx="150" ry="30" fill="url(#casSteel)"/>
    <ellipse cx="450" cy="320" rx="140" ry="25" fill="url(#casSteel)" stroke="url(#roseGold)" stroke-width="4"/>
    <circle cx="450" cy="300" r="18" fill="url(#roseGold)"/>
  </g>

  <!-- Small/Medium Casserole Front Left -->
  <g transform="translate(-80, 60)">
    <ellipse cx="380" cy="500" rx="160" ry="25" fill="#000" opacity="0.6"/>
    <!-- Handles -->
    <rect x="190" y="380" width="30" height="40" rx="6" fill="url(#roseGold)"/>
    <rect x="540" y="380" width="30" height="40" rx="6" fill="url(#roseGold)"/>
    
    <path d="M 210 370 L 210 490 C 210 520 250 530 380 530 C 510 530 550 520 550 490 L 550 370 Z" fill="url(#casSteel)"/>
    <ellipse cx="380" cy="370" rx="170" ry="30" fill="url(#casSteel)"/>
    <ellipse cx="380" cy="340" rx="155" ry="25" fill="url(#casSteel)" stroke="url(#roseGold)" stroke-width="5"/>
    <circle cx="380" cy="315" r="20" fill="url(#roseGold)"/>
  </g>

  <rect x="220" y="700" width="360" height="40" rx="20" fill="#242424" stroke="#FFD600" stroke-width="2"/>
  <text x="400" y="725" text-anchor="middle" fill="#FFD600" font-family="sans-serif" font-size="14" font-weight="bold">
    THERMAL CASSEROLE 3-PIECE SET
  </text>
</svg>
`);

// 5. 51-Piece Dinner Set
export const DINNERSET_IMG_1 = svgToDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="100%" height="100%">
  <defs>
    <radialGradient id="bgGlowD" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#2a2a2a"/>
      <stop offset="100%" stop-color="#0f0f0f"/>
    </radialGradient>
    <linearGradient id="thaliSteel" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="30%" stop-color="#e2e8f0"/>
      <stop offset="70%" stop-color="#94a3b8"/>
      <stop offset="100%" stop-color="#475569"/>
    </linearGradient>
  </defs>

  <rect width="800" height="800" fill="url(#bgGlowD)"/>
  
  <g>
    <!-- Main Royal Thali Plate -->
    <ellipse cx="400" cy="460" rx="280" ry="180" fill="#000" opacity="0.5"/>
    <ellipse cx="400" cy="440" rx="280" ry="170" fill="url(#thaliSteel)"/>
    <ellipse cx="400" cy="440" rx="260" ry="150" fill="url(#thaliSteel)" stroke="#FFD600" stroke-width="2" stroke-dasharray="8 6"/>
    <ellipse cx="400" cy="440" rx="210" ry="120" fill="#f8fafc"/>

    <!-- Bowls (Katoris) arranged inside -->
    <ellipse cx="260" cy="380" rx="45" ry="30" fill="url(#thaliSteel)" stroke="#64748b"/>
    <ellipse cx="350" cy="350" rx="45" ry="30" fill="url(#thaliSteel)" stroke="#64748b"/>
    <ellipse cx="450" cy="350" rx="45" ry="30" fill="url(#thaliSteel)" stroke="#64748b"/>
    <ellipse cx="540" cy="380" rx="45" ry="30" fill="url(#thaliSteel)" stroke="#64748b"/>

    <!-- Stainless Tumbler Glass -->
    <rect x="620" y="260" width="70" height="110" rx="10" fill="url(#thaliSteel)" stroke="#ffffff"/>
    <ellipse cx="655" cy="260" rx="35" ry="12" fill="#e2e8f0"/>

    <!-- Spoon -->
    <path d="M 200 480 Q 250 500 320 460" fill="none" stroke="url(#thaliSteel)" stroke-width="12" stroke-linecap="round"/>
  </g>

  <rect x="200" y="700" width="400" height="40" rx="20" fill="#242424" stroke="#FFD600" stroke-width="2"/>
  <text x="400" y="725" text-anchor="middle" fill="#FFD600" font-family="sans-serif" font-size="14" font-weight="bold">
    IMPERIAL 51-PIECE DINNER THALI SET
  </text>
</svg>
`);

// 6. Tri-Ply Tawa
export const TAWA_IMG_1 = svgToDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="100%" height="100%">
  <defs>
    <radialGradient id="bgGlowT" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#333"/>
      <stop offset="100%" stop-color="#141414"/>
    </radialGradient>
    <linearGradient id="tawaSteel" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="50%" stop-color="#cbd5e1"/>
      <stop offset="100%" stop-color="#475569"/>
    </linearGradient>
  </defs>

  <rect width="800" height="800" fill="url(#bgGlowT)"/>
  
  <g>
    <!-- Long Handle Left -->
    <path d="M 90 260 L 280 410 L 260 435 L 70 285 Z" fill="#1e293b" stroke="#64748b" stroke-width="3"/>
    
    <!-- Flat Tawa Surface -->
    <ellipse cx="480" cy="450" rx="250" ry="120" fill="#000" opacity="0.5"/>
    <ellipse cx="480" cy="430" rx="250" ry="120" fill="url(#tawaSteel)"/>
    <ellipse cx="480" cy="430" rx="235" ry="105" fill="url(#tawaSteel)" stroke="#ffffff" stroke-width="2"/>
    <ellipse cx="480" cy="430" rx="200" ry="90" fill="#cbd5e1" opacity="0.4"/>
  </g>

  <rect x="230" y="700" width="340" height="40" rx="20" fill="#242424" stroke="#FFD600" stroke-width="2"/>
  <text x="400" y="725" text-anchor="middle" fill="#FFD600" font-family="sans-serif" font-size="14" font-weight="bold">
    TRI-PLY DOSA & ROTI TAWA (28CM)
  </text>
</svg>
`);

// 7. Water Bottle
export const BOTTLE_IMG_1 = svgToDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="100%" height="100%">
  <defs>
    <radialGradient id="bgGlowB" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#2a2a2a"/>
      <stop offset="100%" stop-color="#111111"/>
    </radialGradient>
    <linearGradient id="bottleMatte" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#1e293b"/>
      <stop offset="40%" stop-color="#475569"/>
      <stop offset="70%" stop-color="#334155"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <linearGradient id="capSteel" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#64748b"/>
    </linearGradient>
  </defs>

  <rect width="800" height="800" fill="url(#bgGlowB)"/>
  <ellipse cx="400" cy="660" rx="100" ry="25" fill="#000" opacity="0.6"/>

  <g>
    <!-- Bottle Body -->
    <path d="M 320 250 L 320 630 C 320 655 350 660 400 660 C 450 660 480 655 480 630 L 480 250 Z" fill="url(#bottleMatte)"/>
    <!-- Shoulder -->
    <path d="M 350 190 L 320 250 L 480 250 L 450 190 Z" fill="url(#bottleMatte)"/>
    <!-- Neck & Cap -->
    <rect x="360" y="140" width="80" height="50" rx="6" fill="url(#capSteel)"/>
    <rect x="350" y="110" width="100" height="30" rx="8" fill="url(#capSteel)" stroke="#334155"/>
  </g>

  <rect x="220" y="700" width="360" height="40" rx="20" fill="#242424" stroke="#FFD600" stroke-width="2"/>
  <text x="400" y="725" text-anchor="middle" fill="#FFD600" font-family="sans-serif" font-size="14" font-weight="bold">
    HYDRO-SHIELD VACUUM FLASK (1000ML)
  </text>
</svg>
`);

// 8. Saucepan
export const SAUCEPAN_IMG_1 = svgToDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="100%" height="100%">
  <defs>
    <radialGradient id="bgGlowS" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#333"/>
      <stop offset="100%" stop-color="#141414"/>
    </radialGradient>
    <linearGradient id="sauceSteel" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="50%" stop-color="#cbd5e1"/>
      <stop offset="100%" stop-color="#475569"/>
    </linearGradient>
  </defs>

  <rect width="800" height="800" fill="url(#bgGlowS)"/>
  <ellipse cx="460" cy="620" rx="180" ry="30" fill="#000" opacity="0.5"/>

  <g>
    <!-- Long Handle Left -->
    <path d="M 120 310 L 320 400 L 300 425 L 100 335 Z" fill="url(#sauceSteel)" stroke="#1e293b" stroke-width="3"/>
    <circle cx="125" cy="330" r="7" fill="#0f172a"/>

    <!-- Saucepan Deep Body -->
    <path d="M 310 390 L 310 590 C 310 620 360 630 460 630 C 560 630 610 620 610 590 L 610 390 Z" fill="url(#sauceSteel)"/>
    <ellipse cx="460" cy="390" rx="150" ry="30" fill="url(#sauceSteel)" stroke="#fff"/>

    <!-- Pour Spout Lip Right -->
    <path d="M 610 380 Q 640 375 620 400 Z" fill="url(#sauceSteel)"/>

    <!-- Glass Lid -->
    <path d="M 320 385 C 330 280 400 240 460 240 C 520 240 590 280 600 385 Z" fill="#38bdf8" opacity="0.2" stroke="url(#sauceSteel)" stroke-width="6"/>
    <circle cx="460" cy="240" r="16" fill="url(#sauceSteel)"/>
  </g>

  <rect x="230" y="700" width="340" height="40" rx="20" fill="#242424" stroke="#FFD600" stroke-width="2"/>
  <text x="400" y="725" text-anchor="middle" fill="#FFD600" font-family="sans-serif" font-size="14" font-weight="bold">
    TRI-PLY TEA & MILK SAUCEPAN (1.5L)
  </text>
</svg>
`);

// 9. Lunchbox Tiffin
export const LUNCHBOX_IMG_1 = svgToDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="100%" height="100%">
  <defs>
    <radialGradient id="bgGlowL" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#2a2a2a"/>
      <stop offset="100%" stop-color="#111111"/>
    </radialGradient>
    <linearGradient id="tiffinSteel" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="50%" stop-color="#cbd5e1"/>
      <stop offset="100%" stop-color="#64748b"/>
    </linearGradient>
  </defs>

  <rect width="800" height="800" fill="url(#bgGlowL)"/>
  <ellipse cx="400" cy="650" rx="140" ry="30" fill="#000" opacity="0.6"/>

  <g>
    <!-- Tier 4 Bottom -->
    <rect x="280" y="520" width="240" height="100" rx="12" fill="url(#tiffinSteel)" stroke="#334155" stroke-width="2"/>
    <!-- Tier 3 -->
    <rect x="280" y="410" width="240" height="100" rx="12" fill="url(#tiffinSteel)" stroke="#334155" stroke-width="2"/>
    <!-- Tier 2 -->
    <rect x="280" y="300" width="240" height="100" rx="12" fill="url(#tiffinSteel)" stroke="#334155" stroke-width="2"/>
    <!-- Tier 1 Top -->
    <rect x="280" y="190" width="240" height="100" rx="12" fill="url(#tiffinSteel)" stroke="#334155" stroke-width="2"/>

    <!-- Side Metal Frame Latch -->
    <path d="M 260 180 L 260 630 M 540 180 L 540 630" stroke="#FFD600" stroke-width="8" stroke-linecap="round"/>
    <!-- Top Carry Handle -->
    <path d="M 330 180 C 330 110 470 110 470 180" fill="none" stroke="#FFD600" stroke-width="12" stroke-linecap="round"/>
  </g>

  <rect x="200" y="700" width="400" height="40" rx="20" fill="#242424" stroke="#FFD600" stroke-width="2"/>
  <text x="400" y="725" text-anchor="middle" fill="#FFD600" font-family="sans-serif" font-size="14" font-weight="bold">
    4-TIER EXECUTIVE LUNCHBOX TIFFIN
  </text>
</svg>
`);

// 10. Cooking Tools Set
export const TOOLS_IMG_1 = svgToDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="100%" height="100%">
  <defs>
    <radialGradient id="bgGlowTl" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#333"/>
      <stop offset="100%" stop-color="#141414"/>
    </radialGradient>
    <linearGradient id="toolSteel" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="50%" stop-color="#cbd5e1"/>
      <stop offset="100%" stop-color="#475569"/>
    </linearGradient>
  </defs>

  <rect width="800" height="800" fill="url(#bgGlowTl)"/>
  <ellipse cx="400" cy="660" rx="160" ry="35" fill="#000" opacity="0.6"/>

  <g>
    <!-- Revolving Stand Base -->
    <ellipse cx="400" cy="640" rx="150" ry="25" fill="url(#toolSteel)"/>
    <rect x="385" y="200" width="30" height="440" fill="url(#toolSteel)"/>
    <circle cx="400" cy="180" r="40" fill="url(#toolSteel)"/>

    <!-- Hung Utensils -->
    <!-- Ladle -->
    <path d="M 280 200 L 280 500 C 250 500 240 550 280 570 C 310 550 300 500 280 500" fill="url(#toolSteel)"/>
    <!-- Slotted Turner -->
    <rect x="325" y="200" width="12" height="320" rx="4" fill="url(#toolSteel)"/>
    <rect x="310" y="510" width="45" height="70" rx="6" fill="url(#toolSteel)"/>
    <!-- Skimmer -->
    <rect x="460" y="200" width="12" height="320" rx="4" fill="url(#toolSteel)"/>
    <circle cx="466" cy="540" r="35" fill="url(#toolSteel)"/>
    <!-- Whisk -->
    <rect x="510" y="200" width="12" height="300" rx="4" fill="url(#toolSteel)"/>
    <ellipse cx="516" cy="540" rx="20" ry="35" fill="none" stroke="url(#toolSteel)" stroke-width="4"/>
  </g>

  <rect x="200" y="700" width="400" height="40" rx="20" fill="#242424" stroke="#FFD600" stroke-width="2"/>
  <text x="400" y="725" text-anchor="middle" fill="#FFD600" font-family="sans-serif" font-size="14" font-weight="bold">
    7-PIECE STAINLESS UTENSIL TOOL SET
  </text>
</svg>
`);

// 11. Cookware Master Set
export const MASTERSET_IMG_1 = svgToDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="100%" height="100%">
  <defs>
    <radialGradient id="bgGlowM" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#333"/>
      <stop offset="100%" stop-color="#111"/>
    </radialGradient>
    <linearGradient id="setSteel" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="50%" stop-color="#cbd5e1"/>
      <stop offset="100%" stop-color="#475569"/>
    </linearGradient>
  </defs>

  <rect width="800" height="800" fill="url(#bgGlowM)"/>
  
  <!-- Grouped Cookware Display -->
  <g>
    <!-- Pressure Cooker Back Left -->
    <rect x="180" y="280" width="180" height="180" rx="20" fill="url(#setSteel)"/>
    
    <!-- Kadai Center -->
    <path d="M 300 400 C 310 580 430 620 520 620 C 610 620 690 580 700 400 Z" fill="url(#setSteel)"/>
    <ellipse cx="500" cy="400" rx="200" ry="40" fill="url(#setSteel)"/>

    <!-- Fry Pan Front Left -->
    <path d="M 120 500 C 130 620 220 650 360 650 C 500 650 550 620 560 500 Z" fill="url(#setSteel)"/>
    <ellipse cx="340" cy="500" rx="220" ry="35" fill="url(#setSteel)"/>
  </g>

  <rect x="180" y="700" width="440" height="40" rx="20" fill="#242424" stroke="#FFD600" stroke-width="2"/>
  <text x="400" y="725" text-anchor="middle" fill="#FFD600" font-family="sans-serif" font-size="14" font-weight="bold">
    GRAND ROYAL 5-PIECE COOKWARE MASTER SET
  </text>
</svg>
`);

// 12. Masala Dabba
export const MASALA_DABBA_IMG_1 = svgToDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="100%" height="100%">
  <defs>
    <radialGradient id="bgGlowMD" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#2c2c2c"/>
      <stop offset="100%" stop-color="#121212"/>
    </radialGradient>
    <linearGradient id="boxSteel" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="50%" stop-color="#cbd5e1"/>
      <stop offset="100%" stop-color="#475569"/>
    </linearGradient>
  </defs>

  <rect width="800" height="800" fill="url(#bgGlowMD)"/>
  <ellipse cx="400" cy="480" rx="270" ry="170" fill="#000" opacity="0.6"/>

  <g>
    <!-- Outer Round Box Body -->
    <ellipse cx="400" cy="460" rx="270" ry="160" fill="url(#boxSteel)"/>
    <ellipse cx="400" cy="440" rx="250" ry="140" fill="#18181b"/>

    <!-- 7 Inner Spice Cups (Katoris) with Spices -->
    <!-- Center Cup: Turmeric Yellow -->
    <ellipse cx="400" cy="440" rx="55" ry="35" fill="url(#boxSteel)"/>
    <ellipse cx="400" cy="440" rx="48" ry="30" fill="#eab308"/>

    <!-- Cup 1 Top: Red Chili Powder -->
    <ellipse cx="400" cy="340" rx="55" ry="35" fill="url(#boxSteel)"/>
    <ellipse cx="400" cy="340" rx="48" ry="30" fill="#dc2626"/>

    <!-- Cup 2 Top Right: Coriander Green -->
    <ellipse cx="510" cy="370" rx="55" ry="35" fill="url(#boxSteel)"/>
    <ellipse cx="510" cy="370" rx="48" ry="30" fill="#15803d"/>

    <!-- Cup 3 Bottom Right: Cumin Brown -->
    <ellipse cx="510" cy="490" rx="55" ry="35" fill="url(#boxSteel)"/>
    <ellipse cx="510" cy="490" rx="48" ry="30" fill="#78350f"/>

    <!-- Cup 4 Bottom: Mustard Seeds Black -->
    <ellipse cx="400" cy="520" rx="55" ry="35" fill="url(#boxSteel)"/>
    <ellipse cx="400" cy="520" rx="48" ry="30" fill="#27272a"/>

    <!-- Cup 5 Bottom Left: Garam Masala Dark Brown -->
    <ellipse cx="290" cy="490" rx="55" ry="35" fill="url(#boxSteel)"/>
    <ellipse cx="290" cy="490" rx="48" ry="30" fill="#451a03"/>

    <!-- Cup 6 Top Left: Amchur / Salt White -->
    <ellipse cx="290" cy="370" rx="55" ry="35" fill="url(#boxSteel)"/>
    <ellipse cx="290" cy="370" rx="48" ry="30" fill="#f4f4f5"/>

    <!-- Clear Glass Lid Rim Overlay -->
    <ellipse cx="400" cy="440" rx="270" ry="160" fill="#38bdf8" opacity="0.1" stroke="url(#boxSteel)" stroke-width="8"/>
  </g>

  <rect x="200" y="700" width="400" height="40" rx="20" fill="#242424" stroke="#FFD600" stroke-width="2"/>
  <text x="400" y="725" text-anchor="middle" fill="#FFD600" font-family="sans-serif" font-size="14" font-weight="bold">
    AIRTIGHT MASALA DABBA SPICE BOX
  </text>
</svg>
`);
