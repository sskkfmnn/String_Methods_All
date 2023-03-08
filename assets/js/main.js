console.log("it works")


// Lev1_1_length

// let firstName = "name";
// console.log(firstName.length);

// let lastName = "nachname";
// console.log(lastName.length);

// let fullName = "name + nachname";
// console.log(fullName.length);



// Lev1_2_indexOf

// const txt = "How inappropriate to call this planet Earth, when clearly it is Ocean."
// console.log(txt.indexOf("h"));
// console.log(txt.indexOf("Earth"));
// console.log(txt.indexOf("Moon"));



// Lev1_4_slice

// const text = "Susi is going to codingschool";

// console.log(text.slice(0,4));
// document.write(text.slice(0,4)+"<br>");

// console.log(text.slice(5,7));
// document.write(text.slice(5,7)+"<br>");

// console.log(text.slice(5,16)+ " " + (text.slice(23,29)));
// document.write(text.slice(5,16)+ " "+(text.slice(23,29))+ "<br>")

// console.log(text.slice(23,29));
// document.write(text.slice(23,29)+"<br>");

// console.log(text.slice(0,7)+ " " +(text.slice(23,29)));
// document.write(text.slice(0,7)+ " "+(text.slice(23,29)));



// Lev1_5_substring

// const text = "Susi is back from codingschool";

// console.log(text.substring(0,4));
// document.write(text.substring(0,4)+"<br>");

// console.log(text.substring(5,7));
// document.write(text.substring(5,7)+"<br>");

// console.log(text.substring(24,30));
// document.write(text.substring(24,30)+"<br>");

// console.log(text.substring(0,7) + " " + (text.substring(24,30)));
// document.write(text.substring(0,7) + " " + (text.substring(24,30)))



// Lev1_7_replace

// const text = "Sam is good at codingschool";

// console.log(text.replace("good", "bad"));
// document.write(text.replace("good", "bad") + "<br>");

// console.log(text.replace("Sam", "Susi"));
// document.write(text.replace("Sam", "Susi")+ "<br>");

// console.log(text.replace("codingschool", "tennis"));
// document.write(text.replace("codingschool", "tennis"));



// Lev1_8_toLowerCase_toUpperCase

// const text = "Sam is going to codingschool";

// console.log(text.toUpperCase("Sam is going to codingschool"));
// document.write(text.toUpperCase("Sam is going to codingschool") + "<br>");

// console.log(text.toLowerCase());
// document.write(text.toLowerCase() + "<br>");

// console.log(text.slice(0,4).toUpperCase().concat(text.slice(4,16)).concat(text.slice(16,28).toUpperCase()));
// document.write(text.slice(0,4).toUpperCase().concat(text.slice(4,16)).concat(text.slice(16,28).toUpperCase()) + "<br>");

// console.log(text.slice(0,4).toLowerCase().concat(text.slice(4,16).toUpperCase().concat(text.slice(16,28).toLowerCase())));
// document.write(text.slice(0,4).toLowerCase().concat(text.slice(4,16).toUpperCase().concat(text.slice(16,28).toLowerCase()))+"<br>");

// console.log(text.slice(0,1).toUpperCase().concat(text.slice(1,4).toLowerCase().concat(text.slice(4,5).toUpperCase().concat(text.slice(5,6).toLowerCase() + " ".concat(text.slice(7,8).toUpperCase().concat(text.slice(8,13).toLowerCase().concat(text.slice(13,14).toUpperCase().concat(text.slice(14,16).toLowerCase().concat(text.slice(16,17).toUpperCase().concat(text.slice(17,28).toLowerCase()))))))))));
// document.write(text.slice(0,1).toUpperCase().concat(text.slice(1,4).toLowerCase().concat(text.slice(4,5).toUpperCase().concat(text.slice(5,6).toLowerCase() + " ".concat(text.slice(7,8).toUpperCase().concat(text.slice(8,13).toLowerCase().concat(text.slice(13,14).toUpperCase().concat(text.slice(14,16).toLowerCase().concat(text.slice(16,17).toUpperCase().concat(text.slice(17,28).toLowerCase()))))))))));



// Lev1_9_concat

const text1 = "Sam is going to codingschool";
const text2 = "Susi";
const text3 = " and"

console.log(text1 + text3 + " to the movie theater");
document.write(text1 + text3 + "to the movie theater" + "<br>");

console.log(text1.replace("codingschool", "movie theater"));
document.write(text1.replace("codingschool", "movie theater") + "<br>");

console.log(text2 + text3 + " " + text1.slice(0,4) + "are ".concat(text1.slice(7,28)));
document.write(text2 + text3 + " " + text1.slice(0,4) + "are ".concat(text1.slice(7,28)) + "<br>");

