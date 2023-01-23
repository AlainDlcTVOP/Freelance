import { signInGoogleWithPopup } from "../../utils/firebase/firebas.utils";

const Signin = () => {
    const logGoogleUser = async () => {
        const response = await signInGoogleWithPopup();
        console.log(response);
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