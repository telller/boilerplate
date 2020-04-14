
export const toCurency = (value: number) => value.toLocaleString('en-DK', { style: 'currency', currency: 'DKK', minimumFractionDigits: 0 })
