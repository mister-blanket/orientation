window.ondeviceorientation = e => handleMove(e);

function handleMove(event) {

  let z = Math.floor(event.alpha);
  let y = Math.floor(event.beta);
  let x = Math.floor(event.gamma);

  x = y > 90 || y < -90 ? - x : x;

  const orientationInfo = `
    <p>alpha (z): ${z}</p>
    <p>beta (y): ${y}</p>
    <p>gamma (x): ${x}</p>
  `

  document.querySelector(".orientation-container").innerHTML = orientationInfo;
}
