// DATA — NUCLEAR & ENERGY INFRASTRUCTURE SUPPLY CHAIN
// Approximate valuations as of March 2026. Sources: Yahoo Finance, StockAnalysis, GuruFocus.
// PE = forward P/E. EV = EV/EBITDA. MC = market cap. FCF = FCF yield %.

export const TIERS = [
  {
    id:"buyers", label:"DATA CENTER & UTILITY BUYERS — The power consumers", icon:"🏢", stream:"demand",
    what:"The ultimate demand signal: hyperscalers (Amazon, Google, Microsoft, Meta) signing nuclear PPAs to secure 24/7 carbon-free baseload power for AI factories, large utilities (Constellation, Duke, Southern, Exelon, NextEra) operating existing fleets, and industrial off-takers needing reliable power. Jensen said AI factories are 'power-limited.'",
    industry:"AI data centers need massive power (1GW+ per facility) and the grid cannot keep up. Nuclear is the only baseload source that can scale without carbon. Hyperscalers are willing to pay premium prices for firm, clean power with 10-20 year contracts.",
    value:"Not directly investable as pure nuclear demand plays, but the trajectory of data center power procurement and utility nuclear fleet decisions drives every tier below. The AI power demand catalyst is structural and accelerating.",
    medPE:null, medEV:null, medFCF:null,
    cos:[
      {t:"—",n:"Microsoft (Azure)",px:"N/A",pe:null,ev:null,mc:"$3T+",v:"Hyperscaler",beta:null,fcf:null,revGr:15,ebitdaMargin:null,yf:"MSFT",desc:"Microsoft signed a 20-year PPA with Constellation Energy to restart Three Mile Island Unit 1, the most high-profile nuclear power deal in the AI era, securing 835 MW of carbon-free baseload power for Azure data centers.",products:"Azure cloud, AI compute infrastructure",clients:"N/A",gtcThemes:['ai-power']},
      {t:"—",n:"Amazon (AWS)",px:"N/A",pe:null,ev:null,mc:"$2T+",v:"Hyperscaler",beta:null,fcf:null,revGr:12,ebitdaMargin:null,yf:"AMZN",desc:"Amazon acquired a 960 MW nuclear-powered data center campus adjacent to Talen Energy's Susquehanna nuclear plant in Pennsylvania for $650M, establishing the template for co-located nuclear-data center facilities.",products:"AWS cloud, AI compute infrastructure",clients:"N/A",gtcThemes:['ai-power']},
      {t:"—",n:"Google (GCP)",px:"N/A",pe:null,ev:null,mc:"$2T+",v:"Hyperscaler",beta:null,fcf:null,revGr:14,ebitdaMargin:null,yf:"GOOG",desc:"Google signed the first-ever corporate PPA for small modular reactor power with Kairos Power, committing to purchase electricity from multiple SMR deployments starting in 2030, signaling hyperscaler confidence in next-gen nuclear technology.",products:"Google Cloud, AI compute infrastructure",clients:"N/A",gtcThemes:['ai-power','smr-buildout']},
      {t:"—",n:"Meta (Facebook)",px:"N/A",pe:null,ev:null,mc:"$1.5T+",v:"Hyperscaler",beta:null,fcf:null,revGr:18,ebitdaMargin:null,yf:"META",desc:"Meta issued RFPs for 1-4 GW of nuclear power for its AI data center expansion, signaling that even the most aggressive builder of AI infrastructure recognizes nuclear as essential for baseload power at scale.",products:"AI compute infrastructure, data centers",clients:"N/A",gtcThemes:['ai-power']},
    ]
  },
  {
    id:"reactors", label:"REACTOR OEMs & SMR DEVELOPERS — The builders", icon:"⚛️", stream:"downstream",
    what:"Large reactor builders and next-generation small modular reactor developers designing, licensing, and building the nuclear plants that will power the AI era. A mix of proven incumbents with decades of experience and speculative startups with NRC-approved or in-progress designs.",
    industry:"Traditional large reactors cost $10-15B and take 7-12 years to build. SMRs promise factory-built, modular nuclear at lower capex per MW with faster deployment. NRC approvals are accelerating but commercial deployment remains 2028-2030+ for most designs. Massive gap between speculative valuations and actual revenue.",
    value:"Pre-revenue SMR developers (NuScale, Oklo) command multi-billion-dollar valuations on optionality alone, while proven nuclear OEMs (BWXT, GE Vernova) trade on actual earnings. The market is pricing in a nuclear renaissance before a single commercial SMR has generated electricity.",
    medPE:33, medEV:25, medFCF:2,
    cos:[
      {t:"GEV",n:"GE Vernova",px:"$350",pe:35,ev:25,mc:"$100B",v:"Est 3/26",beta:1.4,fcf:2.5,revGr:10,ebitdaMargin:12,yf:"GEV",desc:"GE Vernova is the energy-focused spin-off from General Electric, combining gas turbines, grid solutions, nuclear services, and renewable energy. Its BWRX-300 small modular reactor design is under NRC review, and its grid division benefits from the massive buildout needed to connect new generation to load centers.",products:"Gas turbines, BWRX-300 SMR, grid equipment, wind turbines, nuclear services",clients:"Utilities, data centers, grid operators, industrial",gtcThemes:['smr-buildout','grid-bottleneck']},
      {t:"BWXT",n:"BWX Technologies",px:"$130",pe:30,ev:22,mc:"$12B",v:"Est 3/26",beta:0.9,fcf:3.5,revGr:8,ebitdaMargin:18,yf:"BWXT",desc:"BWX Technologies holds a monopoly on manufacturing naval nuclear reactors for US aircraft carriers and submarines, operating the only facilities in the Western world capable of producing reactor pressure vessels. Its commercial nuclear division supplies fuel and components, and BWXT Advanced Technologies develops TRISO fuel and micro-reactors for defense and space applications.",products:"Naval nuclear reactors, TRISO fuel, reactor components, medical isotopes, micro-reactors",clients:"US Navy, DOE, NASA, commercial nuclear utilities",gtcThemes:['haleu-monopoly','smr-buildout']},
      {t:"SMR",n:"NuScale Power",px:"$25",pe:null,ev:null,mc:"$6B",v:"Est 3/26",beta:2.5,fcf:-15.0,revGr:null,ebitdaMargin:null,yf:"SMR",desc:"NuScale Power received the first-ever NRC design certification for a small modular reactor in 2023, validating its 77 MWe light-water SMR design. However, the company canceled its first commercial project (UAMPS) due to cost escalation and has yet to secure a replacement anchor customer, raising questions about the timeline to revenue.",products:"NuScale Power Module (77 MWe SMR), VOYGR power plant design",clients:"Utilities, data center operators, international markets",gtcThemes:['smr-buildout','ai-power']},
      {t:"OKLO",n:"Oklo Inc",px:"$30",pe:null,ev:null,mc:"$7B",v:"Est 3/26",beta:2.8,fcf:-20.0,revGr:null,ebitdaMargin:null,yf:"OKLO",desc:"Oklo is developing a compact fast reactor (Aurora) backed by Sam Altman and OpenAI, targeting 15-50 MWe micro-reactor deployments for data centers, military bases, and remote sites. The company has a fuel recycling strategy and a site permit at Idaho National Laboratory, but its first NRC application was denied, requiring resubmission.",products:"Aurora fast reactor, fuel recycling technology",clients:"Data centers (Google PPA rumored), US DoD, remote communities",gtcThemes:['smr-buildout','ai-power']},
      {t:"RYCEY",n:"Rolls-Royce",px:"$8",pe:25,ev:14,mc:"$55B",v:"Est 3/26",beta:1.5,fcf:4.0,revGr:10,ebitdaMargin:16,yf:"RYCEY",desc:"Rolls-Royce SMR division is developing a 470 MWe small modular reactor for the UK market, leveraging the company's decades of naval nuclear propulsion experience. The UK government has backed the design with regulatory and financial support, and export interest is growing from Eastern Europe and the Middle East.",products:"Rolls-Royce SMR (470 MWe), Trent XWB engines, submarine reactors",clients:"UK government, potential export customers, airlines",gtcThemes:['smr-buildout']},
      {t:"—",n:"Kairos Power",px:"Private",pe:null,ev:null,mc:"~$3B est",v:"Private est",beta:null,fcf:null,revGr:null,ebitdaMargin:null,yf:null,desc:"Kairos Power is developing a fluoride salt-cooled high-temperature reactor (KP-FHR) using TRISO fuel, with a construction permit for its Hermes demonstration reactor in Tennessee. Google signed the first corporate SMR PPA with Kairos for multiple reactor deployments starting around 2030.",products:"KP-FHR reactor, Hermes demonstration unit, TRISO-based fuel",clients:"Google, utilities, DOE",gtcThemes:['smr-buildout','ai-power']},
      {t:"—",n:"TerraPower",px:"Private",pe:null,ev:null,mc:"~$5B est",v:"Private est",beta:null,fcf:null,revGr:null,ebitdaMargin:null,yf:null,desc:"TerraPower, founded by Bill Gates, is developing the Natrium sodium-cooled fast reactor with integrated molten salt energy storage. Its first demonstration plant in Kemmerer, Wyoming (a retired coal site) is under construction with DOE cost-share funding, targeting 345 MWe baseload with 500 MWe peak via storage.",products:"Natrium reactor, molten salt storage, traveling wave reactor (shelved)",clients:"PacifiCorp, DOE, potential data center customers",gtcThemes:['smr-buildout','legacy-coal']},
      {t:"—",n:"X-energy",px:"Private",pe:null,ev:null,mc:"~$2B est",v:"Private est",beta:null,fcf:null,revGr:null,ebitdaMargin:null,yf:null,desc:"X-energy is developing the Xe-100 high-temperature gas-cooled reactor using TRISO fuel pebbles, targeting 80 MWe modules deployable in four-packs. The company also manufactures TRISO fuel at its Oak Ridge facility and won a DOE Advanced Reactor Demonstration Program award.",products:"Xe-100 HTGR, TRISO-X fuel fabrication facility",clients:"Dow Chemical (first customer), DOE, utilities",gtcThemes:['smr-buildout','haleu-monopoly']},
    ]
  },
  {
    id:"services", label:"NUCLEAR SERVICES & OPERATIONS — Plant lifecycle", icon:"🔧", stream:"downstream",
    what:"The companies that operate existing nuclear fleets, provide maintenance and engineering services, manage fuel cycles, and handle decommissioning. These are the revenue-generating backbone of the nuclear industry today, not the speculative future.",
    industry:"The US operates 93 commercial reactors generating 20% of national electricity. License extensions to 80 years, power uprates, and plant restarts (TMI, Palisades) are cheaper and faster than new builds. Services companies benefit from both the existing fleet and the coming expansion.",
    value:"Constellation Energy (CEG) is the most direct pure-play on nuclear power generation, operating the largest US fleet. Services and engineering firms (Jacobs, Fluor) provide steady-state revenue from plant operations while positioning for new-build and SMR construction contracts.",
    medPE:22, medEV:15, medFCF:4,
    cos:[
      {t:"CEG",n:"Constellation Energy",px:"$250",pe:25,ev:18,mc:"$80B",v:"Est 3/26",beta:1.1,fcf:4.0,revGr:8,ebitdaMargin:30,yf:"CEG",desc:"Constellation Energy is the largest nuclear fleet operator in the United States with 21 reactors across 12 plants, generating over 32 GW of carbon-free power. The company signed a landmark 20-year PPA with Microsoft to restart Three Mile Island Unit 1 and is the primary beneficiary of hyperscaler nuclear power demand, with its stock re-rating dramatically as AI power needs become apparent.",products:"Nuclear power generation, clean energy certificates, retail electricity",clients:"Microsoft (TMI PPA), Amazon, grid/wholesale markets, C&I customers",gtcThemes:['ai-power','uranium-squeeze']},
      {t:"J",n:"Jacobs Solutions",px:"$140",pe:20,ev:14,mc:"$17B",v:"Est 3/26",beta:0.9,fcf:4.5,revGr:6,ebitdaMargin:12,yf:"J",desc:"Jacobs Solutions is a global engineering and professional services company with deep nuclear expertise spanning plant design, licensing support, decommissioning, and environmental remediation. Its Critical Mission Solutions segment serves DOE national laboratories and nuclear cleanup sites.",products:"Nuclear engineering, plant design support, decommissioning, environmental services",clients:"DOE, NRC, nuclear utilities, UK NDA, international nuclear programs",gtcThemes:['legacy-coal']},
      {t:"FLR",n:"Fluor Corporation",px:"$50",pe:18,ev:10,mc:"$8.5B",v:"Est 3/26",beta:1.5,fcf:3.0,revGr:8,ebitdaMargin:6,yf:"FLR",desc:"Fluor Corporation is a major engineering, procurement, and construction (EPC) company with significant nuclear experience including DOE site management, decommissioning, and new-build construction. Fluor managed the Savannah River Site and provides EPC services for nuclear facilities worldwide.",products:"Nuclear EPC, DOE site management, decommissioning, construction management",clients:"DOE, nuclear utilities, international nuclear programs",gtcThemes:['smr-buildout','legacy-coal']},
      {t:"—",n:"Framatome (EDF)",px:"Private",pe:null,ev:null,mc:"Part of EDF",v:"EDF subsidiary",beta:null,fcf:null,revGr:null,ebitdaMargin:null,yf:null,desc:"Framatome is the nuclear fuel and reactor services division of Electricite de France (EDF), supplying fuel assemblies, instrumentation and control systems, and reactor services to the global fleet. It is one of only three Western fuel fabricators and holds critical positions in US plant maintenance.",products:"Nuclear fuel assemblies, reactor I&C, plant services, heavy components",clients:"EDF fleet, US utilities, global nuclear operators",gtcThemes:['uranium-squeeze']},
    ]
  },
  {
    id:"fuel", label:"FUEL FABRICATION & ENRICHMENT — The nuclear fuel cycle", icon:"⚗️", stream:"midstream",
    what:"The critical midstream of nuclear: converting yellowcake (U3O8) to uranium hexafluoride (UF6), enriching it to reactor-grade (3-5% U-235) or HALEU (5-20% U-235) via centrifuge cascades, and fabricating it into fuel assemblies. This is the most concentrated and geopolitically sensitive segment of the supply chain.",
    industry:"Global enrichment capacity is dominated by four players: Urenco, Orano, TENEX/Rosatom (Russian, now banned from US imports effective 2028), and Centrus. The US import ban on Russian enriched uranium creates urgent demand for Western capacity expansion. HALEU production for advanced reactors is an even tighter bottleneck — Centrus is the only US-licensed producer.",
    value:"Centrus Energy (LEU) at 25x is arguably the most strategically undervalued company in the nuclear chain as the sole US-licensed HALEU enricher, trading at half the multiple of upstream uranium miners despite holding a more critical chokepoint. DOE has committed $2.7B to domestic enrichment buildout.",
    medPE:25, medEV:18, medFCF:3,
    cos:[
      {t:"LEU",n:"Centrus Energy",px:"$85",pe:25,ev:18,mc:"$1.3B",v:"Est 3/26",beta:2.0,fcf:4.0,revGr:15,ebitdaMargin:12,yf:"LEU",desc:"Centrus Energy is the only US-licensed company producing HALEU (High-Assay Low-Enriched Uranium), the fuel required by most advanced reactor designs including NuScale, Oklo, X-energy, and TerraPower. Centrus operates the American Centrifuge Plant in Piketon, Ohio under DOE contract and also acts as a broker/trader of conventional enrichment services (SWU). The company's monopoly on US HALEU production is the single most critical bottleneck in the advanced nuclear fuel supply chain.",products:"HALEU production, LEU enrichment services (SWU), uranium management",clients:"DOE (HALEU contract), utilities, SMR developers (NuScale, Oklo, X-energy)",gtcThemes:['haleu-monopoly','russian-dependence','uranium-squeeze']},
      {t:"—",n:"Urenco",px:"Private",pe:null,ev:null,mc:"~$15B est",v:"Private est",beta:null,fcf:null,revGr:8,ebitdaMargin:35,yf:null,desc:"Urenco is a UK-Dutch-German government-backed uranium enrichment consortium operating centrifuge plants in the UK, Netherlands, Germany, and the US (New Mexico). It is the largest Western enricher by SWU capacity and is expanding to partially offset the loss of Russian enrichment supply.",products:"Uranium enrichment (SWU), depleted uranium tails, nuclear fuel",clients:"Global nuclear utilities, fuel fabricators",gtcThemes:['russian-dependence','uranium-squeeze']},
      {t:"—",n:"Orano (French)",px:"Private",pe:null,ev:null,mc:"~$10B est",v:"French state-owned",beta:null,fcf:null,revGr:5,ebitdaMargin:20,yf:null,desc:"Orano is France's state-owned nuclear fuel cycle company, operating across uranium mining (Niger, Kazakhstan), conversion (Malvesi, Tricastin), enrichment (Georges Besse II centrifuge plant), fuel fabrication, and spent fuel recycling (La Hague). It is the only Western company with a fully integrated fuel cycle.",products:"Uranium mining, conversion, enrichment, fuel fabrication, recycling",clients:"EDF, global nuclear utilities, DOE",gtcThemes:['russian-dependence','uranium-squeeze']},
      {t:"—",n:"Global Nuclear Fuel (GE/Hitachi JV)",px:"Private",pe:null,ev:null,mc:"Part of GEV/Hitachi",v:"JV",beta:null,fcf:null,revGr:null,ebitdaMargin:null,yf:null,desc:"Global Nuclear Fuel is a joint venture between GE Vernova, Hitachi, and Toshiba that fabricates boiling water reactor (BWR) fuel assemblies in Wilmington, NC. It supplies fuel to approximately one-third of the US commercial reactor fleet.",products:"BWR fuel assemblies, fuel engineering services",clients:"US BWR operators, international BWR fleet",gtcThemes:['uranium-squeeze']},
    ]
  },
  {
    id:"components", label:"REACTOR COMPONENTS & SPECIALTY MANUFACTURING — Critical hardware", icon:"🔩", stream:"midstream",
    what:"Manufacturers of the highly specialized, nuclear-qualified components that go into reactor systems: pressure vessels, steam generators, reactor coolant pumps, control rod drives, instrumentation, valves, and radiation monitoring equipment. Nuclear qualification is a multi-year process that creates durable barriers to entry.",
    industry:"Nuclear-grade manufacturing requires NQA-1 quality assurance, ASME N-stamp certification, and years of qualification testing. The supplier base has consolidated dramatically since the 1970s — many critical components now have only 1-2 qualified suppliers globally. Lead times for large forgings can exceed 3 years.",
    value:"Curtiss-Wright (CW) and Crane Company (CR) are the most direct pure-play public names on nuclear-qualified components. Both benefit from the existing fleet's maintenance needs and the coming wave of new builds and SMRs, but CW trades at a premium reflecting its deeper nuclear integration.",
    medPE:25, medEV:16, medFCF:4,
    cos:[
      {t:"CW",n:"Curtiss-Wright",px:"$320",pe:28,ev:18,mc:"$12B",v:"Est 3/26",beta:0.9,fcf:4.0,revGr:7,ebitdaMargin:20,yf:"CW",desc:"Curtiss-Wright supplies reactor coolant pumps, control rod drive mechanisms, and instrumentation for the US nuclear fleet and naval nuclear propulsion program. Its Naval & Power division holds sole-source positions on critical reactor components for both commercial plants and US Navy submarines and carriers.",products:"Reactor coolant pumps, CRDMs, reactor instrumentation, naval reactor components",clients:"US Navy, Constellation Energy, Westinghouse, nuclear utilities globally",gtcThemes:['smr-buildout']},
      {t:"CR",n:"Crane Company",px:"$180",pe:22,ev:15,mc:"$10B",v:"Est 3/26",beta:1.1,fcf:4.5,revGr:5,ebitdaMargin:18,yf:"CR",desc:"Crane Company manufactures nuclear-qualified valves, fittings, and fluid handling equipment used throughout reactor primary and secondary systems. Its Process Flow Technologies segment serves the nuclear, chemical, and industrial markets with high-spec engineered products.",products:"Nuclear valves, check valves, pressure relief valves, fluid handling components",clients:"Nuclear utilities, Westinghouse, Framatome, reactor OEMs",gtcThemes:[]},
      {t:"HAYN",n:"Haynes International",px:"$55",pe:15,ev:10,mc:"$1.4B",v:"Est 3/26",beta:1.2,fcf:5.0,revGr:5,ebitdaMargin:15,yf:"HAYN",desc:"Haynes International produces high-temperature nickel and cobalt superalloys used in reactor internals, steam generator tubing, and gas turbine hot-section components. Its alloys withstand the extreme temperatures and corrosive environments found in nuclear and energy applications.",products:"Nickel superalloys (Hastelloy, HAYNES alloys), cobalt alloys, corrosion-resistant alloys",clients:"GE Vernova, nuclear utilities, chemical processors, aerospace OEMs",gtcThemes:[]},
      {t:"MIR",n:"Mirion Technologies",px:"$16",pe:35,ev:22,mc:"$3.5B",v:"Est 3/26",beta:1.3,fcf:2.0,revGr:8,ebitdaMargin:14,yf:"MIR",desc:"Mirion Technologies is the leading global provider of radiation detection, measurement, and monitoring systems for the nuclear industry. Its products are installed in virtually every commercial nuclear plant worldwide and are essential for worker safety, environmental compliance, and reactor monitoring.",products:"Radiation detectors, health physics instruments, reactor monitoring systems, dosimetry",clients:"Nuclear utilities globally, DOE, medical facilities, defense",gtcThemes:['smr-buildout']},
      {t:"—",n:"Westinghouse Electric",px:"Private",pe:null,ev:null,mc:"~$8B est",v:"Cameco+Brookfield",beta:null,fcf:null,revGr:6,ebitdaMargin:15,yf:null,desc:"Westinghouse Electric Company, acquired by Cameco and Brookfield in 2023 for $7.9B, is the original nuclear technology company and the designer of the AP1000 reactor. It provides fuel assemblies, reactor services, and plant modernization for approximately half of the global commercial reactor fleet.",products:"AP1000 reactor, nuclear fuel, reactor services, I&C systems, decommissioning",clients:"Global nuclear utilities, DOE, new-build customers (China, Poland, Ukraine)",gtcThemes:['smr-buildout','uranium-squeeze']},
    ]
  },
  {
    id:"grid", label:"GRID INFRASTRUCTURE & TRANSMISSION — Connecting generation to load", icon:"⚡", stream:"midstream",
    what:"The transformers, switchgear, transmission lines, substations, and grid modernization equipment needed to connect new nuclear generation to data centers and the broader grid. This is the most underappreciated bottleneck in the nuclear renaissance — you can build all the reactors you want, but without grid infrastructure they cannot deliver power.",
    industry:"The US grid interconnection queue exceeds 2,600 GW of proposed generation waiting to connect. Large power transformer lead times have stretched from 12 months to 3-4 years. The grid was built for distributed fossil generation, not the centralized baseload pattern that nuclear and data centers require.",
    value:"Grid infrastructure companies (Eaton, Hubbell, Quanta) trade at premium multiples reflecting the multi-decade capital spending cycle needed to modernize US electrical infrastructure. These are the picks-and-shovels of the energy transition regardless of which generation technology wins.",
    medPE:28, medEV:18, medFCF:3,
    cos:[
      {t:"ETN",n:"Eaton Corporation",px:"$310",pe:30,ev:22,mc:"$125B",v:"Est 3/26",beta:1.1,fcf:3.0,revGr:8,ebitdaMargin:22,yf:"ETN",desc:"Eaton is the largest diversified electrical equipment manufacturer in North America, producing transformers, switchgear, uninterruptible power supplies, and power distribution systems. Its electrical segment is the primary beneficiary of data center construction, grid modernization, and utility capital spending acceleration.",products:"Transformers, switchgear, UPS, PDUs, circuit breakers, power distribution",clients:"Data centers, utilities, industrial, commercial construction",gtcThemes:['grid-bottleneck','ai-power']},
      {t:"HUBB",n:"Hubbell Incorporated",px:"$420",pe:28,ev:20,mc:"$22B",v:"Est 3/26",beta:1.0,fcf:3.5,revGr:6,ebitdaMargin:22,yf:"HUBB",desc:"Hubbell produces electrical connectors, wiring devices, utility poles, and transmission components used throughout the grid from generation to end-use. Its Utility Solutions segment supplies the hardware that physically connects power plants to the transmission and distribution system.",products:"Electrical connectors, utility poles, insulators, surge arresters, wiring devices",clients:"Utilities, electrical distributors, contractors, data centers",gtcThemes:['grid-bottleneck']},
      {t:"PWR",n:"Quanta Services",px:"$310",pe:25,ev:16,mc:"$45B",v:"Est 3/26",beta:1.0,fcf:3.5,revGr:10,ebitdaMargin:10,yf:"PWR",desc:"Quanta Services is the largest electrical power infrastructure services company in North America, providing design, construction, and maintenance of transmission lines, substations, and distribution networks. It is the primary contractor for the physical buildout of the grid capacity needed to support new generation and data center loads.",products:"Transmission line construction, substation construction, grid services, fiber installation",clients:"Utilities, renewable developers, data center operators, pipeline companies",gtcThemes:['grid-bottleneck','ai-power']},
      {t:"MYRG",n:"MYR Group",px:"$160",pe:20,ev:12,mc:"$2.7B",v:"Est 3/26",beta:1.0,fcf:4.0,revGr:8,ebitdaMargin:7,yf:"MYRG",desc:"MYR Group provides electrical construction services for transmission and distribution infrastructure, substations, and commercial/industrial electrical work. It serves as a tier-2 contractor behind Quanta for utility-scale grid construction projects.",products:"Transmission construction, substation construction, distribution services",clients:"Utilities, renewable developers, commercial/industrial",gtcThemes:['grid-bottleneck']},
    ]
  },
  {
    id:"uranium", label:"URANIUM MINING & PRODUCTION — Primary supply", icon:"⛏️", stream:"upstream",
    what:"The companies that extract uranium from the earth through conventional mining or in-situ recovery (ISR), producing yellowcake (U3O8) that enters the nuclear fuel cycle. Primary production currently covers only about 75% of global reactor demand, with the deficit met by inventory drawdowns and secondary supplies that are depleting.",
    industry:"Uranium mining was depressed for a decade after Fukushima, with spot prices below production costs for most Western miners. The structural supply deficit, combined with Western supply chain reshoring away from Russian and Kazakh dependence, is creating a generational bull market. Kazatomprom production cuts and sanctions on Russian fuel accelerate the squeeze.",
    value:"Cameco (CCJ) at 45x is priced as the blue-chip uranium play with integrated fuel services and the Westinghouse acquisition. Pure ISR producers (UEC, DNN) trade on optionality without earnings. NexGen's Rook I deposit is potentially the highest-grade undeveloped uranium project globally.",
    medPE:null, medEV:20, medFCF:0,
    cos:[
      {t:"CCJ",n:"Cameco Corporation",px:"$55",pe:45,ev:30,mc:"$25B",v:"Est 3/26",beta:1.3,fcf:2.0,revGr:20,ebitdaMargin:35,yf:"CCJ",desc:"Cameco is the world's largest publicly traded uranium producer, operating the McArthur River/Key Lake complex (the highest-grade uranium mine globally) and Cigar Lake in Saskatchewan's Athabasca Basin. The 2023 acquisition of Westinghouse Electric (with Brookfield) transforms Cameco into a vertically integrated nuclear fuel company spanning mining, conversion, fuel fabrication, and reactor services.",products:"Uranium (U3O8), UF6 conversion (Port Hope), Westinghouse fuel and services",clients:"Nuclear utilities globally, fuel fabricators, enrichers",gtcThemes:['uranium-squeeze','russian-dependence']},
      {t:"KAP",n:"Kazatomprom",px:"£35",pe:10,ev:8,mc:"$18B",v:"Est 3/26 (LSE GDR)",beta:1.0,fcf:8.0,revGr:5,ebitdaMargin:55,yf:"0ZQ.L",desc:"Kazatomprom is the world's largest uranium producer by volume, accounting for roughly 25% of global primary production through ISR operations across Kazakhstan. The company has implemented production cuts below its subsoil use agreements, tightening global supply, though geopolitical risk (Russia, China influence) and logistics constraints (sulfuric acid shortages) weigh on its valuation.",products:"Uranium (U3O8) via in-situ recovery, fuel fabrication (Ulba)",clients:"Global nuclear utilities, fuel fabricators, enrichers, China",gtcThemes:['uranium-squeeze']},
      {t:"NXE",n:"NexGen Energy",px:"$8",pe:null,ev:null,mc:"$4B",v:"Est 3/26",beta:1.8,fcf:null,revGr:null,ebitdaMargin:null,yf:"NXE",desc:"NexGen Energy is developing the Rook I project in Saskatchewan's Athabasca Basin, which hosts the Arrow deposit — potentially the largest undeveloped high-grade uranium deposit in the world at 256M lbs U3O8 at an average grade of 3.1%. The project is in the federal/provincial environmental assessment process with production targeted for 2028-2029.",products:"Uranium development (Arrow deposit, Rook I project)",clients:"Future contract customers (utilities, fuel cycle companies)",gtcThemes:['uranium-squeeze']},
      {t:"UEC",n:"Uranium Energy Corp",px:"$8",pe:null,ev:null,mc:"$3B",v:"Est 3/26",beta:2.0,fcf:null,revGr:null,ebitdaMargin:null,yf:"UEC",desc:"Uranium Energy Corp is a US-based ISR uranium producer with hub-and-spoke operations in South Texas and Wyoming, plus conventional projects in Canada (acquired from UEX and Rio Tinto). UEC is positioned as a domestic US supplier benefiting from Section 232 protection and the reshoring of nuclear fuel supply chains.",products:"Uranium (U3O8) via ISR and conventional mining",clients:"US nuclear utilities, DOE strategic reserve",gtcThemes:['uranium-squeeze','russian-dependence']},
      {t:"DNN",n:"Denison Mines",px:"$2.50",pe:null,ev:null,mc:"$2B",v:"Est 3/26",beta:1.6,fcf:null,revGr:null,ebitdaMargin:null,yf:"DNN",desc:"Denison Mines is developing the Wheeler River project in Saskatchewan, which will be the first ISR uranium mine in Canada. The Phoenix deposit offers high grades (19.1% U3O8) amenable to ISR extraction at low operating costs. Denison also holds physical uranium inventory as a strategic asset.",products:"Uranium development (Wheeler River ISR), physical uranium holdings",clients:"Future contract customers, utilities",gtcThemes:['uranium-squeeze']},
      {t:"UUUU",n:"Energy Fuels",px:"$7",pe:null,ev:null,mc:"$1.2B",v:"Est 3/26",beta:1.8,fcf:null,revGr:15,ebitdaMargin:null,yf:"UUUU",desc:"Energy Fuels is a diversified US critical minerals company producing uranium, vanadium, and rare earth elements from its White Mesa Mill in Utah — the only conventional uranium mill operating in the United States. The company is building a rare earths separation circuit, adding exposure to another critical supply chain.",products:"Uranium (U3O8), vanadium (V2O5), rare earth carbonates, medical isotopes",clients:"US utilities, DOE, rare earth processors",gtcThemes:['uranium-squeeze','russian-dependence']},
      {t:"PDN",n:"Paladin Energy",px:"A$15",pe:null,ev:null,mc:"$3.5B",v:"Est 3/26 (ASX)",beta:1.5,fcf:null,revGr:null,ebitdaMargin:null,yf:"PDN.AX",desc:"Paladin Energy is an Australian-listed uranium producer restarting the Langer Heinrich mine in Namibia, one of the few near-term production sources outside of Kazakhstan, Canada, and Russia. The restart provides Western-aligned supply diversification at a time when geopolitical concerns are reshaping uranium procurement.",products:"Uranium (U3O8), Langer Heinrich mine restart",clients:"Global nuclear utilities under long-term contracts",gtcThemes:['uranium-squeeze']},
    ]
  },
  {
    id:"materials", label:"NUCLEAR MATERIALS & SPECIALTY METALS — Exotic alloys", icon:"⚙️", stream:"upstream",
    what:"Producers of the exotic alloys and specialty materials essential for nuclear reactor construction: zircaloy cladding for fuel rods, hafnium for control rods, boron for neutron absorption, nickel superalloys for steam generators, and specialty steels for reactor pressure vessels. These materials must withstand extreme radiation, temperature, and corrosion environments.",
    industry:"Nuclear-grade materials require extensive qualification and certification processes. Zircaloy (zirconium alloy) fuel cladding is a critical single-point-of-failure material — there are only a handful of qualified producers globally. The specialty metals supply chain has consolidated significantly, creating chokepoints that benefit incumbent producers.",
    value:"ATI Inc (ATI) is the most direct public play on nuclear specialty metals, producing zircaloy cladding, titanium, and nickel superalloys. At 15x forward earnings, it trades at a fraction of aerospace materials peers despite nuclear providing structural demand growth.",
    medPE:15, medEV:10, medFCF:5,
    cos:[
      {t:"ATI",n:"ATI Inc",px:"$65",pe:15,ev:10,mc:"$8B",v:"Est 3/26",beta:1.5,fcf:5.0,revGr:8,ebitdaMargin:18,yf:"ATI",desc:"ATI Inc (Allegheny Technologies) produces zircaloy fuel cladding, titanium alloys, nickel superalloys, and specialty steels used in nuclear reactors, jet engines, and defense applications. Its Specialty Alloys and Components segment is the primary Western supplier of zirconium alloys for nuclear fuel cladding, a critical material with no substitute.",products:"Zircaloy fuel cladding, titanium alloys, nickel superalloys, specialty steels, forgings",clients:"BWXT, Westinghouse, Framatome, GE Vernova, jet engine OEMs",gtcThemes:['uranium-squeeze']},
      {t:"—",n:"Precision Castparts (Berkshire)",px:"Private",pe:null,ev:null,mc:"Part of BRK",v:"Berkshire subsidiary",beta:null,fcf:null,revGr:null,ebitdaMargin:null,yf:"BRK-B",desc:"Precision Castparts is a Berkshire Hathaway subsidiary producing investment castings, forgings, and specialty fasteners for nuclear, aerospace, and industrial applications. Its nuclear-qualified forgings are used in reactor pressure vessels and steam generators.",products:"Investment castings, forgings, fasteners, pipe fittings, nuclear pressure vessel components",clients:"Nuclear OEMs, Westinghouse, jet engine makers, aerospace primes",gtcThemes:[]},
    ]
  },
  {
    id:"cooling", label:"COOLING, THERMAL & SAFETY SYSTEMS — Heat management and protection", icon:"🌡️", stream:"upstream",
    what:"Manufacturers of heat exchangers, cooling towers, containment systems, pumps, valves, flow control, process automation, and safety instrumentation for nuclear plants. These systems are essential for reactor safety (removing decay heat) and operational efficiency (converting thermal energy to electricity).",
    industry:"Nuclear safety systems operate under the most stringent regulatory requirements of any industry. Redundancy, seismic qualification, and safety-grade classification create high barriers and long qualification cycles. The existing fleet requires ongoing replacement and upgrades, while new builds represent incremental demand.",
    value:"Flowserve (FLS), SPX Technologies (SPXC), and Emerson Electric (EMR) provide exposure to nuclear thermal and safety systems at reasonable multiples. These are industrial conglomerates with nuclear divisions rather than pure plays, but the nuclear tailwind adds growth to otherwise mature businesses.",
    medPE:22, medEV:14, medFCF:4,
    cos:[
      {t:"FLS",n:"Flowserve Corporation",px:"$60",pe:20,ev:14,mc:"$8B",v:"Est 3/26",beta:1.3,fcf:4.0,revGr:5,ebitdaMargin:14,yf:"FLS",desc:"Flowserve is a global manufacturer of pumps, valves, seals, and flow control products for nuclear power plants, oil and gas, chemical processing, and water treatment. Its nuclear-qualified pumps and valves are installed in reactor primary and secondary systems worldwide.",products:"Nuclear pumps, valves, seals, flow control, actuation, aftermarket services",clients:"Nuclear utilities, Westinghouse, Framatome, oil and gas, chemical",gtcThemes:[]},
      {t:"SPXC",n:"SPX Technologies",px:"$180",pe:25,ev:18,mc:"$8B",v:"Est 3/26",beta:1.1,fcf:3.5,revGr:7,ebitdaMargin:16,yf:"SPXC",desc:"SPX Technologies produces cooling towers, heat exchangers, and HVAC systems used in nuclear plants for heat rejection and building environmental control. Its cooling segment serves utility-scale power generation including nuclear, while its heating segment serves commercial and residential markets.",products:"Cooling towers, heat exchangers, boilers, HVAC systems, detection and monitoring",clients:"Nuclear utilities, data centers, commercial/industrial HVAC",gtcThemes:['grid-bottleneck']},
      {t:"EMR",n:"Emerson Electric",px:"$120",pe:22,ev:16,mc:"$70B",v:"Est 3/26",beta:1.0,fcf:4.0,revGr:5,ebitdaMargin:22,yf:"EMR",desc:"Emerson Electric is a global automation and process control company whose nuclear division provides safety-rated instrumentation, control systems, and process automation for reactor operations. Its DeltaV and Ovation distributed control systems are installed in nuclear plants worldwide.",products:"Process automation, safety I&C, DeltaV/Ovation DCS, valves (Fisher), measurement instruments",clients:"Nuclear utilities, refining, chemical, life sciences, power generation",gtcThemes:['smr-buildout']},
    ]
  },
];

