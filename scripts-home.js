document.addEventListener('DOMContentLoaded', () => {
    let trail = [];
    const maxTrailLength = 50; // Adjust the trail length
    const fadeOutDuration = 1000; // Fade out duration in milliseconds (1 second)

    document.body.addEventListener('mousemove', (event) => {
        createTrail(event.clientX, event.clientY);
    });

    function createTrail(x, y) {
        const trailElement = document.createElement('div');
        trailElement.className = 'trail';
        trailElement.style.left = `${x}px`;
        trailElement.style.top = `${y}px`;

        document.body.appendChild(trailElement);
        trail.push(trailElement);

        setTimeout(() => {
            trailElement.style.opacity = '0'; // Start fading out
        }, 0); // Start fading out immediately

        setTimeout(() => {
            if (trailElement.parentNode === document.body) {
                document.body.removeChild(trailElement);
            }
        }, fadeOutDuration); // Remove element after fade out

        if (trail.length > maxTrailLength) {
            const oldTrailElement = trail.shift();
            if (oldTrailElement.parentNode === document.body) {
                document.body.removeChild(oldTrailElement);
            }
        }
    }
});