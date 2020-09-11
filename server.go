package main

import (
	"github.com/gofiber/fiber"
	"github.com/lord-jerry/trading-history/routes"
)

func main() {
	app := fiber.New()
	routes.Route(app)

	app.Listen(3001)
}
