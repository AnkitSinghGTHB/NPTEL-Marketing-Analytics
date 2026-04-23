# Load the libraries
library(arules)
library(datasets)

# Load the data set
data(Groceries)

# Create an item frequency plot for the top 20 items
itemFrequencyPlot(Groceries,topN=20,type="absolute")

# Support: The fraction of which our item set occurs in our dataset.
# Confidence: probability that a rule is correct for a new transaction with items on the left.
# Lift: The ratio by which by the confidence of a rule exceeds the expected confidence. 

# Get the rules
rules <- apriori(Groceries, parameter = list(supp = 0.001, conf = 0.8))

# Show the top 5 rules, but only 2 digits
options(digits=2)
inspect(rules[1:5])

summary(rules) #Summary info of the roles generated

#The most likely rules
rules<-sort(rules, by="confidence", decreasing=TRUE)
options(digits=2)
inspect(rules[1:5])

rules <- apriori(Groceries, parameter = list(supp = 0.001, conf = 0.8,maxlen=3))
rules<-sort(rules, by="confidence", decreasing=TRUE)

# What are customers likely to buy before buying whole milk
# What are customers likely to buy if they purchase whole milk?

rules<-apriori(data=Groceries, parameter=list(supp=0.001,conf = 0.08), 
               appearance = list(default="lhs",rhs="whole milk"),
               control = list(verbose=F))
rules<-sort(rules, decreasing=TRUE,by="confidence")
inspect(rules[1:5])

rules<-apriori(data=Groceries, parameter=list(supp=0.001,conf = 0.15,minlen=2), 
               appearance = list(default="rhs",lhs="whole milk"),
               control = list(verbose=F))
rules<-sort(rules, decreasing=TRUE,by="confidence")
inspect(rules[1:5])