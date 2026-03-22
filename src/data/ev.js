// DATA — ELECTRIC VEHICLES & BATTERY SUPPLY CHAIN
// Approximate valuations as of March 2026. Sources: Yahoo Finance, StockAnalysis, GuruFocus.
// PE = forward P/E. EV = EV/EBITDA. MC = market cap. FCF = FCF yield %.

export const TIERS = [
  {
    id:"consumers", label:"CONSUMERS & FLEET BUYERS — The demand signal", icon:"🛒", stream:"demand",
    what:"The ultimate demand signal: consumer adoption curves, fleet electrification mandates, ride-hail platforms (Uber, Lyft), delivery fleets (Amazon, FedEx, UPS), and government procurement mandates driving EV purchases at scale.",
    industry:"EV penetration is crossing the adoption S-curve in most major markets. Fleet operators are mandating electrification for TCO and ESG reasons. Regulatory ICE bans (EU 2035, California 2035, UK 2035) create a demand floor regardless of consumer sentiment. Charging anxiety is fading as infrastructure densifies.",
    value:"Not directly investable as pure EV demand plays, but the trajectory of consumer adoption, fleet electrification timelines, and regulatory mandates drives every tier below. The structural shift from ICE to EV is irreversible — the question is pace, not direction.",
    medPE:null, medEV:null, medFCF:null,
    cos:[
      {t:"—",n:"Amazon (Fleet)",px:"N/A",pe:null,ev:null,mc:"$2T+",v:"Fleet buyer",beta:null,fcf:null,revGr:12,ebitdaMargin:null,yf:"AMZN",desc:"Amazon ordered 100,000 Rivian electric delivery vans, the largest EV fleet order in history, with deployments accelerating across last-mile delivery routes. Amazon's Climate Pledge targets net-zero carbon by 2040, making fleet electrification a core strategic priority.",products:"Last-mile delivery fleet, logistics infrastructure",clients:"N/A",gtcThemes:['ice-ban']},
      {t:"—",n:"FedEx",px:"N/A",pe:null,ev:null,mc:"$60B",v:"Fleet buyer",beta:null,fcf:null,revGr:3,ebitdaMargin:null,yf:"FDX",desc:"FedEx has committed to a fully electric pickup and delivery fleet by 2040, with over 3,000 EVs deployed and orders for BrightDrop and other EV platforms. The company is investing $2B in fleet electrification and sustainable logistics.",products:"Delivery fleet, logistics network",clients:"N/A",gtcThemes:['ice-ban']},
      {t:"—",n:"Uber (Ride-hail)",px:"N/A",pe:null,ev:null,mc:"$160B",v:"Ride-hail platform",beta:null,fcf:null,revGr:15,ebitdaMargin:null,yf:"UBER",desc:"Uber committed to becoming a zero-emission mobility platform in the US, Canada, and Europe by 2030. The platform is incentivizing drivers to switch to EVs through earnings boosts, charging partnerships, and vehicle financing programs.",products:"Ride-hail platform, mobility services",clients:"N/A",gtcThemes:['ice-ban']},
      {t:"—",n:"US Government (Federal Fleet)",px:"N/A",pe:null,ev:null,mc:"N/A",v:"Government buyer",beta:null,fcf:null,revGr:null,ebitdaMargin:null,yf:null,desc:"Executive orders mandate federal fleet electrification with targets for 100% zero-emission light-duty vehicle acquisitions by 2027. The federal government operates 650,000+ vehicles, making it one of the largest fleet buyers in the world.",products:"Government fleet procurement",clients:"N/A",gtcThemes:['ice-ban','ira-subsidies']},
    ]
  },
  {
    id:"evpure", label:"EV OEMs — PURE PLAY — The disruptors", icon:"🚗", stream:"downstream",
    what:"Pure-play electric vehicle manufacturers that were born electric: Tesla, BYD, Rivian, Lucid, NIO, XPeng, Li Auto, VinFast. These companies designed their platforms, software, and manufacturing around EVs from day one without legacy ICE cost structures dragging them down.",
    industry:"The pure-play EV market is bifurcating between scaled winners (Tesla, BYD) generating real profits and cash flow, and speculative growth stories (Rivian, Lucid, NIO) still burning cash to reach scale. BYD has emerged as the global volume leader, outselling Tesla in total vehicles while Tesla retains the technology and margin lead. Chinese EV makers dominate their home market and are expanding aggressively into Southeast Asia, Europe, and Latin America.",
    value:"Tesla at 65x is priced for AI/robotics optionality beyond cars. BYD at 20x is a fraction of Tesla's multiple despite outselling it globally and being profitable. Li Auto is the only other consistently profitable Chinese EV maker. Rivian, Lucid, NIO, and VinFast remain speculative bets on reaching scale before running out of capital.",
    medPE:20, medEV:18, medFCF:null,
    cos:[
      {t:"TSLA",n:"Tesla",px:"$280",pe:65,ev:50,mc:"$900B",v:"Est 3/26",beta:2.0,fcf:1.5,revGr:15,ebitdaMargin:18,yf:"TSLA",desc:"Tesla is the most valuable automaker in the world and the company that catalyzed the global EV transition. Beyond vehicles, Tesla is building an integrated energy and AI ecosystem spanning battery manufacturing (4680 cells), solar, energy storage (Megapack), autonomous driving (FSD), humanoid robotics (Optimus), and the Supercharger network. The stock trades on AI and robotics optionality as much as auto fundamentals.",products:"Model 3/Y/S/X, Cybertruck, Semi, Megapack, Powerwall, FSD, Supercharger network",clients:"Consumers, fleet operators, utilities, energy storage buyers",gtcThemes:['ira-subsidies','lfp-shift','solid-state']},
      {t:"RIVN",n:"Rivian Automotive",px:"$14",pe:null,ev:null,mc:"$14B",v:"Est 3/26",beta:2.2,fcf:-20.0,revGr:30,ebitdaMargin:-15,yf:"RIVN",desc:"Rivian produces the R1T pickup truck and R1S SUV at its Normal, Illinois factory and is building electric delivery vans (EDV) for Amazon under an exclusive 100,000-unit contract. The company is constructing a second factory in Georgia and has a partnership with Volkswagen for software and electrical architecture licensing worth up to $5B.",products:"R1T pickup, R1S SUV, EDV delivery van, skateboard platform",clients:"Consumers, Amazon (delivery fleet), Volkswagen (technology licensing)",gtcThemes:['ira-subsidies']},
      {t:"LCID",n:"Lucid Group",px:"$3",pe:null,ev:null,mc:"$7B",v:"Est 3/26",beta:2.5,fcf:-30.0,revGr:40,ebitdaMargin:-80,yf:"LCID",desc:"Lucid Group produces the Air luxury sedan, the most efficient EV on the market with 500+ miles of EPA range, and is developing the Gravity SUV. Backed by Saudi Arabia's Public Investment Fund which owns 60%+, providing a financial backstop but creating governance concerns. Production volumes remain very low relative to the company's valuation.",products:"Lucid Air sedan, Lucid Gravity SUV, EV powertrain technology",clients:"Luxury consumers, Saudi Arabia government fleet",gtcThemes:[]},
      {t:"NIO",n:"NIO Inc",px:"$5",pe:null,ev:null,mc:"$10B",v:"Est 3/26",beta:2.0,fcf:-15.0,revGr:25,ebitdaMargin:-20,yf:"NIO",desc:"NIO is a Chinese premium EV maker known for its battery swap technology, which allows drivers to swap depleted batteries for fully charged ones in minutes. The company operates 2,000+ swap stations across China and is expanding into Europe. NIO also develops its own chips and autonomous driving technology.",products:"ET5/ET7 sedans, ES6/ES8 SUVs, EC6/EC7 coupes, battery swap stations, ONVO sub-brand",clients:"Chinese premium consumers, European market expansion",gtcThemes:['china-dominance','lfp-shift']},
      {t:"XPEV",n:"XPeng Inc",px:"$18",pe:null,ev:null,mc:"$17B",v:"Est 3/26",beta:2.0,fcf:-10.0,revGr:50,ebitdaMargin:-8,yf:"XPEV",desc:"XPeng is a Chinese EV maker focused on technology differentiation through its XNGP advanced driver assistance system, which is approaching full autonomous driving capability. The company partnered with Volkswagen to license its EV platform and software for VW's China models, validating XPeng's technology stack.",products:"G6/G9 SUVs, P7 sedan, X9 MPV, MONA sub-brand, XNGP autonomous driving",clients:"Chinese consumers, Volkswagen (technology licensing), Didi (robotaxi partnership)",gtcThemes:['china-dominance']},
      {t:"LI",n:"Li Auto",px:"$30",pe:20,ev:12,mc:"$32B",v:"Est 3/26",beta:1.5,fcf:3.0,revGr:35,ebitdaMargin:8,yf:"LI",desc:"Li Auto is the most profitable Chinese EV startup, differentiated by its extended-range electric vehicle (EREV) strategy that combines a battery with a small gasoline generator to eliminate range anxiety. This pragmatic approach has driven strong sales in China where charging infrastructure outside tier-1 cities remains sparse. The company is now transitioning to offer pure BEV models alongside its EREV lineup.",products:"L6/L7/L8/L9 SUVs (EREV), MEGA MPV (BEV)",clients:"Chinese family consumers, premium SUV market",gtcThemes:['china-dominance']},
      {t:"BYDDY",n:"BYD Company",px:"$75",pe:20,ev:14,mc:"$110B",v:"Est 3/26",beta:1.0,fcf:3.0,revGr:25,ebitdaMargin:8,yf:"BYDDY",desc:"BYD is the world's largest EV manufacturer by total volume and the most vertically integrated — it produces its own batteries (Blade Battery LFP), chips, motors, and electronic controls. BYD has surpassed Tesla in quarterly global sales and is aggressively expanding into Southeast Asia, Europe, Latin America, and the Middle East. Its cost advantage from vertical integration and Chinese manufacturing scale makes it the most formidable competitor in the global EV market.",products:"Dynasty/Ocean series, Blade Battery, semiconductors, e-Platform 3.0, Denza, Yangwang luxury brand",clients:"Global consumers, fleet operators, battery customers (external supply)",gtcThemes:['china-dominance','lfp-shift','ice-ban']},
      {t:"VFS",n:"VinFast Auto",px:"$4",pe:null,ev:null,mc:"$10B",v:"Est 3/26",beta:3.0,fcf:-25.0,revGr:100,ebitdaMargin:-50,yf:"VFS",desc:"VinFast is Vietnam's first global automaker, backed by Vingroup conglomerate and billionaire Pham Nhat Vuong. The company is expanding aggressively into the US, Europe, and Southeast Asia with a lineup of affordable EVs. High cash burn and heavy dependence on founder funding create significant execution risk.",products:"VF 5/6/7/8/9 SUVs, VF Wild pickup, e-scooters",clients:"Vietnamese consumers, US/European/SE Asian market expansion",gtcThemes:[]},
    ]
  },
  {
    id:"evlegacy", label:"EV OEMs — LEGACY TRANSITION — The incumbents pivoting", icon:"🏭", stream:"downstream",
    what:"Traditional automakers transitioning from internal combustion engines to electric vehicles while managing massive legacy cost structures, union workforces, dealer networks, and stranded ICE assets. The hardest industrial pivot since the horse-to-automobile transition.",
    industry:"Legacy OEMs face the innovator's dilemma: they must invest tens of billions in EV platforms while their profitable ICE businesses fund the transition. Union labor costs, dealer franchise laws, and pension obligations create structural cost disadvantages versus pure-play EV makers. Most have pulled back on aggressive EV timelines, adopting a 'multi-pathway' approach including hybrids.",
    value:"Legacy OEMs trade at 3-8x earnings — cheap on paper but reflecting the market's skepticism about their ability to profitably transition to EVs. Ford and GM are the most direct US plays on legacy EV transition. Toyota is the contrarian bet on hybrids and eventual solid-state batteries. European OEMs face the tightest regulatory pressure from EU 2035 ICE bans.",
    medPE:5, medEV:4, medFCF:8,
    cos:[
      {t:"F",n:"Ford Motor",px:"$10",pe:6,ev:5,mc:"$40B",v:"Est 3/26",beta:1.4,fcf:6.0,revGr:3,ebitdaMargin:6,yf:"F",desc:"Ford is executing a dual-track EV strategy with its Model e division (EV) and Ford Blue (ICE/hybrid), while Ford Pro targets commercial fleet electrification with the E-Transit van and F-150 Lightning Pro. Ford has pulled back on some aggressive EV investments after heavy losses in Model e, pivoting toward hybrids and more targeted EV launches.",products:"F-150 Lightning, Mustang Mach-E, E-Transit, Maverick hybrid, Explorer EV",clients:"Consumers, commercial fleets, government agencies",gtcThemes:['ira-subsidies','ice-ban']},
      {t:"GM",n:"General Motors",px:"$50",pe:5,ev:4,mc:"$55B",v:"Est 3/26",beta:1.3,fcf:7.0,revGr:5,ebitdaMargin:10,yf:"GM",desc:"General Motors is betting its EV future on the Ultium battery platform (joint venture with LG Energy Solution) and has launched the Chevrolet Equinox EV, Blazer EV, Silverado EV, and Cadillac Lyriq. GM's BrightDrop commercial EV division targets last-mile delivery. The Cruise autonomous driving unit has been restructured after safety incidents.",products:"Equinox EV, Blazer EV, Silverado EV, Lyriq, Hummer EV, BrightDrop, Ultium platform",clients:"Consumers, commercial fleets, delivery companies",gtcThemes:['ira-subsidies','ice-ban']},
      {t:"VWAGY",n:"Volkswagen Group",px:"$12",pe:4,ev:3,mc:"$55B",v:"Est 3/26",beta:1.2,fcf:8.0,revGr:2,ebitdaMargin:7,yf:"VWAGY",desc:"Volkswagen Group is Europe's largest automaker and has committed the most capital to electrification among legacy OEMs, with the ID series, Audi Q6 e-tron, and Porsche Taycan. VW invested up to $5B in Rivian for software and electrical architecture and partnered with XPeng for China. However, EV execution has lagged, with software problems and market share losses in China.",products:"ID.3/ID.4/ID.7, Audi Q6 e-tron, Porsche Taycan, PowerCo battery division",clients:"Global consumers, fleet operators",gtcThemes:['ice-ban','china-dominance']},
      {t:"STLA",n:"Stellantis",px:"$14",pe:3,ev:3,mc:"$45B",v:"Est 3/26",beta:1.5,fcf:10.0,revGr:-2,ebitdaMargin:8,yf:"STLA",desc:"Stellantis (formed from Fiat Chrysler and PSA merger) operates 14 brands including Jeep, Ram, Chrysler, Dodge, Peugeot, and Citroen. The company has been slower to electrify than European peers but is launching STLA platform-based EVs across brands. CEO change and cost-cutting restructuring are ongoing.",products:"Jeep Avenger EV, Peugeot E-3008, Ram 1500 REV, STLA EV platforms",clients:"Global consumers, fleet operators",gtcThemes:['ice-ban']},
      {t:"TM",n:"Toyota Motor",px:"$190",pe:8,ev:6,mc:"$250B",v:"Est 3/26",beta:0.7,fcf:5.0,revGr:5,ebitdaMargin:12,yf:"TM",desc:"Toyota is the world's largest automaker by volume and the most prominent skeptic of a rapid all-EV transition, betting heavily on hybrids, plug-in hybrids, and hydrogen fuel cells alongside a slower BEV rollout. Toyota's solid-state battery program targets commercialization by 2027-2028 with claims of 745-mile range and 10-minute charging. If successful, solid-state could leapfrog current lithium-ion technology.",products:"bZ4X, bZ3, Prius Prime, RAV4 Prime, Mirai (FCEV), solid-state battery R&D",clients:"Global consumers, fleet operators",gtcThemes:['solid-state','hydrogen-fuel-cell']},
    ]
  },
  {
    id:"charging", label:"CHARGING INFRASTRUCTURE — The network builders", icon:"⚡", stream:"downstream",
    what:"Companies building, operating, and maintaining EV charging networks — from Level 2 home and workplace chargers to DC fast charging (DCFC) stations along highways. The charging experience is the key enabler of mass EV adoption, and network density creates winner-take-most dynamics.",
    industry:"The charging market is capital-intensive with long payback periods. Utilization rates remain low at most public stations, creating a chicken-and-egg problem. Tesla's Supercharger network is the gold standard, and its NACS connector has become the de facto North American standard. NEVI federal funding ($7.5B) is accelerating buildout but regulatory complexity slows deployment.",
    value:"Most public charging companies remain unprofitable, with ChargePoint and Blink trading below $2/share. EVgo has differentiated through fast-charging focus and utility partnerships. The sector needs consolidation — too many subscale operators competing for limited charging demand. Tesla Supercharger network is the most valuable charging asset but not separately investable.",
    medPE:null, medEV:null, medFCF:null,
    cos:[
      {t:"CHPT",n:"ChargePoint Holdings",px:"$1.50",pe:null,ev:null,mc:"$600M",v:"Est 3/26",beta:2.5,fcf:-15.0,revGr:15,ebitdaMargin:-30,yf:"CHPT",desc:"ChargePoint is the largest EV charging network operator in North America and Europe by number of ports, operating a hardware-plus-software-plus-services business model. The company sells charging stations to businesses, fleets, and property owners who host them, then generates recurring revenue from software subscriptions and energy management services.",products:"CP6000 DC fast chargers, Level 2 chargers, fleet management software, Assure warranty",clients:"Commercial property owners, fleet operators, municipalities, retailers",gtcThemes:['ira-subsidies']},
      {t:"EVGO",n:"EVgo Inc",px:"$5",pe:null,ev:null,mc:"$1.5B",v:"Est 3/26",beta:2.2,fcf:-10.0,revGr:40,ebitdaMargin:-20,yf:"EVGO",desc:"EVgo operates one of the largest public DC fast charging networks in the US, focused on metropolitan areas and retail locations. Unlike ChargePoint's asset-light model, EVgo owns and operates its stations, giving it more control over the customer experience but requiring more capital. Partnership with GM for co-branded charging locations.",products:"DC fast charging stations, eXtend white-label services, fleet charging",clients:"EV drivers (consumer), GM partnership, fleet operators, Uber drivers",gtcThemes:['ira-subsidies']},
    ]
  },
  {
    id:"cells", label:"BATTERY CELL MANUFACTURERS — The core bottleneck", icon:"🔋", stream:"midstream",
    what:"The companies that manufacture lithium-ion battery cells — the single most expensive component in an EV (30-40% of vehicle cost) and the critical bottleneck determining who can build EVs at scale. Cell manufacturing requires massive capital investment ($1-2B per 10 GWh factory), deep process expertise, and years of qualification with OEM customers.",
    industry:"China controls 75%+ of global battery cell manufacturing capacity, led by CATL. The Big Six — CATL, BYD, LG Energy, Samsung SDI, Panasonic, SK On — account for 90%+ of global supply. Western governments are spending $100B+ in subsidies to build domestic cell manufacturing, but new factories take 3-5 years to reach full production. The LFP vs NMC chemistry war is reshaping the competitive landscape.",
    value:"Most top cell makers are listed in Asia (CATL in Shenzhen, LG Energy and Samsung SDI in Seoul). Panasonic is the most accessible Western-listed cell manufacturer. The sector offers structural growth but margins are compressed by overcapacity in China and intense competition. Whoever controls the cell controls the EV margin stack.",
    medPE:12, medEV:8, medFCF:4,
    cos:[
      {t:"PCRFY",n:"Panasonic Holdings",px:"$10",pe:12,ev:8,mc:"$25B",v:"Est 3/26",beta:1.0,fcf:4.0,revGr:8,ebitdaMargin:10,yf:"PCRFY",desc:"Panasonic is Tesla's longest-standing battery partner, co-developing the 2170 cell at Gigafactory Nevada and now producing the next-generation 4680 cell at its new Kansas factory. Panasonic Energy is the company's fastest-growing division and the primary reason to own the stock, though the parent also includes consumer electronics and industrial businesses that dilute the battery story.",products:"2170 cylindrical cells, 4680 cells, battery management systems, consumer electronics",clients:"Tesla (primary), Subaru, Mazda, Lucid, other OEMs",gtcThemes:['ira-subsidies','solid-state']},
      {t:"—",n:"CATL (300750.SZ)",px:"¥245",pe:18,ev:12,mc:"$150B",v:"Est 3/26",beta:1.2,fcf:3.0,revGr:20,ebitdaMargin:14,yf:null,desc:"Contemporary Amperex Technology (CATL) is the world's largest battery manufacturer by a wide margin, commanding 35%+ global market share. CATL supplies cells to Tesla, BMW, Volkswagen, Mercedes, Hyundai, and virtually every major global automaker. Its dominance in both NMC and LFP chemistries, combined with massive scale and relentless cost reduction, makes it the single most important company in the global EV supply chain.",products:"LFP cells, NMC cells, Qilin battery, Shenxing fast-charging LFP, CTP (cell-to-pack), sodium-ion cells",clients:"Tesla, BMW, VW, Mercedes, Hyundai, virtually all major OEMs",gtcThemes:['china-dominance','lfp-shift']},
      {t:"—",n:"LG Energy Solution (373220.KS)",px:"₩380,000",pe:25,ev:15,mc:"$65B",v:"Est 3/26",beta:1.3,fcf:1.0,revGr:15,ebitdaMargin:8,yf:null,desc:"LG Energy Solution is the second-largest global battery manufacturer and the leading non-Chinese supplier to Western automakers. LGES operates joint venture cell factories with GM (Ultium Cells), Hyundai, and Stellantis in the US, making it the cornerstone of America's domestic battery manufacturing strategy. The company is diversifying beyond automotive into energy storage systems (ESS).",products:"Pouch cells (NMC), cylindrical cells, ESS batteries, Ultium JV cells",clients:"GM, Hyundai/Kia, Ford, Stellantis, Tesla, Rivian",gtcThemes:['ira-subsidies','china-dominance']},
      {t:"—",n:"Samsung SDI (006400.KS)",px:"₩350,000",pe:20,ev:12,mc:"$25B",v:"Est 3/26",beta:1.1,fcf:2.0,revGr:12,ebitdaMargin:9,yf:null,desc:"Samsung SDI is Samsung's battery division, producing prismatic NMC cells primarily for BMW, Volkswagen, Stellantis, and Rivian. The company operates factories in South Korea, Hungary, and is building a US facility. Samsung SDI is developing all-solid-state batteries targeting 2027 commercialization.",products:"Prismatic NMC cells, ESS batteries, solid-state battery R&D",clients:"BMW, Volkswagen, Stellantis, Rivian, Hyundai",gtcThemes:['solid-state','ira-subsidies']},
      {t:"—",n:"SK On (SK Innovation 096770.KS)",px:"₩100,000",pe:null,ev:null,mc:"$8B",v:"Est 3/26",beta:1.5,fcf:-5.0,revGr:25,ebitdaMargin:-5,yf:null,desc:"SK On is SK Innovation's battery division, operating cell factories in Georgia (US) supplying Ford and Hyundai. The company has faced profitability challenges due to aggressive capacity expansion ahead of demand, but its Ford BlueOval SK JV and Hyundai partnerships provide contracted offtake.",products:"Pouch cells (NMC/NCM), BlueOval SK JV cells",clients:"Ford, Hyundai/Kia, Volkswagen",gtcThemes:['ira-subsidies']},
      {t:"—",n:"Northvolt",px:"Private (restructuring)",pe:null,ev:null,mc:"~$2B est",v:"Private est",beta:null,fcf:null,revGr:null,ebitdaMargin:null,yf:null,desc:"Northvolt was Europe's great hope for a homegrown battery champion, but the Swedish company entered restructuring in late 2024 after failing to scale production at its Skelleftea, Sweden gigafactory. Billions in EU subsidies and customer prepayments from BMW and Volkswagen are at risk. The company's struggles highlight the extreme difficulty of scaling cell manufacturing outside Asia.",products:"Prismatic NMC cells (limited production), battery recycling",clients:"BMW (contract paused), Volkswagen, Scania, Volvo",gtcThemes:['china-dominance']},
    ]
  },
  {
    id:"cathode", label:"CATHODE & ANODE MATERIALS — The battery chemistry layer", icon:"🧪", stream:"midstream",
    what:"Manufacturers of cathode active materials (CAM), anode graphite (natural and synthetic), separators, and electrolyte — the four key components inside every battery cell. Cathode chemistry (LFP vs NMC vs NCA) determines battery performance, cost, and supply chain risk. China controls 90% of anode graphite processing and 70%+ of cathode material production.",
    industry:"The LFP vs NMC chemistry war is the defining dynamic. LFP (lithium iron phosphate) is winning on cost and safety for standard-range EVs, while NMC (nickel manganese cobalt) retains advantages in energy density for premium and long-range applications. China's dominance in cathode and anode processing is even more concentrated than cell manufacturing, creating the deepest supply chain dependency.",
    value:"Most cathode and anode material companies are listed in Asia or are divisions of larger chemical conglomerates. Umicore, BASF, and Novonix offer Western-listed exposure. Syrah Resources is the only non-Chinese producer of battery-grade natural graphite anode material. The sector is commoditizing but scale and qualification barriers protect incumbents.",
    medPE:15, medEV:10, medFCF:3,
    cos:[
      {t:"—",n:"Umicore (UMI.BR)",px:"€20",pe:12,ev:8,mc:"$5B",v:"Est 3/26",beta:1.2,fcf:4.0,revGr:5,ebitdaMargin:10,yf:null,desc:"Umicore is a Belgian materials technology company and one of the leading Western producers of cathode active materials (CAM) for lithium-ion batteries. The company also operates a major precious metals recycling business and battery recycling operations, positioning it across the circular battery value chain.",products:"NMC cathode materials, battery recycling, precious metals refining, catalysts",clients:"LG Energy, Samsung SDI, European OEMs, recycling customers",gtcThemes:['china-dominance']},
      {t:"—",n:"BASF Battery Materials (BASFY)",px:"$15",pe:10,ev:7,mc:"$40B",v:"Est 3/26 (parent)",beta:1.0,fcf:5.0,revGr:2,ebitdaMargin:12,yf:"BASFY",desc:"BASF's battery materials division produces cathode active materials and is building CAM production facilities in Europe and North America to serve Western OEMs. As a division of the world's largest chemical company, BASF Battery Materials has deep process chemistry expertise but competes against lower-cost Asian producers.",products:"NMC cathode active materials, precursor CAM, battery recycling",clients:"European automakers, cell manufacturers",gtcThemes:['china-dominance']},
      {t:"—",n:"Sumitomo Metal Mining (SMMYY)",px:"$30",pe:14,ev:9,mc:"$15B",v:"Est 3/26",beta:1.0,fcf:3.0,revGr:5,ebitdaMargin:15,yf:"SMMYY",desc:"Sumitomo Metal Mining is a Japanese mining and materials company that is one of the world's largest producers of nickel-rich NCA (nickel cobalt aluminum) cathode materials, historically the primary cathode supplier for Panasonic's Tesla battery cells. The company is vertically integrated from nickel mining through cathode production.",products:"NCA cathode materials, nickel mining, copper mining, gold mining",clients:"Panasonic (for Tesla cells), Japanese cell makers",gtcThemes:['lfp-shift']},
      {t:"NVX",n:"Novonix",px:"$1.50",pe:null,ev:null,mc:"$300M",v:"Est 3/26",beta:2.5,fcf:-20.0,revGr:50,ebitdaMargin:null,yf:"NVX",desc:"Novonix is developing synthetic graphite anode material production in the US (Chattanooga, Tennessee), positioning itself as a domestic alternative to Chinese-dominated graphite processing. The company also produces battery cell testing equipment used by major cell manufacturers for R&D and quality control.",products:"Synthetic graphite anode material, battery testing equipment",clients:"US cell manufacturers, DOE, battery R&D labs",gtcThemes:['china-dominance','ira-subsidies']},
      {t:"—",n:"Syrah Resources (SYR.AX)",px:"A$0.40",pe:null,ev:null,mc:"$200M",v:"Est 3/26",beta:2.0,fcf:null,revGr:null,ebitdaMargin:null,yf:null,desc:"Syrah Resources operates the Balama graphite mine in Mozambique (the world's largest natural graphite deposit) and is building an active anode material (AAM) processing plant in Vidalia, Louisiana. Syrah is the only non-Chinese company with an integrated mine-to-anode supply chain for battery-grade natural graphite.",products:"Natural flake graphite, active anode material (spherical graphite)",clients:"Tesla (Vidalia offtake agreement), US cell manufacturers",gtcThemes:['china-dominance','ira-subsidies']},
    ]
  },
  {
    id:"equipment", label:"BATTERY EQUIPMENT & TESTING — Picks and shovels of the battery buildout", icon:"🔧", stream:"midstream",
    what:"Manufacturers of the specialized equipment used to build battery cell factories: electrode coating machines, cell assembly lines, formation and aging equipment, testing and quality control systems, and dry room environmental controls. These companies are the picks-and-shovels play on the global battery factory buildout.",
    industry:"Battery equipment is a critical enabler of the $150B+ wave of cell factory investments globally. Chinese equipment makers (Wuxi Lead, Yinghe) dominate with 80%+ share, but Western OEMs increasingly demand non-Chinese equipment for IRA-subsidized factories. Equipment lead times of 12-18 months create order visibility but cyclical risk when factory buildouts slow.",
    value:"Most battery equipment companies are listed in China or are private. Manz AG offers European-listed exposure but is small-cap and volatile. The sector is a leveraged bet on battery factory construction rates — when capex cycles peak, equipment revenue follows, but order cancellations and project delays create significant downside risk.",
    medPE:20, medEV:12, medFCF:2,
    cos:[
      {t:"—",n:"Manz AG (M5Z.DE)",px:"€10",pe:null,ev:null,mc:"$100M",v:"Est 3/26",beta:2.0,fcf:null,revGr:10,ebitdaMargin:2,yf:null,desc:"Manz AG is a German high-tech equipment manufacturer supplying production equipment for lithium-ion battery cell manufacturing, including electrode coating, stacking, and assembly systems. The company has pivoted from solar equipment to battery equipment as the primary growth driver, serving European and US cell factory projects.",products:"Battery cell production equipment, electrode coating lines, cell assembly systems, laser processing",clients:"European cell manufacturers, Northvolt (restructuring risk), US factory projects",gtcThemes:['ira-subsidies','china-dominance']},
      {t:"—",n:"Wuxi Lead Intelligent (300450.SZ)",px:"¥25",pe:15,ev:10,mc:"$5B",v:"Est 3/26",beta:1.5,fcf:3.0,revGr:20,ebitdaMargin:12,yf:null,desc:"Wuxi Lead Intelligent is the world's largest battery manufacturing equipment supplier, providing turnkey cell production lines to CATL, BYD, and virtually every major Chinese cell maker. Its dominance in battery equipment mirrors CATL's dominance in cells — Chinese equipment powers the majority of global cell manufacturing capacity.",products:"Turnkey cell production lines, winding machines, coating equipment, formation/aging systems",clients:"CATL, BYD, EVE Energy, CALB, LG Energy (China lines)",gtcThemes:['china-dominance']},
    ]
  },
  {
    id:"lithium", label:"LITHIUM MINING & PRODUCTION — The white gold", icon:"⛏️", stream:"upstream",
    what:"Companies that extract lithium from hard rock (spodumene) mines or evaporative brine operations, producing lithium carbonate or lithium hydroxide — the essential input for every lithium-ion battery chemistry (LFP, NMC, NCA). The lithium supply chain runs from Australia (hard rock), South America (brine triangle), and China (lepidolite) through Chinese-dominated chemical conversion to battery-grade material.",
    industry:"Lithium prices crashed 80% from the 2022 peak of $80,000/tonne lithium carbonate to below $15,000/tonne, forcing mine closures, project deferrals, and industry consolidation. Current prices are near the marginal cost of production for many Western miners. Supply discipline and demand growth could trigger the next upcycle, but timing is uncertain. China controls 65%+ of lithium chemical conversion capacity.",
    value:"Albemarle at 25x is priced for cycle recovery despite current earnings headwinds from low lithium prices. SQM at 10x is cheaper with higher margins from low-cost Chilean brine. Arcadium Lithium (ALTM) is the newly merged Allkem-Livent, offering diversified brine and hard rock exposure. Piedmont Lithium (PLL) is a speculative micro-cap with a North Carolina spodumene project.",
    medPE:15, medEV:10, medFCF:3,
    cos:[
      {t:"ALB",n:"Albemarle Corporation",px:"$85",pe:25,ev:15,mc:"$10B",v:"Est 3/26",beta:1.8,fcf:2.0,revGr:-10,ebitdaMargin:20,yf:"ALB",desc:"Albemarle is the world's largest lithium producer, operating brine extraction in Chile (Salar de Atacama) and hard rock mines in Australia (Greenbushes JV, Wodgina) and the US (Kings Mountain). The company also produces bromine and catalysts. Albemarle's scale, geographic diversification, and conversion capacity position it as the Western lithium blue chip, but profitability has been crushed by the lithium price collapse.",products:"Lithium carbonate, lithium hydroxide, bromine specialties, catalysts",clients:"CATL, LG Energy, Samsung SDI, Panasonic, SK On, all major cell makers",gtcThemes:['lithium-cycle','china-dominance','ira-subsidies']},
      {t:"SQM",n:"Sociedad Quimica y Minera",px:"$40",pe:10,ev:7,mc:"$11B",v:"Est 3/26",beta:1.3,fcf:6.0,revGr:-5,ebitdaMargin:25,yf:"SQM",desc:"SQM is a Chilean chemical company and the world's second-largest lithium producer, extracting lithium from brine in the Salar de Atacama — the highest-grade, lowest-cost lithium brine deposit globally. SQM also produces potassium, iodine, and specialty plant nutrition products. Its Chilean brine operations give it a structural cost advantage over hard rock miners.",products:"Lithium carbonate, lithium hydroxide, potassium chloride, iodine, specialty plant nutrition",clients:"CATL, LG Energy, cell makers globally, agricultural customers",gtcThemes:['lithium-cycle']},
      {t:"ALTM",n:"Arcadium Lithium",px:"$5",pe:null,ev:null,mc:"$3B",v:"Est 3/26",beta:1.8,fcf:1.0,revGr:-15,ebitdaMargin:15,yf:"ALTM",desc:"Arcadium Lithium was formed from the merger of Allkem and Livent, creating a diversified lithium producer with brine operations in Argentina (Olaroz), hard rock in Australia (Mt Cattlin), and lithium hydroxide conversion in the US and China. The company offers diversified exposure across extraction methods and geographies but faces profitability pressure at current lithium prices.",products:"Lithium carbonate, lithium hydroxide, butyllithium, high-purity lithium metal",clients:"Tesla, BMW, GM, cell manufacturers, pharmaceutical and industrial customers",gtcThemes:['lithium-cycle','ira-subsidies']},
      {t:"PLL",n:"Piedmont Lithium",px:"$8",pe:null,ev:null,mc:"$150M",v:"Est 3/26",beta:2.0,fcf:null,revGr:null,ebitdaMargin:null,yf:"PLL",desc:"Piedmont Lithium is a development-stage lithium company with a spodumene project in North Carolina and offtake agreements from its equity stake in NAL (North American Lithium) in Quebec and Ghana. The company has a binding offtake agreement with Tesla but its flagship North Carolina project faces permitting and community opposition challenges.",products:"Spodumene concentrate, lithium hydroxide (planned)",clients:"Tesla (offtake agreement), potential additional customers",gtcThemes:['lithium-cycle','ira-subsidies']},
    ]
  },
  {
    id:"minerals", label:"NICKEL, COBALT & OTHER CRITICAL MINERALS — The strategic metals", icon:"⚙️", stream:"upstream",
    what:"Producers of the other critical minerals essential for EV batteries and motors beyond lithium: nickel (for NMC cathodes), cobalt (for cathode stability), manganese, graphite (for anodes), and rare earth elements (for permanent magnets in EV motors). Each mineral has its own supply chain bottlenecks and geopolitical risks.",
    industry:"Indonesian nickel supply has surged, crashing nickel prices and threatening Western producers. Cobalt remains concentrated in the DRC with ethical sourcing concerns. China controls 90% of graphite processing and 70%+ of rare earth refining. The shift to LFP chemistry (no nickel or cobalt) partially de-risks these supply chains but NMC cathodes still dominate premium EVs.",
    value:"Diversified miners (BHP, Vale, Glencore) offer broad commodity exposure with EV optionality. MP Materials is the only US rare earth mine and processor. Freeport-McMoRan straddles the copper-gold-molybdenum complex with indirect EV exposure through copper demand growth.",
    medPE:10, medEV:7, medFCF:6,
    cos:[
      {t:"FCX",n:"Freeport-McMoRan",px:"$45",pe:15,ev:10,mc:"$65B",v:"Est 3/26",beta:1.5,fcf:4.0,revGr:10,ebitdaMargin:35,yf:"FCX",desc:"Freeport-McMoRan is the world's largest publicly traded copper producer, operating the massive Grasberg mine in Indonesia (one of the world's largest copper-gold deposits) and major operations in the Americas. Copper is the electrification metal — EVs use 3-4x more copper than ICE vehicles — making FCX a structural beneficiary of the EV transition regardless of battery chemistry.",products:"Copper cathode, copper concentrate, gold, molybdenum",clients:"Smelters, manufacturers, wire producers, global commodity markets",gtcThemes:['lithium-cycle','china-dominance']},
      {t:"VALE",n:"Vale S.A.",px:"$10",pe:6,ev:4,mc:"$45B",v:"Est 3/26",beta:1.2,fcf:8.0,revGr:5,ebitdaMargin:30,yf:"VALE",desc:"Vale is the world's largest nickel producer and a major iron ore miner. Its Class 1 nickel operations in Canada (Sudbury, Voisey's Bay) and Indonesia produce battery-grade nickel suitable for NMC cathode manufacturing. Vale has signed long-term nickel supply agreements with cell makers including a binding agreement with Tesla.",products:"Iron ore, nickel, copper, cobalt, PGMs",clients:"Steel mills, cell manufacturers (Tesla nickel agreement), commodity traders",gtcThemes:['china-dominance']},
      {t:"BHP",n:"BHP Group",px:"$55",pe:10,ev:6,mc:"$145B",v:"Est 3/26",beta:1.0,fcf:6.0,revGr:5,ebitdaMargin:45,yf:"BHP",desc:"BHP is the world's largest mining company by market cap, with leading positions in iron ore, copper, nickel, and potash. Its Nickel West operations in Australia produce battery-grade nickel sulfate directly for cell manufacturers, and BHP has invested in nickel sulfate processing to serve the EV battery supply chain.",products:"Iron ore, copper, nickel, nickel sulfate, potash, metallurgical coal",clients:"Steel mills, cell manufacturers, commodity traders, agricultural customers",gtcThemes:['china-dominance']},
      {t:"MP",n:"MP Materials",px:"$20",pe:40,ev:25,mc:"$3.5B",v:"Est 3/26",beta:1.8,fcf:1.0,revGr:25,ebitdaMargin:20,yf:"MP",desc:"MP Materials operates the only active rare earth mine and processing facility in the United States at Mountain Pass, California. Rare earth permanent magnets are essential for EV traction motors, wind turbines, and defense applications. MP is building downstream magnet manufacturing capability to compete with Chinese dominance in rare earth processing and magnet production.",products:"Rare earth concentrate, separated rare earth oxides, NdFeB magnets (in development)",clients:"GM (magnets supply agreement), defense contractors, wind turbine OEMs",gtcThemes:['china-dominance','ira-subsidies']},
    ]
  },
  {
    id:"copper", label:"COPPER & WIRING — The electrification metal", icon:"🔌", stream:"upstream",
    what:"Copper miners and wire/wiring harness manufacturers that supply the physical connectivity layer of the EV transition. Electric vehicles use 3-4x more copper than ICE vehicles (80-100 kg per BEV vs 20-25 kg per ICE). Charging infrastructure, grid upgrades, and renewable energy installations add further copper demand. Wiring harnesses are the nervous system of every vehicle.",
    industry:"Copper faces a structural supply deficit as demand from electrification, data centers, and grid buildout outpaces mine supply growth. New copper mines take 10-15 years to develop and permitting is increasingly difficult. Copper recycling provides 30%+ of supply but cannot close the gap alone. Wiring harness complexity increases with electrification and autonomous driving features.",
    value:"Southern Copper at 22x trades at a premium to Freeport at 15x despite both being top copper producers, reflecting SCCO's lower-cost operations and higher margins. Aptiv is a wiring harness and vehicle technology company directly exposed to EV content growth per vehicle. Encore Wire (now Prysmian-owned) produces copper wire and cable for construction and infrastructure.",
    medPE:15, medEV:12, medFCF:4,
    cos:[
      {t:"SCCO",n:"Southern Copper",px:"$100",pe:22,ev:16,mc:"$77B",v:"Est 3/26",beta:1.1,fcf:3.0,revGr:8,ebitdaMargin:45,yf:"SCCO",desc:"Southern Copper is the world's fifth-largest copper producer by output and the most profitable, operating low-cost open-pit mines in Mexico (Buenavista, La Caridad) and Peru (Cuajone, Toquepala). Its copper reserves are among the largest globally, providing decades of mine life. Southern Copper also produces molybdenum, zinc, and silver as byproducts.",products:"Copper cathode, copper concentrate, molybdenum, zinc, silver",clients:"Wire producers, manufacturers, smelters, commodity markets",gtcThemes:[]},
      {t:"APTV",n:"Aptiv PLC",px:"$65",pe:10,ev:7,mc:"$15B",v:"Est 3/26",beta:1.5,fcf:6.0,revGr:5,ebitdaMargin:12,yf:"APTV",desc:"Aptiv is a global automotive technology company specializing in electrical and electronic architecture, wiring harnesses, connectors, and advanced safety systems. EVs require significantly more complex and heavier wiring harnesses than ICE vehicles, driving content-per-vehicle growth for Aptiv. The company also develops autonomous driving software through its Motional JV with Hyundai.",products:"Electrical distribution systems, wiring harnesses, connectors, ADAS, autonomous driving (Motional JV)",clients:"Ford, GM, Volkswagen, BMW, Stellantis, virtually all major OEMs",gtcThemes:['ice-ban']},
      {t:"WIRE",n:"Encore Wire (Prysmian)",px:"$280",pe:15,ev:10,mc:"$7B",v:"Est 3/26",beta:1.0,fcf:5.0,revGr:8,ebitdaMargin:15,yf:"WIRE",desc:"Encore Wire, now part of Prysmian Group following the 2024 acquisition, is a leading US manufacturer of copper electrical building wire and cable. The company benefits from the electrification megatrend as buildings, EV charging stations, data centers, and grid infrastructure all require copper wiring. Domestic manufacturing provides tariff protection and supply chain reliability.",products:"Copper building wire, copper cable, aluminum wire, data cables",clients:"Electrical distributors, contractors, data center builders, utilities",gtcThemes:['ira-subsidies']},
    ]
  },
];

