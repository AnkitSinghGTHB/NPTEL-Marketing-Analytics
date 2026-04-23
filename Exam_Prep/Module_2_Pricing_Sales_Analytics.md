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