export const TIER_COLORS = {
  buyers: '#94a3b8',
  reactors: '#f97316',
  services: '#a78bfa',
  fuel: '#fbbf24',
  components: '#ef4444',
  grid: '#38bdf8',
  uranium: '#4ade80',
  materials: '#c084fc',
  cooling: '#2dd4bf',
};

export const STREAM_COLORS = {upstream:'#4ade80',midstream:'#60a5fa',downstream:'#fbbf24',demand:'#fb923c'};

export const NUCLEAR_THEMES = {
  'ai-power':          { label: 'AI Data Center Power',     color: '#f97316', dead: false, desc: 'Hyperscalers signing nuclear PPAs to secure 24/7 carbon-free baseload power for AI factories. Microsoft-Constellation TMI restart, Amazon-Talen Susquehanna deal, Google-Kairos PPA.' },
  'uranium-squeeze':   { label: 'Uranium Supply Squeeze',   color: '#4ade80', dead: false, desc: 'Primary uranium production covers only 75% of reactor demand. Inventories drawdown, Kazakh production cuts, and Western supply chain reshoring create structural deficit through 2030+.' },
  'smr-buildout':      { label: 'SMR & Advanced Reactors',  color: '#38bdf8', dead: false, desc: 'Next-generation small modular reactors promise factory-built, modular nuclear at lower capex per MW. NRC approvals accelerating but commercial deployment still 2028-2030+.' },
  'grid-bottleneck':   { label: 'Grid Modernization',       color: '#a78bfa', dead: false, desc: 'US grid interconnection queue exceeds 2,600 GW. Transformer lead times stretch to 3-4 years. Massive investment needed in transmission, distribution, and grid-scale storage.' },
  'haleu-monopoly':    { label: 'HALEU Fuel Chain',          color: '#fbbf24', dead: false, desc: 'High-Assay Low-Enriched Uranium required for most advanced reactor designs. Centrus is the only US-licensed producer. DOE funding $2.7B to build domestic supply chain.' },
  'legacy-coal':       { label: 'Coal-to-Nuclear Conversion',color: '#ef4444', dead: false, desc: 'Converting retired coal plant sites to nuclear leverages existing grid connections and cooling infrastructure. DOE studying 300+ eligible sites. Early stage.' },
  'russian-dependence':{ label: 'Russian Fuel Dependence',   color: '#ef4444', dead: true,  desc: 'US import ban on Russian enriched uranium (effective 2028) creating urgency to build Western enrichment capacity. Transition risk for utilities still sourcing from TENEX/Rosatom.' },
};

