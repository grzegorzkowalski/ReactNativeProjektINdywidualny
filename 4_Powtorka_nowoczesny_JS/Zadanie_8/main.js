const employee = {
	name: "Krzysztof",
	surname: "Nowak",
	age: 54,
	occupation: "Policjant"
}

const {name, surname, age, occupation, cat} = employee;
console.log({name, surname, age, occupation, cat});

const text = `Nazywam się ${name} ${surname}, mam ${age} lat i mój zawód to: ${occupation}.`;

console.log(text);
