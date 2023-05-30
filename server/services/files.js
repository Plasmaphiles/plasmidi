const { createClient } = require("@supabase/supabase-js");

// Create a single supabase client for interacting with your database
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

const BUCKETS = {
  midifiles: "midi-files",
};

const uploadMidiFile = async (file, name) =>
  await supabase.storage.from(BUCKETS.midifiles).upload(name, file, {
    contentType: "audio/midi",
  });

const getFile = ({ name }) =>
  supabase.storage.from(BUCKETS.midifiles).download(name);

module.exports = { getFile, uploadMidiFile };
