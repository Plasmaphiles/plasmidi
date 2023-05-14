import Section from "../../components/Section";

const Limitations = () => (
  <Section title="Limitations">
    <p>
      Right now, there is no way to play two instruments at the same time in
      sync. Because there are variations in the processing time of different
      instruments, slightly different delays will be introduced into their
      outputs. These delays are not noticible in a single instrument, but their
      difference compounds over time and the two tracks will drift apart. We are
      working on this.
    </p>
    <p>
      The text is very large. It may take a while to paste into Plasma, and if
      things freeze up for a moment or two, that is to be expected. We are
      considering a method of compressing our data, as well as alternative
      delivery methods. No matter what, we will continue to optimize every
      aspect of plasMIDI.
    </p>
  </Section>
);

export default Limitations;
