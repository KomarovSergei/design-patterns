//bad variant
// class CodeBuilder {
//   constructor(className) {
//     this.className = className;
//     this.fields = [];
//   }

//   addField(name) {
//     this.fields.push(name);
//     return this;
//   }

//   toString() {
//     return this.fields.length > 0
//       ? `class ${this.className} {\n` +
//           `  constructor(${this.fields[0]}, ${this.fields[1]}) {\n` +
//           `    this.${this.fields[0]} = ${this.fields[0]};\n` +
//           `    this.${this.fields[1]} = ${this.fields[1]};\n` +
//           `  }\n` +
//           `}`
//       : `class ${this.className} {\n}`;
//   }
// }

class Field {
  constructor(name) {
    this.name = name;
  }
}

class Class {
  constructor(name) {
    this.name = name;
    this.fields = [];
  }

  toString() {
    let buffer = [];
    buffer.push(`class ${this.name} {\n`);

    if (this.fields.length > 0) {
      buffer.push(`  constructor(`);
      this.fields.forEach((elem, indx) => {
        buffer.push(elem.name);
        if (indx + 1 !== this.fields.length) buffer.push(", ");
      });
      buffer.push(`) {\n`);
      this.fields.forEach(elem => buffer.push(`    this.${elem.name} = ${elem.name};\n`));
      buffer.push("  }\n");
      buffer.push("}");
    }
    return buffer.join("");
  }
}

class CodeBuilder {
  constructor(className) {
    this._class = new Class(className);
  }

  addField(name) {
    this._class.fields.push(new Field(name));
    return this;
  }

  toString() {
    return this._class.toString();
  }
}

let cb = new CodeBuilder("Person");
cb.addField("name").addField("age");
console.log(cb.toString());
