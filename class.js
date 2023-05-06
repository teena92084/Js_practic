// class car{
//     constructor(make,model,year){
//         this.make=make;
//         this.model=model;
//         this.year=year;
//         this.display=function(){
//             console.log(this.make+this.model+this.year)
//         }
//     }
// }
// c=


function car(make,model,year){
    this.make=make;
    this.model=model;
    this.year=year;
    this.display=function(){
        console.log(this.make+this.model+this.year)
    }
}

console.log(car("honda","303","2022"))
// console.log(s)