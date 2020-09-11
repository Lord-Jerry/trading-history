FROM golang:1.14

WORKDIR /usr/src/app

COPY . .

RUN go get -u github.com/gofiber/fiber
RUN go get github.com/codegangsta/gin

EXPOSE 3001

CMD ["gin", "run", "server.go"]