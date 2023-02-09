import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentfromAuth } from "../../utils/firebase/firebas.utils";
import './sign-up-form.styles.scss';

const defualtFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUpForm = () => {

    const [formFields, setformFields] = useState(defualtFormFields);
    const { displayName, email, password, confirmPassword } = formFields;


    const resertFormFields = () => {
        setformFields(defualtFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password != confirmPassword) {
            alert("password do not match");
            return;
        }
        
        try {
            resertFormFields();
            const { user } = await createAuthUserWithEmailAndPassword(
                email,
                password
            );

            await createUserDocumentfromAuth(user, { displayName });

        } catch (error) {
            if (error.code === 'auth/email-already in use') {
                alert('Cannot create a user!');
            } else {
                console.log("use account",error);
            }
            
        }

    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setformFields({ ...formFields, [name]: value });
    }


    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}> 
                <FormInput type="text"
                    label="Display Name"
                    onChange={handleChange}
                    name="displayName"
                    value={displayName} required />
               
                <FormInput type="email"
                    label="email"
                    onChange={handleChange}
                    name="email"
                    value={email} required />
                
                <FormInput type="password"
                     label="password"
                    onChange={handleChange}
                    name="password"
                    value={password} required />
              
                <FormInput type="password"
                     label="confirmPassword"
                    onChange={handleChange}
                    name="confirmPassword"
                    value={confirmPassword} required />
                <Button  type="submit" >Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm;