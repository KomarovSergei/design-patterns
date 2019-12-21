const {log} = require('utils/index')

let Color = Object.freeze({
  red: 'red',
  green: 'green',
  blue: 'blue',
})

let Size = Object.freeze({
  small: 'small',
  medium: 'medium',
  large: 'large',
})

class Product {
  constructor(name, color, size) {
    this.name = name
    this.color = color
    this.size = size
  }
}

// open for extension, closed for modification
class ProductFilter {
  filterByColor(products, color) {
    return products.filter(p => p.color === color)
  }

  filterBySize(products, size) {
    return products.filter(p => p.size === size)
  }

  filterBySizeAndColor(products, size, color) {
    return products.filter(p => 
      p.size === size && p.color === color)
  }

  // state space explosion
  // 3 criteria = 7 methods
}
// specifications
class Specification {
  constructor() {
    if (this.constructor.name === 'Specification')
      throw new Error('Specification is abstract!')
  }

  isSatisfied(item) {}
}

class ColorSpecification extends Specification {
  constructor(color) {
    super()
    this.color = color
  }

  isSatisfied(item) {
    return item.color === this.color
  }
}

class SizeSpecification  extends Specification {
  constructor(size) {
    super()
    this.size = size
  }

  isSatisfied(item) {
    return item.size === this.size
  }
}

class AndSpecification  extends Specification {
  constructor(...specs) {
    super()
    this.specs = specs
  }

  isSatisfied(item) {
    return this.specs.every(x => x.isSatisfied(item))
  }
}

class BetterFilter {
  filter(items, spec) {
    return items.filter(x => spec.isSatisfied(x))
  }
}

let apple = new Product('Apple', Color.green, Size.small)
let tree = new Product('Tree', Color.green, Size.large)
let house = new Product('House', Color.blue, Size.large)

let products = [apple, tree, house]
let pf = new ProductFilter()
log(`Green products (old):`)
for(let p of pf.filterByColor(products, Color.green))
  log(` * ${p.name} is green`)

let bf = new BetterFilter()
log('Green products (new):')
for(let p of bf.filter(products,
  new ColorSpecification(Color.green))) {
    log(` * ${p.name} is green`)
}

log('Large and green products:')
let spec = new AndSpecification(
  new ColorSpecification(Color.green),
  new SizeSpecification(Size.large)
)
for (let p of bf.filter(products, spec)) {
  log(` * ${p.name} is large and green`)
}