var readlineSync = require('readline-sync');
const chalk = require('chalk');
var userName = readlineSync.question(chalk.red('Enter your Name:-'));
var forWelcome = "Welcome"+" "+userName;
console.log(chalk.red(forWelcome));
console.log(chalk.blue("There is a Game related to general knowldge!!"))

score=0;
function play(question,answer){
  var userAnswer = readlineSync.question(question);

  if (userAnswer ===answer){
    console.log(chalk.blue("you are right!"));
    score=score+1;
  }else{
    console.log(chalk.blue("you are wrong!"))
  }
 
  console.log(chalk.blue("your score is :",score));
  console.log("-----------")
}
play(chalk.blue("who is the first PM of india? "),"Jawaharlal Nehru")
play(chalk.blue("Who is known as Father of Indian Constitution?"),"BR Ambedkar")
play(chalk.blue("Who invented Computer?"),"Charles Babbage")
play(chalk.blue("what is the national bird of india? "),"Peacock")
play(chalk.blue("Who was the first woman Prime Minister of India?"),"Indira Gandhi")
console.log(chalk.red("your final score is!",score))
if (score===2){
  console.log(chalk.blue("congratulation! you are the winner"))
  }else{
    console.log(chalk.red("you are the looser !"))
}
