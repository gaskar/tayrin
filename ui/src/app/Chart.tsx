import React, { useEffect, useRef } from 'react';
import { createChart, LineSeriesPartialOptions, LineData } from 'lightweight-charts';
import { ChartData } from './services/candle';

interface CryptoChartProps {
  chartData: ChartData[];
}

const CryptoChart: React.FC<CryptoChartProps> = ({ chartData }) => {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  // let chart: IChartApi | null = null;
  // let series: ISeriesApi<"Candlestick"> | null = null;

  useEffect(() => {
    if (chartContainerRef.current) {
      const chart = createChart(chartContainerRef.current, { width: 600, height: 300 });
      const lineSeriesOptions: LineSeriesPartialOptions = {
        // options for the line series
      };
      const lineSeries = chart.addLineSeries(lineSeriesOptions);

      // Transform chart data to the format expected by line series
      const lineData: LineData[] = chartData.map(data => ({
        time: data.closeTime,
        value: data.close, // For a line chart, you might use 'close' value or another as needed
      }));

      console.log(lineData);
      lineSeries.setData(lineData);

      return () => {
        chart.remove();
      };
    }
  }, [chartData]);

  return <div ref={chartContainerRef} style={{ width: '100%', height: '300px' }} />;
};

export default CryptoChart;
