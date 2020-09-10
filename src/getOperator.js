import { operators } from "./data/operators.data";
import { validationConfig, ValidationMessage, numericOnly } from "./util/validation.util";

export const getOperator = (no, validate = false) => {
    let code;
    let result = {
        valid: false,
        message: ValidationMessage.INVALID
    }

    // Null Validation
    if(!no){
        return result;
    }

    // + prepend
    if(no.substr(0,1) === '+'){
        no = no.substr(1);
    }

    // country code
    if(no.substr(0,2) === '62'){
        no = '0'+no.substr(2);
    }

    // convert to numeric only
    no = numericOnly(no);

    // get code
    if(no.substr(0,2) === '08'){
        code = no.substr(2,2);
    }else {
        return result;
    }

    const found = operators.some(data => {
        if(data.code.some (item => item == code)){
            result.operator = data.operator;
            result.card = data.name;
            result.message = ValidationMessage.VALID;
            result.valid = true;

            if(validate){

                // get validationConfig from data
                if(data.validationConfig && data.validationConfig.minLength){
                    validationConfig.minLength = data.validationConfig.minLength;
                }

                if(data.validationConfig && data.validationConfig.maxLength){
                    validationConfig.maxLength = data.validationConfig.maxLength;
                }

                // check validation
                if(no.length < validationConfig.minLength){
                    result.valid = false;
                    result.message = ValidationMessage.BELOW_MIN;
                }else if(no.length > validationConfig.maxLength){
                    result.valid = false;
                    result.message = ValidationMessage.ABOVE_MAX;
                }
            }
            return true;
        }
    });

    if(!found){
        result.valid = false;
        result.message = ValidationMessage.NOT_FOUND;
    }

    return result;
}





