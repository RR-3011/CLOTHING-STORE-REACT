// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
//   signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
    // useEffect(async()=>{
    //     const response=await getRedirectResult(auth);
    //     console.log(response);
    // },[]);

    // useEffect(() => {
    //     (async function() {
    //         try {
    //             const response=await getRedirectResult(auth);
    //             console.log(response);

    //             if(response){
    //                 const userDocRef=await createUserDocumentFromAuth(response.user)
    //             }
    //         } catch (e) {
    //             console.error(e);
    //         }
    //     })();
    // }, []);


  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
 

  return (
    <div>
      <h1>Sign IN</h1>
      <button onClick={logGoogleUser}>Sign in with Google</button>
      <SignUpForm/>
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button> */}
    </div>
  );
};

export default SignIn;
