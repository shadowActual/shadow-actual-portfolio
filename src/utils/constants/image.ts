import nextConfig from "../../../next.config";

export const NEXT_IMAGE = nextConfig.basePath + "/next.svg";

export const usableImagePathGenerator = (path: string) => {
    return nextConfig.basePath + path;
}