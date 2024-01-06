package handlers

import (
	"api/api/services"
	"net/http"

	"github.com/labstack/echo/v4"
)

type CandlesHandler struct {
	service *services.BinanceService
}

func NewCandlesHandler(service *services.BinanceService) *CandlesHandler {
	return &CandlesHandler{service: service}
}

func (h *CandlesHandler) GetCandlesHandler(c echo.Context) error {
	symbol := c.QueryParam("symbol")
	candles, err := h.service.GetCandles(c.Request().Context(), symbol, "1m")

	if err != nil {
		return echo.NewHTTPError(http.StatusInternalServerError, err.Error())
	}

	return c.JSON(http.StatusOK, candles)
}
