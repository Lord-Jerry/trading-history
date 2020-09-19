package controllers

import (
	"fmt"
	"github.com/gofiber/fiber"
	"github.com/lord-jerry/trading-history/database"
	"github.com/lord-jerry/trading-history/models"
	"github.com/lord-jerry/trading-history/utils"
	"strconv"
)

func CreateTrade(c *fiber.Ctx) {
	db := database.Init()
	portfolioID, _ := strconv.Atoi(c.Query("portfolio_id"))

	trade := models.Trade{
		PortfolioID:    uint(portfolioID),
		Name:           c.FormValue("name"),
		AmountInvested: utils.ParseFloat(c.FormValue("amount_invested")),
		NumPosition:    utils.ParseFloat(c.FormValue("num_position")),
		EntryPrice:     utils.ParseFloat(c.FormValue("entry_price")),
		StopLoss:       utils.ParseFloat(c.FormValue("stop_loss")),
		TakeProfit:     utils.ParseFloat(c.FormValue("take_profit")),
		ExitPrice:      utils.ParseFloat(c.FormValue("exit_price")),
		EntryDate:      utils.ParseDate(c.FormValue("entry_date")),
	}

	db.Create(&trade)
	c.Status(201).JSON(fiber.Map{
		"message":    "Trade created Successfully",
		"data":       trade,
		"statusCode": 201,
	})
}

func UpdateTrade(c *fiber.Ctx) {
	db := database.Init()
	var trade models.Trade
	portfolioID := c.Query("portfolio_id")
	tradeID := c.Query("trade_id")

	db.Where("portfolio_id = ?", portfolioID).Find(&trade, tradeID)
	if trade.Name == "" {
		c.Status(404).JSON(fiber.Map{
			"message":    fmt.Sprintf("Trade with Id %s, does not exits", tradeID),
			"statusCode": 404,
		})
		return
	}

	trade.Name = c.FormValue("name")
	trade.AmountInvested = utils.ParseFloat(c.FormValue("amount_invested"))
	trade.NumPosition = utils.ParseFloat(c.FormValue("num_position"))
	trade.EntryPrice = utils.ParseFloat(c.FormValue("entry_price"))
	trade.StopLoss = utils.ParseFloat(c.FormValue("stop_loss"))
	trade.TakeProfit = utils.ParseFloat(c.FormValue("take_profit"))
	trade.ExitPrice = utils.ParseFloat(c.FormValue("exit_price"))
	trade.EntryDate = utils.ParseDate(c.FormValue("entry_date"))

	db.Save(&trade)
	c.Status(200).JSON(fiber.Map{
		"message":    "Trade updated Successfully",
		"data":       trade,
		"statusCode": 200,
	})
}

func GetAllTrades(c *fiber.Ctx) {
	db := database.Init()
	portfolioID, _ := strconv.Atoi(c.Query("portfolio_id"))
	var trades []models.Trade
	var page = 1

	if c.Query("page") != "" {
		p, _ := strconv.Atoi(c.Query("page"))
		page = p
	}
	limit := 10
	offset := (page - 1) * limit

	db.Where("portfolio_id = ?", portfolioID).Offset(offset).Limit(limit).Find(&trades)
	c.Status(200).JSON(fiber.Map{
		"message":    "Trades Fetched Successfully",
		"data":       trades,
		"statusCode": 200,
	})
}

func FilterTrades(c *fiber.Ctx) {
}

func CancelTrade(c *fiber.Ctx) {
	db := database.Init()
	var trade models.Trade
	portfolioID, _ := strconv.Atoi(c.Query("portfolio_id"))
	tradeID, _ := strconv.Atoi(c.Query("trade_id"))

	db.Where("portfolio_id = ?", portfolioID).Find(&trade, tradeID)
	if trade.Name == "" {
		c.Status(404).JSON(fiber.Map{
			"message":    fmt.Sprintf("Trade with Id %s, does not exits", tradeID),
			"statusCode": 404,
		})
		return
	}

	db.Delete(&trade)
	c.Status(204)
}
