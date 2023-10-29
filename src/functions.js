const makePositive = (number) => {
    if (number < 0) {
        return -number;
    } else {
        return number;
    }

};
export { makePositive };

const greet = (text) => {
    if (text !== '') {
        return `Hi ${text}!`;
    } else {
        return 'Hi!';
    }
};
export { greet };

const neutralise = () => {

};