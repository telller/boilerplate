
export const toCurency = (value: any) => Number(value || 0).toLocaleString('en-DK', { style: 'currency', currency: 'DKK', minimumFractionDigits: 0 })
