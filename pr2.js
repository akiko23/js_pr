// 1
class User {
    constructor(name, email, role='user'){
        this.name = name;
        this.email = email;
        this.role = role;
    }

    login(){
        console.log(`Пользователь ${this.name} вошел в систему`);
        return this;
    }

    logout(){
        console.log(`Пользователь ${this.name} вышел из системы`);
        return this;
    }
}


class Admin extends User {
    constructor(name, email, role){
        super(name, email, role);
    }

    deleteUser(user){
        console.log(`Пользователь ${user.name} был удален администратором ${this.name}`);
    }
}

let userOne = new User('Tom', 'test@mail.com', 'user');
let userTwo = new User('Jerry', 'ww', 'user');
let admin = new Admin('Admin', 'hhh', 'admin');

console.log('#1');
userOne.login().logout();
userTwo.login().logout();
admin.login().logout();
admin.deleteUser(userOne);
console.log();


// 2
function Product(name, price){
    this.name = name;
    this.price = price;
}
    
function ShoppingCart(){
    this.products = [];
}

ShoppingCart.prototype.addProduct = function(pr) {
    this.products.push(pr);
}

ShoppingCart.prototype.removeProduct = function(pr) {
    index = this.products.indexOf(pr);
    this.products.splice(index, 1);
}

ShoppingCart.prototype.getTotalPrice = function() {
    sum = 0;
    for (let i = 0; i < this.products.length; i++) {
        sum += this.products[i].price;
    };
    return sum;
}

ShoppingCart.prototype.checkout = function(){
    console.log(`Total price is ${this.getTotalPrice()}`);
    console.log('products are:');
    
    for (let i = 0; i < this.products.length; i++) {
    console.log(this.products[i].name);
    }

    this.products = [];
}

let pr1 = new Product('egg', 100);
let pr2 = new Product('banana', 50);
let pr3 = new Product('orange', 70);
let cart = new ShoppingCart();

console.log('#2');
cart.addProduct(pr1);
cart.addProduct(pr2);
cart.addProduct(pr3);
console.log(cart.getTotalPrice());
cart.checkout();
console.log(cart.products);
console.log()


// 3
class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}

class Library {
    constructor(books=[]) {
        this.books = books;        
    }

    addBook(book) {
        this.books.push(book);
    }

    findBooksByAuthor(authorName) {
        let res = [];
        for (const book of this.books) {
            if (book.author === authorName) {
               res.push(book); 
            }
        }
        return res;
    }

    listAllBooks() {
        console.log(this.books);
    }
}


class LibraryUser {
    constructor() {
        this.borrowedBooks = [];        
    }

    borrowBook(book) {
        console.log(this.borrowedBooks.length)
        if (this.borrowedBooks.length >= 3) {
            throw Error("Can't borrow more then three books");
        }
        this.borrowedBooks.push(book);
    }

    returnBook(book) {
        const bookInd = this.borrowedBooks.indexOf(book);
        this.borrowedBooks.splice(bookInd, 1);
    }
}


let book1 = new Book('Unix network OS', 'Tannenbaum', 1230)
let book2 = new Book('War and peace', 'Tolstoy', 9999999)
let book3 = new Book('Clean Architecture', 'Uncle Bob', 325)
let book4 = new Book('Mumu', 'Tolstoy', 90)

let library = new Library([book1, book2, book4])
console.log('#3')
library.listAllBooks()
library.addBook(book3)
library.listAllBooks()
console.log(library.findBooksByAuthor('Tolstoy'))

let libUser = new LibraryUser()
libUser.borrowBook(book1)
libUser.borrowBook(book2)
libUser.borrowBook(book3)

try {
    libUser.borrowBook(book4);
} catch (error) {
    console.log(error);
}
console.log()


// 4
function Customer(name, email) {
    this.name = name;
    this.email = email;
}

function Product(name, price){
    this.name = name;
    this.price = price;
}


class Order {
    constructor(customer, products=[]) {
        this.customer = customer;
        this.products = products;
    }

    addProduct(product, quantity) {
        for (let i = 0; i < quantity; i++) {
            this.products.push(product);
        }
    }

    calculateTotal() {
        return this.totalPrice;
    }

    printOrder() {
        console.log(`Customer: ${JSON.stringify(this.customer)}; Products: ${JSON.stringify(this.products)}; Total price: ${this.totalPrice}`);
    }
}

Object.defineProperty(Order.prototype, "totalPrice", {
    get: function () {
        return this.products.reduce((partialSum, pr) => partialSum + pr.price, 0);
    }
});

let customer = new Customer('Ivan', 'blabla@gmail.cum');
let order = new Order(customer, [new Product('fa', 34), new Product('fb', 30)]);
console.log('#4')
console.log(order.totalPrice)
order.printOrder()
console.log()


//5
class Pet {
    constructor() {
        if (Object.getPrototypeOf(this) == Pet) {
            throw Error('Can not construct abstract class instance');

        }
    }

    eat() {
        console.log("Животное ест");
    }

    makeSound() {
        throw Error('Define the method');
    }

    sleep() {
        throw Error('Define the method');
    }
}


class Dog extends Pet {
    makeSound() {
        console.log("Собака лает");
    }
    
    sleep() {
        console.log("Собака спит");
    }
}


class Cat extends Pet {
    makeSound() {
        console.log("Кошка мяукает");
    }

    sleep() {
        console.log("Кошка спит");
    }
}


const d = new Dog()
const c = new Cat()
console.log('#5')
d.makeSound()
d.eat()
c.makeSound()
c.sleep()
console.log()


//6
class Expression {
    constructor(firstNum, secondNum, operation) {
        if (Object.getPrototypeOf(this) == Expression) {
            throw Error('Can not construct abstract class instance');
        }
        this.firstNum = firstNum;
        this.secondNum = secondNum;
        this.operation = operation;
    }

    evaluate() {
        throw Error('Define the method');
    }

    toString() {
        return `${this.firstNum} ${this.operation} ${this.secondNum} = ${this.evaluate()}`;
    }
}


class Addition extends Expression {
    constructor(firstNum, secondNum) {
        super(firstNum, secondNum, '+');
    }

    evaluate() {
        return this.firstNum + this.secondNum; 
    }
}


class Subtraction extends Expression {
    constructor(firstNum, secondNum) {
        super(firstNum, secondNum, '-');
    }

    evaluate() {
        return this.firstNum - this.secondNum; 
    }
} 


class Multiplication extends Expression {
    constructor(firstNum, secondNum) {
        super(firstNum, secondNum, '*');
    }

    evaluate() {
        return this.firstNum * this.secondNum; 
    }
}


class Division extends Expression {
    constructor(firstNum, secondNum) {
        super(firstNum, secondNum, '/');
    }

    evaluate() {
        return this.firstNum / this.secondNum; 
    }
} 




const [num1, num2] = [4, 2]
const [ad, sub, mul, div] = [new Addition(num1, num2), new Subtraction(num1, num2), new Multiplication(num1, num2), new Division(num1, num2)]

console.log('#6')
console.log(ad.toString())
console.log(sub.toString())
console.log(mul.toString())
console.log(div.toString())
