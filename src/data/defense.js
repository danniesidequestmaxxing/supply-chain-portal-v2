// DATA — DEFENSE & AEROSPACE SUPPLY CHAIN
// Approximate valuations as of March 2026. Sources: Yahoo Finance, StockAnalysis, GuruFocus.
// PE = forward P/E. EV = EV/EBITDA. MC = market cap. FCF = FCF yield %.

export const TIERS = [
  {
    id:"government", label:"GOVERNMENT & ALLIES — The budget holders", icon:"🏛️", stream:"demand",
    what:"The ultimate demand signal: US DoD at $886B in FY2025 authorized spending, NATO allies collectively exceeding $380B as European nations race toward 2%+ GDP targets, and Indo-Pacific allies (Japan $56B, Australia $33B, South Korea $48B) accelerating procurement cycles in response to Chinese military modernization.",
    industry:"Defense budgets are sovereign and non-cyclical relative to GDP, but procurement timelines stretch 5-15 years. The real driver is not total spend but the composition shift — away from legacy platforms and toward precision munitions, autonomous systems, space, and cyber.",
    value:"Not directly investable, but budget trajectory and program-of-record decisions are the single most important variable for every tier below. The NATO rearmament cycle is the most significant structural tailwind since the Reagan buildup.",
    medPE:null, medEV:null, medFCF:null,
    cos:[
      {t:"—",n:"US Department of Defense",px:"N/A",pe:null,ev:null,mc:"$886B budget",v:"FY2025 enacted",beta:null,fcf:null,revGr:3,ebitdaMargin:null,yf:null,desc:"The single largest defense customer globally, with $886B in FY2025 authorized spending spanning procurement, RDT&E, operations, and personnel across all service branches and combatant commands.",products:"Procurement, RDT&E, O&M budgets",clients:"N/A",gtcThemes:[]},
      {t:"—",n:"NATO Europe",px:"N/A",pe:null,ev:null,mc:"$380B+ combined",v:"NATO 2025 est",beta:null,fcf:null,revGr:12,ebitdaMargin:null,yf:null,desc:"European NATO allies are collectively surging defense spending toward the 2% GDP target, with Germany alone committing a EUR 100B special fund and Poland reaching 4% of GDP, creating the largest European rearmament wave since the Cold War.",products:"National defense budgets, multinational programs",clients:"N/A",gtcThemes:['nato-rearm']},
      {t:"—",n:"Indo-Pacific Allies",px:"N/A",pe:null,ev:null,mc:"$180B+ combined",v:"2025 est",beta:null,fcf:null,revGr:8,ebitdaMargin:null,yf:null,desc:"Japan, Australia, South Korea, and India are collectively accelerating defense modernization in response to Chinese military expansion, with Japan doubling its defense budget to 2% of GDP by 2027 and Australia committing $368B AUD to AUKUS submarine procurement.",products:"National defense budgets, bilateral programs",clients:"N/A",gtcThemes:['naval-buildup']},
      {t:"—",n:"Middle East Buyers",px:"N/A",pe:null,ev:null,mc:"$120B+ combined",v:"2025 est",beta:null,fcf:null,revGr:5,ebitdaMargin:null,yf:null,desc:"Saudi Arabia, UAE, Israel, and Qatar represent the largest per-capita defense spenders globally, with Saudi Arabia alone budgeting over $75B annually and the UAE emerging as a major buyer of advanced Western and domestically developed systems.",products:"FMS procurement, domestic programs",clients:"N/A",gtcThemes:[]},
    ]
  },
  {
    id:"primes", label:"PRIME CONTRACTORS — The integrators", icon:"🏗️", stream:"downstream",
    what:"The six US primes plus BAE Systems capture roughly 35% of the DoD's annual procurement and RDT&E budget through cost-plus and fixed-price contracts. They function as system integrators, subcontracting 60-70% of program value to lower tiers while retaining design authority and customer relationships.",
    industry:"A stable oligopoly with exceptionally high barriers to entry — security clearances, classified program access, decades-long customer relationships, and multi-billion-dollar fixed-cost engineering organizations. New entrants essentially cannot compete for large platform programs.",
    value:"Primes trade at 17-20x forward earnings with 4-6% FCF yields, reflecting their utility-like contract backlog visibility. The real alpha is in identifying which primes have the best exposure to growing budget categories (hypersonics, space, autonomous) vs legacy platforms facing cuts.",
    medPE:18, medEV:14, medFCF:5,
    cos:[
      {t:"LMT",n:"Lockheed Martin",px:"$480",pe:17,ev:14,mc:"$115B",v:"Est 3/23",beta:0.7,fcf:5.0,revGr:5,ebitdaMargin:15,yf:"LMT",desc:"Lockheed Martin is the world's largest defense contractor by revenue, operating as the sole-source prime on the F-35 Joint Strike Fighter program which represents roughly 27% of revenue and has a $400B+ lifetime backlog across 3,300+ aircraft for 18 nations.",products:"F-35, HIMARS, Aegis, THAAD, Javelin, C-130J, Black Hawk",clients:"US DoD, NATO allies, Japan, Saudi Arabia, Australia",gtcThemes:['nato-rearm','munitions-surge']},
      {t:"RTX",n:"RTX Corp",px:"$130",pe:19,ev:15,mc:"$195B",v:"Est 3/23",beta:0.8,fcf:4.5,revGr:7,ebitdaMargin:16,yf:"RTX",desc:"RTX Corp (formerly Raytheon Technologies) is the product of the 2020 Raytheon-UTC merger, combining Pratt & Whitney's engine monopoly on the F-35 and F135 with Raytheon's dominance in missile systems, radar, and electronic warfare across virtually every US and allied combat platform.",products:"Patriot, Stinger, AMRAAM, F135 engine, AN/APG radars",clients:"US DoD, NATO, Saudi Arabia, Japan, Australia",gtcThemes:['nato-rearm','munitions-surge']},
      {t:"NOC",n:"Northrop Grumman",px:"$520",pe:20,ev:16,mc:"$78B",v:"Est 3/23",beta:0.6,fcf:4.0,revGr:4,ebitdaMargin:16,yf:"NOC",desc:"Northrop Grumman is the prime contractor on the B-21 Raider stealth bomber and the Sentinel ICBM replacement — two of the Pentagon's largest classified programs — while also operating as the sole supplier of solid rocket motors for submarine-launched ballistic missiles.",products:"B-21 Raider, Sentinel GBSD, BACN, Triton, solid rocket motors",clients:"US Air Force, US Navy, classified programs",gtcThemes:['space-dominance']},
      {t:"BA",n:"Boeing Defense",px:"$175",pe:null,ev:35,mc:"$135B",v:"Est 3/23",beta:1.5,fcf:-2.0,revGr:-3,ebitdaMargin:5,yf:"BA",desc:"Boeing Defense, Space & Security is the second-largest US defense contractor by revenue, producing the F/A-18, Apache, KC-46 tanker, and various satellite systems, though the company is burdened by fixed-price development losses on programs like T-7A, MQ-25, and the VC-25B presidential aircraft.",products:"F/A-18, Apache, KC-46, T-7A, MQ-25, satellites",clients:"US DoD, NATO, Middle East, Asia-Pacific allies",gtcThemes:['legacy-platforms']},
      {t:"GD",n:"General Dynamics",px:"$285",pe:18,ev:13,mc:"$78B",v:"Est 3/23",beta:0.7,fcf:5.5,revGr:6,ebitdaMargin:14,yf:"GD",desc:"General Dynamics operates across four segments spanning combat vehicles (Abrams, Stryker), nuclear submarines (Columbia and Virginia-class at Electric Boat), IT services (GDIT), and business aviation (Gulfstream), providing a uniquely diversified defense-industrial portfolio.",products:"Abrams, Stryker, Columbia-class sub, Virginia-class sub, Gulfstream",clients:"US Army, US Navy, NATO, business aviation",gtcThemes:['naval-buildup','nato-rearm']},
      {t:"LHX",n:"L3Harris Technologies",px:"$230",pe:18,ev:14,mc:"$44B",v:"Est 3/23",beta:0.8,fcf:5.0,revGr:8,ebitdaMargin:17,yf:"LHX",desc:"L3Harris is the sixth-largest US defense contractor, specializing in communications, electronic warfare, ISR sensors, and space payloads, with the 2023 Aerojet Rocketdyne acquisition adding solid and liquid rocket propulsion to create a vertically integrated defense platform.",products:"Tactical radios, EW systems, ISR sensors, rocket motors, space payloads",clients:"US DoD, Five Eyes, NATO, Space Force",gtcThemes:['space-dominance','autonomous']},
      {t:"BAESY",n:"BAE Systems",px:"$75",pe:19,ev:14,mc:"$55B",v:"Est 3/23",beta:0.7,fcf:4.0,revGr:10,ebitdaMargin:13,yf:"BAESY",desc:"BAE Systems is Europe's largest defense company and a critical supplier to both UK and US armed forces, producing the Typhoon fighter, Astute-class submarines, electronic warfare systems, and combat vehicles, with roughly 40% of revenue derived from US operations.",products:"Typhoon, Astute sub, Tempest, M777, Bradley upgrade, EW systems",clients:"UK MoD, US DoD, Saudi Arabia, Australia",gtcThemes:['nato-rearm']},
    ]
  },
  {
    id:"mission", label:"MISSION SYSTEMS & ELECTRONICS — Sensors and C4ISR", icon:"📡", stream:"downstream",
    what:"This tier encompasses the brains of modern weapons platforms — radar, electronic warfare, avionics, command-and-control, and intelligence systems. These companies provide the sensor suites, mission computers, and software that transform metal airframes into combat-effective systems.",
    industry:"A fragmented market with deep specialization and long qualification cycles. Companies in this tier often hold sole-source positions on specific subsystems, creating durable competitive moats protected by ITAR export controls and classified technology access.",
    value:"Valuations range widely from 15x for mid-cap specialists to 25x for premium platforms. The best opportunities are companies with sole-source positions on growing programs that the market treats as generic defense mid-caps.",
    medPE:22, medEV:16, medFCF:4,
    cos:[
      {t:"ESLT",n:"Elbit Systems",px:"$260",pe:25,ev:18,mc:"$11.5B",v:"Est 3/23",beta:0.8,fcf:3.5,revGr:12,ebitdaMargin:14,yf:"ESLT",desc:"Elbit Systems is Israel's largest defense electronics company, battle-testing its systems in continuous operational environments and exporting across 60+ countries, with particular strength in UAVs, helmet-mounted displays, precision munitions, and C4ISR networks.",products:"Hermes UAVs, DIRCM, helmet displays, Iron Fist APS, precision munitions",clients:"IDF, NATO armies, Indo-Pacific, Latin America",gtcThemes:['autonomous','nato-rearm']},
      {t:"MRCY",n:"Mercury Systems",px:"$38",pe:35,ev:20,mc:"$2.2B",v:"Est 3/23",beta:1.2,fcf:1.5,revGr:5,ebitdaMargin:12,yf:"MRCY",desc:"Mercury Systems specializes in ruggedized processing subsystems and mission computers for defense platforms, serving as an embedded computing supplier within radar, EW, and weapons systems produced by the prime contractors.",products:"Mission computers, GPGPU modules, RF subsystems, SFF servers",clients:"LMT, RTX, NOC, L3Harris, US DoD",gtcThemes:[]},
      {t:"CW",n:"Curtiss-Wright",px:"$320",pe:24,ev:17,mc:"$12B",v:"Est 3/23",beta:0.9,fcf:4.0,revGr:7,ebitdaMargin:20,yf:"CW",desc:"Curtiss-Wright is a diversified defense electronics and industrial company supplying naval reactor components, ruggedized COTS electronics, and actuation systems across submarines, aircraft carriers, and fighter aircraft programs.",products:"Naval reactor pumps, rugged electronics, actuation, sensors",clients:"US Navy (CVN, SSN), LMT, BA, nuclear utilities",gtcThemes:['naval-buildup']},
      {t:"HEI",n:"HEICO Corporation",px:"$250",pe:55,ev:35,mc:"$35B",v:"Est 3/23",beta:0.9,fcf:2.0,revGr:15,ebitdaMargin:28,yf:"HEI",desc:"HEICO is the premier aerospace aftermarket and specialty electronics conglomerate, operating 80+ niche businesses that manufacture FAA-approved replacement parts, electronic components, and specialty connectors for both commercial and military aircraft applications.",products:"PMA replacement parts, electronic components, connectors, thermal products",clients:"Airlines, MROs, defense primes, OEMs",gtcThemes:[]},
      {t:"LDOS",n:"Leidos",px:"$155",pe:16,ev:12,mc:"$21B",v:"Est 3/23",beta:0.8,fcf:5.5,revGr:5,ebitdaMargin:11,yf:"LDOS",desc:"Leidos is the largest IT services contractor to the US government, operating across defense, intelligence, civil, and health markets, with major program wins including the Defense Enclave Services contract and the Managed Health Services program.",products:"IT services, C4ISR, digital modernization, health IT, intelligence analytics",clients:"US DoD, IC, DHS, VA, FAA",gtcThemes:[]},
      {t:"CACI",n:"CACI International",px:"$440",pe:20,ev:15,mc:"$10B",v:"Est 3/23",beta:0.8,fcf:4.5,revGr:12,ebitdaMargin:12,yf:"CACI",desc:"CACI International is a pure-play national security company providing signals intelligence, cyber operations, electronic warfare, and enterprise IT services to the US intelligence community and Department of Defense.",products:"SIGINT, cyber, EW, enterprise IT, C4ISR, photonics",clients:"US IC, DoD, DHS, allied governments",gtcThemes:['autonomous']},
      {t:"BAH",n:"Booz Allen Hamilton",px:"$145",pe:22,ev:16,mc:"$19B",v:"Est 3/23",beta:0.8,fcf:4.0,revGr:10,ebitdaMargin:11,yf:"BAH",desc:"Booz Allen Hamilton is the dominant provider of AI, analytics, and digital transformation consulting to the US defense and intelligence communities, with deep embedded relationships across every major IC agency and combatant command.",products:"AI/ML consulting, cyber, digital transformation, analytics, engineering",clients:"US IC, DoD, DHS, civilian agencies",gtcThemes:['autonomous']},
    ]
  },
  {
    id:"propulsion", label:"PROPULSION & ENGINES — Power plants", icon:"🔥", stream:"midstream",
    what:"Military and commercial jet engines represent one of the highest-barrier manufacturing domains in the industrialized world, requiring single-crystal turbine blade casting, advanced thermal coatings, and metallurgical precision that limits the global supplier base to essentially four companies.",
    industry:"A natural oligopoly — GE Aerospace, Pratt & Whitney (RTX), Rolls-Royce, and Safran dominate Western military and commercial propulsion. Engines are sold near cost, with aftermarket service contracts generating 60-70% gross margins over 20-30 year service lives.",
    value:"GE Aerospace post-spin trades at a premium reflecting its commercial aftermarket dominance and LEAP installed base. Safran offers European exposure at a more reasonable multiple. The real value creation is in the aftermarket annuity streams, not initial engine sales.",
    medPE:28, medEV:18, medFCF:4,
    cos:[
      {t:"GE",n:"GE Aerospace",px:"$195",pe:32,ev:22,mc:"$212B",v:"Est 3/23",beta:1.1,fcf:3.0,revGr:12,ebitdaMargin:25,yf:"GE",desc:"GE Aerospace is the world's largest jet engine manufacturer by installed base following its 2024 spin-off, with the LEAP engine powering the 737 MAX and A320neo fleets and the GE9X holding a monopoly on the Boeing 777X wide-body program.",products:"LEAP, GE9X, F110, F414, T700, CFM56 aftermarket",clients:"Boeing, Airbus, US DoD, airlines globally",gtcThemes:[]},
      {t:"SAFRY",n:"Safran",px:"$45",pe:28,ev:18,mc:"$95B",v:"Est 3/23",beta:0.9,fcf:3.5,revGr:15,ebitdaMargin:18,yf:"SAFRY",desc:"Safran is the French aerospace engine and systems manufacturer, co-producing the LEAP engine through its CFM International joint venture with GE while also supplying landing gear, nacelles, and avionics across major commercial and military platforms.",products:"LEAP (via CFM), M88 (Rafale), landing gear, nacelles, avionics",clients:"Airbus, Dassault, French MoD, airlines",gtcThemes:['nato-rearm']},
      {t:"RYCEY",n:"Rolls-Royce",px:"$8.50",pe:22,ev:14,mc:"$45B",v:"Est 3/23",beta:1.4,fcf:4.0,revGr:10,ebitdaMargin:16,yf:"RYCEY",desc:"Rolls-Royce is the UK's sole large jet engine manufacturer, powering the A350 and 787 wide-body fleets through its Trent XWB program while also supplying nuclear propulsion systems for the Royal Navy's submarine fleet and developing small modular reactors.",products:"Trent XWB, Trent 7000, EJ200 (Typhoon), submarine reactors, SMRs",clients:"Airbus, UK MoD, airlines, NATO navies",gtcThemes:['naval-buildup']},
      {t:"ARNTY",n:"Aerojet Rocketdyne (L3Harris)",px:"—",pe:null,ev:null,mc:"Part of LHX",v:"Acquired 2023",beta:null,fcf:null,revGr:null,ebitdaMargin:null,yf:"LHX",desc:"Aerojet Rocketdyne, now part of L3Harris, is the sole domestic supplier of solid and liquid rocket propulsion for the majority of US missile and space launch programs, including the RS-25 engines for SLS and solid motors for Minuteman III and its Sentinel replacement.",products:"RS-25, RL10, solid rocket motors, missile propulsion, hypersonic boosters",clients:"NASA, US Air Force, US Navy, SpaceX (RL10 heritage)",gtcThemes:['space-dominance','munitions-surge']},
      {t:"—",n:"Pratt & Whitney (RTX)",px:"—",pe:null,ev:null,mc:"Part of RTX",v:"RTX segment",beta:null,fcf:null,revGr:null,ebitdaMargin:null,yf:"RTX",desc:"Pratt & Whitney is RTX's engine division and the sole-source supplier of the F135 engine powering every variant of the F-35, with an installed base of 1,000+ engines and a multi-decade aftermarket annuity stream backed by the largest fighter program in history.",products:"F135 (F-35), GTF (A320neo), F119 (F-22), PW4000 aftermarket",clients:"US DoD, F-35 partner nations, airlines",gtcThemes:[]},
    ]
  },
  {
    id:"munitions", label:"MUNITIONS & ORDNANCE — Missiles, ammo, energetics", icon:"💥", stream:"midstream",
    what:"The global munitions industrial base is in a structural shortage after decades of post-Cold War consolidation and underinvestment. Ukraine alone is consuming 155mm artillery shells at rates exceeding Western production capacity, triggering multi-year restocking orders across NATO and Indo-Pacific allies.",
    industry:"A highly regulated, capital-intensive sector with 3-5 year lead times for new production lines. Government-owned, contractor-operated (GOCO) facilities and energetics monopolies create durable barriers. The sector is experiencing its most significant demand surge since World War II.",
    value:"European names like Rheinmetall trade at elevated multiples (25x+) reflecting the NATO rearmament premium, while US munitions exposure is embedded within larger primes (GD, RTX, NOC). Pure-play munitions companies are rare and command scarcity premiums.",
    medPE:22, medEV:16, medFCF:3,
    cos:[
      {t:"RNMBY",n:"Rheinmetall",px:"$85",pe:25,ev:18,mc:"$55B",v:"Est 3/23",beta:1.2,fcf:2.5,revGr:25,ebitdaMargin:15,yf:"RNMBY",desc:"Rheinmetall is Germany's largest defense company and the primary beneficiary of European rearmament, producing the Leopard 2 tank, Lynx IFV, 155mm artillery ammunition, and air defense systems, with order backlog exceeding EUR 50B as NATO armies rebuild stockpiles.",products:"Leopard 2, Lynx IFV, 155mm ammo, Skynex air defense, sensors",clients:"Bundeswehr, NATO armies, Ukraine, Australia",gtcThemes:['nato-rearm','munitions-surge']},
      {t:"CHG.L",n:"Chemring Group",px:"£4.20",pe:18,ev:12,mc:"$1.5B",v:"Est 3/23",beta:0.9,fcf:4.0,revGr:15,ebitdaMargin:16,yf:"CHG.L",desc:"Chemring is a UK-based specialist in energetics, countermeasures, and sensors, supplying explosive compounds, flares, chaff, and IED detection systems to NATO forces, with a niche monopoly in several energetics formulations.",products:"Energetics, countermeasures, flares, sensors, IED detection",clients:"UK MoD, US DoD, NATO allies",gtcThemes:['munitions-surge']},
      {t:"—",n:"Nammo",px:"Private",pe:null,ev:null,mc:"~$5B est",v:"Private est",beta:null,fcf:null,revGr:30,ebitdaMargin:14,yf:null,desc:"Nammo is a Norwegian-Finnish ammunition manufacturer jointly owned by the Norwegian government and Patria, producing small and medium caliber ammunition, shoulder-launched munitions (M72 LAW), and rocket motors for NATO armies experiencing acute ammunition shortages.",products:"Small/medium caliber ammo, M72 LAW, rocket motors, demil services",clients:"Norwegian Armed Forces, NATO armies, US DoD",gtcThemes:['nato-rearm','munitions-surge']},
      {t:"—",n:"General Dynamics Ordnance (GD-OTS)",px:"—",pe:null,ev:null,mc:"Part of GD",v:"GD segment",beta:null,fcf:null,revGr:null,ebitdaMargin:null,yf:"GD",desc:"General Dynamics Ordnance and Tactical Systems is the largest US ammunition manufacturer, producing everything from small arms cartridges to 155mm artillery rounds, bomb bodies, and reactive armor at government-owned facilities across multiple states.",products:"155mm rounds, Mk 80 bomb bodies, small arms ammo, reactive armor",clients:"US Army, US Marines, NATO allies",gtcThemes:['munitions-surge']},
      {t:"AVAV",n:"AeroVironment",px:"$210",pe:40,ev:28,mc:"$5.2B",v:"Est 3/23",beta:1.0,fcf:2.0,revGr:25,ebitdaMargin:14,yf:"AVAV",desc:"AeroVironment is the dominant supplier of small tactical drones (Switchblade, Puma, Raven) and loitering munitions to US and allied forces, with its Switchblade 600 becoming a category-defining weapon in the Ukraine conflict and driving exponential demand growth.",products:"Switchblade 300/600, Puma, Raven, JUMP 20, Powr",clients:"US DoD, Ukraine, NATO allies, Indo-Pacific",gtcThemes:['autonomous','munitions-surge']},
      {t:"COESY",n:"Kongsberg Gruppen",px:"$85",pe:30,ev:22,mc:"$28B",v:"Est 3/23",beta:1.0,fcf:2.5,revGr:20,ebitdaMargin:14,yf:"COESY",desc:"Kongsberg is a Norwegian defense and maritime technology company producing the Joint Strike Missile, Naval Strike Missile, and NASAMS air defense system, all of which have seen surging demand following their combat-proven performance in Ukraine and across NATO procurement cycles.",products:"JSM, NSM, NASAMS, CROWS, maritime systems",clients:"Norwegian MoD, US DoD, NATO allies, Ukraine",gtcThemes:['nato-rearm','munitions-surge']},
    ]
  },
  {
    id:"space", label:"SPACE & SATELLITES — Orbit and beyond", icon:"🛰️", stream:"midstream",
    what:"The space domain is transitioning from exquisite, single-satellite architectures to proliferated low-Earth-orbit constellations for communications, ISR, and missile warning. US Space Force is the fastest-growing service branch budget, and commercial launch costs have collapsed 90% in a decade.",
    industry:"SpaceX's Falcon 9 dominance has restructured the entire launch market, while the satellite manufacturing sector is bifurcating between legacy geostationary builders and new proliferated LEO constellation manufacturers. Ground systems and space domain awareness are the least appreciated growth segments.",
    value:"Rocket Lab (RKLB) trades at a steep premium reflecting its position as the only credible Western alternative to SpaceX for responsive launch. Planet Labs and Redwire offer speculative small-cap exposure to space infrastructure buildout at much lower valuations.",
    medPE:null, medEV:25, medFCF:-2,
    cos:[
      {t:"—",n:"SpaceX",px:"Private",pe:null,ev:null,mc:"~$350B",v:"Last round est",beta:null,fcf:null,revGr:40,ebitdaMargin:25,yf:null,desc:"SpaceX is the dominant global launch provider, operating the Falcon 9 (the most frequently launched rocket in history), deploying the Starlink broadband constellation (7,000+ satellites), and developing the Starship super-heavy launch vehicle that will fundamentally reset the economics of orbital access.",products:"Falcon 9, Falcon Heavy, Starship, Starlink, Dragon",clients:"NASA, US Space Force, NRO, commercial, Starlink consumers",gtcThemes:['space-dominance']},
      {t:"RKLB",n:"Rocket Lab",px:"$28",pe:null,ev:80,mc:"$13B",v:"Est 3/23",beta:2.0,fcf:-3.0,revGr:45,ebitdaMargin:-5,yf:"RKLB",desc:"Rocket Lab is the second most frequently launching orbital rocket company globally, operating the Electron small launch vehicle while developing the medium-lift Neutron rocket and expanding into spacecraft manufacturing, solar panels, and reaction wheels through strategic acquisitions.",products:"Electron, Neutron (dev), Photon spacecraft, solar panels, reaction wheels",clients:"US Space Force, NRO, NASA, commercial, allied militaries",gtcThemes:['space-dominance']},
      {t:"PL",n:"Planet Labs",px:"$4.50",pe:null,ev:15,mc:"$1.3B",v:"Est 3/23",beta:1.8,fcf:-8.0,revGr:15,ebitdaMargin:-15,yf:"PL",desc:"Planet Labs operates the largest constellation of Earth observation satellites (200+ spacecraft), providing daily global imaging at 3-meter resolution to defense, intelligence, agriculture, and insurance customers through a subscription data-as-a-service model.",products:"SuperDove satellites, SkySat high-res, Pelican (next-gen), analytics platform",clients:"NGA, NRO, US DoD, agriculture, insurance, NGOs",gtcThemes:['space-dominance']},
      {t:"RDW",n:"Redwire Corporation",px:"$14",pe:null,ev:25,mc:"$1.1B",v:"Est 3/23",beta:2.2,fcf:-5.0,revGr:35,ebitdaMargin:-8,yf:"RDW",desc:"Redwire is a space infrastructure company manufacturing deployable structures, solar arrays, and 3D-printed components for satellites and space stations, with growing exposure to the Space Development Agency's proliferated LEO architecture.",products:"Solar arrays, deployable structures, 3D printing, sensors, RegolithSpec",clients:"NASA, SDA, L3Harris, Northrop, commercial",gtcThemes:['space-dominance']},
      {t:"LUNR",n:"Intuitive Machines",px:"$18",pe:null,ev:null,mc:"$5B",v:"Est 3/23",beta:2.5,fcf:-10,revGr:80,ebitdaMargin:-20,yf:"LUNR",desc:"Intuitive Machines is a lunar access and space services company that achieved the first commercial lunar landing in 2024, winning multiple NASA CLPS contracts and developing autonomous navigation systems for cislunar operations.",products:"Nova-C lander, lunar data relay, autonomous nav, space services",clients:"NASA, US DoD, commercial",gtcThemes:['space-dominance']},
      {t:"ASTS",n:"AST SpaceMobile",px:"$22",pe:null,ev:null,mc:"$8B",v:"Est 3/23",beta:2.8,fcf:-15,revGr:null,ebitdaMargin:null,yf:"ASTS",desc:"AST SpaceMobile is building the first space-based cellular broadband network capable of connecting standard smartphones directly to satellites, with potential dual-use applications for military communications in denied or degraded environments.",products:"BlueBird satellites, direct-to-device broadband",clients:"AT&T, Verizon, Vodafone, potential DoD",gtcThemes:['space-dominance']},
    ]
  },
  {
    id:"naval", label:"SHIPBUILDING & NAVAL — Submarines, carriers, combatants", icon:"⚓", stream:"midstream",
    what:"The US shipbuilding industrial base is operating at maximum capacity with a multi-decade backlog of Columbia-class SSBNs, Virginia-class SSNs, Ford-class carriers, and Constellation-class frigates. Workforce shortages and aging infrastructure are the binding constraints, not demand.",
    industry:"A near-duopoly between Huntington Ingalls and General Dynamics (Bath Iron Works, NASSCO, Electric Boat) for major US combatant construction. The industry has consolidated from 13 shipyards in the 1980s to effectively 4 today, creating structural capacity limitations.",
    value:"HII trades at a notable discount (14x) to the broader defense group despite holding monopoly positions on aircraft carriers and amphibious ships. The market discounts naval stocks for fixed-price contract risk and workforce execution uncertainty.",
    medPE:16, medEV:11, medFCF:4,
    cos:[
      {t:"HII",n:"Huntington Ingalls Industries",px:"$230",pe:14,ev:10,mc:"$9B",v:"Est 3/23",beta:0.8,fcf:5.0,revGr:4,ebitdaMargin:10,yf:"HII",desc:"Huntington Ingalls is the sole builder of US Navy aircraft carriers (Newport News) and a primary builder of nuclear submarines alongside General Dynamics Electric Boat, operating two of the most strategically critical shipyards in the Western world.",products:"Ford-class CVN, Virginia-class SSN, Columbia-class SSBN, LPD, LHA amphibs",clients:"US Navy",gtcThemes:['naval-buildup']},
      {t:"—",n:"General Dynamics Electric Boat",px:"—",pe:null,ev:null,mc:"Part of GD",v:"GD segment",beta:null,fcf:null,revGr:null,ebitdaMargin:null,yf:"GD",desc:"Electric Boat is General Dynamics' submarine division and the lead design yard for both the Columbia-class ballistic missile submarine (the Pentagon's number one acquisition priority) and the Virginia-class fast attack submarine, with a backlog stretching into the 2040s.",products:"Columbia-class SSBN, Virginia-class SSN, submarine design",clients:"US Navy",gtcThemes:['naval-buildup']},
      {t:"ASB.AX",n:"Austal Limited",px:"A$3.50",pe:20,ev:12,mc:"$1.8B",v:"Est 3/23",beta:1.1,fcf:3.0,revGr:10,ebitdaMargin:8,yf:"ASB.AX",desc:"Austal is an Australian shipbuilder operating yards in both Australia and Mobile, Alabama, producing Independence-class Littoral Combat Ships and Expeditionary Fast Transports for the US Navy while expanding into steel shipbuilding for Australian and allied navies.",products:"LCS, EPF, Guardian-class patrol boats, OPV, steel combatants",clients:"US Navy, Royal Australian Navy, Pacific island nations",gtcThemes:['naval-buildup']},
      {t:"042660.KS",n:"Hanwha Ocean",px:"₩45,000",pe:18,ev:10,mc:"$9B",v:"Est 3/23",beta:1.3,fcf:2.0,revGr:15,ebitdaMargin:7,yf:"042660.KS",desc:"Hanwha Ocean (formerly Daewoo Shipbuilding) is South Korea's second-largest shipbuilder, producing conventional submarines, destroyers, and LNG carriers, with growing export potential as allied navies seek to diversify submarine construction beyond constrained US and European yards.",products:"KSS-III submarine, KDDX destroyer, LNG carriers, FPSO",clients:"Republic of Korea Navy, export customers, commercial",gtcThemes:['naval-buildup']},
      {t:"FINCF",n:"Fincantieri",px:"$8.50",pe:16,ev:9,mc:"$5B",v:"Est 3/23",beta:1.0,fcf:2.5,revGr:8,ebitdaMargin:7,yf:"FINCF",desc:"Fincantieri is Italy's state-controlled shipbuilder and the largest naval shipyard group in Europe, producing FREMM frigates, offshore patrol vessels, and cruise ships, with recent US expansion through the Constellation-class frigate program at Marinette Marine.",products:"FREMM frigates, Constellation-class (US), PPA, cruise ships",clients:"Italian Navy, US Navy, NATO navies, cruise lines",gtcThemes:['nato-rearm','naval-buildup']},
    ]
  },
  {
    id:"materials", label:"ADVANCED MATERIALS — Titanium, composites, specialty alloys", icon:"⚙️", stream:"upstream",
    what:"Modern fighter aircraft are 35-40% titanium and 30-40% advanced composites by weight. Every new-generation platform — F-35, B-21, GE9X engine — increases the content of specialty materials per unit, driving secular demand growth independent of unit volumes.",
    industry:"Titanium forging (Howmet, VSMPO-AVISMA) and aerospace-grade carbon fiber composites (Hexcel, Toray) operate as oligopolies with 18-24 month qualification cycles. Western sanctions on Russian titanium (VSMPO) have further tightened supply and benefited domestic producers.",
    value:"Howmet (HWM) trades at a significant premium (35x) reflecting its monopolistic position in aerospace castings and jet engine components. ATI at 15x offers a much cheaper entry into the same titanium/specialty alloys theme with improving margins.",
    medPE:22, medEV:14, medFCF:4,
    cos:[
      {t:"HWM",n:"Howmet Aerospace",px:"$115",pe:35,ev:22,mc:"$47B",v:"Est 3/23",beta:1.0,fcf:3.0,revGr:10,ebitdaMargin:25,yf:"HWM",desc:"Howmet Aerospace is the dominant global supplier of investment castings, titanium forgings, and fastening systems for jet engines and airframes, holding sole-source positions on critical hot-section turbine blades for virtually every Western military and commercial engine program.",products:"Turbine blades, titanium forgings, fasteners, forged wheels, structural castings",clients:"GE, RTX (P&W), Rolls-Royce, Boeing, Airbus, LMT",gtcThemes:[]},
      {t:"HXL",n:"Hexcel Corporation",px:"$72",pe:22,ev:14,mc:"$6B",v:"Est 3/23",beta:1.1,fcf:4.0,revGr:8,ebitdaMargin:18,yf:"HXL",desc:"Hexcel is the leading Western manufacturer of carbon fiber composites and honeycomb structures for aerospace applications, supplying prepreg materials that form the structural skins of the F-35, Boeing 787, and Airbus A350 programs.",products:"Carbon fiber prepreg, honeycomb, adhesives, composite structures",clients:"Boeing, Airbus, LMT, NOC, Bell, Safran",gtcThemes:[]},
      {t:"ATI",n:"Allegheny Technologies",px:"$55",pe:15,ev:10,mc:"$7B",v:"Est 3/23",beta:1.4,fcf:5.0,revGr:8,ebitdaMargin:18,yf:"ATI",desc:"ATI produces titanium alloys, nickel-based superalloys, and specialty steels for jet engines and airframes, operating as a critical upstream supplier to both the defense and commercial aerospace supply chains with improving margins following years of restructuring.",products:"Titanium alloys, nickel superalloys, specialty steels, forgings, precision parts",clients:"GE, RTX, Rolls-Royce, Boeing, Airbus, US DoD",gtcThemes:[]},
      {t:"CRS",n:"Carpenter Technology",px:"$175",pe:22,ev:14,mc:"$8.5B",v:"Est 3/23",beta:1.3,fcf:3.5,revGr:12,ebitdaMargin:20,yf:"CRS",desc:"Carpenter Technology is a specialty alloys manufacturer focused on premium powder metallurgy, titanium, and nickel superalloys used in jet engine hot-section components and medical implants, with a growing additive manufacturing materials business.",products:"Powder metallurgy, titanium alloys, nickel superalloys, additive powders",clients:"GE, RTX, medical device OEMs, energy",gtcThemes:[]},
      {t:"SPR",n:"Spirit AeroSystems",px:"$35",pe:null,ev:20,mc:"$4B",v:"Est 3/23",beta:2.0,fcf:-5.0,revGr:-2,ebitdaMargin:3,yf:"SPR",desc:"Spirit AeroSystems is the largest independent aerostructures manufacturer, building the Boeing 737 fuselage and 787 forward fuselage as a sole-source supplier, though Boeing's proposed reacquisition and ongoing quality issues create significant uncertainty.",products:"737 fuselage, 787 fuselage, A350 wing components, defense structures",clients:"Boeing, Airbus, Northrop, Bell",gtcThemes:['legacy-platforms']},
      {t:"—",n:"Precision Castparts (Berkshire)",px:"Private",pe:null,ev:null,mc:"Part of BRK",v:"Berkshire subsidiary",beta:null,fcf:null,revGr:null,ebitdaMargin:null,yf:"BRK-B",desc:"Precision Castparts is a Berkshire Hathaway subsidiary and one of the world's largest manufacturers of investment castings, forgings, and fasteners for jet engines and airframes, operating as a vertically integrated supplier alongside Howmet at the top of the aerospace materials hierarchy.",products:"Investment castings, forgings, fasteners, aerostructures, pipe fittings",clients:"GE, RTX, Rolls-Royce, Boeing, Airbus",gtcThemes:[]},
    ]
  },
  {
    id:"subsystems", label:"DEFENSE SUBSYSTEMS & COMPONENTS — Connectors, actuators, power", icon:"🔩", stream:"upstream",
    what:"This tier produces the thousands of proprietary connectors, actuators, power supplies, thermal management systems, and hydraulic components embedded in every defense platform. A single F-35 contains over 300,000 individual parts from hundreds of suppliers.",
    industry:"Dominated by companies with sole-source positions on legacy platforms, creating aftermarket monopolies with 40-60% gross margins. TransDigm pioneered the strategy of acquiring niche aerospace parts businesses and raising prices, generating extraordinary returns on invested capital.",
    value:"TransDigm (45x) and HEICO (55x) command premium multiples for their aftermarket monopoly business models. Mid-cap names like Ducommun (15x) and Moog (18x) trade at significant discounts despite similar sole-source dynamics on specific programs.",
    medPE:25, medEV:16, medFCF:4,
    cos:[
      {t:"TDG",n:"TransDigm Group",px:"$1,350",pe:45,ev:28,mc:"$78B",v:"Est 3/23",beta:0.9,fcf:4.5,revGr:12,ebitdaMargin:50,yf:"TDG",desc:"TransDigm is the most profitable company in aerospace, operating a portfolio of 90+ proprietary, sole-source aerospace component businesses that generate 50%+ EBITDA margins through pricing power on installed-base aftermarket parts where no alternative supplier exists.",products:"Connectors, actuators, igniters, pumps, latches, lighting, audio panels",clients:"Boeing, Airbus, US DoD, airlines, MROs",gtcThemes:[]},
      {t:"DCO",n:"Ducommun",px:"$65",pe:15,ev:10,mc:"$800M",v:"Est 3/23",beta:1.0,fcf:5.5,revGr:5,ebitdaMargin:14,yf:"DCO",desc:"Ducommun is a specialty defense structures and electronics manufacturer, producing titanium and composite aerostructures, printed circuit boards, and electronic assemblies embedded in the F-35, F/A-18, Apache, and various missile programs.",products:"Aerostructures, PCBs, electronic assemblies, composite structures",clients:"NOC, LMT, RTX, Boeing, US DoD",gtcThemes:[]},
      {t:"MOG.A",n:"Moog Inc",px:"$185",pe:18,ev:12,mc:"$6B",v:"Est 3/23",beta:1.0,fcf:4.5,revGr:6,ebitdaMargin:14,yf:"MOG.A",desc:"Moog is a precision motion control company supplying flight control actuators, guidance systems, and weapons steering components for fighter aircraft, missiles, and space launch vehicles, with dominant positions on F-35 flight actuation and various missile programs.",products:"Flight actuators, missile steering, space actuation, medical devices",clients:"LMT, RTX, NOC, BA, NASA, US DoD",gtcThemes:[]},
      {t:"PH",n:"Parker Hannifin",px:"$630",pe:24,ev:17,mc:"$82B",v:"Est 3/23",beta:1.0,fcf:4.0,revGr:5,ebitdaMargin:22,yf:"PH",desc:"Parker Hannifin is the world's largest motion and control technologies company, supplying hydraulic systems, fuel systems, seals, and filtration to both commercial and military aircraft, with its aerospace segment representing roughly 30% of revenue.",products:"Hydraulic systems, fuel systems, seals, filtration, thermal management",clients:"Boeing, Airbus, GE, RTX, US DoD",gtcThemes:[]},
      {t:"WWD",n:"Woodward Inc",px:"$180",pe:22,ev:15,mc:"$11B",v:"Est 3/23",beta:1.1,fcf:3.5,revGr:8,ebitdaMargin:20,yf:"WWD",desc:"Woodward is a critical supplier of fuel systems, combustion controls, and actuation systems for both military and commercial jet engines, holding designed-in positions on virtually every Western engine program from the F135 to the LEAP.",products:"Fuel nozzles, combustion systems, actuation, engine controls",clients:"GE, RTX (P&W), Rolls-Royce, Safran",gtcThemes:[]},
      {t:"KAMAN",n:"Kaman (now Arcline)",px:"—",pe:null,ev:null,mc:"Acquired",v:"Acquired 2024",beta:null,fcf:null,revGr:null,ebitdaMargin:null,yf:null,desc:"Kaman Corporation was a specialty bearings, fuzing, and structures manufacturer serving defense and industrial markets before its 2024 acquisition by Arcline Investment Management, eliminating another public pure-play defense components company.",products:"Fuzing, bearings, composite structures (now private)",clients:"US DoD, aerospace OEMs (now via Arcline)",gtcThemes:[]},
    ]
  },
  {
    id:"cyber", label:"CYBERSECURITY & SOFTWARE — The digital backbone", icon:"🖥️", stream:"upstream",
    what:"Modern defense is software-defined — autonomous systems, AI-enabled targeting, predictive maintenance, and battlefield networking all require massive software infrastructure. The DoD's JADC2 (Joint All-Domain Command and Control) initiative alone represents a multi-decade, tens-of-billions-dollar software architecture overhaul.",
    industry:"A bifurcated market between legacy defense IT services companies (Leidos, CACI, BAH) and next-generation software-defined defense companies (Palantir, Anduril, Shield AI) that are disrupting traditional acquisition models with commercial-speed development cycles.",
    value:"Palantir commands a premium (60x+) reflecting its platform dominance in defense AI and successful commercial expansion. Kratos at 50x is priced for its drone and autonomous systems optionality. Traditional defense IT trades at 15-22x with more predictable cash flows.",
    medPE:40, medEV:30, medFCF:1,
    cos:[
      {t:"PLTR",n:"Palantir Technologies",px:"$85",pe:65,ev:50,mc:"$195B",v:"Est 3/23",beta:1.8,fcf:2.5,revGr:25,ebitdaMargin:22,yf:"PLTR",desc:"Palantir is the dominant AI and data analytics platform for US defense and intelligence, with its Gotham and Maven Smart System powering targeting, logistics, and operational planning across every branch of the military and multiple intelligence agencies.",products:"Gotham, Foundry, AIP, Maven Smart System, MetaConstellation",clients:"US Army, US IC, SOCOM, NATO, Five Eyes, commercial enterprises",gtcThemes:['autonomous']},
      {t:"—",n:"Anduril Industries",px:"Private",pe:null,ev:null,mc:"~$28B",v:"Last round est",beta:null,fcf:null,revGr:80,ebitdaMargin:-10,yf:null,desc:"Anduril is a venture-backed defense technology company founded by Palmer Luckey, building autonomous systems including the Lattice AI platform, Ghost drone family, and Roadrunner interceptor, designed to deliver Silicon Valley development speed to military hardware.",products:"Lattice, Ghost drones, Roadrunner, Altius, Sentry Tower, Dive-LD",clients:"US DoD, SOCOM, CBP, allied militaries",gtcThemes:['autonomous']},
      {t:"—",n:"Shield AI",px:"Private",pe:null,ev:null,mc:"~$5B",v:"Last round est",beta:null,fcf:null,revGr:60,ebitdaMargin:-30,yf:null,desc:"Shield AI develops autonomous AI pilot systems (Hivemind) that enable drones and aircraft to operate without GPS, communications, or human intervention, with its V-BAT drone and F-16 autonomy demonstrations positioning it as a leading autonomy software provider.",products:"Hivemind autonomy, V-BAT, autonomous F-16, Sentient Vision",clients:"US DoD, SOCOM, allied special forces",gtcThemes:['autonomous']},
      {t:"KTOS",n:"Kratos Defense",px:"$28",pe:50,ev:30,mc:"$4.2B",v:"Est 3/23",beta:1.3,fcf:0.5,revGr:15,ebitdaMargin:8,yf:"KTOS",desc:"Kratos is a pure-play defense technology company specializing in high-performance drone target systems, tactical unmanned aerial systems, satellite communications, and rocket propulsion, positioned as a low-cost disruptor in autonomous combat systems.",products:"BQM-177A target drone, XQ-58A Valkyrie, satellite ground systems, turbine engines",clients:"US DoD, US Navy, US Air Force, MDA",gtcThemes:['autonomous','space-dominance']},
      {t:"PSN",n:"Parsons Corporation",px:"$95",pe:22,ev:15,mc:"$10B",v:"Est 3/23",beta:0.9,fcf:4.0,revGr:18,ebitdaMargin:11,yf:"PSN",desc:"Parsons is a defense and infrastructure technology company providing missile defense engineering, cyber and electronic warfare solutions, and critical infrastructure protection, with strong exposure to the Missile Defense Agency and Space Force modernization programs.",products:"Missile defense engineering, cyber, C5ISR, space systems, infrastructure",clients:"MDA, US Space Force, DTRA, intelligence community, infrastructure",gtcThemes:['space-dominance']},
      {t:"BBAI",n:"BigBear.ai",px:"$4.50",pe:null,ev:20,mc:"$1B",v:"Est 3/23",beta:2.0,fcf:-5.0,revGr:10,ebitdaMargin:-5,yf:"BBAI",desc:"BigBear.ai provides AI-powered decision intelligence and analytics to defense and intelligence customers, with solutions spanning autonomous logistics, predictive analytics, and identity intelligence for national security applications.",products:"Observe, Orient, Dominate AI platform, ProModel, identity intel",clients:"US Army, DHS, IC, logistics commands",gtcThemes:['autonomous']},
    ]
  },
];

