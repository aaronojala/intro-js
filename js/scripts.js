$.ajax({
  type: 'GET',
  url: 'https://pokeapi.co/api/v2/pokemon',
  success: function (resp) {
    console.log('Yay AJAX call was successful');
    console.log(resp);

    console.log('Found ' + resp.count + ' pokemons from the database!');
    console.log('The first pokemon is ' + resp.results[5].name);
  },

  error: function () {
    console.log('Ooooh AJAX call was not successful');
  },
});
