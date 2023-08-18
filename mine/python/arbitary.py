#arbitary functions(*)

def class10(*student):
    print(student)

class10("RAM","SEETHA","RADHA")

def message(name,age):
    print(name,"age is",age)
message("indhuja",22)



print("-------------------------------")

#keyword argument function

def message(name,age):
    print(name,"age is",age)
message(age=22,name="indhuja")


print("-------------------------------")

#keyword arbitary function

def bioData(**data):
    print(data)
bioData(name="indhuja",age=22,gender="female")
  
#default parameter function

def user(name,city="nagercoil"):
    print(name,"is from",city)
user("ram")

#passing list as argument

def total(mark):
    return sum(mark)
print(total([98,98,99,97,89]))

#recursive function

def factorial(x):
    if x==1:
        return 1
    else:
        return (x * factorial(x - 1))
 
 
print("Factorial : ", factorial(5))
factorial(5)
"""
 #lambda function
"""
c=lambda a:a+50
print(c(5))
#lambda using multi args

c=lambda a,b:a*b
print(c(10,25))


