export const experiences = [
  {
    id: 'tcs-prime',
    company: 'Tata Consultancy Services (TCS)',
    role: 'TCS Prime → TCS Digital',
    date: 'Jan 2026',
    status: 'Selected',
    overview: 'The TCS Prime interview is a comprehensive evaluation covering technical depth, managerial skills, and cultural fit. The process heavily emphasizes Object-Oriented Programming (OOP) principles, database management (SQL), and system-level architecture, especially focusing on cloud infrastructure and scalability.',
    rounds: [
      'Round 1: NQT (Aptitude, Advanced Aptitude, 1 Basic Coding, 1 Medium Coding)',
      'Round 2: Technical + Managerial + HR (Final Interview)'
    ],
    focusAreas: [
      'Object-Oriented Programming fundamentals and design principles',
      'SQL and relational database concepts',
      'Cloud architecture and scalability (AWS-focused)',
      'System design thinking — load management, high-traffic scenarios',
      'Containerization and DevOps fundamentals',
      'Resume-driven discussion — projects, hackathons, and real-world impact',
      'Basic DSA — optimized approaches over brute-force'
    ],
    preparationTips: [
      'Clear the NQT first — practice aptitude and medium-level coding; no need for advanced data structures.',
      'Build strong conceptual clarity in OOPs and SQL — expect scenario-based questions, not just definitions.',
      'After clearing NQT, shift focus toward cloud architecture, DevOps, and system-level thinking.',
      'Be ready to explain your projects end-to-end — architecture decisions, trade-offs, and your specific contributions.'
    ],
    additionalFeedback: [
      'TCS Prime targets specialized domains like data scientist roles, cloud architecture, and cybersecurity.',
      'TCS Digital is offered only when you excel in a few of the most specialized and in-demand branches like cloud, cybersecurity, or data science.'
    ],
    supportMaterials: [
      {
        label: 'TCS NQT Aptitude Preparation (Full Playlist)',
        url: 'https://www.youtube.com/playlist?list=PL3JmT-xgOMNw9mwzaCFdDSapW83Y9Ilj_',
        type: 'YouTube'
      }
    ],
    details: {
      difficulty: 'Medium',
      timeline: '0-1 Weeks',
      mode: 'On-site',
      appliedVia: 'Company Website',
      roundsBreakdown: [
        {
          name: 'NQT (National Qualifier Test)',
          type: 'Online Assessment',
          difficulty: 'Medium',
          mode: 'Remote',
          duration: 120,
          summary: [
            'Basic Aptitude and logical reasoning questions.',
            'Advanced Aptitude questions focusing on quantitative analysis.',
            '1 Basic Coding question assessing syntax and simple logic.',
            '1 Medium Coding question assessing algorithmic thinking and optimization.'
          ]
        },
        {
          name: 'Technical + Managerial + HR',
          type: 'Final Interview',
          difficulty: 'Medium',
          mode: 'On-site',
          duration: 45,
          summary: [
            'The session began with an extensive self-introduction, setting the stage for a deep dive into my technical background and core competencies.',
            'Object-Oriented Programming (OOP): Discussed the implementation of abstract functions, access modifiers (public, private, protected), the principle of encapsulation, and the practical use cases for anonymous classes in Java and C++.',
            'Database Management (SQL): Tested on query syntax and internal mechanics, including writing complex UPDATE queries and articulating the nuanced differences between DROP, TRUNCATE, and DELETE commands.',
            'Cloud Architecture (AWS): Engaged in a scenario-based discussion on managing high-traffic gaming servers, designing scalable architectures, and implementing DDoS mitigation strategies using AWS SNS and other native features.',
            'DevOps & Problem Solving: Covered basic containerization with Docker, orchestration concepts, and a detailed review of my hackathon contributions. Concluded with an algorithmic challenge focused on optimizing prime number generation beyond a brute-force approach.',
            'Managerial & HR: Covered family background, stress management techniques, handling high-pressure situations, and aspirations for future studies.'
          ]
        }
      ]
    }
  },
  {
    id: 'infosys-se',
    company: 'Infosys',
    role: 'System Engineer',
    date: 'Nov 2025',
    status: 'Selected',
    overview: 'The Infosys System Engineer selection process prioritizes strong logical reasoning, quantitative aptitude, and a solid foundation in computer science fundamentals. While the initial assessment is rigorous, the technical interview focuses heavily on practical applications of OOP and basic backend architecture.',
    rounds: [
      'Round 1: Coding + Aptitude Assessment (Pseudocode, English, Logical, Maths)',
      'Round 2: Technical Interview (OOPs + Basics + Resume)'
    ],
    focusAreas: [
      'Pseudocode problem solving',
      'English comprehension (passage-based)',
      'Logical reasoning and quantitative aptitude',
      'OOPs (including scenario-based questions)',
      'MongoDB basics (data storage)',
      'Postman REST APIs',
      'Basic CI/CD concepts'
    ],
    preparationTips: [
      'Focus on OOPs, especially understanding how to apply concepts to scenario-based questions.',
      'Practice pseudocode, analytical reasoning, and aptitude thoroughly, as this is the primary elimination round.',
      'Be prepared to articulate the architecture and impact of your hackathons and personal projects.'
    ],
    additionalFeedback: [
      'The Aptitude + pseudocode round is the main elimination stage; do not underestimate it.',
      'The technical interview is generally straightforward and tests foundational knowledge rather than deep, complex engineering edge-cases.'
    ],
    supportMaterials: [
      {
        label: 'Infosys Interview Experiences (Glassdoor)',
        url: 'https://www.glassdoor.co.in/Interview/Infosys-Systems-Engineer-Interview-Questions-EI_IE7927.0,7_KO8,24.htm',
        type: 'Glassdoor'
      }
    ],
    details: {
      difficulty: 'Easy',
      timeline: '3-4 Weeks',
      mode: 'On-site',
      appliedVia: 'Job Portal',
      roundsBreakdown: [
        {
          name: 'Coding & Aptitude Round',
          type: 'Aptitude Test',
          difficulty: 'Hard',
          mode: 'On-site',
          duration: 180,
          summary: [
            'Pseudocode questions to test logical flow and algorithmic tracing.',
            'English comprehension passages and grammar checks.',
            'Advanced logical reasoning puzzles.',
            'Quantitative aptitude covering standard mathematical topics.',
            'An essay writing section requiring ~200 words on a given topic to test communication skills.'
          ]
        },
        {
          name: 'Technical Interview',
          type: 'Technical',
          difficulty: 'Easy',
          mode: 'On-site',
          duration: 25,
          summary: [
            'Walked through my resume, highlighting key academic projects and technical achievements.',
            'Explored Object-Oriented Programming through scenario-based questions, testing the practical application of core principles rather than just theoretical definitions.',
            'Discussed MongoDB concepts, specifically focusing on data storage formats (BSON/JSON) and database scaling strategies.',
            'Evaluated understanding of REST APIs, including practical experience with endpoint testing using tools like Postman.',
            'Concluded with a discussion on basic CI/CD pipelines related to my resume projects, touching upon backend architecture and stress management techniques.'
          ]
        }
      ]
    }
  }
];