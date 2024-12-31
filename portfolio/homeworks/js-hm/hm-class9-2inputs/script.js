$(document).ready(function () {
    let generateButton = $("#generateButton");
    let textInput = $("#textInput");
    let colorInput = $("#colorInput");
    let outputContainer = $("#headerContainer");

    generateButton.click(function () {
        let textValue = textInput.val();
        let colorValue = colorInput.val();

        // Clear the container
        outputContainer.empty();

        if (textValue.trim() === "") {
            // Create a new <h3> element with a message
            let newHeader3 = $("<h3>").text("Please enter some text.");
            outputContainer.append(newHeader3);
            return;
        }

        // Create a new <h1> element with user input
        let newHeader = $("<h1>").text(textValue).css("color", colorValue);
        outputContainer.append(newHeader);
    });
});