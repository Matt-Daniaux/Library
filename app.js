const myLibrary = []

function Book(title, author, pages, readChoice) {
	this.title = title
	this.author = author
	this.pages = pages
	this.read = readChoice
}

Book.prototype.info = function () {
	return `${this.title} 
			by ${this.author}, 
			${this.pages} pages, 
			read: ${this.read}`
}

Book.prototype.readOrNot = function () {}

function addBookToLibrary(title, author, pages, read) {
	let readChoice = ''

	if (read === true) {
		readChoice = 'Yes'
	} else {
		readChoice = 'No'
	}

	const book = new Book(title, author, pages, readChoice)
	myLibrary.push(book)
}

addBookToLibrary('King', 'Joe Mo', '298', false)
addBookToLibrary('Les enfants', 'Jesys Lorec', '290', true)
addBookToLibrary('Petit noel brun', 'Carrel Moten', '1290', true)

const container = document.querySelector('.container')

function bookContent(index) {
	const newDiv = document.createElement('div')
	newDiv.classList.add('card')

	container.appendChild(newDiv)

	const p1 = document.createElement('p')
	p1.textContent = `Title: ${myLibrary[index].title}`
	newDiv.appendChild(p1)

	const p2 = document.createElement('p')
	p2.textContent = `Author: ${myLibrary[index].author}`
	newDiv.appendChild(p2)

	const p3 = document.createElement('p')
	p3.textContent = `Pages: ${myLibrary[index].pages}`
	newDiv.appendChild(p3)

	const readDiv = document.createElement('div')
	readDiv.classList.add('read-div')
	newDiv.appendChild(readDiv)

	const p4 = document.createElement('p')
	p4.textContent = `Read? :`
	readDiv.appendChild(p4)

	const toggleReadBtn = document.createElement('button')
	toggleReadBtn.classList.add('read-btn')
	toggleReadBtn.setAttribute('type', 'button')
	readDiv.appendChild(toggleReadBtn)
	if (myLibrary[index].read === 'Yes') {
		toggleReadBtn.textContent = 'Yes'
	} else {
		toggleReadBtn.textContent = 'No'
	}
	toggleReadBtn.addEventListener('click', () => {
		if (myLibrary[index].read === 'Yes') {
			myLibrary[index].read = 'No'
			toggleReadBtn.textContent = 'No'
		} else {
			toggleReadBtn.textContent = 'Yes'
			myLibrary[index].read = 'Yes'
		}
	})

	const deleteBtn = document.createElement('button')
	deleteBtn.classList.add('delete-btn')
	deleteBtn.setAttribute('type', 'button')
	deleteBtn.textContent = 'Remove'
	newDiv.appendChild(deleteBtn)

	deleteBtn.addEventListener('click', () => {
		const node = deleteBtn.parentNode.firstChild.textContent.slice(7)
		const nodeIndex = myLibrary.findIndex((book) => book.title === node)
		myLibrary.splice(nodeIndex, 1)

		deleteBtn.parentNode.remove()
	})
}

function displayBook() {
	myLibrary.forEach((element, index) => {
		bookContent(index)
	})
}

displayBook()

const newBookBtn = document.querySelector('.new-book-btn')
const formTransparent = document.querySelector('.form-transparent')

newBookBtn.addEventListener('click', () => {
	formTransparent.classList.add('blur-and-form')
})

// Form cancel btn
const cancel = document.querySelector('.cancel')
cancel.addEventListener('click', () => {
	formTransparent.classList.remove('blur-and-form')
})

// Add btn
const addBtn = document.querySelector('.addBtn')
const formBook = document.querySelector('.form-add-book')

addBtn.addEventListener('click', () => {
	const title = formBook.elements[0].value
	const author = formBook.elements[1].value
	const pages = formBook.elements[2].value
	const read = formBook.elements.read.value

	addBookToLibrary(title, author, pages, read)

	// Return to display
	formTransparent.classList.remove('blur-and-form')

	// Add Book To Display
	const myLibraryI = myLibrary.length - 1
	bookContent(myLibraryI)
})
