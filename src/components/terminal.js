import { useState } from "react";

function Terminal() {
  const intro = [
    "Welcome to Naman's terminal.",
    "Type `help` to see available commands.",
    "Type `theme default|matrix|solarized` to change theme."
  ];

  const [history, setHistory] = useState(intro);
  const [input, setInput] = useState("");
  const [theme, setTheme] = useState("default");

  const commands = {
    help: [
      "Available commands:",
      "• whoami",
      "• skills",
      "• projects",
      "• contact",
      "• theme default | matrix | solarized",
      "• clear"
    ],
    whoami: [
      "Naman Srivastava",
      "Software Developer",
      "Interested in backend systems, cloud, and debugging"
    ],
    skills: [
      "Languages: C++, JavaScript, Python",
      "Backend: Node.js, Flask",
      "Frontend: React",
      "Cloud: AWS (EC2, S3, IAM)",
      "Databases: MongoDB, SQL"
    ],
    projects: [
      "• RouteGuard – Real-time safety & loitering detection",
      "• Anonymous File Uploader",
      "• ML pipelines (supervised & unsupervised)"
    ],
    contact: [
      "GitHub: github.com/naman-0804",
      "LinkedIn: linkedin.com/in/naman1608",
      "Email: namansrivastava1608@gmail.com"
    ]
  };

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      const raw = input.trim();
      const cmd = raw.toLowerCase();
      let output = [];

      // clear
      if (cmd === "clear") {
        setHistory(intro);
        setInput("");
        return;
      }

      // theme switch
      if (cmd.startsWith("theme")) {
        const [, selectedTheme] = cmd.split(" ");

        if (["default", "matrix", "solarized"].includes(selectedTheme)) {
          setTheme(selectedTheme);
          output = [`Theme switched to '${selectedTheme}'.`];
        } else {
          output = [
            "Invalid theme.",
            "Available themes: default, matrix, solarized"
          ];
        }

        setHistory(prev => [...prev, `> ${raw}`, ...output]);
        setInput("");
        return;
      }

      // normal commands
      if (commands[cmd]) {
        output = commands[cmd];
      } else if (cmd !== "") {
        output = [`Command not found: ${raw}. Type 'help' to see commands.`];
      }

      setHistory(prev => [...prev, `> ${raw}`, ...output]);
      setInput("");
    }
  };

  return (
    <div className={`terminal-card theme-${theme}`}>
      <div className="terminal-header">
        <span className="dot red" />
        <span className="dot yellow" />
        <span className="dot green" />
        <span className="terminal-title">naman@portfolio</span>
      </div>

      <div className="terminal-body">
        {history.map((line, idx) => (
          <div key={idx} className="terminal-line">{line}</div>
        ))}

        <div className="terminal-input">
          <span className="prompt">naman@portfolio:~$</span>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleCommand}
            autoFocus
          />
        </div>
      </div>
    </div>
  );
}

export default Terminal;
