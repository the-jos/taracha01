window.onload = function() {
  const customfooter = document.getElementById("customfooter");
  const logo = document.querySelector("footer .logo");
  const fragment = document.createDocumentFragment();
  const headerurl = document.querySelector("header > a");
  const h2construction = document.querySelector("body > div.container > main > div > article:nth-child(1) > div > header > h2");
  const h2demolition = document.querySelector("body > div.container > main > div > article:nth-child(2) > div > header > h2");
  const h2renovation = document.querySelector("body > div.container > main > div > article:nth-child(3) > div > header > h2");

  fragment.appendChild(customfooter);
  logo.parentNode.appendChild(fragment);
  logo.parentNode.insertBefore(customfooter, logo);
  editfooter(customfooter);
  editheaderurl(headerurl);
  
  h2construction.setAttribute(‘id’,‘construction’);
  h2demolition.setAttribute(‘id’,‘demolition’);
  h2renovation.setAttribute(‘id’,‘renovation’);
};

function editfooter(customfooter) {
  customfooter.classList.add("flex-container")
  customfooter.innerHTML = '<div class="flex-child f_left">' +
  '<h2 id="contact">CONTACT ME</h2>' +
  '<a href="tel:+32499003355">+32 499 00 33 55</a><br>' +
  '<a href="mailto:info@zbtaracha.pl">info@zbtaracha.pl</a>' +  
  
  '</div>' +
  '<div class="flex-child f_right">' +
  
  '<h6>TARACHA ZBIGNIEW BVBA</h6>' +  
  'Molenbaan 86<br>' +
  '2900 Schoten<br>' +
  'BE 0518.927.234' +
  '</div>';
};

function editheaderurl(headerurl) {
	headerurl.innerHTML += '<img src="https://the-jos.github.io/taracha01/media/files/tar_banner_renovation02-small.jpg" alt="Taracha">';
	//headerurl.parentElement.innerHTML += '<div class="fill"></div>';
};