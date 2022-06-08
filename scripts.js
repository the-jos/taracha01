
window.onload = function() {
  const customfooter = document.getElementById("customfooter");
  const actualfooter = document.getElementsByClassName("footer")[0];
  const fragment = document.createDocumentFragment();
  fragment.appendChild(customfooter);
  actualfooter.appendChild(fragment);  
};
