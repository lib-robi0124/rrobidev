let money = 1000;
let usermoney = parseInt(prompt("Please enter amount to withdraw:"));

if ((money > usermoney) || (money == usermoney)){
    function atm(usermoney){
        result = money - usermoney;
        return result;
    }
    alert(`You have still ${atm(usermoney)} den on your account`);
} else {
    alert("Not enougth money on your account");
}
