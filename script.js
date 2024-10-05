const tagOptions = ['p','h1','h2','h3','h4','h5','h6','span'];

const optionsContainer = document.querySelector('.options'),
outputContainer = document.querySelector('.output'),
tagSelect = document.getElementById('tags'),
paragraphsSlider = document.getElementById('paragraphs'),
wordsSlider = document.getElementById('words'),
paragraphsValue = document.getElementById('paragraphsValue'),
wordsValue = document.getElementById('wordsValue');

function createOptionsUI() {
    // With tag options, fill up the <select> element.
    tagOptions.forEach((tag) => {
        const option = document.createElement('option');
        option.value = tag;
        option.textContent = `<${tag}>`;
        tagSelect.appendChild(option)
    })
}

// Event listeners for sliders
paragraphsSlider.addEventListener('input', updateParagraphsValue);
wordsSlider.addEventListener('input', updateWordsValue);

const generateButton = document.getElementById('generate');
generateButton.addEventListener('click', generateLoremIpsum);

function updateParagraphsValue () {
    paragraphsValue.textContent = '';
    paragraphsValue.textContent = paragraphsSlider.value;
}

function updateWordsValue() {
    wordsValue.textContent = '';
    wordsValue.textContent = wordsSlider.value;
}

// Generate Lorem Ipsum text
function generateLoremIpsum() {
    const paragraphs = parseInt(paragraphsSlider.value);

    const tag = tagSelect.value, includeHtml = document.getElementById('include').value;
    const wordsPerParagraph = parseInt(wordsSlider.value);

    const loremIpsumText = generateText(paragraphs, tag, includeHtml, wordsPerParagraph);
    displayLoremIpsum(loremIpsumText);
}

// function to generate Lorem Ipsum text
function generateText(paragraphs, tag, includeHtml, wordsPerParagraph) {

    // Use a placeholder text as an
    // Example of illustrating
    const placeholderText = `Lorem ipsum dolor sit amet  
    consectetur adipiscing elit sed  
    do eiusmod tempor incididunt ut 
    labore et dolore magna aliqua.`;

    const loremIpsumArray = new Array(paragraphs).fill('');

    // Generate words for each paragraph
    for (let i = 0; i < paragraphs; i++) {
        const words = generateWords(wordsPerParagraph);
        loremIpsumArray[i] = includeHtml === 'Yes' ?
        `<${tag}>${words}</${tag}>` : words;
}
    //join the paragraphs into a single string
    return loremIpsumArray.join('\n');
};

function generateWords(numWords) {

    //Lorem Ipsum text for demonstration process
    const loremIpsumText = `
    Lorem ipsum dolor sit amet, consectetur  
        adipiscing elit, sed do eiusmod tempor  
        incididunt ut labore et dolore magna  
        aliqua. Diam in arcu cursus euismod  
        quis viverra nibh. Nunc aliquet bibendum 
        enim facilisis gravida neque convallis  
        a cras. Sagittis purus sit amet volutpat 
        Consequat mauris. Duis ultricies lacus  
        sed turpis tincidunt id. Consequat interdum 
        varius sit amet mattis vulputate. Enim sed 
        faucibus turpis in eu. Ridiculus mus mauris 
        vitae ultricies leo integer malesuada nunc vel. 
        Nulla pharetra diam sit amet nisl suscipit. 
        Lobortis elementum nibh tellus molestie nunc 
        non blandit massa enim. Dis parturient montes 
        nascetur ridiculus mus. Justo nec ultrices dui 
        sapien eget. Enim tortor at auctor urna nunc. 
        Dictumst quisque sagittis purus sit amet volutpat 
        consequat mauris nunc.
    `;

    //split the text into words
    const words = loremIpsumText.split(' ');
    // Ensure the number of words requested is  
    // within the bounds of the available words 

    if(numWords <= words.length) {
        return words.slice(0, numWords).join(' ');
    }else {
        return words.join(' ');
    }
}

//Display Lorem Ipsum text 
function displayLoremIpsum(text) {
    outputContainer.innerHTML = text;
}

//Initialize the app
createOptionsUI();