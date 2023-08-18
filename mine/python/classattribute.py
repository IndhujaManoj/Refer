class student():
    name="INDHUJA"
    age=23

    
#getting attribute
print(getattr(student,'name'))
print(getattr(student,'age'))
print(getattr(student,'gender','no such attribute found'))
#dot notation
print(student.name)
#set attribute
setattr(student,'name','NATHAN')
print(student.name)

setattr(student,'gender','male')
print(student.gender)
#dot notation add value
student.city='nagercoil'
print(student.city)
print(student.__dict__)
delattr(student,'city')
print(student.__dict__)
del student.gender
print(student)
