package controllers

import (
	"fmt"
	"github.com/gofiber/fiber"
	"github.com/lord-jerry/trading-history/database"
	"github.com/lord-jerry/trading-history/models"
	"github.com/lord-jerry/trading-history/utils"
)

// func CheckUserExists(c *fiber.Ctx) {
// 	db := database.Init()
// 	var findUser models.User
// 	decodedToken := utils.DecodeToken(c)

// 	db.Find(&findUser, int(decodedToken.UserID))
// 	if findUser.Email == "" {
// 		c.Status(404).JSON(fiber.Map{
// 			"message":    fmt.Sprintf("User with Id %s, does not exits", string(int(decodedToken.UserID))),
// 			"statusCode": 404,
// 		})
// 		return
// 	}

// 	c.Next()
// }

// CheckPortfolioExists acts as a middleware for the trade route.
// basically this checks if a portoflio exists, and if it belongs to the user trying to access it
func CheckPortfolioExists(c *fiber.Ctx) {
	db := database.Init()
	var portfolio models.Portfolio
	portfolioID := c.Params("id")
	decodedToken := utils.DecodeToken(c)

	db.Find(&portfolio, portfolioID)
	if portfolio.UserID != uint(decodedToken.UserID) {
		c.Status(404).JSON(fiber.Map{
			"message":    fmt.Sprintf("Portfolio with Id %s, does not exits", portfolioID),
			"statusCode": 404,
		})
		return
	}

	c.Next()
}
