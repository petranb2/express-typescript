import Ajv from "ajv"
import addFormats from "ajv-formats"

class ValidationService {

    validate = (schema: {}, data: {}): boolean => {
        const ajv = new Ajv()
        addFormats(ajv)
        const validate = ajv.compile(schema)
        const valid = validate(data)
        if (!valid) console.log(validate.errors)
        return valid;
    }
}

export default ValidationService
