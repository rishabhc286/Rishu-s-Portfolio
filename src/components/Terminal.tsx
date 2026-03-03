import React, { useState, useEffect, useRef } from "react";
import {
  X,
  Terminal as TerminalIcon,
  Maximize2,
  Minimize2,
} from "lucide-react";

interface CommandOutput {
  id: number;
  type: "command" | "response" | "error";
  content: React.ReactNode;
}

const Terminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      id: 0,
      type: "response",
      content: (
        <div className="mb-2">
          <p>Welcome to Rishi's Portfolio Terminal v1.0.0</p>
          <p>
            I am a conversational AI. Type{" "}
            <span className="text-green-400">help</span> for commands, or just
            chat with me!
          </p>
        </div>
      ),
    },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Focus input when clicking anywhere in the terminal
  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  // Scroll to bottom on new history
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history, isOpen]);

  // Global keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // ... existing imports

  const getCommandResponse = (cmd: string): React.ReactNode | null => {
    switch (cmd) {
      case "help":
        return (
          <div className="grid grid-cols-[120px_1fr] gap-2">
            <span className="text-green-400">about</span>{" "}
            <span>Learn about me</span>
            <span className="text-green-400">skills</span>{" "}
            <span>View technical skills</span>
            <span className="text-green-400">learning</span>{" "}
            <span>What I'm currently studying</span>
            <span className="text-green-400">wip</span>{" "}
            <span>Project I'm building right now</span>
            <span className="text-green-400">projects</span>{" "}
            <span>List my projects</span>
            <span className="text-green-400">contact</span>{" "}
            <span>How to reach me</span>
            <span className="text-green-400">clear</span>{" "}
            <span>Clear the terminal</span>
            <span className="text-green-400">exit</span>{" "}
            <span>Close terminal</span>
          </div>
        );
      case "about":
        return (
          <div className="flex flex-col gap-1">
            <p>
              I'm <span className="text-green-400 font-bold">Rishabh Chaudhary</span> — an Engineering student
              passionate about problem solving, software development, and continuous self-improvement.
            </p>
            <p className="mt-1">
              Currently focused on mastering{" "}
              <span className="text-yellow-400">Data Structures &amp; Algorithms</span>,{" "}
              <span className="text-yellow-400">Java</span>, and{" "}
              <span className="text-yellow-400">backend development</span> — with the goal of building
              scalable and efficient systems.
            </p>
            <p className="mt-1">
              Beyond code, I maintain a disciplined lifestyle focused on{" "}
              <span className="text-blue-400">fitness</span>,{" "}
              <span className="text-blue-400">consistency</span>, and{" "}
              <span className="text-blue-400">long-term growth</span>.
            </p>
          </div>
        );
      case "skills":
        return (
          <div>
            <p className="mb-1 text-yellow-400">LEARNING NOW:</p>
            <p>• Data Structures &amp; Algorithms (Java)</p>
            <p>• Backend Development (Node.js / Spring Boot)</p>
            <p>• System Design fundamentals</p>
            <p className="mt-2 mb-1 text-green-400">FRONTEND STACK:</p>
            <p>• React / TypeScript / Tailwind CSS</p>
            <p>• Vite / Next.js</p>
            <p className="mt-2 mb-1 text-blue-400">TOOLS &amp; OTHERS:</p>
            <p>• Git / GitHub</p>
            <p>• REST APIs / Postman</p>
          </div>
        );
      case "learning":
        return (
          <div className="flex flex-col gap-1">
            <p className="text-yellow-400 font-bold mb-1">📚 Currently Learning:</p>
            <div className="flex flex-col gap-1">
              <p>
                <span className="text-green-400">►</span>{" "}
                <span className="font-bold">Data Structures & Algorithms</span>{" "}
                <span className="text-white/50 text-xs">— in Java, daily practice</span>
              </p>
              <p>
                <span className="text-green-400">►</span>{" "}
                <span className="font-bold">Java</span>{" "}
                <span className="text-white/50 text-xs">— OOP, Collections, Streams</span>
              </p>
              <p>
                <span className="text-green-400">►</span>{" "}
                <span className="font-bold">Backend Development</span>{" "}
                <span className="text-white/50 text-xs">— Node.js / Spring Boot</span>
              </p>
              <p>
                <span className="text-green-400">►</span>{" "}
                <span className="font-bold">System Design</span>{" "}
                <span className="text-white/50 text-xs">— fundamentals & patterns</span>
              </p>
            </div>
            <p className="text-white/40 text-xs mt-2">
              // goal: crack top tech interviews & build scalable systems 🎯
            </p>
          </div>
        );
      case "wip":
      case "current":
        return (
          <div className="flex flex-col gap-1">
            <p className="text-green-400 font-bold mb-1">✓ Last Shipped:</p>
            <p>
              <span className="text-green-400 font-bold">Vital-X</span>{" "}
              <span className="text-white/40 text-xs">[v1.0 — live]</span>
            </p>
            <p className="text-white/70 text-sm mt-1">
              Health &amp; fitness tracking app — now live!
            </p>
            <div className="flex gap-4 mt-1 text-xs">
              <a
                href="https://vital-x.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                → vital-x.netlify.app
              </a>
              <a
                href="https://github.com/rishabhc286/Vital-x"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                → github.com/rishabhc286/Vital-x
              </a>
            </div>
            <p className="text-yellow-400 font-bold mt-3 mb-1">🔨 Currently Working On:</p>
            <p className="text-white/60 text-sm">
              <span className="text-white/30">???</span>{" "}
              <span className="text-white/40 text-xs">— classified 🔒 stay tuned</span>
            </p>
          </div>
        );
      case "projects":
        return (
          <div className="flex flex-col gap-1">
            <p className="text-white/50 text-xs mb-2">// 1 shipped · 1 incoming</p>
            <a
              href="https://vital-x.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              1. Vital-X — Health &amp; fitness tracker{" "}
              <span className="text-green-400 text-xs">[✓ Live]</span>
            </a>
            <p className="text-white/40">
              2. ??? — <span className="text-yellow-400 text-xs">Revealing soon 🔒</span>
            </p>
            <p className="text-white/40 text-xs mt-2">
              → Type <span className="text-green-400">wip</span> for current status.
            </p>
          </div>
        );
      case "contact":
        return (
          <div>
            <p>
              Email:{" "}
              <a
                href="mailto:chaudharyrishabh008@gmail.com"
                className="text-blue-400 hover:underline"
              >
                chaudharyrishabh008@gmail.com
              </a>
            </p>
            <p>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/rishabhc286/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                linkedin.com/in/rishabhc286
              </a>
            </p>
            <p>
              GitHub:{" "}
              <a
                href="https://github.com/rishabhc286"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                github.com/rishabhc286
              </a>
            </p>
            <p>
              Twitter:{" "}
              <a
                href="https://x.com/rishabhC286"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                x.com/rishabhC286
              </a>
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  const processQuery = (input: string): React.ReactNode | null => {
    const lower = input.toLowerCase();

    // Greeting
    if (lower.match(/^(hi|hello|hey|greetings)/)) {
      return "Hello! I'm Rishi's virtual assistant. How can I help you today? Type 'help' to see all commands.";
    }

    // What are you working on / building right now
    if (lower.match(/(what.*work|what.*build|current.*project|working on|building|wip|side.?project|vital)/)) {
      return getCommandResponse("wip");
    }

    // What are you learning
    if (lower.match(/(what.*learn|studying|study|learning|practice|practicing|dsa|data.?struct|algo|java|backend|spring)/)) {
      return getCommandResponse("learning");
    }

    // About
    if (lower.match(/(who|about|author|creator|developer|student|engineer|yourself)/)) {
      return getCommandResponse("about");
    }

    // Skills
    if (lower.match(/(skill|stack|tech|language|framework|tools|know how|experience)/)) {
      return getCommandResponse("skills");
    }

    // Projects
    if (lower.match(/(project|work|app|site|portfolio|build|made|create)/)) {
      return getCommandResponse("projects");
    }

    // Contact
    if (lower.match(/(contact|email|reach|hire|github|linkedin|twitter|collab)/)) {
      return getCommandResponse("contact");
    }

    return null;
  };

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim();
    if (!trimmedCmd) return;

    const newHistory: CommandOutput[] = [
      ...history,
      {
        id: Date.now(),
        type: "command",
        content: `guest@portfolio:~$ ${cmd}`,
      },
    ];

    // Check for clear/exit first
    if (trimmedCmd.toLowerCase() === "clear") {
      setHistory([]);
      return;
    }
    if (trimmedCmd.toLowerCase() === "exit") {
      setIsOpen(false);
      return;
    }

    // Try exact command match
    let response = getCommandResponse(trimmedCmd.toLowerCase());

    // If no exact match, try natural language processing
    if (!response) {
      response = processQuery(trimmedCmd);
    }

    // Default fallback
    if (!response) {
      response = (
        <span className="text-red-400">
          Command not understood. Try asking "who are you?", "show skills", or
          type 'help'.
        </span>
      );
    }

    newHistory.push({
      id: Date.now() + 1,
      type: "response",
      content: response,
    });

    setHistory(newHistory);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    handleCommand(input);
    setInput("");
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50 group">
        <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-black text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Ctrl + K
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="p-3 bg-white border border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-white transition-all duration-300"
          aria-label="Open Terminal"
        >
          <TerminalIcon className="w-5 h-5" />
        </button>
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={() => setIsOpen(false)}
    >
      <div
        className={`bg-[#0c0c0c] border border-white/20 shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)] w-full transition-all duration-300 flex flex-col font-mono text-sm md:text-base ${isMaximized ? "h-[95vh] w-[95vw]" : "max-w-2xl h-[600px]"
          }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-[#1a1a1a]">
          <div className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
            <div
              className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 cursor-pointer"
              onClick={() => setIsMaximized(!isMaximized)}
            />
            <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 cursor-pointer" />
            <span className="ml-2 text-white/60 text-xs">
              guest@rishi-portfolio:~
            </span>
          </div>
          <div className="flex items-center gap-3 text-white/40">
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="hover:text-white"
            >
              {isMaximized ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:text-white"
            >
              <X size={14} />
            </button>
          </div>
        </div>

        {/* content */}
        <div
          className="flex-1 overflow-y-auto p-4 text-white/90 selection:bg-white/20"
          ref={scrollRef}
          onClick={handleTerminalClick}
        >
          {history.map((entry) => (
            <div key={entry.id} className="mb-2 break-words">
              {entry.content}
            </div>
          ))}

          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <span className="text-green-400 shrink-0">guest@portfolio:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none text-white focus:ring-0 p-0"
              autoFocus
              spellCheck={false}
              autoComplete="off"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
