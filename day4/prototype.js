function person (name , age , loc ){
    this.name=name;
    this.age=age;
    this.loc=loc;

}

let p1 = new person("ashu" , 87, "new")

p1.name="ashutosh"
console.log(p1)
p1.age=19

person.prototype.hehe="hehe"
console.log(p1)