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


## Mock Exam 4 Questions

**Q: [Mock Exam 4] What is the primary purpose of the hash symbol (`#`) in R programming?**
- To define a new variable
- To indicate a comment, making the line non-executable
- To perform a mathematical operation
- To create a new function
E) To mark the end of a code block
**Answer:** To indicate a comment, making the line non-executable

**Q: [Mock Exam 4] Which RStudio pane displays the results of executed commands and provides
immediate feedback?**
- Editor
- Console
- Global Environment
- Files/Plots/Packages/Help
E) Source
**Answer:** Console

**Q: [Mock Exam 4] Which R function is used to generate regular sequences of numbers?**
- `c()`
- `rep()`
- `seq()`
- `length()`
E) `class()`
**Answer:** `seq()`

**Q: [Mock Exam 4] What is the main difference between a Matrix and a Data Frame in R regarding data
types?**
- Matrices can only store character data, while Data Frames can store numeric.
- Matrices are 1-dimensional, Data Frames are 2-dimensional.
- All elements in a Matrix must be of the same data type, while each column in a Data Frame can have
a different data type.
- Data Frames are limited to 100 rows, while Matrices have no size limit.
E) Matrices are used for statistical analysis, Data Frames for plotting.
**Answer:** All elements in a Matrix must be of the same data type, while each column in a Data Frame can have
a different data type.

**Q: [Mock Exam 4] Which `dplyr` function is used to load an installed library into the current R session?**
- `install.packages()`
- `load.library()`
- `library()`
- `get.package()`
E) `require.library()`
**Answer:** `library()`

**Q: [Mock Exam 4] What is the purpose of the `str()` function in R?**
- To create a string variable
- To display the internal structure of an R object
- To concatenate strings
- To convert an object to a string
E) To search for a string pattern
**Answer:** To display the internal structure of an R object

**Q: [Mock Exam 4] What is the primary purpose of a Word Cloud?**
- To perform complex statistical analysis on text data.
- To visually represent text data where the size of each word indicates its frequency or importance.
- To convert text into numerical vectors for machine learning.
- To identify grammatical structures within sentences.
E) To filter out common words from a text corpus.
**Answer:** To visually represent text data where the size of each word indicates its frequency or importance.

**Q: [Mock Exam 4] In text mining, what is a 'Corpus'?**
- A single text document.
- A special data structure used by the `tm` package to store and manage text documents.
- A list of common words to be removed from text.
- A numerical representation of text data.
E) A graphical visualization of word frequencies.
**Answer:** A special data structure used by the `tm` package to store and manage text documents.

**Q: [Mock Exam 4] What is the definition of 'Spam' in the context of spam detection?**
- Legitimate and useful messages.
- Messages containing only numbers.
- Unsolicited or undesirable messages.
- Messages sent from known contacts.
E) Encrypted messages.
**Answer:** Unsolicited or undesirable messages.

**Q: [Mock Exam 4] What is the main goal of Markdown Pricing?**
- To keep prices consistently high to maintain brand image.
- To set a single, fixed price for a product over its entire lifecycle.
- To intentionally lower prices at specific times or periods to attract price-sensitive customers.
- To only sell products in bundles.
E) To match competitor prices exactly.
**Answer:** To intentionally lower prices at specific times or periods to attract price-sensitive customers.

**Q: [Mock Exam 4] Which of the following best describes the 'Global Environment' pane in RStudio?**
- The area where R commands are executed and their output is displayed.
- The area where you write and save your R scripts.
- The pane that lists all active objects (variables, datasets, functions) in your current R session.
- The tab that displays documentation for R functions.
E) The tab for managing R packages.
**Answer:** The pane that lists all active objects (variables, datasets, functions) in your current R session.

**Q: [Mock Exam 4] In R, if you have a numeric vector `a` and you want to extract only those elements that
are greater than 7, which syntax would you use?**
- `a(a > 7)`
- `a[a > 7]`
- `a > 7`
- `filter(a, a > 7)`
E) `select(a, a > 7)`
**Answer:** `a[a > 7]`

