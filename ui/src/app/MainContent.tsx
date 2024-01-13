import React, { useEffect, useState } from 'react';
import CryptoChart from './Chart';
import { fetchChartData, ChartData } from './services/candle';

const App: React.FC = () => {
  const [chartData, setChartData] = useState<ChartData[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchChartData("BTCUSDT");
      setChartData(data);
    };

    loadData();
  }, []);

  return (
      <CryptoChart chartData={chartData} />
  );
};

export default App;
