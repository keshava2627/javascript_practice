/* /* javascript first session practice */

/* var a = 10.55;
var b = 20 + b;
var c = "name";
var d = "name";
console.log(typeof b, b);
console.log(typeof a, a);
console.log(typeof c, c);
console.log(typeof d, d);
a > b ? console.log("a is greater") : console.log("b is greater");
var ProfessionOfUser = "poilet";
var professionOfUser = "driver";
var profession_of_user = "car driver";
console.log(ProfessionOfUser);
console.log(professionOfUser);
console.log(profession_of_user);
var a = 10;
var b = a;
console.log(b);
var A;
console.log(A);
var B = null;
console.log(null);
var C = 10;
var D = "10";
console.log(C);
console.log(D);
var E = 20;
var F = 30;
E > F ? console.log(E) : console.log(F);
var k = true;
console.log(typeof k);
 */

/* javascript 2nd session practice */
// var arr = [1, 2, 3, 4];
// console.log(arr);
// console.log(arr[5]); /* undefined will be printed */
// console.log(arr[1]); /* 2 will be printed */
// console.log(arr.length); /* which returns length  of the array which is 4 */

// var arr1 = [
//   1,
//   "javascript",
//   "python",
//   false,
//   true,
//   3,
//   5,
// ]; /* if we run this we are not going to get an error as in javascript it can hold multiple data types. */
// console.log(arr1);
// console.log(arr1.length);
// console.log(arr1[2]);
// /* here we are going to see  some type conversions */
// var a = 10;
// console.log(
//   a.toString()
// ); /* here the toString method going to convert int into string */
// var a = "10";
// console.log(
//   parseInt(a)
// ); /* here the parseInt function going to covert string into an integer */
// var A = "str1";
// console.log(
//   parseInt(A)
// ); /* here the output will be Nan means Not a Number as it is a not a number inside the double quotes */
// var a = 10.66;
// console.log(parseInt(a));
// /* here the output will be 10 */
// /* similarly we have parseFloat method */
// var b = 10.66;
// console.log(parseFloat(b)); /* here the output will be 10.66 */
// /* similarly we have toFixed method to round of the digits */
// var c = 65.66458;
// console.log(c.toFixed()); /* here if we dont give any fixed places
/* in parenthesis then it checks
the digit after decimal point
if the number after decimal point is greater than 5
then +1 will be added to the number before decimal point and returns the result  */
// var d = 65.456;
// console.log(d.toFixed()); /* here only 65 will be printed
/* why because the digit after decimal point is less than 5 so only 65 will printed */
// var e = 65.6667;
// console.log(e.toFixed(2)); /*
/*  intially we have 65.6645
 65.665
 65.67
 so 65.67 will be printed
 here we have passed 2 right
  so we are expecting 2 decimal places and whenver we passed any parameter inside parenthesis
  then it will check from right to left if the digit is >5 then +1 will be added  and
  returns the result likewise it goes on upto 2 decimal places and stop and return the number  */
// /* now lets check with other example */
// var f = 65.98667;
// console.log(f.toFixed(2)); /* here
/*  intially we have 65.98667
  65.9867
  65.987
  65.99 so 65.99 will be printed as output  */
// /* lets move on to String methods
/*   we have the following string methods
  1.length : which returns the length of the string
  2.charAt() : which is going to return index of specific character in a string
  3.indexOf() : which is going to return the index of a charcter
  4.lastindexOf() : which is going return last apperence of index of a character in a string
  5.concat() : which is going to add to strings
  6.trim() : which is going to remove white spaces before and after the string
  7.slice() : which is going find substrings
  8.split() : which is going to split the characters or numbers separated by a comma and store them in an array. */
// var T = "i love javascript";
// console.log(T);
// console.log(
//   T.length
// ); /* here white spaces will be considerd as one unit so it returns 17 */
// console.log(
//   T.charAt(1)
// ); /* which is going to return white space in the console as at index 1 white space is stored. */
// console.log(T.indexOf("l")); /* 2 will be returned */
// console.log(
//   T.lastIndexOf("a", 1)
// ); /* here it will search for last index of a after 1 character if it finds then returns that index otherwise returns -1 */
// console.log(T.concat("Truly")); /* here it will return i love javascriptTruly */
// console.log(
//   T.concat(" ", "Truly")
// ); /* here it will return i love javascript Truly */
// console.log(T.trim()); /* it removes white spaces before and after the string */
// console.log(
//   T.split(" ")
// ); /* it will return each word whenver it encounters a string of white space and store them in an array */
// console.log(
//   T.split(",")
// ); /* it will return all the string into one unit into the array as it doent find any comma separated */
// /* var X = "javaScript"loves me"";  it is not valid declaration of string to rectify this*/
// var X = "javascript'loves me'";
// console.log(X);

/* 
today we are going to see another type of string functions namely
1.slice() : which is going to return a piece of string 
it allows parameters namely satarting index and the ending index 
where it returns the string by ommting ending index
lets have a look by an example.

2.substr() : which is going to return a part of string named as a substring 
by specifying two index parameters namely starting and ending index that you want.
here we can also use negative indexing from right to left it follows -1,-2,-3,....


*/
// var T = "i love javascript";
/* 0      1   2     3    4   5   6   7  8  9  10  11   12  14       15  16 */
/* -17  -16  -15  -14  -13 -12 -11 -10 -9 -8  -7  -6   -5  -4  -3  -2  -1 */
// console.log(T.length);
/* which returns 17 now i want only love should be printed int the console then i have to give starting index and the ending index of love.
 */
