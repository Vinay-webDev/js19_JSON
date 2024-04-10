// JSON
// JSON - Javascript Object Notation
/* JSON is used to send and receive data.
   JSON is a text format that is completely independent of any language.
   which means JSON is not only limited to javascript. it can be used in 
   many languages such as python,c#  and many more 
   OR JSON is used to send and receive data in many languages not only in
   javascript */










// JSON 
// JSON - javascript object notation
/* JSON is used to send and receive data.
   JSON is a text format that is completely independent of any language.
   meaning JSON is used to send and receive data in many languages such as C#,python....and many more
   ........... not only in javascript */

// so let's have an object
/*
const myObject = {
   name: "dude",
   hobbies: ["eat","code","play","sleep"],
   hello: function () {
      console.log("Hello Bro!");
   }
}
// let's kinda refresh the object concept
console.log(myObject);
console.log(myObject.name);
myObject.hello();
console.log(typeof myObject);
// so let's send this object in JSON *****
const sendJSON = JSON.stringify(myObject);
console.log(sendJSON);
console.log(typeof sendJSON);
// the JSON do not send and receive methods****
console.log(sendJSON.name);
/* now we can't access the properties of myObject
because it's in JSON format (string Or txt) so 
myObject properties are just string in JSON */
//===========================================
// let's receive data from JSON
/*
const receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON);
console.log(typeof receiveJSON); // now it's object (not string anymore!)
// now we can access the properties of myObject
console.log(receiveJSON.name);
console.log(receiveJSON.hobbies); */
/////////////////////////////////////////////////////////////////////////////////////
// one more time!
const jackBullwark = {
   name: "Jack Bullwark",
   abilities: ["shadow fortress","fractures","armoured moves"],
   faction: "legion",
   difficulty: "hard",
}

const sendJack = JSON.stringify(jackBullwark);
console.log(sendJack);
console.log(typeof sendJack);
console.log(sendJack.name);
console.log(sendJack.abilities);

const receiveJack = JSON.parse(sendJack);
console.log(receiveJack);
console.log(typeof receiveJack);
console.log(receiveJack.name);
console.log(receiveJack.abilities);
console.log(receiveJack.faction);
console.log(receiveJack.difficulty);






















