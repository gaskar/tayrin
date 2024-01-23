import React, { useEffect, useState } from 'react';
import CryptoChart from './Chart';
import { fetchChartData, ChartData } from './services/candle';
import { CoinDropdown } from './CoinDropdown';
import { Box } from '@mui/material';

const App: React.FC = () => {
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const [pair, setPair] = useState('BTCUSDT');

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchChartData(pair);
      setChartData(data);
    };

    loadData();
  }, [pair]);

  return (
      <Box sx={{ flexDirection: 'column', width: '100%' }}>
        <CoinDropdown value={pair} onChange={setPair} />
        <CryptoChart chartData={chartData} />
      </Box>
  );
};

export default App;
