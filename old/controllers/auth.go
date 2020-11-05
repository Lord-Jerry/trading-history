package controllers

import (
	"fmt"
	"github.com/gofiber/fiber"
	"github.com/lord-jerry/trading-history/database"
	"github.com/lord-jerry/trading-history/models"
	"github.com/lord-jerry/trading-history/utils"
)

func CreateAccount(c *fiber.Ctx) {
	db := database.Init()
	var findUser models.User
	db.Where("Email = ?", c.FormValue("email")).Find(&findUser)

	if findUser.Email != "" {
		c.Status(400).JSON(fiber.Map{
			"message":    fmt.Sprintf("User with Email %s, already exits", c.FormValue("email")),
			"statusCode": 400,
		})
		return
	}

	user := models.User{
		Name:     c.FormValue("name"),
		Email:    c.FormValue("email"),
		Password: utils.HashPassword([]byte(c.FormValue("password"))),
	}

	db.Create(&user)
	token := utils.EncodeToken(user)

	c.Status(201).JSON(fiber.Map{
		"message":    "Account created Successfully",
		"data":       user,
		"token":      token,
		"statusCode": 201,
	})

}
func Login(c *fiber.Ctx) {
	db := database.Init()
	var user models.User
	db.Where("Email = ?", c.FormValue("email")).Find(&user)

	if user.Email == "" || utils.ComparePassword(user.Password, c.FormValue("password")) == false {
		c.Status(400).JSON(fiber.Map{
			"message":    fmt.Sprintf("Invalid username or password"),
			"statusCode": 400,
		})
		return
	}

	token := utils.EncodeToken(user)

	c.Status(200).JSON(fiber.Map{
		"message":    "Logged In Successfully",
		"data":       user,
		"token":      token,
		"statusCode": 200,
	})
}
