function lengthOfLastWord(s: string) {
    return s.trim().split(/\s+/).slice(-1)[0].length
};