// console.log(
//   T.slice(2, 5) /* which returns lov  */
// ); /* which returns only lov why because the letter l in love
/* starting at index 2 which is starting index and e at the ending index 
which is 5 but as we now the slice method will ommit last index so instead of 5 
we have to give 6 then it returns love which is expected.  */
// console.log(T.slice(2, 6)); /* which returns love */
// console.log(
//   T.substr(3, 14)
// ); /* here the lastindex or ending index specifies that
/* how many characters that you want after starting index  */
// console.log(
//   T.substr(-6, 4)
// ); /* it will return by using negative indexing then how many character that index we want . */

/* comming to difference between null and undefined
null: here we explicitly assign a null value as follows
var a= null;
undefined: here we just declare a varaible but not assigned to a value. 
as follows 
var a; */

// var a = null;
// console.log(null); /* which prints as null as we assigned null to a varaible. */
// var a;
// console.log(
//   a
// ); /* which prints undefined as we just declared a varaible but not assigned any value */

/* now comming to differnce between == and === in javascript 
== : whenevr we come accros this it just that values or equal or not  wether it is in string format also.
=== : whenever we come across this === will check both value and the datatype then only it returns true.oterwise it returns false. */
// var a = 10;
// var b = "10";
// a == b ? console.log("true") : console.log("false");
/* which returns true but according to our opinion it  will be false
but whenevr we use == it only checks the value should be equal or not */
// var a = 10;
// var b = "10";
// a === b
//   ? console.log("true")
//   : console.log(
//       "false"
//     );
/* which returns false as it checks both value and the data type. */

/* now lets move on to javascript alerts and dailogues and promts
    window.alert() : which is going to show an alert
    window.confirm() : which is going to ask for confirmation
    window.prompt() : which is going to ask for user input. */
// window.alert("hello welcome to javascript");
// window.confirm("are you 18 years old");
// window.prompt("enter a number");
/* always remember that whatever we enter in window.prompt is actally a string we can also check it by using typeof . */
// var enterdnumber = window.prompt("enter a number");
// console.log(typeof enterdnumber);
/* which is going to return a string. now we can also convert it by using parseInt() method. */
// var enterdnumber = window.prompt("enter a number");
// var k = parseInt(enterdnumber);
/* which converts it into a number. */
// console.log(typeof k, k);
/* which returns as number 10 */

/* comming to conditional statements we have if if else and else if and switch case also lets see one by one.  */

// var num1 = 10;
// var num2 = 30;
// if (num1 > num2) {
//   console.log("num1 is greatest");
// }
/* here it doesnt going to execute the block of code as it checks the condition if the  condition was true then only it executes the rest of code.
here only else come into secens. */

// var num1 = 10;
// var num2 = 30;
// if (num1 > num2) {
//   console.log("num1 is greatest");
// } else {
//   console.log("num2 is greatest");
// }
/* which is going to print num2 is gratest as the condition in if was false */

// var num1 = 10;
// var num2 = 5;
// if (num1 > num2) {
//   console.log("num1 is greatest");
// } else {
//   console.log("num2 is greatest");
// }
/* here in this case condition was true as 10>5 then it prints num1 is greatest. */

// var num1 = 10;
// var num2 = 5;
// var num3 = 2;
// if (num1 > num2 && num1 > num3) {
//   console.log("num1 is greatest");
// } else if (num2 > num1 && num2 > num3) {
//   console.log("num2 is greatest");
// }
/* here if condtion is true as it satisfies both the condition are true as 10>5 and 10>2.
but remember here && is act as logical operator ad it returns true 
if the conditions are ture then ture statement i.e if block code will be executed. */

// var num1 = 10;
// var num2 = 20;
// var num3 = 30;
// if (num1 > num2 && num1 > num3) {
//   console.log("num1 is greatest");
// } else if (num2 > num1 && num2 > num3) {
//   console.log("num2 is greatest");
// } else {
//   console.log("num3 is greatest");
// }

/* here else part will be executed and num3 is greatest is printed in the console.
as both if and else if conditions false. so that else part will be executed. */

/* commin to switch case. */
/* switch (key) {
  case value1:
    console.log(code)
  case value2:
    console.log(code)
  case value3:
    console.log(code)    

  default:
    break;
} 
remember if we doesnt any break statement in case statement then it will try to execute the rest of code also*/

/* lets see by an example */
// var n = window.prompt("enter your choice for language");
// switch (parseInt(n)) {
//   case 1:
//     console.log("thank you for choosig telugu");
//   case 2:
//     console.log("thank you for choosing hindi");
// }

/* if we run the above code by entering 1 it matches with case 1 right so we expect only case 1 will be executed.
but surprisingly both cases will be executed. in this secne break comming into existence.
by using break we can stop the execution if it matches with the case. */

/* lets see by the same example. */

// var n = window.prompt("enter your choice for language");
// switch (parseInt(n)) {
//   case 1:
//     console.log("thank you for choosig telugu");
//     break;
//   case 2:
//     console.log("thank you for choosing hindi");
//     break;
//   case 3:
//     console.log("thank you for choosing english");
//     break;
// }
/* it will work perfectly fine  but what happens when none of the case is matching
 like we written code for only 3 cases but what happens if we enter 4 5 6 
nothing will be happen right in this secne only the default case come into xistence.*/
/* lets do it by using the same example. */

// var n = window.prompt("enter your choice for language");
// switch (parseInt(n)) {
//   case 1:
//     console.log("thank you for choosig telugu");
//     break;
//   case 2:
//     console.log("thank you for choosing hindi");
//     break;
//   case 3:
//     console.log("thank you for choosing english");
//     break;
//   default:
//     console.log("please choose the right option");
//     break;
// }
/* now it will work perfectly fine when we enter 4,5,6 whatver it is 
if it doesnt matter what we enter 
if it doesnt matches the any of the above cases then it will execute default code. */
