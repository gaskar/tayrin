FROM golang:1.21 AS builder
WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY . ./
RUN CGO_ENABLED=0 GOOS=linux go build -o tayrinserver

FROM alpine:latest
WORKDIR /root/
COPY --from=builder /app/tayrinserver .
EXPOSE 8080
CMD ["./tayrinserver"]