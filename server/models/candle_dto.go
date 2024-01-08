package models

import "github.com/adshao/go-binance/v2"

type CandleDto struct {
	OpenTime  int64  `json:"openTime"`
	CloseTime int64  `json:"closeTime"`
	Low       string `json:"low"`
	High      string `json:"high"`
	Open      string `json:"open"`
	Close     string `json:"close"`
	Volume    string `json:"volume"`
}

func NewCandleDto(candles []*binance.Kline) *[]CandleDto {
	if candles == nil && len(candles) == 0 {
		return nil
	}

	var candleDtos []CandleDto
	for _, candle := range candles {
		candleDto := CandleDto{
			OpenTime:  candle.OpenTime,
			CloseTime: candle.CloseTime,
			Low:       candle.Low,
			High:      candle.High,
			Open:      candle.Open,
			Close:     candle.Close,
			Volume:    candle.Volume,
		}

		candleDtos = append(candleDtos, candleDto)
	}

	return &candleDtos
}