export const TIER_COLORS = {
  government: '#94a3b8',
  primes: '#f97316',
  mission: '#a78bfa',
  propulsion: '#ef4444',
  munitions: '#fbbf24',
  space: '#38bdf8',
  naval: '#2dd4bf',
  materials: '#4ade80',
  subsystems: '#c084fc',
  cyber: '#06b6d4',
};

export const STREAM_COLORS = {upstream:'#4ade80',midstream:'#60a5fa',downstream:'#fbbf24',demand:'#fb923c'};

export const DEFENSE_THEMES = {
  'nato-rearm':        { label: 'NATO Rearmament',        color: '#4ade80', dead: false, desc: 'European defense spending surge driven by NATO 2%+ GDP commitments and the post-Ukraine security realignment, representing the largest Western rearmament cycle since the Cold War.' },
  'munitions-surge':   { label: 'Munitions Surge',        color: '#fbbf24', dead: false, desc: 'Global ammunition shortage driving multi-year restocking across NATO and Indo-Pacific allies, with 155mm artillery shell production capacity expanding from 300k to 1.2M rounds per year.' },
  'autonomous':        { label: 'Autonomous & AI Defense', color: '#38bdf8', dead: false, desc: 'Drones, autonomous vehicles, AI-enabled targeting, and software-defined warfare systems reshaping how militaries fight, with unit costs 10-100x lower than traditional platforms.' },
  'space-dominance':   { label: 'Space Dominance',        color: '#a78bfa', dead: false, desc: 'Satellite proliferation, space domain awareness, responsive launch, and orbital logistics becoming the defining military capability of the 2030s.' },
  'naval-buildup':     { label: 'Naval Buildup',          color: '#2dd4bf', dead: false, desc: 'Indo-Pacific deterrence driving submarine and surface combatant programs across US, Australian, Japanese, and South Korean navies to counter Chinese fleet expansion.' },
  'legacy-platforms':  { label: 'Legacy Platforms',        color: '#ef4444', dead: true,  desc: 'Aging fourth-generation fighter, legacy surface combatant, and Cold War-era ground vehicle programs facing declining budgets as the DoD shifts investment toward next-generation systems.' },
  'counter-insurgency':{ label: 'COIN / Light Forces',    color: '#f97316', dead: true,  desc: 'Post-Afghanistan drawdown eliminated the counterinsurgency budget premium, with spending shifting decisively toward peer-competition capabilities against China and Russia.' },
};