export const TIER_COLORS = {
  consumers: '#94a3b8',
  evpure: '#f97316',
  evlegacy: '#fbbf24',
  charging: '#06b6d4',
  cells: '#ef4444',
  cathode: '#a78bfa',
  equipment: '#38bdf8',
  lithium: '#4ade80',
  minerals: '#c084fc',
  copper: '#e879f9',
};

export const STREAM_COLORS = {upstream:'#4ade80',midstream:'#60a5fa',downstream:'#fbbf24',demand:'#fb923c'};

export const EV_THEMES = {
  'china-dominance':    { label: 'China Supply Chain Risk',  color: '#ef4444', dead: false, desc: 'China controls 75%+ of battery cell manufacturing, 90% of anode graphite processing, and 70% of cathode materials. Western reshoring efforts are 5-7 years behind. Tariffs and export controls create bifurcation risk.' },
  'lfp-shift':          { label: 'LFP Chemistry Shift',      color: '#4ade80', dead: false, desc: 'Lithium iron phosphate batteries gaining share over NMC due to lower cost, better safety, and no cobalt/nickel dependency. BYD Blade Battery and Tesla adoption driving global LFP share above 40%.' },
  'solid-state':        { label: 'Solid-State Batteries',    color: '#38bdf8', dead: false, desc: 'Next-generation solid-state batteries promise 2x energy density and faster charging. Toyota, QuantumScape, and Solid Power targeting 2027-2028 commercialization. Still pre-production.' },
  'ira-subsidies':      { label: 'IRA & Policy Subsidies',   color: '#fbbf24', dead: false, desc: 'US Inflation Reduction Act provides $7,500 consumer tax credits and $45/kWh production credits for domestic battery manufacturing. Driving $150B+ in announced US battery factory investments.' },
  'lithium-cycle':      { label: 'Lithium Price Cycle',      color: '#a78bfa', dead: false, desc: 'Lithium carbonate crashed 80% from 2022 peak. Current prices near marginal cost of production, forcing mine closures and project deferrals. Supply discipline could trigger next upcycle.' },
  'ice-ban':            { label: 'ICE Vehicle Bans',         color: '#06b6d4', dead: false, desc: 'EU banning new ICE sales by 2035, California by 2035, UK by 2035. Creates regulatory floor for EV adoption regardless of consumer preference.' },
  'hydrogen-fuel-cell': { label: 'Hydrogen Fuel Cell',       color: '#94a3b8', dead: true,  desc: 'Hydrogen fuel cell vehicles losing the passenger car race to BEVs. Remaining niche in heavy trucking and industrial. Most automakers scaling back FCEV programs.' },
};

