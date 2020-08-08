//1

const count = () => {
    const options = document.getElementsByTagName('option');
    document.getElementById('count').innerHTML = options.length;
}

count();

//2

function new_background() {
    const color = document.getElementById('color').value;
    const paragraph = document.getElementsByTagName('p')[0];
    paragraph.style.background = color;
}

//3

function change_link() {
    const link = document.getElementById('link');
    link.href = 'https://www.twitter.com';
}

//4

function add_li() {
    const list = document.getElementsByTagName('ul')[0];
    const textInput = document.getElementById('text_for_li');
    const li = document.createElement('li');
    li.innerHTML = textInput.value;
    list.appendChild(li);
    textInput.value = '';
}

//5

function font_color() {
    const arr = [...document.getElementsByTagName('li')];
    arr.forEach((el, i) => el.style.color = i % 2 ? 'red' : 'green');
}

//6

function width_height() {
    const width = document.documentElement.clientWidth;
    const height = document.documentElement.clientHeight;
    document.getElementById('w_h').innerHTML = `<h4> Width: ${width}, Height: ${height}</h4>`;
}