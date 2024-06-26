let display = document.getElementById('display');
let keys = document.querySelectorAll('.keys button');

let input = '';
let operator = '';

keys.forEach((key) => {
  key.addEventListener('click', (e) => {
    let value = e.target.value;
    if (value === '=' || value === 'C') {
      if (value === '=') {
        try {
          input = eval(input);
        } catch (e) {
          input = 'Error';
        }
      } else {
        input = '';
        operator = '';
      }
    } else if (value === '+' || value === '-' || value === '*' || value === '/') {
      operator = value;
      input += value;
    } else {
      input += value;
    }
    display.value = input;
  });
});