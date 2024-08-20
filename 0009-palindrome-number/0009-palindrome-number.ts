function isPalindrome(x: number): boolean {
    let result: boolean = false
    result = ((x.toString().split("").reverse().join("")) === x.toString())
    return result
};