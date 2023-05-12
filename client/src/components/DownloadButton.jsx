const DownloadButton = ({ file, filename }) => (
  <a
    href={file}
    download={filename}
    style={{ margin: "10px", display: "inline-block" }}>
    <button className="btn btn-secondary">{filename}</button>
  </a>
);

export default DownloadButton;
