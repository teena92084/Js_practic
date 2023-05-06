// num={
//     method_bind:function(state,city,block){
//         console.log("this is my mosi-->"+this.mosi+"bhai--->"+this.bhai)
//         console.log(state,"this is my state-->",city,"this is city",block)
//     }
// }
// person1={
//     mosi:"maina",
//     bhai:"jitu",
// }
// num.method_bind.bind(person1,["rajasthan","Bhilwara","jahazpur"])
// console.log(num)






// num={
//     method_bind:function(state,city,block){
//         console.log("this is my mosi-->"+this.mosi+"bhai--->"+this.bhai)
//         console.log(state,"this is my state-->",city,"this is city",block)
//     }
// }
// person1={
//     mosi:"maina",
//     bhai:"jitu",
// }
// h=num.method_bind.bind(person1,["rajasthan","Bhilwara","jahazpur"])
// // console.log(num)
// h()



a={
    s:"sannu",
    m:"meena",
    A:"annu"
}
b={
    s:"summan",
    m:"manu",
    A:"Arpita"
}
function sum(love,hat){
    console.log("s--"+this.m+"m--"+"A  "+this.A+"--this is my fevriout --"+love+"--this not my fevriout--"+hat)
    
}
// sum.apply(a,["chuku","watermalen"])


// sum.apply(a)

num=sum.bind(a,["Mango","Banana"])
num()