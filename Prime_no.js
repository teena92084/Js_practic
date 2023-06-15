var l=require('readline-sync')
let n=l.question('enter the prime number')
i=2
c=0
if (n%i==0){
	c=c+1
}
if (c==0){
	console.log("prime")
}
else{
	console.log("not prime")
}
	

