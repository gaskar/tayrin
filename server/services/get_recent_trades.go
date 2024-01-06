package services

import (
	"api/api/models"
	"context"
)

func (s *BinanceService) GetRecentTrades(ctx context.Context, symbol string) (*[]models.TradeDto, error) {
	trades, err := s.client.NewListTradesService().Symbol(symbol).Do(ctx)
	return models.NewTradeDto(trades), err
}
