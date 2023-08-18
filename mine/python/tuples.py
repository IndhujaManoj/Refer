"""
tuple in python
1.Immutable
2.Surrounded by round Brackets()
"""

a=(1,True,"Ram",'hello')
print(a)
print(type(a))
print(a[2])
print(a[-1])
print(a[0:2])
a=(1,True,"Ram",'hello')
b=list(a)
print(b)
b.append("indhuja")
print(b)
a=tuple(b)
print(a)
print(type(a))

for i in a:
    print(i)

if "Ram" in a:
    print("Ram is in a")
    
else:
    print("Ram is not in a")
