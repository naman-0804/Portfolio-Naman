export const experiences = [
  {
    id: 'tcs-prime',
    company: 'Tata Consultancy Services (TCS)',
    role: 'TCS Prime',
    overview: 'The TCS Prime interview is a combined technical, managerial, and HR evaluation focusing on OOPs, SQL, core concepts, and strong resume-based discussions including cloud and system-level thinking.',
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
      'Prepare aptitude and medium-level DSA (no need for advanced)',
      'Strong hold on OOPs and SQL is mandatory',
      'Shift preparation toward cloud and DevOps after clearing initial stage'
    ],
    additionalFeedback: [
      'TCS Prime targets specialized domains like big data and cybersecurity',
      'TCS Digital is more aligned toward cloud and DevOps roles'
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
            'Basic Aptitude questions',
            'Advanced Aptitude questions',
            '1 Basic Coding question',
            '1 Medium Coding question'
          ]
        },
        {
          name: 'Technical + Managerial + HR',
          type: 'Final Interview',
          difficulty: 'Medium',
          mode: 'On-site',
          duration: 45,
          summary: [
            'The interview began with a comprehensive self-introduction where I highlighted my technical journey and key interests. This transitioned quickly into an in-depth exploration of Object-Oriented Programming (OOP) concepts.',
            'Detailed OOPS Questions: I was asked to explain and demonstrate how to write an abstract function, and we delved into access specifiers (public, private, protected), the principle of encapsulation, and the practical utility of anonymous classes in Java/C++.',
            'SQL & Database: The focus was both on syntax and internal mechanics; I had to write an UPDATE query and clarify the distinct differences between DROP, TRUNCATE, and DELETE (SQL level: Medium for me).',
            'C++ Core: Touched upon header files and the scope resolution operator (::).',
            'AWS Cloud (Resume-based): Significant portion dedicated to AWS SNS and scenario-based questions like managing a gaming server under heavy load, scaling strategies, and handling DDoS attacks using AWS features.',
            'DevOps & Projects: Discussed containerization (Docker basic) and orchestration concepts based on my resume. Grilling on my hackathon project, specifically my individual role and contributions.',
            'DSA Problem: Optimization was key – finding a prime number without using a brute-force approach.',
            'HR Round: Covered family background, stress management/pressure handling, and aspirations for future studies.'
          ]
        }
      ]
    }
  },
  {
    id: 'infosys-se',
    company: 'Infosys',
    role: 'System Engineer',
    overview: 'The Infosys System Engineer process focuses on aptitude, pseudocode-based problem solving, and basic technical understanding, with moderate exam difficulty but easy interview round.',
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
      'Focus on OOPs (especially scenario-based questions)',
      'Practice pseudocode and aptitude thoroughly',
      'Work on hackathons and personal projects for discussion'
    ],
    additionalFeedback: [
      'Aptitude + pseudocode round is the main elimination stage',
      'Technical interview is easy and not deeply project-focused'
    ],
    details: {
      difficulty: 'Easy',
      timeline: '3-4 Weeks',
      mode: 'On-site',
      appliedVia: 'Job Portal',
      roundsBreakdown: [
        {
          name: 'Coding Round',
          type: 'Aptitude Test',
          difficulty: 'Hard',
          mode: 'On-site',
          duration: 180,
          summary: [
            'Pseudocode questions',
            'English comprehension passages',
            'Logical reasoning',
            'Quantitative aptitude',
            'Essay writing (~200 words on a topic)'
          ]
        },
        {
          name: 'Technical Interview',
          type: 'Technical',
          difficulty: 'Easy',
          mode: 'On-site',
          duration: 25,
          summary: [
            'Introduction and walking through the resume.',
            'OOPS deep dive: Scenario-based questions on OOPS principles to test practical application.',
            'MongoDB: Discussion on data storage format (BSON/JSON) and how it handles scaling.',
            'API & Tools: Detailed questions on REST APIs and using Postman for endpoint testing.',
            'DevOps/Backend: Basic CI/CD pipeline discussion based on resume projects, along with questions on backend architecture and stress management.'
          ]
        }
      ]
    }
  },
  {
    id: 'optiv',
    company: 'Optiv',
    role: 'Cybersecurity Analyst',
    overview: 'The Optiv interview process focuses on basic cybersecurity awareness, discussion ability, and practical understanding of security concepts, with relatively low difficulty and fast turnaround.',
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
      'Know basics of cybersecurity (no deep technical requirement)',
      'Prepare structured points for GD topics',
      'Understand real-world cases like phishing, ransomware, AWS security'
    ],
    additionalFeedback: [
      'Role is more support/analyst oriented, not deep engineering',
      'Communication matters heavily in GD round'
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
            'AI in cybersecurity: revolution vs new vulnerabilities',
            'Third-party vendor security: necessity vs overemphasis',
            'Ransomware: pay ransom vs invest in recovery',
            'Ethical implications in cybersecurity',
            'Phishing via social media rise'
          ]
        },
        {
          name: 'Technical Round',
          type: 'Technical',
          difficulty: 'Easy',
          mode: 'On-site',
          duration: 25,
          summary: [
            'AWS data security and protection',
            'How data is secured in AWS',
            'Banking security systems',
            'Attacks across OSI layers',
            'Resume-based basic discussion (especially if dev background)'
          ]
        }
      ]
    }
  },
  {
    id: 'ion',
    company: 'ION Group',
    role: 'Technical Analyst',
    overview: 'The ION Group Technical Analyst process emphasizes aptitude, basic technical fundamentals, and problem-solving ability, with moderate difficulty and quick turnaround.',
    rounds: [
      'Round 1: Aptitude Test (Quant + English)',
      'Round 2: Technical Interview (Puzzles + Basics)'
    ],
    focusAreas: [
      'Quantitative aptitude',
      'English/verbal ability',
      'Logical reasoning',
      'Basic CS concepts (defender, antivirus, JRE, JVM, JDK)',
      'Puzzle solving (important)'
    ],
    preparationTips: [
      'Focus heavily on puzzles (critical for this role)',
      'Practice analytical and logical problems daily',
      'Revise basic CS fundamentals (JRE, JVM, JDK, security basics)'
    ],
    additionalFeedback: [
      'The puzzle round is the most critical; they were quite confusing and difficult if you haven\'t encounterd them in years or didn\'t study them specifically.',
      'There is little point in applying for this specific role with a purely development-based resume unless you have strong analytical/puzzle-solving prep.',
      'Strong analytical thinking is prioritized heavily over coding skills here.'
    ],
    details: {
      difficulty: 'Medium',
      timeline: '1-2 Weeks',
      mode: 'On-site',
      appliedVia: 'Job Portal',
      roundsBreakdown: [
        {
          name: 'Aptitude',
          type: 'Aptitude Test',
          difficulty: 'Easy',
          mode: 'Remote',
          duration: 60,
          summary: [
            'Quantitative aptitude questions',
            'English/verbal questions',
            'Overall easy level'
          ]
        },
        {
          name: 'Technical Round',
          type: 'Technical',
          difficulty: 'Medium',
          mode: 'Remote',
          duration: 30,
          summary: [
            'Puzzle-based questions (GFG level)',
            'Basic CS questions: defender, antivirus',
            'Java concepts: JRE, JVM, JDK'
          ]
        }
      ]
    }
  }
];