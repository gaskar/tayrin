package services

import "github.com/adshao/go-binance/v2"

type BinanceService struct {
	client *binance.Client
}

func NewBinanceService(apiKey, apiSecret string) *BinanceService {
	return &BinanceService{
		client: binance.NewClient(apiKey, apiSecret),
	}
}
