
  this.name = name;
  this.creator = creator;
  this.playLists = [];
  this.addPlaylist = function(playList) {
    this.playLists.push(playList);
  }
}

function Playlist(name) {
  this.name = name;
  this.tracks = [];
  this.addTrack = function(track) {
    this.tracks.push(track);
  }
  this.overallRating = function() {
    let score = 0;
    let avg = 0;
    for(let i = 0; i < this.tracks.length; i++) {
      score += this.tracks[i].rating;
      avg = score / this.tracks.length;
    }
    console.log(avg);
    return avg;
  }
  this.overallLength = function() {
    let length = 0;
    for(let i = 0; i < this.tracks.length; i++) {
      length += this.tracks[i].length;
    }
    console.log(length);
    return length;
  }
}

function Track(title, rating, length) {
  this.title = title;
  this.rating = rating;
  this.length = length;
}

var library = new Library("Dope Playlist", "Scooter Mcgavin");
var playList1 = new Playlist("Dopest dope");
var track1 = new Track("Wutang clan aint nothin to fuck with", 4, 300);
var track2 = new Track("Home sweet Home", 3, 140);
var track3 = new Track("sky is the limit", 5, 220);

library.addPlaylist(playList1);
playList1.addTrack(track1);
playList1.addTrack(track2);
playList1.addTrack(track3);

playList1.overallRating();
playList1.overallLength();

