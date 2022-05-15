const store = {
    restaurants: [
        {id: 1, title: 'Name restaurant 1', url: 'first-restauran'},
        {id: 2, title: 'Name restaurant 2', url: 'second-restauran'},
        {id: 3, title: 'Name restaurant 3', url: 'third-restauran'}
    ],
    burgers: {
        burger_1: {
            name: 'Name burger 1',
            img: 'https://tutknow.ru/uploads/posts/2016-05/1463770857_1.jpg',
            desc: 'Описание бургера 1',
            price: 90,
            status: 'available'
        },
        burger_2: {
            name: 'Name burger 2',
            img: 'https://img.povar.ru/main/0f/d3/24/ae/chernii_burger-609464.jpeg',
            desc: 'Описание бургера 2',
            price: 90,
            status: 'available'
        },
        burger_3: {
            name: 'Name burger 3',
            img: 'https://n1s1.elle.ru/28/5e/41/285e41a205baa4f30deab9fd4181ac9e/728x485_1_990554df51ea399af9fd85b80a9b4e27@1181x787_0xac120003_19124558741556098036.jpg',
            desc: 'Описание бургера 3',
            price: 90,
            status: 'available'
        }
    }
}
export default store