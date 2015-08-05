

  var Song = function(name, artist, time, genre){
    this.name = name;
    this.artist = artist;
    this.time = length;
    this.genre = genre;
  }

  Song.prototype.toString = function(){
    return this.name+" by "+this.artist+" in "+this.genre;
  };


  var Playlist = function(title){
    this.title = title;
    this.songs = [];
  };

  Playlist.prototype.addSong = function(song){
     this.songs.push(song);
     return song.name+"added to"+this.title;
  };

  Playlist.prototype.findSong = function(song){
    var index = this.indexOf(song);
    if(index === -1)
      return song.name+" is not in "+this.title;
    else return song.name+" is number "+(index+1)+" in "+this.title;
  };


  Playlist.prototype.listSongs = function(displayId) {
      this.songs.forEach(function(song){
        console.log("inside");
        $(displayId).append("<h2>"+song.toString()+"</h2>").hide().fadeIn(400);
    });
  };