export const VALUATION_GAPS = [
  {
    a:"CCJ",aPE:45,b:"UEC",bPE:null,
    title:"Integrated uranium producer vs pure ISR explorer",
    summary:"Cameco and Uranium Energy Corp both produce uranium, but Cameco is a fully integrated nuclear fuel company (mining, conversion, Westinghouse fuel services) while UEC is a pure-play ISR uranium producer with hub-and-spoke US operations and no earnings.",
    thesis:"Cameco trades at 45x forward earnings while UEC has no PE ratio (pre-earnings), yet both benefit from the same uranium supply squeeze. Cameco's Westinghouse acquisition provides fuel services revenue diversification and downstream integration, justifying a premium. However, UEC's pure US-domiciled production benefits from Section 232 protection and Russian fuel ban tailwinds, and as a lower-cost ISR producer, its margins at higher uranium prices could expand dramatically. The question is whether UEC can convert its resource base into profitable production before the uranium cycle peaks.",
  },
  {
    a:"SMR",aPE:null,b:"BWXT",bPE:30,
    title:"Speculative SMR developer vs proven naval nuclear monopoly",
    summary:"NuScale Power and BWX Technologies both operate in nuclear reactor technology, but NuScale is a pre-revenue SMR developer whose first commercial project was canceled, while BWXT holds a monopoly on US naval nuclear reactor manufacturing with decades of profitable operations.",
    thesis:"NuScale commands a $6B market cap with zero revenue, while BWXT at $12B generates real earnings at 30x forward PE. NuScale has the first NRC-approved SMR design but no anchor customer after the UAMPS cancellation. BWXT has a monopoly on manufacturing nuclear reactors for US aircraft carriers and submarines, is developing TRISO fuel and micro-reactors, and has actual defense program backlog. The market is paying a massive premium for NuScale's optionality while arguably underpricing BWXT's irreplaceable position in both defense and commercial nuclear.",
  },
  {
    a:"CEG",aPE:25,b:"GEV",bPE:35,
    title:"Largest nuclear fleet operator vs energy equipment OEM",
    summary:"Constellation Energy and GE Vernova are the two most important public companies in the nuclear power chain, but from opposite sides: CEG operates 21 reactors generating actual electricity revenue, while GEV manufactures gas turbines, grid equipment, and is developing SMR technology.",
    thesis:"Constellation trades at 25x with recurring nuclear power revenue and signed hyperscaler PPAs (Microsoft TMI restart), while GE Vernova at 35x is priced as a growth platform across gas turbines, grid, and SMR development. CEG offers cheaper access to the AI power demand theme with actual nuclear generation assets and long-term contracted revenue. GEV offers broader energy transition exposure but at a 40% PE premium. If nuclear power demand materializes as expected, CEG's existing fleet — which cannot be replicated — may prove more valuable than GEV's equipment business.",
  },
  {
    a:"LEU",aPE:25,b:"CCJ",bPE:45,
    title:"Only US HALEU enricher at half the multiple of the uranium miner",
    summary:"Centrus Energy and Cameco both occupy critical positions in the nuclear fuel supply chain, but Centrus is the sole US-licensed producer of HALEU (the fuel required by advanced reactors) while Cameco is the largest public uranium miner with integrated fuel services.",
    thesis:"Centrus trades at 25x while Cameco commands 45x, nearly double the multiple, despite Centrus holding what may be the single most critical chokepoint in the advanced nuclear fuel chain. Every SMR developer — NuScale, Oklo, X-energy, TerraPower — needs HALEU, and Centrus is the only domestic source. DOE has committed $2.7B to expand enrichment capacity, and Centrus is the lead recipient. At half Cameco's multiple, Centrus appears significantly undervalued relative to its strategic monopoly position, though its smaller scale and DOE contract dependence explain part of the discount.",
  },
  {
    a:"CW",aPE:28,b:"CR",bPE:22,
    title:"Nuclear-qualified component makers at different multiples",
    summary:"Curtiss-Wright and Crane Company both manufacture nuclear-qualified components — CW produces reactor coolant pumps and control rod drive mechanisms, while CR produces nuclear valves and fluid handling equipment. Both serve the existing fleet and new-build markets.",
    thesis:"Curtiss-Wright trades at 28x versus Crane at 22x, a 27% premium reflecting CW's deeper integration into naval nuclear propulsion (a guaranteed government program) and its broader defense electronics portfolio. However, Crane's nuclear valve business benefits from the same fleet maintenance and new-build tailwinds, and its simpler business model generates comparable margins at a lower multiple. As the nuclear renaissance drives demand for qualified components, the valuation gap may narrow if Crane's nuclear exposure becomes more visible to investors.",
  },
  {
    a:"ETN",aPE:30,b:"HUBB",bPE:28,
    title:"Grid infrastructure peers with similar profiles",
    summary:"Eaton and Hubbell are the two largest pure-play electrical infrastructure companies, both benefiting from data center construction, grid modernization, and the electrification megatrend. Eaton produces transformers, switchgear, and power distribution, while Hubbell makes connectors, utility poles, and transmission components.",
    thesis:"Eaton at 30x and Hubbell at 28x trade in a tight range reflecting similar structural exposure to the multi-decade grid buildout cycle. Eaton's larger scale ($125B vs $22B market cap) and broader product portfolio provide diversification, while Hubbell's utility-focused business may offer more direct leverage to transmission and distribution spending. Both are picks-and-shovels beneficiaries of the nuclear renaissance, data center construction boom, and grid modernization, regardless of which generation technology ultimately wins. The tight valuation gap suggests the market views them as near-substitutes.",
  },
];

