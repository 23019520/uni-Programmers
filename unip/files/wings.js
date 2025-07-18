document.addEventListener('DOMContentLoaded', function() {
    const leftMenuItems = document.querySelectorAll('.left-menu ul li');
    const topMenuItems = document.querySelectorAll('.top-menu ul li');
    const optionContents = document.querySelectorAll('.option-content');

    let selectedModule = 'com1321';
    let selectedOption = 'books';

    // Function to load content based on selected module and option
    function loadContent() {
        const contentDiv = document.getElementById(selectedOption);
        contentDiv.innerHTML = ''; // Clear previous content

        // Example data for books
        const booksData = {
            com1321: [
                { title: 'Book 1', image: 'book1.jpg', file: 'book1.pdf' },
                { title: 'Book 2', image: 'book2.jpg', file: 'book2.pdf' }
            ],
            com1122: [
                { title: 'Book 3', image: 'book3.jpg', file: 'book3.pdf' },
                { title: 'Book 4', image: 'book4.jpg', file: 'book4.pdf' }
            ],
            com1124: [
                { title: 'Book 5', image: 'book5.jpg', file: 'book5.pdf' },
                { title: 'Book 6', image: 'book6.jpg', file: 'book6.pdf' }
            ]
        };

        if (selectedOption === 'books') {
            booksData[selectedModule].forEach(book => {
                const bookItem = document.createElement('div');
                bookItem.className = 'book-item';

                const bookImage = document.createElement('img');
                bookImage.src = book.image;
                bookImage.alt = book.title;

                const downloadButton = document.createElement('button');
                downloadButton.className = 'download-button';
                downloadButton.textContent = 'Download';
                downloadButton.onclick = () => {
                    window.location.href = book.file;
                };

                bookItem.appendChild(bookImage);
                bookItem.appendChild(document.createTextNode(book.title));
                bookItem.appendChild(downloadButton);

                contentDiv.appendChild(bookItem);
            });
        }

        // Show the selected option content
        optionContents.forEach(content => {
            content.style.display = 'none';
        });
        contentDiv.style.display = 'block';
    }

    // Event listeners for left menu items
    leftMenuItems.forEach(item => {
        item.addEventListener('click', function() {
            selectedModule = this.getAttribute('data-module');
            loadContent();
        });
    });

    // Event listeners for top menu items
    topMenuItems.forEach(item => {
        item.addEventListener('click', function() {
            selectedOption = this.getAttribute('data-option');
            loadContent();
        });
    });

    // Load initial content
    loadContent();
});