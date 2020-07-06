"use strict";
var Color;
(function (Color) {
    Color["Red"] = "#E9806E";
    Color["Green"] = "#78BC61";
    Color["Black"] = "black";
    Color["Grey"] = "#7E7E7E";
    Color["White"] = "white";
})(Color || (Color = {}));
class Typing {
    constructor(_text) {
        this.text = [];
        this.input = "";
        this.activeChar = 0;
        this.textbox = document.getElementById("textbox");
        for (let i = 0; i < _text.length; i++) {
            this.text.push({ text: _text[i], color: Color.Grey, backgroud: Color.White });
        }
        this.testInput();
        this.write();
        window.addEventListener("keydown", this.handleKeydown.bind(this));
    }
    write() {
        this.textbox.innerHTML = "";
        this.text.forEach((colorString) => {
            if (colorString.text == "\n")
                this.textbox.innerHTML += `<span style="color: ${colorString.color}; background: ${colorString.backgroud}">↲\n</span>`;
            else if (colorString.text == "\t")
                this.textbox.innerHTML += `<span style="color: ${colorString.color}; background: ${colorString.backgroud}">⭲\t</span>`;
            else
                this.textbox.innerHTML += `<span style="color: ${colorString.color}; background: ${colorString.backgroud}">${colorString.text}</span>`;
        });
    }
    testInput() {
        let str = "";
        this.activeChar = this.input.length;
        for (let i = 0; i < this.text.length; i++) {
            if (this.text[i].text == this.input[i]) {
                this.text[i].color = Color.Black;
                this.text[i].backgroud = Color.White;
            }
            else if (this.text[i].text != this.input[i] && typeof this.input[i] != "undefined") {
                this.text[i].color = Color.White;
                this.text[i].backgroud = Color.Red;
            }
            else {
                this.text[i].color = Color.Grey;
                this.text[i].backgroud = Color.White;
            }
            this.text[this.activeChar].color = Color.White;
            this.text[this.activeChar].backgroud = Color.Green;
            str += this.text[i].text;
        }
        console.log(str);
        console.log(this.input);
        if (str == this.input)
            console.log("EQUAL");
    }
    handleKeydown(e) {
        if (e.key == "Tab") {
            e.preventDefault();
            this.input += '\t';
        }
        else if (e.key == "Enter") {
            e.preventDefault();
            this.input += '\n';
        }
        else if (e.key == "Backspace") {
            e.preventDefault();
            this.input = this.input.slice(0, -1);
        }
        else if (e.key.length > 1) {
            // Do nothing
        }
        else {
            this.input += e.key;
        }
        this.testInput();
        this.write();
    }
}
let game = new Typing("\tLaerte nasceu na cidade de Araras interior de São Paulo e cidade próxima das outras em que ocorreram os crimes, era o sétimo filho de uma família de nove irmãos, possuía um comportamento agressivo para com os irmãos, vizinhos e sobretudo com a própria mãe, esta por sua vez, na tentativa de puni-lo, o amarrava ao pé da mesa o que na verdade só provocava ainda mais sua ira.");
//# sourceMappingURL=index.js.map