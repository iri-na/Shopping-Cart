const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, { // undefined locale, auto determines it
    currency: "USD", style:"currency" })

export function formatCurrency(number: number) {
    return CURRENCY_FORMATTER.format(number);
}