export const VALUATION_GAPS = [
  {
    a:"BYDDY",aPE:20,b:"TSLA",bPE:65,
    title:"BYD outsells Tesla globally but trades at a third of the multiple",
    summary:"BYD and Tesla are the two dominant profitable EV makers globally, but BYD now outsells Tesla in total vehicles (including plug-in hybrids) while trading at roughly 20x forward earnings versus Tesla's 65x.",
    thesis:"BYD at 20x is the world's largest EV maker by volume, is vertically integrated (making its own batteries, chips, and motors), and is profitable with expanding margins. Tesla at 65x is priced for AI, robotics (Optimus), autonomous driving (FSD), and energy storage optionality far beyond its auto business. The question is whether Tesla's tech premium is justified or whether BYD's manufacturing dominance and cost advantage will ultimately be more valuable. If you strip out Tesla's non-auto optionality, BYD is arguably the cheaper and more proven EV business.",
  },
  {
    a:"LI",aPE:20,b:"NIO",bPE:null,
    title:"Profitable EREV strategy vs cash-burning premium BEV approach",
    summary:"Li Auto and NIO are both Chinese EV companies, but Li Auto is consistently profitable using an extended-range (EREV) strategy while NIO remains unprofitable despite its premium positioning and battery swap technology.",
    thesis:"Li Auto trades at 20x forward earnings with positive margins and strong cash generation, driven by its pragmatic EREV approach that eliminates range anxiety by combining batteries with small gasoline generators. NIO has no PE ratio (still losing money) despite higher revenue per vehicle, burdened by its capital-intensive battery swap network and premium brand strategy. Both target the Chinese premium SUV market, but Li Auto has proven it can make money selling EVs while NIO continues to burn cash. The market is paying a premium for Li Auto's profitability, while NIO trades on optionality and brand value.",
  },
  {
    a:"F",aPE:6,b:"GM",bPE:5,
    title:"Legacy auto peers with similar EV transition strategies",
    summary:"Ford and GM are both legacy US automakers transitioning to EVs with similar strategies: dual-track ICE/EV operations, fleet-focused commercial EVs, and heavy IRA subsidy dependence. Both trade at single-digit PE multiples reflecting market skepticism about the transition.",
    thesis:"Ford at 6x and GM at 5x trade at depression-level multiples despite being profitable automakers. GM is slightly cheaper with better margins (10% vs 6% EBITDA) and a more structured EV approach through the Ultium platform JV with LG Energy. Ford has pulled back on EV investments after heavy Model e losses but benefits from strong F-150 Lightning fleet demand. Both face the same structural challenges: union labor costs, dealer franchise laws, and competition from Tesla and Chinese EVs. The tight valuation gap suggests the market views them as near-substitutes for ICE-to-EV transition risk.",
  },
  {
    a:"PCRFY",aPE:12,b:"—",bPE:18,
    title:"Japanese cell maker at deep discount to Chinese peers",
    summary:"Panasonic is Tesla's longest-standing battery cell partner and a top-5 global cell manufacturer, trading at roughly 12x forward earnings versus CATL at roughly 18x — a significant discount despite Panasonic's IRA-subsidized US manufacturing advantage.",
    thesis:"Panasonic trades at 12x as a diversified Japanese conglomerate where the high-growth battery division is diluted by legacy electronics businesses. CATL at 18x commands a premium as a pure-play battery company with 35%+ global market share and dominant scale. However, Panasonic's new Kansas 4680 cell factory qualifies for IRA production tax credits ($45/kWh) that Chinese competitors cannot access, and its exclusive Tesla relationship provides contracted demand. If Panasonic were to spin off its energy division, the battery business alone could rerate significantly closer to CATL's multiple.",
  },
  {
    a:"SQM",aPE:10,b:"ALB",bPE:25,
    title:"Both top-3 lithium producers, SQM at less than half the multiple",
    summary:"SQM and Albemarle are both top-3 global lithium producers, but SQM trades at 10x forward earnings versus Albemarle at 25x, less than half the multiple, despite SQM's lower-cost Chilean brine operations and higher EBITDA margins.",
    thesis:"SQM at 10x operates the world's lowest-cost lithium brine operation in the Salar de Atacama with 25% EBITDA margins, while Albemarle at 25x has higher-cost hard rock operations alongside its Chilean brine JV, with 20% margins. Albemarle's premium reflects its US listing, larger Western institutional ownership, and Kings Mountain US project that qualifies for IRA benefits. SQM faces Chilean political risk (lithium nationalization debates) and a renegotiated Corfo agreement that increases royalties. Despite these risks, SQM's 60% valuation discount seems excessive given its structural cost advantages and comparable scale.",
  },
  {
    a:"FCX",aPE:15,b:"SCCO",bPE:22,
    title:"Both copper majors, Freeport cheaper with gold optionality",
    summary:"Freeport-McMoRan and Southern Copper are both top copper producers benefiting from the electrification megatrend, but FCX trades at 15x versus SCCO at 22x. Freeport's Grasberg mine also produces significant gold, adding a precious metals optionality that SCCO lacks.",
    thesis:"Freeport at 15x is cheaper than Southern Copper at 22x despite being the world's largest publicly traded copper producer with massive gold production from Grasberg as a bonus. SCCO commands a premium for its industry-leading 45% EBITDA margins, low-cost Mexican and Peruvian operations, and longest mine life among copper peers. FCX offers better value with gold optionality (Grasberg is one of the world's largest gold deposits) and higher copper production growth potential, but faces Indonesian political risk and lower margins (35% EBITDA). Both benefit from the EV copper demand thesis — the question is whether you pay up for SCCO's margin profile or buy FCX's cheaper valuation with gold upside.",
  },
];

