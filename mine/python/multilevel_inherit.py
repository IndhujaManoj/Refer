#multilevel inherit

class grand_father:
    def own_house(self):
        print("Grandpa's house")

class father(grand_father):
    def own_bike(self):
        print("Father's bike")

class son(father):
    def own_book(self):
        print("own book")

o=son()
o.own_book()
o.own_bike()
o.own_house()

