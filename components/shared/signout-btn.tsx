"use client"

import { logOut } from "@/actions/authActions";

const SignOutBtn = () => {
    return (
        <button onClick={() => logOut()}>
            Sign Out
        </button>
    );
};

export default SignOutBtn;