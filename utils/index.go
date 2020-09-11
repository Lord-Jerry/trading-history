package utils

import (
	"github.com/dgrijalva/jwt-go"
	"github.com/lord-jerry/trading-history/models"
	"golang.org/x/crypto/bcrypt"
	"log"
	"time"
)

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
	claims["name"] = user.Name
	claims["email"] = user.Email
	claims["exp"] = time.Now().Add(time.Hour * 72).Unix()
	t, err := token.SignedString([]byte("secret"))
	if err != nil {
		panic("error generating token")
	}

	return t
}
