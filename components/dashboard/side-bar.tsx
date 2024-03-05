import NavLink from "@/components/shared/nav-link";
import { auth } from "@/lib/auth";
import { Settings, Layers, CircleUserRound, PlusCircle, Briefcase, Bookmark, ReceiptText, BellRing } from "lucide-react";

const SideBar = async () => {
    const session = await auth();

    return (
        <div className="hidden md:flex border-r border-border md:w-40 lg:w-48 xl:w-60 pt-5 min-h-[calc(100vh_-_133px)]">
            <div className="flex flex-col gap-4 w-full">
                <span className="text-xs lg:text-sm font-medium text-muted-foreground">EMPLOLYER DASHBOARD</span>
                <div className="flex flex-col w-full">
                    {
                        session?.user?.role === "employer" &&
                        <>
                            <NavLink
                                className="flex items-center gap-2 text-muted-foreground text-xs lg:text-sm font-semibold pl-5 py-[10px] w-full border-l-4 border-white"
                                activeClassName="bg-primary/10 border-primary text-primary"
                                href="/dashboard" exact
                            >
                                <Layers className="w-5 h-5" />
                                <span>Overview</span>
                            </NavLink>
                            <NavLink
                                className="flex items-center gap-2 text-muted-foreground text-xs lg:text-sm font-semibold pl-5 py-[10px] w-full border-l-4 border-white"
                                activeClassName="bg-primary/10 border-primary text-primary"
                                href="/dashboard/employer-profile"
                            >
                                <CircleUserRound className="w-5 h-5" />
                                <span>Employers Profile</span>
                            </NavLink>
                            <NavLink
                                className="flex items-center gap-2 text-muted-foreground text-xs lg:text-sm font-semibold pl-5 py-[10px] w-full border-l-4 border-white"
                                activeClassName="bg-primary/10 border-primary text-primary"
                                href="/dashboard/post-job"
                            >
                                <PlusCircle className="w-5 h-5" />
                                <span>Post a Job</span>
                            </NavLink>
                            <NavLink
                                className="flex items-center gap-2 text-muted-foreground text-xs lg:text-sm font-semibold pl-5 py-[10px] w-full border-l-4 border-white"
                                activeClassName="bg-primary/10 border-primary text-primary"
                                href="/dashboard/my-jobs"
                            >
                                <Briefcase className="w-5 h-5" />
                                <span>My Jobs</span>
                            </NavLink>
                            <NavLink
                                className="flex items-center gap-2 text-muted-foreground text-xs lg:text-sm font-semibold pl-5 py-[10px] w-full border-l-4 border-white"
                                activeClassName="bg-primary/10 border-primary text-primary"
                                href="/dashboard/saved-candidate"
                            >
                                <Bookmark className="w-5 h-5" />
                                <span>Saved Candidate</span>
                            </NavLink>
                            <NavLink
                                className="flex items-center gap-2 text-muted-foreground text-xs lg:text-sm font-semibold pl-5 py-[10px] w-full border-l-4 border-white"
                                activeClassName="bg-primary/10 border-primary text-primary"
                                href="/dashboard/plans-and-billing"
                            >
                                <ReceiptText className="w-5 h-5" />
                                <span>Plans & Billing</span>
                            </NavLink>
                            <NavLink
                                className="flex items-center gap-2 text-muted-foreground text-xs lg:text-sm font-semibold pl-5 py-[10px] w-full border-l-4 border-white"
                                activeClassName="bg-primary/10 border-primary text-primary"
                                href="/dashboard/settings"
                            >
                                <Settings className="w-5 h-5" />
                                <span>Settings</span>
                            </NavLink>
                        </>
                    }
                    {
                        session?.user?.role === "candidate" &&
                        <>
                            <NavLink
                                className="flex items-center gap-2 text-muted-foreground text-xs lg:text-sm font-semibold pl-5 py-[10px] w-full border-l-4 border-white"
                                activeClassName="bg-primary/10 border-primary text-primary"
                                href="/dashboard" exact
                            >
                                <Layers className="w-5 h-5" />
                                <span>Overview</span>
                            </NavLink>
                            <NavLink
                                className="flex items-center gap-2 text-muted-foreground text-xs lg:text-sm font-semibold pl-5 py-[10px] w-full border-l-4 border-white"
                                activeClassName="bg-primary/10 border-primary text-primary"
                                href="/dashboard/applied-jobs"
                            >
                                <Briefcase className="w-5 h-5" />
                                <span>Applied Jobs</span>
                            </NavLink>
                            <NavLink
                                className="flex items-center gap-2 text-muted-foreground text-xs lg:text-sm font-semibold pl-5 py-[10px] w-full border-l-4 border-white"
                                activeClassName="bg-primary/10 border-primary text-primary"
                                href="/dashboard/favorite-jobs"
                            >
                                <Bookmark className="w-5 h-5" />
                                <span>Favorite Jobs</span>
                            </NavLink>
                            <NavLink
                                className="flex items-center gap-2 text-muted-foreground text-xs lg:text-sm font-semibold pl-5 py-[10px] w-full border-l-4 border-white"
                                activeClassName="bg-primary/10 border-primary text-primary"
                                href="/dashboard/job-alert"
                            >
                                <BellRing className="w-5 h-5" />
                                <span>Job Alert</span>
                            </NavLink>
                            <NavLink
                                className="flex items-center gap-2 text-muted-foreground text-xs lg:text-sm font-semibold pl-5 py-[10px] w-full border-l-4 border-white"
                                activeClassName="bg-primary/10 border-primary text-primary"
                                href="/dashboard/settings"
                            >
                                <Settings className="w-5 h-5" />
                                <span>Settings</span>
                            </NavLink>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default SideBar;