data <- read.csv("Hotel_Review.csv", header=TRUE)

str(data)

library(tm)
data_corpus <- Corpus(VectorSource(data$Review_Content))
print(data_corpus)
inspect(data_corpus[1:10])

corpus_clean <- tm_map(data_corpus, content_transformer(tolower))
corpus_clean <- tm_map(corpus_clean, removeNumbers)

corpus_clean <- tm_map(corpus_clean, removeWords, stopwords())
corpus_clean <- tm_map(corpus_clean, removePunctuation)
corpus_clean <- tm_map(corpus_clean, stripWhitespace)

dataframe <- data.frame(text=sapply(corpus_clean, identity), 
                        stringsAsFactors=F)

# load in the libraries we'll need
library(tidyverse)
library(tidytext)
library(glue)
library(stringr)

a=matrix(0,nrow=dim(dataframe)[1],ncol=11)

for(i in 1:dim(dataframe)[1]){

  tokens <- data_frame(text = dataframe$text[i]) %>% unnest_tokens(word, text)

# get the sentiment from the first text: 
b=as.numeric(tokens %>%
  inner_join(get_sentiments("nrc")) %>% # pull out only sentiment words
  count(sentiment) %>% # count the # of positive & negative words
  spread(sentiment, n, fill = 0) %>% 
 mutate(pos=ifelse(exists("positive"),positive,0),
        neg=ifelse(exists("negative"),negative,0),
        trust=ifelse(exists("trust"),trust,0),
        joy=ifelse(exists("joy"),joy,0),
        antici=ifelse(exists("anticipation"),anticipation,0),
        sur=ifelse(exists("surprise"),surprise,0),
        sad=ifelse(exists("sadness"),sadness,0),
        anger=ifelse(exists("anger"),anger,0),
        fear=ifelse(exists("fear"),fear,0),
        dis=ifelse(exists("disgust"),disgust,0),
        sentiment = pos - neg)) # # of positive words - # of negative owrds
b=tail(b,11)
a[i,]=b
}


data=cbind(data,a)
names(data)[5:15]=c("positive","negative","trust","joy","anticipation","surprise","sadness","anger","fear","disgust","sentiment")

fit=lm(Review_Overall_Rating~sentiment,data=data)

fit1=lm(Review_Overall_Rating~sentiment+trust+joy+anticipation+surprise+
          sadness+anger+fear+disgust,data=data)

library(car)

fit2=lm(Review_Overall_Rating~sentiment+trust+joy+surprise+
          sadness+anger+fear+disgust,data=data)
vif(fit2)
summary(fit2)