**Q: [Mock Exam 4] When combining vectors of different data types (e.g., integer, numeric, character) using
`cbind()` to form a matrix, what happens to the data types in the resulting matrix?**
- The matrix will retain the original data type of each column.
- All elements in the resulting matrix will be coerced to the most 'flexible' data type present (e.g.,
character).
- The operation will result in an error due to incompatible data types.
- The matrix will automatically convert all data to numeric.
E) Only the first vector's data type will be preserved.
**Answer:** All elements in the resulting matrix will be coerced to the most 'flexible' data type present (e.g.,
character).

**Q: [Mock Exam 4] What is the key difference between `mutate()` and `summarise()` functions in `dplyr`?**
- `mutate()` is used for filtering rows, while `summarise()` is for selecting columns.
- `mutate()` adds new variables while preserving the original row count, while `summarise()` reduces
multiple values to a single summary statistic, often reducing the row count.
- `mutate()` works only with numeric data, while `summarise()` works only with character data.
- `summarise()` creates new columns, while `mutate()` aggregates rows.
E) Both functions perform the same action, but `summarise()` is an older version.
**Answer:** `mutate()` adds new variables while preserving the original row count, while `summarise()` reduces
multiple values to a single summary statistic, often reducing the row count.

**Q: [Mock Exam 4] When performing statistical calculations on data that may contain missing values
(`NA`), which argument is crucial to include in functions like `mean()` or `sd()` to ensure
accurate results?**
- `na.handle = TRUE`
- `na.fill = 0`
- `na.rm = TRUE`
- `na.omit = FALSE`
E) `na.replace = MEAN`
**Answer:** `na.rm = TRUE`

**Q: [Mock Exam 4] Which of the following best describes the concept of 'Multicollinearity' in regression
analysis?**
- When the dependent variable has multiple categories.
- When there is a high correlation between independent variables in a regression model.
- When the model includes too many variables, leading to overfitting.
- When the residuals of the model are not normally distributed.
E) When the independent variables are not statistically significant.
**Answer:** When there is a high correlation between independent variables in a regression model.

**Q: [Mock Exam 4] What is the primary distinction between 'Text Mining' and 'Natural Language
Processing (NLP)' as discussed in the lectures?**
- Text Mining only deals with structured data, while NLP deals with unstructured data.
- NLP is a broader field encompassing all text analysis, while Text Mining is a specific technique.
- Text Mining is any process to extract information from text, while NLP specifically considers the
linguistic characteristics of human language.
- NLP is only for spoken language, while Text Mining is for written text.
E) Text Mining is an older concept, replaced entirely by NLP.
**Answer:** Text Mining is any process to extract information from text, while NLP specifically considers the
linguistic characteristics of human language.

**Q: [Mock Exam 4] What is the main purpose of the 'Inverse Document Frequency (IDF)' component in
TF-IDF?**
- To count how often a term appears in a single document.
- To downweight very common words that appear in many documents and upweight rarer, more
distinctive words.
- To convert all words to their root form.
- To remove stopwords from the text.
E) To identify the grammatical role of each word.
**Answer:** To downweight very common words that appear in many documents and upweight rarer, more
distinctive words.

**Q: [Mock Exam 4] What is a 'Document Term Matrix (DTM)'?**
- A matrix where rows represent documents and columns represent unique terms, with cell values
indicating term frequency.
- A matrix used only for numerical data, not text.
- A matrix that stores the grammatical structure of sentences.
- A list of all unique words in a corpus.
E) A matrix that shows the sentiment score of each document.
**Answer:** A matrix where rows represent documents and columns represent unique terms, with cell values
indicating term frequency.

**Q: [Mock Exam 4] Which of the following best describes the 'Naive' assumption in the Naive Bayes
algorithm?**
- It assumes all features are equally important.
- It assumes that features (words) are independent of each other given the class (e.g., spam or ham).
- It assumes the data is normally distributed.
- It assumes there are no missing values in the dataset.
E) It assumes a linear relationship between features and the target variable.
**Answer:** It assumes that features (words) are independent of each other given the class (e.g., spam or ham).

**Q: [Mock Exam 4] What is the primary purpose of 'Negative Correlation of Preferences' in the context of
bundle pricing?**
- It means customers dislike both products in the bundle.
- It indicates that customers are unwilling to pay for any product.
- It is the primary driver for effective bundling, allowing sellers to capture value from both segments by
smoothing out individual WTP fluctuations.
- It suggests that products should always be sold individually.
E) It implies that the demand for one product increases when the price of another decreases.
**Answer:** It is the primary driver for effective bundling, allowing sellers to capture value from both segments by
smoothing out individual WTP fluctuations.

