export const ROADMAPS = [
  {
    id: "frontend",
    title: "Frontend Developer",
    iconName: "Layout",
    badge: "Web Experience",
    shortDescription: "Build modern, responsive web experiences and become confident with the frontend ecosystem.",
    description: "Master HTML, CSS, modern JavaScript, React, TypeScript, and performance optimization to construct state-of-the-art user interfaces.",
    color: "from-blue-500 to-cyan-500",
    accentColor: "blue",
    approxDuration: "12-16 Weeks",
    stages: [
      {
        id: "fe-01",
        stageNumber: "01",
        title: "Foundations",
        description: "Core building blocks of modern web design and interactive user interfaces.",
        milestones: [
          { id: "fe-html5", title: "HTML5 & Semantic Structure", description: "Learn accessibility, SEO metadata, and structural semantics.", dayLink: 1 },
          { id: "fe-css-flex-grid", title: "CSS Flexbox & Grid Layouts", description: "Master responsive layout systems without external frameworks.", dayLink: 2 },
          { id: "fe-js-basics", title: "JavaScript Fundamentals & DOM", description: "Variables, functions, DOM manipulation, and event handling.", dayLink: 3 },
          { id: "fe-responsive", title: "Responsive Web Design", description: "Media queries, fluid typography, and mobile-first layouts.", dayLink: 4 }
        ]
      },
      {
        id: "fe-02",
        stageNumber: "02",
        title: "React Ecosystem",
        description: "Declarative component-driven UI architecture and state management.",
        milestones: [
          { id: "fe-react-basics", title: "React Component Architecture", description: "JSX, props, state, and component composition.", dayLink: 5 },
          { id: "fe-react-hooks", title: "Hooks & Side Effects", description: "useState, useEffect, useMemo, and custom hooks.", dayLink: 6 },
          { id: "fe-react-router", title: "Client-Side Routing", description: "Single-page application navigation with React Router v7.", dayLink: 7 },
          { id: "fe-state-management", title: "Context API & State", description: "Global state patterns, Context API, and state optimization.", dayLink: 8 }
        ]
      },
      {
        id: "fe-03",
        stageNumber: "03",
        title: "Advanced Styling & Tools",
        description: "Modern CSS engines, build tools, and developer efficiency.",
        milestones: [
          { id: "fe-tailwind", title: "Tailwind CSS & Design Tokens", description: "Utility-first CSS, custom themes, dark mode implementations.", dayLink: 9 },
          { id: "fe-vite-bundler", title: "Vite & Modern Build Tools", description: "Module bundling, environment variables, and fast HMR.", dayLink: 10 },
          { id: "fe-performance", title: "Web Performance & Core Web Vitals", description: "Lighthouse audits, code splitting, image optimization.", dayLink: 11 },
          { id: "fe-a11y", title: "Web Accessibility (a11y)", description: "ARIA roles, keyboard navigation, and screen reader compatibility." }
        ]
      },
      {
        id: "fe-04",
        stageNumber: "04",
        title: "TypeScript & Testing",
        description: "Type safety, robust component logic, and automated testing.",
        milestones: [
          { id: "fe-ts-basics", title: "TypeScript Fundamentals", description: "Types, interfaces, generics, and strict type checking.", dayLink: 12 },
          { id: "fe-ts-react", title: "React with TypeScript", description: "Typed props, event handling, and generic custom hooks." },
          { id: "fe-testing-unit", title: "Unit Testing with Vitest", description: "Testing React components and hook logic with Vitest." },
          { id: "fe-testing-e2e", title: "End-to-End Testing Basics", description: "Writing basic E2E user interaction flows with Playwright." }
        ]
      },
      {
        id: "fe-05",
        stageNumber: "05",
        title: "Production & Next.js",
        description: "Server-side rendering, full-stack React framework, and deployment.",
        milestones: [
          { id: "fe-nextjs-app", title: "Next.js App Router", description: "Server components, client components, and file-based routing." },
          { id: "fe-ssr-ssg", title: "SSR & Static Site Generation", description: "Optimizing render strategies for performance and SEO." },
          { id: "fe-deployment", title: "CI/CD & Cloud Deployment", description: "Deploying production builds to Vercel/Netlify with automated preview environments." }
        ]
      },
      {
        id: "fe-06",
        stageNumber: "06",
        title: "Projects",
        description: "Portfolio-ready applications showcasing full frontend mastery.",
        milestones: [
          { id: "fe-proj-dashboard", title: "Interactive Analytics Dashboard", description: "Build a data-dense dashboard with real-time charts and dark mode.", dayLink: 13 },
          { id: "fe-proj-portfolio", title: "Personal Developer Portfolio", description: "Design a high-converting, showcase portfolio with proof of work." }
        ]
      }
    ]
  },
  {
    id: "backend",
    title: "Backend Developer",
    iconName: "Server",
    badge: "Scalable Systems",
    shortDescription: "Learn APIs, databases, authentication and scalable server-side development.",
    description: "Master Node.js, Express, SQL, NoSQL databases, RESTful APIs, JWT authentication, and cloud infrastructure.",
    color: "from-emerald-500 to-teal-500",
    accentColor: "emerald",
    approxDuration: "14-18 Weeks",
    stages: [
      {
        id: "be-01",
        stageNumber: "01",
        title: "Foundations & Node.js",
        description: "Server runtime environments, asynchronous architecture, and HTTP fundamentals.",
        milestones: [
          { id: "be-node-runtime", title: "Node.js Runtime & Event Loop", description: "Non-blocking I/O, event loop mechanism, and module systems.", dayLink: 1 },
          { id: "be-async-js", title: "Async/Await & Promises", description: "Handling concurrency, error catching, and asynchronous streams.", dayLink: 3 },
          { id: "be-npm", title: "NPM & Dependency Management", description: "Managing packages, semantic versioning, and environment config.", dayLink: 4 },
          { id: "be-http", title: "HTTP Protocol & REST Concepts", description: "Request methods, headers, status codes, and URI design.", dayLink: 5 }
        ]
      },
      {
        id: "be-02",
        stageNumber: "02",
        title: "API Development",
        description: "Designing robust server controllers, routing, and request validation.",
        milestones: [
          { id: "be-express-basics", title: "Express.js Architecture", description: "Routing, controller layers, and request/response pipelines.", dayLink: 6 },
          { id: "be-middleware", title: "Custom Middleware & Error Handling", description: "Building validation middleware and global error handlers.", dayLink: 7 },
          { id: "be-validation", title: "Schema Validation with Zod/Joi", description: "Sanitizing user inputs and validating body payloads.", dayLink: 8 },
          { id: "be-rest-best", title: "RESTful API Best Practices", description: "Pagination, filtering, sorting, and standardized response wrappers." }
        ]
      },
      {
        id: "be-03",
        stageNumber: "03",
        title: "Databases & ORMs",
        description: "Data persistence, database modeling, and query execution.",
        milestones: [
          { id: "be-relational-sql", title: "Relational DBs & PostgreSQL", description: "Tables, primary/foreign keys, joins, and indexing.", dayLink: 9 },
          { id: "be-nosql-mongo", title: "NoSQL & MongoDB Fundamentals", description: "Documents, collections, schemas, and aggregation pipelines.", dayLink: 10 },
          { id: "be-orm-prisma", title: "Prisma & Mongoose ORM/ODM", description: "Type-safe database queries, schema migrations, and relations.", dayLink: 12 },
          { id: "be-indexing", title: "Database Optimization & Indexing", description: "Query execution plans, compound indexes, and performance tuning." }
        ]
      },
      {
        id: "be-04",
        stageNumber: "04",
        title: "Authentication & Security",
        description: "User security, session control, and API defense mechanisms.",
        milestones: [
          { id: "be-jwt-auth", title: "JWT & Cookie Authentication", description: "Access tokens, refresh tokens, and httpOnly cookie strategies." },
          { id: "be-password-hash", title: "Password Hashing & Bcrypt", description: "Salting, hashing algorithms, and secure login pipelines." },
          { id: "be-oauth", title: "OAuth 2.0 & Social Login", description: "Integrating GitHub and Google authentication flows." },
          { id: "be-security-headers", title: "API Security & Rate Limiting", description: "CORS configuration, Helmet headers, rate limiters, and CSRF defense." }
        ]
      },
      {
        id: "be-05",
        stageNumber: "05",
        title: "Advanced Architecture",
        description: "Caching, real-time events, microservices, and monitoring.",
        milestones: [
          { id: "be-caching-redis", title: "Caching with Redis", description: "In-memory caching strategies, TTL, and cache invalidation." },
          { id: "be-websockets", title: "Real-Time WebSockets & Socket.io", description: "Bi-directional event streaming for real-time applications." },
          { id: "be-message-queues", title: "Background Jobs & Task Queues", description: "Processing async tasks using BullMQ and message brokers." }
        ]
      },
      {
        id: "be-06",
        stageNumber: "06",
        title: "Projects",
        description: "High-performance backend systems built for production scale.",
        milestones: [
          { id: "be-proj-auth-api", title: "Scalable E-Commerce Backend API", description: "Build a complete REST API with auth, checkout, and inventory control." },
          { id: "be-proj-realtime", title: "Real-Time Notification & Messaging Engine", description: "Deploy a socket-powered messaging backend service." }
        ]
      }
    ]
  },
  {
    id: "fullstack",
    title: "Full-Stack Developer",
    iconName: "Layers",
    badge: "Complete Apps",
    shortDescription: "Build complete applications from frontend to backend.",
    description: "Master full-stack JavaScript/TypeScript engineering: React frontend, Node.js backend, databases, authentication, and cloud deployment.",
    color: "from-indigo-500 to-purple-600",
    accentColor: "indigo",
    approxDuration: "16-24 Weeks",
    stages: [
      {
        id: "fs-01",
        stageNumber: "01",
        title: "Foundations",
        description: "Web mechanics, HTML, CSS, JavaScript, and version control.",
        milestones: [
          { id: "fs-html-css", title: "HTML & CSS Core", description: "Semantic markup, CSS Flexbox, and Grid layouts.", dayLink: 1 },
          { id: "fs-js-fund", title: "JavaScript Fundamentals", description: "ES6+, functions, async/await, and DOM manipulation.", dayLink: 3 },
          { id: "fs-git-workflow", title: "Git & GitHub Workflow", description: "Version control, branching, pull requests, and code reviews.", dayLink: 4 }
        ]
      },
      {
        id: "fs-02",
        stageNumber: "02",
        title: "Frontend",
        description: "Interactive client applications built with React and TypeScript.",
        milestones: [
          { id: "fs-react", title: "React Fundamentals", description: "Components, props, state, hooks, and event handling.", dayLink: 5 },
          { id: "fs-adv-react", title: "Advanced React Patterns", description: "Context API, performance memoization, and custom hooks.", dayLink: 7 },
          { id: "fs-typescript", title: "TypeScript Integration", description: "Adding strict typing across client components and API types.", dayLink: 11 }
        ]
      },
      {
        id: "fs-03",
        stageNumber: "03",
        title: "Backend",
        description: "Server-side architecture, REST APIs, and database storage.",
        milestones: [
          { id: "fs-nodejs", title: "Node.js & Runtime Basics", description: "Asynchronous I/O, NPM scripts, and project structure.", dayLink: 8 },
          { id: "fs-express", title: "Express.js API Architecture", description: "Routes, controllers, middleware, and request handling.", dayLink: 10 },
          { id: "fs-mongodb", title: "MongoDB & Database Modeling", description: "Schemas, queries, Mongoose ORM, and relational links.", dayLink: 12 }
        ]
      },
      {
        id: "fs-04",
        stageNumber: "04",
        title: "Advanced",
        description: "Authentication, real-time communication, and payment systems.",
        milestones: [
          { id: "fs-auth", title: "Authentication & Security", description: "JWT tokens, secure HTTP cookies, and protected routes." },
          { id: "fs-apis", title: "API Integration & Consumption", description: "Third-party APIs, Axios interceptors, and error boundaries." },
          { id: "fs-realtime", title: "Real-time Applications", description: "WebSockets, live data syncing, and event broadcasting." }
        ]
      },
      {
        id: "fs-05",
        stageNumber: "05",
        title: "Production",
        description: "Containerization, continuous delivery, and infrastructure.",
        milestones: [
          { id: "fs-docker", title: "Docker Containerization", description: "Writing Dockerfiles, multi-stage builds, and Docker Compose." },
          { id: "fs-deployment", title: "Cloud Deployment", description: "Deploying full-stack apps to Vercel, Render, or AWS." },
          { id: "fs-cicd", title: "CI/CD & Monitoring", description: "Automated GitHub Actions workflows and error logging." }
        ]
      },
      {
        id: "fs-06",
        stageNumber: "06",
        title: "Projects",
        description: "Full-stack SaaS applications proving end-to-end expertise.",
        milestones: [
          { id: "fs-proj-fullstack", title: "Full-Stack SaaS Product", description: "Build a production-grade app with user auth, database, and payments.", dayLink: 13 },
          { id: "fs-proj-portfolio", title: "Full-Stack Portfolio Project", description: "Deploy a high-visibility portfolio demonstrating your complete stack." }
        ]
      }
    ]
  },
  {
    id: "aiml",
    title: "AI / ML Engineer",
    iconName: "Sparkles",
    badge: "Intelligent Systems",
    shortDescription: "Learn Python, machine learning fundamentals and build intelligent applications.",
    description: "Master Python programming, machine learning algorithms, deep learning with PyTorch/TensorFlow, and modern LLM orchestration.",
    color: "from-amber-500 to-orange-600",
    accentColor: "amber",
    approxDuration: "18-24 Weeks",
    stages: [
      {
        id: "ai-01",
        stageNumber: "01",
        title: "Python & Math Foundations",
        description: "Core Python fluency and fundamental mathematics for artificial intelligence.",
        milestones: [
          { id: "ai-python-core", title: "Python Programming & OOP", description: "Classes, objects, comprehensions, and Pythonic patterns.", dayLink: 1 },
          { id: "ai-data-struct", title: "Data Structures in Python", description: "Lists, dicts, sets, tuples, and memory considerations.", dayLink: 2 },
          { id: "ai-linear-algebra", title: "Linear Algebra & Calculus", description: "Vectors, matrices, dot products, eigenvalues, and gradients.", dayLink: 3 },
          { id: "ai-probability", title: "Probability & Statistics", description: "Distributions, Bayes theorem, expected values, and hypothesis testing." }
        ]
      },
      {
        id: "ai-02",
        stageNumber: "02",
        title: "Data Engineering for AI",
        description: "Processing, manipulating, and preparing data for machine learning models.",
        milestones: [
          { id: "ai-numpy", title: "NumPy & Matrix Operations", description: "High-performance vector operations and array broadcasting.", dayLink: 4 },
          { id: "ai-pandas", title: "Pandas Data Manipulation", description: "DataFrames, data cleaning, filtering, and aggregation.", dayLink: 5 },
          { id: "ai-visualization", title: "Data Visualization (Matplotlib)", description: "Creating exploratory plots, histograms, and heatmaps.", dayLink: 6 },
          { id: "ai-preprocessing", title: "Feature Engineering & Scaling", description: "One-hot encoding, normalization, and handling missing data." }
        ]
      },
      {
        id: "ai-03",
        stageNumber: "03",
        title: "Classical Machine Learning",
        description: "Supervised and unsupervised machine learning algorithms.",
        milestones: [
          { id: "ai-supervised", title: "Supervised Learning Models", description: "Linear regression, logistic regression, decision trees, random forests.", dayLink: 8 },
          { id: "ai-unsupervised", title: "Unsupervised Learning", description: "K-Means clustering, PCA dimension reduction, hierarchical clustering.", dayLink: 9 },
          { id: "ai-scikit-learn", title: "Scikit-Learn Mastery", description: "Model pipelines, cross-validation, and hyperparameter tuning.", dayLink: 10 },
          { id: "ai-model-eval", title: "Model Metrics & Evaluation", description: "Precision, recall, F1-score, ROC-AUC curves, and confusion matrices." }
        ]
      },
      {
        id: "ai-04",
        stageNumber: "04",
        title: "Deep Learning & Neural Nets",
        description: "Building, training, and optimizing artificial neural networks.",
        milestones: [
          { id: "ai-nn-basics", title: "Neural Network Architecture", description: "Perceptrons, activation functions, backpropagation, and loss functions." },
          { id: "ai-pytorch", title: "PyTorch Framework", description: "Tensors, autograd, custom Dataset classes, and model training loops." },
          { id: "ai-cv", title: "Computer Vision (CNNs)", description: "Convolutional layers, image classification, and transfer learning." },
          { id: "ai-nlp", title: "NLP & Transformers", description: "Tokenization, embeddings, RNNs, Attention mechanism, and Transformers." }
        ]
      },
      {
        id: "ai-05",
        stageNumber: "05",
        title: "Modern AI & LLMs",
        description: "Generative AI, Large Language Models, and RAG architectures.",
        milestones: [
          { id: "ai-llm-apis", title: "OpenAI & HuggingFace APIs", description: "Prompt engineering, structured outputs, and API orchestration." },
          { id: "ai-rag", title: "RAG & Vector Databases", description: "Embeddings, Pinecone/ChromaDB vector search, and context augmentation." },
          { id: "ai-langchain", title: "LangChain & AI Agents", description: "Building multi-tool AI agents and memory pipelines." }
        ]
      },
      {
        id: "ai-06",
        stageNumber: "06",
        title: "Projects",
        description: "Intelligent applications powered by custom ML models and AI APIs.",
        milestones: [
          { id: "ai-proj-rag-app", title: "AI Document Q&A Assistant (RAG)", description: "Build a production RAG app querying complex PDF documents.", dayLink: 13 },
          { id: "ai-proj-predictive", title: "Predictive Analytics Web Application", description: "Deploy an interactive web app serving ML model predictions." }
        ]
      }
    ]
  },
  {
    id: "datascience",
    title: "Data Science",
    iconName: "BarChart3",
    badge: "Data & Insights",
    shortDescription: "Turn data into insights using statistics, Python and machine learning.",
    description: "Master exploratory data analysis, SQL databases, statistical modeling, data visualization, and business intelligence pipelines.",
    color: "from-teal-500 to-emerald-600",
    accentColor: "teal",
    approxDuration: "14-20 Weeks",
    stages: [
      {
        id: "ds-01",
        stageNumber: "01",
        title: "Data Foundations",
        description: "Python for data analysis, SQL databases, and statistical fundamentals.",
        milestones: [
          { id: "ds-python", title: "Python for Data Science", description: "Data structures, functions, lambda expressions, and file I/O.", dayLink: 1 },
          { id: "ds-sql-queries", title: "SQL Querying & Joins", description: "SELECT queries, GROUP BY, aggregations, window functions, and joins.", dayLink: 3 },
          { id: "ds-eda", title: "Exploratory Data Analysis (EDA)", description: "Uncovering trends, anomalies, and relationships in raw datasets.", dayLink: 5 },
          { id: "ds-stats", title: "Statistical Inference", description: "Sampling distributions, confidence intervals, and hypothesis testing.", dayLink: 6 }
        ]
      },
      {
        id: "ds-02",
        stageNumber: "02",
        title: "Data Wrangling & Analysis",
        description: "Transforming messy real-world data into clean, structured analytics formats.",
        milestones: [
          { id: "ds-cleaning", title: "Data Cleaning & Imputation", description: "Handling null values, duplicates, outliers, and data type conversions.", dayLink: 7 },
          { id: "ds-pandas-adv", title: "Advanced Pandas & Pivot Tables", description: "Reshaping, merging DataFrames, and multi-index slicing.", dayLink: 8 },
          { id: "ds-feature-eng", title: "Feature Engineering", description: "Creating domain-specific indicators, ratio features, and time series splits." }
        ]
      },
      {
        id: "ds-03",
        stageNumber: "03",
        title: "Data Visualization & BI",
        description: "Visual storytelling, executive dashboards, and interactive reporting.",
        milestones: [
          { id: "ds-plotly", title: "Interactive Charts with Plotly", description: "Building interactive charts, scatter matrices, and maps.", dayLink: 9 },
          { id: "ds-streamlit", title: "Streamlit Analytics Web Apps", description: "Rapidly deploying interactive data web apps.", dayLink: 11 },
          { id: "ds-bi-story", title: "Data Storytelling & Reporting", description: "Translating data insights into clear business recommendations." }
        ]
      },
      {
        id: "ds-04",
        stageNumber: "04",
        title: "Predictive Analytics",
        description: "Statistical forecasting, time-series analysis, and A/B testing.",
        milestones: [
          { id: "ds-forecasting", title: "Time Series & Forecasting", description: "Trend decomposition, ARIMA models, and seasonal forecasting." },
          { id: "ds-ab-testing", title: "A/B Testing & Experimentation", description: "Designing randomized experiments, sample sizing, and p-value evaluation." },
          { id: "ds-segmentation", title: "Customer Segmentation & RFM", description: "Clustering customers based on Recency, Frequency, and Monetary metrics." }
        ]
      },
      {
        id: "ds-05",
        stageNumber: "05",
        title: "Production Data Science",
        description: "Deploying analytical pipelines and automated report generation.",
        milestones: [
          { id: "ds-fastapi", title: "Serving Models via FastAPI", description: "Building light microservices to serve model predictions." },
          { id: "ds-pipelines", title: "Automated ETL Data Pipelines", description: "Scheduling data extraction, transformation, and load scripts." }
        ]
      },
      {
        id: "ds-06",
        stageNumber: "06",
        title: "Projects",
        description: "End-to-end data science projects delivering actionable business value.",
        milestones: [
          { id: "ds-proj-dashboard", title: "Executive Business Intelligence Portal", description: "Build a comprehensive analytics portal with live KPI tracking.", dayLink: 13 },
          { id: "ds-proj-churn", title: "Customer Churn Prediction Engine", description: "Train and evaluate a machine learning pipeline predicting churn risk." }
        ]
      }
    ]
  },
  {
    id: "dsa",
    title: "DSA & Competitive Programming",
    iconName: "Code2",
    badge: "Problem Solving",
    shortDescription: "Build strong problem-solving skills and prepare for technical interviews.",
    description: "Master essential data structures, algorithm design techniques, time/space complexity analysis, and top coding interview patterns.",
    color: "from-rose-500 to-red-600",
    accentColor: "rose",
    approxDuration: "12-20 Weeks",
    stages: [
      {
        id: "dsa-01",
        stageNumber: "01",
        title: "Language & Complexity",
        description: "Algorithm fundamentals, asymptotic notation, and recursion mechanics.",
        milestones: [
          { id: "dsa-big-o", title: "Time & Space Complexity (Big-O)", description: "Analyzing time and space bounds, best/worst case scenarios.", dayLink: 1 },
          { id: "dsa-recursion", title: "Recursion & Backtracking Basics", description: "Base cases, call stack visualizers, and recursive trees.", dayLink: 2 },
          { id: "dsa-bit-manip", title: "Bit Manipulation Fundamentals", description: "Bitwise operators, XOR tricks, and bitwise masks.", dayLink: 3 }
        ]
      },
      {
        id: "dsa-02",
        stageNumber: "02",
        title: "Essential Data Structures",
        description: "Linear data structures and common manipulation patterns.",
        milestones: [
          { id: "dsa-arrays-strings", title: "Arrays & Strings (Two Pointers)", description: "Two-pointer techniques, sliding window patterns, and string parsing.", dayLink: 4 },
          { id: "dsa-linked-lists", title: "Linked Lists & Pointer Logic", description: "Singly/doubly linked lists, fast/slow pointers, cycle detection.", dayLink: 5 },
          { id: "dsa-stacks-queues", title: "Stacks, Queues & Monotonic Stacks", description: "LIFO/FIFO mechanics, expression evaluation, and next greater element.", dayLink: 6 },
          { id: "dsa-hash-tables", title: "Hash Tables & Sets", description: "Hash functions, collision resolution, frequency counting.", dayLink: 7 }
        ]
      },
      {
        id: "dsa-03",
        stageNumber: "03",
        title: "Advanced Data Structures",
        description: "Hierarchical, graph, and priority-based data structures.",
        milestones: [
          { id: "dsa-trees-bst", title: "Binary Trees & BSTs", description: "Tree traversals (Inorder, Preorder, Postorder, BFS Level-order), BST operations.", dayLink: 8 },
          { id: "dsa-heaps", title: "Heaps & Priority Queues", description: "Min-heaps, max-heaps, K-largest elements, and top-K frequent patterns.", dayLink: 9 },
          { id: "dsa-trie-dsu", title: "Tries & Disjoint Set Union (DSU)", description: "Prefix trees for autocomplete and Union-Find with path compression.", dayLink: 10 }
        ]
      },
      {
        id: "dsa-04",
        stageNumber: "04",
        title: "Algorithms & Sorting",
        description: "Searching, sorting algorithms, graph traversals, and greedy choices.",
        milestones: [
          { id: "dsa-binary-search", title: "Binary Search & Search Space", description: "Standard binary search, lower/upper bounds, binary search on answers.", dayLink: 11 },
          { id: "dsa-sorting", title: "Sorting Algorithms (Merge/QuickSort)", description: "Divide and conquer sorting algorithms, stability, and space tradeoffs.", dayLink: 12 },
          { id: "dsa-graph-traversal", title: "Graph Traversals (BFS & DFS)", description: "Adjacency lists, connected components, shortest path in unweighted graphs." },
          { id: "dsa-greedy", title: "Greedy Algorithms", description: "Activity selection, interval scheduling, and fractional knapsack." }
        ]
      },
      {
        id: "dsa-05",
        stageNumber: "05",
        title: "Dynamic Programming",
        description: "Overlapping subproblems, optimal substructure, and DP states.",
        milestones: [
          { id: "dsa-dp-intro", title: "DP Foundations & Memoization", description: "Top-down memoization vs bottom-up tabular DP approach." },
          { id: "dsa-dp-1d", title: "1D Dynamic Programming", description: "Climbing stairs, house robber, coin change, and LIS problems." },
          { id: "dsa-dp-grid", title: "Grid & 2D Dynamic Programming", description: "Unique paths, min path sum, and 0/1 Knapsack variations." }
        ]
      },
      {
        id: "dsa-06",
        stageNumber: "06",
        title: "Technical Interview Prep",
        description: "Curated problem sets and technical interview strategy.",
        milestones: [
          { id: "dsa-blind-75", title: "Top 75 Interview Pattern Problems", description: "Master core patterns covering all key data structures and algorithms." },
          { id: "dsa-mock-interviews", title: "Mock Technical Interview Practice", description: "Simulated live coding, verbalizing thought process, and space complexity analysis." }
        ]
      }
    ]
  }
];

export const getRoadmapById = (id) => {
  return ROADMAPS.find((r) => r.id === id) || null;
};
