function DoIt() {
    let inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById("input");
    let inputString: string = inputElement.value;

    let selectionElement: HTMLSelectElement = <HTMLSelectElement>document.getElementById("select");
    let selection: string = selectionElement.value;

    let answerString: string = ToCase(selection, inputString)
    let outputElement: HTMLInputElement = <HTMLInputElement>document.getElementById("result")
    outputElement.innerHTML = answerString;
}

function ToCase(selection: string, input: string) {
    switch (selection) {
        case "upper":
            let upper: string = input.toUpperCase();
            return upper;
            break;
        case "lower":
            let lower: string = input.toLowerCase();
            return lower;
            break;
        case "default":
            return input;
            break;
    }

}

let theBUTTON: HTMLButtonElement = <HTMLInputElement>document.getElementById("button");
theBUTTON.addEventListener("click", DoIt)