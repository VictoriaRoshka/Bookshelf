const books = [
    {
        title:'Портрет Дориана Грея',
        author: 'Оскар Уайльд',
        year: '1890',
        image:'images/дориан.jpg'
    },
    {
        title:'До встречи с тобой',
        author:'Джоджо Мойес',
        year: '2012',
        image: 'images/до встречи.jpg',
    },
    {
        title:'После тебя',
        author:'Джоджо Мойес',
        year:'2015',
        image:'images/после тебя.jpg'
    },
    {
        title:'Все та же я',
        author:'Джоджо Мойес',
        year:'2018',
        image:'images/все та же я.jpg'
    },
    {
        title:'Первое правило волшебника',
        author:'Терри Гудкайнд',
        year:'1994',
        image:'images/Первое правило.jpg'
    },
    {
        title:'Второе правило волшебника',
        author:'Терри Гудкайнд',
        year:'1995',
        image:'images/Второе правило.jpg'
    },
    {
        title:'Третье правило Волшебника',
        author:'Терри Гудкайнд',
        year:'1996',
        image:'images/3 правило.jpg'
    },
    {
        title:'Четвертое правило волшебника',
        author:'Терри Гудкайнд',
        year:'1997',
        image:'images/4 правило.jpg'
    },
    {
        title:'Пятое правило волшебника',
        author:'Терри Гудкайнд',
        year:'1999',
        image:'images/5 правило.jpg'
    },
    {
        title:'Шестое правило волшебника',
        author:'Терри Гудкайнд',
        year:'2000',
        image:'images/6 правило.jpg'
    },
    {
        title:'Седьмое правило волшебника. Книга 1',
        author:'Терри Гудкайнд',
        year:'2001',
        image:'images/7 правило.jpg'
    },
    {
        title:'Седьмое правило волшебника. Книга 2',
        author:'Терри Гудкайнд',
        year:'2001',
        image:'images/7 2 правило.jpg'
    },
    {
        title:'Восьмое правило волшебника. Книга 1',
        author:'Терри Гудкайнд',
        year:'2003',
        image:'images/8 правило.jpg'
    },
    {
        title:'Восьмое правило волшебника. Книга 2',
        author:'Терри Гудкайнд',
        year:'2003',
        image:'images/8 2 правило.jpg'
    },
    {
        title:'Девятое правило волшебника',
        author:'Терри Гудкайнд',
        year:'2005',
        image:'images/9 правило.jpg'
    },
    {
        title:'Десятое правило волшебника',
        author:'Терри Гудкайнд',
        year:'2006',
        image:'images/10 правило.jpg'
    },
    {
        title:'Последнее правило волшебника',
        author:'Терри Гудкайнд',
        year:'2007',
        image:'images/последнее правило.jpg'
    }
]
let bookBox = document.getElementById('container')

books.forEach(function(book) {
    bookBox.innerHTML += `
    <div class="bookBox__item">
     <div class="bookBox__item_image">${image}</div>
     <div class="bookBox__item_title">${title}</div>
     <div class="bookBox__item_year">${year}</div>
     <div class="bookBox__item_author">${author}</div>
     <div class="bookBox__item_buttons">
            <button class="btn_change">Изменить</button>
            <button class="btn_delete">Удалить</button>
      </div>
    </div>`
})