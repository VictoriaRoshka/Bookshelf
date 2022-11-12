const books = [
    {
        title:'Портрет Дориана Грея',
        author: 'Оскар Уайльд',
        year: '1890',
        image:'<img class="bookBox__item_image" src="images/дориан.jpg" alt=""/>'
    },
    {
        title:'Граф Монте-Кристо',
        author: 'Александр Дюма',
        year: '1844',
        image:'<img class="bookBox__item_image" src="images/граф.jpg" alt=""/>'
    },
    {
        title:'До встречи с тобой',
        author:'Джоджо Мойес',
        year: '2012',
        image: '<img class="bookBox__item_image" src="images/до встречи.jpg" alt=""/>',
    },
    {
        title:'После тебя',
        author:'Джоджо Мойес',
        year:'2015',
        image:'<img class="bookBox__item_image" src="images/после тебя.jpg" alt=""/>'
    },
    {
        title:'Все та же я',
        author:'Джоджо Мойес',
        year:'2018',
        image:'<img class="bookBox__item_image" src="images/все та же я.jpg" alt=""/>'
    },
    {
        title:'Первое правило волшебника',
        author:'Терри Гудкайнд',
        year:'1994',
        image:'<img class="bookBox__item_image" src="images/Первое правило.jpg" alt=""/>'
    },
    
]
let bookBox = document.getElementById('container')

books.forEach(function(book) {
    bookBox.innerHTML += `
    <div class="bookBox__item">
     <div>${book.image}</div>
     <div class="bookBox__item_title">${book.title}</div>
     <div class="bookBox__item_year">${book.year}</div>
     <div class="bookBox__item_author">${book.author}</div>
     <div class="bookBox__item_buttons">
            <button class="btn btn_change">Изменить</button>
            <button class="btn btn_delete">Удалить</button>
      </div>
    </div>`
})

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
                <button class="btn btn_delete">Удалить</button>
          </div>
        </div>`
    })

}

function clearForm(){
    document.getElementById('title').value = ""
    document.getElementById('author').value = ""
    document.getElementById('year').value = ""
    document.getElementById('image').value = ""
}

let isOpen = false
function addMenu(){
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

function addBook(){
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


