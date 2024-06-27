import Logo from "../Logo";
import { Button } from "../Button";
import XIcon from '../../assets/icons/X-icon.svg';
import LinkedInIcon from '../../assets/icons/Linkedin-icon.svg';
import FacebookIcon from '../../assets/icons/facebook-icon.svg';
import InstagramIcon from '../../assets/icons/instagram-icon.svg';

export const Footer = () => {
    return(
        <footer className="p-5  xl:px-28 xl:py-20 bg-custom-grey h-fit">
            <div className="flex flex-col xl:flex-row gap-10  xl:justify-between mb-10 xl:mb-16">
                <div>
                    <Logo />
                    <p className="text-sm font-normal my-3">We love what we do and create partnerships</p>
                </div>
                <div className=" flex flex-col  ">
                <Button className={'h-12 w-3/4  px-7 mb-5 xl:self-end text-base font-semibold'} children={'Start a Project'}/>
                <p className="xl:text-center">hello@devseal.tech</p>
                <div className="flex gap-5 mt-4">
                    <img src={XIcon} alt="" />
                    <img src={LinkedInIcon} alt="" />
                    <img src={FacebookIcon} alt="" />
                    <img src={InstagramIcon} alt="" />
                    <p className="font-medium text-base">Hand</p>
                </div>
                </div>
            </div>
            <hr className="w-3/4 mx-auto mb-5" />
            <div className="flex flex-col gap-2 xl:flex-row py-3 xl:justify-between">
                <p className="text-lg font-normal text-dark-grey mb-3">© 2024 hand. All Rights Reserved</p>
                <ul className="flex flex-col xl:flex-row gap-5 font-semibold text-base text-dark-grey">
                    <li>Privacy Policy</li>
                    <li>Media Kit</li>
                </ul>
            </div>
        </footer>
    );
} 