import { signInGoogleWithPopup,createUserDocumentfromAuth } from "../../utils/firebase/firebas.utils";


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
        </div>
    )
}

export default Signin;