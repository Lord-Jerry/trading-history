package database

import (
	"fmt"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"
	"log"
	"os"
)

func Init() *gorm.DB {
	fmt.Println(os.Getenv("APP_ENV"))

	if os.Getenv("APP_ENV") == "production" {
		db, err := gorm.Open("postgres", os.Getenv("DATABASE_URL"))

		if err != nil {
			log.Fatal(err)
		}
		fmt.Println("connected to database successfully")
		return db
	}

	var host = "db"
	user, exist := os.LookupEnv("POSTGRES_USER")
	if !exist {
		log.Fatal("POSTGRES_USER not set in .env")
	}

	pass, exist := os.LookupEnv("POSTGRES_PASSWORD")
	if !exist {
		log.Fatal("POSTGRES_PASSWORD not set in .env")
	}

	name, exist := os.LookupEnv("POSTGRES_DB")
	if !exist {
		log.Fatal("POSTGRES_DB not set in .env")
	}
	fmt.Println("hostname", host)
	credentials := fmt.Sprintf("postgresql://%s:%s@%s:5432/%s?sslmode=disable", user, pass, host, name)
	db, err := gorm.Open("postgres", credentials)

	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("connected to database successfully")

	return db
}
