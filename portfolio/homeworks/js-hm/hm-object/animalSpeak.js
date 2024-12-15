function Pet(name, animal, color){
    this.name = name;
    this.animal = animal;
    this.color = color;
    this.speak = function(animal) {
        if(animal === "dog"){
            return "av av av";            
        } else if(animal === "cat"){
            return "mjau maju";
        }
    }
}
let ada = new Pet("Ada", "dog", "white");
let roki = new Pet("Roki", "cat", "yellow-grey");
console.log(`${ada.name} is a good ${ada.animal}, she is ${ada.color} and very loud, speaking: ${ada.speak("dog")}`);
console.log(`${roki.name} is a good ${roki.animal}, he is ${roki.color} and very loud, speaking: ${roki.speak("cat")}`);