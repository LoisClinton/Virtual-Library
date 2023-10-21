const Music = require("./Music");

class Podcast extends Music {
  // host: A string with the name of the host.
  // episodeName: A string with the name of the episode
  // episodeNumber: A number with the episode number.
  // guests: An array of the guests on the particular episode.
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

  // <TITLE> - Episode: <EPISODE_TITLE>. Hosted by <HOST> and featuring guests <GUESTS>. Length: <LENGTH> seconds.

  listen() {
    const guestNameAsString = this.guests.join(", ");

    return `${this.title} - Episode: ${this.episodeName}. Hosted by ${this.host} and featuring guests ${guestNameAsString}. Length: ${this.length} seconds.`;
  }
}

module.exports = Podcast;