export const VALUATION_GAPS = [
  {
    a:"TDG",aPE:45,b:"HEI",bPE:55,
    title:"Aerospace aftermarket monopoly duopoly",
    summary:"TransDigm and HEICO are the two dominant aerospace aftermarket parts and specialty electronics conglomerates, both operating portfolios of sole-source, proprietary component businesses with pricing power on installed-base platforms. Both generate extraordinary margins (TDG 50% EBITDA, HEI 28%) through acquisition-driven growth of niche monopoly positions.",
    thesis:"HEICO trades at 55x forward earnings versus TransDigm at 45x, despite TransDigm generating nearly double the EBITDA margin. The premium reflects HEICO's perceived quality of earnings from its PMA (parts manufacturer approval) strategy and founder-family management. However, TransDigm's ability to acquire and reprice sole-source parts creates a more durable pricing moat. If TransDigm re-rates toward HEICO's multiple, the upside is significant; alternatively, HEICO may compress toward TransDigm as both companies approach the limits of their acquisition-driven growth models.",
  },
  {
    a:"LHX",aPE:18,b:"NOC",bPE:20,
    title:"C4ISR and space primes post-Aerojet integration",
    summary:"L3Harris and Northrop Grumman are the two most space- and C4ISR-focused prime contractors. Both operate across electronic warfare, ISR sensors, satellites, and strategic systems. L3Harris added solid rocket propulsion via Aerojet Rocketdyne in 2023, creating vertical integration that Northrop previously held alone.",
    thesis:"L3Harris trades at 18x forward earnings versus Northrop at 20x, a gap that has persisted since the Aerojet acquisition created integration and margin headwinds. However, L3Harris now owns the only independent US solid rocket motor supplier, giving it a monopoly position analogous to Northrop's role on the B-21 and Sentinel ICBM. As Aerojet margins normalize and the munitions surge drives rocket motor demand, L3Harris offers comparable strategic positioning at a 10% discount.",
  },
  {
    a:"RNMBY",aPE:25,b:"GD",bPE:18,
    title:"European rearmament premium vs US defense incumbent",
    summary:"Rheinmetall and General Dynamics both produce armored combat vehicles and ammunition — Rheinmetall's Leopard 2/Lynx and 155mm ammo versus GD's Abrams tank, Stryker, and ordnance divisions. Both serve NATO customers but from different sides of the Atlantic.",
    thesis:"Rheinmetall trades at 25x forward earnings versus General Dynamics at 18x, a premium justified by Rheinmetall's pure-play exposure to European rearmament and 25%+ revenue growth versus GD's diversified portfolio growing at 6%. However, GD's GDIT segment and Gulfstream business provide cash flow stability, and its Electric Boat submarine division holds the most strategically critical backlog in the US defense industrial base. If European defense spending disappoints or normalizes, the 7x PE gap could compress rapidly.",
  },
  {
    a:"GD",aPE:18,b:"HII",bPE:14,
    title:"Naval monopoly discount on the sole carrier builder",
    summary:"Huntington Ingalls and General Dynamics are the only two companies that build nuclear-powered warships for the US Navy. HII is the sole builder of aircraft carriers and a co-builder of Virginia-class submarines. GD Electric Boat is the lead submarine designer and co-builder.",
    thesis:"HII trades at 14x versus GD at 18x despite holding an irreplaceable monopoly on aircraft carrier construction and an equally critical role in submarine production. The discount reflects HII's concentration in pure shipbuilding (lower margins, fixed-price risk, workforce challenges) versus GD's diversification into IT services and business aviation. However, the Columbia-class SSBN program alone represents a $130B+ lifetime value, and the Navy's stated requirement for a 355+ ship fleet implies decades of structural demand. At 14x, HII may be the cheapest monopoly in the defense sector.",
  },
  {
    a:"KTOS",aPE:50,b:"LHX",bPE:18,
    title:"Autonomous drone disruptor vs incumbent prime",
    summary:"Kratos is a pure-play disruptive defense company developing autonomous combat drones (XQ-58A Valkyrie-class) and target systems at unit costs 90% below traditional manned aircraft. L3Harris is a $44B incumbent prime providing the communications, sensors, and propulsion that equip both manned and unmanned platforms.",
    thesis:"Kratos trades at 50x reflecting optionality on the US Air Force's Collaborative Combat Aircraft (CCA) program and the broader shift toward attritable autonomous systems. L3Harris at 18x prices in predictable prime contractor cash flows but undervalues its Aerojet propulsion monopoly and growing role in autonomous systems integration. The question is whether Kratos can convert its technology advantage into profitable production contracts, or whether the primes (including L3Harris) will dominate CCA integration as they have every prior platform. The 32x PE gap is the market's bet on disruption vs incumbency.",
  },
  {
    a:"HWM",aPE:35,b:"ATI",bPE:15,
    title:"Two titanium and specialty metals suppliers at vastly different multiples",
    summary:"Howmet Aerospace and Allegheny Technologies both produce titanium alloys, nickel-based superalloys, and specialty materials for jet engines and airframes. Both serve the same customers (GE, RTX, Rolls-Royce, Boeing, Airbus) and benefit from the same commercial aerospace recovery and military build cycle.",
    thesis:"Howmet trades at 35x forward earnings versus ATI at 15x, a gap exceeding 2x despite substantial overlap in end-markets and materials. Howmet's premium reflects its downstream integration into finished castings and forgings (higher margin, more sole-source) versus ATI's position as a specialty metals producer (lower margin, more commodity exposure). However, ATI's margins have been improving steadily post-restructuring, and its exposure to the same jet engine production ramp that drives Howmet is structurally similar. At 15x with accelerating margins, ATI offers significantly cheaper exposure to the aerospace materials super-cycle.",
  },
];

