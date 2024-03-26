//create an array
let top3 = [
    "The colosseum",
    "Trevi Fountain",
    "The Vatican City"
];

function showItinerary(place1, place2, place3) {
    console.log("Visit " + place1);
    console.log("Then visit " + place2)
    console.log("Finish with a visit to " + place3);
}

showItinerary(top3[0], tops[1], top[2])



//what if we have 7 places in the array? it became inconvinient
//create an array
let top7 = [
    "The colosseum",
    "Trevi Fountain",
    "The Vatican City",
    "The colosseum",
    "Trevi Fountain",
    "The Vatican City",
    "The Vatican City"
];
showItinerary(top7[0],top7[1], top7[2],top7[3],top7[4],top7[5],top7[6])
//instead we can use spread operator ...
showItinerary(...top7);