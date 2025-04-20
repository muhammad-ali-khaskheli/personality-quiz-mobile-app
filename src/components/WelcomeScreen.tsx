
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";

interface WelcomeScreenProps {
  onStart: () => void;
}

export function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full px-6 py-10 bg-quiz-bg">
      <div className="w-full max-w-md space-y-8 text-center">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">Personality Quiz</h1>
          <p className="text-lg text-gray-600">Discover your Big Five personality traits</p>
        </div>

        <div className="p-6 rounded-xl bg-white shadow-sm">
          <h2 className="text-xl font-semibold mb-4">About the Big Five</h2>
          <p className="text-gray-700 mb-4">
            The Big Five personality traits represent five core dimensions of personality:
          </p>
          
          <ul className="space-y-3 mb-6">
            <li className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-quiz-openness"></div>
              <span><b>Openness</b> to Experience</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-quiz-conscientiousness"></div>
              <span><b>Conscientiousness</b></span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-quiz-extraversion"></div>
              <span><b>Extraversion</b></span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-quiz-agreeableness"></div>
              <span><b>Agreeableness</b></span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-quiz-neuroticism"></div>
              <span><b>Neuroticism</b></span>
            </li>
          </ul>
          
          <p className="text-gray-700 mb-4">
            This quiz consists of 50 questions and takes about 10-15 minutes to complete.
          </p>
        </div>

        <Button 
          onClick={onStart} 
          className="w-full py-6 text-lg bg-quiz-openness hover:bg-opacity-90"
        >
          Start Quiz <ChevronRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
