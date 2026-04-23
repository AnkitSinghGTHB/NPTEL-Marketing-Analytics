# Module 4: CRM, Text Mining & Social Network Analysis (Weeks 9-12)

Welcome to Module 4! This is the final stretch. Here we learn how to keep our customers (CRM), how to understand what they are typing in reviews (Text Mining), and how they are connected to each other (Social Networks).

---

## 1. Customer Relationship Management (CRM) & CLV (Week 9)

**Summary:** Figuring out which customers are worth keeping and how much they are worth to the business.

### Customer Lifetime Value (CLV)
CLV is the total total net profit a company makes from any given customer over the time they are associated with the company.

> [!IMPORTANT]
> **The simplified CLV formula for MCQs:**
> $CLV = \frac{\text{Margin} \times \text{Retention Rate}}{1 + \text{Discount Rate} - \text{Retention Rate}}$
> *Margin = Revenue from customer - Cost to serve them.*

**Why calculate CLV?** If a customer's CLV is $500, you know you should NOT spend $600 on advertising just to acquire them. Your Customer Acquisition Cost (CAC) must be lower than CLV!

### Churn Prediction
Churn is when a customer leaves your business (e.g., cancelling a Netflix subscription). 
*   **Predictive Analytics:** We use algorithms (like Logistic Regression) on historical data to find out *who* is likely to churn next month. 
*   Once we identify them, we send them a special offer to stay!

### Brand Switching Model (Markov Chains)
If a customer buys Coke this week, what is the probability they buy Pepsi next week? This is modeled using a **Transition Probability Matrix**. 
*   *MCQ Tip:* The rows in a transition matrix must always sum to 1 (or 100%).

---

## 2. Text Mining & NLP (Week 10-11)

**Summary:** Computers can't read text. Text mining converts words into numbers so the computer can analyze them.

### The Text Mining Process

Before you can analyze text (like a hotel review), you have to clean it:
1.  **Tokenization:** Chopping a sentence into individual words (tokens).
2.  **Lowercasing:** Converting "Great" to "great" so the computer doesn't count them as two different words.
3.  **Removing Stop-words:** Deleting common words that carry no meaning (like "the", "is", "at", "which").
4.  **Stemming / Lemmatization:** Reducing words to their root form (e.g., "running", "ran", "runs" all become "run").

### Document-Term Matrix (DTM)
This is a giant spreadsheet where every row is a document (a review), every column is a word from the entire dictionary, and the cells contain the count of how many times that word appeared in that document.

### TF-IDF (Term Frequency - Inverse Document Frequency)
Just counting words isn't enough. If the word "pizza" appears 10 times in a review, it's important. But if the word "restaurant" appears in *every single review*, it's not a helpful word for telling reviews apart.

> [!TIP]
> **TF-IDF Formula Concept for MCQs:**
> $TF \times IDF$
> *   **TF (Term Frequency):** How often the word appears in *this specific document*. (Higher is better).
> *   **IDF (Inverse Document Frequency):** How rare the word is across *all documents*. (Rarer is better).
> *   **Conclusion:** A word gets a HIGH TF-IDF score if it appears a lot in ONE document, but very rarely in ALL other documents.

### Sentiment Analysis
Figuring out if a text is positive, negative, or neutral.
*   **Lexicon-based:** Using a pre-made dictionary where "Good" = +1, "Awful" = -2. The system just adds up the score of the words in the sentence.
*   **Naive Bayes Classifier:** A probability-based machine learning algorithm widely used for text classification (like spam filtering). It calculates the probability of a review being "Positive" *given* the words it contains, based on Bayes' Theorem.
    *   *Why "Naive"?* Because it makes the "naive" assumption that every word is completely independent of the others (which is grammatically false, but the math still works incredibly well!).

---

## 3. Social Network Analysis (SNA) (Week 12)

**Summary:** Studying the structure of networks (nodes and edges) to find the most important people or "influencers".

*   **Nodes (Vertices):** The people or entities.
*   **Edges (Links):** The connections between them (e.g., friendships on Facebook).

### Centrality Metrics (How to find the Influencer!)

> [!CAUTION]
> NPTEL loves testing if you know the difference between Degree, Closeness, and Betweenness centrality. Memorize these definitions!

1.  **Degree Centrality:** The simple count of how many direct connections a node has. 
    *   *Analogy:* The popular kid in high school who has 500 friends on Facebook.
2.  **Closeness Centrality:** How close is this node to *everyone else* in the network? It calculates the shortest path from this node to all other nodes. 
    *   *Analogy:* The town gossip. They might not have the most direct friends, but they can spread a rumor to the entire town the fastest because they are centrally located.
