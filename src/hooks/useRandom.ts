interface IUseRandom {
    length: string
    uppercase: boolean
    lowercase: boolean
    number: boolean
    symbol: boolean
}

const useRandom = ({ length, lowercase, number, symbol, uppercase }: IUseRandom) => {
    const convertLength = parseInt(length);

    let characters = '';

    if (lowercase) {
        characters += 'abcdefghijklmnopqrstuvwxyz'
    }

    if (uppercase) {
        characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }

    if (number) {
        characters += '1234567890'
    }

    if (symbol) {
        characters += '!@#$%^&*'
    }


    let passwordArray = <string[]>[];

    while (passwordArray.length < convertLength) {
        const character = characters[Math.floor(Math.random() * characters.length)];

        passwordArray.push(character);
    }

    if(passwordArray.join('') === '') return 'Enable Settings'

    return passwordArray.join('');
}

export default useRandom;