#function over riding

class employee:
    def working_hrs(self):
        self.hrs=50
    def print_fun(self):
        print("Total working hrs:",self.hrs)
    
class trainee(employee):
    def working_hrs(self):
        self.hrs=60
    def reset_hrs(self):
        super().working_hrs()
emp=employee()
emp.working_hrs()
emp.print_fun()

tri=trainee()
tri.working_hrs()
tri.print_fun()
tri.reset_hrs()
tri.print_fun()









