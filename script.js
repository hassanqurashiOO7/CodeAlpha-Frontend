const buttons = document.querySelectorAll('button');
const input = document.getElementById('inputBox');

let string = '';

buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    const value = e.target.innerHTML;

    if (value === '=') {
      try {
        string = eval(string);
        input.value = string;
      } catch {
        input.value = 'Error';
        string = '';
      }
    }
    else if (value === 'C') {
      string = '';
      input.value = '';
    }
    else if (value === 'DEL') {
      string = string.slice(0, -1);
      input.value = string;
    }
    else {
      string += value;
      input.value = string;
    }
  });
});