export const SUPPLY_CHAIN_PAIRS = [
  // Materials → Propulsion (upstream feeding engine makers)
  {supplier:'HWM',customer:'GE',rel:'Turbine blades/castings → Jet engines',cat:'materials-propulsion'},
  {supplier:'HWM',customer:'RTX',rel:'Titanium forgings → P&W engines',cat:'materials-propulsion'},
  {supplier:'ATI',customer:'GE',rel:'Nickel superalloys → Engine hot section',cat:'materials-propulsion'},
  {supplier:'ATI',customer:'RTX',rel:'Titanium alloys → Engine/airframe',cat:'materials-propulsion'},
  {supplier:'CRS',customer:'RTX',rel:'Specialty steels/powders → Engine components',cat:'materials-propulsion'},
  {supplier:'CRS',customer:'GE',rel:'Powder metallurgy → Turbine disks',cat:'materials-propulsion'},

  // Materials → Primes (upstream feeding airframe makers)
  {supplier:'HWM',customer:'LMT',rel:'Titanium castings → F-35 structure',cat:'materials-primes'},
  {supplier:'HXL',customer:'BA',rel:'Carbon fiber composites → Aircraft structures',cat:'materials-primes'},
  {supplier:'HXL',customer:'LMT',rel:'Composite prepreg → F-35 skins',cat:'materials-primes'},
  {supplier:'SPR',customer:'BA',rel:'Fuselage structures → 737/787',cat:'materials-primes'},
  {supplier:'HXL',customer:'NOC',rel:'Composites → B-21 structures',cat:'materials-primes'},

  // Subsystems → Primes (components into platforms)
  {supplier:'TDG',customer:'BA',rel:'Proprietary aircraft parts → Boeing platforms',cat:'subsystems-primes'},
  {supplier:'TDG',customer:'RTX',rel:'Proprietary engine parts → P&W/Collins',cat:'subsystems-primes'},
  {supplier:'TDG',customer:'LMT',rel:'Sole-source components → F-35/C-130',cat:'subsystems-primes'},
  {supplier:'MOG.A',customer:'LMT',rel:'Flight actuators → F-35 flight controls',cat:'subsystems-primes'},
  {supplier:'DCO',customer:'NOC',rel:'Structures/electronics → B-21/missiles',cat:'subsystems-primes'},
  {supplier:'WWD',customer:'GE',rel:'Fuel nozzles → LEAP/military engines',cat:'subsystems-propulsion'},
  {supplier:'WWD',customer:'RTX',rel:'Combustion controls → F135 engine',cat:'subsystems-propulsion'},
  {supplier:'PH',customer:'BA',rel:'Hydraulic/fuel systems → Aircraft',cat:'subsystems-primes'},

  // Mission systems → Primes
  {supplier:'MRCY',customer:'LMT',rel:'Mission computers → F-35/radar systems',cat:'mission-primes'},
  {supplier:'MRCY',customer:'RTX',rel:'RF processing → Radar/EW systems',cat:'mission-primes'},
  {supplier:'CW',customer:'HII',rel:'Naval reactor components → CVN/SSN',cat:'mission-naval'},

  // Propulsion → Primes
  {supplier:'GE',customer:'BA',rel:'F414/commercial engines → F/A-18/widebody',cat:'propulsion-primes'},
  {supplier:'RTX',customer:'LMT',rel:'F135 engine → F-35 JSF',cat:'propulsion-primes'},

  // Primes → Government (downstream to demand)
  {supplier:'LMT',customer:'—',rel:'F-35, HIMARS, missiles → US DoD',cat:'primes-government'},
  {supplier:'RTX',customer:'—',rel:'Patriot, AMRAAM, engines → US DoD',cat:'primes-government'},
  {supplier:'NOC',customer:'—',rel:'B-21, Sentinel, space → US DoD',cat:'primes-government'},
  {supplier:'GD',customer:'—',rel:'Submarines, vehicles → US DoD',cat:'primes-government'},
  {supplier:'HII',customer:'—',rel:'Carriers, subs, amphibs → US Navy',cat:'primes-government'},
  {supplier:'BA',customer:'—',rel:'F/A-18, Apache, tankers → US DoD',cat:'primes-government'},

  // Space → Government
  {supplier:'RKLB',customer:'—',rel:'Electron launch → US Space Force/NRO',cat:'space-government'},
  {supplier:'PL',customer:'—',rel:'Earth observation data → NGA/NRO',cat:'space-government'},

  // Cyber/Software → Government
  {supplier:'PLTR',customer:'—',rel:'Gotham/Maven AI platform → US DoD/IC',cat:'cyber-government'},
  {supplier:'KTOS',customer:'—',rel:'Target drones/autonomous → US DoD',cat:'cyber-government'},
  {supplier:'PSN',customer:'—',rel:'Missile defense engineering → MDA',cat:'cyber-government'},

  // Munitions → Government
  {supplier:'RNMBY',customer:'—',rel:'155mm ammo, Leopard 2 → NATO armies',cat:'munitions-government'},
  {supplier:'AVAV',customer:'—',rel:'Switchblade/Puma drones → US DoD/Ukraine',cat:'munitions-government'},
  {supplier:'COESY',customer:'—',rel:'NSM/NASAMS missiles → NATO navies',cat:'munitions-government'},

  // Cross-tier relationships
  {supplier:'ESLT',customer:'—',rel:'UAVs, EW, displays → NATO/Indo-Pacific',cat:'mission-government'},
  {supplier:'BAESY',customer:'—',rel:'Typhoon, subs, EW → UK MoD/allies',cat:'primes-government'},
  {supplier:'SAFRY',customer:'BA',rel:'LEAP engines (CFM JV) → Airbus/Boeing',cat:'propulsion-primes'},
  {supplier:'RYCEY',customer:'BAESY',rel:'EJ200 engine → Typhoon fighter',cat:'propulsion-primes'},
];

