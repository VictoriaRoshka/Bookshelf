const books = [
    {
        title:'Портрет Дориана Грея',
        author: 'Оскар Уайльд',
        year: '1890',
        image:'<img src="images/дориан.jpg" alt=""/>'
    },
    {
        title:'Граф Монте-Кристо',
        author: 'Александр Дюма',
        year: '1844',
        image:'<img src="images/граф.jpg" alt=""/>'
    },
    {
        title:'До встречи с тобой',
        author:'Джоджо Мойес',
        year: '2012',
        image: '<img src="images/до встречи.jpg" alt=""/>',
    },
    {
        title:'После тебя',
        author:'Джоджо Мойес',
        year:'2015',
        image:'<img src="images/после тебя.jpg" alt=""/>'
    },
    {
        title:'Все та же я',
        author:'Джоджо Мойес',
        year:'2018',
        image:'<img src="images/все та же я.jpg" alt=""/>'
    },
    {
        title:'Первое правило волшебника',
        author:'Терри Гудкайнд',
        year:'1994',
        image:'<img src="images/Первое правило.jpg" alt=""/>'
    },
    {
        title:'Второе правило волшебника',
        author:'Терри Гудкайнд',
        year:'1995',
        image:'<img src="images/Второе правило.jpg" alt=""/>'
    },
    {
        title:'Третье правило Волшебника',
        author:'Терри Гудкайнд',
        year:'1996',
        image:'<img src="images/3 правило.jpg" alt=""/>'
    },
    {
        title:'Четвертое правило волшебника',
        author:'Терри Гудкайнд',
        year:'1997',
        image:'<img src="images/4 правило.jpg" alt=""/>'
    },
    {
        title:'Пятое правило волшебника',
        author:'Терри Гудкайнд',
        year:'1999',
        image:'<img src="images/5 правило.jpg" alt=""/>'
    },
    {
        title:'Шестое правило волшебника',
        author:'Терри Гудкайнд',
        year:'2000',
        image:'<img src="images/6 правило.jpg" alt=""/>'
    },
    {
        title:'Седьмое правило волшебника. Книга 1',
        author:'Терри Гудкайнд',
        year:'2001',
        image:'<img src="images/7 правило.jpg" alt=""/>'
    },
    {
        title:'Седьмое правило волшебника. Книга 2',
        author:'Терри Гудкайнд',
        year:'2001',
        image:'<img src="images/7 2 правило.jpg" alt=""/>'
    },
    {
        title:'Восьмое правило волшебника. Книга 1',
        author:'Терри Гудкайнд',
        year:'2003',
        image:'<img src="images/8 правило.jpg" alt=""/>'
    },
    {
        title:'Восьмое правило волшебника. Книга 2',
        author:'Терри Гудкайнд',
        year:'2003',
        image:'<img src="images/8 2 правило.jpg" alt=""/>'
    },
    {
        title:'Девятое правило волшебника',
        author:'Терри Гудкайнд',
        year:'2005',
        image:'<img src="images/9 правило.jpg" alt=""/>'
    },
    {
        title:'Десятое правило волшебника',
        author:'Терри Гудкайнд',
        year:'2006',
        image:'<img src="images/10 правило.jpg" alt=""/>'
    },
    {
        title:'Последнее правило волшебника',
        author:'Терри Гудкайнд',
        year:'2007',
        image:'<img src="images/последнее правило.jpg" alt=""/>'
    }
]
let bookBox = document.getElementById('container')

books.forEach(function(book) {
    bookBox.innerHTML += `
    <div class="bookBox__item">
     <div class="bookBox__item_image">${book.image}</div>
     <div class="bookBox__item_title">${book.title}</div>
     <div class="bookBox__item_year">${book.year}</div>
     <div class="bookBox__item_author">${book.author}</div>
     <div class="bookBox__item_buttons">
            <button class="btn btn_change">Изменить</button>
            <button class="btn btn_delete">Удалить</button>
      </div>
    </div>`
})