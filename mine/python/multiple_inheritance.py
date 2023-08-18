#multiple inheritance


class father:
    def fishing(self):
        print("fishing in river")
    def chess(self):
        print("play chess well")



class mother:
    def cooking(self):
        print("cooking in the kitchen")
    def chess(self):
        print("play chess well")
    


class son(father,mother):
    def cycle(self):
        print("ride cycle very well")
        
o=son()
o.cycle()
o.cooking()
o.fishing()
o.chess()
