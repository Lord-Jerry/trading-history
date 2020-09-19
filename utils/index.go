package utils

import (
	"github.com/dgrijalva/jwt-go"
	"github.com/gofiber/fiber"
	"github.com/lord-jerry/trading-history/models"
	"golang.org/x/crypto/bcrypt"
	"log"
	"strconv"
	"time"
)

type DecodedToken struct {
	UserID float64
	Name   string
	Email  string
}

func HashPassword(password []byte) string {
	hash, err := bcrypt.GenerateFromPassword(password, bcrypt.MinCost)

	if err != nil {
		log.Println(err)
	}

	return string(hash)
}

func ComparePassword(hashedPassword string, password string) bool {
	if hashedPassword == "" {
		return false
	}

	if err := bcrypt.CompareHashAndPassword([]byte(hashedPassword), []byte(password)); err != nil {
		return false
	}

	return true
}

func EncodeToken(user models.User) string {
	token := jwt.New(jwt.SigningMethodHS256)
	claims := token.Claims.(jwt.MapClaims)
	claims["userId"] = user.ID
	claims["name"] = user.Name
	claims["email"] = user.Email
	claims["exp"] = time.Now().Add(time.Hour * 72).Unix()
	t, err := token.SignedString([]byte("secret"))
	if err != nil {
		panic("error generating token")
	}

	return t
}

func DecodeToken(c *fiber.Ctx) DecodedToken {
	user := c.Locals("user").(*jwt.Token)
	claims := user.Claims.(jwt.MapClaims)
	name := claims["name"].(string)
	userID := claims["userId"].(float64)
	email := claims["email"].(string)

	return DecodedToken{
		UserID: userID,
		Name:   name,
		Email:  email,
	}
}

func ParseFloat(digit string) float64 {
	value, _ := strconv.ParseFloat(digit, 64)
	return value
}

func ParseDate(date string) time.Time {
	layout := "Mon, 01/02/06, 03:04PM"
	t, _ := time.Parse(layout, date)

	return t
}