export const SUPPLY_CHAIN_PAIRS = [
  // Lithium → Battery Cells (upstream to midstream)
  {supplier:'ALB',customer:'—',rel:'Lithium carbonate/hydroxide → CATL cell manufacturing',cat:'lithium-cells'},
  {supplier:'ALB',customer:'PCRFY',rel:'Lithium → Panasonic battery cells (Tesla Gigafactory)',cat:'lithium-cells'},
  {supplier:'SQM',customer:'—',rel:'Lithium → LG Energy Solution cell manufacturing',cat:'lithium-cells'},
  {supplier:'ALTM',customer:'TSLA',rel:'Lithium hydroxide → Tesla cell supply chain',cat:'lithium-cells'},
  {supplier:'PLL',customer:'TSLA',rel:'Spodumene offtake → Tesla battery supply',cat:'lithium-cells'},

  // Copper → EV wiring and manufacturing (upstream to downstream)
  {supplier:'FCX',customer:'APTV',rel:'Copper cathode → EV wiring harness manufacturing',cat:'copper-wiring'},
  {supplier:'FCX',customer:'TSLA',rel:'Copper → Tesla vehicle and Megapack manufacturing',cat:'copper-downstream'},
  {supplier:'SCCO',customer:'WIRE',rel:'Copper cathode → wire and cable manufacturing',cat:'copper-wiring'},
  {supplier:'SCCO',customer:'APTV',rel:'Copper → Aptiv wiring harness production',cat:'copper-wiring'},

  // Nickel/Minerals → Battery cathode (upstream to midstream)
  {supplier:'VALE',customer:'—',rel:'Battery-grade nickel → CATL NMC cathode production',cat:'minerals-cells'},
  {supplier:'BHP',customer:'—',rel:'Nickel sulfate → cell manufacturer cathode supply',cat:'minerals-cells'},
  {supplier:'MP',customer:'GM',rel:'Rare earth magnets → GM EV traction motors',cat:'minerals-downstream'},

  // Battery Cells → EV Assembly (midstream to downstream)
  {supplier:'PCRFY',customer:'TSLA',rel:'2170/4680 cells → Tesla Gigafactory assembly (exclusive partnership)',cat:'cells-downstream'},
  {supplier:'—',customer:'GM',rel:'LG Energy Ultium cells → GM EV platform assembly',cat:'cells-downstream'},
  {supplier:'—',customer:'F',rel:'SK On / BlueOval SK cells → Ford EV manufacturing',cat:'cells-downstream'},
  {supplier:'—',customer:'VWAGY',rel:'CATL cells → Volkswagen EV production',cat:'cells-downstream'},
  {supplier:'—',customer:'TSLA',rel:'CATL cells → Tesla Shanghai Gigafactory',cat:'cells-downstream'},
  {supplier:'—',customer:'BYDDY',rel:'CATL cells → BYD (also vertically integrated with own cells)',cat:'cells-downstream'},
  {supplier:'—',customer:'RIVN',rel:'Samsung SDI cells → Rivian vehicle production',cat:'cells-downstream'},
  {supplier:'—',customer:'TM',rel:'Panasonic/CATL cells → Toyota BEV production',cat:'cells-downstream'},

  // Cathode/Anode materials → Cell manufacturers (midstream internal)
  {supplier:'NVX',customer:'PCRFY',rel:'Synthetic graphite anode → Panasonic cell production',cat:'cathode-cells'},

  // EV OEMs → End demand (downstream to demand)
  {supplier:'TSLA',customer:'—',rel:'Tesla vehicles → consumer and fleet buyers',cat:'downstream-demand'},
  {supplier:'BYDDY',customer:'—',rel:'BYD vehicles → global consumers',cat:'downstream-demand'},
  {supplier:'RIVN',customer:'—',rel:'Rivian EDV delivery vans → Amazon fleet (100K order)',cat:'downstream-demand'},
  {supplier:'F',customer:'—',rel:'F-150 Lightning, E-Transit → fleet and consumer buyers',cat:'downstream-demand'},
  {supplier:'GM',customer:'—',rel:'BrightDrop, Silverado EV → fleet and consumer buyers',cat:'downstream-demand'},

  // Charging → End demand
  {supplier:'CHPT',customer:'—',rel:'ChargePoint network → fleet operators and commercial sites',cat:'charging-demand'},
  {supplier:'EVGO',customer:'—',rel:'EVgo DC fast charging → EV drivers and fleet operators',cat:'charging-demand'},

  // Wiring/Electronics → OEMs (upstream/midstream to downstream)
  {supplier:'APTV',customer:'F',rel:'Wiring harnesses and electronics → Ford vehicle assembly',cat:'wiring-downstream'},
  {supplier:'APTV',customer:'GM',rel:'Wiring harnesses and electronics → GM vehicle assembly',cat:'wiring-downstream'},
  {supplier:'APTV',customer:'VWAGY',rel:'Electrical architecture → Volkswagen vehicle production',cat:'wiring-downstream'},

  // Wire → Infrastructure
  {supplier:'WIRE',customer:'CHPT',rel:'Copper wire and cable → ChargePoint charging station installation',cat:'wire-charging'},
  {supplier:'WIRE',customer:'EVGO',rel:'Copper wire and cable → EVgo charging station buildout',cat:'wire-charging'},
];

