// DATA — DATA CENTER INFRASTRUCTURE SUPPLY CHAIN
// Approximate valuations as of March 2026. Sources: Yahoo Finance, StockAnalysis, GuruFocus.
// PE = forward P/E. EV = EV/EBITDA. MC = market cap. FCF = FCF yield %.

export const TIERS = [
  {
    id:"hyperscalers", label:"HYPERSCALERS & CLOUD — The capex spenders", icon:"☁️", stream:"demand",
    what:"The ultimate demand signal: hyperscalers and cloud providers spending $660-690B in combined 2026 capex on AI infrastructure. These companies are the customers for every tier below — their capital allocation decisions cascade through the entire physical infrastructure supply chain.",
    industry:"AI is driving the largest infrastructure buildout since the internet. Each hyperscaler is racing to deploy GPU clusters at unprecedented scale, with individual campuses exceeding 1 gigawatt of power demand. Jensen Huang described AI factories costing $40B each. The bottleneck is no longer chips — it is the physical plant to house, power, and cool them.",
    value:"Not directly investable as DC infrastructure plays, but their capex trajectory — growing 40-60% year-over-year — is the single most important demand signal for every company in the physical data center supply chain. Watch for capex guidance revisions as the leading indicator.",
    medPE:28, medEV:null, medFCF:null,
    cos:[
      {t:"AMZN",n:"Amazon (AWS)",px:"$195",pe:35,ev:null,mc:"$2.1T",v:"Est 3/26",beta:1.15,fcf:null,revGr:12,ebitdaMargin:38,yf:"AMZN",desc:"Amazon Web Services is the largest cloud provider globally, spending aggressively on data center capacity with over $100B in 2026 capex planned. AWS is building massive campuses across Northern Virginia, Oregon, and international markets, driving demand for power infrastructure, cooling systems, and fiber connectivity at unprecedented scale.",products:"AWS cloud, AI compute infrastructure, custom silicon (Trainium, Graviton)",clients:"N/A",gtcThemes:['ai-factory','power-bottleneck']},
      {t:"MSFT",n:"Microsoft (Azure)",px:"$395",pe:32,ev:null,mc:"$2.9T",v:"Est 3/26",beta:0.9,fcf:null,revGr:15,ebitdaMargin:45,yf:"MSFT",desc:"Microsoft Azure is the second-largest cloud provider with over $80B in 2026 capex guidance, driven by OpenAI partnership and Copilot AI demand. Microsoft is pursuing nuclear power (Three Mile Island restart) and exploring novel cooling solutions to support AI workload density requirements.",products:"Azure cloud, AI compute, Copilot, OpenAI partnership",clients:"N/A",gtcThemes:['ai-factory','liquid-cooling','power-bottleneck']},
      {t:"GOOG",n:"Google Cloud (Alphabet)",px:"$175",pe:22,ev:null,mc:"$2.2T",v:"Est 3/26",beta:1.05,fcf:null,revGr:14,ebitdaMargin:40,yf:"GOOG",desc:"Google Cloud is the third-largest cloud provider with substantial capex acceleration for AI infrastructure. Google pioneered data center efficiency innovations and is now investing in nuclear SMR power (Kairos Power PPA) and advanced cooling technologies for its AI training clusters.",products:"Google Cloud, TPU custom AI chips, Gemini AI",clients:"N/A",gtcThemes:['ai-factory','power-bottleneck']},
      {t:"META",n:"Meta Platforms",px:"$665",pe:24,ev:null,mc:"$1.7T",v:"Est 3/26",beta:1.25,fcf:null,revGr:18,ebitdaMargin:42,yf:"META",desc:"Meta is building the largest AI training infrastructure in the world, with 2026 capex exceeding $60B. The company is constructing a 2GW+ data center campus in Louisiana and has issued RFPs for 1-4 GW of nuclear power, signaling the scale of physical infrastructure demand from a single hyperscaler.",products:"AI training infrastructure, Llama models, Reality Labs",clients:"N/A",gtcThemes:['ai-factory','power-bottleneck','liquid-cooling']},
      {t:"ORCL",n:"Oracle Cloud",px:"$155",pe:28,ev:null,mc:"$430B",v:"Est 3/26",beta:1.1,fcf:null,revGr:16,ebitdaMargin:45,yf:"ORCL",desc:"Oracle Cloud Infrastructure is growing rapidly as an AI cloud provider, with multi-billion dollar GPU cluster contracts from Microsoft, OpenAI, and xAI. Oracle is building massive data center campuses and has become a significant source of demand for power and cooling infrastructure.",products:"OCI cloud, Autonomous Database, AI infrastructure",clients:"N/A",gtcThemes:['ai-factory']},
      {t:"BABA",n:"Alibaba Cloud",px:"$130",pe:12,ev:null,mc:"$330B",v:"Est 3/26",beta:0.8,fcf:null,revGr:8,ebitdaMargin:20,yf:"BABA",desc:"Alibaba Cloud is the largest cloud provider in China, investing heavily in AI infrastructure for the domestic market. While US-listed, the company represents the parallel data center buildout happening across Asia, driving demand for the same power, cooling, and connectivity infrastructure.",products:"Alibaba Cloud, Tongyi Qianwen AI, cloud infrastructure",clients:"N/A",gtcThemes:['ai-factory']},
    ]
  },
  {
    id:"reits", label:"DATA CENTER REITs & OPERATORS — Own and lease the buildings", icon:"🏗️", stream:"downstream",
    what:"The companies that own, develop, and operate data center facilities, leasing capacity to hyperscalers, enterprises, and cloud providers. They are the landlords of the digital economy, investing billions in new campus development to meet demand that far exceeds available supply.",
    industry:"Data center vacancy rates are below 3% in major markets. Construction timelines have stretched from 18 months to 3+ years due to power availability and permitting constraints. Pre-leasing rates exceed 90% for new campuses. The industry is shifting from retail colocation to hyperscale build-to-suit, with individual leases exceeding 100MW.",
    value:"Traditional DC REITs (EQIX, DLR) trade at elevated multiples reflecting contracted revenue growth and scarcity value. CoreWeave (CRWV) represents a new category — GPU cloud operator — trading on AI demand optionality without earnings. Iron Mountain (IRM) is a less obvious but growing DC play.",
    medPE:55, medEV:null, medFCF:2.5,
    cos:[
      {t:"EQIX",n:"Equinix",px:"$900",pe:75,ev:null,mc:"$85B",v:"Est 3/26",beta:0.8,fcf:2.0,revGr:10,ebitdaMargin:48,yf:"EQIX",desc:"Equinix is the world's largest data center REIT, operating 260+ facilities across 72 metros in 33 countries. Its interconnection-dense platform (over 450,000 cross-connects) creates a network effect moat. Equinix is expanding into hyperscale xScale joint ventures to capture AI-driven demand while maintaining its premium interconnection business.",products:"Colocation, interconnection, xScale hyperscale JV, digital services",clients:"Cloud providers, enterprises, network operators, financial services",gtcThemes:['ai-factory','fiber-demand']},
      {t:"DLR",n:"Digital Realty",px:"$175",pe:55,ev:null,mc:"$55B",v:"Est 3/26",beta:0.7,fcf:2.5,revGr:12,ebitdaMargin:55,yf:"DLR",desc:"Digital Realty is the second-largest data center REIT, focused on hyperscale and enterprise deployments across 300+ facilities globally. The company is seeing record leasing volumes driven by AI workloads and is developing multi-hundred-megawatt campuses in key markets with available power.",products:"Hyperscale data centers, colocation, PlatformDIGITAL",clients:"Hyperscalers, cloud providers, enterprises, financial services",gtcThemes:['ai-factory','power-bottleneck']},
      {t:"IRM",n:"Iron Mountain",px:"$120",pe:40,ev:null,mc:"$35B",v:"Est 3/26",beta:0.9,fcf:3.0,revGr:12,ebitdaMargin:35,yf:"IRM",desc:"Iron Mountain is expanding aggressively from its legacy records storage business into data center development, leveraging existing real estate and power infrastructure. The company has over 800MW of data center capacity under development and is increasingly recognized as a DC growth play.",products:"Data centers, records storage, information management, digital services",clients:"Enterprises, hyperscalers, government, financial services",gtcThemes:['ai-factory']},
      {t:"CRWV",n:"CoreWeave",px:"$52",pe:null,ev:null,mc:"$35B",v:"Est 3/26",beta:2.5,fcf:-5.0,revGr:150,ebitdaMargin:-20,yf:"CRWV",desc:"CoreWeave is a GPU-specialized cloud provider that IPO'd in 2025, offering dedicated NVIDIA GPU clusters for AI training and inference. The company has $15B+ in contracted revenue backlog, primarily from Microsoft, but burns cash heavily as it builds out capacity. It represents the new breed of AI infrastructure operator.",products:"GPU cloud (NVIDIA H100/B200), AI inference, rendering",clients:"Microsoft, AI startups, media companies, research institutions",gtcThemes:['ai-factory','liquid-cooling']},
    ]
  },
  {
    id:"construction", label:"DATA CENTER CONSTRUCTION & EPC — Design-build contractors", icon:"🏗️", stream:"downstream",
    what:"Engineering, procurement, and construction firms that design and build data center facilities. Most pure-play DC builders are private (Holder, DPR, Fortis); public exposure comes through diversified E&C firms with significant DC practices.",
    industry:"Data center construction is capacity-constrained — there are not enough skilled electricians, mechanical contractors, and project managers to meet demand. Construction costs have risen 20-30% since 2023. The shift to modular and prefabricated approaches is an attempt to industrialize what has been custom construction.",
    value:"Quanta Services (PWR) offers the most direct public exposure to DC electrical construction. Fluor (FLR), AECOM (ACM), and Jacobs (J) provide diversified E&C exposure with growing DC practices. All benefit from multi-year order backlogs.",
    medPE:20, medEV:null, medFCF:3.5,
    cos:[
      {t:"PWR",n:"Quanta Services",px:"$310",pe:25,ev:null,mc:"$45B",v:"Est 3/26",beta:1.0,fcf:3.5,revGr:15,ebitdaMargin:8,yf:"PWR",desc:"Quanta Services is the largest electrical power infrastructure contractor in North America, with a rapidly growing data center practice. The company builds the electrical backbone of data centers — substations, switchgear installation, busway systems, and grid interconnections — and benefits from the massive power infrastructure buildout required for AI data centers.",products:"Electrical construction, substation construction, grid interconnection, fiber installation",clients:"Hyperscalers, DC operators, utilities, renewable developers",gtcThemes:['power-bottleneck','ai-factory']},
      {t:"FLR",n:"Fluor Corporation",px:"$50",pe:18,ev:null,mc:"$8.5B",v:"Est 3/26",beta:1.5,fcf:3.0,revGr:10,ebitdaMargin:5,yf:"FLR",desc:"Fluor is a global EPC company with a growing data center construction practice, particularly for hyperscale facilities. The company's experience with large, complex industrial projects translates to the increasingly industrial scale of AI data center campuses.",products:"Data center EPC, industrial construction, project management",clients:"Hyperscalers, cloud providers, industrial, government",gtcThemes:['ai-factory']},
      {t:"ACM",n:"AECOM",px:"$110",pe:18,ev:null,mc:"$15B",v:"Est 3/26",beta:1.1,fcf:3.5,revGr:8,ebitdaMargin:8,yf:"ACM",desc:"AECOM is a global infrastructure consulting and construction management firm with a data center design and program management practice. The company provides site selection, design, and construction oversight for large-scale data center campuses.",products:"DC design, program management, site selection, infrastructure consulting",clients:"Hyperscalers, DC operators, government, infrastructure developers",gtcThemes:['ai-factory']},
      {t:"J",n:"Jacobs Solutions",px:"$140",pe:20,ev:null,mc:"$17B",v:"Est 3/26",beta:0.9,fcf:4.5,revGr:6,ebitdaMargin:10,yf:"J",desc:"Jacobs Solutions provides engineering, consulting, and construction services with a growing data center practice. The company's critical infrastructure expertise spans power, water, and telecommunications — all essential for data center campus development.",products:"Engineering consulting, construction management, critical infrastructure design",clients:"Hyperscalers, government, utilities, industrial",gtcThemes:['ai-factory']},
    ]
  },
  {
    id:"networking", label:"NETWORKING & INTERCONNECT — The plumbing", icon:"🔌", stream:"downstream",
    what:"Manufacturers of the switches, routers, optical transport, connectors, and fiber infrastructure that connect servers within data centers and data centers to each other. AI cluster interconnects require massive bandwidth — 400G and 800G switching is standard, with 1.6T on the roadmap.",
    industry:"AI training clusters require high-radix, low-latency networking fabrics with tens of thousands of GPU-to-GPU connections. Arista dominates hyperscaler DC switching. Ethernet is gaining share from InfiniBand for AI training. Optical interconnects (Ciena, Corning) are critical for campus-scale and metro connectivity.",
    value:"Arista (ANET) at 35x PE is the premium DC networking play, growing revenue 20% with hyperscaler wallet share gains. Cisco (CSCO) at 15x offers value but slower growth. Amphenol (APH) and TE Connectivity (TEL) provide connector exposure. Corning (GLW) is the fiber backbone play.",
    medPE:22, medEV:null, medFCF:null,
    cos:[
      {t:"ANET",n:"Arista Networks",px:"$100",pe:35,ev:null,mc:"$65B",v:"Est 3/26",beta:1.3,fcf:null,revGr:20,ebitdaMargin:38,yf:"ANET",desc:"Arista Networks is the dominant provider of data center Ethernet switches for hyperscalers and cloud providers. Its 7800R and 7700R platforms power the AI training cluster fabrics at Meta, Microsoft, and other hyperscalers. Arista is the primary beneficiary of the shift from InfiniBand to Ethernet for AI networking.",products:"DC switches (7800R, 7700R), EOS software, network monitoring (DANZ)",clients:"Meta, Microsoft, hyperscalers, cloud providers, financial services",gtcThemes:['ai-factory','fiber-demand']},
      {t:"CSCO",n:"Cisco Systems",px:"$60",pe:15,ev:null,mc:"$240B",v:"Est 3/26",beta:0.9,fcf:null,revGr:5,ebitdaMargin:32,yf:"CSCO",desc:"Cisco is the largest networking equipment company globally with a broad DC portfolio including Nexus switches, Silicon One custom ASICs, and the Splunk observability platform. While losing DC switching share to Arista at hyperscale, Cisco maintains strong enterprise DC and campus networking positions.",products:"Nexus switches, Silicon One, routers, Splunk, security, WebEx",clients:"Enterprises, service providers, hyperscalers (enterprise DC segment)",gtcThemes:['ai-factory']},
      {t:"CIEN",n:"Ciena Corporation",px:"$75",pe:22,ev:null,mc:"$11B",v:"Est 3/26",beta:1.2,fcf:null,revGr:12,ebitdaMargin:18,yf:"CIEN",desc:"Ciena is a leading provider of optical transport and intelligent networking equipment, critical for the high-bandwidth interconnections between data center campuses and metro networks. AI cluster interconnects across campus boundaries require Ciena's WaveLogic coherent optical technology.",products:"WaveLogic optical transport, Converged Packet-Optical platforms, Blue Planet software",clients:"Hyperscalers, telecom carriers, cable operators, government",gtcThemes:['fiber-demand','ai-factory']},
      {t:"APH",n:"Amphenol",px:"$75",pe:30,ev:null,mc:"$90B",v:"Est 3/26",beta:1.1,fcf:null,revGr:15,ebitdaMargin:22,yf:"APH",desc:"Amphenol is a leading manufacturer of high-speed electrical and optical connectors used in data center server-to-switch and switch-to-switch interconnects. Its products are essential at every connection point inside a data center — from PCB connectors to high-speed cable assemblies for AI GPU clusters.",products:"High-speed connectors, cable assemblies, fiber optic connectors, sensor systems",clients:"Server OEMs, switch makers (Arista, Cisco), hyperscalers, automotive",gtcThemes:['ai-factory','fiber-demand']},
      {t:"TEL",n:"TE Connectivity",px:"$155",pe:18,ev:null,mc:"$50B",v:"Est 3/26",beta:1.1,fcf:null,revGr:5,ebitdaMargin:20,yf:"TEL",desc:"TE Connectivity manufactures connectors, sensors, and cable assemblies for data center, automotive, and industrial applications. Its data and devices segment supplies high-speed interconnects for server and networking equipment used in hyperscale data centers.",products:"High-speed connectors, cable assemblies, power connectors, sensors",clients:"Server OEMs, networking equipment makers, automotive, industrial",gtcThemes:['ai-factory']},
      {t:"GLW",n:"Corning Incorporated",px:"$50",pe:20,ev:null,mc:"$42B",v:"Est 3/26",beta:1.2,fcf:null,revGr:8,ebitdaMargin:20,yf:"GLW",desc:"Corning is the dominant manufacturer of optical fiber and cable, providing the physical connectivity backbone for data center interconnects, metro networks, and long-haul transmission. Single-mode fiber demand is growing 15-20% annually driven by AI cluster interconnects requiring massive fiber counts between and within campuses.",products:"Optical fiber, fiber cable, optical connectivity solutions, Gorilla Glass",clients:"Hyperscalers, telecom carriers, DC operators, cable MSOs",gtcThemes:['fiber-demand','ai-factory']},
    ]
  },
  {
    id:"power", label:"POWER DISTRIBUTION & UPS — Grid to rack", icon:"⚡", stream:"midstream",
    what:"Manufacturers of the electrical infrastructure that delivers power from the utility grid to individual server racks: transformers, power distribution units (PDUs), uninterruptible power supplies (UPS), busways, switchgear, and power monitoring systems. This is the most critical midstream segment.",
    industry:"Data center power density is skyrocketing — AI racks consume 40-100kW+ versus 5-10kW for traditional enterprise servers. This requires completely redesigned power architectures with higher voltage distribution (415V), liquid-cooled PDUs, and massive UPS systems. Transformer lead times of 3-4 years are the binding constraint.",
    value:"Vertiv (VRT) at 35x is the purest DC power/cooling play with 25% revenue growth. Eaton (ETN) at 30x is the electrical infrastructure bellwether. Schneider (SBGSY) at 25x offers European-listed value for the same exposure. ABB (ABBNY) at 22x is the diversified industrial play.",
    medPE:25, medEV:null, medFCF:null,
    cos:[
      {t:"ETN",n:"Eaton Corporation",px:"$310",pe:30,ev:null,mc:"$125B",v:"Est 3/26",beta:1.1,fcf:null,revGr:10,ebitdaMargin:22,yf:"ETN",desc:"Eaton is the largest diversified electrical equipment manufacturer in North America, producing transformers, switchgear, UPS systems, and power distribution units for data centers. Its electrical segment is the primary beneficiary of data center construction, with DC-related revenue growing 20%+ annually as power density requirements escalate.",products:"Transformers, switchgear, UPS, PDUs, busways, circuit breakers",clients:"Data centers, hyperscalers, utilities, industrial, commercial",gtcThemes:['power-bottleneck','ai-factory']},
      {t:"SBGSY",n:"Schneider Electric",px:"$55",pe:25,ev:null,mc:"$95B",v:"Est 3/26",beta:0.9,fcf:null,revGr:8,ebitdaMargin:18,yf:"SBGSY",desc:"Schneider Electric is a global leader in energy management and industrial automation with a dominant position in data center power distribution and cooling management through its APC and EcoStruxure platforms. Schneider provides end-to-end DC infrastructure from medium-voltage switchgear to rack-level PDUs.",products:"APC UPS, Galaxy UPS, EcoStruxure DCIM, switchgear, prefab DC modules",clients:"Hyperscalers, DC operators, enterprises, industrial",gtcThemes:['power-bottleneck','modular-prefab']},
      {t:"VRT",n:"Vertiv Holdings",px:"$265",pe:35,ev:null,mc:"$100B",v:"Est 3/26",beta:1.8,fcf:null,revGr:25,ebitdaMargin:20,yf:"VRT",desc:"Vertiv is the purest public play on data center infrastructure, providing power management, thermal management, and IT infrastructure solutions. The company is the leading beneficiary of the liquid cooling transition, with its Liebert XDU and CoolPhase products deployed at hyperscalers for AI rack cooling. Revenue is growing 25% driven by AI infrastructure demand.",products:"Liebert UPS, thermal management, liquid cooling (XDU, CoolPhase), PDUs, racks",clients:"Hyperscalers, DC operators, telecom, enterprises",gtcThemes:['liquid-cooling','power-bottleneck','ai-factory','modular-prefab']},
      {t:"ABBNY",n:"ABB Ltd",px:"$55",pe:22,ev:null,mc:"$100B",v:"Est 3/26",beta:1.0,fcf:null,revGr:6,ebitdaMargin:16,yf:"ABBNY",desc:"ABB is a global electrification and automation company providing medium-voltage switchgear, power quality solutions, and building automation systems for data centers. Its Electrification segment benefits from the massive power infrastructure buildout required for AI data center campuses.",products:"Medium-voltage switchgear, power quality, building automation, robotics",clients:"Data centers, utilities, industrial, commercial buildings",gtcThemes:['power-bottleneck']},
      {t:"NVT",n:"nVent Electric",px:"$80",pe:22,ev:null,mc:"$13B",v:"Est 3/26",beta:1.3,fcf:null,revGr:8,ebitdaMargin:20,yf:"NVT",desc:"nVent Electric provides electrical connection and protection solutions including enclosures, liquid cooling components, and cable management systems for data centers. The company is positioned at the intersection of power distribution and thermal management with its growing liquid cooling product line.",products:"Enclosures, liquid cooling systems, cable management, electrical protection",clients:"Data centers, hyperscalers, industrial, commercial",gtcThemes:['liquid-cooling','power-bottleneck']},
    ]
  },
  {
    id:"cooling", label:"COOLING & THERMAL MANAGEMENT — Keeping racks from melting", icon:"❄️", stream:"midstream",
    what:"Manufacturers of air conditioning, liquid cooling, heat exchangers, and thermal management systems for data centers. This is the segment undergoing the most dramatic technological shift — from traditional air cooling to direct-to-chip liquid cooling as AI racks exceed 100kW per rack.",
    industry:"Traditional air cooling hits physical limits around 30-40kW per rack. AI GPU racks running NVIDIA B200s consume 100kW+, making liquid cooling mandatory. The market is shifting rapidly from rear-door heat exchangers to direct-to-chip cold plate cooling and immersion cooling. Cooling now represents 30-40% of total data center energy consumption.",
    value:"Modine (MOD) at 25x is the fastest-growing liquid cooling pure play with 30% revenue growth. Vertiv (VRT) straddles both power and cooling. Johnson Controls (JCI) at 18x and Carrier (CARR) at 22x offer diversified HVAC exposure with growing DC practices.",
    medPE:22, medEV:null, medFCF:null,
    cos:[
      {t:"MOD",n:"Modine Manufacturing",px:"$140",pe:25,ev:null,mc:"$7B",v:"Est 3/26",beta:1.5,fcf:null,revGr:30,ebitdaMargin:16,yf:"MOD",desc:"Modine Manufacturing has transformed from an automotive thermal management company into a high-growth data center liquid cooling play. Its Airedale precision cooling and direct-to-chip liquid cooling solutions are deployed at hyperscaler AI training clusters. Revenue is growing 30% driven by the paradigm shift from air to liquid cooling for AI workloads.",products:"Liquid cooling systems, precision air handling, rear-door heat exchangers, chillers",clients:"Hyperscalers, DC operators, enterprises, automotive",gtcThemes:['liquid-cooling','ai-factory']},
      {t:"JCI",n:"Johnson Controls",px:"$85",pe:18,ev:null,mc:"$55B",v:"Est 3/26",beta:1.1,fcf:null,revGr:5,ebitdaMargin:15,yf:"JCI",desc:"Johnson Controls is a global building technology company with a growing data center HVAC and controls practice. Its OpenBlue digital platform and York chiller systems serve large-scale data center cooling applications, though DC represents a smaller portion of overall revenue.",products:"York chillers, building automation (OpenBlue), fire and security, HVAC systems",clients:"Data centers, commercial buildings, government, healthcare",gtcThemes:['liquid-cooling']},
      {t:"CARR",n:"Carrier Global",px:"$70",pe:22,ev:null,mc:"$60B",v:"Est 3/26",beta:1.0,fcf:null,revGr:8,ebitdaMargin:18,yf:"CARR",desc:"Carrier Global is a leading HVAC, refrigeration, and fire/security company with a growing data center cooling segment. Its commercial HVAC division provides large-scale chiller plants and air handling systems for data center facilities, complementing its broader building solutions portfolio.",products:"Commercial HVAC, chillers, refrigeration, fire and security (Kidde/Edwards)",clients:"Data centers, commercial buildings, cold chain, residential",gtcThemes:['liquid-cooling']},
    ]
  },
  {
    id:"backup", label:"BACKUP POWER & ENERGY STORAGE — Generators, fuel cells, batteries", icon:"🔋", stream:"midstream",
    what:"Providers of backup and supplemental power systems including diesel generators, natural gas generators, fuel cells, and battery energy storage systems. Every data center requires N+1 or 2N redundant backup power to maintain uptime SLAs of 99.999% or higher.",
    industry:"Diesel generators remain the default backup power technology, but environmental regulations and sustainability commitments are driving adoption of fuel cells (Bloom Energy) and battery storage. Generator lead times have stretched to 12-18 months. Some hyperscalers are exploring fuel cells as primary power for sustainability.",
    value:"Caterpillar (CAT) at 16x and Cummins (CMI) at 15x are the dominant generator plays — boring industrials with massive installed bases. Bloom Energy (BE) at null PE is the speculative fuel cell alternative, growing 20% but not yet profitable. Generac (GNRC) provides smaller-scale backup power.",
    medPE:15, medEV:null, medFCF:null,
    cos:[
      {t:"CAT",n:"Caterpillar",px:"$380",pe:16,ev:null,mc:"$185B",v:"Est 3/26",beta:1.0,fcf:null,revGr:5,ebitdaMargin:22,yf:"CAT",desc:"Caterpillar is the world's largest manufacturer of diesel and natural gas generator sets, supplying the backup power systems installed in virtually every data center. Its Energy & Transportation segment benefits from the data center construction boom as every new facility requires multiple megawatts of backup generation capacity.",products:"Diesel generators, gas generators, power systems, construction equipment",clients:"Data centers, utilities, construction, mining, oil and gas",gtcThemes:['power-bottleneck','ai-factory']},
      {t:"CMI",n:"Cummins Inc",px:"$350",pe:15,ev:null,mc:"$48B",v:"Est 3/26",beta:1.0,fcf:null,revGr:8,ebitdaMargin:16,yf:"CMI",desc:"Cummins is a leading manufacturer of diesel and natural gas engines and power generation equipment. Its Power Systems segment supplies generator sets for data center backup power, and the company is investing in hydrogen fuel cells and battery storage as alternative backup technologies.",products:"Diesel generators, gas generators, power systems, hydrogen fuel cells",clients:"Data centers, trucking, construction, mining, defense",gtcThemes:['power-bottleneck']},
      {t:"BE",n:"Bloom Energy",px:"$25",pe:null,ev:null,mc:"$5.5B",v:"Est 3/26",beta:2.0,fcf:null,revGr:20,ebitdaMargin:-5,yf:"BE",desc:"Bloom Energy manufactures solid oxide fuel cells that convert natural gas or hydrogen into electricity on-site, offering an alternative to diesel generators and grid dependence for data centers. Several hyperscalers are evaluating Bloom's fuel cells as primary or supplemental power for sustainability.",products:"Bloom Energy Server (solid oxide fuel cells), hydrogen electrolyzers",clients:"Data centers, hyperscalers (pilot programs), commercial buildings, utilities",gtcThemes:['power-bottleneck','ai-factory']},
    ]
  },
  {
    id:"electrical", label:"ELECTRICAL COMPONENTS & TRANSFORMERS — The most constrained supply chain", icon:"🔧", stream:"upstream",
    what:"Manufacturers of electrical distribution components, switchgear, transformers, wire, cable, and lighting systems. This tier includes the most supply-constrained products in the entire data center buildout — large power transformers have lead times of 3-4 years and represent the single biggest physical bottleneck.",
    industry:"The US has not built significant transformer manufacturing capacity in decades. Global demand from data centers, renewable energy, and grid modernization has created a structural shortage. Only a handful of companies manufacture large power transformers, and capacity expansion takes years. Powell Industries (POWL) is seeing 35% revenue growth from switchgear demand.",
    value:"Powell Industries (POWL) at 20x is the most compelling upstream value — fastest growth (35%) at one of the lowest multiples, driven by custom switchgear for data centers and utilities. Hubbell (HUBB) at 28x is the electrical infrastructure bellwether. These companies benefit from multi-year backlogs.",
    medPE:20, medEV:null, medFCF:null,
    cos:[
      {t:"HUBB",n:"Hubbell Incorporated",px:"$420",pe:28,ev:null,mc:"$22B",v:"Est 3/26",beta:1.0,fcf:null,revGr:10,ebitdaMargin:22,yf:"HUBB",desc:"Hubbell produces electrical connectors, wiring devices, utility components, and power distribution equipment used throughout data center electrical systems and the broader grid. Its Electrical Solutions segment supplies the components that physically connect power infrastructure from substation to rack.",products:"Electrical connectors, wiring devices, utility poles, insulators, surge arresters",clients:"Data centers, utilities, electrical distributors, contractors",gtcThemes:['power-bottleneck']},
      {t:"POWL",n:"Powell Industries",px:"$250",pe:20,ev:null,mc:"$3B",v:"Est 3/26",beta:1.5,fcf:null,revGr:35,ebitdaMargin:18,yf:"POWL",desc:"Powell Industries manufactures custom-engineered switchgear, bus duct systems, and power control equipment for data centers, utilities, and industrial facilities. Revenue is growing 35% driven by massive data center and utility orders, with a backlog that provides multi-year visibility. Powell is the most direct small-cap play on DC power infrastructure.",products:"Custom switchgear, bus duct systems, power control rooms, motor control centers",clients:"Data centers, utilities, oil and gas, petrochemical, industrial",gtcThemes:['power-bottleneck','ai-factory']},
      {t:"RRX",n:"Regal Rexnord",px:"$170",pe:15,ev:null,mc:"$11B",v:"Est 3/26",beta:1.2,fcf:null,revGr:5,ebitdaMargin:18,yf:"RRX",desc:"Regal Rexnord manufactures electric motors, drives, power transmission components, and electrical enclosures used in data center HVAC, cooling, and power distribution systems. Its industrial powertrain and power efficiency segments supply the mechanical and electrical components that keep data centers running.",products:"Electric motors, drives, power transmission, gearing, enclosures",clients:"Data centers, HVAC OEMs, industrial, commercial",gtcThemes:['power-bottleneck']},
    ]
  },
  {
    id:"fiber", label:"FIBER OPTIC & CABLING — The connectivity backbone", icon:"🔗", stream:"upstream",
    what:"Manufacturers of optical fiber, fiber optic cable, copper cabling, and structured cabling systems that provide the physical connectivity within and between data centers. Single-mode fiber demand is growing 15-20% annually driven by AI cluster interconnects requiring massive fiber counts.",
    industry:"AI training clusters require unprecedented bandwidth between GPU nodes, driving demand for high-fiber-count cables and advanced optical connectivity. A single hyperscale campus may require millions of fiber-kilometers. The industry is also seeing demand for higher-density fiber cables (3,456-fiber cables now available) to reduce conduit congestion.",
    value:"Corning (GLW) at 20x is the dominant optical fiber manufacturer and the primary beneficiary of AI-driven fiber demand growth. CommScope (COMM) provides structured cabling exposure. Prysmian (PRY.MI) is the European fiber and cable leader with US operations through the Encore Wire acquisition.",
    medPE:20, medEV:null, medFCF:null,
    cos:[
      {t:"GLW",n:"Corning Incorporated",px:"$50",pe:20,ev:null,mc:"$42B",v:"Est 3/26",beta:1.2,fcf:null,revGr:8,ebitdaMargin:20,yf:"GLW",desc:"Corning is the world's largest manufacturer of optical fiber and cable, holding approximately 40% global market share. Its Optical Communications segment is the primary beneficiary of AI-driven fiber demand, with hyperscaler and data center connectivity orders driving 15-20% annual fiber volume growth. Corning's manufacturing scale and R&D leadership in bend-insensitive and high-density fiber create durable competitive advantages.",products:"Optical fiber, fiber cable, connectivity solutions, specialty glass, Gorilla Glass",clients:"Hyperscalers, telecom carriers, DC operators, cable MSOs, mobile operators",gtcThemes:['fiber-demand','ai-factory']},
      {t:"COMM",n:"CommScope",px:"$5",pe:null,ev:null,mc:"$1B",v:"Est 3/26",beta:2.0,fcf:null,revGr:-5,ebitdaMargin:10,yf:"COMM",desc:"CommScope provides structured cabling, connectivity, and network infrastructure for data centers and enterprise networks. While burdened by leverage from the Arris acquisition, its Connectivity and Cable Solutions segment supplies fiber and copper cabling systems for DC buildouts.",products:"Structured cabling, fiber connectivity, network enclosures, RUCKUS wireless",clients:"Data centers, enterprises, telecom carriers, CATV operators",gtcThemes:['fiber-demand']},
    ]
  },
  {
    id:"structural", label:"STRUCTURAL & MECHANICAL — Steel, concrete, modular construction", icon:"🏗️", stream:"upstream",
    what:"Producers of structural steel, rebar, concrete, modular/prefabricated data center components, server racks, enclosures, and cable trays. The physical building materials and mechanical infrastructure that house data center equipment. Modular and prefab approaches are accelerating to speed deployment.",
    industry:"Data center construction consumes massive quantities of structural steel, concrete, and specialty mechanical components. The shift toward modular/prefab data centers — pre-built in factories and assembled on-site — is an attempt to compress 24-month construction timelines to 6 months. Most modular DC specialists are private.",
    value:"Nucor (NUE) at 10x and Steel Dynamics (STLD) at 8x are deeply cyclical steel producers currently in a trough, but data center construction provides structural demand growth that partially offsets cyclical weakness. These are the cheapest names in the supply chain on a PE basis.",
    medPE:9, medEV:null, medFCF:null,
    cos:[
      {t:"NUE",n:"Nucor Corporation",px:"$140",pe:10,ev:null,mc:"$33B",v:"Est 3/26",beta:1.3,fcf:null,revGr:-5,ebitdaMargin:18,yf:"NUE",desc:"Nucor is the largest steel producer in the United States, supplying structural steel, rebar, and steel joists for data center construction. While cyclical, Nucor benefits from the multi-year data center construction boom as each hyperscale facility requires thousands of tons of structural steel.",products:"Structural steel, rebar, steel joists, steel deck, plate",clients:"Construction contractors, data center builders, infrastructure",gtcThemes:['ai-factory']},
      {t:"STLD",n:"Steel Dynamics",px:"$140",pe:8,ev:null,mc:"$22B",v:"Est 3/26",beta:1.4,fcf:null,revGr:-3,ebitdaMargin:20,yf:"STLD",desc:"Steel Dynamics is the third-largest steel producer in the US, operating electric arc furnace mini-mills that produce structural steel and flat-rolled products. The company benefits from data center construction demand for structural steel and is expanding into value-added steel products for infrastructure applications.",products:"Structural steel, flat-rolled steel, steel fabrication, recycled metals",clients:"Construction contractors, fabricators, automotive, infrastructure",gtcThemes:['ai-factory']},
    ]
  },
];

