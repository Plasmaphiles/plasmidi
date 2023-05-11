const DownloadButton = ({ file, filename }) => (
  // FIXME: Links extend all the way to the end of the page
  <a
    href={file}
    download={filename}
    style={{ padding: "10px", display: "block" }}>
    <button className="btn btn-secondary">{filename}</button>
  </a>
);

export default DownloadButton;
