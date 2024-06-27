import { Link } from "react-router-dom";

export const HeaderMenu = () => {
    return(
        <ul className="flex items-center gap-4 text-base font-bold">
            <li className="text-custom-red"><Link to=''>Home</Link></li>
            <li><Link to=''>About us</Link></li>
            <li><Link to=''>Services</Link></li>
            <li><Link to=''>Blog</Link></li>
            <li><Link to=''>Contact us</Link></li>
        </ul>
    )
}