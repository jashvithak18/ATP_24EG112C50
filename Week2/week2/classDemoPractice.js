/*
Objective : Create a Book class and use it to manage a collection of books in a library.

Requirements:
  Create a Book class with the following:

  Properties:
      title (string)
      author (string)
      pages (number)
      isAvailable (boolean, default: true)


  Methods:
      borrow() - Marks the book as not available
      returnBook() - Marks the book as available
      getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
      isLongBook() - Returns true if pages > 300, false otherwise




  1. Create at least 5 book objects using the class:
      Example: "Harry Potter", "1984", "The Hobbit", etc.


  2. Perform the following operations:

      i. Display info of all books
      ii. Borrow 2 books and show their availability status
      iii. Return 1 book and show updated status
      iv. Count how many books are "long books" (more than 300 pages)
      v. List all available books*/

  class Book{
    title;
    author;
    pages;
    isAvailabe;
  constructor(title,author,pages,isAvailabe){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.isAvailabe=isAvailabe;
  }
  borrow(){
    console.log('Not available')
  }
  returnBook(){
    console.log('Available')
  }
  getInfo(){
    console.log(`${this.title} by ${this.author} (${this.pages})`)
  }
  isLongBook(){
    if(this.pages>300)
        return true;
    return false;
  }
  }
  let b1=new Book('abc','efg',289,true)
 let b2=new Book('hi','jk',299,true)
  let b3=new Book('lm','no',356,true)
   let b4=new Book('pe','wbn',289,false)
    let b5=new Book('abds','efdu',369,false)
    let b=[b1,b2,b3,b4,b5]
    b1.getInfo()
    b2.getInfo()
    b3.getInfo()
    b4.getInfo()
    b5.getInfo()
    b4.borrow()
    b1.borrow()
    b3.returnBook()
    let count =0;
    for(let c of b){
     if(c.isLongBook()){
      count++
     }
    }
   console.log (`Long books:${count}`)
  

