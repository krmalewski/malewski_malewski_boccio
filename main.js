console.log('JS connected');

window.onload = () => {
  const landingImage = document.querySelector('#landing-image');
  // landingImage.style.width = `${window.innerWidth}px`;
  landingImage.style.height = `${window.innerHeight - 84}px`;
  console.log(landingImage)
}
