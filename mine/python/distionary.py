
#DISTIONARY

user={
    "name":"ram",
    "age":27,
    "ismarried":True

    }
"""
print(user)
print(type(user))
print(user["name"])
print(user.get("age"))
print(user.keys())
print(user.values())
print(user.items())

for x in user:
    print(x)
for x in user:
    print(user[x])
    
for x in user.values():
    print(x)
for x,y in user.items():
    print(x,y)
if "age" in user:
    print("age is in user")
else:
    print("it is not in user")
  """  
#changing values
user.update({"gender":"male"})
print(user)
#changing purticular value

user["age"]=35
print(user)
user.pop("age")
print(user)
