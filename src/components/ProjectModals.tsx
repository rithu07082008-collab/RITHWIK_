import React, { useState } from 'react';
import { X, Play, RefreshCw, CheckCircle, AlertTriangle, XCircle, Sparkles, Sliders, Calculator, CheckSquare, BrainCircuit } from 'lucide-react';
import { Project } from '../types.ts';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      id="project-demo-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl p-6 overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-800/40 text-cyan-400">
              {project.demoType === 'calculator' && <Calculator className="w-5 h-5" />}
              {project.demoType === 'voting' && <CheckSquare className="w-5 h-5" />}
              {project.demoType === 'genai' && <BrainCircuit className="w-5 h-5" />}
            </div>
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                {project.title} &mdash; Live Interactive Demo
              </h3>
              <p className="text-xs text-slate-400">
                Interactive preview demonstrating core JavaScript conditional logic and DOM state
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body / Demo Content */}
        <div className="overflow-y-auto py-5 space-y-6 flex-1 pr-1">
          {project.demoType === 'calculator' && <GradeCalculatorDemo />}
          {project.demoType === 'voting' && <VotingCheckerDemo />}
          {project.demoType === 'genai' && <GenAiSandboxDemo />}
        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span className="font-mono">Repository: {project.githubUrl}</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium rounded-lg transition-colors"
          >
            Close Demo
          </button>
        </div>
      </div>
    </div>
  );
};

