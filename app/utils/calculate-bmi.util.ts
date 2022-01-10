const calculateBmi = (weight: number, height: number): number => {
    return Math.round((weight * 10000) / (height * height));
};

export default calculateBmi;
