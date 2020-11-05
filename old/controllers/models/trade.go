package models

import (
	"github.com/jinzhu/gorm"
	"time"
)

type Trade struct {
	gorm.Model
	PortfolioID    uint
	Name           string
	AmountInvested float64
	NumPosition    float64
	EntryPrice     float64
	StopLoss       float64
	TakeProfit     float64
	ExitPrice      float64
	Percentage     float64
	Comment        string
	EntryDate      time.Time
	ExitDate       time.Time
}
