function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

function showDetail(productName) {
  alert('Anda melihat detail ' + productName);
}
