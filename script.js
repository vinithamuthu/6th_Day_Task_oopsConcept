// 1.class-Movie:

  class Movie{

    constructor(title,studio,rating="PG13"){

      this.titlename=title;
      this.studioname=studio;
      this.rating_val=rating;

    }

    

  }

  let movie1 = new Movie("Casino Royale","Eon Productions")

  let movie2 = new Movie("Casino Royale","Eon Productions","SE12")

  console.log(movie2);

  console.log(movie1);




// 2.Circle - Class:


class Circle {

  constructor(radius ,color){
        
    this.radius = radius;
    this.color = color;

  }
 
  get radiusCircle() {

    return this.radius;

  }


  set radiusCircle(radius) {
  
     this.radius = radius;
    
  }

get colorCircle() {

  return this.color;

}

set colorCircle(color) {

  this.color = color;
}

get toString(){
 
  return `"Circle[radius = ${this.radius} , color=${this.color}]"` // `${expression}`

 }

 get areaCircle(){
   
  return Math.PI * this.radius * this.radius;   //pir2

 }

 get CircumFerence(){

  return 2 * Math.PI * this.radius;       // 2pir

 }




}
let circle = new Circle(1.0,"red")
console.log(circle.radiusCircle);   // get radiuscircle


circle.radiusCircle = 2.2; 

console.log(circle.radiusCircle);    // set radiuscircle


console.log(circle.colorCircle);      // get colorcircle
circle.colorCircle = "Black";
console.log(circle.colorCircle);       // set colorcircle


console.log(circle.toString);          // get tostring

console.log(circle.areaCircle);          // get area circle

console.log(circle.CircumFerence);        // get CircumFerence circle




// 3.Write a “person” class to hold all the details.


class Person{

   constructor(name,age,gendar,email,salary){
     this.name = name;
     this.age = age;
     this.gendar = gendar;
     this.email = email;
     this.salary = salary;
   }

}
let personObject = new Person("vijay",41,"male","vijay@gmail.com",100000);
console.log(personObject.name);
console.log(personObject.age);
console.log(personObject.gendar);
console.log(personObject.email);
console.log(personObject.salary);




// 4.write a class to calculate the uber price. 


class Ubar {

  constructor(price) {
    this.price_amount = price
  }

  set price_amount(value){
    this._price_amount =  value;
    this.TotalAmount = this.price_amount * 50
  }
  get price_amount() {
    return this._price_amount
  }
getCRT() {
  return this.price_amount * 50 
}

}

let ubar = new Ubar(200)
console.log(ubar, ubar.price_amount);
console.log(`my Amount: ${ubar.getCRT()}`);