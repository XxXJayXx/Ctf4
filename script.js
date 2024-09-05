// الجزء الثالث من الفلاق
// 12010013620710_}

function loadHiddenAPI() {
    fetch('/hidden-api')
        .then(response => response.json())
        .then(data => {
            alert('Hmm, something interesting is happening. Check the Network tab for clues!');
        });
}
