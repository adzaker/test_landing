import IMask from 'imask';

const initMasks = () => {
  const inputs = document.querySelectorAll("input[data-mask]");
  inputs.forEach(input => {
    console.log(input);
    input.addEventListener("input", () => {
      var phoneMask = IMask(
        input, {
          mask: '+{7}(000) 000-00-00'
        });
    });
  })
};

export default initMasks;
