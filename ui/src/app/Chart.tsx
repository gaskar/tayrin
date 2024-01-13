import React, { useEffect, useRef } from 'react';
import { createChart, CandlestickData, HistogramSeriesPartialOptions, HistogramData } from 'lightweight-charts';
import { ChartData } from './services/candle';

interface CryptoChartProps {
  chartData: ChartData[];
}

const CryptoChart: React.FC<CryptoChartProps> = ({ chartData }) => {
  const chartContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartContainerRef.current) {
      const chart = createChart(chartContainerRef.current);
      const candleSeries = chart.addCandlestickSeries();

      const volumeSeriesOptions: HistogramSeriesPartialOptions = {
        color: 'rgba(38, 166, 154, 0.6)', // Adjust color and opacity
        priceFormat: {
          type: 'volume',
        },
        priceScaleId: '',
      };

      const volumeSeries = chart.addHistogramSeries(volumeSeriesOptions);

      const candlestickData: CandlestickData[] = chartData.map(data => ({
        time: data.closeTime,
        open: data.open,
        high: data.high,
        low: data.low,
        close: data.close,
      }));

      const volumeData: HistogramData[] = chartData.map(data => ({
        time: data.closeTime,
        value: data.volume,
        color: data.close > data.open ? 'rgba(38, 166, 154, 0.6)' : 'rgba(255, 99, 71, 0.4)',
      }));

      chart.priceScale('').applyOptions({
        scaleMargins: {
          top: 0.8,
          bottom: 0,
        },
      });

      candleSeries.setData(candlestickData);
      volumeSeries.setData(volumeData);
      
      return () => {
        chart.remove();
      };
    }
  }, [chartData]);

  return <div ref={chartContainerRef} style={{ width: '80%', height: '600px' }} />;
};

export default CryptoChart;

