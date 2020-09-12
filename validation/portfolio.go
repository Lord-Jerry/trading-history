package validation

import (
	"fmt"
	"github.com/go-playground/validator"
	"github.com/gofiber/fiber"
	"github.com/lord-jerry/trading-history/utils"
)

type CreatePortfolioStruct struct {
	Name string `validate:"required,min=3,max=32"`
	Type string `validate:"required,number"`
}

func perrorType(value string) string {
	if value == "required" {
		return value
	}
	fmt.Println(value)
	return "invalid"
}
func CreatePortfolio(c *fiber.Ctx) {
	var errors []utils.ValidationErrorStruc
	validate := validator.New()

	user := CreatePortfolioStruct{
		Name: c.FormValue("name"),
		Type: c.FormValue("type"),
	}

	err := validate.Struct(user)
	if err != nil {
		for _, err := range err.(validator.ValidationErrors) {
			errorTag := perrorType(err.Tag())

			var element = utils.ValidationErrorStruc{
				Field: err.Field(),
				Error: fmt.Sprintf("The %s Field is %s", err.Field(), errorTag),
				Value: err.Param(),
			}

			errors = append(errors, element)
		}
		c.Status(400).JSON(fiber.Map{
			"message":    errors,
			"statusCode": 400,
		})
		return
	}
	c.Next()
}
