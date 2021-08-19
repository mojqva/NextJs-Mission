import {useField} from 'formik';

export default function TextField ({label, ...props}) {
    const [field] = useField(props);
    return (
        <div>
            <div>
                <label htmlFor='field.name'>{label}</label>
            </div>
            
            <input {...field} {...props}/>
        </div>
    )
}