const KEY = 'XKbwObOXb2OpxsT50qz9z0LptGgPjapX';
const url = 'https://api.giphy.com/v1/gifs/search'
const $gifDiv = $('#gif');
const $form = $('#form');
const $removeGifs = $('#deleteBtn')


// API function to find random gif and if error alert user
async function getGif(search) {
    try {
        const res = await axios.get(url, { params: { q: search, api_key: KEY } });
        const GifArr = res.data.data
        const randomGif = Math.floor(Math.random() * (GifArr.length))
        const gifURL = GifArr[randomGif].images.original.url
        createGif(gifURL);
    } catch (e) {
        alert('Sorry no gifs were found!')
    }

}

// create HTML and style for gifs
function createGif(gif) {
    const img = document.createElement('img');
    img.src = gif;
    img.classList.add('col-6', 'my-1', 'col-md-3', 'col-xl-2')
    $gifDiv.append(img);
}

// remove all gifs button
$removeGifs.on('click', (e) => {
    e.preventDefault();
    $gifDiv.empty();
})

// retrieve input and submit to API function
$form.on('click', function (e) {
    e.preventDefault();
    const input = $('#input').val()
    getGif(input);
    $("#input").val("");
})

// enable tool tips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})