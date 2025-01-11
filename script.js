const menuOpen = document.getElementById('menuOpen');
const menuClose = document.getElementById('menuClose');
const link = document.getElementById('links');

const dropdown = document.querySelectorAll('.dropdown');
const arrowDown = document.querySelectorAll('.arrowDown');
const arrowUp = document.querySelectorAll('.arrowUp');
const drop = document.querySelectorAll('.drop');

menuOpen.addEventListener('click', () => {
    link.style.display = 'block';
    menuOpen.style.display = 'none';
    menuClose.style.display = 'block';
    
    // this will add opacity
    // document.body.classList.add('bg-black', 'bg-opacity-50', 'transition-all', 'duration-300');

    // Add a backdrop blur effect to the body except the sidebar
    document.body.classList.add('relative', 'overflow-hidden'); // Ensure the body is styled correctly
    const overlay = document.createElement('div');
    overlay.id = 'overlay'; // Assign an ID to the overlay
    overlay.className = 'fixed inset-0 backdrop-blur-sm bg-black bg-opacity-30 z-10'; // Tailwind classes for blur and overlay
    document.body.appendChild(overlay);

    // this will hide the open dropdowns when the menuOpen is clicked
    arrowUp.forEach(arrowUps => {
        arrowUps.classList.add('hidden');
    });

    arrowDown.forEach(arrowDowns => {
        arrowDowns.classList.remove('hidden');
    });

    drop.forEach(drops => {
        drops.classList.add('hidden');
    });
});

menuClose.addEventListener('click', () => {
    link.style.display = 'none';
    menuOpen.style.display = 'block';
    menuClose.style.display = 'none';

    // this will remove opacity
    // document.body.classList.remove('bg-black', 'bg-opacity-50', 'transition-all', 'duration-300');

    // Remove the backdrop blur effect
    const overlay = document.getElementById('overlay');
    if (overlay) {
        overlay.remove();
    }

    document.body.classList.remove('overflow-hidden');


    // this will hide the open dropdowns when the menuClose is clicked
    arrowUp.forEach(arrowUps => {
        arrowUps.classList.add('hidden');
    });

    arrowDown.forEach(arrowDowns => {
        arrowDowns.classList.remove('hidden');
    });

    drop.forEach(drops => {
        drops.classList.add('hidden');
    });

});


// dropdowns with two nodelist or querySelectorAll
dropdown.forEach((dropdowns, index) => {
    dropdowns.addEventListener('click', () => {

        // checks first if the arrowUp is hidden
        if (arrowUp[index].classList.contains('hidden')) {

            // hides the arrow up then shows the arrow down
            arrowDown[index].classList.add('hidden');
            arrowUp[index].classList.remove('hidden');

            // shows the dropdowns
            drop[index].classList.remove('hidden');
        } else {

            // shows the arrow up then hides the arrowDown
            arrowDown[index].classList.remove('hidden');
            arrowUp[index].classList.add('hidden');

            // hides the dropdown
            drop[index].classList.add('hidden');
        }
    });
});