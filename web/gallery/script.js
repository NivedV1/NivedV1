document.addEventListener('DOMContentLoaded', () => {

    // --- 1. CONFIGURATION ---

    // Add your image URLs here. You can add as many as you want.
    const imageUrls = [
        './1.JPG',
        './2.JPG',
        '/web/gallery/3.JPG',
        '/web/gallery/4.JPG',
        '/web/gallery/5.JPG',
        '/web/gallery/6.JPG',
        '/web/gallery/7.JPG',
        '/web/gallery/8.JPG',
        '/web/gallery/9.JPG',
        '/web/gallery/10.JPG',
        '/web/gallery/11.JPG',
        '/web/gallery/12.JPG',
        '/web/gallery/13.JPG',

        // Add more image URLs as needed
    ];

    // Define different collage layouts. Each object has properties for the 5 gallery items.
    // The values 'row-start / col-start / row-end / col-end' define where each item sits on the grid.
    const collageLayouts = [
        { // Layout 1: Central large image
            item1: { gridArea: '1 / 2 / 5 / 4' },
            item2: { gridArea: '1 / 1 / 3 / 2' },
            item3: { gridArea: '3 / 1 / 5 / 2' },
            item4: { gridArea: '1 / 4 / 3 / 5' },
            item5: { gridArea: '3 / 4 / 5 / 5' },
        },
        { // Layout 2: Top-heavy layout
            item1: { gridArea: '1 / 1 / 3 / 5' },
            item2: { gridArea: '3 / 1 / 5 / 2' },
            item3: { gridArea: '3 / 2 / 5 / 3' },
            item4: { gridArea: '3 / 3 / 5 / 4' },
            item5: { gridArea: '3 / 4 / 5 / 5' },
        },
        { // Layout 3: Side-bar layout
            item1: { gridArea: '1 / 1 / 5 / 3' },
            item2: { gridArea: '1 / 3 / 3 / 5' },
            item3: { gridArea: '3 / 3 / 5 / 4' },
            item4: { gridArea: '3 / 4 / 4 / 5' },
            item5: { gridArea: '4 / 4 / 5 / 5' },
        }
    ];

    const UPDATE_INTERVAL_MS = 35000; // 5 seconds

    // --- 2. SCRIPT LOGIC ---

    const galleryItems = document.querySelectorAll('.gallery-item');

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function updateCollage() {
        // Pick a random layout from our defined layouts
        const randomLayout = collageLayouts[Math.floor(Math.random() * collageLayouts.length)];

        // Shuffle the images to get a new random order
        shuffleArray(imageUrls);

        galleryItems.forEach((item, index) => {
            // Apply the new grid position from the chosen layout
            const layoutProps = randomLayout[`item${index + 1}`];
            item.style.gridArea = layoutProps.gridArea;

            // Update the image source
            const imgElement = item.querySelector('img');
            imgElement.src = imageUrls[index];
        });
    }

    // Initial setup
    updateCollage();

    // Set an interval to update the collage periodically
    setInterval(updateCollage, UPDATE_INTERVAL_MS);
});