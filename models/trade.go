package models

import (
	"github.com/jinzhu/gorm"
	"time"
)

type Trade struct {
	gorm.Model
	PortfolioID uint
	Name        int
	EntryPrice  float64
	StopLoss    float64
	TakeProfit  float64
	ExitPrice   float64
	Percentage  float64
	Comment     string
	DateEntered time.Time `json:"date_entered"`
	DateExited  time.Time `json:"date_exited"`
}
