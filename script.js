function criptografar() {
    let inputText = document.getElementById("input-text").value;
    let outputText = inputText.replace(/e/g, "enter")
                              .replace(/i/g, "imes")
                              .replace(/a/g, "ai")
                              .replace(/o/g, "ober")
                              .replace(/u/g, "ufat");
    document.getElementById("output-text").value = outputText;
}

function descriptografar() {
    let inputText = document.getElementById("input-text").value;
    let outputText = inputText.replace(/enter/g, "e")
                              .replace(/imes/g, "i")
                              .replace(/ai/g, "a")
                              .replace(/ober/g, "o")
                              .replace(/ufat/g, "u");
    document.getElementById("output-text").value = outputText;
}
