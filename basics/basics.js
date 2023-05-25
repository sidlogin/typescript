let userName = "Sid";
let isLoggedIn = true;

isLoggedIn += " Gupta";

console.log(isLoggedIn);

/**
 * 
 * Output: true Gupta
 * 
 * This is a javascript bug as it allows to concatinate two different Types String with Boolean
 */