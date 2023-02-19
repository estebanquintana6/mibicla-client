export const isNotEmpty = (str) => {
    return str != "" && str != undefined;
}

export const isNotZero = (num) => {
    num = Number(num);
    return num !== 0 && num != undefined && num != NaN;
}

export const validateEmail = (mail) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)){
        return (true)
    }
    return (false)
}
