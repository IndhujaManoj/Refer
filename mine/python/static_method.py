class student:
    def __init__(self,name,age):
        self.name=name
        self.age=age
    def printDetails(self):
        print("Name:",self.name, " Age:",self.age)
    @staticmethod
    def welcome():
        print("Welcome to our instuation.....")
        
o=student("Manoj",20)
o.printDetails()
o.welcome()
n=student("Nathan",24)
n.printDetails()
n.welcome()
