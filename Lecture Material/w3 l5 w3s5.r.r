data=read.csv("conjoint data price.csv")

for(i in 2:4)data[,i]=factor(data[,i])

matrix1=matrix(0,ncol=6,nrow=60)
colnames(matrix1)=c("Fuel2","Fuel3","Capacity2","Capacity3","Price2","Price3")

for(i in 1:60){
fit1=lm(Rating~Fuel+Capacity+Price,data=data[((i-1)*9+1):(i*9),])
matrix1[i,]=ifelse(summary(fit1)$coef[2:4,4]<0.05,summary(fit1)$coef[2:4,1],0)
}

df=data.frame(matrix1)

wss <- (nrow(df)-1)*sum(apply(df,2,var))
for (i in 2:10) wss[i] <- sum(kmeans(df,centers=i)$withinss)
plot(1:10, wss, type="b", xlab="Number of Clusters", ylab="Within groups sum of squares")

fit <- kmeans(df, 3) # k1 cluster solution

# get cluster means
aggregate(df,by=list(fit$cluster),FUN=mean)
