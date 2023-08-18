#function

def welcome():
    print("indhuja")
welcome()

#no return type without argument function in python
"""
def add():
    a=int(input("enter a:"))
    b=int(input("enter b:"))
    c=a+b
    print("total:",c)
add()    
"""
#no return with argument
"""
def sub(a,b):
    c=a-b
    print("difference:",c)
sub(25,20)
"""
#return type without argument
"""
def mul():
     a=int(input("enter a:"))
     b=int(input("enter b:"))
     c=a*b
     return c

    
x=mul()
print("mul",x)

#return type with argument

def div(a,b):
    c=a/b
    return(c)

x=div(25/5)
print("division:",x)
  """
#arbitary argument function

def class_10(*student):
    print(student)

    class_10("ram","geetha","kumar")
                    
