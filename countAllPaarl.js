export default function countAllPaarl(regNumbersString) {

    // Split the input string into an array of registration numbers
    const regNumbersArray = regNumbersString.split(',');

    // Initialize a variable to store the count of Paarl registration numbers
    let countPaarl = 0;

    // Iterate through each registration number
    regNumbersArray.forEach(regNumber => {
        // Trim any leading or trailing whitespace from the registration number
        const trimmedRegNumber = regNumber.trim();

        // Check if the registration number starts with 'CJ' (indicating Paarl)
        if (trimmedRegNumber.startsWith('CJ')) {
            // If yes, increment the count of Paarl registration numbers
            countPaarl++;
        }
    });

    // Return the count of Paarl registration numbers
    return countPaarl;
}