// YOUR CODE HERE

let theBaker = (bake) =>{
  let index;
  signatureBakes.forEach((elem) =>{
    if(elem.includes(bake)){
      index = signatureBakes.indexOf(elem);
    }
  });
  return bakers[index];
};

let nameThatBake = (week, baker) => {
  let index_2 = week - 1;
  let index = bakers.indexOf(baker);
  if (doTheyExist(baker).includes('Yes')){
    return signatureBakes[index][index_2];
  } else {
    return doTheyExist(baker) + ` therefore ${baker} did not bake anything!`;
    }
};

let weekBakes = (week) => {
  let output = []
  bakers.forEach((baker) => {
    output.push(baker + " a " + signatureBakes[week][bakers.indexOf(baker)])
  })

  return output;
};

let bakesWith = (word) => {

  let list = []
  signatureBakes.forEach((week) => {
    week.forEach((bake) =>{
      if(bake.includes(word) === true){
         list.push(bake);
      };
    })
  })
  let output = []

  output.push(`There are ${list.length} bakes with the word ${word} in the title`)

  let index = 1
  list.forEach((item)=>{
    output.push(`${index}. ${theBaker(item)} baked ${item}.`)
    index += 1
  })
  return output;
};

let doTheyExist = (name) => {
  if (bakers.includes(name) === true){
    return `Yes ${name} is a contestant`;
  } else {
    return `No ${name} is not a contestant`;
  };
}
//
// let addABaker = () => {
//
// }
//
// let printBakeSummary = () => {
//
// }

let bakers = [
  "Chetna",
  "Diana",
  "Iain",
  "Kate",
  "Luis",
  "Martha",
  "Nancy",
  "Norman",
  "Richard"
];

let signatureBakes = [
  ["Cardamom, Pistachio and Coffee Swiss Roll", "Fenugreek and Carom Crackers", "Onion and Pine Nut Rolls	"],
  ["Mum's Sunday Tea Lemon Curd Swiss Roll", "Parmesan Triangles", "Rustic Picnic Rolls"],
  ["Raspberry and Lemon Swiss Roll", "Za'atar and Fig Biscuits", "Cranberry and Walnut Rye Bread Rolls"],
  ["Apricot and Basil Swiss Roll", "Parmesan and Apple Biscuits", "Orange and Cardamom Rye Bread Knot"],
  ["Red Velvet and White Chocolate Swiss Roll", "Black Olive and Rosemary Biscuits", "Opposites Attract Rolls"],
  ["Spanish Swiss Roll", "Caramelised Onion and Goat's Cheese Sandwich Biscuits", "Date and Walnut Rye Rolls"],
  ["Tiramisu Swiss Roll", "	Fennel and Rye Thins", "Cider and Walnut Crusty Rolls"],
  ["Coffee and Hazelnut Swiss Roll", "Farthing Biscuits", "Rye Bread Rolls"],
  ["Pistachio and Strawberry Swiss Roll", "Rosemary Seeded Crackers", "Rye and Cranberry Rolls"]
];

// 1. The winner of week 2 baked Rosemary Seeded Crackers. Who was the winner? Create a function called `theBaker` that takes the name of a bake as an argument and returns the name of the person who baked it.

console.log(theBaker("Rosemary Seeded Crackers"));
console.log(theBaker("Opposites Attract Rolls"));


//2. What did Nancy bake in week 1 What about Richard in week 3? Create a function called `nameThatBake` that takes 2 arguments, the first argument being the number of the week of the bake, and the second argument being the name of the baker.
console.log(nameThatBake(1, "Nancy"));
console.log(nameThatBake(3, "Richard"));


// 3. What did everyone bake in week 1? What about week 3? Please give me each name and what they baked in a sentence like so:
// Bobby baked a Persimmon Swiss Roll.

// Create a function called `weekBakes` that takes 1 argument, the week number of the contest.
console.log(weekBakes(1));
console.log(weekBakes(3));


// 4. How many bakes include the word Lemon in the title. What are their names and who baked them? What about bakes with Rosemary in the title? Remember it's possible it could be lower cased in the title.  Create a function called `bakesWith` that takes 1 argument, the word you want to check for in the titles of the bakes.

// Output should be formatted like so:
// There are 700 bakes with the word Lemon in the title.
// 1. Bobby baked the Lemon Tart with Hot Sauce
// 2. Madison baked the Lemon Toffee Pudding.
// etc etc etc

console.log(bakesWith("Lemon"));
console.log(bakesWith("Rosemary"));

// 5a. Is there a contestant named Martha? What about a contestant named Tony? Create a function called `doTheyExist` that tells me if they were in the contest or not. Format of the output should be:

// Yes Bobby was a contestant

// or

// No Bobby was not a contest

console.log(doTheyExist("Martha"));
console.log(doTheyExist("Tony"));

// 5b.  If Martha and Tony do exist what did they bake in week 3? For this question you'll want to update your nameThatBake function so that in the event that we give it a name that is not in the list of bakers your output should tell us that they are not in the program and that they baked nothing.
console.log(nameThatBake(3, "Martha"));
console.log(nameThatBake(2, "Tony"));
//
// //6. Add your name to the bakers array and add an array of 3 bakes to the signatureBakes array. You'll need to create a `addABaker` function which should take 2 arguments, a name and an array with 3 bakes.
//
// console.log(addABaker("Tony", ["Awesome Cake", "Snappy Biscuits", "Cheesy Bread"]));
//
//  // 7. Create a function called `printBakeSummary` that returns each baker with their bakes listed below. The function should take 2 arguments, the first the array of bakers, the second the nested array of bakes. The output should be formatted like so:
// // Bobby
// // Week 1: Lemon Swiss Roll with Hot Sauce
// // Week 2: Lemon Crackers
// // Week 3. Lemon Bread with Blue Cheese
// // Susan
// // Week 1: Hot Dog Swiss Roll
// // etc etc etc
//
//
// console.log(printBakeSummary(bakers, signatureBakes));
