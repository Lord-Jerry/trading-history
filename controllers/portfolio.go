package controllers

import (
	"fmt"
	"github.com/gofiber/fiber"
	"github.com/lord-jerry/trading-history/database"
	"github.com/lord-jerry/trading-history/models"
	"github.com/lord-jerry/trading-history/utils"
)

type PortfolioSuccessResponse struct {
	Message    string
	Data       []models.Portfolio
	StatusCode int32
}

func CreatePortfolio(c *fiber.Ctx) {
	db := database.Init()
	var findUser models.User
	decodedToken := utils.DecodeToken(c)

	db.Find(&findUser, int(decodedToken.UserID))
	if findUser.Email == "" {
		c.Status(404).JSON(utils.ErrorResponse{
			Message:    fmt.Sprintf("User with Id %s, does not exits", string(int(decodedToken.UserID))),
			StatusCode: 404,
		})
		return
	}

	portfolio := models.Portfolio{
		UserID: findUser.ID,
		Type:   c.FormValue("type"),
		Name:   c.FormValue("name"),
	}

	db.Create(&portfolio)
	c.Status(201).JSON(PortfolioSuccessResponse{
		Message: "Portfolio created Successfully",
		// Data:       portfolio,
		StatusCode: 201,
	})
}

func GetAllPortfolios(c *fiber.Ctx) {
	db := database.Init()
	var portfolio []models.Portfolio
	decodedToken := utils.DecodeToken(c)

	db.Where("user_id = ?", uint(decodedToken.UserID)).Find(&portfolio)
	c.Status(200).JSON(PortfolioSuccessResponse{
		Message:    "Portfolio Fetched Successfully",
		Data:       portfolio,
		StatusCode: 200,
	})
}

func EditPortfolio(c *fiber.Ctx) {
	db := database.Init()
	var portfolio models.Portfolio
	portfolioID := c.Params("id")
	decodedToken := utils.DecodeToken(c)

	db.Find(&portfolio, portfolioID)
	if portfolio.UserID != uint(decodedToken.UserID) {
		c.Status(404).JSON(utils.ErrorResponse{
			Message:    fmt.Sprintf("Portfolio with Id %s, does not exits", portfolioID),
			StatusCode: 404,
		})
		return
	}
	portfolio.Name = c.FormValue("name")
	portfolio.Type = c.FormValue("type")
	db.Save(&portfolio)

	c.Status(200).JSON(PortfolioSuccessResponse{
		Message: "Portfolio updated Successfully",
		// Data:       portfolio,
		StatusCode: 200,
	})
}

func DeletePortfolio(c *fiber.Ctx) {
	db := database.Init()
	var portfolio models.Portfolio
	portfolioID := c.Params("id")
	decodedToken := utils.DecodeToken(c)

	db.Find(&portfolio, portfolioID)
	if portfolio.UserID != uint(decodedToken.UserID) {
		c.Status(404).JSON(utils.ErrorResponse{
			Message:    fmt.Sprintf("Portfolio with Id %s, does not exits", portfolioID),
			StatusCode: 404,
		})
		return
	}

	db.Delete(&portfolio)
	c.Status(204)
}
