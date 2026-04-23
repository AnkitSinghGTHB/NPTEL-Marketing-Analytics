termMatrix <- read.csv("club.csv",sep=" ",header=FALSE)
termMatrix <- as.matrix(termMatrix[,-35])
row.names(termMatrix)=colnames(termMatrix)

library(igraph)
# build a graph from the above matrix
g <- graph.adjacency(termMatrix, weighted=T, mode = c("undirected"))
# remove loops
g <- simplify(g)
# set labels and degrees of vertices
V(g)$label <- V(g)$name
V(g)$degree <- degree(g)

# set seed to make the layout reproducible
set.seed(3952)
layout1 <- layout.fruchterman.reingold(g)
plot(g, layout=layout1)

plot(g, layout=layout.kamada.kawai)
tkplot(g, layout=layout.kamada.kawai)

#Make it better

V(g)$label.cex <- 2.2 * V(g)$degree / max(V(g)$degree)+ .2
V(g)$label.color <- rgb(0, 0, .2, .8)
V(g)$frame.color <- NA
E(g)$width <- E(g)$weight

# plot the graph in layout1
plot(g, layout=layout1)
tkplot(g, layout=layout.kamada.kawai)