export const TIER_COLORS = {
  hyperscalers: '#fb923c',
  reits: '#f97316',
  construction: '#fbbf24',
  networking: '#38bdf8',
  power: '#ef4444',
  cooling: '#06b6d4',
  backup: '#a78bfa',
  electrical: '#4ade80',
  fiber: '#c084fc',
  structural: '#84cc16',
};

export const STREAM_COLORS = {upstream:'#4ade80',midstream:'#60a5fa',downstream:'#fbbf24',demand:'#fb923c'};

export const DC_THEMES = {
  'liquid-cooling':    { label: 'Liquid Cooling Shift',    color: '#06b6d4', dead: false, desc: 'AI racks at 100kW+ per rack require direct-to-chip liquid cooling, replacing traditional air cooling. Vertiv, Modine, and CoolIT are primary beneficiaries of this architectural shift.' },
  'power-bottleneck':  { label: 'Power Bottleneck',        color: '#ef4444', dead: false, desc: 'Data center power demand growing 15-20% annually. Transformer lead times of 3-4 years and grid interconnection queues exceeding 2,600 GW create the binding physical constraint on AI buildout.' },
  'ai-factory':        { label: 'AI Factory Scale',        color: '#f97316', dead: false, desc: 'Jensen Huang described 1-gigawatt AI factories costing $40B each. NVIDIA targets $1 trillion in AI factory spending through 2027. This is not traditional enterprise DC — it is industrial-scale compute infrastructure.' },
  'edge-dc':           { label: 'Edge & Sovereign DC',     color: '#38bdf8', dead: false, desc: 'Data sovereignty requirements and latency-sensitive AI inference driving distributed edge data center buildout. Smaller facilities (1-5MW) closer to end users.' },
  'fiber-demand':      { label: 'Fiber Demand Surge',      color: '#c084fc', dead: false, desc: 'AI cluster interconnects require massive fiber counts. Single-mode fiber demand growing 15-20% annually. Corning and Prysmian are primary beneficiaries.' },
  'modular-prefab':    { label: 'Modular/Prefab DC',       color: '#4ade80', dead: false, desc: 'Prefabricated modular data centers cut deployment time from 24 months to 6 months. Vertiv, Schneider, and specialized builders driving adoption.' },
  'enterprise-on-prem':{ label: 'Enterprise On-Prem',      color: '#94a3b8', dead: true,  desc: 'Traditional enterprise on-premises data centers declining as workloads migrate to cloud and colo. Legacy refresh cycles offer minimal growth.' },
};

