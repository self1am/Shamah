document.addEventListener('DOMContentLoaded', function() {
    const events = document.querySelectorAll('.timeline-event');

    events.forEach(event => {
        event.addEventListener('click', () => {
            const content = event.querySelector('.event-content');
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });
});
