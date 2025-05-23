import React from "react";

type Props = {
  onStart: () => void;
};

export const StartScreen: React.FC<Props> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-4 font-serif">
      <h1 className="text-4xl font-bold mb-4">你是海綿寶寶中的哪個角色？</h1>
      <p className="text-lg mb-6">透過 10 題問題來看看你的個性屬於誰！</p>
      <button
        onClick={onStart}
        className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded-2xl shadow-lg"
      >
        開始測驗
      </button>
    </div>
  );
};