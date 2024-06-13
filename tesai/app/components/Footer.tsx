import Container from "@/app/components/Container";
import Logo from "@/app/components/Logo";
import UserMenu from "@/app/components/userMenu/UserMenu";
import exp from "constants";
import NavbarRoutes from "@/app/components/navbar/NavbarRoutes";

const Footer = () => {
    return (
        <div className="footer">
                <Container>
                        <Logo/>
                        <div className=" footer-links flex-row flex">
                            <NavbarRoutes/>
                            <img className="phone" src="/images/Frame%20427319716.png" alt="Phone"/>
                            <img className="socials" src="/images/Frame%20427319715.png" alt="Socials"/>
                        </div>
                </Container>
        </div>
    );
}

export default Footer;