**Q: [Mock Exam 4] In the context of time series analysis, what does the 'Trend (Tt)' component represent?**
- Patterns that repeat over a fixed and known period.
- The unpredictable, random component of the time series.
- The long-term, underlying direction or movement of the time series.
- The impact of external marketing variables like price or promotions.
E) The average value of the series over a short period.
**Answer:** The long-term, underlying direction or movement of the time series.

**Q: [Mock Exam 4] You are analyzing a vector `x` in R that contains both integer and numeric values. If you
convert this vector to a factor and then try to convert it directly to numeric using
`as.numeric(as.factor(x))`, what will be the likely outcome?**
- The original numeric values will be perfectly restored.
- The function will return `NA` values because factors cannot be converted to numeric.
- R will return the internal integer codes that represent the factor levels, not the original numeric values.
- The vector will be converted to a character vector.
E) An error will occur because of mixed data types.
**Answer:** R will return the internal integer codes that represent the factor levels, not the original numeric values.

**Q: [Mock Exam 4] In the hotel review problem, if the dependent variable (Overall Rating) is an ordered
categorical variable (1-5 stars), which regression model is considered more theoretically
appropriate than a simple linear regression (`lm()`)?**
- Multiple Linear Regression
- Logistic Regression
- Ordered Logit Regression (`polr()`)
- Poisson Regression
E) Ridge Regression
**Answer:** Ordered Logit Regression (`polr()`)

**Q: [Mock Exam 4] When dealing with the 'Zero-Frequency Problem' in Naive Bayes, where a particular
feature might have zero occurrences in a category, which technique is used to mitigate it by
ensuring no zero probabilities?**
- Feature Scaling
- Principal Component Analysis
- Laplace Estimator (Add-1 Smoothing)
- Cross-Validation
E) Removing the feature entirely
**Answer:** Laplace Estimator (Add-1 Smoothing)

**Q: [Mock Exam 4] In the context of dynamic pricing for a fixed quantity of goods over multiple periods,
what is the impact of introducing a per-unit production cost on the optimal price points?**
- It has no impact, as dynamic pricing only focuses on revenue maximization.
- It fundamentally alters the optimal price points and the resulting total earnings by shifting the
optimization from maximizing total revenue to maximizing total *profit*.
- It causes all prices to increase uniformly across all periods.
- It simplifies the optimization problem, making it easier to solve.
E) It only affects the demand function, not the pricing strategy.
**Answer:** It fundamentally alters the optimal price points and the resulting total earnings by shifting the
optimization from maximizing total revenue to maximizing total *profit*.

**Q: [Mock Exam 4] In the Coca-Cola new product case study, what was the key finding regarding the
interaction effect between price and advertising spend?**
- Price and ad spend had no significant interaction; their effects were purely additive.
- A high ad spend magnified the sales drop when prices increased, indicating that pricing decisions
cannot be made in isolation from advertising decisions.
- High ad spend always led to higher sales, regardless of price.
- Low ad spend always resulted in higher profits, regardless of price.
E) The interaction effect was only significant for very high prices.
**Answer:** A high ad spend magnified the sales drop when prices increased, indicating that pricing decisions
cannot be made in isolation from advertising decisions.

**Q: [Mock Exam 4] In the context of building a comprehensive Marketing Mix Model in R, what is the
primary purpose of defining `lower` and `upper` bounds for parameters in the `optim`
function?**
- To speed up the optimization process by limiting the search space, but without affecting realism.
- To ensure that optimization results are realistic and interpretable (e.g., lambda between 0 and 1, ad
effects positive), often leading to better model fit.
- To prevent the model from converging to a solution.
- To simplify the model by removing non-significant parameters.
E) To force all parameters to be integers.
**Answer:** To ensure that optimization results are realistic and interpretable (e.g., lambda between 0 and 1, ad
effects positive), often leading to better model fit.

