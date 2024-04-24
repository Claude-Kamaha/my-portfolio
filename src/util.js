export const getImageUrl = (path) => {
    return new URL(`/assets/${path}`, import.meta.url).href;
}
// export const getImageUrl = (path) => {
//     const baseURL = new URL('/assets/', import.meta.url).href;
//     return new URL(path, baseURL).href;
// };