const myLibrary = []

class Book {
	constructor(title, author, pages, readChoice) {
		this.title = title
		this.author = author
		this.pages = pages
		this.read = readChoice
	}

	addBookToLibrary() {
		myLibrary.push(this)
	}

	bookDisplayContainer() {
		const container = document.querySelector('.container')
		const newDiv = document.createElement('div')
		const p1 = document.createElement('p')
		const p2 = document.createElement('p')
		const p3 = document.createElement('p')
		const readDiv = document.createElement('div')
		const p4 = document.createElement('p')
		const toggleReadBtn = document.createElement('button')
		const deleteBtn = document.createElement('button')

		newDiv.classList.add('card')
		readDiv.classList.add('read-div')
		toggleReadBtn.classList.add('read-btn')
		deleteBtn.classList.add('delete-btn')

		toggleReadBtn.setAttribute('type', 'button')
		deleteBtn.setAttribute('type', 'button')

		container.appendChild(newDiv)
		newDiv.appendChild(p1)
		newDiv.appendChild(p2)
		newDiv.appendChild(p3)
		newDiv.appendChild(readDiv)
		readDiv.appendChild(p4)
		readDiv.appendChild(toggleReadBtn)
		newDiv.appendChild(deleteBtn)

		p1.textContent = `Title: ${this.title}`
		p2.textContent = `Author: ${this.author}`
		p3.textContent = `Pages: ${this.pages}`
		p4.textContent = `Read? :`
		deleteBtn.textContent = 'Remove'

		// Toggle btn initialization and onClick
		if (this.read === true) {
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

		deleteBtn.addEventListener('click', () => {
			const node = deleteBtn.parentNode.firstChild.textContent.slice(7)
			const nodeIndex = myLibrary.findIndex((book) => book.title === node)
			myLibrary.splice(nodeIndex, 1)

			deleteBtn.parentNode.remove()
		})
	}

	addToDisplayAndLibrary() {
		this.addBookToLibrary()
		this.bookDisplayContainer()
	}
}

// eslint-disable-next-line no-unused-vars
const btn = (() => {
	const newBookBtn = document.querySelector('.new-book-btn')
	const cancelForm = document.querySelector('.cancel')
	const addBtn = document.querySelector('.addBtn')
	const formBook = document.querySelector('.form-add-book')
	const formTransparent = document.querySelector('.form-transparent')

	newBookBtn.addEventListener('click', () => {
		formTransparent.classList.add('blur-and-form')
	})

	cancelForm.addEventListener('click', () => {
		formTransparent.classList.remove('blur-and-form')
	})

	addBtn.addEventListener('click', () => {
		const book = new Book(
			formBook.elements[0].value,
			formBook.elements[1].value,
			formBook.elements[2].value,
			formBook.elements.read.checked
		)
		book.addToDisplayAndLibrary()
		formTransparent.classList.remove('blur-and-form')
		formBook.elements[0].value = ''
		formBook.elements[1].value = ''
		formBook.elements[2].value = ''
	})
})()

// Demo display
const lord = new Book('Lord', 'Lether', '298', 'true')
const labou = new Book('Labou', 'Miou', '1298', 'false')

lord.addToDisplayAndLibrary()
labou.addToDisplayAndLibrary()
