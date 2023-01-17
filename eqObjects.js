const assertEqual = require("./assertEqual");
const eqArrays = require("./eqArrays");

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const objectOneKeys = Object.keys(object1);
  if (objectOneKeys.length !== Object.keys(object2).length) {
    return false;
  }
  
  for (let obj1 of objectOneKeys) {
    if (Array.isArray(object1[obj1]) == true && Array.isArray(object2[obj1]) == true) {
      if (eqArrays(object1[obj1], object2[obj1]) !== true) {
        return false;
      }
    } else {
      if (object1[obj1] !== object2[obj1]) {
        return false;
      }
    }
  }
  return true;
};

module.exports = eqObjects;
// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject= { size: "medium", color: "red" };
// // assertEqual(shirtObject, anotherShirtObject)
// // Prints: 😡 Assertion Failed: [object Object] !== [object Object]

// eqObjects(shirtObject , anotherShirtObject); // => true
// //We need to use that return value in combination with assertEquals to test if the function is working correctly.
// assertEqual(eqObjects(shirtObject , anotherShirtObject), true);

// const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
// eqObjects(shirtObject , longSleeveShirtObject); // => false
// assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);

// const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
// const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
// eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true
// assertEqual(eqObjects(multiColorShirtObject , anotherMultiColorShirtObject), true);

// const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
// eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject); // => false
// assertEqual(eqObjects(multiColorShirtObject , longSleeveMultiColorShirtObject), false);