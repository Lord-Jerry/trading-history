package utils

type ErrorResponse struct {
	Message    string
	StatusCode int32
}

type SuccessResponse struct {
	Message    string
	Data       struct{}
	StatusCode int32
}

type ValidationErrorStruc struct {
	Field string
	Error string
	Value string
}

type ValidationErrorResponse struct {
	Message    []ValidationErrorStruc
	StatusCode int32
}
