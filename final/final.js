const numberMap = {
    '0': '9',
    '1': '7',
    '2': '5',
    '3': '8',
    '4': '2',
    '5': '0',
    '6': '1',
    '7': '3',
    '8': '6',
    '9': '4'
  };

  const keypad = document.getElementById('keypad');
  const input = document.getElementById('phoneInput');
  const enterSound = document.getElementById('enterSound');



  // Create number buttons 1-9
  for (let i = 1; i <= 9; i++) {
    const button = document.createElement('button');
    button.textContent = i;
    button.addEventListener('click', () => {
      input.value += numberMap[i];
    });
    keypad.appendChild(button);
  }

  // Create Refresh button
  const refreshButton = document.createElement('button');
  
  refreshButton.textContent = 'Redo';
  refreshButton.classList.add('special');
  refreshButton.addEventListener('click', () => {
    input.value = '';
  });
  keypad.appendChild(refreshButton);

  // Create 0 button
  const zeroButton = document.createElement('button');
  zeroButton.textContent = '0';
  zeroButton.addEventListener('click', () => {
    input.value += numberMap[0];
  });
  keypad.appendChild(zeroButton);
  // Create Enter button
  const enterButton = document.createElement('button');
  enterButton.textContent = 'Enter';
  enterButton.classList.add('special');
  enterButton.addEventListener('click', () => {
    enterSound.play();
    input.value = 'WRONG!!!!!!';
    
    
    
   
  });
  keypad.appendChild(enterButton);