export const VALUATION_GAPS = [
  {
    a:"EQIX",aPE:75,b:"DLR",bPE:55,
    title:"Premium interconnection REIT vs hyperscale-focused REIT",
    summary:"Equinix and Digital Realty are the two largest data center REITs, but EQIX commands a 36% premium reflecting its interconnection density (450,000+ cross-connects) and network effect moat, while DLR is more exposed to hyperscale build-to-suit with higher revenue growth.",
    thesis:"Equinix at 75x trades at a substantial premium to Digital Realty at 55x, justified by its unmatched interconnection platform that generates sticky, high-margin revenue. DLR's 12% revenue growth (vs EQIX's 10%) reflects hyperscale leasing momentum, and its higher EBITDA margin (55% vs 48%) suggests operational efficiency. As AI drives demand toward larger, power-dense facilities, DLR's hyperscale focus may prove more aligned with market direction. The question is whether EQIX's interconnection premium holds as AI workloads concentrate in fewer, larger campuses rather than distributed colo facilities.",
  },
  {
    a:"VRT",aPE:35,b:"MOD",bPE:25,
    title:"Diversified DC infrastructure leader vs pure-play liquid cooling growth",
    summary:"Vertiv and Modine both benefit from the liquid cooling transition, but Vertiv is a diversified DC infrastructure platform (power + cooling) at $100B market cap, while Modine is a smaller ($7B) pure-play thermal management company growing 30% on liquid cooling adoption.",
    thesis:"Vertiv at 35x commands a 40% premium over Modine at 25x despite Modine growing faster (30% vs 25% revenue growth). Vertiv's diversification across power and cooling, its global scale, and its established hyperscaler relationships justify part of the premium. However, Modine's pure-play liquid cooling exposure and smaller base provide more operating leverage as the air-to-liquid cooling transition accelerates. If liquid cooling becomes the majority of DC thermal management (which physics demands for AI workloads), Modine's focused positioning may deliver superior returns from a lower starting multiple.",
  },
  {
    a:"ETN",aPE:30,b:"SBGSY",bPE:25,
    title:"US electrical infrastructure leader vs European electrical giant",
    summary:"Eaton and Schneider Electric are the two largest electrical infrastructure companies serving data centers, with overlapping product portfolios in power distribution, UPS, and switchgear. Eaton trades at a 20% US listing premium despite Schneider's broader global reach.",
    thesis:"Eaton at 30x commands a US listing premium over Schneider at 25x, reflecting Eaton's North American market dominance where the majority of hyperscale DC construction is occurring. Schneider's broader international exposure and APC/EcoStruxure software platform provide diversification, but the near-term capex wave is disproportionately US-centric. If DC construction globalizes more rapidly (driven by data sovereignty requirements), Schneider's international footprint becomes more valuable. For now, Eaton's US positioning and faster organic growth justify the premium, but Schneider may offer better risk-adjusted value at 5 turns cheaper.",
  },
  {
    a:"ANET",aPE:35,b:"CSCO",bPE:15,
    title:"Hyperscale DC switching disruptor vs legacy networking incumbent",
    summary:"Arista Networks and Cisco Systems both sell data center networking equipment, but Arista is growing 4x faster (20% vs 5%) at the hyperscale tier while Cisco maintains enterprise dominance. Arista trades at more than double Cisco's multiple.",
    thesis:"Arista at 35x versus Cisco at 15x represents one of the starkest valuation gaps in the DC supply chain. Arista's 20% revenue growth reflects its dominant position in hyperscaler DC switching (Meta, Microsoft are top customers), while Cisco's 5% growth reflects enterprise refresh cycles. The market is pricing Arista for continued hyperscale wallet share gains and the Ethernet-for-AI transition away from InfiniBand. At $65B vs $240B market cap, Arista needs to sustain growth to justify the premium. Cisco's risk is that AI DC networking remains an Arista monopoly; Cisco's opportunity is that enterprise AI deployments eventually create a second growth vector at a much cheaper entry point.",
  },
  {
    a:"POWL",aPE:20,b:"HUBB",bPE:28,
    title:"Fastest-growing electrical component maker at a lower multiple",
    summary:"Powell Industries and Hubbell both manufacture electrical infrastructure components, but Powell is growing revenue 35% (vs Hubbell's 10%) driven by custom switchgear for data centers and utilities, yet trades at a 29% discount on forward PE.",
    thesis:"Powell Industries at 20x is arguably the most compelling value in the DC supply chain — growing 35% with a multi-year backlog of custom switchgear orders, yet trading at 8 turns below Hubbell's 28x. Powell's smaller size ($3B vs $22B market cap) and customer concentration create perceived risk, but its order backlog provides exceptional revenue visibility. Hubbell's diversified product portfolio and utility infrastructure exposure justify a stability premium, but not necessarily an 8-turn premium when Powell is growing 3.5x faster. As data center and grid construction sustains, Powell's discount may compress significantly.",
  },
  {
    a:"CAT",aPE:16,b:"CMI",bPE:15,
    title:"Backup power generator duopoly with similar profiles",
    summary:"Caterpillar and Cummins are the two dominant providers of diesel and gas generator sets for data center backup power. Both trade at similar low-teen multiples reflecting their industrial conglomerate status, with data centers representing a growing but minority revenue stream.",
    thesis:"Caterpillar at 16x and Cummins at 15x trade in a tight range reflecting similar industrial profiles and cyclical business models. CAT's larger scale ($185B vs $48B market cap) provides diversification across construction, mining, and energy, while CMI's hydrogen fuel cell and battery investments offer optionality on next-gen backup power technologies. Both benefit from data center construction as every facility requires multiple megawatts of backup generation, but neither is a pure play on the theme. The tight valuation gap suggests the market views them as near-substitutes for DC backup power exposure.",
  },
];

