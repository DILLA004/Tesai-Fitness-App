import Container from "@/app/components/Container";
import Logo from "@/app/components/Logo";
import UserMenu from "@/app/components/userMenu/UserMenu";
import {SafeUser} from "@/app/types";
import NavbarRoutes from "@/app/components/navbar/NavbarRoutes";

interface NavbarProps {
    currentUser?: SafeUser | null;
}


const Navbar:React.FC<NavbarProps> = ({
    currentUser
                                      })=>{
    console.log(currentUser);
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
                        <div className="pl-16">
                            <Logo/>
                        </div>
                        <NavbarRoutes/>
                        <UserMenu currentUser={currentUser}/>
                    </div>

                </Container>
            </div>
        </div>
    );
}

export default Navbar;