package routes

import (
	"github.com/gofiber/fiber"
	"github.com/lord-jerry/trading-history/controllers"
	"github.com/lord-jerry/trading-history/validation"
)

// Route ..
func Route(app *fiber.App) {
	app.Post("/login", controllers.Login)
	app.Post("register", validation.CreateAccount, controllers.CreateAccount)
	app.Get("/add", controllers.Add)
}
