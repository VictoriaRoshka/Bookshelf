let count = 0
let books = [
    {
        title:'Портрет Дориана Грея',
        author: 'Оскар Уайльд',
        year: '1890',
        image:'images/дориан.jpg',
        id: count++
    },
    {
        title:'Граф Монте-Кристо',
        author: 'Александр Дюма',
        year: '1844',
        image:'images/граф.jpg',
        id: count++
    },
    {
        title:'До встречи с тобой',
        author:'Джоджо Мойес',
        year: '2012',
        image: 'images/до встречи.jpg',
        id: count++
    },
    {
        title:'После тебя',
        author:'Джоджо Мойес',
        year:'2015',
        image:'images/после тебя.jpg',
        id: count++
    },
    {
        title:'Все та же я',
        author:'Джоджо Мойес',
        year:'2018',
        image:'images/все та же я.jpg',
        id: count++
    },
    {
        title:'Первое правило волшебника',
        author:'Терри Гудкайнд',
        year:'1994',
        image:'images/Первое правило.jpg',
        id: count++
    },
    
]
const addContainer = document.getElementById('add-container')
const addButton = document.getElementById('openModal-btn')
const getBook = document.getElementById('saveBook__btn')
const closeBtn = document.getElementById('closeModal')
let bookBox = document.getElementById('container')

addButton.addEventListener('click', addBook)
getBook.addEventListener('click', saveBook)
closeBtn.addEventListener('click', closeModal)


function closeModal(){

    addContainer.style.display = "none"
}

function saveToLocalStorage(){

    const booksJSON = JSON.stringify(books)
    localStorage.setItem('books', booksJSON)
}



function renderBooks(){
    bookBox.innerHTML = ""
    books.forEach(function(book) {
        bookBox.innerHTML += `
        <div class="bookBox__item">
         <img class="bookBox__item_image" src="${book.image}" alt="" />
         <div class="bookBox__item_title">${book.title}</div>
         <div class="bookBox__item_year">${book.year}</div>
         <div class="bookBox__item_author">${book.author}</div>
         <div class="bookBox__item_buttons">
                <button class="btn btn_change">Изменить</button>
                <button class="btn btn_delete_${book.id}">Удалить</button>
          </div>
        </div>`
    })

    books.forEach((book) => {
        const deleteButton = document.getElementsByClassName('btn_delete_${book.id}')

        function makeDelete (){
            deleteBook(book.id)
        }

        deleteButton.addEventListener('click', makeDelete) 
    })
    
}

function deleteBook(id){
    const book = books.find((b) => {
        return b.id === id
    })
    const bookIndex = books.indexOf(book)

    books.splice(bookIndex, 1)

    renderBooks()
    saveToLocalStorage()

    
}

function clearForm(){
    document.getElementById('title').value = ""
    document.getElementById('author').value = ""
    document.getElementById('year').value = ""
    document.getElementById('image').value = ""
}

let isOpen = false
function addBook(){
    

    if (isOpen){

        addContainer.style.display = "none"

        isOpen = false
    } else {
        
        addContainer.style.display = "flex"

        isOpen = true

    }
}

function saveBook(){
    const btnAdd = document.getElementById('saveBook__btn')
    const titleBook = document.getElementById('title').value
    const authorBook = document.getElementById('author').value
    const yearBook = document.getElementById('year').value
    let imageBook = document.getElementById('image').value
    let image 


    if (titleBook.length === 0){
        alert('Укажите название книги')
        addContainer.style.display = "flex"
        return
    }
    if (authorBook.length === 0){
        alert('Укажите автора')
        addContainer.style.display = "flex"
        return
    }
    if (yearBook.length === 0){
        alert('Укажите год издания')
        addContainer.style.display = "flex"
        return
    }
    if(imageBook.length === 0){
        imageBook = 'images/ImageFail.png'
    }
    let book = {
        title: titleBook,
        author: authorBook,
        year: yearBook,
        image: imageBook,
        id: count++
    }
    books.unshift(book)

    renderBooks()
    clearForm()
    addBook()
    saveToLocalStorage()
}
    
const booksJson = localStorage.getItem('books')
const savedBooks = JSON.parse(booksJson)

if (booksJson){
books = savedBooks
}

renderBooks()

