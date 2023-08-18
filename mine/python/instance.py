#instance method
class student:
    name='indhuja'
    age=23
    def fun(self,gender):
        print("name:",student.name)
        print("age:",student.age)
        print("gender:",gender)

o=student()
"""o.fun()
student.fun(o)

"""

o.fun('female')
student.fun(o,'female')
