import { UTCTimestamp } from 'lightweight-charts';
import { API_URL } from './config';

export interface ChartData {
  openTime: UTCTimestamp;
  closeTime: UTCTimestamp;
  high: number;
  low: number;
  close: number;
  open: number;
  volume: number;
}

export const fetchChartData = async (pair: string): Promise<ChartData[]> => {
  const response = await fetch(`${API_URL}/candles?symbol=${pair}`);
  const data = await response.json();

  const chartData: ChartData[] = data.map(({openTime, closeTime, high, low, close, open, volume}: any) => ({
    openTime: Math.floor(openTime / 1000) as UTCTimestamp, // Convert to seconds and cast to UTCTimestamp
    closeTime: Math.floor(closeTime / 1000) as UTCTimestamp, // Convert to seconds and cast to UTCTimestamp
    open: parseFloat(open),
    high: parseFloat(high),
    low: parseFloat(low),
    close: parseFloat(close),
    volume: parseFloat(volume),
  }));

  return chartData;
};
