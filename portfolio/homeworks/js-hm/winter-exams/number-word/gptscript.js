$(document).ready(function () {
    let form = $("#form");
    let numLimit = 10000000000;
    let numText = "";
    let ones = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
    };
    let tens = {
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
    };
    let prefixes = {
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
    };
    let suffixes = {
        1: "",
        2: "thousand",
        3: "million",
        4: "billion",
        5: "trillion",
    };

    form.submit(function (e) {
        e.preventDefault();

        numText = "";
        let num = parseInt($("#numInput").val());
        if (isNaN(num)) {
            $("#changedNum").html("Please enter a valid number.");
            return;
        }
        let finalNumText = convertNum(num);
        $("#changedNum").html("Converted Number: " + finalNumText);
    });

    function convertNum(num) {
        let absNum = Math.abs(num);

        if (absNum >= numLimit) {
            alert(`Number is too big. It must be below or equal to ${numLimit} (10 billion).`);
            return "ERROR";
        }

        if (num < 0) {
            numText += "negative ";
        }

        if (absNum === 0) {
            return "zero";
        }

        let numArray = splitNum(absNum);
        let count = numArray.length;

        for (let i = 0; i < numArray.length; i++) {
            let currentNum = parseInt(numArray[i]);
            if (currentNum !== 0) {
                numText += `${threeDigitConvert(currentNum)} ${suffixes[count]} `;
            }
            count--;
        }
        return numText.trim();
    }

    function threeDigitConvert(num) {
        let currentNumText = "";

        if (num >= 100) {
            currentNumText += `${ones[Math.floor(num / 100)]} hundred `;
            num %= 100;
        }

        if (num > 0) {
            currentNumText += twoDigitLessConvert(num);
        }

        return currentNumText.trim();
    }

    function twoDigitLessConvert(num) {
        if (num < 10) return ones[num];
        if (num in tens) return tens[num];
        return `${prefixes[Math.floor(num / 10)]}-${ones[num % 10]}`;
    }

    function splitNum(num) {
        let numArray = [];
        let numString = num.toString();
        while (numString.length > 0) {
            numArray.unshift(numString.slice(-3));
            numString = numString.slice(0, -3);
        }
        return numArray;
    }
});
