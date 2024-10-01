/**
 * Sum of two numbers
 *
 * @param {number} m first number
 * @param {number} n second number
 * @returns {number}
 */
export const sum = (m, n) => {
    if (typeof m !== 'number') {
       throw new Error("'m' must be number"); 
    }
    if (typeof n !== 'number') {
        throw new Error("'n' must be number"); 
    }

    return m + n;
};