export const SUPPLY_CHAIN_PAIRS = [
  // Power distribution → Data center operators (midstream to downstream)
  {supplier:'ETN',customer:'EQIX',rel:'Power distribution equipment → data center operations',cat:'power-reits'},
  {supplier:'ETN',customer:'DLR',rel:'Transformers and switchgear → data center REIT',cat:'power-reits'},
  {supplier:'VRT',customer:'EQIX',rel:'Cooling and power infrastructure → data center operator',cat:'power-reits'},
  {supplier:'VRT',customer:'MSFT',rel:'Thermal management systems → hyperscaler data centers',cat:'power-demand'},
  {supplier:'VRT',customer:'META',rel:'Liquid cooling systems → AI training clusters',cat:'power-demand'},
  {supplier:'SBGSY',customer:'EQIX',rel:'Electrical infrastructure and UPS → data center REIT',cat:'power-reits'},
  {supplier:'ABBNY',customer:'DLR',rel:'Medium-voltage power systems → data center REIT',cat:'power-reits'},

  // Cooling → Hyperscalers (midstream to demand)
  {supplier:'MOD',customer:'AMZN',rel:'Liquid cooling systems → AWS data centers',cat:'cooling-demand'},
  {supplier:'MOD',customer:'MSFT',rel:'Precision cooling → Azure data centers',cat:'cooling-demand'},

  // Networking → Hyperscalers (downstream to demand)
  {supplier:'ANET',customer:'META',rel:'Data center Ethernet switches → hyperscaler network fabric',cat:'networking-demand'},
  {supplier:'ANET',customer:'MSFT',rel:'DC switching platforms → Azure network infrastructure',cat:'networking-demand'},
  {supplier:'CSCO',customer:'AMZN',rel:'Networking equipment → AWS infrastructure',cat:'networking-demand'},
  {supplier:'CIEN',customer:'AMZN',rel:'Optical transport → hyperscaler campus interconnect',cat:'networking-demand'},

  // Connectors → Networking (upstream-like to downstream)
  {supplier:'APH',customer:'ANET',rel:'High-speed connectors → switch assemblies',cat:'networking-networking'},
  {supplier:'TEL',customer:'CSCO',rel:'Connectors and cable assemblies → networking equipment',cat:'networking-networking'},

  // Fiber → DC operators and networking (upstream to downstream)
  {supplier:'GLW',customer:'EQIX',rel:'Optical fiber → data center interconnect',cat:'fiber-reits'},
  {supplier:'GLW',customer:'ANET',rel:'Optical components → switch and transceiver assemblies',cat:'fiber-networking'},

  // Electrical components → Power distribution (upstream to midstream)
  {supplier:'HUBB',customer:'ETN',rel:'Electrical components → power distribution systems',cat:'electrical-power'},
  {supplier:'POWL',customer:'EQIX',rel:'Custom switchgear → data center power infrastructure',cat:'electrical-reits'},
  {supplier:'NVT',customer:'VRT',rel:'Enclosures and cooling components → thermal systems',cat:'electrical-power'},

  // Backup power → DC operators (midstream to downstream)
  {supplier:'CAT',customer:'EQIX',rel:'Backup diesel generators → data center operations',cat:'backup-reits'},
  {supplier:'CMI',customer:'DLR',rel:'Generator sets → data center REIT backup power',cat:'backup-reits'},
  {supplier:'BE',customer:'EQIX',rel:'Fuel cell systems → data center clean backup power',cat:'backup-reits'},

  // Construction → DC operators (downstream internal)
  {supplier:'PWR',customer:'EQIX',rel:'Electrical construction → data center buildout',cat:'construction-reits'},
  {supplier:'PWR',customer:'DLR',rel:'Grid interconnection and electrical construction → DC REIT',cat:'construction-reits'},
  {supplier:'FLR',customer:'AMZN',rel:'Data center EPC construction → hyperscaler campuses',cat:'construction-demand'},

  // Steel → Construction (upstream to downstream)
  {supplier:'NUE',customer:'PWR',rel:'Structural steel → data center construction',cat:'structural-construction'},
  {supplier:'STLD',customer:'FLR',rel:'Steel products → DC construction projects',cat:'structural-construction'},

  // DC operators → Hyperscalers (downstream to demand)
  {supplier:'EQIX',customer:'AMZN',rel:'Colocation and interconnection → hyperscaler overflow',cat:'reits-demand'},
  {supplier:'DLR',customer:'GOOG',rel:'Hyperscale colocation → Google Cloud infrastructure',cat:'reits-demand'},
  {supplier:'CRWV',customer:'MSFT',rel:'GPU cloud capacity → hyperscaler AI workloads',cat:'reits-demand'},
];

