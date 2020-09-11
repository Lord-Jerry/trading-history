package controllers

import "github.com/gofiber/fiber"

func Login(c *fiber.Ctx) {
	c.Send("logged in")
}
