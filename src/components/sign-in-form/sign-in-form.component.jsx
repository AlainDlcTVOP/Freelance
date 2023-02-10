import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { useState, useContext } from "react";
import { UserContext } from "../../context/user.context"; 
import {
    signInGoogleWithPopup,
    createUserDocumentfromAuth,
    signInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebas.utils";
import './sign-in-form.styles.scss';

const defualtFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {

    const [formFields, setformFields] = useState(defualtFormFields);
    const {  email, password } = formFields;

    const { setCurrentUser} = useContext(UserContext);


    const resertFormFields = () => {
        setformFields(defualtFormFields);
    }
    
    const signInWithGoogle = async () => {
        const {user} = await signInGoogleWithPopup();
        createUserDocumentfromAuth(user);
        await createUserDocumentfromAuth(user);
    }

   
    const handleSubmit = async (event) => {
        event.preventDefault();
       
        
        try {
            const {user} = await signInAuthUserWithEmailAndPassword(email, password);
           
            setCurrentUser(user);
            resertFormFields();
        
        } catch (error) {
            switch (error.code) {
              case 'auth/wrong-password':
                alert('incorrect password for email');
                break;
              case 'auth/user-not-found':
                alert('no user associated with this email');
                break;
              default:
            }
          }
        };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setformFields({ ...formFields, [name]: value });
    }


    return (
        <div className="sign-in-container">
            <h2>Already have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}> 
                
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
              
                <div className="button-contianer">
                <Button type="submit" >Sign In</Button>
                <Button type='button' buttonType='google' onClick={signInWithGoogle}>Google Sign in</Button>
              </div>
                
            </form>
        </div>
    )
}

export default SignInForm;