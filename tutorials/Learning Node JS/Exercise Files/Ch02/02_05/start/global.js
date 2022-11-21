process.stdout.write("hello \n \n");

const questions = [
  "what's your name",
  "what whould u reather be doing",
  "what is your preferred programming language?"
]
const answers = []

function ask(i) {
  process.stdout.write(`\n\n\n ${questions}[i]`);
  process.stdout.write(` > `)
}

ask(answers.length)