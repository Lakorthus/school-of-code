// *Posture and hidrate check app*
// function notification() {
//     alert("Timer is over");
//     timer();
// }
// function timer() {
//  let timer = 0;
//     let timerInterval = setInterval(() => {
//         timer++;
//         console.log(timer);
//         if (timer === 10) {
//             clearInterval(timerInterval);
//             console.log("Timer is over");
//             notification();
//         }
//     }
//     , 1000);
// }
// timer();

// *Weakly Review*
// let questions = [
//     "What is the difference between == and ===?",
//     "What is the difference between var, let and const?",
//     "What is the difference between null and undefined?",
//     "What is React?",
//     "What is the difference between React and React Native?",
//     "What is the difference between a state and a prop?",
// ];
// let answers = [
//     "The == operator compares two values for equality, while the === operator also compares the type of the values.",
//     "var is function scoped, let and const are block scoped.",
//     "undefined means a variable has been declared but has not yet been assigned a value, whereas null is an assignment value.",
//     "React is a JavaScript library for building user interfaces.",
//     "React Native is a framework for building native apps using React.",
//     "A state is an object that stores a component's dynamic data and determines how the component renders and behaves. Props are arguments passed into React components.",
// ];
// function checkWeek() {
//     let week = prompt("What week do you want to review?");
//     switch (week) {
//     case 1:
//         question();// the week 1 questions will appear here
//         break;
//     case 2:
//         question();// the week 2 questions will appear here
//         break;
//     case 3:
//         question();// the week 3 questions will appear here
//         break;
//     case 4:
//         question();// the week 4 questions will appear here
//         break;
//         default:
//             alert("Please select a week between 1 and 4");
//             checkWeek();
//     }
// }
// function question() {
//     let randomQuestion = Math.floor(Math.random() * questions.length);
//     let question = questions[randomQuestion];
//     let answer = answers[randomQuestion];
//     let userAnswer = prompt(question);
//     if (userAnswer === answer) {
//         alert("Correct!");
//     } else {
//         alert("Wrong!");
//     }
// }
// question();

//*Random Interview question*
// let interviewQuestions = [
//   "Tell a time when you had to work with a difficult person.",
//   "How do you handle stress and pressure?",
//   "What is your greatest achievement?",
//   "How many tenis ball will fit in airplane?",
//   "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
//   "Given an integer x, return true if x is palindrome integer.",
//   "Given a string s, find the length of the longest substring without repeating characters.",
//   "Given an array of integers nums, sort the array in ascending order.",
//   "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
// ];
// function interviewRandom() {
//   let randomQuestion = Math.floor(Math.random() * interviewQuestions.length);
//   let question = interviewQuestions[randomQuestion];
//   console.log(question);
// }
// interviewRandom();

// *Squat progress tracker*
// let squat = 0;
// let squatProgress = [];
// function squatTracker() {
//     let squat = prompt("How many squats did you do?");
//     squatProgress.push(squat);
//     console.log(squatProgress);
// }