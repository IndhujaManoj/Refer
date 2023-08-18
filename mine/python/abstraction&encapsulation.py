#abstraction and encapsulation

class library:
    def __init__(self,book):
        self.book=book

    def list_book(self):
        print("Available books")
        for book in self.book:
            print(book)
    def borrow_book(self,borrow_book):
        if borrow_book in self.book:
            print("Get your book Now!!!")
            self.book.remove(borrow_book)
        else:
            print("Book IS not available")
    def receive_book(self,receive_book):
        print("you are successfully retturn  your book")
        self.book.append(receive_book)

books=['c' ,'c++','java' ,'python']
o=library(books)

msg="""
      1.Display Book
      2.Borrow Book
      3.Return Book
      """
while True:
    print(msg)
    ch=int(input("enter your choice:"))
    if ch==1:
        o.list_book()
    elif ch==2:
        book=input("enter the book to borrow:")
        o.borrow_book(book)
    elif ch==3:
        book=input("enter the book to retturn:")
        o.receive_book(book)
    else:
        print("Thankyou come again")
        quit()
            
        
            


