const { database, storage } = require("./client");

const DB = {
  PLASMIDI: process.env.DB_NAME,
};

const COLLECTIONS = {
  SONGS: process.env.SONGS_COLLECTION,
  PLAYLISTS: process.env.PLAYLISTS_COLLECTION,
};

// create database
database.create(DB.PLASMIDI, DB.PLASMIDI).catch(err => console.log(err));

// songs collection
database
  .createCollection(DB.PLASMIDI, COLLECTIONS.SONGS, COLLECTIONS.SONGS)
  .catch(err => console.log(err));
database
  .createStringAttribute(DB.PLASMIDI, COLLECTIONS.SONGS, "name", 50, false)
  .catch(err => console.log(err));
database
  .createStringAttribute(DB.PLASMIDI, COLLECTIONS.SONGS, "username", 50, false)
  .catch(err => console.log(err));
database
  .createStringAttribute(DB.PLASMIDI, COLLECTIONS.SONGS, "user_id", 50, false)
  .catch(err => console.log(err));

// playlist collection
database
  .createCollection(DB.PLASMIDI, COLLECTIONS.PLAYLISTS, COLLECTIONS.PLAYLISTS)
  .catch(err => console.log(err));
database
  .createStringAttribute(DB.PLASMIDI, COLLECTIONS.PLAYLISTS, "name", 50, false)
  .catch(err => console.log(err));
database
  .createStringAttribute(
    DB.PLASMIDI,
    COLLECTIONS.PLAYLISTS,
    "username",
    50,
    false
  )
  .catch(err => console.log(err));
database
  .createStringAttribute(
    DB.PLASMIDI,
    COLLECTIONS.PLAYLISTS,
    "user_id",
    50,
    false
  )
  .catch(err => console.log(err));

// relationships
database
  .createRelationshipAttribute(
    DB.PLASMIDI,
    COLLECTIONS.SONGS,
    COLLECTIONS.PLAYLISTS,
    "manyToMany",
    true,
    "playlists",
    "songs"
  )
  .catch(err => console.log(err));

// midi storage bucket
storage.createBucket("midi-files", "midi-files").catch(err => console.log(err));
