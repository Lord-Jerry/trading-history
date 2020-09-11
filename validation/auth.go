package validation

import (
	"fmt"
	"github.com/go-playground/validator"
	"github.com/gofiber/fiber"
	"github.com/lord-jerry/trading-history/utils"
)

type CreateAccountStruct struct {
	Name     string `validate:"required,min=3,max=32"`
	Email    string `validate:"required,email,min=6,max=32"`
	Password string `validate:"required,min=6,max=50"`
}

func errorType(value string) string {
	if value == "required" {
		return value
	}
	fmt.Println(value)
	return "invalid"
}
func CreateAccount(c *fiber.Ctx) {
	var errors []utils.ValidationErrorStruc
	validate := validator.New()

	user := CreateAccountStruct{
		Name:     c.FormValue("name"),
		Email:    c.FormValue("email"),
		Password: c.FormValue("password"),
	}

	err := validate.Struct(user)
	if err != nil {
		for _, err := range err.(validator.ValidationErrors) {
			errorTag := errorType(err.Tag())

			var element = utils.ValidationErrorStruc{
				Field: err.Field(),
				Error: fmt.Sprintf("The %s Field is %s", err.Field(), errorTag),
				Value: err.Param(),
			}

			errors = append(errors, element)
		}
		c.Status(400).JSON(&utils.ValidationErrorResponse{
			Message:    errors,
			StatusCode: 400,
		})
		return
	}
	c.Next()
}
