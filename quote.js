//JS
//another wway to pick colors(limited)
// var colors = ["#FFE81C", "#EB5757", "F2994A", "#F2C94C", "#233B2E", "#B54C4C",
//     "#219653", "#3884EB", "#56CCF2", "#9B51E0", "#660000", "#8FC29E", "#D2D600",
//     "#D96B99", "#B593A1", "#0D7B82", "#A7A851", "#B04A00", "#B57033", "#A30202"
// ];


var currentQuote = '';
var currentAuthor = '';

$(document).ready(function() {

    $('.getquote').on('click', function() {


        //picking a rondom color from the colors array
        // var color = Math.floor(Math.random() * 20);

        //using the "unlimited" way to pick a random color
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);


        $.getJSON('https://talaikis.com/api/quotes/random/',
            function(data) {
                ""
                $('.quote').html(" " + data["quote"] + "<p class=\"text-right\"> -" + data["author"] + "</p>");
                window.setTimeout(

                    function() {
                        $('.bg-color, .main-color').css({
                            'background-color': 'rgb(' + r + ',' + g + ',' + b + ')',
                            'transition': "background-color 1s ease-out"
                        });
                    }, 600);
                currentQuote = data["quote"];
                currentAuthor = data["author"];
                $('#tweet').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));

            }
        )



    });

});