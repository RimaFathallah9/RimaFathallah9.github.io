export const profile = {
  firstName: 'Rima',
  name: 'Rima Fathallah',
  role: 'AI and neuroscience researcher',
  affiliation: 'École Polytechnique de Sousse',
  field: 'Pediatric cerebral palsy',
  location: 'Tunisia',
  status: 'Open to research collaborations and AI roles',
  tagline:
    'I study how neuroplasticity changes over time in children with cerebral palsy, using machine learning. The study is still being shaped with Sahloul and Hached university hospitals.',
  summary: [
    'The question I want to work on is how a child’s brain changes after early injury, and whether a model can describe that change over time. That study is in design with Sahloul University Hospital and Hached University Hospital.',
    'I came to this through mathematics, then computer science, and now a data science engineering degree at École Polytechnique de Sousse. Before this question, I completed a MITACS research internship at Concordia University, building and validating machine learning models and a platform the team used to document results.',
  ],
  words: ['Plasticity', 'Models', 'Trajectories', 'Questions'],
  stats: [
    { value: '3+', label: 'Years in AI and data' },
    { value: '7', label: 'Selected projects' },
    { value: 'C1', label: 'English, DET' },
  ],
  email: 'rimafathallah.9@gmail.com',
  phone: '+216 56 479 019',
  phoneHref: 'tel:+21656479019',
  cv: '/cv/Rima-Fathallah-CV.pdf',
  quote:
    'Success is not final, failure is not fatal: it is the courage to continue that counts.',
  quoteBy: 'Winston Churchill',
  socials: [
    { label: 'Email', href: 'mailto:rimafathallah.9@gmail.com' },
    { label: 'Phone', href: 'tel:+21656479019' },
    { label: 'LinkedIn', href: 'https://tn.linkedin.com/in/rimafathallah' },
    { label: 'GitHub', href: 'https://github.com/RimaFathallah9' },
    { label: 'Instagram', href: 'https://www.instagram.com/rima_fathallah/' },
    { label: 'Facebook', href: 'https://www.facebook.com/rima.fathallah.09/' },
  ],
}

export const skillGroups = [
  {
    label: 'Programming',
    items: ['Python', 'R', 'C++', 'JavaScript', 'C#', 'SQL'],
  },
  {
    label: 'Machine learning',
    items: [
      'Scikit-learn',
      'XGBoost',
      'Random Forest',
      'Pandas',
      'NumPy',
      'SciPy',
      'Feature engineering',
      'Model evaluation',
    ],
  },
  {
    label: 'Deep learning & generative AI',
    items: [
      'PyTorch',
      'TensorFlow',
      'CNNs',
      'RNNs / LSTMs',
      'Transformers',
      'Hugging Face',
      'LLMs',
      'Fine-tuning',
      'AI agents',
    ],
  },
  {
    label: 'Computer vision & research',
    items: [
      'OpenCV',
      'Image processing',
      'Object detection',
      'Image classification',
      'Experimental design',
      'Ablation studies',
    ],
  },
  {
    label: 'Development',
    items: ['Git', 'Docker', 'Flask', 'FastAPI', 'REST APIs', 'React', 'TypeScript', 'MySQL', 'PostgreSQL', 'Linux', 'LaTeX'],
  },
]

export const skills = skillGroups.flatMap((group) => group.items)

export const answers = [
  {
    question: 'Who is Rima Fathallah?',
    answer:
      'Rima Fathallah is an AI and neuroscience researcher in Tunisia, working on pediatric cerebral palsy. She is designing a study of how neuroplasticity changes over time, with Sahloul University Hospital and Hached University Hospital. She trained in mathematics and computer science and is in a data science engineering program at École Polytechnique de Sousse.',
  },
  {
    question: 'What does Rima Fathallah work on?',
    answer:
      'She is designing a study of neuroplasticity in children with cerebral palsy, and she builds machine learning models. A MITACS research internship at Concordia University is completed. She is open to research collaborations and AI roles.',
  },
  {
    question: 'Where is Rima Fathallah based?',
    answer: 'Rima Fathallah is based in Tunisia. She is a student at École Polytechnique de Sousse and is open to research collaborations and AI roles.',
  },
  {
    question: 'How can I contact Rima Fathallah?',
    answer:
      'Email rimafathallah.9@gmail.com, call +216 56 479 019, or reach her on LinkedIn at tn.linkedin.com/in/rimafathallah and GitHub at github.com/RimaFathallah9.',
  },
]

