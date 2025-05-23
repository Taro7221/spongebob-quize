import React from "react";
import type { Question } from './questions';

type Props = {
  question: Question;
  questionIndex: number;
  total: number;
  onAnswer: (value: string) => void;
};

export const QuestionScreen: React.FC<Props> = ({ question, questionIndex, total, onAnswer }) => {
  return (
    <div className="p-6 max-w-xl mx-auto text-center">
      <h2 className="text-xl font-semibold mb-4">
        第 {questionIndex + 1} 題 / {total} 題
      </h2>
      <p className="text-lg font-bold mb-6">{question.question}</p>
      <div className="flex flex-col space-y-4">
        {question.options.map((option: { value: string; text: string }, index: number) => (
          <button
            key={index}
            onClick={() => onAnswer(option.value)}
            className="w-full bg-blue-100 hover:bg-blue-200 text-black py-2 px-4 rounded-xl shadow"
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
};