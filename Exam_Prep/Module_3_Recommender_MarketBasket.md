# Module 3: Recommender Systems & Market Basket (Weeks 7-8)

Welcome to Module 3! This section is all about suggesting products to customers. You'll learn how Netflix recommends movies (Collaborative Filtering) and how supermarkets decide to put bread next to butter (Market Basket Analysis).

---

## 1. Recommender Systems (Week 7)

**Summary:** Algorithms that suggest relevant items to users.

### The Two Main Types of Recommenders

> [!IMPORTANT]
> A classic MCQ question is asking you to identify which type of filtering is being used in a specific scenario.

1.  **Content-Based Filtering:** Recommends items similar to those the user liked in the past, based on the *attributes* of the item.
    *   *Example:* If you watch an Action movie starring Tom Cruise (like Mission Impossible), it will recommend another Action movie starring Tom Cruise (like Top Gun).
    *   *Pros:* Doesn't need data from other users.
    *   *Cons:* Can trap you in a "filter bubble" (you only see what you already know).

2.  **Collaborative Filtering (CF):** Recommends items based on the preferences of *other similar users*. It literally "collaborates" with other people's data.
    *   *Example:* If User A and User B both like Pizza and Burgers, and User A also likes Tacos, the system will recommend Tacos to User B.
    *   *Pros:* Discovers new interests you didn't know you had!
    *   *Cons:* "Cold Start Problem" - It cannot recommend a brand new movie because nobody has rated it yet!

### Deep Dive into Collaborative Filtering

There are two flavors of Collaborative Filtering:

*   **User-Based CF:** Finds users who are similar to you, and recommends what they liked. ( "People similar to you also bought..." )
*   **Item-Based CF:** Finds items that are frequently bought together by the same users. ( "Customers who bought this item also bought..." - *Famous Amazon strategy*).
    *   *Why Item-Based is often better:* User preferences change rapidly (you might be buying a gift today), but the relationship between items is stable (a toothbrush is always related to toothpaste). Also, usually, there are fewer items than users, making the math faster.

### Distance / Similarity Metrics

