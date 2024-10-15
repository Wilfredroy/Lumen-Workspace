// script.js

// Text Formatting Functions
function formatText(command) {
    document.execCommand(command, false, null);
}

function changeFontFamily(value) {
    document.execCommand('fontName', false, value);
}

function changeFontSize(value) {
    document.execCommand('fontSize', false, value);
}

// Change Text Color
function changeFontColor() {
    const color = prompt('Enter a color (name or hex code):');
    document.execCommand('foreColor', false, color);
}

// Highlight Text
function highlightText() {
    const color = prompt('Enter highlight color (name or hex code):');
    document.execCommand('backColor', false, color);
}

// Insert Image
function insertImage() {
    const imageUrl = prompt('Enter image URL:');
    if (imageUrl) {
        document.execCommand('insertImage', false, imageUrl);
    }
}

// Create Table
function createTable() {
    const rows = prompt('Enter number of rows:');
    const cols = prompt('Enter number of columns:');
    let tableHtml = '<table border="1"><tbody>';
    for (let i = 0; i < rows; i++) {
        tableHtml += '<tr>';
        for (let j = 0; j < cols; j++) {
            tableHtml += '<td></td>';
        }
        tableHtml += '</tr>';
    }
    tableHtml += '</tbody></table>';
    document.execCommand('insertHTML', false, tableHtml);
}

// Insert Hyperlink
function insertLink() {
    const url = prompt('Enter the URL:');
    const selectedText = window.getSelection().toString();
    if (url && selectedText) {
        const linkHtml = `<a href="${url}" target="_blank">${selectedText}</a>`;
        document.execCommand('insertHTML', false, linkHtml);
    }
}

// Undo and Redo Functions
function undo() {
    document.execCommand('undo', false, null);
}

function redo() {
    document.execCommand('redo', false, null);
}

// Print Document
function printDocument() {
    window.print();
}

// Save to Cloud (Dummy Function)
function saveToCloud() {
    alert('Saving to cloud... (this feature needs implementation)');
}

// Generate Table of Contents
function generateTOC() {
    const headings = document.querySelectorAll('h1, h2, h3');
    const tocList = document.getElementById('outlineList');
    tocList.innerHTML = ''; // Clear existing TOC
    headings.forEach((heading, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<a href="#${heading.id || 'heading' + index}">${heading.innerText}</a>`;
        tocList.appendChild(listItem);
        
        // Assign IDs to headings if not present
        if (!heading.id) {
            heading.id = 'heading' + index;
        }
    });
}

// Example function for dictation (voice recognition - dummy implementation)
function startDictation() {
    alert('Voice dictation is not implemented yet.');
}

// Example function for inserting comments (dummy implementation)
function insertComment() {
    const comment = prompt('Enter your comment:');
    if (comment) {
        const commentHtml = `<span style="color: blue; font-style: italic;">[Comment: ${comment}]</span>`;
        document.execCommand('insertHTML', false, commentHtml);
    }
}

// Example function for inserting symbols (dummy implementation)
function insertSymbol() {
    const symbol = prompt('Enter the symbol:');
    if (symbol) {
        document.execCommand('insertHTML', false, symbol);
    }
}

// Example function for inserting media (dummy implementation)
function insertMedia() {
    const mediaUrl = prompt('Enter media URL:');
    if (mediaUrl) {
        const mediaHtml = `<video controls src="${mediaUrl}" width="300"></video>`;
        document.execCommand('insertHTML', false, mediaHtml);
    }
}

// Trigger the file input to upload an image from local storage
function insertImage() {
    const fileInput = document.getElementById('imageInput');
    fileInput.click(); // Simulate click on hidden file input
}

// Handle the image upload and insert the image into the document area
function handleImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = `<img src="${e.target.result}" alt="Image" style="max-width: 100%; height: auto;">`;
            document.execCommand('insertHTML', false, img);
        };
        reader.readAsDataURL(file); // Convert image to base64 string
    }
}
