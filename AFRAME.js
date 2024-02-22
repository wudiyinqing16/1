AFRAME.registerComponent('trigger-volume', {
    schema: {
        target: {type: 'selector'}
    },
    init: function () {
        // Set up event listeners for enter and leave events
        this.el.addEventListener('mouseenter', (e) => {
            console.log('Entity has entered the trigger volume');
            // Implement your logic here, e.g., trigger an animation
        });
        this.el.addEventListener('mouseleave', (e) => {
            console.log('Entity has left the trigger volume');
            // Implement your exit logic here
        });
    }
});
