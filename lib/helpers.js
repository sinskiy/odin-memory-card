// Fisher–Yates shuffle
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
export function shuffle(array) {
  let currentIndex = array.length;

  while (currentIndex !== 0) {
    let randomIndex = random(currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

export function random(max) {
  return Math.floor(Math.random() * max);
}
