import { async } from "@firebase/util";
import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentfromAuth } from "../../utils/firebase/firebas.utils";

const defualtFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUpForm = () => {

    const [formFields, setformFields] = useState(defualtFormFields);
    const { displayName, email, password, confirmPassword } = formFields;


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password != confirmPassword) {
            alert("password do not match");
            return;
        }
        
        try {
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


    console.log("formfields",formFields);
    return (
        <div>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={handleSubmit}>
                <label>Display Name</label>
                <input type="text"
                    onChange={handleChange}
                    name="displayName"
                    value={displayName} required />
                <label>Email</label>
                <input type="email"
                    onChange={handleChange}
                    name="email"
                    value={email} required />
                <label>Pasword</label>
                <input type="password"
                    onChange={handleChange}
                    name="password"
                    value={password} required />
                <label>Confirm Password</label>
                <input type="password"
                    onChange={handleChange}
                    name="confirmPassword"
                    value={confirmPassword} required />
                <button type="submit" >Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpForm;