FROM golang:1.14

WORKDIR /usr/src/app

COPY . .

EXPOSE 3001

CMD ["go", "run", "server.go"]