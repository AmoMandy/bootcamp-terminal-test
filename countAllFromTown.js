export default function allFromTown(regNumbersString, town) {
    // Split the input string into an array of registration numbers
    const regNumbersArray = regNumbersString.split(',');

    // Initialize an empty array to store registration numbers for the specified town
    const townRegNumbers = [];

    // Iterate through each registration number
    regNumbersArray.forEach(regNumber => {
        // Check if the registration number starts with the specified town code
        if (regNumber.trim().startsWith(town)) {
            // If yes, push it to the array of registration numbers for the specified town
            townRegNumbers.push(regNumber.trim());
        }
    });

    // Return the array of registration numbers for the specified town
    return townRegNumbers;
}