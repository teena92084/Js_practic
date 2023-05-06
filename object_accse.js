obj={
    Name:"teena",
    last_name:"kanwar",
    state:"Rajasthan",
    age:2,
    full:function(){
        console.log(this.Name+" "+this.last_name+""+this.age)
    }

}
obj.full()
console.log(obj.Name)
console.log(obj["state"])
obj.age=22
console.log(obj.age)