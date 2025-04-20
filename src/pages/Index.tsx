
import { useState } from "react";
import { WelcomeScreen } from "@/components/WelcomeScreen";
import { QuestionScreen } from "@/components/QuestionScreen";
import { ResultsScreen } from "@/components/ResultsScreen";
import { QuizProvider } from "@/context/QuizContext";
import { useQuiz } from "@/context/QuizContext";

const QuizApp = () => {
  const { results } = useQuiz();
  const [started, setStarted] = useState(false);

  // Determine which screen to show
  const renderScreen = () => {
    if (results) {
      return <ResultsScreen />;
    }
    if (started) {
      return <QuestionScreen />;
    }
    return <WelcomeScreen onStart={() => setStarted(true)} />;
  };

  return renderScreen();
};

const Index = () => {
  return (
    <div className="h-full w-full bg-quiz-bg">
      <QuizProvider>
        <QuizApp />
      </QuizProvider>
    </div>
  );
};

export default Index;
