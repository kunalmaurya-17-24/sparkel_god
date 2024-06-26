document.addEventListener("DOMContentLoaded", function() {
    // const fonts = ['Marvel-Regular', 'US Angel', 'Old English Five', 'ARB 85 Poster Script', 'Cloister Black', 'Power Rangers'];

    const fonts = [
    'YOU', 
    'US Angel', 
    'The Amazing Spider-Man', 
    'Spongebob', 
    'Soulmate', 
    'Sayyeda', 
    'Qetod', 
    'Power Rangers', 
    'Plain Black Wide', 
    'One Piece', 
    'Old English Five', 
    'Ninja Naruto', 
    'Mostwasted', 
    'Marvel', 
    'Impostograph', 
    'Homoarakhn', 
    'Harry Potter', 
    'Genshin Impact DRIP FONT', 
    'Game of Thrones', 
    'Gabriel', 
    'Fette Classic UNZ Fraktur', 
    'Ditty', 
    'Death Font', 
    'CrushNBurn', 
    'Cloister Black', 
    'ARB 85 Poster Script', 
    'Among Us'
];


    const letters = document.querySelectorAll('.para');

    function changeFonts() {
        letters.forEach(letter => {
            const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
            letter.style.fontFamily = randomFont;
        });
    }

    setInterval(changeFonts, 900); // I can Lower the number to increase the SPEED
});
