export function FizzBuzzFunct(n) {
  const resArray = [];

  for (let i = 1; i <= n; i++) {
    const fizz = i % 3;
    const buzz = i % 5;

    if (fizz === 0 && buzz === 0) {
      resArray.push('Fizz Buzz');
    } else if (fizz === 0) {
      resArray.push('Fizz');
    } else if (buzz === 0) {
      resArray.push('Buzz');
    } else {
      resArray.push(i);
    }
  }

  return resArray;
}
