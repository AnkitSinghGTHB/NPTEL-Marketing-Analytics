data <- read.csv("Hotel_Review.csv", header=TRUE)

str(data)

data$Review_Overall_Rating=ifelse(data$Review_Overall_Rating>median(data$Review_Overall_Rating),1,0)
data$Review_Overall_Rating = factor(data$Review_Overall_Rating)
table(data$Review_Overall_Rating)

library(tm)
data_corpus <- Corpus(VectorSource(data$Review_Content))
print(data_corpus)
inspect(data_corpus[1:10])

corpus_clean <- tm_map(data_corpus, content_transformer(tolower))
corpus_clean <- tm_map(corpus_clean, removeNumbers)

corpus_clean <- tm_map(corpus_clean, removeWords, stopwords())
corpus_clean <- tm_map(corpus_clean, removePunctuation)
corpus_clean <- tm_map(corpus_clean, stripWhitespace)
data_dtm <- DocumentTermMatrix(corpus_clean)

a=sample(1:942,660,replace=FALSE)

data_train <- data[a, ]
data_test <- data[-a, ]

data_dtm_train <- data_dtm[a, ]
data_dtm_test <- data_dtm[-a, ]

data_corpus_train <- corpus_clean[a]
data_corpus_test <- corpus_clean[-a]

prop.table(table(data_train$Review_Overall_Rating))
prop.table(table(data_test$Review_Overall_Rating))

library(wordcloud)
wordcloud(data_corpus_train, min.freq = 30)
wordcloud(data_corpus_train, min.freq = 30, random.order = FALSE)


high <- subset(data_train, Review_Overall_Rating == "1")
low <- subset(data_train, Review_Overall_Rating == "0")

wordcloud(high$Review_Content, max.words = 40, scale = c(3, 0.5))
wordcloud(low$Review_Content, max.words = 40, scale = c(3, 0.5), colors = brewer.pal(3,"Blues"))

findFreqTerms(data_dtm_train, 5)

data_dict <- c(findFreqTerms(data_dtm_train, 5))
data_dtm_train <- DocumentTermMatrix(data_corpus_train, list(dictionary = data_dict))
data_dtm_test <- DocumentTermMatrix(data_corpus_test, list(dictionary = data_dict))

# convert counts to a factor
convert_counts <- function(x) {
  x <- ifelse(x > 0, 1, 0)
  x <- factor(x, levels = c(0, 1), labels = c("No", "Yes"))
}

# apply() convert_counts() to columns of train/test data
data_dtm_train <- apply(data_dtm_train, 2, convert_counts)
data_dtm_test <- apply(data_dtm_test, 2, convert_counts)

## Step 3: Training a model on the data ----
library(e1071)
data_classifier <- naiveBayes(data_dtm_train, data_train$Review_Overall_Rating)
names(data_classifier)

data_classifier$tables[1:2]

## Step 4: Evaluating model performance ----
data_test_pred <- predict(data_classifier, data_dtm_test)
library(gmodels)
CrossTable(data_test_pred,data_test$Review_Overall_Rating,prop.chisq = FALSE,
           dnn = c('predicted', 'actual'))