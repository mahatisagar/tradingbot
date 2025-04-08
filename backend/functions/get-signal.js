exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ signal: "BUY EUR/USD", reason: "RSI oversold + MACD crossover + 10 EMA support + ADX trend" })
  };
};