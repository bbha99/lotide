// FUNCTION IMPLEMENTATION
const assertEquals = function(actual, expected) {
  // console.log(actual, expected)
  let fail = String.fromCodePoint(0x1F621);
  let pass = String.fromCodePoint(0x1F525);
  if (actual === expected) {
    console.log(`${pass} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${fail} Assertion Failed: ${actual} !== ${expected}`);

  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  console.log("objects:", Object.keys(object1).length, Object.keys(object2).length)
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
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
// assertEqual(shirtObject, anotherShirtObject)
// Prints: 😡 Assertion Failed: [object Object] !== [object Object]

eqObjects(shirtObject , anotherShirtObject); // => true
//We need to use that return value in combination with assertEquals to test if the function is working correctly.
assertEquals(eqObjects(shirtObject , anotherShirtObject), true);

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false
assertEquals(eqObjects(shirtObject , longSleeveShirtObject), false);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true
assertEquals(eqObjects(multiColorShirtObject , anotherMultiColorShirtObject), true);

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject); // => false
assertEquals(eqObjects(multiColorShirtObject , longSleeveMultiColorShirtObject), false);