import React, { useEffect, useRef } from 'react';
import { createChart, CandlestickSeriesPartialOptions, CandlestickData, HistogramSeriesPartialOptions, HistogramData } from 'lightweight-charts';
import { ChartData } from './services/candle';

interface CryptoChartProps {
  chartData: ChartData[];
}

const CryptoChart: React.FC<CryptoChartProps> = ({ chartData }) => {
  const chartContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartContainerRef.current) {
      const chart = createChart(chartContainerRef.current, { width: 600, height: 300 });
      const candlestickSeriesOptions: CandlestickSeriesPartialOptions = {
        // options for the candlestick series
      };
      const candleSeries = chart.addCandlestickSeries(candlestickSeriesOptions);

      const volumeSeriesOptions: HistogramSeriesPartialOptions = {
        color: 'rgba(38, 166, 154, 0.6)', // Adjust color and opacity
        priceFormat: {
          type: 'volume',
        },
        priceScaleId: '',
      };

      const volumeSeries = chart.addHistogramSeries(volumeSeriesOptions);

      // Transform chart data to the format expected by candlestick series
      const candlestickData: CandlestickData[] = chartData.map(data => ({
        time: data.closeTime, // Ensure this is in the format expected by the library
        open: data.open,
        high: data.high,
        low: data.low,
        close: data.close,
      }));

      const volumeData: HistogramData[] = chartData.map(data => ({
        time: data.closeTime,
        value: data.volume,
        color: data.close > data.open ? '#26a69a' : '#ef5350', // Example: green for rising, red for falling
      }));

      candleSeries.setData(candlestickData);
      volumeSeries.setData(volumeData);
      
      return () => {
        chart.remove();
      };
    }
  }, [chartData]);

  return <div ref={chartContainerRef} style={{ width: '100%', height: '600px' }} />;
};

export default CryptoChart;

