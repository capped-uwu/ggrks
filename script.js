document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);

    if (urlParams.has('s')) {
        const searchQuery = urlParams.get('s');
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
    }

    document.getElementById('search-button').addEventListener('click', function() {
        const query = document.getElementById('search-input').value;
        if (query) {
            window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
        } else {
            alert('検索するキーワードを入力してください。');
        }
    });
});