3.  **Betweenness Centrality:** How often does a node act as a "bridge" along the shortest path between two other nodes?
    *   *Analogy:* A broker or a middleman. If two different groups of friends (who don't know each other) only have YOU in common, you have high betweenness. If you disappear, the network breaks in two!

---

## 🔥 Real NPTEL Assignment Questions Review (Weeks 9-12)

**Week 9 (CRM & CLV):**
*   **What does CLV help measure?** Proportion of purchase, probability of purchase, purchase frequency, and sequence.
*   **Does `bm()` run a generalized linear model?** FALSE. The correct function is `glm()`.
*   **Does Product Life Cycle (PLC) explain churn?** FALSE. (Churn is about *customers* leaving, not products).
*   **What method does Logistic Regression use for the best fit?** Maximum Likelihood.
*   **What does a Pivot table summarize?** Sums and Averages.
*   **Why is Customer Churn Analysis important?** 1. It costs more to acquire new customers. 2. It gives the hard truth about retention. 3. It measures failure in maintaining customers.
*   **What is Customer Lifetime Value?** The revenue of your business, or on your products, during a customer's lifetime.
*   **Is `string.h()` a compact way to display the structure of an R object?** FALSE. The function is `str()`.
*   **What is Logistic regression mainly used for?** Classification.
*   **What do Receiver Operating Characteristic (ROC) curves do?** They characterize the sensitivity/specificity tradeoffs for a binary classifier.

**Week 10 (Text Mining Intro):**
*   **What are possible sources of data for text mining?** Emails, Competitor's blogs, Advertising/marketing, Human resources data. (NOT Sales/Revenue data, because those are numbers, not text!).
*   **What does the Naive Bayes classifier assume?** That every pair of features being classified is independent of each other.
*   **Does Dimension Reduction improve the performance of clustering techniques?** TRUE.
*   **What does `VectorSource()` do in R?** It takes a grouping of texts and makes each element a document within your R workspace.
*   **Is Predictive Analytics the process of deriving high-quality info from text?** FALSE. (That is Text Mining).
*   **What is Natural Language Processing (NLP)?** It is concerned with the interactions between computers and human languages.
*   **Does the `vector()` function collect text documents for text mining?** FALSE. (The function is usually `Corpus()`).
*   **What does AI do with NLP/text analysis?** It systematically identifies, extracts, and quantifies subjective information.

**Week 11 (Sentiment Analysis):**
*   **Does a smaller p-value mean stronger evidence IN FAVOR of the null hypothesis?** FALSE. (A smaller p-value means strong evidence *against* the null hypothesis).
*   **Which lexicon categorizes words in a binary (yes/no) fashion for emotions?** Neither Bing nor AFINN. (The Bing lexicon categorizes as Positive/Negative, AFINN scores them from -5 to 5).
*   **What does the NRC Emotion Lexicon contain?** 8 basic emotions and 2 sentiments.
*   **What is the `sample()` function used for?** Random selection of numbers from a set.
*   **What is a Corpus?** A large and unstructured set of texts.
*   **What is the correct sequence for text mining?** 1. Text analysis and preprocessing, 2. Text transformation, 3. Feature selection, 4. Data mining, 5. Evaluation, 6. Application.
*   **What does the `mutate` function do?** It creates a new variable from a data set.
*   **What is Levenshtein distance?** The minimum number of single-character edits between two words.
*   **What data do Bayes classifiers use?** Training data.

**Week 12 (Social Network Analysis):**
*   **What is the Fruchterman-Reingold algorithm?** An algorithm that considers a force between any two nodes to draw graphs nicely.
*   **Does R software aim to provide interactive visualizations simple enough for end users?** FALSE. (R requires coding knowledge; software like Tableau is for end users).
*   **What do Pivot tables do?** They arrange and rearrange statistics to draw attention to useful information.
*   **Can SNA be used to find the impact of product features on consumer utility?** FALSE. (That is Conjoint Analysis).
*   **What is Data Mining?** The process of extracting knowledge structures from continuous rapid data records.
*   **Which library manipulates graphs/analyzes networks?** `igraph`. (None of the xgraph/pgraph/zgraph options are correct).
*   **Are Ties actors and Nodes relationships?** FALSE. (Nodes are actors, Ties are relationships).
*   **What is an example of a Dyad?** A patient and therapist, a husband and wife. (A pair of nodes).
*   **What is Betweenness Centrality?** It quantifies the number of times a node acts as a bridge along the shortest path between two other nodes.

---

## 🎯 Practice Questions Highlights (Weeks 9-12)

**Week 9:**
*   **What is CLV?** The total amount of profit a company can generate from a customer over their entire relationship with the company.
*   **What does 'lifetime' mean in CLV?** The period during which the customer is actively engaged with the company (not their biological lifetime).
*   **CLV Example:** Maruti car manufacturer creates a service network (insurance, fuel, spare parts) to generate value over the customer's lifetime.

**Week 10:**
*   **What is a major limitation of tokenization?** It severely limits the context (you lose the sentence structure).
*   **What is Inverse Document Frequency (IDF)?** A measure of the general importance of the term. If a word like 'hotel' appears in nearly all reviews, it is less distinctive and has a low IDF.

**Week 11:**
*   **Which algorithm is heavily used for sentiment mining?** Naive Bayes.
*   **Why use text?** To focus on the text part of reviews to see what kind of extra insights can be brought in, beyond just numeric ratings.
*   **Bayes formula basis:** Probability of A given B is probability of A and B divided by probability of B.

**Week 12:**
*   **What is the core of SNA?** Analyzing connections between people for business decision-making. (It is NOT just social media marketing!).
*   **Are relationships always bidirectional?** No. A unidirectional relationship is where perceived strength differs between actors (e.g., Bank teller and customer).
*   **Who coined Social Network Analysis?** J.A. Barnes in 1954.
