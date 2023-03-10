function checkIsPalidrom(text) {
    let lowerText = text.toLowerCase();
    let noSpaceText = lowerText.split(" ").join("");

    let noSpaceTextLetters = noSpaceText.split("");
    let left = noSpaceTextLetters.join("");
    let right = noSpaceTextLetters.reverse().join("");
    console.log(left, right);
    if (left === right) {
        console.log(text + " - jest palidromem.");
    }
    else {
        console.log(text + " - nie jest palidromem.");
    }
}

checkIsPalidrom("A to kawa kota");
checkIsPalidrom("Ala ma kota");
