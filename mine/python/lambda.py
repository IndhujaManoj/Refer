#lambda function

#syntax
#lambda argument:expression


x=lambda x:x*20
print(x(40))



x=lambda x,y:x*10/y
print(x(5,2))

def myfun(n):
    return lambda x:x*n
    
mydoubler=myfun(9)
print(mydoubler(11))













