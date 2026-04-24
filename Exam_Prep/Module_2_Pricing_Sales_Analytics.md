# Module 2: Pricing, Sales & Advertising Analytics (Weeks 4-6)

Welcome to Module 2! Here we learn how to predict the future (Sales Forecasting), how to charge the right amount (Pricing Analytics), and how to measure the impact of our ads (Advertising Analytics).

---

## 1. Sales Forecasting Analytics (Week 4)

**Summary:** Predicting future sales based on historical data.

### Key Concepts

*   **Time Series Data:** Data collected at regular time intervals (daily, weekly, monthly). If you track pizza sales every Friday, that's a time series.
*   **Components of a Time Series:**
    *   **Trend:** The long-term direction (e.g., Sales are slowly going up over the years).
    *   **Seasonality:** Repeating patterns over a fixed period (e.g., Ice cream sales spike every summer).
    *   **Cyclicality:** Fluctuations that don't have a fixed period (e.g., economic booms and recessions).
    *   **Random Noise (Irregular):** Unpredictable, random spikes or drops.

### Forecasting Methods

1.  **Moving Average:** You take the average of the last 'n' periods to predict the next one. 
    *   *Example:* If you want a 3-month moving average for April, you average the sales of Jan, Feb, and March. It smooths out the bumps in the data but lags behind sudden changes.
2.  **Exponential Smoothing:** Similar to moving average, but it gives more "weight" or importance to recent data. Yesterday's sales matter more than sales from 5 years ago.
    *   *Alpha ($\alpha$):* The smoothing parameter (between 0 and 1). A high alpha means you trust recent data heavily. A low alpha means you trust older data more.
3.  **ARIMA Models:** (AutoRegressive Integrated Moving Average). A very advanced statistical model for time series. 

> [!TIP]
> **MCQ Gotcha:** Moving averages are great for stable data without strong trends or seasonality. If your data has a strong trend (going up fast), a simple moving average will always underestimate the future!

---

## 2. Pricing Analytics (Week 5)

**Summary:** Determining the optimal price to maximize profit or market share.

### Core Pricing Strategies

*   **Market Skimming:** Start with a very HIGH price when a product is new (like a new iPhone). "Skim" the maximum profit from early adopters who are willing to pay. Then slowly lower the price over time to capture the rest of the market.
*   **Market Penetration:** Start with a very LOW price to quickly gain market share and get people hooked (like Jio SIM cards). Once you dominate, you might raise prices later.

### Price Discrimination (Charging different people different prices)

> [!IMPORTANT]
> You WILL be asked to distinguish between the three degrees of price discrimination. Memorize this!

1.  **First-Degree (Perfect) Discrimination:** You charge every single person the absolute maximum they are willing to pay. 
    *   *Example:* A haggling market where the seller guesses exactly how rich you are and charges you accordingly. Very rare in the real world.
2.  **Second-Degree Discrimination:** Charging based on the **quantity** bought or the version of the product. The customer *self-selects* into a group.
    *   *Example:* "Buy 1 for $10, Buy 2 for $15." Or offering a Basic, Pro, and Premium version of software.
3.  **Third-Degree Discrimination:** Charging different prices to different **demographic groups** (because you know they have different sensitivities to price).
    *   *Example:* Senior citizen discounts at the movies, student discounts for Spotify.

### Other Pricing Tactics

