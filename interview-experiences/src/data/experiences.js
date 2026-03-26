export const experiences = [
  {
    id: 'tcs-prime',
    company: 'Tata Consultancy Services (TCS)',
    role: 'TCS Prime',
    overview: 'The TCS Prime interview is a combined technical, managerial, and HR evaluation focusing on OOPs, SQL, core concepts, and strong resume-based discussions including cloud and system-level thinking.',
    rounds: [
      'Round 1: Final Interview (Technical + Managerial + HR)'
    ],
    focusAreas: [
      'Object-Oriented Programming (OOPs)',
      'SQL Queries and DBMS Concepts',
      'C++ Fundamentals (Header files, scope resolution)',
      'AWS Basics and Cloud Scenarios',
      'System Design Thinking (Load handling, DDoS, scaling)',
      'Containerization and Orchestration',
      'Resume-based Project Discussion',
      'Basic DSA (optimized approach)'
    ],
    preparationTips: [
      'Prepare aptitude and medium-level DSA (focus on logic, not advanced)',
      'Strengthen OOPs and SQL concepts thoroughly',
      'Shift focus toward cloud and DevOps fundamentals after clearing initial screening'
    ],
    additionalFeedback: [
      'TCS Prime focuses on specialized domains like big data and cybersecurity',
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
          summary: 'Covered OOPs (abstract functions, encapsulation, access specifiers, anonymous classes), SQL (UPDATE query, DROP vs TRUNCATE vs DELETE), C++ concepts (header files, :: operator), AWS (SNS, handling load, DDoS, gaming server scaling), containerization and orchestration, resume-based project discussion, hackathon role, HR questions, and basic DSA (optimized prime number approach)'
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
      'Round 2: Technical Interview (OOPs, Basics, Resume-based)'
    ],
    focusAreas: [
      'Pseudocode and Logical Problem Solving',
      'English Comprehension and Aptitude',
      'Object-Oriented Programming (OOPs)',
      'Basic Backend Concepts (MongoDB, APIs)',
      'CI/CD Fundamentals'
    ],
    preparationTips: [
      'Focus on OOP concepts and scenario-based questions',
      'Practice pseudocode and aptitude questions thoroughly',
      'Work on hackathons and personal projects for better discussion'
    ],
    additionalFeedback: [
      'Aptitude and pseudocode sections are critical for clearing the first round',
      'Interview is straightforward; minimal project deep-dive'
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
          summary: 'Includes pseudocode questions, English comprehension passages, logical reasoning, quantitative aptitude with a writing task (~200 words)'
        },
        {
          name: 'Technical Interview',
          type: 'Technical',
          difficulty: 'Easy',
          mode: 'On-site',
          duration: 25,
          summary: 'Introduction, OOPs (scenario-based), MongoDB basics, Postman REST APIs, basic CI/CD; minimal project discussion'
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
      'Basic Cybersecurity Concepts',
      'Awareness of Current Security Trends',
      'Understanding of AWS Security Basics',
      'OSI Model and Layer-based Attacks',
      'Communication and Argumentation Skills (GD)'
    ],
    preparationTips: [
      'Focus on basic cybersecurity concepts; depth is not required',
      'Prepare for discussion-based rounds with structured arguments',
      'Understand real-world security scenarios (AWS, banking security, phishing)'
    ],
    additionalFeedback: [
      'Role leans toward support/analyst work rather than deep technical engineering',
      'Strong communication skills are important for GD round performance'
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
          summary: 'Topics included AI in cybersecurity, third-party vendor security, ransomware decisions, ethical implications, and phishing via social media'
        },
        {
          name: 'Technical Round',
          type: 'Technical',
          difficulty: 'Easy',
          mode: 'On-site',
          duration: 25,
          summary: 'Questions on AWS security, data protection, banking security systems, and attacks across OSI layers'
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
      'Round 1: Aptitude Test (Quantitative + English)',
      'Round 2: Technical Interview (Basic CS + Puzzles)'
    ],
    focusAreas: [
      'Quantitative Aptitude and Verbal Ability',
      'Logical Reasoning and Basic Problem Solving',
      'Core Fundamentals (Defender, Antivirus, JRE, JVM, JDK)',
      'Basic Technical Awareness',
      'Puzzle Solving (moderate level)'
    ],
    preparationTips: [
      'Focus heavily on puzzles; they are critical for the Technical Analyst role',
      'Practice logical and analytical problem-solving daily',
      'Revise basic computer science fundamentals (JRE, JVM, JDK, security basics)'
    ],
    additionalFeedback: [
      'Avoid applying if your profile is heavily development-focused with weak analytical exposure',
      'Role favors analytical thinking over pure coding skills'
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
          summary: 'Quantitative aptitude and English questions, overall easy level'
        },
        {
          name: 'Technical Round',
          type: 'Technical',
          difficulty: 'Medium',
          mode: 'Remote',
          duration: 30,
          summary: 'Basic technical questions (defender, antivirus, JRE, JVM, JDK) and puzzle-based questions (GFG-level)'
        }
      ]
    }
  }
];