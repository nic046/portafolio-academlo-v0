function fireflies(updateHue) {
    const firefliesContainer = document.getElementById('fireflies');
  
    function createFirefly() {
      const firefly = document.createElement('div');
      firefly.classList.add('firefly');
      firefly.style.left = `${Math.random() * 100}vw`;
      firefly.style.top = `${Math.random() * 100}vh`;
      firefly.style.animationDuration = `${Math.random() * 5 + 5}s`;
      firefliesContainer.appendChild(firefly);
    }
  
    for (let i = 0; i < 50; i++) {
      createFirefly();
    }
  
    window.addEventListener('scroll', () => {
      const hue = Math.floor(window.scrollY / 30) % 360;
      document.querySelectorAll('.firefly').forEach(firefly => {
        firefly.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
        firefly.style.boxShadow = `0 0 20px hsl(${hue}, 100%, 50%)`;
      });
  
      updateHue(hue);
    });
  }

  export default fireflies; 