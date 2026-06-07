
a =int(input())
count=0
variable=0
for i in range(1,a):
    for j in range(1,a):
        if (i%j==0):
            count=count+1
    if count>1:
        print(i)
    else:
        continue