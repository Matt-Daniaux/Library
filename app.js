const myLibrary = []
const container = document.querySelector('.container')

const formTransparent = document.querySelector('.form-transparent')

function Book(title, author, pages, readChoice) {
	this.title = title
	this.author = author
	this.pages = pages
	this.read = readChoice
}

function addBookToLibrary(title, author, pages, read) {
	const book = new Book(title, author, pages, read)
	myLibrary.push(book)

	// Return to normal display (blur when form appear)
	formTransparent.classList.remove('blur-and-form')

	// Add Book To Display
	myLibrary[myLibrary.length - 1].bookContainer()
}

// New book btn --> make appear form
const newBookBtn = document.querySelector('.new-book-btn')

newBookBtn.addEventListener('click', () => {
	formTransparent.classList.add('blur-and-form')
})

// Form cancel btn
const cancel = document.querySelector('.cancel')

cancel.addEventListener('click', () => {
	formTransparent.classList.remove('blur-and-form')
})

// Add book btn to library[] and display
const addBtn = document.querySelector('.addBtn')
const formBook = document.querySelector('.form-add-book')

addBtn.addEventListener('click', () => {
	const title = formBook.elements[0].value
	const author = formBook.elements[1].value
	const pages = formBook.elements[2].value
	const read = formBook.elements.read.value

	addBookToLibrary(title, author, pages, read)
})

Book.prototype.bookContainer = function () {
	const newDiv = document.createElement('div')
	newDiv.classList.add('card')

	container.appendChild(newDiv)

	const p1 = document.createElement('p')
	p1.textContent = `Title: ${this.title}`
	newDiv.appendChild(p1)

	const p2 = document.createElement('p')
	p2.textContent = `Author: ${this.author}`
	newDiv.appendChild(p2)

	const p3 = document.createElement('p')
	p3.textContent = `Pages: ${this.pages}`
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

	if (this.read === 'true') {
		toggleReadBtn.textContent = 'Yes'
	} else {
		toggleReadBtn.textContent = 'No'
	}

	toggleReadBtn.addEventListener('click', () => {
		if (toggleReadBtn.textContent === 'No') {
			toggleReadBtn.textContent = 'Yes'
			this.read = 'Yes'
		} else {
			toggleReadBtn.textContent = 'No'
			this.read = 'No'
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

// Demo display
addBookToLibrary('Lord', 'Lether', '298', 'true')
addBookToLibrary('Labou', 'Miou', '1298', 'false')
