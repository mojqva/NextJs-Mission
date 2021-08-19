import {parse, isDate} from 'date-fns'

export default function ParseDateString (value, originalValue) {
    const parsedDate = isDate(originalValue) 
        ? originalValue
        : parse(originalValue, 'dd-MM-yyyy', new Date());
    return parsedDate
}