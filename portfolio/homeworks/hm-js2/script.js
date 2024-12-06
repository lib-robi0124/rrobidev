// homework with zodiac
let input = prompt("Enter year of your birthday");
let parsedyear = parseInt(input);
// cheak number validity
if (parsedyear > 0 && parsedyear < 2025) {
    let zodiac = (parsedyear - 4) % 12
    if (zodiac > 10) {
        alert("Your Chinese Zodiac is PIG");
    } else if (zodiac > 9) {
        alert("Your Chinese Zodiac is DOG");
    } else if (zodiac > 8) {
        alert("Your Chinese Zodiac is ROSTER");
    } else if (zodiac > 7) {
        alert("Your Chinese Zodiac is MONKEY");
    } else if (zodiac > 6) {
        alert("Your Chinese Zodiac is GOAT");
    } else if (zodiac > 5) {
        alert("Your Chinese Zodiac is HORSE");
    } else if (zodiac > 4) {
        alert("Your Chinese Zodiac is SNAKE");
    } else if (zodiac > 3) {
        alert("Your Chinese Zodiac is DRAGON");
    } else if (zodiac > 2) {
        alert("Your Chinese Zodiac is RABBIT");
    } else if (zodiac > 1) {
        alert("Your Chinese Zodiac is TIGER");
    } else if (zodiac > 0) {
        alert("Your Chinese Zodiac is OX");
    } else (alert("Your Chinese Zodiac is RAT") );
} else (alert("You enter wrong number \, please enter YEAR as xxxx"));