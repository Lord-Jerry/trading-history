package models

import (
	"github.com/jinzhu/gorm"
)

type Portfolio struct {
	gorm.Model
	UserID uint
	Type   string
	Name   string
	Trade  []Trade
}
