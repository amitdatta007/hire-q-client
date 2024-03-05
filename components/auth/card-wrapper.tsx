import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import CardDescription from "./card-description";
import Social from "./social";

interface CardWrapperProps {
    children: React.ReactNode;
    authTitle: string;
    authSubtitle: string;
    backBtnTitle: string;
    backBtnHref: string;
}

const CardWrapper = ({
    children,
    authTitle,
    authSubtitle,
    backBtnTitle,
    backBtnHref,
}: CardWrapperProps) => {
    return (
        <Card className="max-w-lg w-full border-none bg-accent my-10">
            <CardHeader>
                <CardDescription
                    title={authTitle}
                    description={authSubtitle}
                    backBtnTitle={backBtnTitle}
                    backBtnHref={backBtnHref}
                />
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            <CardFooter>
                <Social />
            </CardFooter>
        </Card>
    );
};

export default CardWrapper;