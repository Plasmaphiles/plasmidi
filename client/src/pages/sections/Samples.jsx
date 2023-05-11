import Section from "../../components/Section";
import DownloadButton from "../../components/DownloadButton";

import Waterloo from "../../midi/Waterloo.mid";
import WaterlooMulti from "../../midi/Waterloo-Multi.mid";
import SimpleScale from "../../midi/Simple-Scale.mid";
import Surprise from "../../midi/Surprise.mid";

const Samples = () => (
  <Section title="Samples">
    <p>Here's some MIDI files to play around with:</p>
    <DownloadButton file={Waterloo} filename={"Waterloo.mid"} />
    <DownloadButton file={WaterlooMulti} filename={"WaterlooMulti.mid"} />
    <DownloadButton file={SimpleScale} filename={"SimpleScale.mid"} />
    <DownloadButton file={Surprise} filename={"Surprise.mid"} />
  </Section>
);

export default Samples;
