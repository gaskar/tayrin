package handlers

import (
	"net/http"
	"server/services"

	"github.com/labstack/echo/v4"
)

type TradeHandler struct {
	service *services.BinanceService
}

func NewTradeHandler(service *services.BinanceService) *TradeHandler {
	return &TradeHandler{service: service}
}

func (h *TradeHandler) GetRecentTrades(c echo.Context) error {
	symbol := c.QueryParam("symbol")
	trades, err := h.service.GetRecentTrades(c.Request().Context(), symbol)

	if err != nil {
		return echo.NewHTTPError(http.StatusInternalServerError, err.Error())
	}

	return c.JSON(http.StatusOK, trades)
}
