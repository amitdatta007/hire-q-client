import Navbar from "@/components/shared/navbar";
import { auth } from "@/lib/auth";

const PublicLayout = async({ children }: { children: React.ReactNode }) => {
    const session = await auth();
    // console.log(session)

    return (
        <>
            <Navbar />
            {children}
        </>
    );
};

export default PublicLayout;