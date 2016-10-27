function Person(age,weight){
 this.age = age;
 this.weight = weight;
}

Person.prototype.getInfo = function(){
 return "I am " + this.age + " years old " +
    "and weighs " + this.weight +" kilo.";
};