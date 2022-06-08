window.onload = function() {
  const customfooter = document.getElementById("customfooter");
  //const footerdiv = document.getElementsByClassName("footer")[0];
  //const actualfooter = document.getElementsByClassName("footer__copyright")[0];
  const logo = document.querySelector("footer .logo")[0];
  const fragment = document.createDocumentFragment();

  fragment.appendChild(customfooter);
  //footerdiv.appendChild(fragment);   
  logo.parentNode.appendChild(fragment);
  logo.parentNode.insertBefore(customfooter, logo);
};