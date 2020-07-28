const maxProfit = function(prices) {
    let min = prices[0];
    let maxVal = 0;
    const len = prices.length;
    for (let i = 1; i < len; i ++) {
        maxVal = Math.max(prices[i] - min, maxVal);
        min = Math.min(prices[i], min);
    }
    return maxVal;
}