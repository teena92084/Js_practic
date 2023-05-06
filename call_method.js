// mun={
//     fullname:function(){
//     console.log("this is my village name-",this.Name+"  "+this.collage)

// }
// }

// person1={
//     Name:"Khajuri",
//     collage:"PSB Collage Shahpura",

// }
// person2={
//     Name:"Bhilwara",
//     collage:"mlv Collage Bhilwara",
    
// }
// mun.fullname.call(person1)
// mun.fullname.call(person2)




// with argument

aun={
    myfamily: function(Country,city){
    console.log("my fathe name"+this.f_Name+"is- and my mother name is-"+this.M_Name+""+this.city+""+this.Country)
}}

details1={
    f_Name:"Jittu",
    M_Name:"jiya",

}

details2={
    f_Name:"sulthan",
    M_Name:"Gattu"
}
aun.myfamily.call(details1,"india","bhilwara")

