let x: [string, number]

x = ["hello", 39]

x = [10, 'Mark'] // error

x = ["bie", 39, 20] // error

x[2] = 'world' // error

const person: [string, number] = ["Mark", 39]
const [first, second] = person // 분해할당(Destructuring)
