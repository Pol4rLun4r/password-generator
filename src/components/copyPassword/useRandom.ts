interface IUseRandom {
    length: number
    uppercase: boolean
    lowercase: boolean
    numbers: boolean
    symbols: boolean
}

const useRandom = ({ length, lowercase, numbers, symbols, uppercase }: IUseRandom) => {
    let characters = '';

    if (lowercase) {
        characters += 'abcdefghijklmnopqrstuvwxyz'
    }

    if (uppercase) {
        characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }

    if (numbers) {
        characters += '1234567890'
    }

    if (symbols) {
        characters += '!@#$%^&*'
    }


    let passwordArray = <string[]>[];

    while (passwordArray.length < length) {
        const character = characters[Math.floor(Math.random() * characters.length)];

        passwordArray.push(character);
    }

    return passwordArray.join('');
}

export default useRandom;