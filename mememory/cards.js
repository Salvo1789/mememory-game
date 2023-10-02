const cards = [
    { id: 1, name: "genius", image: src("https://img.buzzfeed.com/buzzfeed-static/static/2019-01/23/13/asset/buzzfeed-prod-web-06/sub-buzz-31148-1548266852-1.jpg?crop=700%3A700%3B0%2C0&downsize=300:*&output-format=auto&output-quality=auto")},
    { id: 2, name: "genius", image: src("https://img.buzzfeed.com/buzzfeed-static/static/2019-01/23/13/asset/buzzfeed-prod-web-06/sub-buzz-31148-1548266852-1.jpg?crop=700%3A700%3B0%2C0&downsize=300:*&output-format=auto&output-quality=auto")},
    { id: 3, name: "guy looks back", image: src("https://static1.pocketlintimages.com/wordpress/wp-content/uploads/140427-apps-news-the-best-stupidest-and-most-famous-internet-memes-around-image1-lm1toysfy4.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5")},
    { id: 4, name: "guy looks back", image: src("https://static1.pocketlintimages.com/wordpress/wp-content/uploads/140427-apps-news-the-best-stupidest-and-most-famous-internet-memes-around-image1-lm1toysfy4.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5")},
    { id: 5, name: "funny child stare", image: src("https://www.insideedition.com/sites/default/files/images/2021-09/sideye.jpg?crop=1170:658&width=1170")},
    { id: 6, name: "funny child stare", image: src("https://www.insideedition.com/sites/default/files/images/2021-09/sideye.jpg?crop=1170:658&width=1170")},
    { id: 7, name: "salt bae", image: src("https://img.buzzfeed.com/buzzfeed-static/static/2019-01/23/12/asset/buzzfeed-prod-web-05/sub-buzz-28390-1548266319-1.jpg?crop=400%3A400%3B0%2C0&downsize=300:*&output-format=auto&output-quality=auto")},
    { id: 8, name: "salt bae", image: src("https://img.buzzfeed.com/buzzfeed-static/static/2019-01/23/12/asset/buzzfeed-prod-web-05/sub-buzz-28390-1548266319-1.jpg?crop=400%3A400%3B0%2C0&downsize=300:*&output-format=auto&output-quality=auto")},
    { id: 9, name: "fake smile", image: src("https://img.buzzfeed.com/buzzfeed-static/static/2019-01/23/14/asset/buzzfeed-prod-web-01/sub-buzz-29565-1548270460-1.png?crop=223%3A202%3B0%2C0&downsize=300:*&output-format=auto&output-quality=auto")},
    { id: 10, name: "fake smile", image: src("https://img.buzzfeed.com/buzzfeed-static/static/2019-01/23/14/asset/buzzfeed-prod-web-01/sub-buzz-29565-1548270460-1.png?crop=223%3A202%3B0%2C0&downsize=300:*&output-format=auto&output-quality=auto")},
    { id: 11, name: "wat?", image: src("https://img.buzzfeed.com/buzzfeed-static/static/2019-01/23/13/asset/buzzfeed-prod-web-06/sub-buzz-1138-1548268729-1.jpg?crop=450%3A450%3B233%2C0&downsize=300:*&output-format=auto&output-quality=auto")},
    { id: 12, name: "wat?", image: src("https://img.buzzfeed.com/buzzfeed-static/static/2019-01/23/13/asset/buzzfeed-prod-web-06/sub-buzz-1138-1548268729-1.jpg?crop=450%3A450%3B233%2C0&downsize=300:*&output-format=auto&output-quality=auto")}
]

export const cardsData = cards.map((card) => ({
    ...card,
    order: Math.floor(Math.random() * 12),
    isFlipped: false
}));