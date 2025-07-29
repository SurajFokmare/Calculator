let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.innerText;

    if (value === 'AC') {
      input.value = '';
    } else if (value === 'Dele') {
      input.value = input.value.slice(0, -1); 
    } else if (value === '=') {
      try {
        input.value = eval(input.value);
      } catch {
        input.value = 'Error';
      }
    } else {
      input.value += value;
    }
  });
});


