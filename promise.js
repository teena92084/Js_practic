let p= new Promise((resolve,reject)=>{
	console.log("promise is panding===>")
	setTimeout(()=>{
		console.log("I am a promise and I am fulfilled")
			resolve(true)
			
	},5000);
})

let p2= new Promise((resolve,reject)=>{
	console.log("promise is for second now is panding=>")
	setTimeout(()=>{
		console.log("I am a promise and I am rejected")
			
			reject(new Error ("I am error"))
	},10000);
})

p.then((value)=>{
	console.log(value)
})
p2.catch((error)=>{
	console.log("some error occured in p2 and this error catch by ctech method")
})
console.log(p)
console.log(p2)
