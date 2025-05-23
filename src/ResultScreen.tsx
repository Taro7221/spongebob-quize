import React from "react";
import { results } from "./results";

interface Props {
  characterId: keyof typeof results;
  onRestart: () => void;
}

export const ResultScreen: React.FC<Props> = ({ characterId, onRestart }) => {
  const result = results[characterId];

 return (
    <div className="p-6 max-w-xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">你的角色是：{result.name}</h2>
      <p className="text-lg mb-4">{result.description}</p>
      <img
        src={result.src}
        alt={result.name}
        className="mx-auto mb-4 w-40 h-40 object-contain"
      />
      <blockquote className="italic text-gray-600 mb-6">「{result.quote}」</blockquote>
      <button
        onClick={onRestart}
        className="bg-green-400 hover:bg-green-500 text-black font-bold py-2 px-6 rounded-2xl shadow"
      >
        再玩一次
      </button>
    </div>
  );
}