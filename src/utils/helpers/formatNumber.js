export const formatNumber = (num) => {
    const result = new Intl.NumberFormat("en").format(num);
    return result;
}