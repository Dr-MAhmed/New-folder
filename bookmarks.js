// Get bookmarks from local storage
function getBookmarks() {
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    if (!bookmarks) {
        bookmarks = [];
    }
    return bookmarks;
}

// Save bookmark
function saveBookmark() {
    const siteName = document.getElementById('siteName').value;
    const siteURL = document.getElementById('siteURL').value;

    if (!siteName || !siteURL) {
        alert('Please fill in both fields');
        return;
    }

    const bookmark = {
        name: siteName,
        url: siteURL
    };

    let bookmarks = getBookmarks();
    bookmarks.push(bookmark);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    document.getElementById('siteName').value = '';
    document.getElementById('siteURL').value = '';

    showBookmarks();
}

// Show bookmarks
function showBookmarks() {
    const bookmarks = getBookmarks();
    const bookmarksResults = document.getElementById('bookmarksResults');

    let output = '';
    bookmarks.forEach(bookmark => {
        output += `
            <div class="bookmark">
                <h3>${bookmark.name}</h3>
                <a href="${bookmark.url}" class="link" target="_blank">${bookmark.url}</a>
                <button onclick="deleteBookmark('${bookmark.url}')">Delete</button>
            </div>
        `;
    });

    bookmarksResults.innerHTML = output;
}

// Delete bookmark
function deleteBookmark(url) {
    let bookmarks = getBookmarks();
    bookmarks = bookmarks.filter(bookmark => bookmark.url !== url);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    showBookmarks();
}

// Initial function call
showBookmarks();