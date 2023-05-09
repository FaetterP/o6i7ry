import React from "react";
import { useState } from "react";
import ModsCanvas from "./ModsCanvas";

type PropsType = {
  name: string;
  modsInfo: { name: string; link: string; iconUrl: string }[];
};

export default function CategoryComponent({ name, modsInfo }: PropsType) {
  const [getIsModsExpanded, setIsModsExpanded] = useState(false);

  return (
    <div>
      <div style={{ display: "flex" }}>
        <h3
          className="mod-category"
          onClick={() => {
            setIsModsExpanded(!getIsModsExpanded);
          }}
        >
          {name}
          {getIsModsExpanded ? " ↑" : " ↓"}
        </h3>
      </div>
      {getIsModsExpanded ? (
        <table>
          <tbody>
            {modsInfo.map((item) => (
              <tr key={item.name}>
                <td>
                  <a href={item.link}>{item.name}</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div></div>
      )}
      <ModsCanvas sizeX={14} modsInfo={modsInfo} />
    </div>
  );
}
