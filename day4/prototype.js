function person (name , age , loc ){
    this.function=name;
    this.age=age;
    this.loc=loc;
    this.pname = function () {
        console.log("hi")
    };
}
let p1 = new person("ashu" , 87, "new")
console.log(p1.pname);

p1.name="ashutosh"
console.log(p1)
p1.age=19

person.prototype.hehe="hehe"
person.prototype.java="hllo"

console.log(p1)
// console.log(pname.java)


