import Section from "../../components/Section";

const About = () => (
  <Section title="About">
    <p>
      Plasma is an engineering sandbox game where you can create your own
      devices and worlds. Recently, they added the ability for you to create a
      variety of sounds large enough to be able to play real music in Plasma.
    </p>
    <p>
      Plasma, being an open sandbox, is not geared directly towards music
      creation, and even with this great new functionality, it would still be
      difficult to hand-transcribe music into a form workable in Plasma.
    </p>
    <p>
      That's where we come in. We made this tool to allow you to upload any MIDI
      file and get a text representation of the music in a formatted text format
      that's able to be further worked with in Plasma.
    </p>
    <p>
      In order to easily use this text format for music production, we've made
      our own device that is designed to play notes when given text in this
      format. You can find it by searching for it by ID in the Device Browser
      window of Plasma. <b>ID: 2976840481</b>
    </p>
  </Section>
);

export default About;
