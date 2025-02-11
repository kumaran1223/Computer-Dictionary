const terms = [
    {
      term: "API",
      definition: "A set of rules and protocols for building and interacting with software applications.",
      examples: ["Google Maps API", "Twitter API"]
    },
    {
      term: "CSS",
      definition: "A style sheet language used for describing the presentation of a document written in HTML or XML.",
      examples: ["Styling web pages", "Creating responsive designs"]
    },
    {
      term: "HTML",
      definition: "The standard markup language for documents designed to be displayed in a web browser.",
      examples: ["Creating the structure of web pages", "Embedding images and videos"]
    },
    {
      term: "JavaScript",
      definition: "A programming language commonly used in web development to create interactive effects within web browsers.",
      examples: ["Form validations", "Interactive maps"]
    },
    {
      term: "JSON",
      definition: "A lightweight data-interchange format that is easy for humans to read and write, and easy for machines to parse and generate.",
      examples: ["Data exchange between web servers and clients", "Configuration files"]
    },
    {
      term: "REST",
      definition: "An architectural style for designing networked applications, relying on stateless, client-server communication, typically over HTTP.",
      examples: ["Web APIs", "Microservices architecture"]
    },
    {
      term: "HTML5",
      definition: "The fifth and current major version of the HTML standard, introducing new elements, attributes, and behaviors.",
      examples: ["Canvas for drawing graphics", "Video and audio elements"]
    },
    {
      term: "CSS Grid",
      definition: "A layout system in CSS that allows you to design web pages with a two-dimensional grid.",
      examples: ["Creating complex layouts", "Responsive design"]
    },
    {
      term: "JavaScript Frameworks",
      definition: "Pre-written JavaScript code libraries and tools that help developers build web applications more efficiently.",
      examples: ["React.js", "Angular", "Vue.js"]
    },
    {
      term: "Backend Development",
      definition: "The server-side development that focuses on the logic and database interactions of web applications.",
      examples: ["Node.js", "PHP", "Python with Django"]
    },
    {
      term: "Frontend Development",
      definition: "The client-side development that involves building the user interface and interactions of web applications.",
      examples: ["HTML", "CSS", "JavaScript"]
    },
    {
      term: "Responsive Web Design",
      definition: "An approach to web design that makes web pages render well on a variety of devices and window or screen sizes.",
      examples: ["Using media queries", "Fluid grids and flexible images"]
    },
    {
      term: "Cloud Computing",
      definition: "The delivery of computing services—including servers, storage, databases, networking, software, and more—over the internet.",
      examples: ["Amazon Web Services (AWS)", "Microsoft Azure", "Google Cloud Platform (GCP)"]
    },
    {
      term: "Cybersecurity",
      definition: "The practice of protecting systems, networks, and programs from digital attacks.",
      examples: ["Firewalls", "Encryption", "Penetration testing"]
    },
    {
      term: "Machine Learning",
      definition: "A subset of artificial intelligence that enables machines to learn from data and make decisions without explicit programming.",
      examples: ["Recommendation systems", "Natural language processing"]
    },
    {
      term: "Big Data",
      definition: "Extremely large data sets that may be analyzed computationally to reveal patterns, trends, and associations, especially relating to human behavior and interactions.",
      examples: ["Data mining", "Predictive analytics"]
    },
    {
        term: "Algorithm",
        definition: "A set of instructions used to solve a specific problem or perform a particular task.",
        examples: ["Sorting algorithms", "Cryptography algorithms"]
      },
      {
        term: "Artificial Intelligence",
        definition: "The development of computer systems that can perform tasks that typically require human intelligence, such as visual perception, speech recognition, and decision-making.",
        examples: ["Chatbots", "Virtual assistants"]
      },
      {
        term: "Blockchain",
        definition: "A decentralized, distributed ledger technology that enables secure, transparent, and tamper-proof transactions.",
        examples: ["Cryptocurrencies", "Supply chain management"]
      },
      {
        term: "Database",
        definition: "A collection of organized data that is stored in a way that allows for efficient retrieval and manipulation.",
        examples: ["Relational databases", "NoSQL databases"]
      },
      {
        term: "DevOps",
        definition: "A set of practices that combines software development and IT operations to improve the speed and quality of software releases.",
        examples: ["Continuous integration", "Continuous deployment"]
      },
      {
        term: "Git",
        definition: "A version control system that allows developers to track changes and collaborate on code.",
        examples: ["Version control", "Collaborative development"]
      },
      {
        term: "HTTP",
        definition: "A protocol used for transferring data over the internet, including requests and responses between clients and servers.",
        examples: ["Request methods (GET, POST, etc.)", "Status codes (200, 404, etc.)"]
      },
      {
        term: "IoT",
        definition: "The network of physical devices, vehicles, home appliances, and other items embedded with sensors, software, and connectivity, allowing them to collect and exchange data.",
        examples: ["Smart home devices", "Industrial automation"]
      },
      {
        term: "Microservices",
        definition: "An architectural style that structures an application as a collection of small, independent services that communicate with each other.",
        examples: ["Service-oriented architecture", "Decoupled systems"]
      },
      {
        term: "Network Security",
        definition: "The practices and technologies designed to protect computer networks, data, and devices from unauthorized access, use, disclosure, disruption, modification, or destruction.",
        examples: ["Firewalls", "Intrusion detection systems"]
      },
      {
        term: "OAuth",
        definition: "An authorization framework that enables applications to obtain limited access to user accounts on another service provider's website.",
        examples: ["Social media login", "API authentication"]
      },
      {
        term: "Open Source",
        definition: "Software or hardware that is released under a license that allows users to view, modify, and distribute the source code.",
        examples: ["Linux operating system", "Apache web server"]
      },
      {
        term: "PaaS",
        definition: "A cloud computing model that provides a platform for developing, running, and managing applications, without the need to manage the underlying infrastructure.",
        examples: ["Heroku", "Google App Engine"]
      },
      {
        term: "QA",
        definition: "The process of ensuring that a software application meets the required standards, is reliable, stable, and works as expected.",
        examples: ["Testing methodologies", "Quality assurance frameworks"]
      },
      {
        term: "SaaS",
        definition: "A software delivery model in which a third-party provider hosts applications and makes them available to customers over the internet.",
        examples: ["Microsoft Office 365", "Salesforce"]
      },
      {
        term: "Scrum",
        definition: "A framework for managing and completing complex projects using iterative and incremental practices.",
        examples: ["Agile development", "Project management methodologies"]
      },
      {
        term: "SQL",
        definition: "A programming language designed for managing and manipulating data in relational database management systems.",
        examples: ["Database queries", "Data modeling"]
      },
      {
        term: "UX Design",
        definition: "The process of creating products that are easy to use, efficient, and enjoyable, focusing on the user's experience and interaction with the product.",
        examples: ["User research", "Wireframing and prototyping"]
      },
      {
        term: "Virtualization",
        definition: "The creation of a virtual version of a physical object, such as a server, storage device, or network resource.",
        examples: ["VMware", "VirtualBox"]
      },
      {
        term: "Web Development",
        definition: "The process of building and maintaining websites, including the design, development, and deployment of web applications.",
        examples: ["Frontend development", "Backend development"]
      },
      {
        term: "Wireless Network",
        definition: "A network that connects devices without the use of cables or wires, using radio waves or infrared signals to transmit data.",
        examples: ["Wi-Fi", "Bluetooth"]
      },
      {
        term: "Accessibility",
        definition: "The practice of designing products, systems, and environments that are usable by people of all abilities and disabilities.",
        examples: ["Screen reader software", "Keyboard-only navigation"]
      },
      {
        term: "Agile Development",
        definition: "An iterative and incremental approach to project management and software development, emphasizing flexibility and customer satisfaction.",
        examples: ["Scrum", "Kanban"]
      },
      {
        term: "API Gateway",
        definition: "A server that acts as an entry point for clients to access a system, providing a single interface for multiple services.",
        examples: ["Amazon API Gateway", "Google Cloud Endpoints"]
      },
      {
        term: "AR/VR",
        definition: "Technologies that create immersive, interactive experiences, either by augmenting the real world or creating a virtual one.",
        examples: ["Pokémon Go", "Oculus Rift"]
      },
      {
        term: "Authentication",
        definition: "The process of verifying the identity of a user, device, or system, ensuring that only authorized entities have access to resources.",
        examples: ["Username and password", "Biometric authentication"]
      },
      {
        term: "Backup and Recovery",
        definition: "The process of creating and storing copies of data, as well as restoring it in case of data loss or system failure.",
        examples: ["Cloud backup services", "RAID storage"]
      },
      {
        term: "Cloud Native",
        definition: "Applications and services that are designed from the ground up to take advantage of cloud computing principles and architectures.",
        examples: ["Serverless computing", "Containerization"]
      },
      {
        term: "Cognitive Computing",
        definition: "The development of computer systems that can perform tasks that typically require human intelligence, such as reasoning and problem-solving.",
        examples: ["IBM Watson", "Google DeepMind"]
      },
      {
        term: "Containerization",
        definition: "A lightweight and portable way to deploy applications, using containers instead of virtual machines.",
        examples: ["Docker", "Kubernetes"]
      },
      {
        term: "Cyber-Physical Systems",
        definition: "The integration of physical and computational systems, enabling the interaction between the physical and digital worlds.",
        examples: ["Industrial control systems", "Smart buildings"]
      },
      {
        term: "Data Analytics",
        definition: "The process of extracting insights and patterns from data, using various techniques and tools to inform business decisions.",
        examples: ["Business intelligence", "Predictive analytics"]
      },
      {
        term: "Data Mining",
        definition: "The process of automatically discovering patterns and relationships in large datasets, using various techniques and algorithms.",
        examples: ["Machine learning", "Text mining"]
      },
      {
        term: "Data Science",
        definition: "The interdisciplinary field that combines statistics, computer science, and domain expertise to extract insights from data.",
        examples: ["Data visualization", "Predictive modeling"]
      },
      {
        term: "DevSecOps",
        definition: "The practice of integrating security into DevOps practices, ensuring the secure development, deployment, and operation of software systems.",
        examples: ["Security as Code", "Compliance as Code"]
      },
      {
        term: "Digital Twin",
        definition: "A virtual replica of a physical object or system, used for simulation, analysis, and prediction.",
        examples: ["Industrial equipment", "Smart cities"]
      },
      {
        term: "Edge Computing",
        definition: "The processing and analysis of data at the edge of the network, reducing latency and improving real-time processing.",
        examples: ["IoT devices", "5G networks"]
      },
      {
        term: "Encryption",
        definition: "The process of converting plaintext data into unreadable ciphertext, protecting it from unauthorized access.",
        examples: ["Symmetric encryption", "Asymmetric encryption"]
      },
      {
        term: "Enterprise Architecture",
        definition: "The practice of designing and implementing the overall structure and organization of an enterprise's IT systems and infrastructure.",
        examples: ["TOGAF", "Zachman Framework"]
      },
      {
        term: "Ethical Hacking",
        definition: "The practice of testing computer systems and networks to identify vulnerabilities, with the goal of improving security and protecting against threats.",
        examples: ["Penetration testing", "Vulnerability assessment"]
      },
      {
        term: "Fault Tolerance",
        definition: "The ability of a system to continue operating even when one or more components fail, ensuring high availability and reliability.",
        examples: ["Redundancy", "Error correction"]
      },
      {
        term: "Gesture Recognition",
        definition: "The ability of a computer system to identify and interpret human gestures, such as hand or finger movements.",
        examples: ["Touchless interfaces", "Virtual reality controllers"]
      },
      {
        term: "Hadoop",
        definition: "A distributed computing framework that enables the processing of large datasets across a cluster of computers.",
        examples: ["Big data analytics", "Data warehousing"]
      },
      {
        term: "Hyperconvergence",
        definition: "A software-defined approach to integrating compute, storage, and networking resources into a single, virtualized system.",
        examples: ["Hyperconverged infrastructure", "Software-defined data center"]
      },
      {
        term: "Identity and Access Management",
        definition: "The process of managing digital identities and controlling access to computing resources, applications, and data.",
        examples: ["Authentication", "Authorization"]
      },
      {
        term: "Infrastructure as Code",
        definition: "The practice of managing and provisioning infrastructure resources through code and configuration files, rather than through graphical user interfaces.",
        examples: ["CloudFormation", "Terraform"]
      },
      {
        term: "Internet of Bodies",
        definition: "The integration of technology into the human body, such as implantable devices, wearables, and biosensors, to enhance health and wellness.",
        examples: ["Health monitoring", "Biometric tracking"]
      },
      {
        term: "Kubernetes",
        definition: "An open-source container orchestration system for automating the deployment, scaling, and management of containerized applications.",
        examples: ["Containerization", "Microservices architecture"]
      },
      {
        term: "Low-Code Development",
        definition: "The practice of building applications using visual interfaces and minimal coding, enabling rapid development and deployment.",
        examples: ["Visual programming languages", "Drag-and-drop development"]
      },
      {
        term: "Machine Learning Operations",
        definition: "The practice of managing and optimizing machine learning models and workflows, from data preparation to model deployment and monitoring.",
        examples: ["Model training", "Model deployment"]
      },
      {
        term: "Microfrontends",
        definition: "An architectural approach to building web applications as a collection of smaller, independent frontends, each with its own codebase and technology stack.",
        examples: ["Frontend development", "Web architecture"]
      },
      {
        term: "Natural Language Processing",
        definition: "The ability of computers to understand, interpret, and generate human language, enabling applications such as language translation and text summarization.",
        examples: ["Language models", "Sentiment analysis"]
      },
      {
        term: "Neural Networks",
        definition: "A type of machine learning model inspired by the structure and function of the human brain, used for tasks such as image recognition and speech recognition.",
        examples: ["Deep learning", "Convolutional neural networks"]
      },
      {
        term: " Observability",
        definition: "The ability to understand and monitor the internal workings of a system or application, enabling improved performance, security, and reliability.",
        examples: ["Monitoring", "Logging"]
      },
      {
        term: "Open-Source Software",
        definition: "Software that is released under a license that allows users to view, modify, and distribute the source code, promoting collaboration and community involvement.",
        examples: ["Linux", "Apache"]
      },
      {
        term: "Puppet",
        definition: "An open-source configuration management tool that enables the automation of infrastructure provisioning and management.",
        examples: ["Infrastructure as Code", "Configuration management"]
      },
      {
        term: "Quantum Computing",
        definition: "A new paradigm for computing that uses the principles of quantum mechanics to perform calculations and operations beyond the capabilities of classical computers.",
        examples: ["Quantum bits", "Quantum algorithms"]
      },
      {
        term: "Ransomware",
        definition: "A type of malicious software that encrypts a victim's files or locks their device, demanding payment in exchange for the decryption key or unlock code.",
        examples: ["Cybersecurity threats", "Malware"]
      },
      {
        term: "Robotics",
        definition: "The design, development, and operation of robots, which are machines that can perform tasks that typically require human intelligence, such as perception, manipulation, and locomotion.",
        examples: ["Industrial automation", "Service robots"]
      },
      {
        term: "Serverless Computing",
        definition: "A cloud computing model in which the cloud provider manages the infrastructure and dynamically allocates computing resources, eliminating the need for server management.",
        examples: ["Function-as-a-Service", "Event-driven architecture"]
      },
      {
        term: "Adware",
        definition: "Software that displays unwanted advertisements on a user's device, often without their consent.",
        examples: ["Pop-up ads", "Malicious software"]
      },
      {
        term: "BIOS",
        definition: "Basic Input/Output System, the firmware that controls and configures a computer's hardware components.",
        examples: ["Boot process", "Hardware settings"]
      },
      {
        term: "Cache",
        definition: "A small, fast memory storage location that stores frequently accessed data to improve performance.",
        examples: ["Browser cache", "CPU cache"]
      },
      {
        term: "Cloud Storage",
        definition: "A model of data storage where digital data is stored in logical pools, said to be 'in the cloud'.",
        examples: ["Google Drive", "Dropbox"]
      },
      {
        term: "Cookie",
        definition: "A small text file stored on a user's device by a web browser, used to remember user preferences and track behavior.",
        examples: ["Session cookies", "Persistent cookies"]
      },
      {
        term: "Dark Web",
        definition: "A part of the internet that is not accessible through traditional search engines, often used for illegal activities.",
        examples: ["Tor network", "Hidden services"]
      },
      {
        term: "DDoS",
        definition: "Distributed Denial of Service, a type of cyberattack where multiple systems flood a target system with traffic to overwhelm it.",
        examples: ["Botnets", "Network congestion"]
      },
      {
        term: "Emulator",
        definition: "Software that mimics the behavior of a different system or device, allowing users to run incompatible software or games.",
        examples: ["Video game emulators", "Mobile device emulators"]
      },
      {
        term: "Firewall",
        definition: "A network security system that monitors and controls incoming and outgoing network traffic based on predetermined security rules.",
        examples: ["Network firewalls", "Host-based firewalls"]
      },
      {
        term: "GPU",
        definition: "Graphics Processing Unit, a specialized electronic circuit designed to quickly manipulate and alter memory to accelerate the creation of images.",
        examples: ["NVIDIA GeForce", "AMD Radeon"]
      },
      {
        term: "Hash Function",
        definition: "A mathematical function that takes input data of any size and returns a fixed-size string of characters, used for data integrity and security.",
        examples: ["SHA-256", "MD5"]
      },
      {
        term: "IP Address",
        definition: "A unique numerical label assigned to each device connected to a computer network, used to identify and locate devices.",
        examples: ["IPv4", "IPv6"]
      },
      {
        term: "Kernel",
        definition: "The core part of an operating system, responsible for managing hardware resources and providing services to applications.",
        examples: ["Linux kernel", "Windows kernel"]
      },
      {
        term: "Malware",
        definition: "Malicious software designed to harm or exploit a computer system or its user, including viruses, trojans, and spyware.",
        examples: ["Ransomware", "Adware"]
      },
      {
        term: "Network Topology",
        definition: "The physical and logical arrangement of devices and connections within a computer network.",
        examples: ["Star topology", "Mesh topology"]
      },
      {
        term: "Packet Sniffer",
        definition: "A tool used to capture and analyze network packets, often used for network troubleshooting and security testing.",
        examples: ["Wireshark", "Tcpdump"]
      },
      {
        term: "Phishing",
        definition: "A type of social engineering attack where attackers attempt to trick users into revealing sensitive information, such as passwords or credit card numbers.",
        examples: ["Email phishing", "Spear phishing"]
      },
      {
        term: "Proxy Server",
        definition: "A server that acts as an intermediary between a client and a target server, often used to improve performance, security, or anonymity.",
        examples: ["Forward proxy", "Reverse proxy"]
      },
      {
        term: "RAM",
        definition: "Random Access Memory, a type of computer storage that temporarily holds data and applications while they are being used.",
        examples: [" DDR4", "SDRAM"]
      },
      {
        term: "SMTP",
        definition: "Simple Mail Transfer Protocol, a protocol used for sending and receiving email over the internet.",
        examples: ["Email servers", "Mail clients"]
      },
      {
        term: "Social Engineering",
        definition: "The use of psychological manipulation to trick individuals into divulging confidential information or performing certain actions.",
        examples: ["Phishing", "Pretexting"]
      },
      {
        term: "SSL/TLS",
        definition: "Secure Sockets Layer/Transport Layer Security, a cryptographic protocol used to provide secure communication over a network.",
        examples: ["HTTPS", "SSL certificates"]
      },
      {
        term: "Apache Kafka",
        definition: "An open-source stream-processing software platform developed by LinkedIn and donated to the Apache Software Foundation, written in Scala and Java.",
        examples: ["Real-time data pipelines", "Event-driven architectures"]
      },
      {
        term: "GraphQL",
        definition: "A query language for APIs and a runtime for executing those queries with existing data, developed by Facebook.",
        examples: ["Efficient data fetching", "APIs for frontend development"]
      },
      {
        term: "Jenkins",
        definition: "An open-source automation server that enables developers to reliably build, test, and deploy software.",
        examples: ["Continuous integration", "Pipeline automation"]
      },
      {
        term: "NoSQL",
        definition: "A non-relational database management system that provides a mechanism for storage and retrieval of data modeled in means other than the tabular relations used in relational databases.",
        examples: ["Document databases", "Key-value stores"]
      },
      {
        term: "Rust Programming Language",
        definition: "A systems programming language that focuses on safety, performance, and concurrency, designed by Mozilla.",
        examples: ["Systems programming", "WebAssembly"]
      },
      {
        term: "TensorFlow",
        definition: "An open-source software library for dataflow and differentiable programming across a range of tasks, developed by Google Brain.",
        examples: ["Machine learning models", "Deep learning applications"]
      },
      {
        term: "Virtual Private Network (VPN)",
        definition: "A secure tunnel between two or more devices used to protect private web traffic from snooping, interference, and censorship.",
        examples: ["Remote work security", "Accessing geo-restricted content"]
      },
      {
        term: "Zero-Day Vulnerability",
        definition: "A software vulnerability that is unknown to the software vendor or security researchers, allowing malicious actors to exploit it before it can be patched.",
        examples: ["Exploit development", "Security research"]
      },
      {
        term: "Cross-Platform Development",
        definition: "The creation of software applications that can run on multiple computing platforms, such as Windows, macOS, Linux, iOS, and Android.",
        examples: ["React Native", "Flutter"]
      },
      {
        term: "Embedded Systems",
        definition: "Computer systems with a dedicated function within a larger mechanical or electrical system, often with real-time computing constraints.",
        examples: ["Automotive electronics", "Medical devices"]
      },
      {
        term: "Microcontrollers",
        definition: "Small computers on a single integrated circuit that contain a processor core, memory, and programmable input/output peripherals.",
        examples: ["Arduino", "Raspberry Pi"]
      },
      {
        term: "OpenAPI Specification (formerly Swagger)",
        definition: "A standard for describing, producing, consuming, and visualizing RESTful APIs, allowing both humans and computers to understand API capabilities without access to source code.",
        examples: ["API documentation", "Code generation"]
      },
      {
        term: "Single Sign-On (SSO)",
        definition: "An authentication process that allows a user to access multiple applications with one set of login credentials.",
        examples: ["OAuth", "SAML"]
      },
      {
        term: "WebAssembly (Wasm)",
        definition: "A binary instruction format for a stack-based virtual machine, designed as a portable compilation target for high-level languages on the web.",
        examples: ["Browser-based applications", "Game development"]
      },
      {
        term: "Cyber Threat Intelligence",
        definition: "Information collected, processed, and analyzed to understand a threat actor's intentions, capabilities, and activities.",
        examples: ["Threat hunting", "Incident response"]
      },
      {
        term: "Disaster Recovery Planning (DRP)",
        definition: "A structured approach to recovering and protecting an organization's data, infrastructure, and operations in the event of a disaster.",
        examples: ["Business continuity", "Backup strategies"]
      },
      {
        term: "Machine Vision",
        definition: "The technology and methods used to provide imaging-based automatic inspection, process control, and robot guidance in industrial applications.",
        examples: ["Quality control", "Autonomous vehicles"]
      },
      {
        term: "Natural Language Generation (NLG)",
        definition: "A subfield of artificial intelligence and natural language processing that focuses on generating natural language from structured data.",
        examples: ["Automated reports", "Content generation"]
      },
      {
        term: "Robotic Process Automation (RPA)",
        definition: "The use of software robots (bots) to automate repetitive tasks and workflows, typically performed by humans.",
        examples: ["Data entry", "Invoice processing"]
      },
      {
        term: "Server-Side Rendering (SSR)",
        definition: "A technique for rendering web pages on the server instead of the client, improving page load times and SEO.",
        examples: ["Next.js", "Nuxt.js"]
      },
      {
        term: "Software Engineer",
        definition: "A professional who applies engineering principles to design, develop, maintain, test, and evaluate software and systems.",
        examples: ["Developing applications", "Writing code in various programming languages"]
      },
      {
        term: "Data Scientist",
        definition: "An individual who analyzes and interprets complex data to help organizations make informed decisions.",
        examples: ["Machine learning algorithms", "Big data analysis"]
      },
      {
        term: "Network Administrator",
        definition: "A professional responsible for managing and maintaining an organization's computer network infrastructure.",
        examples: ["Configuring routers and switches", "Troubleshooting network issues"]
      },
      {
        term: "Cybersecurity Analyst",
        definition: "An expert who protects an organization's information systems security breaches and cyberattacks by monitoring, detecting, investigating, and responding to threats.",
        examples: ["Conducting vulnerability assessments", "Implementing security measures and protocols"]
      },
      {
        term: "Cloud Architect",
       definition: "An IT professional who oversees an organization's cloud computing strategy, including cloud adoption plans, application design, and cloud management and monitoring.",
       examples: ["Designing cloud infrastructure", "Implementing scalable cloud solutions"]
      },
      {
       term: "Database Administrator (DBA)",
       definition: "A specialist who manages and maintains databases, ensuring their security, availability, and performance.",
       examples: ["Optimizing database performance", "Managing backups and recovery procedures"]
      },
      {
       term: "Systems Analyst",
       definition: "A professional who analyzes an organization's current computer systems and procedures, and designs information systems solutions to help the organization operate more efficiently and effectively.",
       examples: ["Gathering user requirements", "Creating system specifications and diagrams"]
      },
      {
       term: "UI/UX Designer",
       definition: "A designer who focuses on enhancing user satisfaction by improving the usability, accessibility, and pleasure provided in the interaction between the user and the product.",
       examples: ["Creating wireframes and prototypes", "Conducting user research and testing"]
      },
      {
       term: "DevOps Engineer",
       definition: "An IT professional who works with software developers, system operators (SysOps), and other production IT staff to oversee code releases and deployments.",
       examples: ["Automating deployment pipelines", "Implementing monitoring and logging solutions"]
      },
      {
       term: "Artificial Intelligence (AI) Engineer",
       definition: "An engineer specializing in creating and deploying AI models and systems, such as machine learning algorithms and natural language processing applications.",
       examples: ["Training deep learning models", "Developing AI-driven applications"]
      },
      {
       term: "IT Project Manager",
       definition: "A professional responsible for planning, organizing, and managing IT projects within an organization, ensuring they are completed on time, within budget, and meet stakeholders' expectations.",
       examples: ["Defining project scope and objectives", "Managing project resources and timelines"]
      },
      {
       term: "Technical Support Specialist",
       definition: "A technician who provides assistance, support, and advice to users and organizations on their computer systems, hardware, and software.",
       examples: ["Troubleshooting hardware and software issues", "Providing remote support and training"]
      },
      {
       term: "Blockchain Developer",
       definition: "A developer who specializes in creating and implementing decentralized applications (dApps) and smart contracts using blockchain technology.",
       examples: ["Building blockchain solutions", "Programming in Solidity (Ethereum smart contracts)"]
      },
      {
       term: "Quantum Computing Scientist",
       definition: "A scientist or researcher who studies and develops quantum computing technologies, algorithms, and applications.",
       examples: ["Experimenting with quantum bits (qubits)", "Developing quantum algorithms"]
      },
      {
       term: "Game Developer",
       definition: "A developer who designs and creates interactive games for various platforms, including computers, consoles, and mobile devices.",
       examples: ["Programming game mechanics", "Designing game levels and graphics"]
      },
      {
       term: "Embedded Systems Engineer",
       definition: "An engineer who designs and develops embedded systems, which are dedicated computing devices or systems within larger mechanical or electrical systems.",
       examples: ["Programming microcontrollers", "Designing real-time operating systems"]
      },
      {
        term: "Microservices",
        definition: "An architectural style that structures an application as a collection of loosely coupled services.",
        examples: ["Decomposing a monolithic application into small, independent services", "Using Docker for containerization", "Kubernetes for orchestration"]
      },
      {
        term: "Edge Computing",
        definition: "A distributed computing paradigm that brings computation and data storage closer to the sources of data.",
        examples: ["Smart sensors processing data locally", "Edge devices in IoT", "Real-time analytics on the edge"]
      },
      {
        term: "Natural Language Processing (NLP)",
        definition: "A field of AI that focuses on the interaction between computers and humans through natural language.",
        examples: ["Chatbots", "Sentiment analysis", "Speech recognition"]
      },
      {
        term: "Robotics",
        definition: "The design, construction, operation, and use of robots.",
        examples: ["Industrial robots for manufacturing", "Service robots in healthcare", "Autonomous drones"]
      },
      {
        term: "Functional Programming",
        definition: "A programming paradigm that treats computation as the evaluation of mathematical functions and avoids changing state and mutable data.",
        examples: ["Languages like Haskell, Lisp, and Scala", "Using pure functions and immutability", "Recursion instead of loops"]
      },
      {
        term: "Distributed Systems",
        definition: "A model in which components located on networked computers communicate and coordinate their actions by passing messages.",
        examples: ["Distributed databases", "Peer-to-peer networks", "Blockchain technology"]
      },
      {
        term: "Virtualization",
        definition: "The creation of a virtual version of something, such as a hardware platform, operating system, storage device, or network resources.",
        examples: ["Virtual machines (VMs)", "VMware", "Hyper-V"]
      },
      {
        term: "Embedded Systems",
        definition: "A computer system with a dedicated function within a larger mechanical or electrical system.",
        examples: ["Microcontrollers in appliances", "Automotive control systems", "Medical devices"]
      },
      {
        term: "Game Development",
        definition: "The art and science of creating video games.",
        examples: ["Unity and Unreal Engine for game development", "3D modeling and animation", "Game physics and AI"]
      },
      {
        term: "Computer Vision",
        definition: "A field of AI that trains computers to interpret and make decisions based on visual data.",
        examples: ["Image recognition", "Object detection", "Facial recognition"]
      },
      {
        term: "High Performance Computing (HPC)",
        definition: "The use of supercomputers and parallel processing techniques for solving complex computational problems.",
        examples: ["Weather forecasting", "Scientific simulations", "Cryptanalysis"]
      },
      {
        term: "Software Architecture",
        definition: "The high-level structure of a software system, encompassing the set of significant decisions about the organization of the system.",
        examples: ["MVC (Model-View-Controller) pattern", "Microservices architecture", "Service-Oriented Architecture (SOA)"]
      },
      {
        term: "Computer Forensics",
        definition: "The application of investigation and analysis techniques to gather and preserve evidence from computing devices in a way that is suitable for presentation in a court of law.",
        examples: ["Recovering deleted files", "Analyzing digital footprints", "Network forensics"]
      },
      {
        term: "Bioinformatics",
        definition: "An interdisciplinary field that develops methods and software tools for understanding biological data.",
        examples: ["Genome sequencing analysis", "Protein structure prediction", "Biological data visualization"]
      },
      {
        term: "Mobile Computing",
        definition: "The use of portable computing devices, such as smartphones and tablets, that allow users to access data and applications from anywhere.",
        examples: ["Mobile app development", "Responsive web design", "Mobile cloud services"]
      },
      {
        term: "Augmented Reality (AR)",
        definition: "An interactive experience where the objects that reside in the real world are enhanced by computer-generated perceptual information.",
        examples: ["AR apps for smartphones", "AR glasses like Microsoft HoloLens", "AR in retail for virtual try-ons"]
      },
      {
        term: "Biometrics",
        definition: "The measurement and statistical analysis of people's unique physical and behavioral characteristics.",
        examples: ["Fingerprint scanning", "Facial recognition systems", "Iris recognition"]
      },
      {
        term: "Compiler",
        definition: "A program that converts instructions written in a programming language into machine code that a computer's processor can execute.",
        examples: ["GCC for C/C++", "Javac for Java", "Clang for C/C++"]
      },
      {
        term: "Cryptography",
        definition: "The practice and study of techniques for securing communication and data in the presence of adversaries.",
        examples: ["AES encryption", "RSA encryption", "Hash functions like SHA-256"]
      },
      {
        term: "Data Structures",
        definition: "Ways of organizing and storing data so that they can be accessed and modified efficiently.",
        examples: ["Arrays", "Linked lists", "Binary trees", "Hash tables"]
      },
      {
        term: "Distributed Systems",
        definition: "A model in which components located on networked computers communicate and coordinate their actions by passing messages.",
        examples: ["Google's Bigtable", "Amazon's DynamoDB", "Apache Kafka"]
      },
      {
        term: "Embedded Systems",
        definition: "Computer systems with a dedicated function within a larger mechanical or electrical system.",
        examples: ["Microcontrollers in appliances", "Automotive control systems", "IoT devices"]
      },
      {
        term: "Finite State Machine",
        definition: "A computational model used to design both computer programs and sequential logic circuits.",
        examples: ["Traffic light control systems", "Regular expression engines", "Game AI logic"]
      },
      {
        term: "Functional Programming",
        definition: "A programming paradigm where programs are constructed by applying and composing functions.",
        examples: ["Haskell", "Erlang", "Scala"]
      },
      {
        term: "Object-Oriented Programming",
        definition: "A programming paradigm based on the concept of objects, which can contain data and code to manipulate the data.",
        examples: ["Java", "C++", "Python"]
      },
      {
        term: "Operating Systems",
        definition: "System software that manages computer hardware, software resources, and provides common services for computer programs.",
        examples: ["Windows", "Linux", "macOS"]
      },
      {
        term: "Regular Expressions",
        definition: "Sequences of characters that define a search pattern, mainly used for pattern matching with strings.",
        examples: ["Finding all email addresses in a text", "Validating form input", "Text search and replace"]
      },
      {
        term: "Software Engineering",
        definition: "The application of engineering principles to the design, development, maintenance, testing, and evaluation of software.",
        examples: ["Agile methodologies", "Software development life cycle (SDLC)", "Version control systems like Git"]
      },
      {
        term: "Systems Architecture",
        definition: "The conceptual model that defines the structure, behavior, and more views of a system.",
        examples: ["Client-server model", "Peer-to-peer model", "Microservices architecture"]
      },
      {
        term: "Virtual Machines",
        definition: "An emulation of a computer system, providing the functionality of a physical computer.",
        examples: ["VMware", "VirtualBox", "Hyper-V"]
      },
      {
        term: "Voice Recognition",
        definition: "The ability of a machine or program to receive and interpret dictation, or to understand and carry out spoken commands.",
        examples: ["Siri", "Google Assistant", "Amazon Alexa"]
      },
      {
        term: "Vulnerability Assessment",
        definition: "The process of identifying, quantifying, and prioritizing (or ranking) the vulnerabilities in a system.",
        examples: ["Network vulnerability scanning", "Penetration testing", "Security audits"]
      },
      {
        term: "Web Scraping",
        definition: "A technique employed to extract data from websites by parsing the HTML of the web pages.",
        examples: ["Scrapy in Python", "BeautifulSoup in Python", "Cheerio in Node.js"]
      },
      {
        term: "Algorithm Design",
        definition: "The process of defining a step-by-step solution to a problem.",
        examples: ["Divide and conquer", "Dynamic programming", "Greedy algorithms"]
      },
      {
        term: "Cloud Orchestration",
        definition: "The automated arrangement, coordination, and management of complex computer systems, middleware, and services.",
        examples: ["Kubernetes for container orchestration", "AWS CloudFormation", "Terraform"]
      },
      {
        term: "Cyber-Physical Systems",
        definition: "Mechanisms that are controlled or monitored by computer-based algorithms, tightly integrated with the internet and its users.",
        examples: ["Smart grid", "Autonomous automobile systems", "Medical monitoring systems"]
      },
      {
        term: "Data Governance",
        definition: "The overall management of the availability, usability, integrity, and security of data used in an enterprise.",
        examples: ["Data stewardship", "Data quality management", "Compliance with regulations like GDPR"]
      },
      {
        term: "Digital Forensics",
        definition: "The process of uncovering and interpreting electronic data for use in a court of law.",
        examples: ["Recovering deleted files", "Analyzing network logs", "Examining digital devices for evidence"]
      },
      {
        term: "Edge AI",
        definition: "The deployment of artificial intelligence applications to edge devices, closer to where data is generated.",
        examples: ["AI in IoT devices", "Smart cameras", "Wearable health monitors"]
      },
      {
        term: "Information Retrieval",
        definition: "The process of obtaining information system resources that are relevant to an information need from a collection of those resources.",
        examples: ["Search engines", "Library catalogs", "Content-based image retrieval"]
      },
      {
        term: "Quantum Cryptography",
        definition: "The use of quantum mechanics to perform cryptographic tasks and ensure secure communication.",
        examples: ["Quantum key distribution", "Quantum random number generation"]
      },
      {
        term: "Software as a Service (SaaS)",
        definition: "A software licensing and delivery model in which software is licensed on a subscription basis and is centrally hosted.",
        examples: ["Google Workspace", "Salesforce", "Slack"]
      },
      {
        term: "Wireless Sensor Networks",
        definition: "Networks of spatially dispersed and dedicated sensors for monitoring and recording the physical conditions of the environment and organizing the collected data at a central location.",
        examples: ["Environmental monitoring", "Health monitoring systems", "Industrial process control"]
      },
      {
        term: "Zero Trust Security",
        definition: "A security concept centered on the belief that organizations should not automatically trust anything inside or outside its perimeters and must verify anything and everything trying to connect to its systems before granting access.",
        examples: ["Identity verification", "Micro-segmentation", "Continuous monitoring and validation"]
      },
      {
        term: "Embedded Software",
        definition: "Computer software, written to control machines or devices that are not typically thought of as computers.",
        examples: ["Software in washing machines", "Firmware in smart TVs", "Software in automotive control systems"]
      },
      {
        term: "Array",
        definition: "A collection of elements identified by index or key.",
        examples: ["int[] numbers = {1, 2, 3, 4, 5};"]
      },
      {
        term: "Linked List",
        definition: "A linear data structure where each element points to the next, forming a sequence.",
        examples: ["Singly Linked List", "Doubly Linked List"]
      },
      {
        term: "Tree",
        definition: "A hierarchical data structure consisting of nodes, with a single node as the root.",
        examples: ["Binary Tree", "Binary Search Tree"]
      },
      {
        term: "Graph",
        definition: "A collection of nodes connected by edges.",
        examples: ["Undirected Graph", "Directed Graph"]
      },
      {
        term: "Hash Table",
        definition: "A data structure that implements an associative array abstract data type, a structure that can map keys to values.",
        examples: ["HashMap in Java", "Dictionary in Python"]
      },
      {
        term: "Process Management",
        definition: "Handling processes in an operating system, including process scheduling and synchronization.",
        examples: ["Process life cycle", "Threads"]
      },
      {
        term: "Memory Management",
        definition: "Managing the computer's primary memory.",
        examples: ["Paging", "Segmentation"]
      },
      {
        term: "File Systems",
        definition: "Methods and data structures that an operating system uses to control how data is stored and retrieved.",
        examples: ["NTFS", "EXT4"]
      },
      {
        term: "Concurrency",
        definition: "The execution of multiple instruction sequences at the same time.",
        examples: ["Mutex", "Semaphore"]
      },
      {
        term: "Deadlock",
        definition: "A situation in computing where two or more processes are unable to proceed because each is waiting for the other to release a resource.",
        examples: ["Banker's Algorithm", "Deadlock prevention strategies"]
      },
      {
        term: "Relational Database",
        definition: "A database structured to recognize relations among stored items of information.",
        examples: ["MySQL", "PostgreSQL"]
      },
      {
        term: "Normalization",
        definition: "The process of organizing data to minimize redundancy.",
        examples: ["First Normal Form (1NF)", "Second Normal Form (2NF)"]
      },
      {
        term: "SQL",
        definition: "A domain-specific language used in programming and designed for managing data held in a relational database management system.",
        examples: ["SELECT", "INSERT", "UPDATE"]
      },
      {
        term: "NoSQL",
        definition: "A non-relational database that does not use SQL as its primary query language.",
        examples: ["MongoDB", "Cassandra"]
      },
      {
        term: "ACID Properties",
        definition: "A set of properties that guarantee database transactions are processed reliably.",
        examples: ["Atomicity", "Consistency", "Isolation", "Durability"]
      },
      {
        term: "OSI Model",
        definition: "A conceptual framework used to understand network interactions in seven distinct layers.",
        examples: ["Physical Layer", "Data Link Layer"]
      },
      {
        term: "TCP/IP",
        definition: "A set of communication protocols used for the Internet and similar networks.",
        examples: ["Transmission Control Protocol (TCP)", "Internet Protocol (IP)"]
      },
      {
        term: "Routing",
        definition: "The process of selecting paths in a network along which to send network traffic.",
        examples: ["Static Routing", "Dynamic Routing"]
      },
      {
        term: "Network Security",
        definition: "Measures taken to protect data during their transmission.",
        examples: ["Firewalls", "VPNs"]
      },
      {
        term: "Wireless Networking",
        definition: "Using radio waves to provide network connectivity.",
        examples: ["Wi-Fi", "Bluetooth"]
      },
      {
        term: "Software Development Life Cycle (SDLC)",
        definition: "A process for planning, creating, testing, and deploying an information system.",
        examples: ["Waterfall Model", "Agile Development"]
      },
      {
        term: "Design Patterns",
        definition: "Solutions to common problems in software design.",
        examples: ["Singleton Pattern", "Observer Pattern"]
      },
      {
        term: "Testing",
        definition: "The process of evaluating a system or its components to find whether it satisfies the specified requirements.",
        examples: ["Unit Testing", "Integration Testing"]
      },
      {
        term: "Version Control",
        definition: "The management of changes to documents, programs, and other information stored as computer files.",
        examples: ["Git", "SVN"]
      },
      {
        term: "Project Management",
        definition: "The discipline of initiating, planning, executing, controlling, and closing the work of a team to achieve specific goals.",
        examples: ["Scrum", "Kanban"]
      },
      {
        term: "Machine Learning",
        definition: "A branch of artificial intelligence focused on building applications that learn from data and improve their accuracy over time without being programmed to do so.",
        examples: ["Supervised Learning", "Unsupervised Learning"]
      },
      {
        term: "Neural Networks",
        definition: "A series of algorithms that attempt to recognize underlying relationships in a set of data through a process that mimics the way the human brain operates.",
        examples: ["Feedforward Neural Networks", "Convolutional Neural Networks"]
      },
      {
        term: "Natural Language Processing (NLP)",
        definition: "A field of AI that gives computers the ability to understand, interpret, and respond to human language.",
        examples: ["Text-to-Speech", "Sentiment Analysis"]
      },
      {
        term: "Reinforcement Learning",
        definition: "A type of machine learning where an agent learns to behave in an environment by performing actions and seeing the results.",
        examples: ["Q-Learning", "Deep Q-Networks"]
      },
      {
        term: "Computer Vision",
        definition: "A field of AI that trains computers to interpret and understand the visual world.",
        examples: ["Image Recognition", "Object Detection"]
      },
      {
        term: "Encryption",
        definition: "The process of converting information or data into a code to prevent unauthorized access.",
        examples: ["AES", "RSA"]
      },
      {
        term: "Hash Functions",
        definition: "Functions that take an input and return a fixed-size string of bytes.",
        examples: ["SHA-256", "MD5"]
      },
      {
        term: "Public Key Infrastructure (PKI)",
        definition: "A set of roles, policies, and procedures to create, manage, distribute, use, store, and revoke digital certificates.",
        examples: ["SSL/TLS certificates", "Certificate Authorities"]
      },
      {
        term: "Digital Signatures",
        definition: "A mathematical scheme for verifying the authenticity of digital messages or documents.",
        examples: ["DSA", "ECDSA"]
      },
      {
        term: "Symmetric Key Cryptography",
        definition: "A type of encryption where the same key is used for both encryption and decryption.",
        examples: ["DES", "3DES"]
      },
      {
        term: "Usability",
        definition: "The ease of use and learnability of a human-made object such as a tool or device.",
        examples: ["User Interface Design", "User Experience Design"]
      },
      {
        term: "Accessibility",
        definition: "The design of products, devices, services, or environments for people who experience disabilities.",
        examples: ["Screen Readers", "Keyboard Navigation"]
      },
      {
        term: "Interaction Design",
        definition: "The practice of designing interactive digital products, environments, systems, and services.",
        examples: ["Prototyping", "User Flows"]
      },
      {
        term: "Cognitive Load",
        definition: "The total amount of mental effort being used in the working memory.",
        examples: ["Simplified Interfaces", "Consistent Design"]
      },
      {
        term: "User-Centered Design",
        definition: "An iterative design process that focuses on the users and their needs in each phase of the design process.",
        examples: ["Personas", "Usability Testing"]
      },
      {
        term: "Rendering",
        definition: "The process of generating an image from a model by means of computer programs.",
        examples: ["Ray Tracing", "Rasterization"]
      },
      {
        term: "Shaders",
        definition: "Programs that run on the GPU to control the rendering of pixels, vertices, and textures.",
        examples: ["Vertex Shaders", "Fragment Shaders"]
      },
      {
        term: "3D Modeling",
        definition: "The process of developing a mathematical representation of any surface of an object in three dimensions.",
        examples: ["Mesh Modeling", "Solid Modeling"]
      },
      {
        term: "Animation",
        definition: "The process of designing, drawing, making layouts, and preparing photographic sequences integrated in the multimedia and gaming products.",
        examples: ["Keyframe Animation", "Motion Capture"]
      },
      {
        term: "Texture Mapping",
        definition: "A method for adding detail, surface texture, or color to a computer-generated graphic or 3D model.",
        examples: ["UV Mapping", "Bump Mapping"]
      },
      {
        term: "Firewall",
        definition: "A network security device that monitors and filters incoming and outgoing network traffic based on an organization's previously established security policies.",
        examples: ["Packet Filtering Firewall", "Proxy Firewall"]
      },
      {
        term: "Intrusion Detection System (IDS)",
        definition: "A device or software application that monitors a network or systems for malicious activity or policy violations.",
        examples: ["Network IDS", "Host IDS"]
      },
      {
        term: "Malware",
        definition: "Software intentionally designed to cause damage to a computer, server, client, or computer network.",
        examples: ["Viruses", "Worms", "Trojan Horses"]
      },
      {
        term: "Phishing",
        definition: "A method of trying to gather personal information using deceptive e-mails and websites.",
        examples: ["Spear Phishing", "Whaling"]
      },
      {
        term: "Zero-Day Exploit",
        definition: "A cyber attack that occurs on the same day a weakness is discovered in software.",
        examples: ["Zero-Day Attack", "Zero-Day Vulnerability"]
      },
      {
        term: "Qubit",
        definition: "The basic unit of quantum information, representing a two-state (quantum) system.",
        examples: ["Superposition", "Entanglement"]
      },
      {
        term: "Quantum Entanglement",
        definition: "A physical phenomenon that occurs when pairs or groups of particles are generated or interact in ways such that the quantum state of each particle cannot be described independently of the state of the others.",
        examples: ["EPR Paradox", "Bell's Theorem"]
      },
      {
        term: "Quantum Supremacy",
        definition: "The point at which quantum computers can perform a task that classical computers practically cannot.",
        examples: ["Google's Sycamore Processor", "IBM's Quantum Computer"]
      },
      {
        term: "Quantum Cryptography",
        definition: "The use of quantum mechanical properties to perform cryptographic tasks.",
        examples: ["Quantum Key Distribution", "Quantum Random Number Generation"]
      },
      {
        term: "Quantum Algorithm",
        definition: "An algorithm which runs on a realistic model of quantum computation.",
        examples: ["Shor's Algorithm", "Grover's Algorithm"]
      },
      {
        term: "Microcontroller",
        definition: "A compact integrated circuit designed to govern a specific operation in an embedded system.",
        examples: ["Arduino", "PIC Microcontroller"]
      },
      {
        term: "Real-Time Operating System (RTOS)",
        definition: "An operating system intended to serve real-time applications that process data as it comes in, typically without buffer delays.",
        examples: ["FreeRTOS", "VxWorks"]
      },
      {
        term: "Firmware",
        definition: "A specific class of computer software that provides the low-level control for the device's specific hardware.",
        examples: ["BIOS", "Embedded Firmware"]
      },
      {
        term: "System on Chip (SoC)",
        definition: "An integrated circuit that integrates all components of a computer or other electronic system into a single chip.",
        examples: ["Raspberry Pi", "Snapdragon"]
      },
      {
        term: "Internet of Things (IoT)",
        definition: "The network of physical objects that are embedded with sensors, software, and other technologies to connect and exchange data with other devices and systems over the internet.",
        examples: ["Smart Home Devices", "Wearable Health Monitors"]
      },
      {
        term: "Rasterization",
        definition: "The process of converting vector graphics into raster graphics (pixels).",
        examples: ["Rendering 3D scenes", "Displaying images on screens"]
      },
      {
        term: "Shader Programming",
        definition: "Writing programs that run on the GPU to control rendering effects.",
        examples: ["Real-time lighting effects", "Texture mapping"]
      },
      {
        term: "Rendering Techniques",
        definition: "Algorithms used to produce an image from a model by means of computer programs.",
        examples: ["Ray tracing", "Global illumination"]
      },
      {
        term: "Computer Animation",
        definition: "Creating the illusion of motion and shape change by rapidly displaying static images.",
        examples: ["Character animation", "Special effects in movies"]
      },
      {
        term: "Virtual Reality (VR)",
        definition: "Computer-generated simulation of a three-dimensional image or environment.",
        examples: ["Immersive gaming", "Training simulations"]
      },
      {
        term: "Serverless Computing",
        definition: "A cloud computing model where cloud providers manage infrastructure and automatically allocate resources as needed.",
        examples: ["AWS Lambda", "Azure Functions"]
      },
      {
        term: "Multi-Cloud Strategy",
        definition: "The use of multiple cloud computing services in a single heterogeneous architecture.",
        examples: ["Distributed applications", "Disaster recovery"]
      },
      {
        term: "Container Orchestration",
        definition: "Automating the deployment, scaling, and management of containerized applications.",
        examples: ["Kubernetes", "Docker Swarm"]
      },
      {
        term: "Cloud Security",
        definition: "Security measures and technologies designed to protect cloud computing environments.",
        examples: ["Identity and access management (IAM)", "Encryption"]
      },
      {
        term: "Hybrid Cloud",
        definition: "A computing environment that combines a private cloud and one or more public clouds.",
        examples: ["Data portability", "Compliance and regulation"]
      },
      {
        term: "Penetration Testing",
        definition: "The practice of testing a computer system, network, or web application to find security vulnerabilities that an attacker could exploit.",
        examples: ["Ethical hacking", "Red team assessments"]
      },
      {
        term: "Incident Response",
        definition: "The process of responding to and managing a security incident or data breach to limit potential damage.",
        examples: ["Containment and eradication", "Forensic investigation"]
      },
      {
        term: "Encryption Algorithms",
        definition: "Mathematical formulas used to encrypt and decrypt data to protect its confidentiality.",
        examples: ["AES (Advanced Encryption Standard)", "RSA (Rivest-Shamir-Adleman)"]
      },
      {
        term: "Network Security",
        definition: "The measures taken to protect a computer network and data from unauthorized access, misuse, or hacking.",
        examples: ["Firewalls", "Intrusion detection systems (IDS)"]
      },
      {
        term: "Cyber Threat Intelligence",
        definition: "Information collected, processed, and analyzed to understand cyber threats and their actors.",
        examples: ["Threat hunting", "Security information and event management (SIEM)"]
      },
      {
        term: "Cloud Architect",
        definition: "An IT professional responsible for designing and overseeing the implementation of cloud computing solutions, ensuring scalability, security, and efficiency.",
        examples: ["Designing multi-cloud architectures for scalability", "Implementing cloud migration strategies"]
      },
      {
        term: "Blockchain Developer",
        definition: "A developer specializing in creating decentralized applications (dApps) and smart contracts using blockchain technology.",
        examples: ["Writing smart contracts in Solidity", "Implementing blockchain solutions for supply chain management"]
      },
      {
        term: "Full Stack Developer",
        definition: "A developer who works on both the front-end and back-end of web applications, responsible for designing, developing, testing, and deploying software.",
        examples: ["Building responsive web interfaces with React", "Creating RESTful APIs with Node.js and Express"]
      },
      {
        term: "Systems Administrator",
        definition: "An IT professional responsible for managing and maintaining an organization's computer systems and networks, including servers, databases, and hardware.",
        examples: ["Configuring and maintaining Linux servers", "Performing system backups and disaster recovery"]
      },
      {
        term: "Network Engineer",
        definition: "An IT professional responsible for designing, implementing, and managing an organization's computer networks, including LANs, WANs, and VPNs.",
        examples: ["Optimizing network performance using network monitoring tools", "Configuring Cisco routers and switches"]
      },
      {
        term: "Software Tester",
        definition: "A professional responsible for testing software applications to identify bugs, defects, and usability issues before they are released to end-users.",
        examples: ["Executing test cases and scripts", "Performing regression testing after code changes"]
      },
      {
        term: "Frontend Developer",
        definition: "A developer who specializes in creating the visual elements of a website or application that users interact with, using HTML, CSS, and JavaScript.",
        examples: ["Building responsive web pages", "Implementing user interface components based on design mockups"]
      },
      {
        term: "Backend Developer",
        definition: "A developer who focuses on building and maintaining the server-side logic, databases, and APIs that enable the frontend of a web application to function.",
        examples: ["Developing RESTful APIs for data exchange", "Integrating backend systems with third-party services"]
      },
      {
        term: "Data Analyst",
        definition: "An analyst who interprets data to help organizations make informed business decisions, using statistical analysis, data visualization, and database querying skills.",
        examples: ["Creating dashboards to visualize key performance indicators", "Performing ad-hoc analysis on customer behavior data"]
      },
      {
        term: "Full Stack Developer",
        definition: "A developer who works on both the frontend and backend of web applications, handling all aspects of development from server configuration to user interface design.",
        examples: ["Building scalable web applications from concept to deployment", "Optimizing application performance and security"]
      },
      {
        term: "Systems Analyst",
        definition: "An analyst who studies an organization's current computer systems and processes, recommending strategic changes and enhancements to improve efficiency and productivity.",
        examples: ["Conducting requirements gathering sessions with stakeholders", "Designing system architectures and workflows"]
      },
      {
        term: "Network Engineer",
        definition: "An engineer who designs, implements, and manages computer networks, ensuring data communication and connectivity between devices and systems within an organization.",
        examples: ["Configuring routers and switches for optimal network performance", "Troubleshooting network issues and outages"]
      },
      {
        term: "Database Administrator",
        definition: "An administrator who manages and maintains databases, ensuring data integrity, security, and availability for users and applications within an organization.",
        examples: ["Optimizing database performance through indexing and query tuning", "Implementing backup and recovery procedures to safeguard data"]
      },
      {
        term: "Security Analyst",
        definition: "An analyst who monitors an organization's networks and systems for security breaches or intrusions, conducting vulnerability assessments and implementing security measures.",
        examples: ["Investigating security incidents and responding to cyber threats", "Developing and implementing security policies and procedures"]
      },
      {
        term: "Motherboard",
        definition: "The main circuit board that houses the CPU, RAM, and other essential components of a computer system.",
        examples: ["ASUS ROG Strix Z490-E Gaming motherboard", "Gigabyte B450 AORUS PRO WIFI motherboard"]
      },
      {
        term: "Central Processing Unit (CPU)",
        definition: "The brain of the computer that executes instructions and processes data, performing calculations and controlling other components.",
        examples: ["Intel Core i7-11700K", "AMD Ryzen 9 5900X"]
      },
      {
        term: "Random Access Memory (RAM)",
        definition: "Temporary memory that stores data and instructions that the CPU needs quickly, allowing for faster access compared to storage devices.",
        examples: ["Corsair Vengeance LPX 16GB DDR4 RAM", "G.Skill Trident Z RGB Series 32GB DDR4 RAM"]
      },
      {
        term: "Hard Disk Drive (HDD)",
        definition: "A non-volatile storage device that stores data on spinning magnetic disks, providing high capacity but slower data access compared to SSDs.",
        examples: ["Seagate Barracuda 2TB HDD", "Western Digital WD Black 6TB HDD"]
      },
      {
        term: "Solid State Drive (SSD)",
        definition: "A storage device that uses flash memory to store data persistently, offering faster data access and retrieval compared to HDDs.",
        examples: ["Samsung 970 EVO Plus 1TB SSD", "Crucial MX500 500GB SSD"]
      },
      {
        term: "Graphics Processing Unit (GPU)",
        definition: "A specialized electronic circuit designed to accelerate the creation of images in a frame buffer intended for output to a display.",
        examples: ["NVIDIA GeForce RTX 3080", "AMD Radeon RX 6800 XT"]
      },
      {
        term: "Power Supply Unit (PSU)",
        definition: "A hardware component that supplies power to a computer, converting electrical power from an external source to the correct voltage for each component.",
        examples: ["Corsair RM850x 850W 80+ Gold PSU", "EVGA SuperNOVA 750 G5 750W 80+ Gold PSU"]
      },
      {
        term: "Case (Chassis)",
        definition: "The enclosure that houses and protects the internal components of a computer, providing ports for peripheral devices and cooling airflow.",
        examples: ["NZXT H510 Compact ATX Mid-Tower Case", "Cooler Master MasterBox Q300L Micro-ATX Case"]
      },
      {
        term: "Cooling System",
        definition: "Components that manage the temperature of a computer's internal components to prevent overheating, including fans, heat sinks, and liquid cooling systems.",
        examples: ["Corsair Hydro Series H100i RGB Platinum liquid CPU cooler", "Noctua NH-D15 air CPU cooler"]
      },
      {
        term: "Peripheral Devices",
        definition: "Devices that connect to a computer and provide input, output, or storage functions, such as keyboards, mice, printers, and external storage drives.",
        examples: ["Logitech MX Master 3 wireless mouse", "Samsung 970 EVO Plus 2TB NVMe external SSD"]
      },
      {
        term: "Optical Drive",
        definition: "A device used to read and write data to optical discs such as CDs, DVDs, and Blu-ray discs.",
        examples: ["LG Electronics Internal Blu-ray Drive", "Asus DRW-24B1ST Internal DVD Drive"]
      },
      {
        term: "Network Interface Card (NIC)",
        definition: "A hardware component that enables a computer to connect to a network, providing a physical interface for wired or wireless connections.",
        examples: ["Intel Gigabit CT Desktop Adapter", "TP-Link AC1300 PCIe Wireless WiFi PCIe Card"]
      },
      {
        term: "Sound Card",
        definition: "An expansion card that provides audio input and output capabilities for a computer, improving sound quality and supporting various audio formats.",
        examples: ["Creative Sound Blaster Z PCIe Gaming Sound Card", "ASUS Xonar AE 7.1 PCIe Sound Card"]
      },
      {
        term: "Power Supply Cable Management",
        definition: "The process of organizing and routing power supply cables within a computer case to optimize airflow, improve aesthetics, and reduce clutter.",
        examples: ["CableMod Basic Cable Extension Kit", "NZXT Puck Cable Management and Headset Mount"]
      },
      {
        term: "Heat Sink",
        definition: "A passive cooling device that absorbs and dissipates heat away from high-temperature components like CPUs and GPUs to prevent overheating.",
        examples: ["Noctua NH-U12S chromax.Black CPU cooler", "Cooler Master Hyper 212 RGB Black Edition CPU air cooler"]
      },
      {
        term: "External Storage",
        definition: "Storage devices that are connected externally to a computer, providing additional capacity for storing files and data.",
        examples: ["Western Digital My Passport Ultra 4TB external hard drive", "Samsung T7 Touch Portable SSD 1TB"]
      },
      {
        term: "Expansion Card",
        definition: "A printed circuit board that can be installed into an expansion slot on a computer's motherboard to add new functionality or features.",
        examples: ["Elgato Game Capture 4K60 Pro MK.2 PCIe capture card", "StarTech PCIe USB 3.1 card"]
      },
      {
        term: "System Fan",
        definition: "A component used to improve airflow within a computer case, helping to maintain optimal operating temperatures for internal components.",
        examples: ["Arctic P12 PWM PST 120mm case fan", "Noctua NF-A12x25 PWM premium fan"]
      },
      {
        term: "Graphics Card Bracket",
        definition: "A supportive bracket that holds and secures a graphics card in place within the computer case, preventing sag and supporting heavy GPUs.",
        examples: ["Mnpctech GPU support bracket", "upHere GPU Brace Support Video Card"]
      },
      {
        term: "Battery Backup (UPS)",
        definition: "An uninterruptible power supply that provides emergency power to a computer when the main power source fails or drops to an unacceptable voltage level.",
        examples: ["APC UPS, 1500VA Sine Wave UPS Battery Backup", "CyberPower CP1500PFCLCD PFC Sinewave UPS System"]
      },
      {
        term: "Solid State Drive (SSD)",
        definition: "A storage device that uses integrated circuit assemblies to store data persistently, typically using flash memory and providing faster access times than traditional hard disk drives (HDDs).",
        examples: ["Samsung 970 EVO Plus NVMe SSD", "WD Black SN750 NVMe SSD"]
      },
      {
        term: "RAM (Random Access Memory)",
        definition: "A type of computer memory that can be accessed randomly; it stores data and machine code currently being used by the CPU for faster access compared to storage devices.",
        examples: ["Corsair Vengeance LPX 16GB DDR4 RAM", "G.SKILL Trident Z RGB Series 32GB (2 x 16GB) DDR4 RAM"]
      },
      {
        term: "CPU Cooler",
        definition: "A device designed to draw heat away from the CPU and dissipate it into the surrounding environment to prevent overheating and maintain optimal operating temperatures.",
        examples: ["Noctua NH-D15 chromax.Black CPU cooler", "Cooler Master Hyper 212 Evo CPU cooler"]
      },
      {
        term: "Case Fan",
        definition: "A fan designed to cool the inside of a computer case by expelling warm air from the case and drawing cooler air into the case to maintain low operating temperatures.",
        examples: ["Arctic P12 PWM PST CO 120mm case fan", "Corsair LL120 RGB 120mm case fan"]
      },
      {
        term: "Power Supply Unit (PSU)",
        definition: "A hardware component that provides electrical power to a computer by converting electrical current from a power source into usable voltage for the other components.",
        examples: ["EVGA SuperNOVA 850 G5 power supply", "Corsair RM850x 850W power supply"]
      },
      {
        term: "External Graphics Dock",
        definition: "An external device that houses a dedicated graphics card and connects to a laptop or desktop computer to enhance graphical processing power for gaming or professional applications.",
        examples: ["Razer Core X Thunderbolt 3 external graphics enclosure", "ASUS XG Station Pro Thunderbolt 3 eGPU enclosure"]
      },
      {
        term: "External Optical Drive",
        definition: "An optical drive housed in an external enclosure that connects to a computer via USB or other interface to read and write data to optical discs such as CDs, DVDs, and Blu-ray discs.",
        examples: ["LG Electronics GP65NB60 external DVD writer", "Pioneer BDR-XD07B external Blu-ray drive"]
      },
      {
        term: "External SSD Enclosure",
        definition: "An external case or enclosure that houses a solid-state drive (SSD) and provides connectivity via USB, Thunderbolt, or other interfaces to expand storage capacity or enable portable data access.",
        examples: ["Sabrent USB 3.2 Tool-Free Enclosure for NVMe PCIe SSDs", "ORICO 2.5 Inch USB 3.0 External Hard Drive Enclosure"]
      },
      {
        term: "External Thunderbolt Dock",
        definition: "A docking station that connects to a computer via Thunderbolt interface to expand connectivity options, such as additional USB ports, Ethernet, display outputs, and storage devices.",
        examples: ["CalDigit TS3 Plus Thunderbolt 3 Dock", "Belkin Thunderbolt 3 Dock Core"]
      },
      {
        term: "Keyboard",
        definition: "A peripheral device used to input text and commands into a computer or other device by pressing keys.",
        examples: ["Logitech G Pro X Mechanical Gaming Keyboard", "Apple Magic Keyboard"]
      },
      {
        term: "Mouse",
        definition: "A pointing device that detects two-dimensional motion relative to a surface, allowing the user to control a cursor on a computer screen.",
        examples: ["Razer DeathAdder Elite Gaming Mouse", "Logitech MX Master 3 Wireless Mouse"]
      },
      {
        term: "Touchscreen",
        definition: "A display screen that allows users to interact with a computer or device by touching areas on the screen.",
        examples: ["Apple iPad Pro with Retina Display", "Dell XPS 13 2-in-1 Laptop"]
      },
      {
        term: "Scanner",
        definition: "A device that captures images or documents and converts them into digital format that can be stored, edited, or transmitted.",
        examples: ["Epson Perfection V600 Color Photo, Image, Film, Negative & Document Scanner", "Canon CanoScan LiDE 400 Slim Scanner"]
      },
      {
        term: "Printer",
        definition: "A device that produces text and graphics on paper or other media, typically using inkjet or laser technology.",
        examples: ["HP OfficeJet Pro 9015 All-in-One Wireless Printer", "Epson EcoTank ET-2720 Wireless Color All-in-One Supertank Printer"]
      },
      {
        term: "Monitor",
        definition: "A display screen for computers, usually using LCD or LED technology, that provides visual output from the computer's graphics card.",
        examples: ["Dell UltraSharp U2720Q 27-inch 4K Monitor", "ASUS ROG Swift PG279Q 27-inch Gaming Monitor"]
      },
      {
        term: "Headset",
        definition: "A pair of headphones equipped with a microphone, used for audio input and output during calls, gaming, or multimedia consumption.",
        examples: ["SteelSeries Arctis Pro Wireless Gaming Headset", "Bose QuietComfort 35 II Wireless Bluetooth Headphones"]
      },
      {
        term: "Webcam",
        definition: "A small video camera that connects to a computer and enables real-time video communication or recording.",
        examples: ["Logitech C920 HD Pro Webcam", "Razer Kiyo Streaming Webcam"]
      },
      {
        term: "Microphone",
        definition: "A device used to capture sound waves and convert them into electrical signals for recording or amplification.",
        examples: ["Blue Yeti USB Microphone", "Shure SM58-LC Cardioid Dynamic Vocal Microphone"]
      },
      {
        term: "Game Controller",
        definition: "A device used to control video games, typically featuring buttons, joysticks, and triggers for inputting commands.",
        examples: ["Sony DualSense Wireless Controller (PS5)", "Xbox Wireless Controller (Xbox Series X|S)"]
      },
      {
        term: "Graphics Tablet",
        definition: "A flat surface input device used in digital art and design, allowing users to draw directly on the tablet using a stylus or pen.",
        examples: ["Wacom Intuos Pro Digital Graphic Drawing Tablet", "Huion Kamvas Pro 24 Graphics Drawing Monitor"]
      },
      {
        term: "Joystick",
        definition: "A peripheral input device consisting of a stick that pivots on a base and is used to control video games or simulations.",
        examples: ["Logitech Extreme 3D Pro Joystick", "Thrustmaster T.16000M FCS Flight Pack"]
      },
      {
        term: "Trackpad",
        definition: "A touch-sensitive surface on laptops and some keyboards that functions as a pointing device, allowing users to move a cursor and perform gestures.",
        examples: ["Apple Magic Trackpad 2", "Dell XPS 15 Laptop with Precision Touchpad"]
      },
      {
        term: "Barcode Reader",
        definition: "A device that scans and interprets barcodes, converting them into digital data that can be used for inventory tracking, pricing, and other applications.",
        examples: ["Zebra DS2208 Handheld Barcode Scanner", "Honeywell Voyager 1200g Barcode Scanner"]
      },
      {
        term: "Smart Card Reader",
        definition: "A device used to read and write data from smart cards, which are embedded with integrated circuits to store and process information securely.",
        examples: ["ACS ACR39U-NF PocketMate II Smart Card Reader", "Identiv SCR3310v2.0 USB Smart Card Reader"]
      },
      {
        term: "Biometric Scanner",
        definition: "A device that captures and analyzes biometric data such as fingerprints, iris patterns, or facial features for authentication and security purposes.",
        examples: ["Verifi P5100 Premium Metal Fingerprint Reader", "Eikon Mini USB Fingerprint Reader for Windows"]
      },
      {
        term: "Virtual Reality (VR) Headset",
        definition: "A head-mounted display device that provides immersive virtual reality experiences by displaying 3D visuals and tracking head movements.",
        examples: ["Oculus Quest 2 VR Headset", "HTC Vive Cosmos Elite VR Headset"]
      },
      {
        term: "Augmented Reality (AR) Glasses",
        definition: "Eyewear that overlays digital information and visuals onto the real world, enhancing the user's environment with interactive digital elements.",
        examples: ["Microsoft HoloLens 2 Augmented Reality Glasses", "Google Glass Enterprise Edition 2"]
      },
      {
        term: "Projector",
        definition: "A device that projects images or videos onto a surface, typically for presentations, movies, or large-scale display purposes.",
        examples: ["Epson Home Cinema 5050UB 4K PRO-UHD Projector", "BenQ TK850 4K HDR Home Theater Projector"]
      },
      {
        term: "Plotter",
        definition: "A specialized output device that prints vector graphics, typically used in engineering, architecture, and design for precise and detailed drawings.",
        examples: ["HP DesignJet T530 24-Inch Wireless Plotter", "Canon imagePROGRAF TA-30 36-Inch Large Format Plotter"]
      },
      {
        language: "Python",
        description: "A high-level, interpreted programming language known for its simplicity and readability, widely used in web development, scientific computing, and automation.",
        examples: ["Django", "Flask", "NumPy"]
      },
      {
        language: "Java",
        description: "A class-based, object-oriented programming language designed to have as few implementation dependencies as possible, making it portable.",
        examples: ["Spring", "Hibernate", "Android SDK"]
      },
      {
        language: "JavaScript",
        description: "A lightweight, interpreted programming language with first-class functions, primarily used for creating interactive and dynamic web pages.",
        examples: ["React", "Node.js", "Angular"]
      },
      {
        language: "C++",
        description: "A general-purpose programming language known for its efficiency and performance, often used in systems/software development and game development.",
        examples: ["Qt", "Boost", "Unreal Engine"]
      },
      {
        language: "C#",
        description: "A multi-paradigm programming language developed by Microsoft as part of its .NET initiative, used for building Windows applications, web services, and games.",
        examples: ["ASP.NET", "Unity", "Xamarin"]
      },
      {
        language: "Ruby",
        description: "A dynamic, reflective, object-oriented programming language known for its simplicity and productivity, often used in web development.",
        examples: ["Ruby on Rails", "Sinatra", "Rack"]
      },
      {
        language: "Swift",
        description: "A powerful and intuitive programming language for macOS, iOS, watchOS, and tvOS development, designed by Apple for building apps.",
        examples: ["UIKit", "SwiftUI", "Core Data"]
      },
      {
        language: "PHP",
        description: "A server-side scripting language designed for web development, widely used for creating dynamic websites and web applications.",
        examples: ["WordPress", "Drupal", "Magento"]
      },
      {
        language: "SQL",
        description: "A domain-specific language used in programming and designed for managing data held in a relational database management system (RDBMS).",
        examples: ["MySQL", "PostgreSQL", "SQLite"]
      },
      {
        language: "R",
        description: "A programming language and free software environment for statistical computing and graphics, widely used among statisticians and data miners.",
        examples: ["ggplot2", "Shiny", "dplyr"]
      },
      {
        language: "Go",
        description: "An open-source programming language developed by Google, known for its efficiency, concurrency support, and simplicity.",
        examples: ["Docker", "Kubernetes", "Hugo"]
      },
      {
        language: "TypeScript",
        description: "A typed superset of JavaScript that compiles to plain JavaScript, adding static types and other features to help developers write robust applications.",
        examples: ["Angular", "React Native", "NestJS"]
      },
      {
        language: "Kotlin",
        description: "A statically-typed programming language developed by JetBrains, designed to interoperate fully with Java, widely used for Android app development.",
        examples: ["Android Studio", "Ktor", "Spring Boot"]
      },
      {
        language: "Scala",
        description: "A modern multi-paradigm programming language designed to express common programming patterns in a concise, elegant, and type-safe way.",
        examples: ["Apache Spark", "Play Framework", "Akka"]
      },
      {
        language: "Perl",
        description: "A highly capable, feature-rich programming language known for its text processing capabilities and used for web development, network programming, and more.",
        examples: ["Mojolicious", "Dancer", "DBI"]
      },
      {
        language: "Haskell",
        description: "A purely functional programming language with a strong, static type system and designed for high-level abstractions and mathematical functions.",
        examples: ["GHC", "Yesod", "Hoogle"]
      },
      {
        language: "Lua",
        description: "A lightweight, embeddable scripting language known for its speed and simplicity, often used in game development, scripting, and automation.",
        examples: ["Corona SDK", "Redis", "World of Warcraft"]
      },
      {
        language: "Swift",
        description: "A powerful and intuitive programming language for macOS, iOS, watchOS, and tvOS development, designed by Apple for building apps.",
        examples: ["UIKit", "SwiftUI", "Core Data"]
      },
      {
        language: "Rust",
        description: "A systems programming language focused on safety, speed, and concurrency, designed to prevent crashes and eliminate data races.",
        examples: ["Tokio", "Rocket", "actix-web"]
      },
      {
        language: "Assembly",
        description: "A low-level programming language that provides a symbolic representation of the machine code for a specific computer architecture.",
        examples: ["NASM", "MASM", "GCC Inline Assembly"]
      },
      {
        concept: "Function",
        definition: "A block of code designed to perform a specific task, which can be called and executed from other parts of the program.",
        example: "In JavaScript: `function greet(name) { return 'Hello, ' + name; }`"
      },
      {
        concept: "Variable",
        definition: "A storage location identified by a name that holds a value which can be changed during program execution.",
        example: "In Python: `x = 10`"
      },
      {
        concept: "Array",
        definition: "A data structure that stores a collection of elements, typically of the same type, in a contiguous block of memory.",
        example: "In JavaScript: `let numbers = [1, 2, 3, 4];`"
      },
      {
        concept: "Object",
        definition: "A collection of properties, with each property containing a key-value pair, used to store and organize data.",
        example: "In JavaScript: `let person = { name: 'Alice', age: 30 };`"
      },
      {
        concept: "Class",
        definition: "A blueprint for creating objects, defining a set of properties and methods that the created objects will have.",
        example: "In Java: `public class Car { String model; int year; }`"
      },
      {
        concept: "Interface",
        definition: "A contract that specifies a set of methods that a class must implement, but does not provide the implementation itself.",
        example: "In TypeScript: `interface Drivable { drive(): void; }`"
      },
      {
        concept: "Loop",
        definition: "A control structure that repeats a block of code as long as a specified condition is true.",
        example: "In Python: `for i in range(5): print(i)`"
      },
      {
        concept: "Conditional Statement",
        definition: "A statement that performs different actions based on different conditions using `if`, `else`, and `else if`.",
        example: "In JavaScript: `if (x > 10) { console.log('x is greater than 10'); }`"
      },
      {
        concept: "Recursion",
        definition: "A programming technique where a function calls itself in order to solve smaller instances of the same problem.",
        example: "In Python: `def factorial(n): return 1 if n == 0 else n * factorial(n-1)`"
      },
      {
        concept: "Callback Function",
        definition: "A function passed into another function as an argument to be executed later, often used for asynchronous programming.",
        example: "In JavaScript: `setTimeout(() => console.log('Hello, World!'), 1000);`"
      },
      {
        concept: "Lambda Function",
        definition: "An anonymous function defined using the `lambda` keyword, commonly used for short, throwaway functions.",
        example: "In Python: `add = lambda x, y: x + y`"
      },
      {
        concept: "Exception Handling",
        definition: "A mechanism to handle runtime errors gracefully using `try`, `catch`, and `finally` blocks.",
        example: "In Java: `try { int division = 10 / 0; } catch (ArithmeticException e) { System.out.println('Error'); }`"
      },
      {
        concept: "Module",
        definition: "A file containing Python code, which can define functions, classes, and variables that can be used in other Python files.",
        example: "In Python: `import math`"
      },
      {
        concept: "Library",
        definition: "A collection of precompiled routines that a program can use to perform common tasks, such as manipulating data or performing calculations.",
        example: "In JavaScript: `const _ = require('lodash');`"
      },
      {
        concept: "Framework",
        definition: "A pre-built collection of code and tools that provides a foundation for building applications, streamlining the development process.",
        example: "In Python: `import Django`"
      },
      {
        concept: "API",
        definition: "Application Programming Interface, a set of rules and protocols for building and interacting with software applications.",
        example: "In JavaScript: `fetch('https://api.example.com/data')`"
      },
      {
        concept: "Decorator",
        definition: "A design pattern in Python that allows the modification or enhancement of functions or methods without changing their structure.",
        example: "In Python: `@staticmethod def my_method():`"
      },
      {
        concept: "Generator",
        definition: "A function that yields a sequence of values one at a time, instead of returning them all at once, to save memory.",
        example: "In Python: `def count_up_to(max): n = 1 while n <= max: yield n; n += 1`"
      },
      {
        concept: "Thread",
        definition: "A separate path of execution within a program, allowing multiple operations to run concurrently.",
        example: "In Java: `public class MyThread extends Thread { public void run() { System.out.println('Thread running'); } }`"
      },
      {
        concept: "Decorator",
        definition: "A function that modifies or enhances another function or method, often used to add functionality or logging.",
        example: "In Python: `@my_decorator def my_function():`"
      },
      {
        concept: "Template Engine",
        definition: "A tool that generates text or code based on templates and data, commonly used in web development to dynamically generate HTML.",
        example: "In Python: `from jinja2 import Template`"
      },
      {
        concept: "Serialization",
        definition: "The process of converting an object into a format that can be easily stored or transmitted, such as JSON or XML.",
        example: "In Python: `import json; json.dumps(obj)`"
      },
      {
        concept: "Functions",
        description: "Reusable blocks of code that perform a specific task, which can be called upon when needed.",
        examples: ["function greet() { console.log('Hello'); }", "def greet(): print('Hello')", "void greet() { System.out.println('Hello'); }"]
      },
      {
        concept: "Variables",
        description: "Named storage locations in memory that hold data which can be modified during program execution.",
        examples: ["let age = 30;", "var age = 30;", "int age = 30;"]
      },
      {
        concept: "Classes",
        description: "Blueprints for creating objects, encapsulating data for the object and methods to manipulate that data.",
        examples: ["class Person { constructor(name) { this.name = name; } }", "class Person: def __init__(self, name): self.name = name", "class Person { String name; Person(String name) { this.name = name; } }"]
      },
      {
        concept: "Inheritance",
        description: "A mechanism where a new class is derived from an existing class, inheriting fields and methods from the parent class.",
        examples: ["class Student extends Person {}", "class Student(Person): pass", "class Student : public Person {}"]
      },
      {
        concept: "Interfaces",
        description: "Abstract types that define a contract for classes to implement, specifying methods that must be defined.",
        examples: ["interface Drivable { void drive(); }", "class Drivable: def drive(self): pass", "protocol Drivable { func drive() }"]
      },
      {
        concept: "Loops",
        description: "Control structures that repeat a block of code a number of times or until a condition is met.",
        examples: ["for (let i = 0; i < 10; i++) { console.log(i); }", "for i in range(10): print(i)", "for (int i = 0; i < 10; i++) { System.out.println(i); }"]
      },
      {
        concept: "Conditionals",
        description: "Statements that execute a block of code based on whether a condition is true or false.",
        examples: ["if (age > 18) { console.log('Adult'); }", "if age > 18: print('Adult')", "if (age > 18) { System.out.println('Adult'); }"]
      },
      {
        concept: "Attributes",
        description: "Characteristics of an object defined by variables within a class, representing the state or properties of the object.",
        examples: ["class Car { constructor(make) { this.make = make; } }", "class Car: def __init__(self, make): self.make = make", "class Car { String make; Car(String make) { this.make = make; } }"]
      },
      {
        concept: "Modules",
        description: "Files or packages containing code that can be imported and used in other parts of a program.",
        examples: ["import math", "from math import sqrt", "import java.util.*"]
      },
      {
        concept: "Exceptions",
        description: "Mechanisms for handling errors or other exceptional events that disrupt the normal flow of program execution.",
        examples: ["try { int result = 10 / 0; } catch (ArithmeticException e) { System.out.println('Error'); }", "try: result = 10 / 0 except ZeroDivisionError: print('Error')", "try { let result = 10 / 0; } catch (e) { console.log('Error'); }"]
      },
      {
        concept: "Recursion",
        description: "A programming technique where a function calls itself in order to solve a problem.",
        examples: ["function factorial(n) { if (n <= 1) return 1; else return n * factorial(n - 1); }", "def factorial(n): if n <= 1: return 1 else: return n * factorial(n - 1)", "int factorial(int n) { if (n <= 1) return 1; else return n * factorial(n - 1); }"]
      },
      {
        concept: "Data Structures",
        description: "Ways to organize and store data to enable efficient access and modification.",
        examples: ["let list = [1, 2, 3];", "list = [1, 2, 3]", "int[] list = {1, 2, 3};"]
      },
      {
        concept: "Polymorphism",
        description: "The ability of different objects to respond to the same function call in different ways.",
        examples: ["function draw(shape) { shape.draw(); }", "def draw(shape): shape.draw()", "void draw(Shape shape) { shape.draw(); }"]
      },
      
  
    
    // Add more terms as needed
  ];
  
  // Function to perform search and display result
  function searchTerm() {
    const query = document.getElementById('search').value.trim().toLowerCase();
    const result = terms.find(term => term.term.toLowerCase() === query);
  
    if (result) {
      displayResult(result);
    } else {
      document.getElementById('result').classList.add('hidden');
      alert('Term not found');
    }
  }
  
  // Function to display result
  function displayResult(result) {
    document.getElementById('term-title').innerText = result.term;
    document.getElementById('term-definition').innerText = result.definition;
    document.getElementById('term-examples').innerHTML = result.examples.map(example => `<li>${example}</li>`).join('');
    document.getElementById('result').classList.remove('hidden');
  }
  
  // Function to display hints
  function showHints() {
    const query = document.getElementById('search').value.trim().toLowerCase();
    const hints = terms.filter(term => term.term.toLowerCase().includes(query));
  
    const hintList = document.getElementById('hint-list');
    hintList.innerHTML = hints.map(term => `<li>${term.term}</li>`).join('');
    
    if (query === '') {
      hintList.classList.add('hidden');
    } else {
      hintList.classList.remove('hidden');
    }
  }
  
  // Event listener for search button click
  document.getElementById('search-button').addEventListener('click', searchTerm);
  
  // Event listener for Enter key press in search input
  document.getElementById('search').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      searchTerm();
    } else {
      showHints();
    }
  });
  
  // Event listener for hint list click
  document.getElementById('hint-list').addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
      document.getElementById('search').value = event.target.innerText;
      document.getElementById('hint-list').classList.add('hidden');
      searchTerm();
    }
  });
  