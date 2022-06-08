
window.onload = function() {
  const customfooter = document.getElementById("customfooter");
  const actualfooter = document.getElementsByClassName("footer");
  const fragment = document.createDocumentFragment();
  fragment.appendChild(customfooter);
  actualfooter.appendChild(fragment);  
};
