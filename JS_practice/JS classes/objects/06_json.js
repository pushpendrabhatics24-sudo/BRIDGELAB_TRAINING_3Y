// 6. JSON (note: original notes had a typo "student Obj")
const jsonString = '{"name":"John","age":21,"course":"B.Tech"}';
const studentObj = JSON.parse(jsonString);
console.log(studentObj.name);                // John
const backToJSON = JSON.stringify(studentObj);
console.log(backToJSON);                     // {"name":"John","age":21,"course":"B.Tech"}
