import { ImageResponse } from "next/og";
import { PROGRAMME } from "@/data/programme";

export const alt = `${PROGRAMME.name} — ${PROGRAMME.proposition}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ display: "flex", width: "100%", height: "100%", background: "#f7ecd0", color: "#321f1f", padding: 40 }}>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", border: "2px solid #972933", padding: "36px 44px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, color: "#972933" }}>
          <span>{PROGRAMME.brand}</span><span>E-Cell · IIT Kharagpur</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: 82, fontWeight: 700, letterSpacing: -3, color: "#972933" }}>KGP FORGE</span>
          <span style={{ fontSize: 66, fontWeight: 700 }}>DEMO DAY 2027</span>
          <span style={{ fontSize: 28, marginTop: 18 }}>{PROGRAMME.proposition}</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #b99882", paddingTop: 24, fontSize: 24 }}>
          <span>{PROGRAMME.venue}</span><span>{PROGRAMME.dateWindow}</span>
        </div>
      </div>
    </div>,
    size,
  );
}
