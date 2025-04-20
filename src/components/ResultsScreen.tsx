
import { Button } from "./ui/button";
import { useQuiz } from "../context/QuizContext";
import { categoryDescriptions } from "../data/quizQuestions";
import { QuestionCategory } from "../types/quiz";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LabelList } from "recharts";
import { ArrowLeftCircle } from "lucide-react";

export function ResultsScreen() {
  const { results, resetQuiz } = useQuiz();

  if (!results) return null;

  const formatData = () => {
    return Object.entries(results).map(([trait, score]) => ({
      trait: trait.charAt(0).toUpperCase() + trait.slice(1, 3),
      fullTrait: trait as QuestionCategory,
      score,
      fill: categoryDescriptions[trait as QuestionCategory].color
    }));
  };

  const chartData = formatData();

  return (
    <div className="flex flex-col h-full bg-quiz-bg overflow-auto">
      <div className="p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Your Personality Profile</h1>
        
        {/* Chart section */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
          <h2 className="text-xl font-semibold mb-4 text-center">Your Big Five Scores</h2>
          <div className="w-full h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                margin={{ top: 20, right: 10, left: -30, bottom: 5 }}
                layout="vertical"
              >
                <XAxis type="number" domain={[0, 5]} />
                <YAxis dataKey="trait" type="category" width={40} />
                <Bar dataKey="score" radius={[0, 4, 4, 0]}>
                  <LabelList dataKey="score" position="right" />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Individual trait explanations */}
        <div className="space-y-5">
          {Object.entries(results).map(([trait, score]) => {
            const category = trait as QuestionCategory;
            const description = categoryDescriptions[category];
            const level = score >= 4 ? "high" : score <= 2 ? "low" : "moderate";
            
            return (
              <div 
                key={trait}
                className="bg-white rounded-xl shadow-sm p-5 border-l-4"
                style={{ borderLeftColor: description.color }}
              >
                <h3 className="text-lg font-semibold">{description.title}</h3>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex-1 h-2 bg-gray-200 rounded-full">
                    <div 
                      className="h-2 rounded-full" 
                      style={{ 
                        width: `${(score / 5) * 100}%`, 
                        backgroundColor: description.color 
                      }}
                    />
                  </div>
                  <span className="font-medium">{score}</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{description.description}</p>
                <p className="text-sm">
                  <span className="font-medium">Your result: </span>
                  {level === "high" ? description.high : 
                   level === "low" ? description.low : 
                   "You show a balance between " + description.low.toLowerCase() + " and " + description.high.toLowerCase()}
                </p>
              </div>
            );
          })}
        </div>
        
        <Button
          onClick={resetQuiz}
          className="w-full mt-8 py-6 bg-gray-800 hover:bg-gray-900"
        >
          <ArrowLeftCircle className="mr-2 h-5 w-5" /> Take Quiz Again
        </Button>
      </div>
    </div>
  );
}
