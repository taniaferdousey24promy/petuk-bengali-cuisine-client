import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase.config';
import Header from '../Shared/Header/Header';


const SocialButton = () => {
    const [user,setUser] = useState(null);
    const auth=getAuth(app);
    console.log(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider =new GithubAuthProvider();
    const handleGoogleSignIn=()=>{
        signInWithPopup(auth ,googleProvider)
        .then((result)=>{
            const loggedUser =result.user;
            console.log(loggedUser);
            setUser(loggedUser);

        })
        .catch((error)=>{
            console.log('error',error.message);
        })

    }

    const handleGithubSignIn =()=>{

        signInWithPopup(auth,githubProvider)
        .then(result =>{
            const loggedUser =result.user;
            console.log(loggedUser);
            setUser(loggedUser);
        })
        .catch(error =>{
            console.log(error);
        })

    }
    return (
        
        <div>
        <div  onClick={handleGoogleSignIn}>
            <Button className='w-100 fs-4 text-center ' ><FaGoogle className='  rounded p-2 text-danger me-3 bg-white ' size={40}></FaGoogle> Sign In With Google</Button>
        </div>,

        <div onClick={handleGithubSignIn}>
            <Button className='w-100 fs-4 text-center ' ><FaGithub className='  rounded p-2 text-danger me-3 bg-white ' size={40}></FaGithub> Sign In With Github</Button>
        </div>

        </div>



        
    );
};

export default SocialButton;