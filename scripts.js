
window.onload = function() {
  const customfooter = document.getElementById("customfooter");
  const footerdiv = document.getElementsByClassName("footerdiv")[0];
  const actualfooter = document.getElementsByClassName("footer__copyright")[0];
  const fragment = document.createDocumentFragment();

  fragment.appendChild(customfooter);
  footerdiv.appendChild(fragment);    
  actualfooter.insertBefore(customfooter, actualfooter);
};