**Q: [Mock Exam 4] What is the 'Recommender Problem' as described in the lecture, specifically regarding
the objectives of a recommendation engine?**
- To only recommend the most popular items to all users.
- To balance recommendations for 'fit' (relevance), 'incrementality' (items users wouldn't find otherwise),
and 'taste expansion' (introducing new items).
- To always recommend items that users have already purchased.
- To minimize the computational cost of generating recommendations, even if it compromises
relevance.

E) To ensure all recommendations are based solely on demographic data.
**Answer:** To balance recommendations for 'fit' (relevance), 'incrementality' (items users wouldn't find otherwise),
and 'taste expansion' (introducing new items).

**Q: [Mock Exam 4] Which of the following best describes the 'Apriori Principle' in the Apriori algorithm?**
- If an itemset is frequent, then none of its subsets can be frequent.
- If an itemset is frequent, then all of its subsets must also be frequent.
- All itemsets must be checked against the minimum support threshold, regardless of their subsets.
- The algorithm prioritizes itemsets with the highest confidence.
E) It states that only 1-itemsets are relevant for market basket analysis.
**Answer:** If an itemset is frequent, then all of its subsets must also be frequent.



## Mock Exam 5 Questions

**Q: [Mock Exam 5] Which RStudio pane displays the results of executed R commands and their output?**
- Editor
- Console
- Global Environment
- Files/Plots/Packages/Help
**Answer:** Console

**Q: [Mock Exam 5] What is the primary purpose of the `#` symbol in R code?**
- To define a new function
- To indicate a mathematical operation
- To add non-executable comments for explanation
- To create a new variable
**Answer:** To add non-executable comments for explanation

**Q: [Mock Exam 5] In R, what is the purpose of the `na.rm = TRUE` argument in functions like `mean()` or
`sd()`?**
- To round the result to the nearest integer
- To include all NA values in the calculation
- To remove NA (Not Available) values before computation
- To replace NA values with zero
**Answer:** To remove NA (Not Available) values before computation

**Q: [Mock Exam 5] What is the key difference between a matrix and a data frame in R regarding data types?**
- A matrix can only store character data, while a data frame can store numeric.
- All elements in a matrix must be of the same data type, while each column in a data frame can have a
different data type.
- A matrix is one-dimensional, while a data frame is two-dimensional.
- Data frames are limited to numeric data, while matrices can store any type.
**Answer:** All elements in a matrix must be of the same data type, while each column in a data frame can have a
different data type.

**Q: [Mock Exam 5] What is the primary function of the `dplyr` package in R?**
- To create interactive plots
- To perform complex statistical modeling
- To efficiently manipulate and analyze data
- To manage R packages
**Answer:** To efficiently manipulate and analyze data

**Q: [Mock Exam 5] Which R function is used to display the first few rows of a data frame, providing a quick
glance at its content?**
- `str()`
- `names()`
- `View()`
- `head()`
**Answer:** `head()`

**Q: [Mock Exam 5] Which of the following best describes 'unstructured data' in the context of Text Mining?**
- Information organized in a pre-defined tabular format.
- Data that is easily searchable and ready for statistical analysis.
- Information not organized in a pre-defined tabular format, such as text or images.
- Numerical data collected from surveys.
**Answer:** Information not organized in a pre-defined tabular format, such as text or images.

**Q: [Mock Exam 5] What is a 'Word Cloud' primarily used for in text analysis?**
- To perform statistical regression on text data.
- To visually represent text data where word size indicates frequency or importance.
- To identify grammatical errors in a document.
- To convert text into numerical vectors for machine learning.
**Answer:** To visually represent text data where word size indicates frequency or importance.

**Q: [Mock Exam 5] What is the primary purpose of removing 'stopwords' during text preprocessing?**
- To convert all words to lowercase.
- To eliminate common words that carry little semantic meaning for analysis.
- To identify proper nouns in the text.
- To combine words with similar meanings.
**Answer:** To eliminate common words that carry little semantic meaning for analysis.

**Q: [Mock Exam 5] What is the main application of the Naive Bayes algorithm discussed in the context of
text mining?**
- Generating word clouds
- Performing complex statistical regressions
- Classifying text, such as spam detection
- Creating interactive data visualizations
**Answer:** Classifying text, such as spam detection

**Q: [Mock Exam 5] Which of the following R code snippets correctly subsets a vector `a` to extract
elements greater than 7?**
- `a[7]`
- `a > 7`
- `a[a > 7]`
- `a[c(1, 2, 3)]`
**Answer:** `a[a > 7]`

