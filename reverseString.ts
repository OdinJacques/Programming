// Can be use but its not intended for the porpuse of the exercise, but it can be done this way to
//const reverse = (s: string) => s.split('').reverse().join('');

function reverse(s: string): string {
  let result = '';
  for (let i = s.length - 1; i >= 0; i--) {
    result += s[i];
  }
  return result;
}

console.log(reverse('Hipopotamus'))