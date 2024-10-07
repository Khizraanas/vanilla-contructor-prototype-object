
// Vanilla function

// fruit
 var fruit = new Fruit("Apple", "1kg", 200);
  

  function Fruit(name, quantity, price)
   {
     this.name= "apple";
     this.quantity = "1kg";
     this.price = 200;
     
   }
   console.log("Fruit");







// Contructor method
  

// vegetable
var vegetable = new Vegetable("Potato" , "1kg" , 100);
   function Vegetable(name, quantity , price)
    {
      this.name = "potato";
      this.quantity = "1kg"; 
     this.price = 100 ;
     this.discountMonths = [6, 7];
    this.vegetable = function (vegetablediscount) {
        var bestPrice = this.price;
        var currDate = new Date();
        var thisMo = currDate.getMonth();
        for (var i = 0; i < this.discountMonths.length; i++) {
            if (this.discountMonths[i] === thisMo) {
                bestPrice = this.price * vegetablediscount;
                break;
            }
        }
        return bestPrice * 12;
    };
}

// var annualPrice = vegetable.vegetable(0.8);
// console.log("Annual Price:" + annualPrice);





   
// cloth 

   var cloth = new Cloth("Asim Jofa" , "1dress" , 5000);
   function Cloth(name, quantity , price)
    {
      this.name = "Asim jofa";
      this.quantity = "1dress";
     this.price = 5000 ;
    }
    console.log("Cloth");


// kids
   var kidToy = new KidToy("Robot" , "1" , 500);
   function KidToy(name, quantity , price)
    {
      this.name = "robot";
      this.quantity = "1";
     this.price = 500 ;

   }
   console.log("KidToy");





// Constructor function
   var meat = {
       name:   "chicken",
       price: 700,
       quantity : "1kg"
     };
//      
     function Meat(name, price, quantity) {
       this.name = "chicken";
       this.price = 700;
      this .quantity = "1kg";
       
     }
     console.log("Meat");




// Prototype








function Dog(name, age, breed) {
  this.name = "Shery";
  this.age = 10;
  this.breed = "German Shepherd";
}
var dog1 = new Dog();
Dog.prototype.gender = "male";
console.log(Dog.prototype);
