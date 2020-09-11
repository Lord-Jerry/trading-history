package routes

import "github.com/gofiber/fiber"

func routes() {
	app := fiber.New()

	app.Get("/test", func(c *fiber.Ctx) {
		c.Send("Hello, World!")
	})
}