*   **Bundling:** Selling two or more products together for a single price (e.g., a McDonald's Value Meal).
    *   *Pure Bundling:* You can ONLY buy the bundle (e.g., Cable TV packages).
    *   *Mixed Bundling:* You can buy the bundle OR buy the items separately (usually, the bundle is cheaper than the sum of the parts).
*   **Markdown Pricing:** Temporarily lowering the price to clear out old inventory (e.g., End of Season Sale).
*   **Dynamic Pricing:** Changing prices on the fly based on current supply and demand. 
    *   *Example:* Uber Surge Pricing, Airline tickets getting more expensive as the flight gets closer.

---

## 3. Marketing Mix Modeling & Advertising (Week 6 - Lectures 29-33)

**Summary:** How do we know if our TV, radio, or Facebook ads are actually working? We use Marketing Mix Modeling (MMM) to estimate the impact of various marketing tactics on sales.

### Key Metrics to Memorize

*   **Reach:** The number (or percentage) of *unique* people who saw your ad at least once. 
    *   *Analogy:* If you show your ad to 100 people in a stadium, your reach is 100.
*   **Frequency:** The average number of times those people saw the ad. 
    *   *Analogy:* If those 100 people saw the ad 3 times each on average, your frequency is 3.
*   **Gross Rating Points (GRP):** A measure of the total size of the advertising campaign. 
    *   **Formula:** $GRP = Reach \times Frequency$
    *   *Example:* If reach is 30% of your target market, and frequency is 4, your GRP is 120.
*   **Cost Per Thousand (CPM):** How much it costs to show your ad to 1,000 people. (M stands for 'Mille', Latin for thousand).
    *   **Formula:** $CPM = (Cost of Ad \div Total Impressions) \times 1000$

### The Ad Response Curve

Does showing an ad 100 times mean the customer is 100 times more likely to buy? No!
*   **S-Shaped Curve:** Initially, showing an ad 1 or 2 times does nothing (they don't notice it). Around 3-5 times, it suddenly starts working effectively. After 10 times, it flattens out—they are sick of seeing it (Wear-out effect).
*   **Diminishing Returns:** The very first time they see an ad is the most impactful. Every subsequent viewing has less and less impact.

### R Output Interpretation Tip for MCQs
If you see an R output for an advertising regression model (e.g., `Sales ~ TV_Spend + Radio_Spend`), look at the **p-values** (`Pr(>|t|)`).
*   If the p-value is **less than 0.05**, that advertising channel is **statistically significant** (it actually drives sales).
*   If it has `***` next to it, it's highly significant!
*   If the p-value is 0.40, that channel is doing nothing. Don't waste money there.

---

## 🔥 Real NPTEL Assignment Questions Review (Weeks 4-6)

**Week 4 (Sales & Forecasting):**
*   **If price decreases, what happens to demand?** It increases (in most cases).
*   **If price elasticity is 'unit', does a fall in price change revenue?** NO. Revenue remains the same.
*   **When do you use Judgmental Forecasting?** When there is a complete lack of historical data or during completely new market conditions.
*   **What does Time Series Forecasting use?** Past experience / historical data.
*   **How do you calculate Forecast Error?** Real Value - Predicted Value (Actual - Forecast). *Example: Actual = 125, Forecast = 110. Error = +15.*
*   **What does RMSE tell you?** How concentrated the data is around the line of best fit.
*   **What happens in the "Market Introduction Stage"?** Demand has to be created, initial costs are high, and sales volume is slow. (You do NOT make a profit at this stage!).
*   **What is the Product Life Cycle?** The length of time a product is introduced to consumers until it is removed from the shelves.

**Week 5 (Pricing Strategies):**
*   **How does Market Skimming work?** HIGH price reflects HIGH quality.
*   **Does Market Skimming fetch more competitors?** FALSE.
*   **When companies face intense competition and over-capacity, what is their pricing objective?** Survival.
*   **What is Value Pricing?** Charging a fairly low price for a high-quality offering.
*   **What is Second-Degree Price Discrimination?** Charging less to buyers who buy a larger volume.
*   **What did Apple do with iPhone X (High initial price -> Lower later)?** Price Skimming.
*   **What is Price Elasticity of demand?** A measure of responsiveness to an increase in price.

**Week 6 (Advertising & Media):**
*   **What is the only element of the marketing mix that generates Revenue?** Price.
*   **What is the purpose of Marketing Mix Modeling (MMM)?** To estimate the impact of various marketing tactics on sales and forecast future impact.
*   **What are the key benefits of MMM?** Better allocation of budget, better execution of campaigns, and business scenario testing.
*   **What does Optimization show?** How easy it is to change behavior and substitute another good. (Wait, the assignment answer says this is FALSE. Optimization is finding the best design relative to constraints. Elasticity is about changing behavior).
*   **What is the Halo Effect?** The tendency for positive impressions in one area to positively influence opinions in another.
*   **By default, what does the `optim` function in R do?** It performs MINIMIZATION (So the statement "it performs maximization" is FALSE).
*   **Does Trade Promotion increase short-term sales by increasing customer awareness?** TRUE. (Actually, wait, the assignment says this is FALSE. Why? Because trade promotions are aimed at *retailers/distributors*, NOT directly increasing *customer* awareness! Watch out for this trap!).

---

## 🎯 Practice Questions Highlights (Weeks 4-6)

**Week 4:**
*   **What are we focusing on?** Demand forecasting and pricing strategies.
*   **How does price relate to demand?** As price increases, demand drops (demand is equal to $a - bp$ where $a$ and $b$ are positive).
*   **What is the profit formula when unit cost is zero?** Profit = Price $\times$ Demand.

**Week 5:**
*   **What is Price Skimming?** Setting a high initial price and gradually lowering it over time.
*   **Why use Skimming?** To capture maximum revenue by slowly selling to different customer segments over time, eating up consumer surplus.
*   **Who uses Skimming mostly?** Technology companies.

**Week 6:**
*   **What is the focus of Week 6?** Shifting from micro-level customer analysis to macro-level cost analysis and marketing decisions.
*   **What are the 4 Cs?** Customer, Cost, Convenience, Communication.
*   **Is emotional attachment a 'Cost'?** No, it is a psychological aspect of the 'Customer'.


## Mock Exam 2 Questions

**Q: [Mock Exam 2] Which RStudio pane is primarily used for writing and saving your R code scripts?**
- Console
- Global Environment
- Editor
- Files/Plots/Packages/Help
**Answer:** Editor

**Q: [Mock Exam 2] In R, what does the symbol `NA` represent?**
- Not Applicable
- Not Available
- New Assignment
- Numeric Average
**Answer:** Not Available

**Q: [Mock Exam 2] What is the primary difference between an R `matrix` and a `data.frame` regarding the
data types of their elements?**
- A matrix can only store numeric data, while a data frame can store any type.
- All elements in a matrix must be of the same data type, while each column in a data frame can have a
different data type.
- A matrix is 1-dimensional, while a data frame is 2-dimensional.
- Data frames are used for mathematical operations, while matrices are for general data analysis.
**Answer:** All elements in a matrix must be of the same data type, while each column in a data frame can have a
different data type.

**Q: [Mock Exam 2] Which `dplyr` function is used to add new variables or transform existing ones while
preserving the original dataset's row count?**
- `summarise()`
- `filter()`
- `mutate()`
- `group_by()`
**Answer:** `mutate()`

**Q: [Mock Exam 2] What term describes information that is not organized in a pre-defined tabular format,
such as text, images, or audio?**
- Structured Data
- Quantitative Data
- Unstructured Data
- Relational Data
**Answer:** Unstructured Data

**Q: [Mock Exam 2] In text mining, what is a Document Term Matrix (DTM)?**
- A matrix showing relationships between documents.
- A matrix where rows are documents, columns are unique terms, and cell values indicate term
frequency.
- A matrix of terms and their definitions.
- A matrix used only for sentiment analysis.
**Answer:** A matrix where rows are documents, columns are unique terms, and cell values indicate term
frequency.

**Q: [Mock Exam 2] In the context of email or SMS filtering, what does "Spam" refer to?**
- Legitimate and useful messages.
- Messages from known contacts.
- Unsolicited or undesirable messages.
- Messages containing attachments.
**Answer:** Unsolicited or undesirable messages.

**Q: [Mock Exam 2] In Social Network Analysis (SNA), what is an individual entity within a network, such as
a person or an organization, commonly referred to as?**
- A Path
- A Tie
- A Node (or Actor)
- A Dyad
**Answer:** A Node (or Actor)

**Q: [Mock Exam 2] What is the primary purpose of a dashboard in marketing analytics?**
- To replace all other forms of reporting.
- To provide a visual display of key performance indicators (KPIs) and facilitate data exploration.
- To perform predictive analytics automatically.
- To store raw data for later analysis.
**Answer:** To provide a visual display of key performance indicators (KPIs) and facilitate data exploration.

**Q: [Mock Exam 2] According to the lecture, what are basic necessities required for human survival, such
as food, shelter, and safety?**
- Wants
- Desires
- Needs
- Demands
**Answer:** Needs

**Q: [Mock Exam 2] What is a key advantage of R for Marketing Analytics compared to Excel, as highlighted
in the lecture?**
- R is easier to learn for beginners.
- R is open-source, free, and handles massive datasets more efficiently.
- R is primarily a graphical interface, making it more intuitive.
- R is better for small, one-off tasks.
**Answer:** R is open-source, free, and handles massive datasets more efficiently.

**Q: [Mock Exam 2] In R, which logical operator would you use to select elements from a vector `a` that are
both greater than 15 AND less than 20?**
- `|` (OR)
- `!` (NOT)
- `&` (AND)
- `==` (Equality)
**Answer:** `&` (AND)

**Q: [Mock Exam 2] When combining vectors of different data types (e.g., integer, numeric, character) using
`cbind()` to form a matrix, what is the typical outcome regarding the data types in the
resulting matrix?**
- Each column retains its original data type.
- R coerces all elements in the matrix to the most "flexible" data type present, usually character.
- The operation will result in an error due to incompatible types.
- Only numeric data types are allowed in matrices, so character vectors are ignored.
**Answer:** R coerces all elements in the matrix to the most "flexible" data type present, usually character.

**Q: [Mock Exam 2] What is the main functional difference between `mutate()` and `summarise()` in the
`dplyr` package?**
- `mutate()` is for filtering rows, while `summarise()` is for selecting columns.
- `mutate()` adds new columns and keeps the same number of rows, while `summarise()` aggregates
data to fewer rows.
- `mutate()` works only on numeric data, while `summarise()` works on character data.
- `mutate()` is for single variables, while `summarise()` is for multiple variables.
**Answer:** `mutate()` adds new columns and keeps the same number of rows, while `summarise()` aggregates
data to fewer rows.

**Q: [Mock Exam 2] When calculating the mean of a vector in R that contains `NA` values, what argument
should be used within the `mean()` function to ensure an accurate result by ignoring missing
values?**
- `na.omit = TRUE`
- `remove.na = TRUE`
- `na.rm = TRUE`
- `ignore.na = TRUE`
**Answer:** `na.rm = TRUE`

**Q: [Mock Exam 2] What is the primary limitation of the "Bag-of-Tokens" approach in text mining, as
discussed in the lecture?**
- It is computationally very expensive.
- It requires extensive manual labeling of data.
- It loses all information about the original word order and immediate context.
- It cannot handle large volumes of text data.
**Answer:** It loses all information about the original word order and immediate context.

**Q: [Mock Exam 2] What is the "naive" assumption made by the Naive Bayes algorithm?**
- That all features are equally important.
- That features are strongly independent of each other given the class.
- That the data follows a normal distribution.
- That there are no missing values in the dataset.
**Answer:** That features are strongly independent of each other given the class.

**Q: [Mock Exam 2] When preparing a Document Term Matrix (DTM) for a Naive Bayes classifier, why might
it be beneficial to convert term frequencies to a binary occurrence (presence/absence)
representation?**
- To increase the dimensionality of the data.
- To make the DTM denser and use more memory.
- Because Naive Bayes often performs optimally by considering only the presence or absence of words,
reducing noise from specific counts.
- To make the model more complex and harder to interpret.
**Answer:** Because Naive Bayes often performs optimally by considering only the presence or absence of words,
reducing noise from specific counts.

**Q: [Mock Exam 2] In Social Network Analysis, what is a "Structural Hole"?**
- A node with very few connections.
- The absence of a direct connection between two nodes who belong to otherwise connected groups.
- A node that is central to all communication.
- A connection that flows in only one direction.
**Answer:** The absence of a direct connection between two nodes who belong to otherwise connected groups.

**Q: [Mock Exam 2] What is the primary output or goal of an effective descriptive analytics dashboard, as
emphasized in the lecture?**
- To provide definitive answers to all business questions.
- To generate questions, hunches, and hypotheses for further investigation.
- To replace the need for human analysts.
- To automatically make strategic business decisions.
**Answer:** To generate questions, hunches, and hypotheses for further investigation.

**Q: [Mock Exam 2] Which analytical technique involves creating hypothetical product or service options
with varying attributes to gauge customer preferences, especially when real-world
behavioral data isn't available for new products?**
- Regression Analysis
- Conjoint Analysis
- Factor Analysis
- Market Basket Analysis
**Answer:** Conjoint Analysis

**Q: [Mock Exam 2] What are "Economic Switching Barriers (ESB)" in the context of customer churn?**
- Emotional or social costs of switching.
- The difficulty or complexity of the switching process itself.
- Monetary costs or losses associated with switching, such as contract termination fees.
- The lack of appealing alternatives in the market.
**Answer:** Monetary costs or losses associated with switching, such as contract termination fees.

**Q: [Mock Exam 2] How does R internally represent a factor variable, and which function can be used to
reveal this internal representation?**
- As character strings; `as.character()`
- As integers with associated labels (levels); `as.numeric()`
- As logical (TRUE/FALSE) values; `as.logical()`
- As numeric values; `as.integer()`
**Answer:** As integers with associated labels (levels); `as.numeric()`

**Q: [Mock Exam 2] When using the `matrix()` function in R to create a matrix from a vector of values, what
is the default order in which the values are filled into the matrix?**
- Row-wise
- Column-wise
- Diagonally
- Randomly
**Answer:** Column-wise

**Q: [Mock Exam 2] For a dependent variable that is ordered categorical (e.g., customer satisfaction ratings
from 1 to 5), why is `polr()` (Ordinal Logit Regression) considered a more theoretically
appropriate model than `lm()` (Linear Regression)?**
- `lm()` is computationally more expensive for categorical data.
- `polr()` can handle missing values better than `lm()`.
- `polr()` accounts for the ordered nature of the categories and models non-linear effects, whereas
`lm()` assumes a continuous, interval scale.
- `lm()` can only be used for binary dependent variables.
**Answer:** `polr()` accounts for the ordered nature of the categories and models non-linear effects, whereas
`lm()` assumes a continuous, interval scale.

**Q: [Mock Exam 2] What is the "Zero-Frequency Problem" in the Naive Bayes algorithm, and what
technique is commonly used to mitigate it?**
- It occurs when a feature appears too frequently, leading to overfitting; mitigated by removing common
words.
- It occurs when a particular category in the training data has zero occurrences of a feature, leading to a
zero probability that can nullify overall probabilities; mitigated by Laplace Estimator (Add-1 Smoothing).
- It occurs when the model predicts zero probability for all classes; mitigated by increasing the training
data size.
- It occurs when features are highly correlated; mitigated by dimensionality reduction.
**Answer:** It occurs when a particular category in the training data has zero occurrences of a feature, leading to a
zero probability that can nullify overall probabilities; mitigated by Laplace Estimator (Add-1 Smoothing).

**Q: [Mock Exam 2] In the supply chain game case study discussed in the lecture, what counter-intuitive
outcome was observed in Group 2 after communication was allowed, which prompted a
deeper investigation using SNA?**
- Group 2's performance improved significantly, as expected.
- Group 2's performance remained unchanged.
- Group 2's performance surprisingly deteriorated despite the ability to share information.
- Group 2 disbanded due to communication conflicts.
**Answer:** Group 2's performance surprisingly deteriorated despite the ability to share information.

**Q: [Mock Exam 2] In the analytical framework for Segmentation, Targeting, and Positioning, what is the
primary role of Factor Analysis in the initial phase of data reduction?**
- To directly assign customers to segments based on demographics.
- To group customers into clusters based on their overall spending.
- To reduce a large number of observed behavioral variables into fewer latent, meaningful underlying
dimensions.
- To predict future customer behavior based on past actions.
**Answer:** To reduce a large number of observed behavioral variables into fewer latent, meaningful underlying
dimensions.

**Q: [Mock Exam 2] In the advanced segmentation workflow that extracts individual consumer preferences,
why is "significance filtering" (setting non-statistically significant coefficients to zero)
applied to the regression coefficients for each individual?**
- To simplify the model and reduce computational time.
- To ensure that only meaningful and statistically reliable preferences contribute to a consumer's profile,
preventing noise from distorting segment formation.
- To make the preference matrix denser and easier to interpret.
- To convert all preference coefficients into positive values.
**Answer:** To ensure that only meaningful and statistically reliable preferences contribute to a consumer's profile,
preventing noise from distorting segment formation.

**Q: [Mock Exam 2] In the "Powered Blocked Pricing" model (all-units discount) discussed, what is the key
difference in how the price is applied if a customer's consumption crosses the defined
"cut-off" value?**
- Only the units consumed *beyond* the cut-off are charged at the lower price.
- The price per unit remains the same regardless of consumption volume.
- The *entire* consumption (all units) is charged at the lower price.
- The customer receives a refund for the initial units charged at the higher price.
**Answer:** The *entire* consumption (all units) is charged at the lower price.

