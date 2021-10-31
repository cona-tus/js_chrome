const words = [
  {
    word: "It's taking too much of my time.",
    meaning: "시간을 너무 많이 잡아먹어.",
  },
  {
    word: "I'll hold you to  that.",
    meaning: "그 약속 지킬 수 있는지 두고 볼게.",
  },
  {
    word: "Like what?",
    meaning: "예를 들면?",
  },
  {
    word: "I'll believe it when I see it.",
    meaning: "직접 봐야 널 믿을 수 있을 것 같아.",
  },
  {
    word: "The IT technician has arrived.",
    meaning: "IT 기술자가 도착했어요.",
  },
  {
    word: "Good, and not a too soon.",
    meaning: "좋아요, 때마침 잘 됐네요.",
  },
  {
    word: "What's the emergency?",
    meaning: "무슨 급한 일이 있는 거죠?",
  },
  {
    word: "For the fourth time this year.",
    meaning: "올해만 벌써 네 번째야.",
  },
  {
    word: "We definitely need to replace it.",
    meaning: "반드시 교체해야 해요.",
  },
];

const word = document.querySelector("#dictionary span:first-child");
const meaning = document.querySelector("#dictionary span:last-child");
const todaysWord = words[Math.floor(Math.random() * words.length)];

word.innerText = todaysWord.word;
meaning.innerText = todaysWord.meaning;
