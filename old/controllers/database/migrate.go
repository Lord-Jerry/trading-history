package database

import (
	"github.com/lord-jerry/trading-history/models"
)

func Migrate() {
	db := Init()

	db.AutoMigrate(&models.User{})
	db.AutoMigrate(&models.Portfolio{})
	db.AutoMigrate(&models.Trade{})
}
