package services

import (
	"context"
	"server/models"
)

func (s *BinanceService) GetCandles(ctx context.Context, symbol string, interval string) ([]models.CandleDto, error) {
	candles, err := s.client.NewKlinesService().Symbol(symbol).Interval("1m").Do(ctx)
	return *models.NewCandleDto(candles), err
}
