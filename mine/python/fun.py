#return type with arugument


"""
def mul():
    a = int(input("Enter The Value of A : "))
    b = int(input("Enter The Value of B : "))
    c = a * b
    return c
 
 
x=mul()
print("Mul ",x)
"""
def add(a,b):
    
    c=a+b
    print(c)
    
add(25,5)
#return type without argmnt:

def add():
    a=int(input("enter a:"))
    b=int(input("enter b:"))
    c=a+b
    return c
x=add()
print("add:",x)
