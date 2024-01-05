package models

import "github.com/adshao/go-binance/v2"

type CandleDto struct {
	Symbol string `json:"symbol"`
	Price  string `json:"price"`
}

func NewCandleDto(candles []*binance.Kline) *[]CandleDto {
	if candles == nil && len(candles) == 0 {
		return nil
	}

	var candleDtos []CandleDto
	for _, candle := range candles {
		candleDto := CandleDto{
			Symbol: "BTCUSDT",
			Price:  candle.Low,
		}

		candleDtos = append(candleDtos, candleDto)
	}

	return &candleDtos
}
