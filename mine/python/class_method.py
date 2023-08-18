#class method:

class student:
    count=0
    def __init__(self,name,age):
        self.name=name
        self.age=age
        student.count+=1
    def printdetails(self):
        print("Name:",self.name, "  Age:",self.age )
    @classmethod
    def total(cls):
        return cls.count
            
o=student("Indhuja",23)
o.printdetails()
a=student("Nathan",24)
a.printdetails()
print("Total Admission:",student.total())
