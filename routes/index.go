package routes

import (
	"github.com/gofiber/fiber"
	"github.com/lord-jerry/trading-history/controllers"
)

// Route ..
func Route(app *fiber.App) {
	app.Get("/login", controllers.Login)
	app.Get("/add", controllers.Add)
}
