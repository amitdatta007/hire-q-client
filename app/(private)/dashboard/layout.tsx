import SideBar from "@/components/dashboard/side-bar";
import Navbar from "@/components/shared/navbar";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";


const DashboardLayout = async({ children }: { children: React.ReactNode }) => {
    const session = await auth();

    if(!session?.user?.role){
        redirect('/')
    }

    return (
        <>
            <Navbar />
            <main className="border-t border-border">
                <div className="container flex">
                    <SideBar />
                    <div className="flex-1 py-5 md:pl-4">
                        {children}
                    </div>
                </div>
            </main>
        </>
    );
};

export default DashboardLayout;