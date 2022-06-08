
window.onload = function() {
  let customfooter = document.getElementById("customfooter");
  let actualfooter = document.getElementsByClassName("footer");
  let fragment = document.createDocumentFragment();
  fragment.appendChild(customfooter);
  actualfooter.appendChild(fragment);  
};
