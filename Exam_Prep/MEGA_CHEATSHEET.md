# 🚀 MARKETING ANALYTICS MEGA CHEATSHEET

*Read this 1 hour before the NPTEL exam! It contains all the dense formulas, definitions, and MCQ tricks.*

---

## 🔢 TOP FORMULAS TO MEMORIZE

### 1. Market Basket Analysis (Apriori Algorithm)
*   **Support(A → B):** `(Transactions with A AND B) / (Total Transactions)`
    *   *Meaning: How often do they appear together in the whole store?*
*   **Confidence(A → B):** `(Transactions with A AND B) / (Transactions with JUST A)`
    *   *Meaning: If they bought A, what's the % chance they buy B?*
*   **Lift(A → B):** `Confidence(A → B) / Support(B)`
    *   *Meaning: Is the connection real? Lift > 1 means YES (Positive association). Lift < 1 means NO (Negative association/substitutes).*

### 2. Advertising Analytics
*   **GRP (Gross Rating Points):** `Reach × Frequency`
*   **CPM (Cost Per Thousand):** `(Cost / Impressions) × 1000`

### 3. Customer Lifetime Value (CLV)
*   **Basic CLV:** `(Margin × Retention Rate) / (1 + Discount Rate - Retention Rate)`
    *   *Note: Margin = Revenue - Cost to Serve.*

### 4. Text Mining (TF-IDF)
*   **TF-IDF:** `Term Frequency × Inverse Document Frequency`
    *   *High Score = Word appears a lot in ONE document, but is very RARE in all other documents.*

---

## 🧠 KEY ALGORITHMS & WHAT THEY DO

| Goal | Algorithm to Use | R Function / Package | Super Simple Definition |
| :--- | :--- | :--- | :--- |
| **Find what customers value** | Conjoint Analysis | `lm()` or MNL | Rating a pizza's crust, topping, and price. |
| **Group similar customers** | K-Means Clustering | `kmeans()` | Grouping gym members by age/income. Requires scaling data first! |
| **Group without picking 'K'** | Hierarchical Clustering | `hclust()` | Builds a tree (dendrogram) bottom-up or top-down. |
| **Find items bought together** | Apriori (Market Basket) | `apriori()` in `arules` | Diapers and Beer. Uses Support, Confidence, Lift. |
| **Recommend Movies/Products** | Collaborative Filtering | `recommenderlab` | "Users who bought this also bought..." Uses Cosine Similarity. |
| **Predict who will leave us** | Logistic Regression | `glm()` | Churn prediction. Finding out who cancels their subscription. |
| **Classify Spam / Sentiment** | Naive Bayes | `naiveBayes()` | Uses pure probability to guess if text is positive/negative. |

---

## 💡 MCQ "GOTCHA" TRICKS (How not to get fooled)

1.  **"Unsupervised" vs "Supervised" Learning:**
    *   *Clustering (K-Means)* is UNSUPERVISED (No target variable).
    *   *Regression / Churn Prediction* is SUPERVISED (You are predicting a specific "Y" variable).
2.  **The Dummy Variable Trap:**
    *   If an attribute has 4 levels (e.g., Spring, Summer, Fall, Winter), R only gives you 3 coefficients. The 4th one is the "baseline" (0).
3.  **Distance Metrics:**
    *   *Euclidean Distance* is the default for K-Means (straight line distance).
    *   *Cosine Similarity* is the default for Recommender Systems (angle between vectors).
4.  **Network Centrality (SNA):**
    *   *Degree:* Most direct friends (Popular).
    *   *Closeness:* Shortest path to everyone else (Fastest rumor spreader).
    *   *Betweenness:* The bridge between two unconnected groups (The vital middleman).
5.  **Pricing Strategies:**
    *   *Skimming:* Start High, go Low (iPhones).
    *   *Penetration:* Start Low, stay Low/go High later (Jio).
    *   *1st Degree Discrimination:* Max price for every single person (Haggling).
    *   *2nd Degree:* Quantity discounts (Buy 2 get 1 free).
    *   *3rd Degree:* Demographics (Student discount).
6.  **Time Series Moving Average:**
    *   A simple moving average will ALWAYS lag behind and *underestimate* a strong upward trend.
7.  **Trivia / Definitions from Practice Sets:**
    *   *Social Network Analysis* was coined by **J.A. Barnes** (1954).
    *   *Sell Deep* means monetizing the "long tail" with surprising recommendations.
    *   *Net Consumer Surplus* = Utility in monetary terms - Price.
    *   *R vs RStudio:* RStudio is generally more intuitive and user-friendly, but R itself is best suited for research-oriented work (compared to Python for deployment).

---

## 💻 R OUTPUT CHEAT CODE
If NPTEL gives you a screenshot of an R output (like a linear regression summary):
*   Look at the column that says `Pr(>|t|)` or `p-value`.
*   If the number is **< 0.05** (usually has `*`, `**`, or `***` next to it), it means that variable is **statistically significant** (it actually matters!).
*   If the number is large (e.g., 0.60), ignore that variable. It does nothing.

**Good luck! Read the questions carefully, cross out the obviously wrong answers, and trust your gut!**
