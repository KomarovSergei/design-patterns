const { expect } = require("chai");

const { CodeBuilder } = require("../src/builder/hw");

describe("builder", function() {
  it("empty test", function() {
    let cb = new CodeBuilder("Foo");
    expect(cb.toString()).equal("class Foo {\n}");
  });

  it("person test", function() {
    let cb = new CodeBuilder("Person");
    cb.addField("name").addField("age");
    expect(cb.toString()).equal(
      "class Person {\n" +
        "  constructor(name, age) {\n" +
        "    this.name = name;\n" +
        "    this.age = age;\n" +
        "  }\n" +
        "}"
    );
  });
});
