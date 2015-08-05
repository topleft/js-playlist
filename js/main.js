// add scripts

var bad = new Song("Bad", "Micheal Jackson", "3 min", "Pop");

var thriller = new Song("Thriller", "Micheal Jackson", "3 min", "Pop");

var plum = new Song("Plum Blossom", "Yusef Lateef", "3 min", "Jazz");

var mercy = new Song("Mercy", "Kanye West", "3 min", "Hip Hop");

var gMix = new Playlist("gMix");

gMix.addSong(bad);
gMix.addSong(plum);
gMix.addSong(mercy);
gMix.addSong(thriller);
console.log(gMix);


$(document).on('ready', function() {
  console.log('sanity check!');


  gMix.listSongs("#display");

});
