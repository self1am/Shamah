window.onload = function() {
    // const audio = document.getElementById('background-music');
    const starter = document.querySelector('.starter');
    
    // audio.play();
    
    // After 3 seconds, fade out the starter and remove its z-index
    setTimeout(() => {
        starter.style.opacity = '0';
    }, 3000);

    // After 5 seconds, set z-index to 0
    setTimeout(() => {
        starter.style.zIndex = '0';
    }, 5000);

    document.querySelector('.enter-button').addEventListener('click', () => {
        // Logic to navigate to the next section of the website
        window.location.href = 'our-story.html'; // For example
    });
};
