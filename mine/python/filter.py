#filter
"""
ages=[5,12,17,18,24,32,8.12]

def myfun(x):
    if x<18:
        return False
    else:
        return True
adults=filter(myfun,ages)

for x in adults:
    print(x)
"""
#filter even numbers
num=[2,3,6,4,7,9,11]
def even(n):
    if n%2==0:
        return True
    else:
        return False
even_numbers=filter(even,num)
for x in even_numbers:
    print(x)
