# Nested If Statement in Python
"""
3 Marks as Input
Total
Average
Result
If Pass Grade
    90-100 A
    80-89 B
    70-79 C
    Else D
"""
name=input("enter the name:")
t=int(input("enter the mark of tamil:"))
e=int(input("enter the mark of english:"))
m=t=int(input("enter the mark of maths:"))
s=int(input("enter the mark of science:"))
ss=int(input("enter the mark of social:"))
total=t+e+m+s+ss
print("total:",total)
average=total/5.0
print("average:",average)
if  t>=35 and e>=35 and m>=35 and s>=35 and ss>=35:
    print(name,"is pass")
    if average>=90 and average<=100:
        print("grage A")
    elif average>=80 and average<=89:
        print("grage B")
    elif average>=70 and average<=79:
        print("grade is c")
    else:
        print("D")
else :
    print(name,"is fail")
