function calculateTotalSalesWithTax(products,tax) {
    let totalSalesWithNoTax=0;
    products.forEach(item => {
        totalSalesWithNoTax+=(item.price*item.quantity);
    });
    totalNetSales = totalSalesWithNoTax+(totalSalesWithNoTax*(tax/100));
    return totalNetSales;
}

module.exports = calculateTotalSalesWithTax;
