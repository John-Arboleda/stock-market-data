const baseURL = 'https://financialmodelingprep.com/api/v3/stock-screener?marketCapMoreThan=1000000000&betaMoreThan=1&volumeMoreThan=100&exchange=NYSE,NASDAQ&apikey=16724a89c0181971263f58cf0457bb09';

const fetchStocks = async () => {
  const result = await fetch(`${baseURL}`);
  const data = await result.json();
  return data;
};

export default fetchStocks;
