import { Button } from "../Button"
import Logo from "../Logo"
import { HeaderMenu } from "./HeaderMenu"

export const Header = () => {
    return(
        <header className="z-40 flex items-center justify-between h-20 px-20 ">
            <Logo />
            <HeaderMenu />
            <Button className="h-12 rounded-lg bg-black text-custom-light-white" children={'Start a Project'}/>
        </header>
    )
}