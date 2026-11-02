let text = "JavaScript is Great";
let pattern = /\b[A-Z][a-z]*\b/g;
console.log(text.match(pattern));
// Output: [ 'Great' ]
// "JavaScript" is NOT matched: after "Java" the next char "S" is a word char,
// so \b fails; "is" is lowercase-start. Only "Great" qualifies.
