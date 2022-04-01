const questions = [
  {
    questionNo: 1,
    question: "1)JavaScript written under which of the following tag?",
    options: { a: "JavaScritp", b: "<script></script>", c: "head", d: "code" },
    answer: "b",
  },
  {
    questionNo: 2,
    question:
      "2)A variable in JavaScript declared with which of the following keyword?",
    options: { a: "new", b: "int", c: "string", d: "var" },
    answer: "d",
  },
  {
    questionNo: 3,
    question:
      "3)Which of the followings are primitive data types in JavaScript?",
    options: { a: "string", b: "number", c: "boolean", d: "All of the above" },

    answer: "d",
  },
  {
    questionNo: 4,
    question: "4)Which of the following is NOT a JavaScript object?",
    options: {
      a: "var obj = {}",
      b: "var obj = {name:'Chirag'}",
      c: "var obj = {name='Chirag'}",
      d: "var obj = new Object();",
    },
    answer: "c",
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
