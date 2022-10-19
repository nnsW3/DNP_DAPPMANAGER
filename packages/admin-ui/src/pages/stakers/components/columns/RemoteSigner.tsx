import React from "react";
import Card from "components/Card";
import { prettyDnpName } from "utils/format";
import { joinCssClass } from "utils/css";
import defaultAvatar from "img/defaultAvatar.png";
import errorAvatar from "img/errorAvatarTrim.png";
import "./columns.scss";
import { StakerItem } from "common";
import Button from "components/Button";
import { rootPath as installedRootPath } from "pages/installer";
import { Link } from "react-router-dom";

export default function RemoteSigner({
  signer,
  setEnableWeb3signer,
  isSelected,
  ...props
}: {
  signer: StakerItem;
  setEnableWeb3signer: (installWeb3signer: boolean) => void;
  isSelected: boolean;
}) {
  return (
    <Card
      {...props}
      className={`remote-signer ${joinCssClass({ isSelected })}`}
      onClick={() => setEnableWeb3signer(!isSelected)}
      shadow={isSelected}
    >
      {signer.status === "ok" ? (
        <div className="avatar">
          <img src={signer.avatarUrl || defaultAvatar} alt="avatar" />
        </div>
      ) : signer.status === "error" ? (
        <div className="avatar">
          <img src={errorAvatar} alt="avatar" />
        </div>
      ) : null}

      <div className="title">{prettyDnpName(signer.dnpName)} </div>

      {signer.status === "ok" &&
        isSelected &&
        signer.isInstalled &&
        !signer.isUpdated && (
          <>
            <Link to={`${installedRootPath}/${signer.dnpName}`}>
              <Button variant="dappnode">UPDATE</Button>
            </Link>
            <br />
            <br />
          </>
        )}

      {signer.status === "ok" && (
        <div className="description">
          {isSelected && signer.metadata.shortDescription}
        </div>
      )}
    </Card>
  );
}