export const education = [
  {
    years: 'Sep 2025 — Present',
    school: 'École Polytechnique de Sousse',
    title: 'Engineering degree in Data Science',
    detail: 'Evening courses. Modules: MLOps, AIoT, MERN, NLP, C, AI, CyberSec.',
  },
  {
    years: 'Sep 2023 — Jul 2025',
    school: 'ESSTHS, Hammam Sousse',
    title: 'Bachelor’s degree in Computer Science',
    detail:
      'Algorithms, industrial programming, advanced object-oriented programming, ISTQB, web programming, IoT, AI and machine learning.',
  },
  {
    years: 'Sep 2021 — Jun 2023',
    school: 'ESSTHS, Hammam Sousse',
    title: 'Bachelor’s degree in Mathematics',
    detail: 'Statistics with R, probabilities, operational research, queuing theory, algebra and analysis.',
  },
]

export const languages = [
  { name: 'Arabic', level: 'Native' },
  { name: 'English', level: 'DET — C1' },
  { name: 'French', level: 'DELF — B2' },
  { name: 'German', level: 'ELIT — A1' },
]

export const certificates = [
  { title: 'Fundamentals of Deep Learning', issuer: 'NVIDIA Deep Learning Institute' },
  { title: 'Building Transformer-Based NLP Applications', issuer: 'NVIDIA Deep Learning Institute' },
  { title: 'Applications of AI for Predictive Maintenance', issuer: 'NVIDIA Deep Learning Institute' },
  { title: 'AI-900: Azure AI Fundamentals', issuer: 'Microsoft Certified' },
  { title: 'Introduction to Security Principles in Cloud Computing', issuer: 'Google Cloud Security — Coursera' },
]

export const studies = [
  {
    partner: 'Sahloul University Hospital',
    program: 'With Hached University Hospital',
    title: 'AI-driven modeling of neuroplasticity trajectories in pediatric cerebral palsy',
    time: 'Aug 2026 — Present',
    place: 'Tunisia',
    status: 'Study design',
    focus: true,
    question: 'How does neuroplasticity change over time in children with cerebral palsy?',
    why: 'Cerebral palsy affects movement from early life. This study aims to model that change over time, with two university hospitals in Tunisia.',
    methods: 'The approach is part of the design now underway with the hospitals.',
    resultLabel: 'Where it stands',
    result:
      'Opened in August 2026 with Sahloul University Hospital, with Hached University Hospital. The aim is a model of how neuroplasticity changes over time in children with cerebral palsy.',
  },
  {
    partner: 'Concordia University',
    program: 'MITACS Global Research Internship',
    title: 'Machine learning models and an automated research platform',
    time: 'Jan 2025 — Jul 2025',
    place: 'Montreal, Canada',
    status: 'Completed',
    focus: false,
    question:
      'How can a research team prototype a model and document the result without rebuilding the same steps by hand?',
    why: 'A research team needs a way to try a model and keep a record of what they tried. This internship built that support.',
    methods: 'Python, XGBoost, LSTM, Pandas, Scikit-learn, and SQL.',
    resultLabel: 'What was delivered',
    result:
      'Developed, calibrated, and validated machine learning models, prepared the datasets, and built an automated platform the research team used to prototype and document results.',
  },
]

export const updates = [
  {
    date: 'Aug 2026',
    text: 'Opened a pediatric cerebral palsy study with Sahloul University Hospital, with Hached University Hospital. It is in study design.',
  },
  {
    date: 'May 2026',
    text: 'Second place in the 2026 AI NIGHT Challenge, ARSII. Fourth place in the 2024 edition.',
  },
  {
    date: 'Jul 2025',
    text: 'Completed a MITACS Global Research Internship at Concordia University in Montreal.',
  },
]

export const outputs = [
  {
    label: 'Ongoing study',
    title: 'Neuroplasticity in pediatric cerebral palsy',
    detail:
      'Study design with Sahloul University Hospital and Hached University Hospital. The aim is to model how neuroplasticity changes over time in children with cerebral palsy.',
    href: '#research',
    link: 'Read the study',
  },
  {
    label: 'Completed internship',
    title: 'MITACS, Concordia University',
    detail:
      'In Montreal, from January to July 2025, built and validated machine learning models and a platform the research team used to prototype and document results.',
    href: '#research',
    link: 'Read the study',
  },
  {
    label: 'Competition',
    title: 'AI NIGHT Challenge',
    detail: 'Second place in the 2026 edition, and fourth place in the 2024 edition. Held by ARSII.',
    href: '',
    link: '',
  },
  {
    label: 'Competition',
    title: 'Herotopia Challenge',
    detail: 'First place at IEEE TSYP 13, December 2025.',
    href: '',
    link: '',
  },
  {
    label: 'Code',
    title: 'NEXOVA',
    detail: 'An AI platform that analyzes and optimizes energy consumption.',
    href: 'https://github.com/RimaFathallah9/NEXOVA-Web-R8',
    link: 'GitHub',
  },
]

