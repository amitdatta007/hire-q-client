import SigninForm from "@/components/auth/signin-form";
// import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

const SigninPage = () => {
    // const session = await auth();
    // if (session?.user) {
    //     redirect('/')
    // }

    return (
        <main className="container flex justify-center">
            <SigninForm />
        </main>
    );
};

export default SigninPage;