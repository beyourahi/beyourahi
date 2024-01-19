import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";

const socialLinks = [
    {
        name: "Facebook",
        href: "https://www.facebook.com/beyourahi",
        icon: <FaFacebook />
    },
    {
        name: "Instagram",
        href: "https://www.instagram.com/beyourahi_",
        icon: <FaInstagram />
    },
    {
        name: "beyourahi@gmail.com",
        href: "mailto:beyourahi@gmail.com",
        icon: <MdMarkEmailUnread />
    }
];

const Home = () => {
    return (
        <div className="flex h-[100dvh] flex-col items-center justify-center">
            <video autoPlay loop muted playsInline>
                <source src="/memoji.mp4" type="video/mp4" />
            </video>

            <SocialLinks />
        </div>
    );
};

export default Home;

const SocialLinks = () => (
    <div className="flex flex-col items-center gap-8">
        <h1 className="text-4xl font-bold lg:text-6xl">hit me up 🤙🏻</h1>

        <div className="flex items-center gap-8 text-3xl lg:gap-14 lg:text-4xl">
            {socialLinks.map(({ href, icon }, index) => (
                <Link key={index} href={href} target="_blank" className="sleek hover:text-primary">
                    {icon}
                </Link>
            ))}
        </div>
    </div>
);
