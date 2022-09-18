// FREQUENCY COUNTER PATTERN
const isAlphanumeric = (value) => {
    const chartCode = value.charCodeAt(0);
    if (
        (chartCode >= 48 && chartCode <= 57) ||
        (chartCode >= 65 && chartCode <= 90) ||
        (chartCode >= 97 && chartCode <= 122)
    ) {
        return true;
    }
    return false;
};

const chartCounts = (arr) => {
    const output = {};
    for (let val of arr) {
        if (isAlphanumeric(val)) {
            output[val] = ++output[val] || 1;
        }
    }
    return output;
};

console.log(chartCounts('hello world'));
console.log(chartCounts('hello how are you doing'));
console.log(chartCounts('hello I am doing good'));
