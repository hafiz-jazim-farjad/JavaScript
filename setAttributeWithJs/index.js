let div = document.getElementsByTagName('div');
let image = document.createElement('img')
let h1 = document.createElement('h1')
let textInH1 = document.createTextNode('jazim here')

h1.appendChild(textInH1)

image.setAttribute('src', 'https://images.unsplash.com/photo-1575936123452-b67c3203c357')
image.setAttribute('height', '250px')





for (let i = 0; i < div.length; i++) {
    div[i].appendChild(image)
    div[i].appendChild(h1)
}