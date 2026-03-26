export const experiences = [
  {
    id: 'tcs-prime',
    company: 'Tata Consultancy Services (TCS)',
    role: 'TCS Prime',
    overview: 'The TCS Prime interview is a combined technical, managerial, and HR evaluation focusing on OOPs, SQL, core concepts, and strong resume-based discussions including cloud and system-level thinking.',
    rounds: [
      'Round 1: Technical + Managerial + HR (Final Interview)'
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
          name: 'Technical + Managerial + HR',
          type: 'Final Interview',
          difficulty: 'Medium',
          mode: 'On-site',
          duration: 45,
          summary: [
            'Self introduction at start',
            'OOPs deep questions: abstract class usage, encapsulation, access control, anonymous classes',
            'SQL: write UPDATE query + explain DROP vs TRUNCATE vs DELETE',
            'C++: header files and :: operator',
            'AWS: SNS and scenario-based questions (heavy load, gaming server scaling, DDoS handling)',
            'Containerization and orchestration basics',
            'Full resume-based grilling (projects + hackathon role)',
            'HR questions: family background, pressure handling, future studies',
            'DSA: easy-level but optimized approach expected (prime number logic)'
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
            'Self introduction',
            'OOPs questions (including scenario-based)',
            'MongoDB basics',
            'Postman and REST API basics',
            'Basic CI/CD discussion',
            'Minimal project discussion (in some cases none)'
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
      'Not ideal for purely development-heavy profiles',
      'Strong analytical thinking is prioritized over coding'
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