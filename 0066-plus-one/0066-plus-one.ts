function plusOne(digits: number[]): bigint[] {
    return (BigInt(digits.join('')) + 1n).toString().split('').map(el=>BigInt(el))
};