"use client"

import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";
import { FaGithub } from "react-icons/fa";
import { signInWithGithub, signInWithGoogle } from "@/actions/authActions";

const Social = () => {
    return (
        <div className="flex flex-col sm:flex-row items-center w-full gap-2 text-sm">
            <Button className="w-full" variant='outline' size='lg' onClick={() =>  signInWithGoogle()}>
                <FcGoogle className='mr-2 h-5 w-5' /> Sign in with Google
            </Button>
            <Button className="w-full" variant='outline' size='lg' onClick={() =>  signInWithGithub()}>
                <FaGithub className='mr-2 h-5 w-5' /> Sign in with Github
            </Button>
        </div>
    );
};

export default Social;