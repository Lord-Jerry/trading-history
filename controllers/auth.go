package controllers

import (
	"github.com/gofiber/fiber"
	"github.com/lord-jerry/trading-history/database"
	"github.com/lord-jerry/trading-history/models"
)

func Login(c *fiber.Ctx) {
	var user models.User
	db := database.Init()

	db.Find(&user)

	c.Send(user)
}
