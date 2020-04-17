
  export const toCurency = (value: string | number) => new Intl.NumberFormat('en-DK', { style: 'currency', currency: 'DKK', minimumFractionDigits: 0 }).format(Number(value || 0))
