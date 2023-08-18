#list
"""
para=[23,24,34]
print(type(para))
print(para[0])

#join

para=["23","24","34"]
print('/'.join(para))
print(para[0])"""


para=[]
print("enter a para:")

while True:
    line=input()
    if line:
        para.append(line)
    else:
        break
    print (para)
    output="\n".join(para)
    print(output)
    


