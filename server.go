package main

import (
	"github.com/gofiber/fiber"
	"github.com/lord-jerry/trading-history/database"
	"github.com/lord-jerry/trading-history/routes"
)

func main() {
	database.Migrate()
	app := fiber.New()
	routes.Route(app)

	app.Listen(3001)
}
