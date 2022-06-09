window.onload = function() {
  const customfooter = document.getElementById("customfooter");
  const logo = document.querySelector("footer .logo");
  const fragment = document.createDocumentFragment();

  fragment.appendChild(customfooter);
  logo.parentNode.appendChild(fragment);
  logo.parentNode.insertBefore(customfooter, logo);
  editfooter(customfooter);
};

function editfooter(customfooter) {
  customfooter.classList.add("flex-container")
  customfooter.innerHTML = '
  <div class="flex-child f_left">
    <p>Flex Column 1</p>
  </div>
  
  <div class="flex-child f_right">
    <p>Flex Column 2</p>
  </div>';
}