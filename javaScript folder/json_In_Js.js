console.log("hello world");

let jsonObj={
name:"harry",
channel:"code with harry",
friend:"rohan",
food:"bhindi"
}
console.log(jsonObj);

//obj to str
let strJsonObj=JSON.stringify(jsonObj);
console.log(strJsonObj);

//str replace
strJsonObj=strJsonObj.replace("harry","lorry");
console.log(strJsonObj);

//str to obj
let newJsonObj=JSON.parse(strJsonObj);
console.log(newJsonObj);