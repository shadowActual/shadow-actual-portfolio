import nextConfig from "../../../next.config";

export const NEXT_IMAGE = nextConfig.basePath + "/next.svg";
export const EDUCATION_IMAGE = nextConfig.basePath + "/icons/education.svg";
export const EXPERIENCE_IMAGE = nextConfig.basePath + "/icons/experience.svg";

export const usableImagePathGenerator = (path: string) => {
    return nextConfig.basePath + path;
}