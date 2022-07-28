function showDog(){
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json()) //Promise
        .then(data => {
            //data = {"message": "image.png", "succces":"success"}
            var image_dog = '<img src="'+data['message']+'" alt="dog">';
            //'<image src="image.png" alt="dog">'
            document.querySelector('.img').innerHTML = image_dog; 
            //innerText -> Transforms everything into text
            //innerHTML -> Respect the tags that you have on your text
        });
}

async function showDogAsync(){
    var response = await fetch('https://dog.ceo/api/breeds/image/random');
    console.log(response);
    var data = await response.json();
    var image_dog = '<img src="'+data['message']+'" alt="dog">';
    document.querySelector('.img').innerHTML = image_dog; 
}