export const projects = [
  {
    title: 'NEXOVA',
    category: 'Startup',
    time: 'Sep 2024 — Present',
    description:
      'An AI platform that analyzes and optimizes energy consumption, so electricity use drops and the system runs more efficiently.',
    tags: ['Python', 'Machine Learning', 'Pandas', 'NumPy', 'Scikit-learn'],
    href: 'https://github.com/RimaFathallah9/NEXOVA-Web-R8',
  },
  {
    title: 'Autonomous Data Analysis Agent',
    category: 'Personal project',
    time: 'Jul 2026 — Sep 2026',
    description:
      'An agent that cleans data, analyzes it, visualizes it, detects anomalies, and writes the report from a request.',
    tags: ['Python', 'LangGraph', 'LLMs', 'FastAPI', 'Plotly', 'Docker'],
    href: '',
  },
  {
    title: 'Patient Risk Assessment',
    category: 'Mid-term project',
    time: 'Apr 2026 — Jun 2026',
    description:
      'A multimodal system that combines clinical data, medical images, and patient history to predict patient risk.',
    tags: ['CNN', 'Vision Transformers', 'XGBoost', 'SHAP', 'Grad-CAM'],
    href: '',
  },
  {
    title: 'Misinformation Detection',
    category: 'Evaluation project',
    time: 'Feb 2026 — Apr 2026',
    description:
      'An explainable multilingual NLP system that detects misinformation across languages.',
    tags: ['BERT', 'AraBERT', 'LSTM', 'Hugging Face', 'Explainable AI'],
    href: '',
  },
  {
    title: 'ToolMind',
    category: 'School project',
    time: 'Dec 2025 — Feb 2026',
    description:
      'An agent that plans a task, chooses tools and APIs, and answers through structured tool routing.',
    tags: ['Llama', 'LangGraph', 'LangChain', 'FastAPI', 'MLflow'],
    href: '',
  },
  {
    title: 'DEXTRA',
    category: 'Congress challenge',
    time: 'Sep 2025 — Dec 2025',
    description:
      'AI-powered smart gloves that translate between sign language and speech in real time, using embedded machine learning.',
    tags: ['Embedded AI', 'Computer Vision', 'Sensor data', 'IoT'],
    href: '',
  },
  {
    title: 'Talynk',
    category: 'Personal project',
    time: 'Aug 2025 — Nov 2025',
    description:
      'A platform for CV generation and interview preparation, built with NLP and machine learning.',
    tags: ['NLP', 'LLMs', 'Scikit-learn', 'Text processing'],
    href: '',
  },
]

