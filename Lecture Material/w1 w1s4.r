#Starting of Session 4
#Create a dataframe from vectors
fy <- rep(c(1999,2000,2001),3)
company <- c(rep("png",3),rep("hul",3),rep("marico",3)) 
revenue <- c(11234,14567,15698,13456,14321,15643,9876,11546,13456) 
margin <- c(11,13,12,12,12,13,11,9,14)
Data <- data.frame(fy, company, revenue, margin)

library(dplyr)

myresults <- Data %>% group_by(company) %>% mutate(highestMargin = max(margin), lowestMargin = min(margin))

highestProfitMargins <- Data %>% group_by(company) %>% summarise(bestMargin = max(margin))


#ifelse

#loop

#function