export default {
  id: 'defense',
  name: 'Defense & Aerospace',
  icon: '🛡️',
  description: 'The global defense supply chain from advanced materials and subsystems through prime contractors to government end-customers, spanning air, land, sea, space, and cyber domains.',
  TIERS,
  TIER_COLORS,
  STREAM_COLORS,
  VALUATION_GAPS,
  SUPPLY_CHAIN_PAIRS,
  GTC_THEMES: DEFENSE_THEMES,
  UI: {
    themeTitle: 'Defense investment theme exposure',
    themeDesc: 'Defense spending is shifting structurally toward precision munitions, autonomous systems, space, and cyber. Companies aligned with active procurement cycles benefit from multi-year program-of-record tailwinds, while those tied to legacy platforms face budget compression. Filter by theme to find the cheapest names in each spending wave.',
    deadThemeWarning: 'DEAD THEME — Budget priority has shifted away from this area. Companies with only legacy exposure face procurement headwinds and potential program cancellations.',
    streamDesc: {
      upstream: 'Advanced materials, specialty alloys, composites, and defense subsystem components. Long qualification cycles and sole-source contracts create durable moats.',
      midstream: 'Propulsion, munitions, space systems, shipbuilding, and cybersecurity providers that transform raw materials into mission-critical platforms and capabilities.',
      downstream: 'Prime contractors and mission systems integrators that win government contracts and manage complex multi-decade programs across all warfighting domains.',
      demand: 'Government defense budgets from the US DoD, NATO allies, Indo-Pacific partners, and Middle East buyers. Sovereign spending decisions cascade through every tier below.',
    },
    flowDesc: 'Defense budgets flow from governments through prime contractors to subsystem suppliers and materials providers. Supply constraints are most acute in specialty materials, munitions production capacity, and shipyard throughput.',
    flowArrows: ['Materials and components feed into propulsion, munitions, and platforms','Engines, ordnance, and systems integrate into prime contractor programs','Prime contractors deliver finished platforms to government customers'],
    ratioDesc: 'These ratios compare the median forward P/E of upstream and midstream defense suppliers against their downstream prime contractors and end-demand government budgets. A ratio below 1.0x means the supplier tier trades at a discount to its customer tier, suggesting the market underprices the upstream supply chain relative to the primes that depend on it.',
    ratios: [
      {label:'Upstream / Downstream',num:'upstream',den:'downstream',desc:'Materials & subsystems vs prime contractors and mission systems'},
      {label:'Upstream / Demand',num:'upstream',den:'demand',desc:'Materials & subsystems vs government budget holders'},
      {label:'Midstream / Downstream',num:'midstream',den:'downstream',desc:'Propulsion, munitions, space, naval, and cyber vs prime contractors'},
      {label:'Midstream / Demand',num:'midstream',den:'demand',desc:'Platform manufacturers vs government budget holders'},
    ],
  },
};
