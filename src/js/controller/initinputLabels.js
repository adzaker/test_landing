import setInputsLabels from "../libs/setInputsLabels";

const initInputsLabels = () => {
  const inputs = document.querySelectorAll('.formInput');
  inputs.forEach(input => {
    input.addEventListener('focusout', () => {
      setInputsLabels(input)
    })
  })
};

export default initInputsLabels;