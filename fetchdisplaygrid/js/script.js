var url = 'https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC';

function validateResponse(response) {
  return response.status === 200 ? response : false;
}

function handleData(data) {
  var gRatedGifs = data.filter(function (item) {return item.rating === "g";});
  return gRatedGifs;
}

function printImages(images) {
  console.log(images);
  var eContainer = document.querySelector('.container');
  var eImages = images.map(function (image, i) {return '\n    <a href="' +
    image.url + '" title="Open at giphy.com" class="link" tabindex="' + (i + 1) + '">\n      <img src="' +
    image.images.fixed_height.url + '" width="' + image.images.fixed_height.width + '" height="' + image.images.fixed_height.height + '" class="image" />\n    </a>';});

  eContainer.innerHTML = eImages.join('');
}

fetch(url).
then(function (response) {return validateResponse(response);}).
then(function (response) {return response.json();}).
then(function (response) {return handleData(response.data);}).
then(function (gifs) {return printImages(gifs);});