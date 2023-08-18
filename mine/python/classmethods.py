#class methods

class student:
    name='indhuja'
    age=25

    def fun():
        print("name:",student.name)
        print("name:",student.age)
        
student.fun()
student.__dict__['fun']()
