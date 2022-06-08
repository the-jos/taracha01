window.onload = function() {
  const customfooter = document.getElementById("customfooter");
  const footerdiv = document.getElementsByClassName("footer")[0];
  //const actualfooter = document.getElementsByClassName("footer__copyright")[0];
  const logo = document.getElementsByClassName("logo")[0];
  const fragment = document.createDocumentFragment();

  fragment.appendChild(customfooter);
  footerdiv.appendChild(fragment);    
  footerdiv.insertBefore(customfooter, logo);
};