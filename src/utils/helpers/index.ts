import { AppConfig } from "@/config/config";

export const getTotalYearsOfExperience = (): string => {
    const startOfCareer = AppConfig.startOfCareer;
    const careerStartDate = new Date(startOfCareer.split('/').reverse().join('-')); // Convert "DD/MM/YYYY" to "YYYY-MM-DD"
    const currentDate = new Date();

    if (isNaN(careerStartDate.getTime())) {
        throw new Error("Invalid startOfCareer date format. Use DD/MM/YYYY.");
    }

    // Calculate the difference in years
    const diffInMilliseconds = currentDate.getTime() - careerStartDate.getTime();
    const diffInYears = diffInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);

    // Round down to the nearest 0.5 and determine if there's a "+" to append
    const roundedYears = Math.floor(diffInYears * 2) / 2;
    const isPlus = diffInYears > roundedYears;

    return `${roundedYears}${isPlus ? '+' : ''}`;
}

export const getCurrentYear = () => {
    return new Date().getFullYear();
}