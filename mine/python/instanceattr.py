#instance attribute
class user:
    course='java'
o=user()
print(user.__dict__)
print(user.course) #print class attribbute
print(o.__dict__)
print(o.course) # it check course is inside that or not.it prints its clsssattribut
o.course='c++'
print(o.course)
o2=user()
print(o2.course)


