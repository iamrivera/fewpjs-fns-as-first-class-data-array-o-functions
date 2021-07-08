function wakeDog(dogName, dogBreed) {
    let dogWake = (`Wake ${dogName} the ${dogBreed}`);
    console.log(dogWake);
    return dogWake;
};

function leashDog(dogName, dogBreed) {
    let dogLeash = (`Leash ${dogName} the ${dogBreed}`);
    console.log(dogLeash);
    return dogLeash;
};

function walkToPark(dogName, dogBreed) {
    let dogWalk = (`Walk to the park with ${dogName} the ${dogBreed}`);
    console.log(dogWalk);
    return dogWalk;
};

function throwFrisbee(dogName, dogBreed) {
    let frisbeeThrow = (`Throw the frisbee for ${dogName} the ${dogBreed}`);
    console.log(frisbeeThrow);
    return frisbeeThrow;
};

function walkHome(dogName, dogBreed) {
    let homeWalk = (`Walk home with ${dogName} the ${dogBreed}`);
    console.log(homeWalk);
    return homeWalk;
};

function unleashDog(dogName, dogBreed) {
    let dogUnleash = (`Unleash ${dogName} the ${dogBreed}`);
    console.log(dogUnleash);
    return dogUnleash;
};

let routine = [
    wakeDog, 
    leashDog, 
    walkToPark, 
    throwFrisbee, 
    walkHome, 
    unleashDog
];

function exerciseDog(dogName, dogBreed) {
    let exerciseArray = [];
    for (let i = 0; i < routine.length; i++) {
        let x = routine[i](dogName, dogBreed)
        exerciseArray.push(x);
    } 
    return exerciseArray;
};