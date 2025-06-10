
 const productsData = {
    prod1: {
        name: "3D Printing & Printing Services",
        services: [
                "Design & Product Development - Industrial design",
                "Design & Product Development - 3D Data Utilization",
                "Design & Product Development - 3D Mapping",
                "Design & Product Development - Drawing & Document Management",
                "Design & Product Development - Engineering and part design",
                "Design & Product Development - PLM, CAD, CAM, CLE software",
                "Design & Product Development - Optimization Services",
                "Design & Product Development - Simulation & Simulators",
                "Design & Product Development - Digitizing of Components",
                "Design & Product Development - Intellectual property protection for technologies and software",
                "Design & Product Development - Virtual, Augmented & Mixed Realities",
                "Research & Development",
                "Materials - Metals, Polymers, Ceramics, Biomaterials, Additives, Binders",
                "Manufacturing preparation / pre-processing - Metal or Resin 3D Printers",
                "Manufacturing preparation / pre-processing - 3D Printing Outsourcing",
                "Manufacturing preparation / pre-processing - Material analysis and management software",
                "Manufacturing preparation / pre-processing - Material handling, storage & logistics",
                "Manufacturing preparation / pre-processing - Molding machine, tools",
                "Manufacturing preparation / pre-processing - Capacity planning software",
                "Solutions for additive manufacturing - Data preparation software and control software ",
                "Solutions for additive manufacturing - Vacuum casting machines and investment casting machines",
                "Solutions for additive manufacturing - Processing of fibre-reinforced materials",
                "Solutions for additive manufacturing - Powder bed fusion",
                "Solutions for additive manufacturing - Directed Energy Deposition",
                "Solutions for additive manufacturing - Material Extrusion",
                "Solutions for additive manufacturing - Binder and Material Jetting",
                "Solutions for additive manufacturing - Photopolymerization",
                "Solutions for additive manufacturing - Sheet lamination",
                "Solutions for component processing - CAM Software",
                "Solutions for component processing - Heat treatment",
                "Solutions for component processing - Solutions for Automated Production",
                "Solutions for component processing - Cutting tools and Accessories",
                "Solutions for component processing - Optimization and Production Processes",
                "Solutions for component processing - Process Simulation",
                "Solutions for component processing - Operation and Process Organizing Software (ERP, PPS, BDE)",
                "Solutions for component processing - Milling, Turning, Grinding",
                "Solutions for component processing - Electric Discharge Machining",
                "Solutions for component processing - Laser Material Processing",
                "Solutions for component processing - Water Jet Ablation",
                "Solutions for surface treatment  - Blasting",
                "Solutions for surface treatment  - Honing, Lapping, Polishing",
                "Solutions for surface treatment  - Laser Surface Treatment",
                "Solutions for surface treatment  - Coating, Varnishing",
                "Solutions for surface treatment  - Dyeing",
                "Quality Management / Metrology - Quality Assurance Software",
                "Quality Management / Metrology - Component and process qualification",
                "Quality Management / Metrology - Measurement and analysis software",
                "Quality Management / Metrology - 3D metrology or measurement",
                "Quality Management / Metrology - Production & Surface metrology",
                "Quality Management / Metrology - Process monitoring",
                "Quality Management / Metrology - Sensors and actuators",
                "Digitization / services / tool and die making - Digitization and software ",
                "Digitization / services / tool and die making - Data and IT security, protection of intellectual property",
                "Digitization / services / tool and die making - Industrial Tool and Die Making",
                "Digitization / services / tool and die making - Engineering",
                "Digitization / services / tool and die making - Production of components and assemblies",
                "Digitization / services / tool and die making - Pattern Making",
                "Digitization / services / tool and die making - Prototyping",
                "Digitization / services / tool and die making - Gauge- and fixture manufacturing",
                "Digitization / services / tool and die making - Try out and Component Testing",
                "Apprenticeship, Training and Qualification"
        ]
    },
    prod2: {
        name: "5G & Telecommunications",
        services: [
                "Billing / OSS / BSS",
                "Broadband Services",
                "Cabling",
                "Communication Equipment",
                "Converged / Unified Communications",
                "Data Centres",
                "Fixed Line Telecommunications",
                "Geospatial Solutions & Services",
                "IP Communications & Applications",
                "Marine Communication Equipment & Services",
                "Military Communication Equipment & Services",
                "Mobile Telecommunications & 5G",
                "PABX Equipment & Services",
                "Processing Systems",
                "Satellite & Distribution",
                "Service Providers",
                "Space Tech",
                "Telecommunication Integration & Equipment Services",
                "Video & Audio Conference Solutions",
                "Wireless"
        ]
    },
    prod3: {
        name: "AR/VR/MR & Gaming",
        services: [
                "3D Computer Graphics",
                "Accessories & Peripherals",
                "Animation",
                "Augmented Reality (AR)",
                "Console Gaming",
                "Gaming Laptops",
                "Motion & Gaze Measurement",
                "Mixed Reality (MR)",
                "Mobile & Online games",
                "PC Gaming",
                "Video, Gaming & Music",
                "Virtual Reality (VR)",
                "Web3 Applications"
        ]
    },
    prod4: {
        name: "AgriTech & FoodTech",
        services: [
                "Agri-Biometrics",
                "Agri-Data and Analytics",
                "Agricultural Machinery And Equipment",
                "Fertilizer and Fertilizer Technology",
                "Smart Farming and Connectivity",
                "Systems & Components to explore operation of mobile machinery",
                "Green Productivity ",
                "Aquaculture & Algae, Aquaponics",
                "Alternative Proteins",
                "Raw Materials and Operating Equipment",
                "Secondary Streams and Recycling",
                "Bioreactors",
                "New Food Systems",
                "Agriculture 4.0 (Crop Production and Livestock) ",
                "Food Designers",
                "Agricultural Marketplaces",
                "Rural Connectivity",
                "AI & Nutrition",
                "Adaptive Irrigation",
                "Aeroponics, Hydroponics",
                "Aquaculture novel technologies ",
                "Autonomous systems",
                "Biotechnology",
                "Cloud Solutions",
                "Clean label management",
                "Climate-Smart Agriculture",
                "Cultivated meat technologies and Genome editing",
                "Controlled environment systems",
                "Data Management",
                "Equipment for Vertical farming and Rooftop Farming",
                "Equipment for closed environment agriculture",
                "Digital control systems",
                "Food Losses & Waste",
                "Grow Lighting",
                "IoT",
                "Insect farming technologies",
                "Land-based aquaculture system",
                "Mechanization",
                "Organic Agriculture",
                "Plant-based food processing",
                "Personalized foods technologies",
                "Precision Agriculture",
                "Reformulation",
                "Soil Plant Health",
                "Saltwater Agriculture",
                "Supply Chain Management",
                "Renewable Energy",
                "UAV, Robotics & Drones",
                "Water Management"
        ]
    },
    prod5: {
        name: "Artificial Intelligence",
        services: [
                "AI-optimized Hardware",
                "Articulated Robots",
                "Autonomous Mobile Robots (AMRs)",
                "Autonomous Vehicles",
                "Chatbots / Virtual Assistant",
                "Cobots",
                "Cognitive computing",
                "Computer Vision",
                "Content Creation",
                "Data Extraction ",
                "Deep Learning Platforms",
                "Facial / Iris Recognition",
                "Humanoids & Humanoid Robots",
                "Machine Learning",
                "Natural Language Generation (NLG)",
                "Natural Language Processing (NLP)",
                "Neural Networks",
                "Optical character recognition (OCR) ",
                "Pattern Recognition ",
                "Planning and Optimization ",
                "Predictive APIs",
                "Real time translation",
                "Robotic Process Automation",
                "Speech Recognition",
                "Virtual Companions"
        ]
    },
    prod6: {
        name: "Big Data & Analytics",
        services: [
                "Analytics as a service",
                "Apache Kafka",
                "Apache Spark",
                "Applications",
                "Artificial Intelligence",
                "Business Intelligence",
                "Cloud Solutions",
                "Dashboard",
                "Data Analytics",
                "Data Architecture",
                "Data back-up",
                "Data Governance, Compliance & Security",
                "Data Infrastructure",
                "Data Integration",
                "Data Lake",
                "Data Management",
                "Data Mining",
                "Data Science",
                "Data Visualisation",
                "Data Warehouse",
                "DataOps",
                "Deep Learning  ",
                "Devops",
                "Digital Transformation",
                "Extract, transform, load - ETL",
                "Data Privacy / Protection",
                "Geo Data",
                "Geo-Spatial Data",
                "Hadoop",
                "IoT",
                "Machine Learning",
                "Mobile Technology",
                "Natural Language Processing - NLP",
                "NoSQL",
                "Open Source",
                "Operational Intelligence",
                "Python",
                "R Programming",
                "Real-Time Analytics",
                "Robotic Process Automation - RPA",
                "Social Media Data ",
                "Streaming Analytics",
                "Structured Data",
                "Structured Query Language - SQL ",
                "Text Analytics",
                "Unstructured Data ",
                "Virtualization",
                "Visual Analytics"
        ]
    },
    prod7: {
        name: "Blockchain",
        services: [
                "AR/VR/MR",
                "Artificial Intelligence",
                "Big Data / Digitization / Analytics",
                "Blockchain as a Service (BaaS)",
                "Cloud / IoT / Smart Cities",
                "Crypto Exchanges",
                "Crypto Trading / Investment",
                "Cryptocurrency/ ICOs/ STOs / Tokens",
                "Decentralised Finance",
                "Developer Tools / Platforms",
                "Digital Collectibles / NFTs",
                "Enterprise Software / Operating Systems",
                "Gaming",
                "Identity / Trust / Authentication",
                "Infrastructure and  Development",
                "Interoperability / System Integration",
                "Loyalty",
                "Metaverse",
                "Payments / Wallets / Exchange Gateways",
                "Research & Development",
                "Security / Cybersecurity",
                "Smart Contracts",
                "Supply Chain Solutions",
                "Telecoms & Mobility",
                "Training / Recruitment",
                "Web3 Applications"
        ]
    },
    prod8: {
        name: "Cloud Services",
        services: [
                "Analyst",
                "Analytics  ",
                "Applications including Development, Deployment & Design",
                "Big Data & Analytics",
                "Business Continuity, Back-up & Disaster Recovery ",
                "Cloud Management & Optimisation",
                "Cloud Management Platform",
                "Cloud Service Provider - CSP",
                "Colocation",
                "Consultancy",
                "Content Delivery & Management",
                "Cost Management & Optimisation",
                "Customer Relationship Management - CRM",
                "Cybersecurity",
                "Data as a Service - DAAS",
                "Desktop as a Service - DaaS",
                "DevOps ",
                "Edge, Fog",
                "Enterprise Resource Planning - ERP",
                "Governance & Compliance",
                "Hosting ",
                "High Performance Computing - HPC",
                "Hybrid",
                "Hyperscale Provider",
                "Infrastructure as a Service - IaaS",
                "Internet Service Provider - ISP",
                "IT Service Management - ITSM",
                "Managed Service Provider - MSP",
                "Migration",
                "Monitoring ",
                "Networks",
                "Open Source",
                "Outsource Development",
                "Platform as a Service - PaaS",
                "Print Management",
                "Private Cloud",
                "Professional Services",
                "Public Cloud",
                "Recruitment ",
                "Secure Access Service Edge - SASE",
                "Software as a Service - SaaS",
                "Software Defined Networking - SDN",
                "Storage",
                "Telecommunication  ",
                "Total Solution Provider",
                "Training or Recruitement",
                "Unified Communications",
                "Value Added Distributor - VAD or Value Added Reseller - VAR",
                "Virtualization",
                "Web Hosting",
                "Workload Management"
        ]
    },
    prod9: {
        name: "Coding and Development",
        services: [
                "Artificial Intelligence",
                "Backend Development",
                "Blockchain",
                "Cloud Computing",
                "Cloud Kubernetes",
                "Compilers",
                "Data Sciences",
                "Devops",
                "Embedded System Development",
                "Enterprise Applications",
                "Frontend Development",
                "Gaming",
                "Java",
                "Machine Learning",
                "Metaverse",
                "NFTs",
                "Operating Systems Development",
                "Python",
                "Quantum Computing",
                "Video Game Development",
                "Web Development"
        ]
    },
    prod10: {
        name: "Consumer Tech, Smart Home & Smart Workplace",
        services: [
                "Audio Systems & Equipment",
                "Automation & IoT",
                "Communication Equipment",
                "Computer and Mobile Hardware, Storage & Peripherals ",
                "Digital Imaging Equipment",
                "Electronic Components (Connection Devices, Electron Tubes, Etc)",
                "Electronic Equipment & Instruments (Barcode Readers, POS Machines, Etc)",
                "Headphones",
                "Healthcare Electronics",
                "Home Appliances",
                "Home Entertainment Solutions  / Integration Systems",
                "In-Vehicle Electronics",
                "Large Appliances",
                "Leisure, Health & Lifestyle Wearables",
                "Office Automation & Equipment",
                "Personal Care Applicances",
                "Power Banks",
                "Printing Solutions ",
                "Smart Appliances / Gadgets",
                "Smart Phones",
                "Smart Security",
                "Tablets / Laptops",
                "Telecommunication",
                "Video Systems & Equipment",
                "Wearables"
        ]
    },
    prod11: {
        name: "Creative Economy",
        services: [
                "Advertising",
                "Architecture",
                "Arts and crafts",
                "Design",
                "Fashion",
                "Film",
                "Video",
                "Photography",
                "Music",
                "Performing Arts",
                "Publishing",
                "Research and Development",
                "Software",
                "Computer Games",
                "Electronic Publishing",
                "TV/Radio"
        ]
    },
    prod12: {
        name: "Cyber security",
        services: [
                "Anti-spam, Anti-Malware & Anti-Virus & Email Security",
                "Application Control",
                "Application Integration & Infrastructure",
                "Application Security, Testing & Control",
                "Applied Security",
                "Authentication User, Biometric Authentication and PKI",
                "Business Continuity & Disaster Recovery Planning",
                "Cloud Security",
                "Cryptography",
                "Data Governance, Risk & Compliance",
                "Digital Forensics & Incident Response",
                "Endpoint Protection & Mobile Security",
                "Internet of Things (IoT) Security",
                "Intrusion Detection & Penetration Testing",
                "Legal, Regulations, Investigations & Compliance",
                "Network & Infrastructure Security",
                "Operations Security",
                "Phishing",
                "Ransomware",
                "Security Architecture & Design",
                "Security Credentials",
                "Software Development Security",
                "Telecommunication & Network Security"
        ]
    },
    prod13: {
        name: "Data Centres",
        services: [
                "Data Analytics & Automation",
                "Data Building & Verification",
                "Data Management Solutions",
                "Data Warehousing",
                "Cabinets and Enclosures",
                "Cabling",
                "Co-location",
                "Compliance & Risk Management",
                "Computational Fluid Dynamics",
                "Connectivity",
                "Consultancy",
                "Cooling",
                "Critical Power",
                "Data Centre Infrastructure Management",
                "Data Centre Next Generation",
                "DC Life Cycle Analysis",
                "Disaster Recovery",
                "Edge Solutions",
                "Energy Efficiency",
                "Facilities Management",
                "Fire Prevention",
                "Fuel & Oil Solutions",
                "Heating & Ventilation",
                "Innovation Data Centre Design ",
                "Micro Data Centres",
                "Power Distribution",
                "Power Generation",
                "Power Management",
                "Renewable Energy",
                "Security - Data & Virtual",
                "Security - Physical",
                "Servers & Hardware",
                "Training",
                "Transportation",
                "Uninterrupted Power Supply"
        ]
    },
    prod14: {
        name: "Digital Finance",
        services: [
                "Artificial Intelligence",
                "Auditing Solutions",
                "Banking Solutions",
                "Blockchain & DLT Solutions",
                "Business Continuity & Disaster Recovery",
                "Card Issuance and Management",
                "Cloud Solutions - Private and Public",
                "Core Banking Solutions",
                "Data Centres",
                "Digital Lending",
                "Digital Payment",
                "E-Payment Solutions",
                "E-Wallets",
                "E-Commerce Solutions",
                "Education & Training",
                "Forex Software",
                "Insurance Solutions",
                "IoT Based Applications",
                "Online Trading Software",
                "Payment Gateways",
                "POS Machines & Payment Solutions",
                "Robotic Process Automation",
                "Taxation Solutions",
                "Threat Management Solutions",
                "Transactional Platforms",
                "Wealth Management Software",
                "Asset Management / Personal Finance / Wealth Management",
                "Big Data / Digitisation / Analytics",
                "Billing / Invoicing Software",
                "Card Service Card",
                "Crowd Funding",
                "Data Analytics / Big Data / IoT",
                "Data Storage / Cloud / Smart Cities",
                "Developer Tools / Platforms",
                "E-KYC",
                "Emerging Tech",
                "Enterprise Software / Operating Systems",
                "Fund Raising and Investment",
                "Identity / Trust / Authentication",
                "Insurtech",
                "Interoperability / System Integration",
                "Islamic Fintech / Shariya Compliant",
                "Lending / P2P Lending",
                "Loyalty",
                "Open Banking / API",
                "Payments / Wallets / Exchange Gateways",
                "RegTech / Audit / Regulatory Compliance",
                "Research & Development"
        ]
    },
    prod15: {
        name: "Ecommerce",
        services: [
                "Risk & Fraud Management",
                "Security / Cybersecurity",
                "Smart Contracts",
                "Supply Chain Solutions",
                "Telecoms & Mobility",
                "Training / Recruitment",
                "Web3 Applications",
                "eCommerce Software",
                "eLogistics",
                "ERP / Business Management",
                "Platforms ",
                "Web App, Design and Development"
        ]
    },
    prod16: {
        name: "Education Tech",
        services: [
                "Animation & Simulation",
                "Artificial Intelligence & IOT ",
                "Assessment and testing",
                "Audio Visual Equipment & Resources",
                "Blended learning   ",
                "Certification & Licensing",
                "Coaching and mentoring ",
                "Collaborative learning and technology",
                "Complete School Setup Solution  ",
                "Content development and design ",
                "Content libraries",
                "Didactics System & Pneumatics",
                "EdTech & Smart Classroom Solution",
                "Educational Loan & Financial Services",
                "Educational Support & Other Service",
                "Educational Tour Organizer",
                "Enterprise Solutions / ERP / CRM",
                "Game Based Learning Programs & Simulations",
                "Hardware Resources  ",
                "HR systems and services",
                "ICT / Digital Language Lab",
                " Immersive technologies - Virtual, Augmented, Mixed Realities - VR, AR, MR",
                "Institute Marketing & Branding Services   ",
                "Interactive Boards / Touch Panels",
                "Laboratory & Scientific Equipment",
                "Learning Improvement Tech & Devices    ",
                "Learning management infrastructure, methods and systems",
                "Learning strategy",
                "Publishing & E-Content / Digital Library   ",
                "Managed services and outsourcing ",
                "Management and business skills ",
                "Mobile learning solutions ",
                "Organisational strategy and development ",
                "Performance management ",
                "Performance support systems ",
                "Presentation equipment",
                "School Supplies & Educational Aid",
                "Security & Safety Devices",
                "Smart Class Room Solution",
                "Specialist learning systems",
                "Sports Goods & Sports Wear",
                "Sporting Infrastructure",
                "STEAM Education & Robotics",
                "Talent and human capital management",
                "Training centre resources ",
                "Transport – School Bus/ Logistics",
                "Training materials ",
                "Translation services",
                "Video for learning",
                "Virtual classroom technology and services",
                "Vocational Training – Software & Hardware"
        ]
    },
    prod17: {
        name: "Energy Tech",
        services: [
                "Bioenergy",
                "Carbon Management & Storage - CSS",
                "Components for Equipment for Energy Storage Systems",
                "Government Regulators & Utlities",
                "Energy Storage Services",
                "Energy Storage Systems",
                "Energy Storage Technologies",
                "Geothermal Energy",
                "Hydrogen",
                "Hydropower",
                "Nuclear Energy",
                "Oil & Gas",
                "Smart Grids",
                "Solar Energy",
                "Waste to Energy",
                "Wind Energy",
                "Independent Power Producers, Developers and EPCs"
        ]
    },
    prod18: {
        name: "Future Mobility & Transportation",
        services: [
                "Autonomous Vehicles / Systems",
                "Bus Technology",
                "Last Mile ",
                "Fleet Management",
                "Truck Technology",
                "Micromobility & E-Mobility",
                "Payments & Ticketing",
                "Revenue Management",
                "Drive Systems - HV/ EV Drive Systems",
                "Drive Systems - In-Wheel Motor Systems",
                "Connectors, Harnesses - In-Vehicle Connectors",
                "Connectors, Harnesses - Charging Connectors",
                "Wire Harnesses",
                "Diodes, Thyristors, Triacs",
                "IGBTs",
                "GTOs",
                "SIC Devices",
                "MOSFETs",
                "Passive Elements - Condensers",
                "Passive Elements -Resistors",
                "ADAS or Advanced Driver Assistance Systems Radar",
                "ADAS  or Advanced Driver Assistance Systems LIDAR",
                "ADAS  or Advanced Driver Assistance Systems Sonar",
                "ADAS  or Advanced Driver Assistance Systems Camera System",
                "ADAS  or Advanced Driver Assistance Systems ECU",
                "Batteries - Lithium Ion Batteries",
                "Batteries - Lead Acid Batteries",
                "Batteries - Lithium Polymer Batteries",
                "Batteries - NaS Batteries",
                "Electric Vehicle OEMs (Passenger)",
                "Electric Vehicle OEMs (Public & Fleet: Bus/ Trucks)",
                "Electrification Infrastructure Solution",
                "5G & Connectivity",
                "Smart & Connected Parking",
                "Data, IoT, Ai,  RFID, Embedded Systems",
                "ICT, Network Communications, Cloud",
                "Mobility As A Service - Maas",
                "Alternative Fuels & Hydrogen",
                "Intelligent Transportation Solutions (ITS)",
                "Public Safety & Security",
                "Smart Ports (Sea & Air)",
                "Fleet & Logistics Solutions",
                "Batteries - Thin Film Lithium Ion Batteries",
                "Batteries - Secondary Air Batteries, Nicket Metal Hydride Batteries - NIMH",
                "Batteries - Capacitors, Condensers",
                "Batteries - Nicad Batteries",
                "Batteries - Battery Manufacturing Technologies",
                "Batteries - Components & Materials for Batteries",
                "Chargers - Battery Swap Technologies",
                "Chargers - Contactless Charging Technologies",
                "Chargers - EV Quick Chargers",
                "Motor Design Software",
                "Cooling Devices",
                "Heat Dissipation & Resistance Technologies",
                "Sensors",
                "Control Modules & Software",
                "Microcontrollers & Driver Ics",
                "V-Commerce & Dealer Commerce",
                "Connected Mobility Solutions",
                "Sensors, Radars & Cameras",
                "Smart Grids & Metering",
                "Telematics & Connected Vehciles"
        ]
    },
    prod19: {
        name: "Gaming",
        services: [
                "Animation",
                "Cloud Gaming",
                "Console Gaming",
                "Game Design / Creation",
                "Game Publishing",
                "Game Testing",
                "Gaming Equipment",
                "Gaming Services",
                "Marketing / Advertising",
                "Metaverse",
                "Mobile Gaming",
                "PC Gaming",
                "Production"
        ]
    },
    prod20: {
        name: "HealthTech",
        services: [
                "3D Print Visualisation, Analysis",
                "3D Printers, Simulators",
                "3G, 4G, 5G, Wi-Fi",
                "Air Processing, Purification, Disinfection Systems",
                "App Providers",
                "Artificial Intelligence",
                "Associations, Institutions, Societies",
                "Big Data",
                "Biopsy Tracking Systems",
                "Blood Pressure Monitors",
                "Calorimeters",
                "Vestibular Sensory Systems",
                "Colorimeter, Light Measuring Devices",
                "Cybersecurity, Virus Protection, Intrusion Protection, Anti-Spa, Firewalls",
                "Data Governance",
                "Data Security",
                "Data Storage Solutions",
                "Diagnostic Software and Medical Imaging",
                "Digital Counselling",
                "Digital / Product Distribution",
                "Document Management",
                "eHealth, Telemedicine, Telematics, Telemetry",
                "eDischarge",
                "Education, Training, Quality Management",
                "Electronic Medical Record, Electronic Health Record Systems",
                "Enterprise Informatics",
                "Enterprise Resource Planning Systems - ERP",
                "ePrescribing, Pharma Management",
                "Handhelds, Laptops, PCs, Printers, Monitors, Screens",
                "Healthcare Authorities",
                "Healthcare Information Systems, Software (HIS)",
                "Hearing Aids, Accessories, Batteries",
                "Integration, Interoperability",
                "Lab Automation System",
                "Laboratory Information Management Systems",
                "mHealth, mobile IT, Wireless Technologies (Bluetooth, Wi-Fi)",
                "Opensource",
                "Predictive Analytics",
                "Product Intelligence",
                "Real time Analytics",
                "Research & Development",
                "Robotics and AI in Healthcare",
                "Telemedicine",
                "Tracking systems (RFID, RTLS)",
                "Workflow Software",
                "Web, Internet Solutions",
                "Wearable Technologies, Smart Textiles",
                "VoIP Solutions",
                "Healthcare Analytics",
                "mHealth Applications",
                "Personal Health Record Systems",
                "Pharmacy Automation and Management Systems",
                "Clinical Decision Support Systems ",
                "Genomics and Personalized Medicine Technologies",
                "Blockchain for Healthcare",
                "Virtual Reality and Augmented Reality in Healthcare",
                "Patient Engagement and Experience Platforms",
                "Remote Patient Monitoring Tools",
                "Genomics and Precision Medicine",
                "Insurance and Cost Assistance Services"
        ]
    },
    prod21: {
        name: "Incubator/Accelerator/Investment",
        services: []
    },
    prod22: {
        name: "Internet of Things (IOT)",
        services: [
                "Application Development",
                "Artificial Intelligence",
                "Augmented Reality",
                "Cloud Services",
                "Connectivity Modules, Data Analytics",
                "Data Science",
                "Industrial IoT",
                "IoT Solutions",
                "M2M Solutions",
                "Supervisory Control and Data Acquisition (SCADA)",
                "Network Management and Optimization",
                "Platform Solutions",
                "Robotics",
                "RFID, Security",
                "Sensors, Smart lighting",
                "Telecommunications",
                "Telemetry",
                "Video Analytics",
                "Virtual Reality",
                "Wearables"
        ]
    },
    prod23: {
        name: "Media, Marketing & Advertising Tech",
        services: [
                "AdTech",
                "Ad Trading",
                "Artificial Intelligence",
                "Audio, Pod Casts & Video Marketing",
                "Automation  ",
                "Branding & Design",
                "Brand Safety",
                "Broadcasting",
                "Chatbots & RPA",
                "Content Creation",
                "Content Marketing",
                "Creativity & Design",
                "Creator Economy & Influencer Marketing",
                "Customer Relationship & Experience Management - CRM & CEM",
                "Data Analytics",
                "Digital Asset Management",
                "Digital Marketing",
                "Distribution",
                "Email Marketing",
                "Equipment / Hardware",
                "Event Management",
                "Gaming ",
                "Influencer Marketing",
                "Interactive Marketing",
                "Marketing Automation",
                "MarTech Training",
                "Media Publishing",
                "Out of Home - OOH",
                "OTT",
                "Performance Marketing",
                "Personalization",
                "Post Production",
                "Production",
                "Public Relations & Communications",
                "Radio Marketing",
                "Social Media Management & Monitoring",
                "Sports",
                "Studio",
                "Sustainability & Green Economy",
                "Tracking & Targeting (CDP, CPP)",
                "UX & UI"
        ]
    },
    prod24: {
        name: "Mobile Accessories & Peripherals",
        services: [
                "Devices - Smart Phones",
                "Devices -Tablets",
                "Devices -Portable Media Players ",
                "Devices -Digital Audio Player",
                "Accessories - Power Banks",
                "Accessories - Chargers",
                "Accessories - Data Cables",
                "Accessories - AUX cables / OTG Cable",
                "Accessories - Batteries",
                "Accessories - Headphones / earphones",
                "Accessories - Memory cards",
                "Accessories - Cases & Covers",
                "Accessories - Tempered glasses",
                "Accessories - Repair equipment, materials & services",
                "Accessories - Mifi Products",
                "Accessories - Bluetooth speakers",
                "Accessories - Car Accessories",
                "Wearables - Smart watches",
                "Wearables - Sport & health wearables",
                "Wearables - Wearables electronics",
                "USB Gadgets - USB storage devices",
                "USB Gadgets - Card readers",
                "USB Gadgets - USB chargers"
        ]
    },
    prod25: {
        name: "Networking & Infrastructure",
        services: [
                "Routers",
                "Switches",
                "Hubs",
                "Repeaters",
                "Gateways",
                "Bridges",
                "Modems",
                "Monitoring & Management Tools",
                "Operating Systems",
                "Physical Servers",
                "Firewalls",
                "Load Balancers",
                "Intrusion Detection Systems",
                "Domain Name Systems",
                "Storage Area Networks",
                "Data Management Technology",
                "Storage Facilities",
                "Enterprise Software Application",
                "Telecommunication Platforms",
                "Consulting System & Integration Services"
        ]
    },
    prod26: {
        name: "PropTech",
        services: [
                "PMS",
                "CRM",
                "Listings & Brokerage Tech",
                "Digital Marketing",
                "AI & IoT",
                "Data & Analytics",
                "3D/ AR / VR",
                "Surveying & Mapping",
                "Marketplaces",
                "Lending & Mortgage Tech",
                "Legal Tech",
                "Tenant Experience",
                "Construction Tech",
                "Smart Homes & Buildings",
                "Process Mapping & Modeling"
        ]
    },
    prod27: {
        name: "Quantum & High Performance Computing",
        services: [
                "Analytics - Hardware",
                "Academic Institutions",
                "R&D Labs",
                "Analytics - Services",
                "Applications/Services with Quantum Computers",
                "Cloud - Hardware",
                "Cloud - Services",
                "Data Management - Hardware",
                "Data Management - Services",
                "Data Science - Hardware",
                "Data Science - Services",
                "Energy - Hardware",
                "Energy - Services",
                "GRID - Hardware",
                "GRID - Services",
                "Hardware Builders",
                "Software & Algorithm Developers",
                "Heterogeneous Computing-Hardware",
                "Heterogeneous Computing- Services",
                "Interconnects",
                "Middleware",
                "Networking - Hardware",
                "Networking - Services",
                "Power - Hardware",
                "Power - Services",
                "Processors",
                "Server - Hardware",
                "Server - Services",
                "Storage - Hardware",
                "Storage - Services",
                "Visualization - Hardware",
                "Visualization - Services"
        ]
    },
    prod28: {
        name: "Regulatory Technology",
        services: [
                "nan"
        ]
    },
    prod29: {
        name: "Retail Tech",
        services: [
                "Sustainable Technology",
                "Customer Experience & Retention - AI & Machine Learning ",
                "Customer Experience & Retention - Augmented reality/Virtual Reality",
                "Customer Experience & Retention - Chatbots",
                "Customer Experience & Retention - CRM Systems",
                "Customer Experience & Retention - Customer Contact Centres ",
                "Customer Experience & Retention - XR and Metaverse for Immersive Shopping",
                "Customer Experience & Retention - Beacon Networks",
                "Customer Experience & Retention - Loyalty Programmes",
                "Customer Experience & Retention -Robotics & Humanoids",
                "Data & Analytics - Audience Management ",
                "Data & Analytics - Data Warehouse/Decision Support",
                "Data & Analytics - Price Tracking, Conversion Tools & Analytics",
                "Data & Analytics - Big Data Analytics & Insights",
                "Data & Analytics - Sensory Trackers",
                "Data & Analytics - Business Intelligence",
                "Digital Signage - AV Specialists",
                "Digital Signage - Content Creators",
                "Digital Signage - Digital Menu Boards ",
                "Digital Signage - Holograms & Mixed Reality",
                "Digital Signage - DOOH/Outdoor Signage",
                "Digital Signage - Infotainment",
                "Digital Signage - In-store Advertising ",
                "Digital Signage - Integrator",
                "Digital Signage - LED Signage",
                "Digital Signage - Maintenance",
                "Digital Signage - Media Players",
                "Digital Signage - Digital Signage Kiosks",
                "Digital Signage - Networks & Connectivity",
                "Digital Signage - Projectors",
                "Digital Signage - Proximity Sensors",
                "Digital Signage - Screen Manufacturer",
                "Digital Signage - Totems",
                "Digital Signage - Video Walls",
                "Digital Signage - Wayfinding Solutions",
                "E-commerce & M-commerce - Content Management Systems ",
                "E-commerce & M-commerce - Mobile Commerce ",
                "E-commerce & M-commerce - Click & Collect Solutions ",
                "E-commerce & M-commerce - Digital Shopper Analytics & Engagement ",
                "E-commerce & M-commerce - E-Commerce Platforms",
                "E-commerce & M-commerce - Mobile Store & Warehouse Solutions",
                "E-commerce & M-commerce - Product Search & Discovery ",
                "E-commerce & M-commerce - Multi-Channel Solutions ",
                "E-commerce & M-commerce - Facial Recognition ",
                "E-commerce & M-commerce - Social Commerce ",
                "E-commerce & M-commerce - User Experience & UX Design ",
                "Employee Management - E-Learning ",
                "Employee Management - HR Management",
                "Employee Management - Task Management Systems",
                "Employee Management - Workforce Management ",
                "Employee Management - Labour Scheduling ",
                "Fraud Prevention & Loss - Analytics Software ",
                "Fraud Prevention & Loss - CCTV ",
                "Fraud Prevention & Loss - In-store Software",
                "Fraud Prevention & Loss - Online Software ",
                "Fraud Prevention & Loss - Security Compliance & Tagging",
                "Merchandise Planning & Inventory Management - Forecasting",
                "Merchandise Planning & Inventory Management - Merchandise Management & Master Data Management ",
                "Merchandise Planning & Inventory Management - Merchandise, Content & Assortment Planning ",
                "Merchandise Planning & Inventory Management - Inventory Management ",
                "Merchandise Planning & Inventory Management - Space Management/Planograms & Visual Merchandising",
                "Merchandise Planning & Inventory Management - Product Lifecycle Management ",
                "Merchandise Planning & Inventory Management - Smart Labels",
                "Merchandise Planning & Inventory Management - Electronic Data Interchange or EDI",
                "Payments - Cash Management",
                "Payments - Omnichannel Payments",
                "Payments - EFT Terminals & Software",
                "Payments - POS Payments",
                "Payments - Smart Cards & Readers",
                "Store Operations - Automation",
                "Store Operations - Labelling & Ticketing Software ",
                "Store Operations - Queuing Management ",
                "Store Operations - Scanners/ Hand-Held Terminals ",
                "Supply Chain & Logistics - Delivery & Returns, inc. Final Mile ",
                "Supply Chain & Logistics - ERP",
                "Supply Chain & Logistics - Automation",
                "Supply Chain & Logistics - Robotic Fulfilment"
        ]
    },
    prod30: {
        name: "Smart Cities",
        services: [
                "ICT",
                "Mobility & Transport",
                "Digital Health Solutions",
                "Education Technology Solutions",
                "Architecture - Design & Planning",
                "Safety & Security Solutions",
                "Building Services, Management & Consulting",
                "Building Technology & Innovation",
                "Building Integrated PV - BIPV",
                "Cooling & Heating",
                "Efficient Lighting ",
                "Low-Emission & Electric Vehicles",
                "Facilities Management",
                "Smart Building & Infrastructure & Materials",
                "Smart Services ",
                "Smart Digitial IoT Technology ",
                "Smart Hardware Technology - Robotics",
                "Transport Infrastructure",
                "Urban Planning Developers, Consultancy & Project Management",
                "Government Authorities & Municipalities",
                "Photovoltaic Cells & Modules",
                "PV Components (Cables, Connectors",
                "PV Inverters",
                "PV Mounting Systems",
                "Rooftop Solar PV Systems",
                "PV Tracking Systems   "
        ]
    },
    prod31: {
        name: "Smart Manufacturing",
        services: [
                "Robotics",
                "Factory Automation ",
                "Industrial 3D Printing ",
                "Additive Manufacturing",
                "Industrial IoT (IIoT) & Connectivity",
                "Digital Twin & Simulation",
                "Intelligent Supply Chain",
                "Warehousing ",
                "Materials Handling",
                "Energy Management & Sustainability",
                "Cloud, AI & Machine Learning",
                "Industrial Software & Process Optimization",
                "Virtual Reality / Augmented Reality"
        ]
    },
    prod32: {
        name: "Software Services",
        services: [
                "Application integration and infrastructure",
                "Business Intelligence Solutions",
                "Business Process Management",
                "CRM (Customer Relationship Management) Software",
                "Data Analytics & Automation",
                "Digital Imaging",
                "ERP (Enterprise Resource Planning) Software",
                "Finance & Accounting Software",
                "HR Tech",
                "Mobile Applications",
                "Mobility Enterprise Solutions",
                "Procurement Software",
                "VOIP Solutions"
        ]
    },
    prod33: {
        name: "Space Tech",
        services: [
                "nan"
        ]
    },
    prod34: {
        name: "Sustainability & Green Climate - Tech",
        services: [
                "Air Quality & Pollution",
                "Biodiversity & Ecosystem Preservation",
                "Resilient Infrastructure",
                "Food & Agriculture ",
                "Instrumentation, Meteorology & Analysis",
                "Polluted Sites & Soils",
                "Sustainable Finance",
                "Decarbonisation Solutions & Technologies",
                "Trade & Industry Associations",
                "Government Authorities & Environment Agencies",
                "ESG Business Services - Legal",
                "ESG Business Services - Reporting Tools",
                "ESG Business Services - Advisory",
                "ESG Business Services - Audit",
                "ESG Business Services - Platform",
                "Environmental Solutions - Solar",
                "Environmental Solutions - Waste to Energy",
                "Environmental Solutions - Wind",
                "Environmental Solutions - Water ",
                "Food & Agriculture - Food Agri B2B",
                "Food & Agriculture - Food Production B2C ",
                "Food & Agriculture - Food & Water Processing ",
                "Food & Agriculture - Food transport & Delivery",
                "Energy Transition - Energy Production",
                "Energy Transition - Energy Storage",
                "Energy Transition - Energy Access",
                "Energy Transition - Usage Efficiency",
                "Energy Transition - Smart Grid",
                "Mobility & Urbanization - Electrification",
                "Mobility & Urbanization - Shared Mobility",
                "Mobility & Urbanization - Autonomous Transportation",
                "Mobility & Urbanization - Green Buildings",
                "Sustainable Systems - Carbon Tech",
                "Sustainable Systems - Carbon Capture",
                "Sustainable Systems - Carbon Storage",
                "Sustainable Systems - Carbon Utilization",
                "Sustainable Systems - Carbon Fintech",
                "Sustainable Systems - Carbon Marketplace & Offset",
                "Sustainable Systems - Climate Intelligence",
                "Sustainable Systems - Processing",
                "Sustainable Systems - Recycling"
        ]
    },
    prod35: {
        name: "Unmanned Aerial Vehicles (Drones)",
        services: [
                "nan"
        ]
    },
    prod35: {
        name: "Incubator/Accelerator/Investment",
        services: [
                "nan"
        ]
    },
};

        // Set maximum limits
        const MAX_PRODUCTS = 5;
        const MAX_SERVICES_PER_PRODUCT = 2;
        const MIN_PRODUCTS = 1;
        const MIN_SERVICES_PER_PRODUCT = 1;

        // Store which form is currently active
        let activeFormElement = null;

        // Store selections for each form
        let formSelections = {};

        // Update the service count for a specific product
        function updateServiceCount(productId) {
            if (!activeFormElement) return;

            const formId = activeFormElement.attr('id');
            if (!formSelections[formId] || !formSelections[formId][productId]) return;

            const product = productsData[productId];
            const selectedServiceCount = formSelections[formId][productId].services.length;
            const totalServiceCount = product.services.length;

            const $productHeader = $('#subitemsList li').filter(function () {
                return $(this).text().trim().startsWith(product.name);
            });

            if ($productHeader.length > 0 && totalServiceCount > 0) {
                const serviceCountText = ` (${selectedServiceCount}/${totalServiceCount} services selected`;
                let headerText = $productHeader.html().split('<small')[0].trim(); // Get text before existing small tag
                $productHeader.html(`
                    ${headerText}
                    <small class="text-muted">${serviceCountText}</small>
                `);
            }
        }

        // Initialize everything when document is ready
        $(document).ready(function () {
            // Assign IDs to each form if they don't have one
            $('.attendee-form').each(function (index) {
                if (!$(this).attr('id')) {
                    $(this).attr('id', 'attendee-form-' + index);
                }
            });

            // Generate the products list dynamically
            generateProductsList();

            $(document).on('click', '.solution-btn', function () {
                activeFormElement = $(this).closest('.attendee-form');
                const formId = activeFormElement.attr('id');
                if (!formSelections[formId]) {
                    formSelections[formId] = {};
                }
                resetModal();
                updateModalWithFormSelections(formId);
            });

            // Product checkbox change handler
            // Product checkbox change handler
            $(document).on('change', '.category-checkbox', function () {
                if (!activeFormElement) return;

                const formId = activeFormElement.attr('id');
                const productId = $(this).val();
                const isChecked = $(this).prop('checked');

                if (isChecked) {
                    const currentTotalSelections = getTotalSelections(formSelections[formId]);
                    if (currentTotalSelections >= MAX_PRODUCTS) {
                        $(this).prop('checked', false);
                        showValidationMessage(`You can only select a total of ${MAX_PRODUCTS} items.`);
                        return;
                    } else {
                        clearValidationMessage();
                    }
                    formSelections[formId][productId] = {
                        name: productsData[productId].name,
                        services: []
                    };
                    $(this).closest('li').addClass('selected-product');
                } else {
                    delete formSelections[formId][productId];
                    $(this).closest('li').removeClass('selected-product');
                }
                updateServicesList();
                updateModalTags();
                updateApplyButton();
            });

            // Service checkbox change handler
            $(document).on('change', '.service-checkbox', function () {
                if (!activeFormElement) return;

                const formId = activeFormElement.attr('id');
                const productId = $(this).data('product');
                const serviceName = $(this).data('service-name');
                const isChecked = $(this).prop('checked');

                if (!formSelections[formId] || !formSelections[formId][productId]) return;

                if (isChecked) {
                    const currentTotalSelections = getTotalSelections(formSelections[formId]);
                        if (currentTotalSelections >= MAX_PRODUCTS) {
                            $(this).prop('checked', false);
                            showValidationMessage(`You can only select a total of ${MAX_PRODUCTS} items.`);
                            return;
                        } else {
                            clearValidationMessage();
                        }
                    if (!formSelections[formId][productId].services.includes(serviceName)) {
                        formSelections[formId][productId].services.push(serviceName);
                    }
                    $(this).closest('li').addClass('selected-service');
                } else {
                    const index = formSelections[formId][productId].services.indexOf(serviceName);
                    if (index > -1) {
                        formSelections[formId][productId].services.splice(index, 1);
                    }
                    $(this).closest('li').removeClass('selected-service');
                }
                updateServiceCount(productId);
                updateModalTags();
            });

                    function showValidationMessage(message) {
                        $('#validationMessage').text(message).show();
                    }

                    function clearValidationMessage() {
                        $('#validationMessage').text('').hide();
                    }


                    function getTotalSelections(selections) {
    let total = 0;
    for (const productId in selections) {
        total += 1; // 1 for the product
        total += selections[productId].services.length; // Add all its services
    }
    return total;
}

            // Search functionality for solutions modal
            $(document).on('input', '#searchInput', function () {
                const searchText = $(this).val().toLowerCase();
                $('#categoriesList li').each(function () {
                    const productText = $(this).text().toLowerCase();
                    $(this).toggle(productText.includes(searchText));
                });
            });
            



            // Apply button click handler
            $(document).on('click', '#applyBtn', function () {
                if (!activeFormElement) return;

                const formId = activeFormElement.attr('id');

                // Check if minimum product requirement is met
                if (Object.keys(formSelections[formId]).length < MIN_PRODUCTS) {
                    alert(`You must select at least ${MIN_PRODUCTS} product.`);
                    return;
                }

                // Check if at least one service is selected for each product with services
                let servicesValid = true;
                let productWithMissingServices = '';

                for (const productId in formSelections[formId]) {
                    const product = formSelections[formId][productId];
                    // Only check if product has services and none are selected
                    if (productsData[productId].services.length > 0 &&
                        product.services.length < MIN_SERVICES_PER_PRODUCT) {
                        servicesValid = false;
                        productWithMissingServices = product.name;
                        break;
                    }
                }

                if (!servicesValid) {
                    showValidationMessage(`You must select at least ${MIN_SERVICES_PER_PRODUCT} Service .`);
                    return;
                } else {
                    clearValidationMessage();
                }

                // Update the form with current selections
                updateFormDisplay(formId);

                // Close the modal
                $('#solutionsModal').modal('hide');
            });


            // Remove tag on form (after apply)
            $(document).on('click', '.remove-tag', function () {
                const form = $(this).closest('.attendee-form');
                const formId = form.attr('id');
                const tagType = $(this).data('type');
                const productId = $(this).data('product');
                const serviceName = $(this).data('service');

                if (!formSelections[formId]) return;

                if (tagType === 'product') {
                    delete formSelections[formId][productId];
                } else if (tagType === 'service') {
                    const index = formSelections[formId][productId].services.indexOf(serviceName);
                    if (index > -1) {
                        formSelections[formId][productId].services.splice(index, 1);
                    }
                }
                updateFormDisplay(formId);
            });





            // Listen for input and change events on all form controls within attendee forms
            // This makes errors appear/disappear as user types/selects
            $(document).on('input change', '.attendee-form .form-control, .attendee-form .phone-number',
                function (e) {
                    const input = $(this);
                    // Clear error if input has content (for text/email/tel)
                    if (input.val().trim() !== '') {
                        input.removeClass('is-invalid');
                        input.nextAll('.invalid-feedback').first().css('display', 'none');
                    } else if (input.is('select') && input.val() !== '') {
                        // For select elements, if a value is selected
                        input.removeClass('is-invalid');
                        input.nextAll('.invalid-feedback').first().css('display', 'none');
                    }
                    // Specific handling for phone number input blur
                    if (input.hasClass('phone-number')) {
                        const iti = window.intlTelInputGlobals.getInstance(input[0]);
                        if (iti && iti.isValidNumber()) {
                            input.removeClass('is-invalid');
                            input.nextAll('.invalid-feedback').first().css('display', 'none');
                        }
                    }
                });





            // Add specific blur validation for email and confirm email
            $(document).on('blur', 'input[name="emailid"], input[name="Confirmemail"]', function () {
                const input = $(this);
                const formElement = input.closest('.attendee-form');
                const attendeeIndex = formElement.attr('id').split('-')[2];

                const emailInput = formElement.find(`#emailid_${attendeeIndex}`);
                const confirmEmailInput = formElement.find(`#Confirmemail_${attendeeIndex}`);

                // Email format validation
                if (input.attr('name') === 'emailid') {
                    if (emailInput.val().trim() && !/\S+@\S+\.\S+/.test(emailInput.val())) {
                        emailInput.addClass('is-invalid');
                        emailInput.next('.invalid-feedback').text('Please enter a valid email address.')
                            .css('display', 'block');
                    } else {
                        emailInput.removeClass('is-invalid');
                        emailInput.next('.invalid-feedback').css('display', 'none');
                    }
                }

                // Confirm email matching validation
                if (input.attr('name') === 'Confirmemail' && emailInput.val().trim() &&
                    confirmEmailInput.val().trim()) {
                    if (confirmEmailInput.val().trim() !== emailInput.val().trim()) {
                        confirmEmailInput.addClass('is-invalid');
                        confirmEmailInput.next('.invalid-feedback').text(
                            'Email addresses do not match.').css('display', 'block');
                    } else {
                        confirmEmailInput.removeClass('is-invalid');
                        confirmEmailInput.next('.invalid-feedback').css('display', 'none');
                    }
                }
            });



        });

        // Add custom styles for highlighting
        function addCustomStyles() { // Ensure this is called once
            const styleElement = document.createElement('style');
            styleElement.textContent = `
            .selected-product {
                background-color: #e7f3ff;
                border-color: #b8daff;
            }

            .selected-service {
                background-color: #f0f8ff;
                border-color: #d1e7ff;
            }

            .service-count {
                display: inline-block;
                margin-left: 8px;
                background-color: #6c757d;
                color: white;
                border-radius: 10px;
                padding: 0 8px;
                font-size: 0.8em;
                font-weight: bold;
            }
        `;
            document.head.appendChild(styleElement);
        }

        // Generate products list dynamically
        function generateProductsList() {
            const $categoriesList = $('#categoriesList');
            $categoriesList.empty();
            for (const productId in productsData) {
                const product = productsData[productId];
                const serviceCount = product.services.length;
                const serviceCountBadge = serviceCount > 0 ?
                    `<span class="service-count">(${serviceCount})</span>` :
                    '';

                $categoriesList.append(`
                <li class="list-group-item">
                    <label>
                        <input type="checkbox" class="category-checkbox me-2" value="${productId}">
                        ${product.name} ${serviceCountBadge}
                    </label>
                </li>
            `);
            }
        }

        // Reset the modal UI
        function resetModal() {
            $('.category-checkbox').prop('checked', false);
            $('#categoriesList li').removeClass('selected-product');
            $('#subitemsList').empty().html(
                '<li class="list-group-item text-muted">Select a product to view its services</li>');
            $('#tagsContainer').empty();
            $('#applyBtn').prop('disabled', true);
            $('#searchInput').val(''); // Clear search input
            generateProductsList(); // Regenerate to clear search filter
        }

        // Update modal with existing form selections
        function updateModalWithFormSelections(formId) {
            if (!formSelections[formId]) return;

            for (const productId in formSelections[formId]) {
                const checkbox = $(`input.category-checkbox[value="${productId}"]`);
                checkbox.prop('checked', true);
                checkbox.closest('li').addClass('selected-product');
            }
            updateServicesList();
            updateModalTags();
            updateApplyButton();
        }

        function updateServicesList() {
            if (!activeFormElement) return;

            const formId = activeFormElement.attr('id');
            const selections = formSelections[formId];
            const $subitemsList = $('#subitemsList');

            $subitemsList.empty();

            if (Object.keys(selections).length === 0) {
                $subitemsList.html('<li class="list-group-item text-muted">Select a product to view its services</li>');
                return;
            }

                    for (const productId in selections) {
                        const product = productsData[productId];
                        if (!product.services || product.services.length === 0) {
                    continue;
                }
                
                const selectedServiceCount = selections[productId].services.length;
                const totalServiceCount = product.services.length;

                let serviceCountText = "";
                if (totalServiceCount > 0) {
                   
                }

                $subitemsList.append(`
                <li class="list-group-item bg-light fw-bold ps-2">
                    ${product.name}${serviceCountText}
                </li>
            `);

                if (product.services.length === 0) {
                    $subitemsList.append(`
                    <li class="list-group-item ps-4 text-muted">
                        No services available for this product
                    </li>
                `);
                } else {
                   product.services.forEach(service => {
            const isChecked = selections[productId].services.includes(service);
            const selectedClass = isChecked ? 'selected-service' : '';

            $subitemsList.append(`
                <li class="list-group-item ${selectedClass}">
                    <label>
                        <input type="checkbox" class="service-checkbox me-2"
                            data-product="${productId}"
                            data-service-name="${service}"
                            ${isChecked ? 'checked' : ''}>
                        ${service}
                    </label>
                </li>
            `);
        });
    }
    if ($subitemsList.children().length === 0) {
        $subitemsList.html('<li class="list-group-item text-muted">No services available for selected products</li>');
    }
            }
        }

        // Update tags in modal
        function updateModalTags() {
            if (!activeFormElement) return;

            const formId = activeFormElement.attr('id');
            const selections = formSelections[formId];
            const $tagsContainer = $('#tagsContainer');

            $tagsContainer.empty();

            for (const productId in selections) {
                const product = selections[productId];

                $tagsContainer.append(`
                <span class="badge select-main-tag me-2 mb-2">
                    ${product.name}
                    <span class="tag-close" data-type="product" data-product="${productId}">&times;</span>
                </span>
            `);

                product.services.forEach(service => {
                    $tagsContainer.append(`
                    <span class="badge select-sub-tag me-2 mb-2">
                        ${service}
                        <span class="tag-close" data-type="service" data-product="${productId}" data-service="${service}">&times;</span>
                    </span>
                `);
                });
            }
        }

        // Update apply button state

        function updateApplyButton() {
            if (!activeFormElement) {
                $('#applyBtn').prop('disabled', true);
                return;
            }

            const formId = activeFormElement.attr('id');
            const selections = formSelections[formId];

            const hasSelections = Object.keys(selections).length > 0;
            $('#applyBtn').prop('disabled', !hasSelections);
        }

        function updateFormDisplay(formId) {
            const $form = $('#' + formId);
            if (!$form.length) return;

            const selections = formSelections[formId];
            const $mainTags = $form.find('.main-selected-tags');
            const $subTags = $form.find('.sub-selected-tags');
            const $container = $form.find('.selected-data-container');

            $mainTags.empty();
            $subTags.empty();

            if (Object.keys(selections).length === 0) {
                $container.hide();
                return;
            }

            for (const productId in selections) {
                const product = selections[productId];

                $mainTags.append(`
                <span class="badge select-main-tag me-2 mb-2">
                    ${product.name}
                    <span class="remove-tag" data-type="product" data-product="${productId}">&times;</span>
                </span>
            `);

                product.services.forEach(service => {
                    $subTags.append(`
                    <span class="badge bg-secondary me-2 mb-2">
                        ${service}
                        <span class="remove-tag" data-type="service" data-product="${productId}" data-service="${service}">&times;</span>
                    </span>
                `);
                });
            }
            $container.show();
        }
    