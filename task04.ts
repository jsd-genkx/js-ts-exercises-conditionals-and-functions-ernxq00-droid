// TODO-04: Write if/else if to check and print:
// Divisible by both 3 and 5 → "FizzBuzz"
// Divisible by only 3 → "Fizz"
// Divisible by only 5 → "Buzz"
// Otherwise → "Not divisible by 3 or 5"

// TODO BONUS: Rewrite with if

const num = 17;


// if((num%3 ===0) && (num%5 ===0)){
//     console.log("FizzBuzz");

// } else if (num%3 ===0) {
//     console.log("Fizz");
// } else if (num%5 ===0) {
//     console.log("Buzz");
// } else {console.log("Not divisible by 3 or 5");}


const FizzBuzz = (number: number) => {
if(number%3 ===0 && number%5 === 0){
    console.log("FizzBuzz");
} else if (number%3 === 0) {
    console.log("Fizz");
} else if (number%5 === 0) {
    console.log("Buzz");
} else {
    console.log("Not divisible by 3 or 5");}

};

FizzBuzz(5)

const fizzbuzz2 = FizzBuzz 

fizzbuzz2(15)

FizzBuzz(15);
FizzBuzz(9);
FizzBuzz(10);
FizzBuzz(7);
