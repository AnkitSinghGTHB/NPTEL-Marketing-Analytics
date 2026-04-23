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
