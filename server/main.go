package main

import (
	"log"
	"net/http"
	"os"
	"server/handlers"
	"server/services"

	"github.com/joho/godotenv"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func main() {
	if err := godotenv.Load(); err != nil {
		log.Println("No .env file found, relying on environment variables")
	}

	apiKey := os.Getenv("BINANCE_API_KEY")
	apiSecret := os.Getenv("BINANCE_API_SECRET")
	binanceService := services.NewBinanceService(apiKey, apiSecret)

	e := echo.New()

	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins:     []string{"*"},
		AllowHeaders:     []string{echo.HeaderOrigin, echo.HeaderContentType, echo.HeaderAccept},
		AllowCredentials: true,
	}))

	e.Use(func(next echo.HandlerFunc) echo.HandlerFunc {
		return func(c echo.Context) error {
			origin := c.Request().Header.Get("Origin")
			host := c.Request().Host
			// Perform your dynamic check here and set the Access-Control-Allow-Origin header accordingly
			if origin == host {
				c.Response().Header().Set(echo.HeaderAccessControlAllowOrigin, origin)
			}
			return next(c)
		}
	})

	// You can then use the standard CORS middleware for other CORS headers
	e.Use(middleware.CORS())

	tradeHandler := handlers.NewTradeHandler(binanceService)
	candlesHandler := handlers.NewCandlesHandler(binanceService)

	e.GET("/", func(c echo.Context) error {
		return c.String(http.StatusOK, "Hello this is tayring app running")
	})

	e.GET("/api/trades", tradeHandler.GetRecentTrades)
	e.GET("/api/candles", candlesHandler.GetCandlesHandler)

	e.Logger.Fatal(e.Start((":8080")))
}
