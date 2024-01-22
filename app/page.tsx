import Link from "next/link";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";

const socialLinks = [
    {
        name: "GitHub",
        href: "https://www.github.com/beyourahi",
        icon: <FaGithub />
    },
    {
        name: "Facebook",
        href: "https://www.facebook.com/beyourahi",
        icon: <FaFacebook />
    },
    {
        name: "Instagram",
        href: "https://www.instagram.com/beyourahi",
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
        <div className="flex flex-grow flex-col items-center justify-center">
            <video autoPlay loop muted playsInline>
                <source src="/memoji.webm" type="video/webm" />
                <source src="/memoji.mp4" type="video/mp4" />
            </video>

            <div className="flex flex-col items-center gap-8">
                <h1 className="text-4xl font-bold lg:text-6xl">hit me up 🤙🏻</h1>

                <div className="flex items-center gap-8 text-3xl lg:gap-14 lg:text-4xl">
                    {socialLinks.map(({ href, icon }, index) => (
                        <Link
                            key={index}
                            href={href}
                            target="_blank"
                            className="sleek hover:text-primary"
                        >
                            {icon}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
