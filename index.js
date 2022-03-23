module.exports = num => {
    const numberIsMultipleOfThreeAndFive = num % 15 === 0;
    if (numberIsMultipleOfThreeAndFive) return 'FizzBuzz';
    
    return `${num}`;
}