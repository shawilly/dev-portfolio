export function getNextElements<T>(current: T[], array: T[], amount = 5): T[] {
    if (array.length < amount) {
        throw new Error('The array must have at least 5 elements.');
    }
    const start = array.findIndex((el) => el === current[current.length - 1]) + 1;
    const length = array.length;
    const indexes: number[] = [];
    for (let i = 0; i < amount; i++) {
        indexes.push((start + i) % length);
    }
    return indexes.map((index) => array[index]) as T[];
}
