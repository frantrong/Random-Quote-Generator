// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes
var quotes = [
{
quote: "Life isn’t how many breaths you take, but it’s the moments that take your breath away.",
source: "Will Smith",
citation: "Goalcast",
tag: "Actor"
},
{
quote: "Float like a butterfly, sting like a bee.",
source: "Muhammad Ali",
citation: "USA Today",
tag: "Athlete"
},
{
quote: "Success is most often achieved by those who don’t know that failure is inevitable.",
source: "Coco Chanel",
citation: "EveryDayPowerBlog",
tag:"Entreprenuer"
},
{
quote: "Blood, Sweat and Respect. First Two You Give, Last One You Earn",
source: "Dwayne Johnson",
citation: "FearlessMotivation",
tag: "Actor"
},
{
quote: "The function of education is to teach one to think intensively and to think critically. Intelligence plus character – that is the goal of true education.",
source: "Dr. Martin Luther King Jr.",
citation: "KeepInspiring.me",
tag:"Activist"
},
{
quote: "Deep into that darkness peering, long I stood there wondering, fearing, Doubting, dreaming dreams no mortals ever dared to dream before",
source: "Edgar Allan Poe",
citation: "The Raven",
year: "1845",
tag:"Artist"
},
{
quote: "You are a good man, with a good heart. And it’s hard for a good man to be a king.",
source: "T'Chaka",
citation: "Black Panther",
year: "2018",
tag: "Fictional Character"
},
{
quote: "Don’t ever let somebody tell you you can’t do something, not even me. Alright? You dream, you gotta protect it. People can’t do something themselves, they wanna tell you you can’t do it. If you want something, go get it. Period.",
source: "Chirs Gardner",
citation: "The Pursuit of Happyness",
year: "2006",
tag: "Entreprenuer"
},
{
quote: "All we have to decide is what to do with the time that is given to us.",
source: "Gandalf",
citation: "Lord of the Rings: The Fellowship of the Ring",
year: "2001",
tag: "Fictional Character"
},
{
quote: "Great men are not born great, they grow great.",
source: "Mario Puzo",
citation: "The Godfather",
year: "1972",
tag: "Fictional Character"
}
];


// Create the getRandomQuote function and name it getRandomQuote
function getRandomQuote( array ){
    var numberOfQuotes = array.length;
    var randomNumber = Math.floor(Math.random() * (numberOfQuotes));
    for(var i = 0; i < numberOfQuotes; i++){
        var randomQuote = array[randomNumber];
    }       
return randomQuote;
};

//Random RGB Color
function randomColor (){
    var colorString = '';
    var colorArray = [];
    for(var i=0 ; i < 3; i++){
        var newColor = Math.floor(Math.random() * 256);
        colorArray[i] = newColor;
    }    
    var red = colorArray[0];
    var green = colorArray[1];
    var blue = colorArray[2];
    colorString += 'rgb(' + red + ',' + green + ',' + blue + ')'; 

    
return colorString;
};


function printQuote( array ){
    var quoteChoosen = getRandomQuote( quotes );
    var newColor = randomColor();
    var quoteConcate = '';
    quoteConcate += '<p class="quote">' + quoteChoosen['quote'] + '</p>';
    quoteConcate += '<p class="source">' + quoteChoosen['source'];
    if( quoteChoosen['citation'] ){
        quoteConcate += '<span class="citation">' + quoteChoosen['citation'] + '</span>';    
    };

    if( quoteChoosen['year'] ){
        quoteConcate += '<span class="year">' +quoteChoosen['year'] + '</span>';
    };
    quoteConcate += '<span class="tag">, ' +quoteChoosen['tag'] + '</span>';
    quoteConcate += '</p>';
    
    
    document.getElementById('quote-box').innerHTML = quoteConcate;
    document.getElementById('body').style.background = newColor;
};
printQuote(quotes);

// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called


//Received some assistance on TeamTreeHouse. The source of the answer was from w3Schools.com
document.getElementById('loadQuote').addEventListener("click",function() { printQuote( quotes )}, false);