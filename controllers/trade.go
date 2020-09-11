package controllers

import "github.com/gofiber/fiber"

func Add(c *fiber.Ctx) {
	c.Send("trade added")
}
