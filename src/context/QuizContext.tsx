
import { ReactNode, createContext, useContext, useState } from "react";
import { AnswerData, Question, QuestionCategory, QuizResult } from "../types/quiz";
import { questions } from "../data/quizQuestions";

interface QuizContextType {
  currentQuestionIndex: number;
  answers: AnswerData;
  results: QuizResult | null;
  setAnswer: (questionId: number, value: number) => void;
  nextQuestion: () => void;
  previousQuestion: () => void;
  calculateResults: () => void;
  resetQuiz: () => void;
  progress: number;
  currentQuestion: Question | null;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export function QuizProvider({ children }: { children: ReactNode }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<AnswerData>({});
  const [results, setResults] = useState<QuizResult | null>(null);

  const currentQuestion = questions[currentQuestionIndex] || null;
  const progress = Math.round(((currentQuestionIndex + 1) / questions.length) * 100);

  const setAnswer = (questionId: number, value: number) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const previousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const calculateResults = () => {
    const categoryScores: Record<QuestionCategory, number[]> = {
      openness: [],
      conscientiousness: [],
      extraversion: [],
      agreeableness: [],
      neuroticism: []
    };

    // Group the answers by category
    questions.forEach(question => {
      const score = answers[question.id] || 0;
      const adjustedScore = question.isReversed ? 6 - score : score;
      categoryScores[question.category].push(adjustedScore);
    });

    // Calculate average for each category
    const result: QuizResult = {
      openness: calculateAverage(categoryScores.openness),
      conscientiousness: calculateAverage(categoryScores.conscientiousness),
      extraversion: calculateAverage(categoryScores.extraversion),
      agreeableness: calculateAverage(categoryScores.agreeableness),
      neuroticism: calculateAverage(categoryScores.neuroticism)
    };

    setResults(result);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setResults(null);
  };

  // Helper function to calculate average
  const calculateAverage = (scores: number[]): number => {
    if (scores.length === 0) return 0;
    const sum = scores.reduce((total, score) => total + score, 0);
    return Number((sum / scores.length).toFixed(2));
  };

  return (
    <QuizContext.Provider value={{
      currentQuestionIndex,
      answers,
      results,
      setAnswer,
      nextQuestion,
      previousQuestion,
      calculateResults,
      resetQuiz,
      progress,
      currentQuestion
    }}>
      {children}
    </QuizContext.Provider>
  );
}

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error("useQuiz must be used within a QuizProvider");
  }
  return context;
};
