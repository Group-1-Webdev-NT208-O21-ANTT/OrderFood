const displayINRCurrency = (num) => {
    const formatter = new Intl.NumberFormat('en-IN',{
        style : "currency",
        currency : 'VND',
    })

    return formatter.format(num)

}

export default displayINRCurrency
