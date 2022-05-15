// create by object literal
const person1 = { name: "Mark", age: 39 }
// person1 is not "object" type.
// person1 is "{name: string, age: number}" type

// create by Object.create
const person2 = Object.create({ name: "Mark", age: 39})


declare function create(o:object | null): void
create({ prop: 0 })
create(null)
create(42) // error
create("string") // error
create(false) // error
create(undefined) // error
Object.create(0) // error