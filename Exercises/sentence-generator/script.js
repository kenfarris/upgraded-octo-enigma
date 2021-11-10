console.log('it works')

let nouns = ["heart","rainbow","ocean"];
let verbs = ["look","make","continue"];
let adjectives = ["good","different","possible"];

let random = Math.floor(Math.random() * nouns.length)
let noun = nouns[Math.floor(Math.random() * nouns.length)]
let verb = verbs[Math.floor(Math.random() * nouns.length)]

console.log(noun)
console.log(verb)

let sentence = 'My ${noun} leaps ${adjectives} when I ${verb} a rainbow in the sky.'
console.log(sentence)