const UI = {
  themeTitle: 'EV & battery investment theme exposure',
  themeDesc: 'The EV transition is reshaping the global auto industry while creating new supply chain chokepoints in critical minerals, battery chemistry, and cell manufacturing. Companies aligned with structural adoption trends and supply chain reshoring benefit from multi-decade tailwinds.',
  deadThemeWarning: 'FADING THEME — Market consensus has shifted away. Hydrogen fuel cells are losing to battery electric in passenger vehicles. Companies with primary FCEV exposure face shrinking addressable markets.',
  streamDesc: {
    upstream: 'Lithium, nickel, cobalt, copper, and rare earth miners that supply the raw materials for battery manufacturing. Commodity price cycles create boom-bust dynamics but structural demand growth is undeniable.',
    midstream: 'Battery cell manufacturers, cathode/anode material processors, and equipment makers. China dominates this tier with 75%+ of global capacity, creating the single largest geopolitical risk in the EV supply chain.',
    downstream: 'EV manufacturers (pure-play and legacy transitioning) and charging infrastructure providers. Profitability separates winners from cash-burning hopefuls.',
    demand: 'Consumer adoption, fleet electrification mandates, and ride-hail/delivery fleets. Regulatory ICE bans create a demand floor regardless of consumer sentiment.',
  },
  flowDesc: 'Critical minerals flow from mines through chemical processing and cell manufacturing into EV assembly. Charging infrastructure enables the end-use case. China controls the critical midstream chokepoint.',
  flowArrows: ['Lithium, nickel, cobalt, and copper feed into battery material processing','Cathode, anode, and cells are assembled into battery packs for EV manufacturers','Finished EVs reach consumers through dealers and fleet buyers, supported by charging networks'],
  ratioDesc: 'These ratios compare the median forward P/E of upstream miners and materials companies against midstream battery manufacturers, downstream EV OEMs, and end-demand drivers. Ratios below 1.0x suggest the upstream supply chain is underpriced relative to the vehicles it enables.',
  ratios: [
    {label:'Upstream / Downstream',num:'upstream',den:'downstream',desc:'Miners & materials vs EV OEMs and charging companies'},
    {label:'Upstream / Demand',num:'upstream',den:'demand',desc:'Miners & materials vs end-market demand drivers'},
    {label:'Midstream / Downstream',num:'midstream',den:'downstream',desc:'Battery cells, cathode/anode, and equipment vs EV manufacturers'},
    {label:'Midstream / Demand',num:'midstream',den:'demand',desc:'Battery supply chain vs end-market demand'},
  ],
};

export default {
  id: 'ev',
  name: 'Electric Vehicles',
  icon: '🔋',
  description: 'The electric vehicle and battery supply chain from critical mineral mining through cell manufacturing to vehicle assembly, charging infrastructure, and consumer adoption.',
  TIERS,
  TIER_COLORS,
  STREAM_COLORS,
  VALUATION_GAPS,
  SUPPLY_CHAIN_PAIRS,
  GTC_THEMES: EV_THEMES,
  UI,
};
