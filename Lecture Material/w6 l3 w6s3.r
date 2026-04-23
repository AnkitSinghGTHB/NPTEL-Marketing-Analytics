data=read.csv("w6s3.csv")
str(data)
data$qtrn=1:32

plot(data$Sales,type="l")

Digital_in=80; Digitalstock=0;
Print_in=50;Printstock=0;
TV_in=30;TVstock=0;
Outdoor_in=44;Outdoorstock=0;
RND_in=20;RNDstock=0;

lambda=rep(0.5,5)
A=100;T=0.5;

for(i in 1:32)
  if(i==1){
Digitalstock[i]=lambda[1]*Digital_in+data$Digital[i]
Printstock[i]=lambda[2]*Print_in+data$Print[i]
TVstock[i]=lambda[3]*TV_in+data$TV[i]
Outdoorstock[i]=lambda[4]*Outdoor_in+data$Outdoor[i]
RNDstock[i]=lambda[5]*RND_in+data$RND[i]
  } else{
Digitalstock[i]=lambda[1]*Digitalstock[i-1]+data$Digital[i]
Printstock[i]=lambda[2]*Printstock[i-1]+data$Print[i]
TVstock[i]=lambda[3]*TVstock[i-1]+data$TV[i]
Outdoorstock[i]=lambda[4]*Outdoorstock[i-1]+data$Outdoor[i]
RNDstock[i]=lambda[5]*RNDstock[i-1]+data$RND[i]   
  }

adeffect=rep(0.5,5)
elasticity=c(0.5,-0.5,-0.5,0.5)
seasonal=rep(1,4)

predictedsales=A*(data$qtrn*T+adeffect[1]*Digitalstock+
                    adeffect[2]*Printstock+adeffect[3]*TVstock+
                    adeffect[4]*Outdoorstock+adeffect[5]*RNDstock)*data$PriceSelf^(-elasticity[1])*
                    data$PriceComp^(-elasticity[2])*data$MarginSelf^elasticity[3]*data$MarginComp^elasticity[4]*
                    seasonal[data$QTR]

error=sqrt(mean((data$Sales-predictedsales)^2))


#minimize

starting=c(80,50,30,44,20,rep(0.5,5),100,0.5,rep(0.5,5),c(0.5,-0.5,-0.5,0.5),rep(1,4))
lower=c(rep(0,10),1,0,rep(0,5),rep(-Inf,4),rep(1,4))
upper=c(rep(100,5),rep(1,5),1000,100,rep(100,5),rep(Inf,4),rep(100,4))

saleserror=function(x){
  
  Digital_in=x[1]; Digitalstock=0;
  Print_in=x[2];Printstock=0;
  TV_in=x[3];TVstock=0;
  Outdoor_in=x[4];Outdoorstock=0;
  RND_in=x[5];RNDstock=0;
  
  lambda=x[6:10]
  A=x[11];T=x[12];
  
  adeffect=x[13:17]
  elasticity=x[18:21]
  seasonal=x[22:25]
  
  for(i in 1:32)
    if(i==1){
      Digitalstock[i]=lambda[1]*Digital_in+data$Digital[i]
      Printstock[i]=lambda[2]*Print_in+data$Print[i]
      TVstock[i]=lambda[3]*TV_in+data$TV[i]
      Outdoorstock[i]=lambda[4]*Outdoor_in+data$Outdoor[i]
      RNDstock[i]=lambda[5]*RND_in+data$RND[i]
    } else{
      Digitalstock[i]=lambda[1]*Digitalstock[i-1]+data$Digital[i]
      Printstock[i]=lambda[2]*Printstock[i-1]+data$Print[i]
      TVstock[i]=lambda[3]*TVstock[i-1]+data$TV[i]
      Outdoorstock[i]=lambda[4]*Outdoorstock[i-1]+data$Outdoor[i]
      RNDstock[i]=lambda[5]*RNDstock[i-1]+data$RND[i]   
    }
  
  predictedsales=A*(data$qtrn*T+adeffect[1]*Digitalstock+
                      adeffect[2]*Printstock+adeffect[3]*TVstock+
                      adeffect[4]*Outdoorstock+adeffect[5]*RNDstock)*data$PriceSelf^(-elasticity[1])*
    data$PriceComp^(-elasticity[2])*data$MarginSelf^elasticity[3]*data$MarginComp^elasticity[4]*
    seasonal[data$QTR]
  
  error=sqrt(mean((data$Sales-predictedsales)^2))
  
  return(error)
  
}

optim(starting,saleserror)
optim(starting,saleserror,method="L-BFGS-B",lower=lower,upper=upper)
