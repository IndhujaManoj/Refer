#dimond problem

class A:
    def display(self):
        print("I am the display of class A")
class B(A):
    def display(self):
        print("I am the display of class B")
class C(A):
    def display(self):
        print("I am the display of class C")
class D(B,C):
    def display(self):
        print("I am the display of class D")
                
O=D()
O.display()
