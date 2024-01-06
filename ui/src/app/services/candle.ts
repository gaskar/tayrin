import { UTCTimestamp } from 'lightweight-charts';

export interface ChartData {
  time: UTCTimestamp;
  open: number;
  high: number;
  low: number;
  close: number;
}

export const fetchChartData = async (): Promise<ChartData[]> => {
  const response = await fetch('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30');
  const data = await response.json();

  const chartData: ChartData[] = data.prices.map(([time, value]: [number, number]) => ({
    time: Math.floor(time / 1000) as UTCTimestamp, // Convert to seconds and cast to UTCTimestamp
    open: value, // Mock values for open, high, low, close
    high: value,
    low: value,
    close: value,
  }));

  return chartData;
};
