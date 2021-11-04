import "./style.css";
import React from "react";
import { createPortal } from "react-dom";
import { useHistory, useLocation } from "react-router";
import queryString from "query-string";

import {
  htmlSololearn,
  cssSololearn,
  javascriptSololearn,
  reactSololearn,
  jquerySololearn,
} from "./../../assests/certificates";
import { CertificateImage } from "..";

const Certificates = {
  htmlSololearn,
  cssSololearn,
  javascriptSololearn,
  reactSololearn,
  jquerySololearn,
};

const Default = () => {
  const { search, pathname } = useLocation();
  const { push } = useHistory();
  const { modal } = queryString.parse(search);
  const certificate = Certificates[modal];

  if (!certificate) {
    document.body.style.overflow = "auto";
    return null;
  }

  document.body.style.overflow = "hidden";

  return createPortal(
    <div className="modal-route" onClick={() => push(pathname)}>
      <button className="modal-route__close">
        <i className="fas fa-times" />
      </button>
      <CertificateImage image={certificate} />
    </div>,
    document.getElementById("modal")
  );
};

export default Default;
