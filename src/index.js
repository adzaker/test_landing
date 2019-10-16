import initSwipers from "./js/controller/initSwipers";
import initMasks from "./js/controller/initMasks";
import initInputsLabels from "./js/controller/initinputLabels";
import initFluidPlayer from "./js/controller/initFluidPlayer";

document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM fully loaded and parsed");
  initSwipers();
  initMasks();
  initInputsLabels();
  initFluidPlayer();
});
