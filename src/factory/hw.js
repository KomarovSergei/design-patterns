class Person {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

class PersonFactory {
  constructor() {}

  static incrementId() {
    this.id += 1;
  }

  static get getId() {
    return this.id;
  }

  createPerson(name) {
    PersonFactory.incrementId();
    return new Person(PersonFactory.getId, name);
  }
}
PersonFactory.id = -1;

const f = new PersonFactory();

console.log(f);
console.log(f.createPerson("Vasia"));
console.log(f.createPerson("Vasia2"));
console.log(f.createPerson("Vasia3"));
console.log(f.getId);
