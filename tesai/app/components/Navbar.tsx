import Container from "@/app/components/Container";
import Logo from "@/app/components/Logo";
import Links from "@/app/components/Links";
import UserMenu from "@/app/components/UserMenu";

const Navbar = ()=>{
    return (
        <div className="fixed w-full z-10">
            <div className="py-4">
                <Container>
                    <div className="
                    flex
                    flex-row
                    items-center
                    justify-between
                    gap-2
                    md:gap-0">
                        <div className="pl-16"><Logo/></div>
                        <Links/>
                        <UserMenu/>
                    </div>

                </Container>
            </div>
        </div>
    );
}

export default Navbar;