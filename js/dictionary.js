const words = [
  {
    word: "last-ditch",
    meaning: "필사적인",
  },
  {
    word: "personally",
    meaning: "나로서는",
  },
  {
    word: "dilatory",
    meaning: "미적거리는",
  },
  {
    word: "biological",
    meaning: "생물학의",
  },
  {
    word: "cheerful",
    meaning: "발랄한",
  },
  {
    word: "client",
    meaning: "고객",
  },
  {
    word: "harmony",
    meaning: "조화",
  },
  {
    word: "renown",
    meaning: "명성",
  },
  {
    word: "detailed",
    meaning: "상세한",
  },
  {
    word: "reference",
    meaning: "언급",
  },
];

const word = document.querySelector("#dictionary span:first-child");
const meaning = document.querySelector("#dictionary span:last-child");
const todaysWord = words[Math.floor(Math.random() * words.length)];

word.innerText = todaysWord.word;
meaning.innerText = todaysWord.meaning;
