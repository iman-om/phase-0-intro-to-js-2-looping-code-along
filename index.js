// Function to generate thank you messages
function writeCards(names, gift) {
  const thankYouMessages = [];
  for (const name of names) {
    thankYouMessages.push(
      `Thank you, ${name}, for the wonderful ${gift} gift!`
    );
  }
  return thankYouMessages;
}

// Function to count down from the provided number to zero
function countDown(startingNumber) {
  for (let i = startingNumber; i >= 0; i--) {
    console.log(i);
  }
}