export const SUPPLY_CHAIN_PAIRS = [
  // Uranium → Fuel/Services (upstream to midstream/downstream)
  {supplier:'CCJ',customer:'CEG',rel:'Uranium fuel supply → reactor operator',cat:'uranium-services'},
  {supplier:'CCJ',customer:'GEV',rel:'Uranium → fuel fabrication / reactor OEM',cat:'uranium-reactors'},
  {supplier:'UEC',customer:'LEU',rel:'Yellowcake (U3O8) → enrichment',cat:'uranium-fuel'},
  {supplier:'NXE',customer:'CCJ',rel:'Uranium concentrate → Cameco refining/conversion',cat:'uranium-uranium'},

  // Enrichment → Reactor OEMs (midstream to downstream)
  {supplier:'LEU',customer:'BWXT',rel:'HALEU enrichment → naval/defense reactors',cat:'fuel-reactors'},
  {supplier:'LEU',customer:'SMR',rel:'HALEU → NuScale SMR fuel',cat:'fuel-reactors'},
  {supplier:'LEU',customer:'OKLO',rel:'HALEU → Oklo micro-reactor fuel',cat:'fuel-reactors'},

  // Reactor OEMs → Navy/Defense
  {supplier:'BWXT',customer:'—',rel:'Naval nuclear reactors → US Navy',cat:'reactors-demand'},

  // Components → Reactors/Services (midstream to downstream)
  {supplier:'CW',customer:'BWXT',rel:'Reactor components → naval nuclear program',cat:'components-reactors'},
  {supplier:'CW',customer:'CEG',rel:'Reactor instrumentation → plant operator',cat:'components-services'},
  {supplier:'CR',customer:'CEG',rel:'Nuclear valves → nuclear plants',cat:'components-services'},
  {supplier:'MIR',customer:'CEG',rel:'Radiation monitoring → plant operator',cat:'components-services'},

  // Grid (midstream internal and to demand)
  {supplier:'ETN',customer:'PWR',rel:'Electrical equipment → grid construction',cat:'grid-grid'},
  {supplier:'HUBB',customer:'PWR',rel:'Connectors/components → grid construction',cat:'grid-grid'},

  // Reactor OEMs → Utilities/Demand
  {supplier:'GEV',customer:'CEG',rel:'Turbine/grid equipment → utility',cat:'reactors-services'},
  {supplier:'GEV',customer:'—',rel:'Grid solutions → hyperscaler data centers (MSFT)',cat:'reactors-demand'},
  {supplier:'CEG',customer:'—',rel:'Nuclear PPA → Microsoft Azure data centers',cat:'services-demand'},
  {supplier:'CEG',customer:'—',rel:'Nuclear PPA → Amazon AWS data centers',cat:'services-demand'},

  // Cooling/Safety → Services (upstream to downstream)
  {supplier:'FLS',customer:'CEG',rel:'Pumps and valves → nuclear plants',cat:'cooling-services'},
  {supplier:'SPXC',customer:'CEG',rel:'Cooling systems → nuclear plants',cat:'cooling-services'},
  {supplier:'EMR',customer:'CEG',rel:'Process automation → plant controls',cat:'cooling-services'},

  // Materials → Reactors (upstream to downstream)
  {supplier:'ATI',customer:'BWXT',rel:'Zircaloy / specialty metals → reactor fuel cladding',cat:'materials-reactors'},
  {supplier:'HAYN',customer:'GEV',rel:'Nickel superalloys → turbine components',cat:'materials-reactors'},

  // Services/Engineering → Plant lifecycle
  {supplier:'J',customer:'CEG',rel:'Engineering services → plant lifecycle',cat:'services-services'},
  {supplier:'FLR',customer:'CEG',rel:'Construction / decommissioning → plant lifecycle',cat:'services-services'},

  // SMR developers → fleet expansion
  {supplier:'SMR',customer:'CEG',rel:'SMR design → potential fleet expansion',cat:'reactors-services'},
  {supplier:'OKLO',customer:'—',rel:'Micro-reactor → Google data center PPA',cat:'reactors-demand'},
];

