package utils

type ValidationErrorStruc struct {
	Field string
	Error string
	Value string
}

type ValidationErrorResponse struct {
	Message    []ValidationErrorStruc
	StatusCode int32
}
