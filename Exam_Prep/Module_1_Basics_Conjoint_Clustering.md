# Module 1: Basics, Conjoint Analysis & Clustering (Weeks 1-3)

Welcome to Module 1! This module covers the foundational aspects of Marketing Analytics. We will look at Introduction to R, Preference Measurement (Conjoint Analysis), and Customer Segmentation (Cluster Analysis). 

Think of this as learning how to find out **what customers want** and **how to group them together**.

---

## 1. Introduction to Marketing Analytics & R Basics (Week 1)

**Summary:** Marketing Analytics is about using data to drive marketing decisions. R is the programming language we use to do this.

### Key Concepts

*   **Marketing Analytics:** Not just reporting (what happened?), but predicting (what will happen?) and prescribing (what should we do?).
*   **Data Types:**
    *   **Nominal:** Categories with no order (e.g., Colors: Red, Blue, Green).
    *   **Ordinal:** Categories with a set order (e.g., Rankings: 1st, 2nd, 3rd or "Satisfied", "Neutral", "Unsatisfied").
    *   **Interval:** Numeric scale with equal distances but no "true zero" (e.g., Temperature in Celsius).
    *   **Ratio:** Numeric scale with a true zero (e.g., Sales in dollars, age).

### R Programming Gotchas for MCQs
*   **Assignment:** In R, we use `<-` to assign variables (e.g., `x <- 5`).
*   **Data Frames:** The most common data structure in R for tabular data. It's like an Excel spreadsheet.
*   **Reading Data:** `read.csv("filename.csv")` is used to import data.
*   **Summary:** `summary(data)` gives you the min, max, median, mean, etc., for numerical columns.
*   **Linear Regression (`lm()`):** The function to fit a linear model is `lm(y ~ x, data)`. 

---

## 2. Conjoint Analysis (Week 2)

**Summary:** Conjoint analysis is a statistical technique used to determine how people value different attributes (features, functions, benefits) that make up an individual product or service.

**The "Pizza" Example:**
Imagine you are selling a pizza. It has attributes:
1.  **Crust:** Thin, Thick, Cheese-burst
2.  **Topping:** Pepperoni, Veggie, Extra Cheese
3.  **Price:** $10, $15, $20

Instead of asking a customer, "Do you like thick crust?" and "Do you want to pay $10?", you show them complete pizzas: 
*   "Would you prefer a *Thick Crust Pepperoni Pizza for $15* OR a *Thin Crust Veggie Pizza for $10*?"

By seeing which whole pizzas they choose, we can mathematically calculate the hidden "value" they place on each individual part (crust, topping, price).

### Key Terms to Memorize
*   **Attributes:** The characteristics of the product (e.g., Crust, Price).
*   **Levels:** The specific options for an attribute (e.g., Thin, Thick).
*   **Profiles / Concepts:** The complete hypothetical product shown to the customer (e.g., Thick Crust + Pepperoni + $15).
*   **Part-Worth Utilities:** The secret sauce! This is the numerical value or "utility" a customer gets from a specific level (e.g., getting Thick Crust gives +5 utility, $20 gives -10 utility). 

### Traditional Conjoint vs. Choice-Based Conjoint (CBC)

> [!IMPORTANT]
> NPTEL loves to ask about the difference between these two!

