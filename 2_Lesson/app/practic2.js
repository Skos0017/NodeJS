export class Book {
    
    constructor(title , authot, isbn, isCheckedOut){
        this.title = title,
        this.authot = authot, 
        this.isbn = isbn, 
        this.isCheckedOut = isCheckedOut
    }

    checkOut(){
        isCheckedOut = false;
        return this
    }
    returnBook(){
        isCheckedOut = true;
        return this
    }
}

class Member{
    name = this.name
    checkedOutBooks = this.checkedOutBooks
    constructor(name){
        this.name = name
    }

    checkOutBook(book){
        
    }
}