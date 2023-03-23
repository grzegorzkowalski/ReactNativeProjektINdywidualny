const biggestCities = ["Tokio", "Delhi", "Szanghaj", "São Paulo", "Meksyk"];

biggestCities.sort((a,b) => a.length-b.length);
console.log(biggestCities[biggestCities.length-1]);
console.log(biggestCities[biggestCities.length-1].length);
