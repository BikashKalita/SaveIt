import React, { useState, useEffect } from "react";
import styled from "styled-components";

import DownloadButton from "../img/download.svg";
import DarkDownloadButton from "../img/downloadWhite.svg";

const Note = ({ dark }) => {
  const [note, setNote] = useState("");

  useEffect(() => {
    if (localStorage.getItem("notez")) {
      setNote(localStorage.getItem("notez"));
    }
  }, []);

  const updateNoteHandler = (e) => {
    setNote(e.target.value);
    localStorage.setItem("notez", e.target.value);
  };
  const downloadNoteHandler = () => {
    if (!note) {
      alert("Nothing to download.");
      return false;
    }
    const blob = new Blob([note], { type: "text/plain" });
    const fileURL = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = fileURL;
    link.setAttribute("download", "saveit.txt");
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
  };

  return (
    <StyledNote>
      <textarea
        onChange={updateNoteHandler}
        value={note}
        placeholder="Enter Your Text to save locally..."
      ></textarea>
      <Cta>
        <img
          src={dark ? DarkDownloadButton : DownloadButton}
          onClick={downloadNoteHandler}
          alt="Download"
        />
      </Cta>
    </StyledNote>
  );
};

const StyledNote = styled.div`
  background: ${(props) => props.theme.textArea};
  textarea {
    background: ${(props) => props.theme.textArea};
    color: ${(props) => props.theme.color};
    min-height: 85vh;
    margin-top: 12px;
    width: 100%;
    resize: none;
    border: none;
    outline: none;
    padding: 0rem 10rem;
    font-size: 16px;
    line-height: 25px;
    font-family: "Montserrat", sans-serif;
  }
  @media screen and (max-width: 768px) {
    textarea {
      width: 100%;
      padding: 0 1rem;
      font-size: 15px;
    }
  }
`;

const Cta = styled.div`
  bottom: 0;
  right: 0;
  margin: 20px 30px 10px 0;
  position: fixed;
  img {
    display: block;
    height: 2.5rem;
    margin: 10px 0;
    cursor: pointer;
    opacity: 0.5;
  }
  &:hover img {
    opacity: 1;
  }
  @media screen and (max-width: 768px) {
    img {
      opacity: 0.8;
      height: 2.2rem;
    }
  }
`;

export default Note;
