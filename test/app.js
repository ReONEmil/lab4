let userInput = prompt("Enter a number between 1 and 7:");

let num = parseInt(userInput);

let daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

if (num >= 1 && num <= 7) {
  let day = daysOfWeek[num - 1];
  
  alert("The day of the week is " + day);
} else {
  alert("Invalid input. Please enter a number between 1 and 7.");
}
