package main

import (
	"api/api/handlers"
	"api/api/services"
	"log"
	"net/http"
	"os"

	"github.com/joho/godotenv"
	"github.com/labstack/echo/v4"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	apiKey := os.Getenv("BINANCE_API_KEY")
	apiSecret := os.Getenv("BINANCE_API_SECRET")
	binanceService := services.NewBinanceService(apiKey, apiSecret)

	e := echo.New()

	tradeHandler := handlers.NewTradeHandler(binanceService)
	candlesHandler := handlers.NewCandlesHandler(binanceService)

	e.GET("/", func(c echo.Context) error {
		return c.String(http.StatusOK, "Hello this is tayring app running")
	})

	e.GET("/api/trades", tradeHandler.GetRecentTrades)
	e.GET("/api/candles", candlesHandler.GetCandlesHandler)

	e.Logger.Fatal(e.Start((":8080")))
}
