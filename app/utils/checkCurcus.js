const checkCursus = (cursus) => {
    for (let i = 0; i < cursus?.length; i++) {
        if (cursus[i]?.cursus?.name === '42cursus') {
            return i
        }
    }
    return (-1);
}

export default checkCursus;