window.onload = function() {
  const customfooter = document.getElementById("customfooter");
  const logo = document.querySelector("footer .logo");
  const fragment = document.createDocumentFragment();
  const headerurl = document.querySelector("header > a");

  fragment.appendChild(customfooter);
  logo.parentNode.appendChild(fragment);
  logo.parentNode.insertBefore(customfooter, logo);
  editfooter(customfooter);
  editheaderurl(headerurl);
};

function editfooter(customfooter) {
  customfooter.classList.add("flex-container")
  customfooter.innerHTML = '<div class=""<div class="flex-child f_left"><p>Flex Column 1</p></div>' +
    '<div class="flex-child f_right"><p>Flex Column 2</p></div>'
};

function editheaderurl(headerurl) {
	headerurl.innerHTML += '<img src="https://the-jos.github.io/taracha01/media/files/tar_banner_renovation02-small.jpg" alt="Taracha">';
	//headerurl.parentElement.innerHTML += '<div class="fill"></div>';
};