*   **Traditional (Ratings-based) Conjoint:** The customer rates or ranks the profiles on a scale of 1-10. 
    *   *Example:* "Rate this Thick Crust Pepperoni $15 pizza from 1 to 10."
    *   *R Implementation:* Uses basic linear regression (`lm()`). The rating is the dependent variable (Y), and the attributes are dummy variables (X's).
*   **Choice-Based Conjoint (CBC):** The customer is given a set of options (a choice set) and simply picks their favorite, or chooses "None".
    *   *Example:* "Which of these 3 pizzas do you buy?"
    *   *Why it's better:* It mimics real-world shopping behavior. When you are on Amazon, you don't rate products 1-10 to decide; you just click "Buy" on one.
    *   *R Implementation:* Uses **Multinomial Logit Models (MNL)**. It calculates the probability of choosing an item.

### MCQ Tips for Conjoint
1.  **Calculating Total Utility:** To find the total utility of a product, simply **ADD** the part-worth utilities of its levels. 
2.  **Dummy Variable Trap:** If an attribute has 3 levels (e.g., Red, Blue, Green), R only estimates coefficients for 2 of them. The 3rd one is the "baseline" (utility = 0).
3.  **Relative Importance:** Which attribute is most important to the customer? Calculate the range of part-worths for each attribute (Max part-worth minus Min part-worth). The attribute with the biggest range is the most important!

---

## 3. Cluster Analysis & Segmentation (Week 3)

**Summary:** Cluster analysis is an unsupervised machine learning technique used to group similar data points together. In marketing, this is called **Customer Segmentation**.

**The "Gym Membership" Example:**
You own a gym. You have data on your customers' age, income, and hours spent working out. You want to create groups.
*   Cluster 1: "The Bodybuilders" (Young, spend 10 hours a week, moderate income).
*   Cluster 2: "The Wealthy Executives" (Older, spend 2 hours a week, high income).
*   Cluster 3: "The Cardio Class Moms" (Middle-aged, spend 4 hours a week, moderate income).
Now you can target ads specifically to each group!

### K-Means Clustering (The main algorithm)

How does it work? 
1.  **Choose K:** You tell the computer how many clusters (groups) you want (e.g., K=3).
2.  **Place Centroids:** The computer randomly drops 3 "center points" (centroids) on your data map.
3.  **Assign:** Every customer is assigned to their nearest centroid.
4.  **Move:** The centroid moves to the actual physical center of its new group.
5.  **Repeat:** Steps 3 & 4 repeat until the centroids stop moving.

> [!WARNING]
> **Data Normalization / Scaling:**
> Before running K-Means, you **MUST** scale or standardize your data! 
> Why? If one variable is Income (ranges from $20,000 to $100,000) and another is Age (ranges from 18 to 65), the computer will think Income is way more important just because the numbers are bigger. Scaling puts everything on an equal playing field. 
> *In R, this is done using the `scale()` function.*

### Hierarchical Clustering

Instead of starting with K groups, Hierarchical Clustering builds a tree (a **Dendrogram**).
*   **Agglomerative (Bottom-Up):** Starts with every single customer as their own cluster. It then finds the two most similar customers and merges them. It repeats this until everyone is in one giant cluster.
*   **Divisive (Top-Down):** Starts with everyone in one giant cluster and splits them up.

**How to read a Dendrogram:**
You cut the tree horizontally. The number of vertical lines you intersect is the number of clusters you get.

### K-Means vs. Hierarchical

| Feature | K-Means | Hierarchical |
| :--- | :--- | :--- |
| **Pre-defining K?** | Must specify K in advance | Don't need to specify K in advance |
| **Speed** | Very fast for large datasets | Very slow for large datasets |
| **Output** | Just the group assignments | A visual tree (Dendrogram) |

### MCQ Tips for Clustering
1.  **Unsupervised Learning:** Clustering is unsupervised. There is no "target" or "Y" variable we are trying to predict. We are just exploring the data.
2.  **Distance Metric:** The most common way to measure similarity (how close two customers are) is **Euclidean Distance** (straight line distance).
3.  **The Elbow Method:** How do you choose the right 'K' in K-means? You plot the "Within-Cluster Sum of Squares (WSS)" against the number of clusters. The graph looks like an arm. You pick the K where the graph bends (the "elbow"). This is the point of diminishing returns.
4.  **R function:** `kmeans(data, centers = 3)` is the standard R function for K-means.

---

## 🔥 Real NPTEL Assignment Questions Review (Weeks 1-3)

Here are actual questions from past assignments that you should memorize. They reveal exactly how NPTEL tests these concepts.

**Week 1 (R Basics & Intro):**
*   **What does `is.na()` do in R?** It finds missing values. (TRUE)
*   **What is the output of `mode(c("a", "b"))`?** Character. 
*   **How do you find the maximum value excluding missing values?** `max(x, na.rm=TRUE)`
*   **Is a Matrix a 3D rectangular data set?** FALSE. A matrix is strictly 2-Dimensional.
*   **What does the `library()` function do?** It calls the location where packages are stored.
*   **Are "Strings" an object in R?** No! (Calls, Expressions, and Names are objects, but "Strings" is not an official base object type in this context).
*   **What does Descriptive Analysis do?** It tells about the **Past** (what happened).

**Week 2 (Conjoint & Pricing Basics):**
*   **Does Choice-Based Conjoint (CBC) use linear regression?** FALSE. (It uses Multinomial Logit Models).
*   **Do "Wants" refer to things we must have to survive?** FALSE. (Those are *Needs*. Wants are desires).
*   **Can conjoint analysis lead to heuristic-based responses?** YES.
*   **What does a z-score measure?** Exactly how many standard deviations above or below the mean a data point is.
*   **What does variance measure?** How far each number in the set is from the mean.
*   **What is the `str()` function?** It displays the internal structure of an R object.
*   **What are Beta coefficients?** Estimates from regression that have been *standardized* so variances of variables are 1.

**Week 3 (Segmentation, Targeting, Positioning):**
*   **What is the correct sequence?** 1. Segmentation (Divide), 2. Targeting (Find profitable ones), 3. Positioning (Resonate with them). -> **STP**!
*   **Is region-based segmentation a type of Demographic segmentation?** FALSE. (It is Geographic).
*   **What are Psychographics?** Personality, emotions, hobbies, lifestyle, risk aversion.
*   **Is Market Segmentation the act of designing the offering's image?** FALSE. (That is the definition of Positioning).
*   **What does `hcluster()` do?** It is the command used for hierarchical clustering.
*   **Do marketers consider religious/political beliefs?** YES.
*   **Is "Point of Differentiation" important?** Yes, it is the way goods/services differ from competitors.

---

## 🎯 Practice Questions Highlights (Weeks 1-3)

**Week 1:**
*   **Why choose R over Excel?** R handles large data sizes (>6 lakh rows) where Excel becomes limited, and it's open-source.
*   **What is R more suited for?** R is more suited for research-oriented work, whereas Python is often used for software deployment.
*   **How does RStudio compare to R's UI?** RStudio's UI is generally considered more intuitive and user-friendly with more options.

**Week 2:**
*   **What is the goal of Conjoint?** To identify what consumers want by breaking options into combinations of multiple attributes.
*   **How is net consumer surplus defined?** Utility in monetary terms minus Price.
*   **What is the pricing dilemma?** Increasing value increases cost -> increases price -> reduces demand.

**Week 3:**
*   **Why is segmentation needed?** It is difficult to cater to everyone at once, requiring manageable groups.
*   **What is the ideal segment?** People within the group are similar to each other, and different from people in other groups.
*   **The "Lukewarm Tea" example:** A 'middle path' offering often fails because it doesn't satisfy the distinct preferences of any specific segment.

---

## 🛠️ Missing Details / Edge Cases (Cross-Verified from Practice Sets)

*I ran an algorithm to find topics present in the 3,000+ practice questions that were missing here. The missing items were mostly hyper-specific R coding trivia:*

*   **Vectors in R:** The lecturer analogizes a vector in R to **one column of an Excel spreadsheet**. Even if a variable contains only *one* value, it is still technically considered a vector.
*   **Console Output:** If you type `a = 0` and hit enter, nothing happens in the console. Why? Because the command assigned a value but didn't explicitly request to print it.
*   **F-statistic significance:** In a linear regression (`lm`), if the F-statistic has a tiny p-value (e.g., `2.2e-16`), it means the model is highly significant (at least one independent variable explains the dependent variable).


## Mock Exam 1 Questions

**Q: [Mock Exam 1] What is the primary purpose of RStudio?**
- To store large datasets
- To provide a user-friendly interface for R
- To replace Microsoft Excel
- To manage hardware resources
**Answer:** To provide a user-friendly interface for R

**Q: [Mock Exam 1] Which RStudio pane displays the output of executed R commands?**
- Editor
- Global Environment
- Console
- Files
**Answer:** Console

**Q: [Mock Exam 1] What symbol is used to denote a comment in R code?**
- //
- --
- #
- /* */
**Answer:** #

**Q: [Mock Exam 1] What is the key difference between a Matrix and a Data Frame in R regarding data types?**
- Matrices can store only numeric data, while Data Frames can store any data type.
- All elements in a Matrix must be of the same data type, while each column in a Data Frame can have
a different data type.
- Data Frames are 1-dimensional, while Matrices are 2-dimensional.
- Matrices are used for text, Data Frames for numbers.
**Answer:** All elements in a Matrix must be of the same data type, while each column in a Data Frame can have
a different data type.

**Q: [Mock Exam 1] Which `dplyr` function is used to add new variables or transform existing ones while
preserving the original dataset's row count?**
- summarise()
- group_by()
- mutate()
- filter()
**Answer:** mutate()

**Q: [Mock Exam 1] When performing statistical calculations in R with potentially missing values, which
argument is crucial to ensure accurate results?**
- na.omit = TRUE
- remove.na = TRUE
- na.rm = TRUE
- ignore.na = TRUE
**Answer:** na.rm = TRUE

**Q: [Mock Exam 1] What is 'unstructured data'?**
- Information organized in a pre-defined tabular format.
- Information not organized in a pre-defined tabular format, such as text or images.
- Numerical data ready for statistical analysis.
- Data stored in a database.
**Answer:** Information not organized in a pre-defined tabular format, such as text or images.

**Q: [Mock Exam 1] What is the primary purpose of the `tm_map` function in R's `tm` package?**
- To create a Document Term Matrix.
- To apply various cleaning steps to a text corpus.
- To calculate TF-IDF scores.
- To visualize word clouds.
**Answer:** To apply various cleaning steps to a text corpus.

**Q: [Mock Exam 1] What is the main advantage of using the NRC Lexicon over the Bing Lexicon in
sentiment analysis?**
- NRC is simpler and only classifies words as positive or negative.
- NRC provides a continuous sentiment score from -5 to +5.
- NRC categorizes words into positive/negative sentiment and 8 basic emotions, offering
multi-dimensional insights.
- NRC is specifically designed for Indian English.
**Answer:** NRC categorizes words into positive/negative sentiment and 8 basic emotions, offering
multi-dimensional insights.

**Q: [Mock Exam 1] In the context of the Naive Bayes algorithm for spam detection, what problem does the
Laplace Estimator (Add-1 Smoothing) address?**
- Overfitting to the training data.
- The zero-frequency problem, where a feature has zero occurrences in a category.
- Multicollinearity between features.
- Handling continuous variables.
**Answer:** The zero-frequency problem, where a feature has zero occurrences in a category.

**Q: [Mock Exam 1] In Social Network Analysis (SNA), what does a 'node' typically represent?**
- A connection between entities
- An individual entity within a network
- The strength of a relationship
- A gap in the network
**Answer:** An individual entity within a network

**Q: [Mock Exam 1] What is the primary purpose of a 'slicer' in an Excel dashboard?**
- To create new data tables.
- To perform complex calculations.
- To provide an interactive, visual filter for data.
- To generate static reports.
**Answer:** To provide an interactive, visual filter for data.

**Q: [Mock Exam 1] In the Bullwhip Effect game case study, what unexpected outcome was observed in
Group 2 after communication was allowed?**
- Their performance improved significantly, as expected.
- Their performance remained unchanged.
- Their performance deteriorated, despite having access to more information.
- They achieved perfect coordination and zero costs.
**Answer:** Their performance deteriorated, despite having access to more information.

**Q: [Mock Exam 1] What is the key advantage of Conjoint Analysis over directly asking customers what
features they prefer?**
- It is less expensive to implement.
- It forces consumers to make realistic trade-offs, mimicking real-world purchasing decisions.
- It can be used for products that already exist in the market.
- It provides qualitative insights into consumer emotions.
**Answer:** It forces consumers to make realistic trade-offs, mimicking real-world purchasing decisions.

**Q: [Mock Exam 1] In the hotel review analysis, which attribute was found to be the most important driver
of overall rating?**
- Location
- Cleanliness
- Value for Money
- Service
**Answer:** Value for Money

**Q: [Mock Exam 1] What does the 'none of these' option in Choice-Based Conjoint (CBC) analysis help to
establish?**
- The most preferred product configuration.
- A 'cut-off utility' or threshold below which consumers are unwilling to buy.
- The demographic profile of non-buyers.
- The interaction effects between attributes.
**Answer:** A 'cut-off utility' or threshold below which consumers are unwilling to buy.

**Q: [Mock Exam 1] When performing individual-level regressions in Conjoint Analysis, what is the purpose
of 'significance filtering'?**
- To remove outliers from the dataset.
- To ensure that only statistically reliable preferences contribute to a consumer's profile in the
preference matrix.
- To combine similar attribute levels into one.
- To normalize the part-worth utilities.
**Answer:** To ensure that only statistically reliable preferences contribute to a consumer's profile in the
preference matrix.

**Q: [Mock Exam 1] According to the lecture, which type of data is prioritized for *initial* market
segmentation in modern marketing analytics?**
- Geographic data
- Demographic data
- Psychographic data
- Behavioral data
**Answer:** Behavioral data

**Q: [Mock Exam 1] What is the primary purpose of the 'elbow method' (often using a scree plot) in cluster
analysis?**
- To visualize the dendrogram.
- To determine the optimal number of clusters (k).
- To calculate Euclidean distance.
- To perform factor analysis.
**Answer:** To determine the optimal number of clusters (k).

**Q: [Mock Exam 1] What is the difference between a Point of Parity (POP) and a Point of Difference (POD)
in positioning?**
- POP makes a brand unique, while POD establishes its legitimacy.
- POP establishes a brand's legitimacy, while POD creates competitive advantage.
- POP is about price, while POD is about quality.
- POP is for new products, while POD is for established products.
**Answer:** POP establishes a brand's legitimacy, while POD creates competitive advantage.

**Q: [Mock Exam 1] What is the main objective of 'skimming pricing' strategy?**
- To set a single, low price to capture maximum market share quickly.
- To maximize total revenue by gradually lowering prices over time to capture different customer
segments.
- To match competitor prices exactly.
- To sell products only in bundles.
**Answer:** To maximize total revenue by gradually lowering prices over time to capture different customer
segments.

**Q: [Mock Exam 1] What is the significance of the 'coefficient of innovation (p)' in the Bass Diffusion
Model?**
- It represents the rate at which potential adopters purchase due to word-of-mouth.
- It reflects the maximum possible number of adopters in the market.
- It represents the impact of external influences and the eagerness of innovators, vital for early success.
- It measures the decay rate of product popularity.
**Answer:** It represents the impact of external influences and the eagerness of innovators, vital for early success.

**Q: [Mock Exam 1] What is the primary purpose of an 'Adstock' model in marketing mix modeling?**
- To measure the immediate sales impact of an advertisement.
- To capture the long-term, carryover effect of past advertising on current sales.
- To determine the optimal price for a product.
- To calculate the cost-per-click for digital ads.
**Answer:** To capture the long-term, carryover effect of past advertising on current sales.

**Q: [Mock Exam 1] In the Coca-Cola case study, what did the interaction model (`sales ~ price * ad_spend`)
reveal about pricing and advertising decisions?**
- Price and ad spend had independent effects on sales.
- The impact of price on sales was significantly different depending on the ad spend level.
- Higher ad spend always led to higher sales, regardless of price.
- Price had no significant impact on sales.
**Answer:** The impact of price on sales was significantly different depending on the ad spend level.

**Q: [Mock Exam 1] Which type of collaborative filtering is generally more scalable for platforms with a very
large number of users and fewer items?**
- User-Based Collaborative Filtering (UCF)
- Item-Based Collaborative Filtering (ICF)
- Content-Based Recommendation
- Cluster Models
**Answer:** Item-Based Collaborative Filtering (ICF)

**Q: [Mock Exam 1] In RFM analysis, why are customers with the most recent purchases given the highest
Recency score?**
- They are typically less engaged and responsive.
- They are often more engaged, more responsive to current promotions, and more likely to make
another purchase.
- They represent the highest total monetary value.
- They indicate customer loyalty over a long period.
**Answer:** They are often more engaged, more responsive to current promotions, and more likely to make
another purchase.

**Q: [Mock Exam 1] What does a 'Lift' value greater than 1 in Market Basket Analysis indicate?**
- The items are frequently purchased together purely by chance.
- The observed co-occurrence of items is less than expected by chance.
- The items are purchased together more often than expected by chance, suggesting a positive
correlation.
- The confidence of the rule is very low.
**Answer:** The items are purchased together more often than expected by chance, suggesting a positive
correlation.

**Q: [Mock Exam 1] What is 'Partial Churn' in the context of customer churn?**
- When a customer completely cancels their service.
- When a customer appears active but has shifted a significant portion of their business to a competitor.
- When a customer reduces their usage temporarily due to seasonal factors.
- When a customer refers a new customer to the company.
**Answer:** When a customer appears active but has shifted a significant portion of their business to a competitor.

**Q: [Mock Exam 1] In the Redwoods case study, what was the primary reason for the hotel chain's struggle
despite high average daily rates (ADR)?**
- Low average daily rates.
- High customer loyalty to the Redwoods brand.
- Low customer loyalty to individual properties, poor retention, and limited cross-selling.
- Over-reliance on corporate branding.
**Answer:** Low customer loyalty to individual properties, poor retention, and limited cross-selling.

**Q: [Mock Exam 1] What is the main advantage of the Cox Proportional Hazard Model over the
Kaplan-Meier Estimator in survival analysis?**
- Cox model is non-parametric and does not assume a specific distribution.
- Cox model is simpler to implement in R.
- Cox model allows incorporating multiple customer characteristics (covariates) to influence the hazard
rate.
- Cox model only works for binary outcomes.
**Answer:** Cox model allows incorporating multiple customer characteristics (covariates) to influence the hazard
rate.

