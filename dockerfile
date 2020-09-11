FROM golang:latest

WORKDIR /usr/src/app

COPY . .

EXPOSE 3001

CMD ["go", "run", "server.go"]