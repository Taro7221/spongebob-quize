import { Analytics } from "@vercel/analytics/next"
import { useState } from "react";
import { StartScreen } from "./StartScreen";
import { QuestionScreen } from "./QuestionScreen";
import { ResultScreen } from "./ResultScreen";
import { results } from "./results";
import { questions } from "./questions";

function App() {
  const [step, setStep] = useState<"start" | "quiz" | "result">("start");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<keyof typeof results | undefined>(undefined);

  const handleStart = () => {
    setStep("quiz");
    setCurrentQuestion(0);
    setAnswers([]);
  };

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // 統計出現次數最多的角色
      const count: Record<string, number> = {};
      newAnswers.forEach((v) => {
        count[v] = (count[v] || 0) + 1;
      });
      const mostFrequent = Object.entries(count).sort((a, b) => b[1] - a[1])[0][0];
      setResult(mostFrequent as keyof typeof results);
      setStep("result");
    }
  };

  const handleRestart = () => {
    setStep("start");
    setAnswers([]);
    setCurrentQuestion(0);
    setResult(undefined);
  };

  return (
    <div>
      {step === "start" && <StartScreen onStart={handleStart} />}
      {step === "quiz" && (
        <QuestionScreen
          question={questions[currentQuestion]}
          questionIndex={currentQuestion}
          total={questions.length}
          onAnswer={handleAnswer}
        />
      )}
      {step === "result" && result && (
        <ResultScreen characterId={result} onRestart={handleRestart} />
      )}
      <Analytics />
    </div>
  );
}

export default App;