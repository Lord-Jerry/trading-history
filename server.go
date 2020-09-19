package main

import (
	"github.com/gofiber/fiber"
	"github.com/lord-jerry/trading-history/database"
	"github.com/lord-jerry/trading-history/routes"
	"os"
)

func main() {
	database.Migrate()
	app := fiber.New()
	routes.Route(app)
	var port = os.Getenv("PORT")

	if port == "" {
		port = "3001"
	}
	app.Listen(port)
}
