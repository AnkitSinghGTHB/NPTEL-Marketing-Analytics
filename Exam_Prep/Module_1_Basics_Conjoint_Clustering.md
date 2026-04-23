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
