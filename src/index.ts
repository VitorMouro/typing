let textToBeTyped: string = "int main(){\n  int teste;\n}";
let chars = [...textToBeTyped]
let typedText: string = "";

let label: HTMLLabelElement = document.getElementById("label") as HTMLLabelElement;
let input: HTMLInputElement = document.getElementById("input") as HTMLInputElement;

let color: string = "black";
chars.forEach((char, index) => {
    label.innerHTML += `<span style="color: ${color};">${char}</span>`;
});
console.log("TextToBeTyped: ", textToBeTyped);
input.addEventListener("input", (e) => {
    typedText = input.value;
    console.log("TypedText: ", typedText);
})
