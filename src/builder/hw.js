//bad variant
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
    }
    buffer.push("}");
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

exports.CodeBuilder = CodeBuilder;
