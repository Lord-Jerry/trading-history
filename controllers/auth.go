package controllers

import (
	"fmt"
	"github.com/gofiber/fiber"
	"github.com/lord-jerry/trading-history/database"
	"github.com/lord-jerry/trading-history/models"
	"github.com/lord-jerry/trading-history/utils"
)

type ErrorResponse struct {
	Message    string
	StatusCode int32
}

type SuccessResponse struct {
	Message    string
	Data       models.User
	Token      string
	StatusCode int32
}

func CreateAccount(c *fiber.Ctx) {
	db := database.Init()
	var findUser models.User
	db.Where("Email = ?", c.FormValue("email")).Find(&findUser)

	if findUser.Email != "" {
		c.Status(400).JSON(ErrorResponse{
			Message:    fmt.Sprintf("User with Email %s, already exits", c.FormValue("email")),
			StatusCode: 400,
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

	c.Status(201).JSON(SuccessResponse{
		Message:    "Account created Successfully",
		Data:       user,
		Token:      token,
		StatusCode: 201,
	})

}
func Login(c *fiber.Ctx) {
	db := database.Init()
	var user models.User
	db.Where("Email = ?", c.FormValue("email")).Find(&user)

	if user.Email == "" || utils.ComparePassword(user.Password, c.FormValue("password")) == false {
		c.Status(400).JSON(ErrorResponse{
			Message:    fmt.Sprintf("Invalid username or password"),
			StatusCode: 400,
		})
		return
	}

	token := utils.EncodeToken(user)

	c.Status(201).JSON(SuccessResponse{
		Message:    "Account created Successfully",
		Data:       user,
		Token:      token,
		StatusCode: 201,
	})
}
