const audio = document.getElementById("backgroundMusic");
const audioQuery = document.querySelector("audio");

window.addEventListener("DOMContentLoaded", event => {
    audioQuery.volume = 1;
    // Remove the following line to prevent automatic playback
    // audioQuery.play();
});

function audioController() {
    if (!audio.paused) {
        audio.pause();
    } else {
        audio.play();
    }
    // Remove the following line because imageChange() is already called inside audioController
    // imageChange();
}

let imageTracker = "i"; // Make sure to declare variables using "let" or "const"

function imageChange() {
    const image = document.getElementById("audioController");

    if (imageTracker === "i") {
        image.src = "resources/audioControllerOff.png";
        imageTracker = "I";
    } else {
        image.src = "resources/audioControllerOn.png";
        imageTracker = "i";
    }
}

const menuBtn = document.querySelector('.menuHamburger');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});

const list = document.querySelector('.rightBarStuff');

menuBtn.addEventListener('click', () => {
    list.classList.toggle('show');
});

const qq = document.querySelector(".dropdownContent");

function s() {
    qq.style.display = "flex";
}

function c() {
    qq.style.display = "none";
}

function showOrHide() {
    if (qq.style.display === "none") {
        s();
    } else {
        c();
    }
}


document.addEventListener("DOMContentLoaded", function() {
    // Assuming your table has an ID 'albumTable'
    var table = document.getElementById('albumTable');

    // Add click event to each header
    var headers = table.querySelectorAll('th');
    headers.forEach(function(header, index) {
        header.addEventListener('click', function() {
            sortTableByColumn(table, index);
        });
    });
});

function sortTableByColumn(table, column) {
    var rows = Array.from(table.querySelectorAll('tr:nth-child(n+2)')); // Skip the header row
    var ascending = rows[0].getAttribute('data-order') === 'asc';
    
    rows.sort(function(rowA, rowB) {
        var cellA = rowA.querySelectorAll('td')[column].textContent.trim();
        var cellB = rowB.querySelectorAll('td')[column].textContent.trim();
        return ascending ? cellA.localeCompare(cellB) : cellB.localeCompare(cellA);
    });

    rows.forEach(function(row) {
        table.appendChild(row); // Reorder the rows
    });

    // Toggle the order attribute
    rows[0].setAttribute('data-order', ascending ? 'desc' : 'asc');
}