const UI = {
  themeTitle: 'Nuclear energy investment theme exposure',
  themeDesc: 'The nuclear renaissance is driven by AI power demand, uranium supply constraints, and policy support for energy security. Companies positioned across these structural themes benefit from multi-decade tailwinds as the world rediscovers nuclear as the only scalable carbon-free baseload source.',
  deadThemeWarning: 'TRANSITIONING THEME — This risk factor is being actively addressed through policy and investment. Companies with primary exposure here face near-term headwinds but may benefit from the transition.',
  streamDesc: {
    upstream: 'Uranium miners, specialty metals producers, and cooling/safety system manufacturers. Uranium supply covers only 75% of demand, creating a structural deficit that benefits primary producers.',
    midstream: 'Fuel fabrication, enrichment, reactor components, and grid infrastructure. HALEU enrichment is a critical bottleneck with Centrus as the sole US-licensed producer.',
    downstream: 'Reactor OEMs, SMR developers, and nuclear services companies that build and operate the plants. Mix of proven incumbents and speculative next-gen developers.',
    demand: 'Hyperscalers and utilities buying nuclear power through PPAs and fleet investments. AI data center power demand is the primary catalyst driving the nuclear renaissance.',
  },
  flowDesc: 'Uranium flows from mines through conversion and enrichment to fuel fabrication, then into reactors operated by utilities that sell power to data centers and the grid. Grid infrastructure connects generation to load.',
  flowArrows: ['Uranium and specialty materials feed into fuel fabrication and component manufacturing','Enriched fuel and components are assembled into reactor systems and connected to the grid','Reactors generate baseload power for utilities and data center customers'],
  ratioDesc: 'These ratios compare the median forward P/E of upstream uranium miners and materials companies against midstream fuel/component makers, downstream reactor OEMs, and end-demand utilities. Ratios below 1.0x suggest the upstream supply chain is underpriced relative to the demand it enables.',
  ratios: [
    {label:'Upstream / Downstream',num:'upstream',den:'downstream',desc:'Uranium miners & materials vs reactor OEMs and services'},
    {label:'Upstream / Demand',num:'upstream',den:'demand',desc:'Uranium miners & materials vs utilities and data center buyers'},
    {label:'Midstream / Downstream',num:'midstream',den:'downstream',desc:'Fuel fabrication, components, and grid vs reactor builders'},
    {label:'Midstream / Demand',num:'midstream',den:'demand',desc:'Fuel and grid infrastructure vs utility and data center buyers'},
  ],
};

export default {
  id: 'nuclear',
  name: 'Nuclear & Energy',
  icon: '☢️',
  description: 'The nuclear energy supply chain from uranium mining through enrichment and fuel fabrication to reactor construction, grid infrastructure, and data center power demand.',
  TIERS,
  TIER_COLORS,
  STREAM_COLORS,
  VALUATION_GAPS,
  SUPPLY_CHAIN_PAIRS,
  GTC_THEMES: NUCLEAR_THEMES,
  UI,
};
