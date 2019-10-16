import IMask from 'imask';

const mask =  {
  create: (input) => {
    const maskElement = document.createElement('span');
    maskElement.classList.add('maskElement');
    maskElement.setAttribute('for', input.id);
    maskElement.innerHTML = input.dataset.mask;
    input.parentElement.appendChild(maskElement);
  },
};

export default mask;
