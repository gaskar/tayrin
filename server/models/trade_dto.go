package models

import "github.com/adshao/go-binance/v2"

type TradeDto struct {
	Symbol string `json:"symbol"`
	Price  string `json:"price"`
}

func NewTradeDto(trades []*binance.TradeV3) *[]TradeDto {
	if trades == nil && len(trades) == 0 {
		return nil
	}

	var tradeDtos []TradeDto
	for _, trade := range trades {
		tradeDto := TradeDto{
			Symbol: trade.Symbol,
			Price:  trade.Price,
		}

		tradeDtos = append(tradeDtos, tradeDto)
	}

	return &tradeDtos
}
