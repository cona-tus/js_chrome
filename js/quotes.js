const quotes = [
    {
        quote: "가을바람 소리는 속절없는 세월에 감금된 이의 벗이 되었다",
        author: "최영미",
    },
    {
        quote: "바람이 밤의 베일을 들어올리며 세계 끝으로 불어갈 때 문득, 한줌 먼지로 흩어지는 나",
        author: "남진우",
    },
    {
        quote: "저 빵을 뜯으면 야채가 나올까, 단팥이 나올까?",
        author: "박성우",
    },
    {
        quote: "가을은 오십 먹은 소년 먹감에 비치는 산천",
        author: "박용래",
    },
    {
        quote: "그늘에 갇혀서도 악착같이 한쪽을 향하고 있다... 눈이 없어도 분별해내는 밝음과 어두움",
        author: "박규리",
    },
    {
        quote: "길가의 코스모스를 보고 가슴이 철렁했다 나에게 남은 날이 많지 않다",
        author: "정희성",
    },
    {
        quote: "그 여름의 숲에서 당신은 물었지 왜 우는가 왜 너는 울어야만 하는가",
        author: "박소란",
    },
    {
        quote: "자연이 들어 있구나 사람이 살아가는 데 소중한 것들이 들어 있구나",
        author: "김은영",
    },
    {
        quote: "행복은 왜 꼭 그렇게 멀리 떨어져 앉아 서먹했던 것일까요",
        author: "김경미",
    },
    {
        quote: "너는 연못에 돋아난 둥근 무늬결도 멀리, 중심에서 아련해졌을 때, 비로소 물의 가벼운 날개를 얻었을지",
        author: "류인서",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
