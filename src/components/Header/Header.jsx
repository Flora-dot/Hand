import { Button } from "../Button";
import Logo from "../Logo"
import { HeaderMenu } from "./HeaderMenu";
import BurgerIcon from '../../assets/icons/menu-icon.svg'

export const Header = () => {
    return(
        <header className="p-8 sticky bg-custom-white top-0 z-50 flex items-center justify-between h-20 xl:px-20 ">
            <Logo />
            <HeaderMenu />
            <Button className={'hidden xl:block h-12 py-3 px-7 text-base font-semibold'} children={'Start a Project'}/>
            <button className={'xl:hidden bg-custom-white  w-10 h-12'}>
                <img src={BurgerIcon} alt="" className="w-full" />
            </button>
        </header>
    )
}