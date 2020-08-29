window.ondeviceorientation = e => handleMove(e);

function handleMove(event) {
  event.gamma

  const orientationInfo = `
    <p>alpha (z): ${Math.floor(event.alpha)}</p>
    <p>beta (y): ${Math.floor(event.beta)}</p>
    <p>gamma (x): ${Math.floor(event.gamma)}</p>
  `

  document.querySelector(".orientation-container").innerHTML = orientationInfo;
}
