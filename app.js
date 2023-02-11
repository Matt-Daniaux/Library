const myLibrary = []

function Book(title, author, pages, read) {
	this.title = title
	this.author = author
	this.pages = pages
	this.read = read
}

Book.prototype.info = function () {
	return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
}

function addBookToLibrary(title, author, pages, read) {
	const book = new Book(title, author, pages, read)
	myLibrary.push(book)
}

addBookToLibrary('yo', 'jo', '298', false)
addBookToLibrary('maybe', 'jesys', '290', true)
addBookToLibrary('lol', 'jesys', '290', true)

myLibrary.forEach((element, index) => {
	const newDiv = document.createElement('div')
	newDiv.classList.add('card')
	const container = document.querySelector('.container')
	container.appendChild(newDiv)
	newDiv.textContent = myLibrary[index].info()
})
