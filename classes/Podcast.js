// host: A string with the name of the host.
// episodeName: A string with the name of the episode
// episodeNumber: A number with the episode number.
// guests: An array of the guests on the particular episode.
// listen(): Methods that returns the string <TITLE> - Episode: <EPISODE_TITLE>. Hosted by <HOST> and featuring guests <GUESTS>. Length: <LENGTH> seconds.

const Music = require("./Music");

class Podcast extends Music {
  constructor(
    title,
    year,
    genre,
    artist,
    length,
    host,
    episodeName,
    episodeNumber,
    guests
  ) {
    super(title, year, genre, artist, length);

    this.host = host;
    this.episodeName = episodeName;
    this.episodeNumber = episodeNumber;
    this.guests = guests;
  }
}

module.exports = Podcast;