const UI = {
  themeTitle: 'Data center investment theme exposure',
  themeDesc: 'The AI infrastructure buildout is creating the largest data center construction cycle in history. Companies positioned at physical bottlenecks — power delivery, liquid cooling, fiber connectivity, and transformer supply — benefit from multi-year order backlogs and structural demand growth.',
  deadThemeWarning: 'DECLINING THEME — Enterprise on-premises data centers are shrinking as workloads migrate to cloud and colocation. Companies with primary on-prem exposure face secular headwinds.',
  streamDesc: {
    upstream: 'Electrical components, transformers, fiber optic cabling, and structural steel. Transformer lead times of 3-4 years represent the single biggest physical bottleneck in the AI buildout.',
    midstream: 'Power distribution, cooling systems, and backup power. Liquid cooling is the paradigm shift as AI racks exceed 100kW, making traditional air cooling physically impossible.',
    downstream: 'Data center REITs, construction/EPC firms, and networking equipment. These companies build, own, and connect the physical facilities that house AI compute.',
    demand: 'Hyperscalers and cloud providers spending $660-690B in combined 2026 capex. Their capital allocation decisions cascade through every tier of the physical infrastructure supply chain.',
  },
  flowDesc: 'Capital flows from hyperscalers through data center operators and construction firms to the power, cooling, and connectivity infrastructure that makes compute physically possible. The binding constraint is not chips — it is the physical plant.',
  flowArrows: ['Electrical components, fiber, and steel feed into power distribution and cooling systems','Power, cooling, and backup systems are installed by construction firms into data center facilities','Data center operators lease capacity to hyperscalers and cloud providers'],
  ratioDesc: 'These ratios compare the median forward P/E of upstream component makers against midstream power/cooling providers, downstream DC operators, and end-demand hyperscalers. Upstream electrical component makers with 3-4 year order backlogs may be systematically underpriced.',
  ratios: [
    {label:'Upstream / Downstream',num:'upstream',den:'downstream',desc:'Electrical components & fiber vs DC REITs and networking'},
    {label:'Upstream / Demand',num:'upstream',den:'demand',desc:'Components & materials vs hyperscaler capex spenders'},
    {label:'Midstream / Downstream',num:'midstream',den:'downstream',desc:'Power, cooling, and backup vs DC operators and construction'},
    {label:'Midstream / Demand',num:'midstream',den:'demand',desc:'Infrastructure providers vs hyperscaler buyers'},
  ],
};

export default {
  id: 'datacenter',
  name: 'Data Centers',
  icon: '🏢',
  description: 'The physical data center infrastructure supply chain from electrical components and fiber through power distribution, cooling, and construction to hyperscaler and cloud operator demand.',
  TIERS,
  TIER_COLORS,
  STREAM_COLORS,
  VALUATION_GAPS,
  SUPPLY_CHAIN_PAIRS,
  GTC_THEMES: DC_THEMES,
  UI,
};
