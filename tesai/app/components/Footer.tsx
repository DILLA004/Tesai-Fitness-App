import Container from "@/app/components/Container";
import Logo from "@/app/components/Logo";
import Links from "@/app/components/Links";
import UserMenu from "@/app/components/UserMenu";
import exp from "constants";

const Footer = () => {
    return (
        <div className="footer">
                <Container>
                    <div >
                        <div className="pl-16"><Logo/></div>
                        <Links/>
                    </div>
                </Container>
        </div>
    );
}

export default Footer;