/* ---------------- 1. Student Grade Calculator Demo ---------------- */
function GradeCalculatorDemo() {
  const [subjects, setSubjects] = useState([
    { name: 'Computer Programming', marks: 88 },
    { name: 'Mathematics I', marks: 92 },
    { name: 'Digital Logic', marks: 85 },
    { name: 'Engineering Physics', marks: 79 },
    { name: 'Technical English', marks: 90 },
  ]);

  const [result, setResult] = useState<{
    total: number;
    percentage: number;
    gpa: string;
    grade: string;
    feedback: string;
    status: 'Distinction' | 'First Class' | 'Pass' | 'Needs Improvement';
  } | null>(null);

  const handleMarkChange = (index: number, val: string) => {
    const num = Math.min(100, Math.max(0, parseInt(val, 10) || 0));
    const next = [...subjects];
    next[index].marks = num;
    setSubjects(next);
  };

  const calculateGrade = () => {
    const total = subjects.reduce((sum, s) => sum + s.marks, 0);
    const percentage = Math.round((total / (subjects.length * 100)) * 100 * 10) / 10;
    const gpa = (percentage / 10).toFixed(2);

    let grade = 'F';
    let status: 'Distinction' | 'First Class' | 'Pass' | 'Needs Improvement' = 'Pass';
    let feedback = '';

    if (percentage >= 90) {
      grade = 'A+ (Outstanding)';
      status = 'Distinction';
      feedback = 'Exceptional academic excellence across all core CSE subjects!';
    } else if (percentage >= 80) {
      grade = 'A (Excellent)';
      status = 'Distinction';
      feedback = 'Strong performance! Outstanding conceptual understanding.';
    } else if (percentage >= 70) {
      grade = 'B+ (Very Good)';
      status = 'First Class';
      feedback = 'Good consistent mastery. Ready for advanced coursework.';
    } else if (percentage >= 60) {
      grade = 'B (Good)';
      status = 'First Class';
      feedback = 'Satisfactory performance. Continue focused practice on weaker topics.';
    } else if (percentage >= 40) {
      grade = 'C (Pass)';
      status = 'Pass';
      feedback = 'Passing grade achieved. Recommend revising fundamental problem sets.';
    } else {
      grade = 'F (Re-appear)';
      status = 'Needs Improvement';
      feedback = 'Score below qualifying threshold. Further practice required.';
    }

    setResult({ total, percentage, gpa, grade, feedback, status });
  };

  const loadSample = () => {
    setSubjects([
      { name: 'Computer Programming', marks: 95 },
      { name: 'Mathematics I', marks: 89 },
      { name: 'Digital Logic', marks: 91 },
      { name: 'Engineering Physics', marks: 84 },
      { name: 'Technical English', marks: 92 },
    ]);
    setResult(null);
  };

  return (
    <div className="space-y-5">
      <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/60 text-xs text-slate-300">
        <p className="font-semibold text-white mb-1">Interactive Grade Calculator Demo</p>
        <p>Enter test marks for each course (0-100) and click Calculate to simulate the client-side JavaScript calculation algorithm.</p>
      </div>

      <div className="space-y-3">
        {subjects.map((sub, idx) => (
          <div key={idx} className="flex items-center justify-between gap-4 p-2.5 bg-slate-800/60 rounded-lg border border-slate-700/40">
            <span className="text-xs sm:text-sm font-medium text-slate-200">{sub.name}</span>
            <div className="flex items-center gap-2">
              <input
                type="number"
                min="0"
                max="100"
                value={sub.marks}
                onChange={(e) => handleMarkChange(idx, e.target.value)}
                className="w-16 px-2 py-1 text-center bg-slate-900 border border-slate-700 rounded text-cyan-300 font-mono text-xs sm:text-sm focus:outline-none focus:border-cyan-400"
              />
              <span className="text-xs text-slate-500">/ 100</span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={calculateGrade}
          className="flex-1 py-2.5 px-4 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-slate-950 font-bold text-xs sm:text-sm rounded-lg transition-all shadow-md shadow-cyan-500/20"
        >
          Calculate Results
        </button>
        <button
          onClick={loadSample}
          className="py-2.5 px-3 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Reset Sample</span>
        </button>
      </div>

      {result && (
        <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-800/50 space-y-3 animate-fadeIn">
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="p-2.5 bg-slate-900/80 rounded-lg border border-slate-800">
              <div className="text-[11px] text-slate-400">Total Marks</div>
              <div className="text-base sm:text-lg font-bold text-white font-mono">{result.total} / 500</div>
            </div>
            <div className="p-2.5 bg-slate-900/80 rounded-lg border border-slate-800">
              <div className="text-[11px] text-slate-400">Percentage</div>
              <div className="text-base sm:text-lg font-bold text-cyan-300 font-mono">{result.percentage}%</div>
            </div>
            <div className="p-2.5 bg-slate-900/80 rounded-lg border border-slate-800">
              <div className="text-[11px] text-slate-400">GPA (10 Scale)</div>
              <div className="text-base sm:text-lg font-bold text-violet-300 font-mono">{result.gpa}</div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-1">
            <span className="text-xs text-slate-300 font-medium">Performance Category:</span>
            <span className="px-2.5 py-1 rounded bg-cyan-900/50 border border-cyan-700 text-cyan-300 font-semibold text-xs">
              {result.grade}
            </span>
          </div>

          <p className="text-xs text-slate-300 italic bg-slate-900/50 p-2.5 rounded border border-slate-800">
            &bull; {result.feedback}
          </p>
        </div>
      )}
    </div>
  );
}

/* ---------------- 2. Voting Eligibility Checker Demo ---------------- */
function VotingCheckerDemo() {
  const [age, setAge] = useState<number>(18);
  const [isCitizen, setIsCitizen] = useState<boolean>(true);
  const [hasId, setHasId] = useState<boolean>(true);
  const [evaluated, setEvaluated] = useState<boolean>(false);

  const isEligible = age >= 18 && isCitizen && hasId;

  return (
    <div className="space-y-5">
      <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/60 text-xs text-slate-300">
        <p className="font-semibold text-white mb-1">Conditional Logic Validator</p>
        <p>Demonstrates multi-branch conditional statements and real-time state evaluation.</p>
      </div>

      <div className="space-y-4 bg-slate-800/40 p-4 rounded-xl border border-slate-800">
        {/* Age Input */}
        <div>
          <label className="flex items-center justify-between text-xs sm:text-sm font-medium text-slate-200 mb-1.5">
            <span>Applicant Age:</span>
            <span className="text-cyan-300 font-mono font-bold">{age} Years Old</span>
          </label>
          <input
            type="range"
            min="10"
            max="100"
            value={age}
            onChange={(e) => {
              setAge(parseInt(e.target.value, 10));
              setEvaluated(true);
            }}
            className="w-full accent-cyan-400 bg-slate-700 h-2 rounded-lg cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
            <span>10 yrs</span>
            <span className="text-cyan-400 font-semibold">18 yrs (Legal Threshold)</span>
            <span>100 yrs</span>
          </div>
        </div>

        {/* Citizenship Checkbox */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-800">
          <span className="text-xs sm:text-sm text-slate-300 font-medium">Valid Citizen of State/Country:</span>
          <div className="flex gap-2">
            <button
              onClick={() => {
                setIsCitizen(true);
                setEvaluated(true);
              }}
              className={`px-3 py-1 rounded text-xs font-semibold transition-colors ${
                isCitizen ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-400'
              }`}
            >
              Yes
            </button>
            <button
              onClick={() => {
                setIsCitizen(false);
                setEvaluated(true);
              }}
              className={`px-3 py-1 rounded text-xs font-semibold transition-colors ${
                !isCitizen ? 'bg-red-500 text-white' : 'bg-slate-800 text-slate-400'
              }`}
            >
              No
            </button>
          </div>
        </div>

        {/* ID Documentation Checkbox */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-800">
          <span className="text-xs sm:text-sm text-slate-300 font-medium">Possesses Official ID Documentation:</span>
          <div className="flex gap-2">
            <button
              onClick={() => {
                setHasId(true);
                setEvaluated(true);
              }}
              className={`px-3 py-1 rounded text-xs font-semibold transition-colors ${
                hasId ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-400'
              }`}
            >
              Yes
            </button>
            <button
              onClick={() => {
                setHasId(false);
                setEvaluated(true);
              }}
              className={`px-3 py-1 rounded text-xs font-semibold transition-colors ${
                !hasId ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-400'
              }`}
            >
              No
            </button>
          </div>
        </div>
      </div>

      {/* Validation Result Box */}
      <div
        className={`p-4 rounded-xl border transition-all ${
          isEligible
            ? 'bg-emerald-950/40 border-emerald-700/60 text-emerald-200'
            : age < 18
            ? 'bg-amber-950/40 border-amber-700/60 text-amber-200'
            : 'bg-red-950/40 border-red-700/60 text-red-200'
        }`}
      >
        <div className="flex items-start gap-3">
          {isEligible ? (
            <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          ) : age < 18 ? (
            <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          ) : (
            <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
          )}

          <div className="space-y-1">
            <h4 className="font-bold text-sm">
              {isEligible
                ? 'ELIGIBLE TO REGISTER & VOTE'
                : age < 18
                ? 'CURRENTLY INELIGIBLE &mdash; UNDER LEGAL AGE'
                : 'CURRENTLY INELIGIBLE &mdash; DOCUMENTATION CRITERIA UNMET'}
            </h4>
            <p className="text-xs opacity-90 leading-relaxed">
              {isEligible &&
                'All constitutional criteria are met. User is 18 or older, holds legal citizenship, and holds official identity verification.'}
              {age < 18 &&
                `Applicant is ${age} years old. Under constitutional guidelines, applicant must wait ${
                  18 - age
                } more year(s) until reaching the minimum age of 18.`}
              {age >= 18 && !isCitizen && 'Voter registration requires verified citizenship in this jurisdiction.'}
              {age >= 18 && isCitizen && !hasId &&
                'Age and citizenship requirements are met, but official photo identity proof is required before registration can be processed.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- 3. GenAI Concept Sandbox Demo ---------------- */
function GenAiSandboxDemo() {
  const [systemPrompt, setSystemPrompt] = useState('You are an expert Computer Science tutor helping a 1st-year student.');
  const [userPrompt, setUserPrompt] = useState('Explain why prompt engineering is important for AI applications.');
  const [temperature, setTemperature] = useState<number>(0.7);
  const [simulatedResponse, setSimulatedResponse] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const runSimulation = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setSimulatedResponse(
        `[Simulated Model Output (Temp: ${temperature})]
Prompt engineering is fundamental because LLMs are sensitive to context formatting and constraint clarity. By structuring role instructions, few-shot demonstrations, and explicit schemas, developers ensure consistent reasoning, reduced hallucinations, and reliable programmatic outputs.`
      );
      setIsProcessing(false);
    }, 600);
  };

  return (
    <div className="space-y-4">
      <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/60 text-xs text-slate-300">
        <p className="font-semibold text-white mb-1">GenAI Concept Architecture Sandbox</p>
        <p>Interactive demonstration of system instructions, user prompts, and temperature parameter testing.</p>
      </div>

      <div className="space-y-3">
        <div>
          <label className="text-xs font-semibold text-slate-300 flex items-center justify-between mb-1">
            <span>System Instruction (Context & Persona)</span>
            <span className="text-[10px] text-cyan-400 font-mono">Role: System</span>
          </label>
          <input
            type="text"
            value={systemPrompt}
            onChange={(e) => setSystemPrompt(e.target.value)}
            className="w-full px-3 py-2 bg-slate-800/80 border border-slate-700 rounded-lg text-xs text-slate-200 focus:outline-none focus:border-cyan-400 font-mono"
          />
        </div>

        <div>
          <label className="text-xs font-semibold text-slate-300 flex items-center justify-between mb-1">
            <span>User Query</span>
            <span className="text-[10px] text-violet-400 font-mono">Role: User</span>
          </label>
          <textarea
            rows={2}
            value={userPrompt}
            onChange={(e) => setUserPrompt(e.target.value)}
            className="w-full px-3 py-2 bg-slate-800/80 border border-slate-700 rounded-lg text-xs text-slate-200 focus:outline-none focus:border-cyan-400 font-mono"
          />
        </div>

        <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-800">
          <div className="flex justify-between items-center text-xs text-slate-300 mb-1.5">
            <span>Temperature (Creativity vs Determinism):</span>
            <span className="font-mono text-cyan-400 font-bold">{temperature.toFixed(1)}</span>
          </div>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={temperature}
            onChange={(e) => setTemperature(parseFloat(e.target.value))}
            className="w-full accent-cyan-400 bg-slate-700 h-1.5 rounded cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-slate-500 mt-1">
            <span>0.0 (Precise & Deterministic)</span>
            <span>1.0 (Creative & Varied)</span>
          </div>
        </div>
      </div>

      <button
        onClick={runSimulation}
        disabled={isProcessing}
        className="w-full py-2.5 px-4 bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white font-bold text-xs sm:text-sm rounded-lg transition-all shadow-md shadow-violet-600/20 flex items-center justify-center gap-2"
      >
        <Sparkles className="w-4 h-4" />
        <span>{isProcessing ? 'Analyzing Prompt Parameters...' : 'Simulate LLM Prompt Pipeline'}</span>
      </button>

      {simulatedResponse && (
        <div className="p-4 rounded-xl bg-violet-950/30 border border-violet-800/50 text-xs text-slate-200 font-mono whitespace-pre-line leading-relaxed animate-fadeIn">
          {simulatedResponse}
        </div>
      )}
    </div>
  );
}
