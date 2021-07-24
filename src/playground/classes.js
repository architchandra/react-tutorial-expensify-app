class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }

  getDescription() {
    return `${ this.name } is ${ this.age } years old.`;
  }
}

class Traveller extends Person {
  constructor(name, age, home) {
    super(name, age);
    this.home = home;
  }

  getDescription() {
    let description = super.getDescription();

    if(this.home) {
      description += ` He lives in ${ this.home }.`
    }

    return description;
  }
}

const me = new Traveller('Archit', 31, 'Delhi');
const anon = new Traveller();
console.log(me.getDescription());
console.log(anon.getDescription());