module.exports = num => {
    const numberIsMultipleOfThreeAndFive = num % 15 === 0;
    if (numberIsMultipleOfThreeAndFive) return 'FizzBuzz';

    const numberIsMultipleOfThree = num % 3 === 0;
    if (numberIsMultipleOfThree) return 'Fizz';
    
    return `${num}`;
}