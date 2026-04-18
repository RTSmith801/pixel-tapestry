function scrollToDiv(divId) {
  const targetDiv = document.getElementById(divId);
  if (!targetDiv) return;

  const targetPosition = targetDiv.offsetTop;
  const startPosition =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0;
  const distance = targetPosition - startPosition;
  const duration = 500; // Duration of the animation in ms

  let startTime = null;

  function smoothScroll(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1); // Progress (from 0 to 1)

    window.scrollTo(0, startPosition + distance * progress);

    if (timeElapsed < duration) {
      requestAnimationFrame(smoothScroll); // Keep animating until the duration is reached
    }
  }

  requestAnimationFrame(smoothScroll); // Start the animation
}
