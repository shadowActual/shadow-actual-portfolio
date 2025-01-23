import { AppConfig } from "@/config/config";
import { getCurrentYear } from "@/utils/helpers";

export const Footer = () => {
    return (
        <footer className="w-full h-16 bg-primary flex justify-center">
            <div className="w-[80%] flex flex-row justify-between items-center">
                <div className="text-tertiary_text">
                    Copyright &copy; {getCurrentYear()} <span className="text-secondary"> {AppConfig.name}.</span> All Rights Reserved
                </div>
                <div className="text-tertiary_text">User Terms and Conditions | Privacy Policy</div>
            </div>
        </footer>

    );
}