**Q: [Mock Exam 5] In `dplyr`, what is the fundamental difference between `mutate()` and `summarise()`?**
- `mutate()` is for character variables, `summarise()` is for numeric variables.
- `mutate()` adds new columns while preserving the original row count, `summarise()` aggregates data
to fewer rows.
- `mutate()` works only with grouped data, `summarise()` works with ungrouped data.
- `mutate()` removes rows, `summarise()` adds rows.
**Answer:** `mutate()` adds new columns while preserving the original row count, `summarise()` aggregates data
to fewer rows.

**Q: [Mock Exam 5] When using `dplyr` for hotel review analysis, if you want to calculate the mean overall
rating for each hotel, which two functions would you primarily use in sequence?**
- `filter()` and `select()`
- `arrange()` and `mutate()`
- `group_by()` and `summarise()`
- `join()` and `slice()`
**Answer:** `group_by()` and `summarise()`

**Q: [Mock Exam 5] According to the lecture, what is the definition of an outlier based on the Z-score
method for detection?**
- Any value that is exactly equal to the mean.
- A value with a Z-score (standardized value) greater than 3 in absolute terms.
- The smallest or largest value in a dataset.
- Any value that is not normally distributed.
**Answer:** A value with a Z-score (standardized value) greater than 3 in absolute terms.

**Q: [Mock Exam 5] What is the primary distinction between Text Mining and Natural Language Processing
(NLP) as described in the lecture?**
- Text Mining is only for structured data, while NLP is for unstructured data.
- Text Mining is a broad technique to extract patterns from any text, while NLP specifically considers
linguistic characteristics of human language.
- NLP is an older technique, while Text Mining is modern.
- Text Mining focuses on grammar, while NLP focuses on word frequency.
**Answer:** Text Mining is a broad technique to extract patterns from any text, while NLP specifically considers
linguistic characteristics of human language.

**Q: [Mock Exam 5] Which concept does TF-IDF address that simple Term Frequency (TF) alone does not,
particularly in a corpus of documents?**
- The grammatical structure of sentences.
- The order of words in a document.
- The varying importance of words across an entire collection of documents, downweighting common
words.
- The emotional tone of words.
**Answer:** The varying importance of words across an entire collection of documents, downweighting common
words.

**Q: [Mock Exam 5] Why are Document Term Matrices (DTMs) typically stored as 'sparse matrices'?**
- To ensure all elements are integers.
- To reduce memory usage and computation time because most elements are zero.
- To allow for non-numeric data types.
- To facilitate conversion to a regular matrix.
**Answer:** To reduce memory usage and computation time because most elements are zero.

**Q: [Mock Exam 5] What is the 'Zero-Frequency Problem' in the Naive Bayes algorithm?**
- When the algorithm predicts zero accuracy.
- When a particular category in the training data has zero occurrences of a feature, leading to a zero
probability.
- When the dataset contains no numerical features.
- When all features have the same frequency.
**Answer:** When a particular category in the training data has zero occurrences of a feature, leading to a zero
probability.

**Q: [Mock Exam 5] In the context of sentiment analysis, what is a 'Median Split' used for?**
- To divide a text into sentences.
- To convert continuous rating scales into binary sentiment labels (positive/negative).
- To calculate the average sentiment score.
- To remove the middle portion of a review.
**Answer:** To convert continuous rating scales into binary sentiment labels (positive/negative).

**Q: [Mock Exam 5] Which `tidytext` function is essential for transforming a text column into multiple rows,
with one word per row, to prepare it for joining with sentiment lexicons?**
- `group_by()`
- `summarise()`
- `unnest_tokens()`
- `mutate()`
**Answer:** `unnest_tokens()`

**Q: [Mock Exam 5] What is the primary purpose of the Variance Inflation Factor (VIF) in regression
analysis, as discussed in the context of sentiment modeling?**
- To measure the overall fit of the model.
- To quantify the severity of multicollinearity among independent variables.
- To determine the statistical significance of individual predictors.
- To identify outliers in the dependent variable.
**Answer:** To quantify the severity of multicollinearity among independent variables.

