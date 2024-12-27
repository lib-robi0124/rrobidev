$(document).ready(function () {
    let btnButton = $('#button');    
    btnButton.click(function () {
        let getName = $('input#Name').val().trim(); // Ensure name is trimmed of excess spaces
        if (!$('h1.greeting-title').length) {
            $('body').append('<h1 class="greeting-title"></h1>');
        }
        $('h1.greeting-title').text('Hello there ' + getName); // Add a space between words
    });
});