#Reference: https://www.r-bloggers.com/churn-analysis-part-1-model-selection/
#Customer churn analysis

#to manipulate data
if (!require("tidyverse")) install.packages("tidyverse")
library("tidyverse")
db_churn = read_csv("churn.csv")

#To see variables structure 
str(db_churn)

db_churn$SeniorCitizen = as.factor(db_churn$SeniorCitizen)
summary(db_churn)

if (!require("janitor")) install.packages("janitor")
library("janitor")
prop = tabyl(db_churn$Churn)
prop

n_NA = db_churn %>%
  filter(is.na(TotalCharges)) %>%
  select(Churn)
#The next line give the percentage of missing values in our dataset
#100*nrow(n_NA)/nrow(db_churn)

#11 NA, that 0.16% of our database and none of them decode to churn
db_churn = db_churn %>%
  filter(!is.na(TotalCharges))

#data transformation
hist(db_churn$MonthlyCharges)
hist(db_churn$TotalCharges)
hist(db_churn$tenure)

normalize = function(x) {
  result = (x - min(x, na.rm = TRUE)
  ) / (max(x, na.rm = TRUE) - min(x, na.rm = TRUE))
  return(result)
}

db_churn2=data.frame(db_churn)
db_churn2$TotalCharges=normalize(db_churn2$TotalCharges)
db_churn2$MonthlyCharges=normalize(db_churn2$MonthlyCharges)
db_churn2$tenure=normalize(db_churn2$tenure)

for(i in c(1:5,7:16))db_churn2[,i]=ifelse(db_churn2[,i]=="No internet service", "No", db_churn2[,i])
for(i in c(1:5,7:16))db_churn2[,i]=ifelse(db_churn2[,i]=="No phone service", "No", db_churn2[,i])
for(i in c(1:5,7:16))db_churn2[,i]=as.factor(db_churn2[,i])

#Break into training and testing

if (!require("caret")) install.packages("caret")
library("caret")
set.seed(7)
trainId = createDataPartition(db_churn2$Churn, 
                              p=0.7, list=FALSE,times=1)

db_train = db_churn2[trainId,]
db_test = db_churn2[-trainId,]


#Decision Tree Model
if (!require("rpart")) install.packages("rpart")
library("rpart")
if (!require("rpart.plot")) install.packages("rpart.plot")
library("rpart.plot")

tree = rpart(Churn ~., data = db_train[,-1], method="class")
rpart.plot(tree)

#Random Forest Model
if (!require("randomForest")) install.packages("randomForest")
library("randomForest")

ctrl = trainControl(method = "cv", number=5, 
                    classProbs = TRUE, summaryFunction = twoClassSummary)

model.rf = train(Churn ~., data = db_train[,-1],
                 method = "rf",
                 ntree = 75,
                 tuneLength = 5,
                 metric = "ROC",
                 trControl = ctrl)

model.rf

#LOGISTIC REGRESSION
db_train$ChurnNum = ifelse(db_train$Churn == "Yes",1,0)

good_model = step(glm(ChurnNum ~.,data = db_train[,-c(1,21)], 
                      family=binomial(link='logit')), 
                  direction="both")

summary(good_model)

#TESTING
db_test$ChurnNum  = ifelse(db_test$Churn == "Yes", 1, 0)

if (!require("ROSE")) install.packages("ROSE")
library("ROSE")
pred_tree = predict(tree, db_test[,-1], type = c("prob"))[,2]

pred_rf = predict(object=model.rf, db_test[,-1], type='prob')[,2]

pred_logistic = predict(good_model, db_test, type="response")

roc_tree = roc.curve(response = db_test$ChurnNum, pred_tree, 
                     col = "blue")
roc_rf = roc.curve(response = db_test$ChurnNum, pred_rf, 
                   col = "red", add.roc=TRUE)
roc_logistic = roc.curve(response = db_test$ChurnNum, pred_logistic, 
                         col = "green", add.roc=TRUE)

