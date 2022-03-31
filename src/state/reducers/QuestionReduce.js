const questions = [
  {
    questionNo: 1,
    question: "1)JavaScript written under which of the following tag?",
    options: ["JavaScritp", "<script></script>", "head", "code"],
    answer: "<script></script>",
  },
  {
    questionNo: 2,
    question:
      "2)A variable in JavaScript declared with which of the following keyword?",
    options: ["new", "int", "string", "var"],
    answer: "var",
  },
  {
    questionNo: 3,
    question:
      "3)Which of the followings are primitive data types in JavaScript?",
    options: ["string", "number", "boolean", "All of the above"],
    answer: "All of the avove",
  },
  {
    questionNo: 4,
    question: "4)Which of the following is NOT a JavaScript object?",
    options: [
      "var obj = {}",
      "var obj = {name:'Chirag'}",
      "var obj = {name='Chirag'}",
      "var obj = new Object();",
    ],
    answer: "var obj = {name='Chirag'}",
  },
];
const reducer = (state = questions, action) => {
  switch (action.type) {
    case "ADD_ANSWER":
      return state + action.payload;
    default:
      return state;
  }
};
export default reducer;
