df=read.table("https://raw.githubusercontent.com/CamDavidsonPilon/lifetimes/master/lifetimes/datasets/CDNOW_master.txt",header=TRUE)

#tranfer the the text column type to date type

df[,2]=as.Date(as.character(df[,2]),"%Y%m%d")

head(df)

dim(df)

uid=df[!duplicated(df[,1]),]

dim(uid)

uid$timedist=Sys.Date()-uid$date

library(dplyr)
uid=uid %>%  mutate(recency = 10-ntile(timedist, 10),
                    freq=ntile(number_of_cds, 10)-1,
                    monetary=ntile(dollar_value, 10)-1)

hist(uid$recency)
hist(uid$freq)
hist(uid$monetary)

uid$rfm=100*uid$recency+10*uid$freq+uid$monetary

hist(uid$rfm)

#Another check
hist(as.numeric(uid$timedist))
hist(uid$number_of_cds)
hist(uid$dollar_value)


uid=uid %>%  mutate(recency = 10-ntile(timedist, 10),
                    freq=ntile(number_of_cds, 10)-1,
                    monetary=findInterval(dollar_value, c(10,30,50,100,125,150,175,200,600)))

hist(uid$monetary)

uid$rfm=100*uid$recency+10*uid$freq+uid$monetary

hist(uid$rfm)
