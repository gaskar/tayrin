import React, { useEffect, useState } from 'react';
import CryptoChart from './Chart';
import { fetchChartData, ChartData } from './services/candle';

const App: React.FC = () => {
  const [chartData, setChartData] = useState<ChartData[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchChartData();
      setChartData(data);
    };

    loadData();
  }, []);

  return (
    <div className="App">
      <CryptoChart chartData={chartData} />
    </div>
  );
};

export default App;
