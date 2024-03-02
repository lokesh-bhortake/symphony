import { useState } from 'react'
import { useUserAuth } from '../contexts/UserAuthContext'
import { validateSignUpForm, validateLogInForm } from './validations';
import toast from "react-hot-toast";

const useForm = (validateFormInfo) => {
    const { signUp, logIn } = useUserAuth();
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    })
    const [errors, setErrors] = useState({})

    const handleChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name] : value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const validationErrors = validateFormInfo(values)
        setErrors(validationErrors)
        if (Object.keys(validationErrors).length === 0) {
            try {
                if (validateFormInfo === validateSignUpForm) {
                    await signUp(values.email, values.password);
                } else if (validateFormInfo === validateLogInForm) {
                    await logIn(values.email, values.password);
                }
                
                if (validateFormInfo === validateSignUpForm) {
                    toast.success('Signup successful');;
                } else if (validateFormInfo === validateLogInForm) {
                    toast.success('Login successful');
                }
                setValues({
                    username: '',
                    email: '',
                    password: '',
                    password2: ''
                })
                // Handle successful authentication (e.g., redirect to another page)
            } catch (error) {
                // Handle authentication error (e.g., display error message)
                setErrors({authError: error.message})
            }
        }
    }
    
  return {values, handleChange, handleSubmit, errors}
}

export default useForm