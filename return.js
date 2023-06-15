function syntax(b,c,e){
	a=b+c+e
	return a
}
console.log(syntax(10,20,10))






function getSum(num1, num2) {
 var total = num1 + num2;
 return total;
 console.log("it won't prints this because return works like break");
}

// Displaying returned value
var result1 = getSum(6, 20);
console.log(result1) 
var result2 = getSum(-5, 17);
console.log(result2) 
