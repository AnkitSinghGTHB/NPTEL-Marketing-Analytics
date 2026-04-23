data=read.csv("cocacola.csv")
str(data)

data$Price=as.factor(data$Price)
data$AdSpend=as.factor(data$AdSpend)

aggregate(Sales ~ Price + AdSpend, data=data, FUN=mean)

library(ggpubr)
ggline(data, x = "Price", y = "Sales", color = "AdSpend",
       add = c("mean_se", "dotplot"))

fit1 <- lm(Sales ~ Price + AdSpend, data=data)
summary(fit1)

fit2 <- lm(Sales ~ Price * AdSpend, data=data)
summary(fit2)

price=rep(c(8,10,12),2)
ads=rep(1:2,each=3)
new=data.frame(price=price,ads=ads)
new$Price=as.factor(new$price)
new$AdSpend=as.factor(new$ads)
new$sales=predict(fit2,newdata=new)
new$rev=new$sales*new$price
new$profit=new$rev-ifelse(new$ads==1,3000,5000)
