data.germany <- read.csv(file="sample.csv")
data.germany=data.germany[rowSums(data.germany[,c(2:13)])>0,]

a=cor(t(data.germany[,-1]))

a=as.data.frame(a)

colnames(a)=data.germany$user
rownames(a)=colnames(a)

a=(a-min(a))/(max(a)-min(a))


r=data.germany
r=r-r
r$user=data.germany$user


for(i in 1:15)
  for(j in 1:12)
    if(data.germany[i,(j+1)]!=1){
      
      k=sort(a[,i],decreasing=TRUE)[2:6]
      l=order(-a[,i])[2:6]
      h=as.numeric(data.germany[l,(j+1)])
      
      r[i,(j+1)]=sum(h*k)/sum(k)
    }

reco=matrix(0,nrow=15,ncol=5)
reco=as.data.frame(reco)
rownames(reco)=r$user
colnames(reco)=c("Reco1","Reco2","Reco3","Reco4","Reco5")


for(i in 1:15)
  reco[i,]=colnames(data.germany)[(order(-r[i,c(2:12)])+1)][1:5]
