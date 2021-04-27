console.log("hello world");

let obj1={
	greeting:"good morning",
	names:["harry","rohan","sakil"],
	speak:function(){
		obj1.names.forEach(function(values,index){
		//	console.log(obj1.greeting+" "+"kookdo"+" "+values);
		console.log(`${index+1}. ${obj1.greeting+" "+"kookdo"+" "+values}`);
			
		});
}
	


}
obj1.speak();


console.log(obj1);
console.log(obj1.names[0]);
console.log(obj1.greeting);







