const calcTax = (income) => {
    const incomeAnnual = income * 12
    let flat, perc, thresh;
    if (incomeAnnual < 237001) {

        flat = 0;
        perc = 0.18;
        thresh = 0;

    } else if (incomeAnnual < 370501) {

        flat = 42678;
        perc = 0.26;
        thresh = 237100

    } else if (incomeAnnual < 512801) {
        flat = 77362
        perc = 0.31;
        thresh = 370500


    } else if (incomeAnnual < 673001) {
        flat = 121475;
        perc = 0.39;
        thresh = 512800
    }

    return (flat + perc * (incomeAnnual - thresh))  / 12
}

const calcNet = (income) => income - calcTax(income);
console.log(calcNet(56000))
