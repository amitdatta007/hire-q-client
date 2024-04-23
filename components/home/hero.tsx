import Image from "next/image";
import hero from "@/assets/image/hero.svg";
import SearchBar from "./search-bar";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="bg-muted">
            <div className="container py-12 md:py-16 xl:py-20 flex flex-col-reverse md:flex-row gap-12 md:gap-12 xl:gap-36">
                <div className="w-full md:w-7/12 lg:w-8/12 flex flex-col gap-4 justify-between items-start">
                    <h1>Find a job that suits your interest & skills.</h1>
                    <p className="text-muted-foreground text-center md:text-left">Aliquam vitae turpis in diam convallis finibus in at risus. Nullam in scelerisque leo, eget sollicitudin velit bestibulum.</p>
                    <SearchBar />
                    <div className="text-sm">
                        <span className="text-muted-foreground">Suggestion: </span>
                        <Link className="hover:text-primary" href=''> Designer</Link>,
                        <Link className="hover:text-primary" href=''> Programing</Link>,
                        <Link className="hover:text-primary" href=''> Digital Marketing</Link>,
                        <Link className="hover:text-primary" href=''> Video</Link>,
                        <Link className="hover:text-primary" href=''> Animation</Link>.
                    </div>
                </div>
                <Image src={hero} alt="" className="w-full md:w-5/12 lg:w-4/12" priority={true} />
            </div>
        </section>
    );
};

export default Hero;