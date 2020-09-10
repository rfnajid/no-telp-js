export const ValidationMessage = {
    "VALID" : "VALID",
    "INVALID": "INVALID",
    "BELOW_MIN" : "BELOW MINIMUM LENGTH",
    "ABOVE_MAX" : "ABOVE MAXIMUM LENGTH",
    "NOT_FOUND" : "NOT FOUND"
}

export const validationConfig = {
    "minLength": 10,
    "maxLength": 12
}

export const numericOnly = (value) => {
    return value.replace(/\D/g,'');
}