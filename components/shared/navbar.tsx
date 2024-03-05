import { BellRing, Briefcase, PhoneCall, UserRound } from "lucide-react";
import NavLink from "./nav-link";
import SearchBarNav from "./search-bar-nav";
import Link from "next/link";
import { Button } from "../ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import SignOutBtn from "./signout-btn";
import { auth } from "@/lib/auth";


const Navbar = async () => {
    const session = await auth();
    console.log(session)

    return (
        <nav className=''>
            <div className="hidden md:block bg-muted">
                <div className="container flex justify-between items-center">
                    <div className="flex gap-4 text-sm">
                        <NavLink
                            href="/" className="py-[14px]"
                            activeClassName="text-primary border-b-2 border-primary font-medium"
                            exact
                        >
                            Home
                        </NavLink>
                        <NavLink
                            href="/find-jobs" className="py-[14px]"
                            activeClassName="text-primary border-b-2 border-primary font-medium"
                        >
                            Find Jobs
                        </NavLink>
                        <NavLink
                            href="/candidate"
                            className="py-[14px]"
                            activeClassName="text-primary border-b-2 border-primary font-medium"
                        >
                            Home
                        </NavLink>
                        <NavLink
                            href="/blogs"
                            className="py-[14px]"
                            activeClassName="text-primary border-b-2 border-primary font-medium"
                        >
                            Blogs
                        </NavLink>
                        <NavLink
                            href="/customer-service"
                            className="py-[14px]"
                            activeClassName="text-primary border-b-2 border-primary font-medium"
                        >
                            Customer Service
                        </NavLink>
                    </div>

                    <div>
                        <a href="tel:+8801736747427" className="flex items-center gap-2 text-sm font-medium hover:underline">
                            <PhoneCall className="w-5 h-5" />
                            <span>01736747427</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="container py-5 flex justify-between items-center">
                <div className="flex gap-8 items-center">
                    <Link href='/' className="flex gap-3 items-center">
                        <Briefcase className="w-9 h-9 text-primary" />
                        <span className="text-2xl font-semibold leading-none">HIRE Q</span>
                    </Link>
                    <SearchBarNav />
                </div>
                <div className="flex items-center gap-3">
                    {
                        session?.user ? (
                            <>
                                <BellRing className="w-5 h-5 mt-1" />

                                <DropdownMenu>
                                    <DropdownMenuTrigger className="outline-none focus:outline-none">
                                        <Avatar>
                                            <AvatarImage alt="" src={session.user.image as string} />
                                            <AvatarFallback>
                                                <UserRound className="w-6 h-6 text-gray-400" />
                                            </AvatarFallback>
                                        </Avatar>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem>Profile</DropdownMenuItem>
                                        <DropdownMenuItem>Billing</DropdownMenuItem>
                                        <DropdownMenuItem>Team</DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <SignOutBtn />
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>

                            </>
                        ) : (
                            <>
                                <Button asChild variant="outline" >
                                    <Link href="/signin">Sign In</Link>
                                </Button>
                                <Button asChild>
                                    <Link href="/signin">Post a Jobs</Link>
                                </Button>
                            </>
                        )
                    }

                </div>
            </div>
        </nav>
    );
};

export default Navbar;