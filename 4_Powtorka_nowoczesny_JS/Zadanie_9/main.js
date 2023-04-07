const cake = "🎂";

const age = new Date().getFullYear() - 1986;
console.log(age);

for (let i = 0; i < age; i++) {
    console.log(cake, i+1);
}
