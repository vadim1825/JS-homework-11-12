document.addEventListener('DOMContentLoaded', function() {

	//get the template

	var tmpl = _.template(document.getElementById('test').innerHTML);

	//create an object with content

    var data = {

        name: 'Полторацкий Вадим Александрович',

        first: [

            '<img src="img/слесарь.jpg" height="200" alt="Тут был слесарюга!">',

            'Слесарь-ремонтник ПАО "Сумыхимпром"',

            '<hr>',

            'Хочу учить фронтенд, потому что:'

        ],

        list: [

            'Интересная работа.',

            'Неограниченное "поле" для развития.',

            'Достойная заработная плата.'
        ],

        second: [

            '<hr>',

            'Мой контактный телефон: +380501426111',

            'Мой профиль в LinkedIn: <a href="https://ua.linkedin.com/in/vadim-poltoratsky-front-end">Vadim Poltoratsky</a>',

            '<hr>',

            'Мой фидбек: Я лоМАСТЕР на все руки'

        ]

    };

    //insert the content into the template

    var result = tmpl(data);

    //get the container for the generated html

    var wrapper = document.getElementsByTagName('body');

    //insert content on the page

    document.body.innerHTML = result;



});