class CodeBuilder {
  constructor(className) {
    this.className = className
    this.fields = []
  }

  addField(name) {
    this.fields.push(name)
    return this
  }

  toString() {
    return (this.fields.length > 0) 
            ? `class ${this.className}\n`
            + `  constructor(${this.fields[0]}, ${this.fields[1]}) {\n`
            + `    this.${this.fields[0]} = ${this.fields[0]};\n`
            + `    this.${this.fields[1]} = ${this.fields[1]};\n`
            + `  }\n`
            + `}`
            : `class ${this.className}\n{\n}`
  }
}

let cb = new CodeBuilder('Person')
// cb.addField('name').addField('age')
console.log(cb.toString())