
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { useQuiz } from "../context/QuizContext";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function QuestionScreen() {
  const { 
    currentQuestion, 
    progress, 
    answers, 
    setAnswer, 
    nextQuestion, 
    previousQuestion, 
    calculateResults 
  } = useQuiz();
  
  const [selectedValue, setSelectedValue] = useState<number | null>(null);
  const isLastQuestion = progress === 100;

  // Update selected value when the current question changes
  useEffect(() => {
    if (currentQuestion) {
      setSelectedValue(answers[currentQuestion.id] || null);
    }
  }, [currentQuestion, answers]);

  // Handle selection of an answer option
  const handleSelect = (value: number) => {
    if (currentQuestion) {
      setSelectedValue(value);
      setAnswer(currentQuestion.id, value);
    }
  };

  // Handle clicking the "Next" button
  const handleNext = () => {
    if (isLastQuestion) {
      calculateResults();
    } else {
      nextQuestion();
    }
  };

  if (!currentQuestion) return null;

  return (
    <div className="flex flex-col h-full bg-quiz-bg">
      {/* Progress bar */}
      <div className="p-4 bg-white shadow-sm">
        <div className="flex justify-between text-sm text-gray-500 mb-2">
          <span>Question {progress}%</span>
          <span>{currentQuestion.id} of 50</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>
      
      {/* Question content */}
      <div className="flex-1 flex flex-col p-5">
        <div className="mb-8 mt-4">
          <h2 className="text-xl font-semibold text-center mb-6">{currentQuestion.text}</h2>
          
          <div className="flex justify-between text-xs text-gray-500 mb-2 px-2">
            <span>Strongly Disagree</span>
            <span>Strongly Agree</span>
          </div>
          
          {/* Answer options */}
          <div className="flex justify-between gap-2 mt-3">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                onClick={() => handleSelect(value)}
                className={`w-12 h-12 rounded-full text-lg font-medium flex items-center justify-center transition-all
                  ${selectedValue === value 
                    ? `bg-quiz-${currentQuestion.category} text-white scale-110` 
                    : 'bg-white border border-gray-300 text-gray-700'
                  }`}
              >
                {value}
              </button>
            ))}
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="mt-auto flex gap-3">
          <Button
            variant="outline"
            onClick={previousQuestion}
            className="flex-1 py-6"
            disabled={currentQuestion.id === 1}
          >
            <ChevronLeft className="mr-1 h-4 w-4" /> Previous
          </Button>
          <Button
            onClick={handleNext}
            className={`flex-1 py-6 ${
              selectedValue === null ? "opacity-50 cursor-not-allowed" : ""
            } ${isLastQuestion ? "bg-quiz-openness" : ""}`}
            disabled={selectedValue === null}
          >
            {isLastQuestion ? "See Results" : "Next"} 
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
