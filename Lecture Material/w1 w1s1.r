#Start with a vector
a=0
b=5

#A longer vector
a=1:10
b=c(2,5,6,8,9)

length(a)
c=length(b) #finding the length of b and saving it in c

class(a)
class(b)
class(c)

#Sequence vector
a=seq(1,30,by=2)
help(seq)

#Repeat vector
b=rep(2,20)
?rep

#subset of a vector
a[5]

c=c(5,7,8,9)
a[c]

#Conditional Subsetting
a>7
a[a>7]

a[a>15|a<8]

a[a>6&a<10]

#Change vector
a[5]=23

a[c(5,9,10)]=23

a[c(5,9,10)]=c(27,36,111)

#character vector
m=c(rep("png",5),rep("hul",10),rep("marico",5))
as.numeric(m)

mm=as.factor(m)
as.numeric(mm)

levels(mm)

levels(mm)[2]="nestle"
levels(mm)=c("swagato","arpita","anubhab")

#End of Session 1 and 2