**Q: [Mock Exam 5] According to the study on review helpfulness, what was the impact of 'polarity'
(sentiment bias) in a review's main text and title on its perceived helpfulness?**
- Higher polarity positively impacted helpfulness.
- Higher polarity negatively impacted helpfulness.
- Polarity had no significant impact on helpfulness.
- Only positive polarity impacted helpfulness, negative did not.
**Answer:** Higher polarity negatively impacted helpfulness.

**Q: [Mock Exam 5] When combining vectors of different data types (e.g., integer, numeric, character) using
`cbind()` to create a matrix, what happens to the data types of the elements in the resulting
matrix?**
- All elements are converted to the most 'flexible' data type present, typically character.
- R automatically converts all elements to numeric.
- The matrix will retain the original data type for each column.
- An error will occur because mixed data types are not allowed in matrices.
**Answer:** All elements are converted to the most 'flexible' data type present, typically character.

**Q: [Mock Exam 5] For a dependent variable that is ordered categorical (e.g., ratings 1-5), which
regression model is considered more theoretically appropriate than linear regression, and
why?**
- `lm()` because it handles all data types equally well.
- `polr()` (Ordinal Logit) because it accounts for the ordered nature of the categories, providing nuanced
insights into non-linear effects.
- `glm()` (Logistic Regression) because it is designed for binary outcomes.
- `randomForest()` because it is a non-parametric model.
**Answer:** `polr()` (Ordinal Logit) because it accounts for the ordered nature of the categories, providing nuanced
insights into non-linear effects.

**Q: [Mock Exam 5] What is the primary purpose of 'Dependency Parsing' in NLP?**
- To count the frequency of words in a document.
- To reduce words to their base form (stemming/lemmatization).
- To analyze the grammatical structure of sentences and identify relationships between words.
- To remove common words (stopwords) from text.
**Answer:** To analyze the grammatical structure of sentences and identify relationships between words.

**Q: [Mock Exam 5] What is the 'Laplace Estimator' (Add-1 Smoothing) used for in the Naive Bayes
algorithm?**
- To speed up the calculation of probabilities.
- To convert continuous variables into categorical ones.
- To mitigate the zero-frequency problem by adding a small constant to all counts, ensuring no zero
probabilities.
- To normalize the feature values between 0 and 1.
**Answer:** To mitigate the zero-frequency problem by adding a small constant to all counts, ensuring no zero
probabilities.

**Q: [Mock Exam 5] In the context of review helpfulness, how did reviews expressing 'low arousal negative
emotions' (like sadness) impact helpfulness, compared to 'high arousal negative emotions'
(like fear)?**
- Both low and high arousal negative emotions made reviews less helpful.
- Low arousal negative emotions made reviews less helpful, while high arousal made them more
helpful.
- Low arousal negative emotions made reviews more helpful, while high arousal made them less
helpful.
- Neither had a significant impact on helpfulness.
**Answer:** Low arousal negative emotions made reviews more helpful, while high arousal made them less
helpful.

**Q: [Mock Exam 5] In Social Network Analysis, an individual who 'bridges' a structural hole is considered
valuable because they:**
- Have the highest number of direct connections in the network.
- Control information flow and facilitate collaboration between otherwise disconnected groups.
- Are isolated from the rest of the network, making them unique.
- Are always the formal leader of an organization.
**Answer:** Control information flow and facilitate collaboration between otherwise disconnected groups.

**Q: [Mock Exam 5] In the Bullwhip Effect game case study, why did the 'good' performing group
surprisingly perform *worse* in Round 2 when communication was allowed, according to
the SNA findings?**
- The communication channels were inefficiently designed.
- The group lacked central figures to guide decision-making.
- A highly influential Chief Manager (V1) likely provided incorrect guidance, which was followed due to
social pressure and hierarchy.
- The group became overconfident and ignored objective data.
**Answer:** A highly influential Chief Manager (V1) likely provided incorrect guidance, which was followed due to
social pressure and hierarchy.

**Q: [Mock Exam 5] When creating an Excel dashboard, what is the crucial step to ensure that a single
slicer filters data across *multiple* PivotTables and their associated Pivot Charts
simultaneously?**
- Ensure all PivotTables are on the same worksheet.
- Apply the slicer to each PivotTable individually.
- Use the 'Report Connections' feature to link the slicer to all relevant PivotTables.
- Group all PivotTables together before inserting the slicer.
**Answer:** Use the 'Report Connections' feature to link the slicer to all relevant PivotTables.

