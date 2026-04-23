data.germany <- read.csv(file="sample.csv")

a=matrix(0,nrow=12,ncol=12)
a=as.data.frame(a)
colnames(a)=colnames(data.germany)[-1]
rownames(a)=colnames(a)
for(i in 1:12)
  for(j in 1:12)
    a[i,j]=cor(data.germany[,(i+1)],data.germany[,(j+1)])
write.csv(a,"samplesimilarity.csv")

a=(a-min(a))/(max(a)-min(a))

r=data.germany
r=r-r

for(i in 1:19)
  for(j in 1:12)
    if(data.germany[i,(j+1)]!=1){
      
      k=sort(a[,j],decreasing=TRUE)[2:6]
      l=order(-a[,j])[2:6]
      h=as.numeric(data.germany[i,(l+1)])
      
      r[i,(j+1)]=sum(h*k)/sum(k)
    }

r$user=data.germany$user

reco=matrix(0,nrow=19,ncol=5)
reco=as.data.frame(reco)
rownames(reco)=r$user
colnames(reco)=c("Reco1","Reco2","Reco3","Reco4","Reco5")


for(i in 1:19)
  reco[i,]=colnames(data.germany)[(order(-r[i,c(2:12)])+1)][1:5]