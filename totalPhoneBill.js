export default function totalPhoneBill(data) {
    // Split the input string into an array of actions (calls and sms)
    const actions = data.split(', ');

    // Initialize variables to count calls and SMSs
    let callCount = 0;
    let smsCount = 0;

    // Iterate through each action to count calls and SMSs
    actions.forEach(action => {
        if (action === 'call') {
            callCount++;
        } else if (action === 'sms') {
            smsCount++;
        }
    });
    const callCost = callCount * 2.75;
    const smsCost = smsCount * 0.65;
    const totalBill = callCost + smsCost;

    // Return the total bill rounded to two decimal places
    return 'R' + totalBill.toFixed(2);
}