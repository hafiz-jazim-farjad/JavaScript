const cursor = document.querySelector('.cursor');
const cursorTrail = document.querySelector('.cursor-trail');

document.addEventListener('mousemove', (e) => {
    // Cursor ko move karenge
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
    
    // Trail ko move karenge with delay
    cursorTrail.style.left = `${e.pageX}px`;
    cursorTrail.style.top = `${e.pageY}px`;
});

// Optional: Hover effect for interactive elements
document.addEventListener('mouseover', function(event) {
    if (event.target.tagName === 'H1') {
        cursor.style.backgroundColor = '#ffcc00'; // Change color on hover
        cursor.style.transform = 'translate(-50%, -50%) scale(2)'; // Enlarge trail
        cursorTrail.style.transform = 'translate(-50%, -50%) scale(2)'; // Enlarge trail
    }
});

document.addEventListener('mouseout', function(event) {
    if (event.target.tagName === 'H1') {
        cursor.style.backgroundColor = 'white'; // Back to default
        cursor.style.transform = 'translate(-50%, -50%) scale(1)'; // Normal trail size
        cursorTrail.style.transform = 'translate(-50%, -50%) scale(1.5)'; // Normal trail size
    }
});
