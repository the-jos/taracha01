window.onload = function() {
  const customfooter = document.getElementById("customfooter");
  const logo = document.querySelector("footer .logo");
  const fragment = document.createDocumentFragment();

  fragment.appendChild(customfooter);
  logo.parentNode.appendChild(fragment);
  logo.parentNode.insertBefore(customfooter, logo);
};

function functionName(customfooter) {
  customfooter.innerHTML = testje
}