const books = [
    {
        title:'Портрет Дориана Грея',
        author: 'Оскар Уайльд',
        year: '1890',
        image:'<img class="bookBox__item_image" src="images/дориан.jpg" alt=""/>',
        id: 1
    },
    {
        title:'Граф Монте-Кристо',
        author: 'Александр Дюма',
        year: '1844',
        image:'<img class="bookBox__item_image" src="images/граф.jpg" alt=""/>',
        id: 2
    },
    {
        title:'До встречи с тобой',
        author:'Джоджо Мойес',
        year: '2012',
        image: '<img class="bookBox__item_image" src="images/до встречи.jpg" alt=""/>',
        id: 3
    },
    {
        title:'После тебя',
        author:'Джоджо Мойес',
        year:'2015',
        image:'<img class="bookBox__item_image" src="images/после тебя.jpg" alt=""/>',
        id: 4
    },
    {
        title:'Все та же я',
        author:'Джоджо Мойес',
        year:'2018',
        image:'<img class="bookBox__item_image" src="images/все та же я.jpg" alt=""/>',
        id: 5
    },
    {
        title:'Первое правило волшебника',
        author:'Терри Гудкайнд',
        year:'1994',
        image:'<img class="bookBox__item_image" src="images/Первое правило.jpg" alt=""/>',
        id: 6
    },
    
]
let bookBox = document.getElementById('container')
function renderBooks(){
    bookBox.innerHTML = ""
    books.forEach(function(book) {
        bookBox.innerHTML += `
        <div class="bookBox__item">
         <div>${book.image}</div>
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
    const imageBook = document.getElementById('image').value


    const book = {
        title: titleBook,
        author: authorBook,
        year: yearBook,
        image: imageBook
    }
    books.push(book)

    renderBooks()
    clearForm()
    
}
renderBooks()


