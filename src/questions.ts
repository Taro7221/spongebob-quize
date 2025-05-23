export type Question = {
  question: string;
  options: { text: string; value: string }[];
};

export const questions: Question[] = [
  {
    question: "週末時你通常會做什麼？",
    options: [
      { text: "和朋友一起耍笨", value: "spongebob" },
      { text: "在沙發上睡一天", value: "patrick" },
      { text: "研究新知識或挑戰自己", value: "sandy" },
      { text: "安靜地看書或畫畫", value: "squidward" }
    ]
  },
  {
    question: "你對金錢的態度？",
    options: [
      { text: "賺錢是人生的樂趣", value: "krabs" },
      { text: "用來買快樂就好啦", value: "patrick" },
      { text: "理財計畫不能少", value: "gary" },
      { text: "錢乃身外之物，有夢想最重要", value: "spongebob" }
    ]
  },
  {
    question: "朋友都如何形容你？",
    options: [
      { text: "聰明但有點陰沉", value: "plankton" },
      { text: "超級樂觀又有趣", value: "spongebob" },
      { text: "成熟又理智", value: "gary" },
      { text: "做自己，不管別人怎麼想", value: "squidward" }
    ]
  },
  {
    question: "你在團隊中通常扮演什麼角色？",
    options: [
      { text: "領導者", value: "krabs" },
      { text: "執行者", value: "sandy" },
      { text: "搞笑氣氛王", value: "patrick" },
      { text: "潛水高手（觀察者）", value: "gary" }
    ]
  },
  {
    question: "你在派對上會？",
    options: [
      { text: "成為全場焦點", value: "pearl" },
      { text: "默默觀察大家", value: "gary" },
      { text: "和朋友盡情玩樂", value: "spongebob" },
      { text: "找機會談合作或賺錢", value: "krabs" }
    ]
  },
  {
    question: "遇到壓力時，你會？",
    options: [
      { text: "躲起來放空", value: "patrick" },
      { text: "擬定計畫冷靜應對", value: "plankton" },
      { text: "去健身或運動釋放壓力", value: "sandy" },
      { text: "寫日記或畫畫紓壓", value: "squidward" }
    ]
  },
  {
    question: "你最看重朋友的？",
    options: [
      { text: "誠實與幽默", value: "spongebob" },
      { text: "可靠與穩重", value: "gary" },
      { text: "刺激與冒險", value: "sandy" },
      { text: "願意聽你訴苦", value: "pearl" }
    ]
  },
  {
    question: "你理想的工作是？",
    options: [
      { text: "自己當老闆", value: "krabs" },
      { text: "幕後的策劃者", value: "plankton" },
      { text: "運動員或冒險家", value: "sandy" },
      { text: "藝術家", value: "squidward" }
    ]
  },
  {
    question: "當朋友失落時你會？",
    options: [
      { text: "講笑話讓他開心", value: "patrick" },
      { text: "默默陪伴", value: "gary" },
      { text: "理性分析並安慰", value: "sandy" },
      { text: "哭得比他還大聲", value: "pearl" }
    ]
  },
  {
    question: "你相信命運嗎？",
    options: [
      { text: "我創造我自己的命運", value: "sandy" },
      { text: "我覺得命運早就安排好一切", value: "patrick" },
      { text: "命運要靠精密計畫掌握", value: "plankton" },
      { text: "順其自然最重要", value: "spongebob" }
    ]
  }
];
