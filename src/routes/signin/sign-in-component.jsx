import {
    signInGoogleWithPopup,
    createUserDocumentfromAuth,
} from "../../utils/firebase/firebas.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const Signin = () => {

    const logGoogleUser = async () => {
        const {user} = await signInGoogleWithPopup();
        createUserDocumentfromAuth(user);
        const userDocRef = await createUserDocumentfromAuth(user);
    }

   
    return (
        <div> 
            <h1>Sign in</h1>
            <button onClick={logGoogleUser}>
                Sign in with google Popup
            </button>
            <SignUpForm/>
        </div>
    )
}

export default Signin;