To find "similar" users or items, the computer calculates a mathematical distance.
*   **Cosine Similarity:** The most popular metric for Recommender systems. It measures the angle between two vectors of ratings. 1 means exactly the same, 0 means completely different.
*   **Jaccard Similarity:** Used when you only have binary data (Bought = 1, Didn't Buy = 0). It's the Intersection divided by the Union.

---

## 2. Market Basket Analysis / Association Rules (Week 8)

**Summary:** Finding "rules" about which products are bought together in the same shopping cart (basket).

**The Classic Example:** "Diapers and Beer." Supermarkets found that young fathers buying diapers on Friday nights were also buying beer. So, they put them next to each other!

### The Apriori Algorithm

This is the algorithm used to find these association rules. An association rule looks like this:
`{Bread, Butter} => {Milk}`
(Meaning: "If someone buys Bread and Butter, they are likely to buy Milk").

> [!CAUTION]
> You MUST memorize the formulas for Support, Confidence, and Lift. NPTEL will definitely give you a table of transactions and ask you to calculate these!

Let's assume we have **100 total transactions (receipts)** in our store today.

#### 1. Support
**What it means:** How popular is this rule? How often do these items appear *together* in the entire store?
**Formula:** $Support(A \rightarrow B) = \frac{\text{Transactions with BOTH A and B}}{\text{Total Transactions}}$
*Example:* If Bread and Milk are bought together in 20 out of 100 receipts, $Support = 20 / 100 = 0.20$ or 20%.

#### 2. Confidence
**What it means:** If someone *already* has item A in their cart, what is the probability they will add item B?
**Formula:** $Confidence(A \rightarrow B) = \frac{\text{Transactions with BOTH A and B}}{\text{Transactions with JUST A}}$
*Example:* 30 people bought Bread. 20 of those people *also* bought Milk. $Confidence = 20 / 30 = 0.67$ or 67%. 
*Note: Confidence is directional! Confidence of Bread -> Milk is NOT the same as Milk -> Bread.*

#### 3. Lift
**What it means:** Is this rule actually a true connection, or is it just happening by random chance because both items are very popular?
**Formula:** $Lift(A \rightarrow B) = \frac{Confidence(A \rightarrow B)}{Expected Confidence}$  
*(Expected Confidence is simply the Support of B).*
So, $Lift = \frac{Confidence(A \rightarrow B)}{Support(B)}$

**How to interpret Lift for MCQs:**
*   **Lift > 1:** Positive association! Buying A *increases* the chance of buying B. (Put them next to each other!).
*   **Lift = 1:** No association. They are completely independent. Buying A doesn't change the chance of buying B.
*   **Lift < 1:** Negative association! Buying A *decreases* the chance of buying B. (Maybe they are substitutes, like Coke and Pepsi. Don't bundle them!).

### R Implementation Tip
The main package used for Market Basket Analysis in R is `arules`, and the function to find the rules is `apriori()`. When you see this in code, you know it's Market Basket Analysis!

---

## 🔥 Real NPTEL Assignment Questions Review (Weeks 7-8)

**Week 7 (Recommender Systems & ML):**
*   **What is Machine Learning helpful for?** Prediction of user behavior, filtering irrelevant information, and recommendations based on choices.
*   **What are Similarity matrices?** Used in sequence alignment where higher scores are given to more-similar characters.
*   **Does `correlate.test()` test for association?** FALSE. The correct R function is `cor.test()`.
*   **What does `evaluationscheme()` do?** It creates training and testing splits of data.
*   **What is Collaborative Filtering?** A technique that filters items a user might like based on reactions by *similar users*.
*   **What is a Sparse Matrix?** A matrix which contains very few non-zero elements (e.g., a matrix of all users and all Amazon products. Most users have rated 0 products).
*   **What is the first step for analyzing a group of guitarists/singers for similarities?** Clustering.
*   **How does Statistics differ from Machine Learning?** Statistics draws population inferences from a sample, while machine learning finds generalizable predictive patterns.

**Week 8 (Market Basket & RFM):**
*   **What is a Decision Tree?** A decision support tool that uses a tree-like model of decisions and possible consequences.
*   **What is Market Basket Analysis used for?** To increase sales by better understanding customer co-purchasing patterns.
*   **Does `itemplot()` create an item frequency bar plot?** FALSE. The correct function is `itemFrequencyPlot()`.
*   **What is RFM Analysis?** It stands for Recency, Frequency, Monetary value. It helps companies find ways to improve customer spending and take decisions on promotions.
*   **What does Frequency represent?** How often a customer has transacted or interacted with the brand.
*   **How do you find the average purchase amount using RFM?** Monetary divided by Frequency.
*   **What does `read.table()` do?** Reads a file in table format and creates a data frame.
*   **Does `is.date()` convert character objects to date class?** FALSE. The correct function is `as.Date()`.
*   **What does RFM Segmentation allow marketers to do?** Target specific clusters of customers with highly relevant communications.

---

## 🎯 Practice Questions Highlights (Weeks 7-8)

**Week 7:**
*   **Why is e-commerce rising?** Lower cost and wider availability of internet access.
*   **What does "sell deep" mean?** Monetizing the "long tail" with surprising recommendations for incremental sales.
*   **What makes a good recommendation?** Creating a moment of surprise or serendipitous discovery (the "aaha" feeling).

**Week 8:**
*   **Recency (R) in RFM:** Measures how recently a customer made a purchase.
*   **Frequency (F) in RFM:** Indicates how often a customer makes purchases within a given period.
*   **Monetary (M) in RFM:** Represents the total expenditure a customer has made.


## Mock Exam 3 Questions

**Q: [Mock Exam 3] What is the primary purpose of RStudio in R programming?**
- To store large datasets
- To provide a user-friendly interface for R
- To directly perform statistical calculations without R
- To manage R packages only
**Answer:** To provide a user-friendly interface for R

**Q: [Mock Exam 3] In R, what does `NA` represent?**
- Not Applicable
- No Action
- Not Available
- New Assignment
**Answer:** Not Available

**Q: [Mock Exam 3] What is the key difference between a Matrix and a Data Frame in R regarding data types?**
- Matrices are 1-dimensional, Data Frames are 2-dimensional
- All elements in a Matrix must be of the same data type, while Data Frame columns can have different
data types
- Data Frames are only for numeric data
- Matrices can store character data, Data Frames cannot
**Answer:** All elements in a Matrix must be of the same data type, while Data Frame columns can have different
data types

**Q: [Mock Exam 3] Which R function is used to install a new library from CRAN?**
- `load.library()`
- `library()`
- `install.packages()`
- `get.package()`
**Answer:** `install.packages()`

**Q: [Mock Exam 3] Which R function is used to display the first few rows (default 6) of a data frame?**
- `tail()`
- `str()`
- `head()`
- `View()`
**Answer:** `head()`

**Q: [Mock Exam 3] What is the purpose of `barplot()` in R?**
- To create scatter plots
- To visualize categorical data comparisons
- To perform linear regression
- To display data frame structures
**Answer:** To visualize categorical data comparisons

**Q: [Mock Exam 3] What is the definition of "Unstructured Data"?**
- Information organized in a pre-defined tabular format
- Information not organized in a pre-defined tabular format
- Numerical data only
- Data that has been cleaned and processed
**Answer:** Information not organized in a pre-defined tabular format

**Q: [Mock Exam 3] What is the primary purpose of a Word Cloud?**
- To perform statistical regression
- To visually represent text data where word size indicates frequency
- To analyze grammatical structure
- To identify abstract topics in documents
**Answer:** To visually represent text data where word size indicates frequency

**Q: [Mock Exam 3] In text mining, what is a "Corpus"?**
- A type of statistical model
- A special data structure used by the `tm` package to store and manage text documents
- A numerical matrix of word frequencies
- A list of stopwords
**Answer:** A special data structure used by the `tm` package to store and manage text documents

**Q: [Mock Exam 3] In the context of spam detection, what does "Ham" refer to?**
- Unsolicited messages
- Legitimate and useful messages
- Messages with attachments
- Encrypted messages
**Answer:** Legitimate and useful messages

**Q: [Mock Exam 3] Which RStudio pane displays the output of executed R commands and provides
immediate feedback during development?**
- Editor
- Global Environment
- Console
- Files
**Answer:** Console

**Q: [Mock Exam 3] When calculating statistical functions like `mean()` or `sd()` in R, what argument should
be used to ensure `NA` values do not cause the function to return `NA`?**
- `ignore.na = TRUE`
- `na.handle = TRUE`
- `na.rm = TRUE`
- `remove.na = TRUE`
**Answer:** `na.rm = TRUE`

**Q: [Mock Exam 3] If you combine an integer vector, a numeric vector, and a character vector using
`cbind()` to create a matrix, what will be the data type of all elements in the resulting matrix?**
- Integer
- Numeric
- Character
- Logical
**Answer:** Character

**Q: [Mock Exam 3] What is the primary difference between `mutate()` and `summarise()` functions in
`dplyr`?**
- `mutate()` adds new rows, `summarise()` adds new columns
- `mutate()` modifies existing variables, `summarise()` creates new ones
- `mutate()` adds new variables while preserving row count, `summarise()` aggregates to fewer rows
- `mutate()` is for single variables, `summarise()` is for multiple variables
**Answer:** `mutate()` adds new variables while preserving row count, `summarise()` aggregates to fewer rows

**Q: [Mock Exam 3] In the hotel analytics problem, if the `overall_rating` for a hotel is below average, what
is the *next* logical step to identify contributing factors?**
- Immediately increase marketing spend
- Compare average attribute-wise ratings for the hotel against benchmarks
- Change the hotel's location
- Reduce the hotel's price
**Answer:** Compare average attribute-wise ratings for the hotel against benchmarks

**Q: [Mock Exam 3] Why is `beside = TRUE` a crucial argument when using `barplot()` to compare two
hotels across various attributes?**
- It stacks the bars on top of each other
- It displays bars side-by-side for direct comparison
- It changes the color of the bars
- It adds a legend to the plot
**Answer:** It displays bars side-by-side for direct comparison

**Q: [Mock Exam 3] What is the key distinction between Text Mining and Natural Language Processing
(NLP)?**
- Text Mining is only for structured data, NLP for unstructured
- Text Mining is a broad technique, NLP is a specific type considering linguistic characteristics
- NLP is only for machine-generated text
- Text Mining focuses on grammar, NLP on word frequency
**Answer:** Text Mining is a broad technique, NLP is a specific type considering linguistic characteristics

**Q: [Mock Exam 3] What is the primary purpose of Inverse Document Frequency (IDF) in TF-IDF
calculation?**
- To count how often a term appears in a document
- To upweight rare, distinctive words and downweight common words across a corpus
- To remove stopwords
- To identify grammatical relationships between words
**Answer:** To upweight rare, distinctive words and downweight common words across a corpus

**Q: [Mock Exam 3] Why are Document Term Matrices (DTMs) typically stored as sparse matrices?**
- To make them easier to read
- Because most elements are zero, reducing memory usage and computation time
- To hide sensitive information
- To allow for non-numeric data
**Answer:** Because most elements are zero, reducing memory usage and computation time

**Q: [Mock Exam 3] What problem does the "Naive" assumption in Naive Bayes algorithm address?**
- It simplifies calculations by assuming features are independent given the class
- It ensures all features are equally important
- It removes missing values from the dataset
- It converts continuous variables into categorical ones
**Answer:** It simplifies calculations by assuming features are independent given the class

**Q: [Mock Exam 3] In the context of Naive Bayes for text classification, why might converting term
frequencies to binary occurrence features be beneficial?**
- It makes the DTM denser
- It simplifies the model and aligns better with the algorithm's assumptions
- It increases the dimensionality of the data
- It is required for all machine learning models
**Answer:** It simplifies the model and aligns better with the algorithm's assumptions

**Q: [Mock Exam 3] In sentiment analysis, why are adjectives often considered more critical than nouns in
conveying sentiment?**
- Nouns are always stopwords
- Adjectives directly describe the quality or feeling associated with a noun
- Adjectives are easier to count
- Nouns are only used in negative reviews
**Answer:** Adjectives directly describe the quality or feeling associated with a noun

**Q: [Mock Exam 3] The lecture notes state that R infers `integer` for whole number sequences (e.g., `1:10`)
but uses `numeric` for combined lists (e.g., `c()`). What is the primary reason R uses
`numeric` for combined lists in this context?**
- `numeric` is always more memory-efficient
- `numeric` is a safer default, anticipating potential decimal values in combined lists
- `integer` cannot store more than 10 elements
- `c()` function only works with `numeric` types
**Answer:** `numeric` is a safer default, anticipating potential decimal values in combined lists

**Q: [Mock Exam 3] Which statement accurately describes R's internal representation and manipulation of
Factor variables?**
- Factors store character data directly, allowing for easy arithmetic operations
- R stores factors as numeric codes with associated labels (levels), and `as.numeric()` reveals these
internal codes
- Factors are identical to character vectors but use less memory
- `levels()` function is used to convert factors to numeric data for statistical modeling
**Answer:** R stores factors as numeric codes with associated labels (levels), and `as.numeric()` reveals these
internal codes

**Q: [Mock Exam 3] When using the `matrix()` function in R with `nrow` specified but `byrow` not, what is
the default fill order for the matrix?**
- Row-wise
- Column-wise
- Randomly
- Diagonally
**Answer:** Column-wise

**Q: [Mock Exam 3] A marketing analyst needs to calculate the growth rate of revenue for each company
over financial years, where the growth rate for a given year depends on the previous year's
revenue. Which R programming construct is explicitly mentioned as suitable for automating
such an iterative calculation?**
- `mutate()` with `group_by()`
- `summarise()` with `group_by()`
- A `for` loop
- The `ifelse()` function
**Answer:** A `for` loop

**Q: [Mock Exam 3] In the hotel analytics problem, the lecture notes highlight that `Date of Review` is
initially a `factor` variable. What is the significance of this observation for future analysis?**
- It means the date is already in a perfect format for time-series analysis
- It indicates a potential need for data type conversion (e.g., to character then to date) for proper
time-series analysis
- Factor variables are always preferred for date information in R
- It signifies that the `Date of Review` is a categorical variable and cannot be used in any numerical
analysis
**Answer:** It indicates a potential need for data type conversion (e.g., to character then to date) for proper
time-series analysis

**Q: [Mock Exam 3] In the context of the `polr()` (Ordinal Logit) model for predicting
`Review_Overall_Rating` (1-5 scale), what is the primary reason this model is considered
more theoretically appropriate than `lm()` (Linear Regression)?**
- `polr()` is faster to compute
- `lm()` cannot handle multiple independent variables
- The dependent variable is ordered categorical, making `polr()` suitable for non-linear effects
- `polr()` automatically handles missing values
**Answer:** The dependent variable is ordered categorical, making `polr()` suitable for non-linear effects

**Q: [Mock Exam 3] What is the primary purpose of Lemmatization/Stemming in the NLP preprocessing
pipeline?**
- To remove common words like "the" and "is"
- To identify the grammatical role of each word
- To reduce words to their base or root form to standardize analysis and accurately count frequencies
- To convert text into a bag-of-tokens
**Answer:** To reduce words to their base or root form to standardize analysis and accurately count frequencies

**Q: [Mock Exam 3] What is the core limitation of simple tokenization that Dependency Parsing aims to
address?**
- It cannot handle numerical data
- It loses all information about word order and grammatical context
- It is computationally too expensive
- It only works for English text
**Answer:** It loses all information about word order and grammatical context

