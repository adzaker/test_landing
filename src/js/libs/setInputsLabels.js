const setInputsLabels = (input) => {
  if (input.value.length) {
    input.classList.add('-focus');
  } else {
    input.classList.remove('-focus');
  }
  switch (input.id) {
    case 'phone':
      if (input.value.length < 17 && input.value.length > 0) {
        input.classList.add('-error');
      } else {
        input.classList.remove('-error');
      }
      break;
    case 'email':
      if (!input.value.match(/.+@.+\..+/i) && input.value.length > 0) {
        input.classList.add('-error');
      } else {
        input.classList.remove('-error');
      }
      break;
    default:
      break;
  }
};

export default setInputsLabels;