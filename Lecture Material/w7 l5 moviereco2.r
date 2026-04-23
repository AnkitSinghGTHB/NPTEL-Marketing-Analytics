library(recommenderlab)
data(MovieLense)
hist(getRatings(MovieLense), main="Distribution of ratings", breaks=6)

#Data pre-processing
movies <- as(MovieLense, 'data.frame')
movies$user <- as.numeric(movies$user)
movies$item <- as.numeric(movies$item)

sparse_ratings <- sparseMatrix(i = movies$user, j = movies$item, x = movies$rating, 
                               dims = c(length(unique(movies$user)), length(unique(movies$item))),  
                               dimnames = list(paste("u", 1:length(unique(movies$user)), sep = ""), 
                                               paste("m", 1:length(unique(movies$item)), sep = "")))

real_ratings <- new("realRatingMatrix", data = sparse_ratings)
real_ratings

#User user similarity matrix
#similarity matrix
similarity_users <- similarity(real_ratings[1:25, ], method =  "cosine", which = "users") 
image(as.matrix(similarity_users), main = "User similarity")

#Evaluation object for RMSE checking.
set.seed(1)
e <- evaluationScheme(real_ratings, method="split", train=0.8, given=-5)

# Creation of the model - U(ser) B(ased) C(ollaborative) F(iltering)
Rec.model <- Recommender(real_ratings, method = "UBCF", 
                         param=list(normalize = "center", method="Cosine", nn=25))

#Making predictions 
prediction <- predict(Rec.model, real_ratings[1:25, ], type="ratings")
as(prediction, "matrix")[,1:5]

#Estimating RMSE
set.seed(1)

RMSE.model <- Recommender(getData(e, "train"), method = "UBCF", 
                          param=list(normalize = "center", method="Cosine", nn=25))

prediction <- predict(RMSE.model, getData(e, "known"), type="ratings")

rmse_ubcf <- calcPredictionAccuracy(prediction, getData(e, "unknown"))[1]
rmse_ubcf

#Item-item collaborative Filtering
#Building model
model <- Recommender(real_ratings, method = "IBCF", 
                     param=list(normalize = "center", method="Cosine", k=350))

#Making predictions 
prediction <- predict(model, real_ratings[1:25], type="ratings")
as(prediction, "matrix")[,1:5]

#Estimating RMSE
set.seed(1)

model <- Recommender(getData(e, "train"), method = "IBCF", 
                     param=list(normalize = "center", method="Cosine",k=350))

prediction <- predict(model, getData(e, "known"), type="ratings")

rmse_ubcf <- calcPredictionAccuracy(prediction, getData(e, "unknown"))[1]
rmse_ubcf



#MODEL APPLICATION
real_ratings[610,]
recommended.items.u610<- predict(Rec.model, real_ratings[610,], n=5)
as(recommended.items.u610, "list")

#Reference: https://rpubs.com/robertwsellers/IS643_Project_2