export const experience = [
  {
    title: 'AI Developer Engineer',
    type: 'Full-time',
    place: 'Exceed Your Limits Marketing',
    time: 'Mar 2026 — Present',
    where: 'Germany, remote',
    href: 'https://eyl-educate.com/',
    linkLabel: 'eyl-educate.com',
    points: [
      'Building an AI website that turns a prompt into a working site and automates code generation.',
      'Optimizing course, webinar, and payment workflows, and connecting REST APIs to databases with 100K+ records.',
    ],
    tags: ['Python', 'LLMs', 'C#', '.NET', 'React', 'TypeScript', 'Docker'],
  },
  {
    title: 'Researcher, MITACS GRI ’25',
    type: 'Internship',
    place: 'Concordia University',
    time: 'Jan 2025 — Jul 2025',
    where: 'Montreal, Canada',
    href: '',
    linkLabel: '',
    points: [
      'Developed, calibrated, and validated machine learning models, and prepared the datasets behind them.',
      'Designed an automated platform, prototyped solutions, and documented findings for the research team.',
    ],
    tags: ['Python', 'XGBoost', 'LSTM', 'Pandas', 'Scikit-learn', 'SQL'],
  },
  {
    title: 'Junior Instructor',
    type: 'Part-time',
    place: 'Go My Code',
    time: 'Sep 2023 — Apr 2025',
    where: 'Tunisia',
    href: '',
    linkLabel: '',
    points: [
      'Mentored students across AI, game development, and creative technologies, with a 95% project completion rate.',
      'Taught generative AI, Unity, Scratch, and Adobe, and student performance rose by 30%.',
    ],
    tags: ['Generative AI', 'Unity', 'Scratch', 'Adobe Illustrator'],
  },
  {
    title: 'Junior Artificial Intelligence Engineer',
    type: 'Internship',
    place: 'Ozeol.com',
    time: 'Jun 2024 — Sep 2024',
    where: 'Tunisia',
    href: '',
    linkLabel: '',
    points: [
      'Designed data pipelines that improved processing efficiency by 27% and covered 5K+ records for real-time reports.',
      'Built collection and validation workflows that cut data inconsistencies by 13%.',
    ],
    tags: ['Python', 'FastAPI', 'SQL', 'Pandas', 'Web scraping'],
  },
  {
    title: 'Junior Software Engineer',
    type: 'Internship',
    place: 'Draexlmaier',
    time: 'Aug 2023 — Oct 2023',
    where: 'Tunisia',
    href: '',
    linkLabel: '',
    points: [
      'Designed an anonymous employee feedback platform that increased engagement by 25%.',
      'Built real-time dashboards that improved how quickly management could respond, by 20%.',
    ],
    tags: ['Power Apps', 'Power BI', 'SQL', 'Data visualization'],
  },
  {
    title: 'Automation Engineer',
    type: 'Part-time',
    place: 'Elit School of Languages',
    time: 'Jun 2022 — Oct 2022',
    where: 'Tunisia',
    href: '',
    linkLabel: '',
    points: [
      'Automated data processing and management, improving productivity by 30%.',
      'Built a certification system with live data updates, improving user satisfaction by 20%.',
    ],
    tags: ['Python', 'Pandas', 'NumPy', 'Automation'],
  },
  {
    title: 'Junior Web Developer',
    type: 'Internship',
    place: 'BillCom Consulting',
    time: 'Jul 2022 — Sep 2022',
    where: 'Tunisia',
    href: '',
    linkLabel: '',
    points: [
      'Designed a scalable data platform and improved database performance by 18%.',
      'Automated Linux deployment and maintenance so the platform needed less manual work.',
    ],
    tags: ['Python', 'MySQL', 'Linux', 'SQL'],
  },
]

export const teaching = [
  {
    time: 'Sep 2023 — Apr 2025',
    title: 'Junior Instructor',
    place: 'Go My Code',
    where: 'Tunisia',
    points: [
      'Mentored students across AI, game development, and creative technologies, with a 95% project completion rate.',
      'Taught generative AI, Unity, Scratch, and Adobe, and student performance rose by 30%.',
    ],
  },
  {
    time: 'IEEE',
    title: 'AI',
    place: 'IEEE mentor',
    where: '',
    points: ['Mentored an IEEE session on AI.'],
  },
  {
    time: 'IEEE',
    title: 'NLP',
    place: 'IEEE mentor',
    where: '',
    points: ['Mentored an IEEE session on natural language processing.'],
  },
  {
    time: 'IEEE',
    title: 'Explainable AI',
    place: 'IEEE mentor',
    where: '',
    points: ['Mentored an IEEE session on explainable AI.'],
  },
]

export const awards = [
  {
    title: 'AI NIGHT Challenge',
    by: 'ARSII',
    result: 'Second place, 2026 edition. Fourth place, 2024 edition.',
    date: 'May 2026',
  },
  {
    title: 'Herotopia Challenge',
    by: 'IEEE TSYP 13',
    result: 'First place.',
    date: 'Dec 2025',
  },
]

export const volunteering = [
  {
    title: 'Program Co-Lead',
    place: 'UNESCO Chaire EDE × IEEE',
    time: 'Jan 2026 — Dec 2026',
    detail: 'Led 30+ ambassadors to develop monthly sustainable projects with measurable impact across Tunisia.',
  },
  {
    title: 'Project Coordinator',
    place: 'IEEE Tunisia Section — SIGHT Group',
    time: 'Jan 2025 — Dec 2026',
    detail:
      'Coordinates sustainable projects aligned with the SDGs in Tunisia, including Sustainable Technology, ThyroCare, and Bled el Khir.',
  },
  {
    title: 'Co-Lead',
    place: 'IEEEXtreme 18.0 — Region 8',
    time: 'Sep 2023 — Oct 2024',
    detail:
      'Led a team of 90+ members across Africa, Europe, and the Middle East for a programming competition with 10K+ participants.',
  },
  {
    title: 'Chair',
    place: 'IEEE Tunisia Section — ESSTHS Student Branch',
    time: 'Jan 2023 — Dec 2023',
    detail:
      'Led the largest student branch in Tunisia, with first place in 8+ competitions, and organized TSYP 11 with 1,200+ participants and 15 challenges.',
  },
]
