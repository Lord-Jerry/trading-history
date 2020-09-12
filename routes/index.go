package routes

import (
	"github.com/gofiber/fiber"
	jwtware "github.com/gofiber/jwt"
	"github.com/lord-jerry/trading-history/controllers"
	"github.com/lord-jerry/trading-history/utils"
	"github.com/lord-jerry/trading-history/validation"
)

// Route ..
func Route(app *fiber.App) {
	app.Post("/api/v1/login", controllers.Login)
	app.Post("/api/v1/register", validation.CreateAccount, controllers.CreateAccount)

	app.Use(jwtware.New(jwtware.Config{
		SigningKey: []byte("secret"),
		ErrorHandler: func(c *fiber.Ctx, e error) {
			c.Status(401).JSON(utils.ErrorResponse{
				Message:    e.Error(),
				StatusCode: 401,
			})
		},
	}))
	app.Post("/api/v1/portfolio/create", validation.CreatePortfolio, controllers.CreatePortfolio)
	app.Get("/api/v1/portfolio/", controllers.GetAllPortfolios)
	app.Put("/api/v1/portfolio/update/:id", validation.CreatePortfolio, controllers.EditPortfolio)
	app.Delete("/api/v1/portfolio/delete/:id", controllers.DeletePortfolio)
}
