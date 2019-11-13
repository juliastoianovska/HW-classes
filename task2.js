class Product {
  constructor(type = '', name = '', price = x, quantity = y) {
    this.type = type;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
  add(amount) {
    return this.quantity + amount;
  }
  set_discount(percent) {
    return (this.price - this.price/100 * percent);
  }
}

let apple = new Product('Fruit', 'Apple', 5, 1);
console.log(apple.add(3));
console.log(apple.set_discount(10));
