export const experiences = [
  {
    id: 'tcs-prime',
    company: 'Tata Consultancy Services (TCS)',
    role: 'TCS Prime',
    overview: 'The TCS Prime interview is a comprehensive evaluation covering technical depth, managerial skills, and cultural fit. The process heavily emphasizes Object-Oriented Programming (OOP) principles, database management (SQL), and system-level architecture, especially focusing on cloud infrastructure and scalability.',
    rounds: [
      'Round 1: NQT (Aptitude, Advanced Aptitude, 1 Basic Coding, 1 Medium Coding)',
      'Round 2: Technical + Managerial + HR (Final Interview)'
    ],
    focusAreas: [
      'OOPs: abstract functions, encapsulation, access specifiers, anonymous classes',
      'SQL: UPDATE query, difference between DROP vs TRUNCATE vs DELETE',
      'C++: header files, scope resolution operator (::)',
      'AWS: SNS, handling heavy load, gaming server scaling, DDoS handling',
      'System thinking: load management, scalability scenarios',
      'Containerization and orchestration concepts',
      'Resume-based deep discussion (projects + hackathon role)',
      'Basic DSA: optimized logic (e.g., prime number without brute force)'
    ],
    preparationTips: [
      'Prepare aptitude and medium-level DSA (no need for advanced data structures)',
      'A strong foundational understanding of OOPs and SQL is mandatory',
      'Shift preparation toward cloud architecture and DevOps after clearing the initial assessment stage'
    ],
    additionalFeedback: [
      'TCS Prime targets specialized domains like big data, cloud architecture, and cybersecurity.',
      'TCS Digital is often more aligned toward standard cloud and DevOps roles, whereas Prime expects a slightly deeper system-level understanding.'
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
  },
  {
    id: 'optiv',
    company: 'Optiv',
    role: 'Cybersecurity Analyst',
    overview: 'The Optiv Cybersecurity Analyst interview evaluates foundational security awareness, critical thinking, and the ability to articulate complex concepts. The process favors strong communication skills and a practical understanding of real-world security challenges over deep engineering expertise.',
    rounds: [
      'Round 1: Group Discussion (Cybersecurity Topics)',
      'Round 2: Technical Interview (Basic Security + Scenario-based)'
    ],
    focusAreas: [
      'Basic cybersecurity concepts',
      'Awareness of real-world security issues',
      'AWS security basics',
      'OSI model and attack layers',
      'Communication and argumentation (GD)'
    ],
    preparationTips: [
      'Ensure a solid grasp of cybersecurity fundamentals; deep technical implementation knowledge is less critical than broad awareness.',
      'Prepare structured, articulate points for common Group Discussion topics.',
      'Understand the mechanics of real-world attacks such as phishing, ransomware, and basic AWS cloud security vulnerabilities.'
    ],
    additionalFeedback: [
      'This role is heavily support and analyst oriented, focusing on monitoring and policy rather than deep offensive/defensive engineering.',
      'Effective communication and the ability to construct a logical argument matter heavily in the Group Discussion round.'
    ],
    details: {
      difficulty: 'Easy',
      timeline: '0-1 Weeks',
      mode: 'On-site',
      appliedVia: 'Job Portal',
      roundsBreakdown: [
        {
          name: 'Group Discussion',
          type: 'Group Discussion',
          difficulty: 'Medium',
          mode: 'On-site',
          duration: 30,
          summary: [
            'Discussed AI in cybersecurity: whether it represents a defensive revolution or introduces new vulnerabilities.',
            'Debated third-party vendor security: absolute necessity versus overemphasis.',
            'Analyzed ransomware strategies: paying the ransom versus investing in robust recovery systems.',
            'Explored the ethical implications inherent in modern cybersecurity practices.',
            'Discussed the rapid rise of phishing attacks via social media platforms.'
          ]
        },
        {
          name: 'Technical Round',
          type: 'Technical',
          difficulty: 'Easy',
          mode: 'On-site',
          duration: 25,
          summary: [
            'Examined data security principles within cloud environments, focusing specifically on AWS protection mechanisms.',
            'Discussed the architecture and security protocols employed by modern banking systems.',
            'Explored potential vulnerabilities, threat models, and attack vectors across the different layers of the OSI model.',
            'Reviewed my development background to understand how software engineering practices intersect with cybersecurity principles.'
          ]
        }
      ]
    }
  },
  {
    id: 'ion',
    company: 'ION Group',
    role: 'Technical Analyst',
    overview: 'The ION Group Technical Analyst recruitment process places a heavy premium on analytical thinking, complex puzzle-solving, and core computer science fundamentals. Candidates with strong quantitative skills and logical reasoning abilities are highly favored over those with purely development-focused backgrounds.',
    rounds: [
      'Round 1: Aptitude Test (Quant + English)',
      'Round 2: Technical Interview (Puzzles + Basics)'
    ],
    focusAreas: [
      'Quantitative aptitude',
      'English/verbal ability',
      'Logical reasoning',
      'Basic CS concepts (defender, antivirus, JRE, JVM, JDK)',
      'Puzzle solving (highly important)'
    ],
    preparationTips: [
      'Focus intensely on puzzles (critical for this specific role and company culture).',
      'Practice analytical and logical problems daily leading up to the interview.',
      'Revise basic CS fundamentals, particularly Java ecosystems (JRE, JVM, JDK) and basic OS security.'
    ],
    additionalFeedback: [
      'The puzzle round is the most critical hurdle. The puzzles can be quite confusing and difficult if you haven\'t studied classic logical puzzles (e.g., GeeksforGeeks puzzle section) recently.',
      'There is little point in applying for this specific role with a purely development-based resume unless you have strong analytical and puzzle-solving preparation to back it up.',
      'Strong analytical and lateral thinking is prioritized heavily over framework-specific coding skills.'
    ],
    details: {
      difficulty: 'Medium',
      timeline: '1-2 Weeks',
      mode: 'On-site',
      appliedVia: 'Job Portal',
      roundsBreakdown: [
        {
          name: 'Aptitude Assessment',
          type: 'Aptitude Test',
          difficulty: 'Easy',
          mode: 'Remote',
          duration: 60,
          summary: [
            'Quantitative aptitude questions testing mathematical reasoning.',
            'English and verbal ability questions.',
            'Overall, the difficulty level for the initial aptitude test was manageable.'
          ]
        },
        {
          name: 'Technical & Analytical Round',
          type: 'Technical',
          difficulty: 'Medium',
          mode: 'Remote',
          duration: 30,
          summary: [
            'Challenged with complex, logic-based puzzles requiring structured analytical thinking (similar in difficulty to advanced GeeksforGeeks puzzles).',
            'Assessed on fundamental computer science concepts, including the roles and internal mechanics of system defenders and antivirus software.',
            'Evaluated understanding of the Java ecosystem, specifically the distinctions and interactions between the JRE, JVM, and JDK.'
          ]
        }
      ]
    }
  }
];