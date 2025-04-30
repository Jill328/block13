console.log("JavaScript is linked!");

//Pseudocode


// 1. Googled how to convert a string into an array- decided on string.SplitMethod basically because geeks for geeks
// 2. Prompt the  user for input, in this case froyo flavors and store the result  in the userInput string 

const userInput = prompt("vanilla, vanilla, vanilla, strawberry, coffee, coffee");

// 3. Covert the string (flavors/values) into an array by using the split        method, using commas as seperators. As I was looking around for a Javascript method to convert uppercase to lowercase, I came across a nifty meithod to try, .trim(). As an abuser of the spacebar, I add lots and lots of whitespace which became ridicously apparent as I was getting syntax errors left and right in my html. As a developer, I would want every safe guard known to the cyper world to keep someone like me from added whitespaces where they have no business being. 
//    - Trim whitespace from each flavor
//    - Convert each flavor to lowercase
const flavorsArray = userInput.split(',').map(flavor => flavor.trim().toLowerCase());

// 4. Write a function to loop over each flavor in the array and keep track of how many times each flavor appears and counts the number of each flavor:
//    a. use {} to create a placeholder to store flavor counts
//    b. "for" each flavor in the array:
//       i.   "if" the flavor already exists in the object, increase  its count by 
//       ii.  "else", add the flavor to the object with a count of 1
//    c. RETURN the object with flavor counts

function countFlavors(flavors) {
    const flavorCounts = {};
  
    for (const flavor of flavors) {
      if (flavorCounts[flavor]) {
        flavorCounts[flavor]++;
      } else {
        flavorCounts[flavor] = 1;
      }
    }
  
    return flavorCounts;
  }

// 5. CALL the flavor-counting function and STORE the result
const flavorSummary = countFlavors(flavorsArray);

// 6. FOR EACH entry in the result object:
//    - LOG the flavor and the number of times it appears
console.log("Froyo Order Summary:");
for (const [flavor, count] of Object.entries(flavorSummary)) {
  console.log(`${count} ${flavor}`);
}
