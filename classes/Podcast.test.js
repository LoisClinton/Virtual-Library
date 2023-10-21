const Media = require("./Media");
const Music = require("./Music");
const Podcast = require("./Podcast");

describe("Podcast tests", () => {
  test("podcast has correct properties", () => {
    // host: A string with the name of the host.
    // episodeName: A string with the name of the episode
    // episodeNumber: A number with the episode number.
    // guests: An array of the guests on the particular episode.

    const myPodcast = new Podcast(
      "the title",
      2023,
      "the genre",
      "the artist",
      600, // length
      "the host",
      "an episode name",
      10, // episode number
      ["alice", "bob"] // array of guests
    );

    // podcast specific properties
    expect(myPodcast.host).toEqual("the host");
    expect(myPodcast.episodeName).toEqual("an episode name");
    expect(myPodcast.episodeNumber).toEqual(10);
    expect(myPodcast.guests).toEqual(["alice", "bob"]);
  });

  test("Podcast has listen method", () => {
    const myPodcast = new Podcast(
      "the title",
      2023,
      "the genre",
      "the artist",
      600, // length
      "the host",
      "an episode name",
      10, // episode number
      ["alice", "bob"] // array of guests
    );

    expect(myPodcast.listen()).toEqual(
      "the title - Episode: an episode name. Hosted by the host and featuring guests alice, bob. Length: 600 seconds."
    );
  });
});
