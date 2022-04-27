const a = 10.0;
const b = 20.1;
const c = 5.1;
const R1 = () => {
    const vhaskar = (-b + Math.sqrt((b * b) - (4 * a * c))) / (2 * a);
    return vhaskar.toFixed(5);
};
const R2 = () => {
    const vhaskar = ((-b) - Math.sqrt((b * b) - (4 * a * c))) / (2 * a);
    return vhaskar.toFixed(5);
};

console.log(R1());
console.log(R2());
