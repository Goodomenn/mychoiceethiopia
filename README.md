# MyChoice Ethiopia — Expeditions & Corporate Fleet Logistics

A state-of-the-art dual-funnel digital platform catering simultaneously to **B2C International Leisure Tourists** and **B2B Institutional Logistics & NGO Fleet Leasing** across Ethiopia.

## Strategic Capabilities

- **B2C Leisure & Adventure Expeditions**: Curated journeys across Lalibela, Simien Mountains, Danakil Depression, and Omo Valley with bilingual guides and luxury 4x4 transport.
- **B2B Institutional Fleet Leasing**: Heavy-duty vehicle inventory (Toyota Land Cruiser 4x4 Hardtop HZJ76/78, Prado/V8, Coaster buses, HiAce vans) outfitted with GPS, winches, snorkels, and emergency trauma kits.
- **17 Grade-8 Certified Operators**: Experienced, multilingual drivers trained in defensive driving, vehicle rollover prevention, and off-road mechanical literacy.
- **30-Day Post-Paid Credit Facility**: Standardized credit terms with weekly/monthly timesheet validation and consolidated electronic VAT invoicing for verified UN agencies, diplomatic missions, and international NGOs.
- **3 Regional Physical Hubs**: Staging facilities and operations offices in **Addis Ababa** (HQ, Bole Skylight area), **Semera** (Afar desert gate for Danakil/Erta Ale), and **Mekelle** (Tigray northern base).
- **Corporate Governance & Compliance**: Enforceable policies on Anti-Bribery & Corruption, Human Rights & Fair Labor, Environmental Sustainability (leave-no-trace), and Occupational Health & Safety.
- **Regulatory Credentials**: Business License No. `14/666/128419/2005` | VAT Registration No. `80692` | Verified Active TIN under SIGTAS.

## Project Structure

```
MyChoiceEthiopia/
├── client/          # React 19 + Vite frontend application
│   ├── src/
│   │   ├── components/  # Navbar, Footer, ScrollToTop
│   │   ├── pages/       # Home, Tours, Destinations, CorporateFleet, Governance, Blog, Contact
│   │   └── ...
│   ├── package.json
│   └── vite.config.js
└── server/          # Node.js & Express API backend
    ├── routes/      # tours.js, contact.js
    ├── index.js
    └── package.json
```

## Getting Started

### 1. Run the Frontend (Client)
```powershell
cd client
$env:Path = "C:\Program Files\nodejs;" + $env:Path
npm run dev
```

### 2. Run the Backend (Server)
```powershell
cd server
$env:Path = "C:\Program Files\nodejs;" + $env:Path
npm run dev
```
