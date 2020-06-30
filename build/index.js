"use strict";
let textToBeTyped = "int main(){\n  int teste;\n}";
let chars = [...textToBeTyped];
let typedText = "";
let label = document.getElementById("label");
let input = document.getElementById("input");
let color = "black";
chars.forEach((char, index) => {
    label.innerHTML += `<span style="color: ${color};">${char}</span>`;
});
console.log("TextToBeTyped: ", textToBeTyped);
input.addEventListener("input", (e) => {
    typedText = input.value;
    console.log("TypedText: ", typedText);
});
//# sourceMappingURL=index.js.map