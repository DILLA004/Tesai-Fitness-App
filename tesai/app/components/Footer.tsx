import Container from "@/app/components/Container";
import Logo from "@/app/components/Logo";
import Links from "@/app/components/Links";
import UserMenu from "@/app/components/UserMenu";
import exp from "constants";

const Footer = () => {
    return (
        <div className="footer">
                <Container>
                        <Logo/>
                        <div className=" footer-links flex-row flex">
                            <Links />
                            <img className="phone" src="/images/Frame%20427319716.png" alt="Phone"/>
                            <img className="socials" src="/images/Frame%20427319715.png" alt="Socials"/>
                        </div>
                </Container>
        </div>
    );
}

export default Footer;