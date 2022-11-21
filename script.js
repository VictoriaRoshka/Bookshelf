const books = [
    {
        title:'Портрет Дориана Грея',
        author: 'Оскар Уайльд',
        year: '1890',
        image:'images/дориан.jpg',
        id: 1
    },
    {
        title:'Граф Монте-Кристо',
        author: 'Александр Дюма',
        year: '1844',
        image:'images/граф.jpg',
        id: 2
    },
    {
        title:'До встречи с тобой',
        author:'Джоджо Мойес',
        year: '2012',
        image: 'images/до встречи.jpg',
        id: 3
    },
    {
        title:'После тебя',
        author:'Джоджо Мойес',
        year:'2015',
        image:'images/после тебя.jpg',
        id: 4
    },
    {
        title:'Все та же я',
        author:'Джоджо Мойес',
        year:'2018',
        image:'images/все та же я.jpg',
        id: 5
    },
    {
        title:'Первое правило волшебника',
        author:'Терри Гудкайнд',
        year:'1994',
        image:'images/Первое правило.jpg',
        id: 6
    },
    
]
const addButton = document.getElementById('bookMenu')
const getBook = document.getElementById('addBook')

addButton.addEventListener('click', addBook)
getBook.addEventListener('click', saveBook)

let bookBox = document.getElementById('container')
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
                <button class="btn btn_delete" onclick='deleteBook(${book.id})'>Удалить</button>
          </div>
        </div>`
    })
}



function deleteBook(id){
    const book = books.find((b) => {
        return b.id === id
    })
    const bookIndex = books.indexOf(book)

    books.splice(bookIndex, 1)

    renderBooks()
}

function clearForm(){
    document.getElementById('title').value = ""
    document.getElementById('author').value = ""
    document.getElementById('year').value = ""
    document.getElementById('image').value = ""
}

let isOpen = false
function addBook(){
    const addContainer = document.getElementById('add-container')
    const addButton = document.getElementById('bookMenu')

    if (isOpen){

        addContainer.style.display = "none"

        isOpen = false
    } else {
        
        addContainer.style.display = "flex"

        isOpen = true

    }
}

function saveBook(){
    const btnAdd = document.getElementById('addBook')
    const titleBook = document.getElementById('title').value
    const authorBook = document.getElementById('author').value
    const yearBook = document.getElementById('year').value
    let imageBook = document.getElementById('image').value
    let image 


    if (titleBook == 0){
        alert('Укажите название книги')
        addContainer.style.display = "flex"
        return
    }
    if (authorBook == 0){
        alert('Укажите автора')
        addContainer.style.display = "flex"
        return
    }
    if (yearBook == 0){
        alert('Укажите год издания')
        addContainer.style.display = "flex"
        return
    }
    if(imageBook == 0){
        imageBook = 'images/ImageFail.png'
    }
    let book = {
        title: titleBook,
        author: authorBook,
        year: yearBook,
        image: imageBook
    }
    books.unshift(book)

    renderBooks()
    clearForm()
}
renderBooks()

