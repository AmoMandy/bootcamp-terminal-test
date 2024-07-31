export default function mostProfitableDay(salesData) {
    var totals = {};
    salesData.forEach(function (record) {
        if (totals[record.day]) {
            totals[record.day] += record.sales;
        } else {
            totals[record.day] = record.sales;
        }
    });
    var maxSales = 0;
    var maxDay = '';
    for (var day in totals) {
        if (totals[day] > maxSales) {
            maxSales = totals[day];
            maxDay = day;
        }
    }
    return maxDay;

var salesData = [
    { department: 'hardware', sales: 4500, day: 'Monday' },
    { department: 'outdoor', sales: 1500, day: 'Monday' },
    { department: 'carpentry', sales: 5500, day: 'Monday' },
    { department: 'hardware', sales: 7500, day: 'Tuesday' },
    { department: 'outdoor', sales: 2505, day: 'Tuesday' },
];
}