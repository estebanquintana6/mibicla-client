export const isNotEmpty = (str) => {
    return str != "" && str != undefined;
}

export const isNotZero = (num) => {
    num = Number(num);
    return num !== 0 && num != undefined && num != NaN;
}