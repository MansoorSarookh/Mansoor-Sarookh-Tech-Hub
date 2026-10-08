import { useState } from 'react';
import { CheckCircle2, Circle, ArrowDown, ChevronRight } from 'lucide-react';
import { RoadmapStep } from '../../types';

interface RoadmapViewerProps {
  steps?: RoadmapStep[];
}

export function RoadmapViewer({ steps }: RoadmapViewerProps) {
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [activeStep, setActiveStep] = useState<number>(1);

  if (!steps || steps.length === 0) return null;

  const toggleComplete = (stepNum: number) => {
    setCompletedSteps((prev) =>
      prev.includes(stepNum) ? prev.filter((s) => s !== stepNum) : [...prev, stepNum]
    );
  };

  const currentStepData = steps.find((s) => s.step === activeStep) || steps[0];

  return (
    <div className="my-8 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 p-6 sm:p-8 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-neutral-100 dark:border-neutral-800 gap-4">
        <div>
          <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
            Interactive Learning Path
          </h3>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
            Follow the sequential path from foundational web principles to senior engineering patterns.
          </p>
        </div>
        <div className="text-xs font-mono text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 px-3 py-1.5 rounded-lg shrink-0 self-start sm:self-auto tabular-nums">
          Completed: {completedSteps.length} of {steps.length} milestones
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Step Flow Nodes */}
        <div className="lg:col-span-5 space-y-3">
          {steps.map((item, idx) => {
            const isCompleted = completedSteps.includes(item.step);
            const isSelected = activeStep === item.step;

            return (
              <div key={item.step} className="flex flex-col">
                <div
                  onClick={() => setActiveStep(item.step)}
                  className={`group flex items-center justify-between p-3.5 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'border-blue-500/80 bg-blue-50/50 dark:bg-blue-950/20 shadow-xs'
                      : 'border-neutral-200/80 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 bg-neutral-50/30 dark:bg-neutral-900/40'
                  }`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') setActiveStep(item.step);
                  }}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleComplete(item.step);
                      }}
                      className="text-neutral-400 hover:text-blue-600 transition-colors shrink-0"
                      aria-label={`Mark step ${item.step} as ${isCompleted ? 'incomplete' : 'completed'}`}
                    >
                      {isCompleted ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 fill-emerald-500/10" />
                      ) : (
                        <Circle className="w-5 h-5" />
                      )}
                    </button>
                    <div className="truncate">
                      <span className="text-[11px] font-mono text-neutral-400 block tabular-nums">
                        Step 0{item.step}
                      </span>
                      <span
                        className={`text-xs sm:text-sm font-semibold truncate block ${
                          isSelected
                            ? 'text-blue-600 dark:text-blue-400'
                            : 'text-neutral-800 dark:text-neutral-200'
                        } ${isCompleted ? 'line-through opacity-70' : ''}`}
                      >
                        {item.title}
                      </span>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 text-neutral-400 shrink-0 transition-transform ${
                      isSelected ? 'translate-x-1 text-blue-500' : 'opacity-40'
                    }`}
                  />
                </div>

                {idx < steps.length - 1 && (
                  <div className="flex justify-center my-1 text-neutral-300 dark:text-neutral-700">
                    <ArrowDown className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Detailed Focus View of Active Milestone */}
        <div className="lg:col-span-7 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/60 dark:bg-neutral-950/40 p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 tabular-nums">
              Milestone 0{currentStepData.step} / 0{steps.length}
            </span>
            <button
              type="button"
              onClick={() => toggleComplete(currentStepData.step)}
              className="text-xs font-medium text-neutral-600 dark:text-neutral-300 hover:text-blue-600 flex items-center gap-1.5"
            >
              {completedSteps.includes(currentStepData.step) ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Completed</span>
                </>
              ) : (
                <>
                  <Circle className="w-4 h-4" />
                  <span>Mark as Done</span>
                </>
              )}
            </button>
          </div>

          <h4 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-3">
            {currentStepData.title}
          </h4>

          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
            {currentStepData.description}
          </p>

          <div className="space-y-3">
            <h5 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
              Key Concepts & Competencies
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {currentStepData.skills.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-2 text-xs text-neutral-700 dark:text-neutral-300 p-2.5 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200/60 dark:border-neutral-800"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                  <span className="font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
