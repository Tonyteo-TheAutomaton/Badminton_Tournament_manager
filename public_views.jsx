/* Athlete & Spectator views */
const { useState: useS_pub } = React;

/* ---------------- ATHLETE PORTAL ---------------- */
function AthleteView() {
  const [view, setView] = useS_pub("overview");
  const me = {
    name: "Nguyễn Hải Đăng",
    id: "A-0142",
    club: "CAND",
    tier: "A",
    rating: 2184,
  };
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "260px 1fr",
        height: "100%",
        background: "var(--paper-2)",
      }}
    >
      <aside
        style={{
          background: "var(--paper)",
          borderRight: "1px solid var(--line)",
          padding: 16,
          display: "flex",
          flexDirection: "column",
          gap: 14,
        }}
      >
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 8,
              background: "var(--ink)",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 16,
              fontWeight: 700,
            }}
          >
            NH
          </div>
          <div>
            <div style={{ fontSize: 13.5, fontWeight: 600 }}>{me.name}</div>
            <div
              className="mono"
              style={{ fontSize: 10.5, color: "var(--ink-3)" }}
            >
              {me.id} · {me.club}
            </div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 4 }}>
          <span className="pill ok">Hạng {me.tier}</span>
          <span className="pill info">Rating {me.rating}</span>
        </div>
        <div
          style={{
            borderTop: "1px solid var(--line)",
            paddingTop: 12,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {[
            ["overview", "Tổng quan", "dashboard"],
            ["matches", "Lịch thi đấu của tôi", "calendar"],
            ["profile", "Hồ sơ & giấy tờ", "user"],
            ["register", "Đăng ký giải mới", "plus"],
            ["ranking", "Bảng xếp hạng", "chart"],
          ].map(([id, l, ic]) => (
            <button
              key={id}
              onClick={() => setView(id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "8px 10px",
                borderRadius: 6,
                border: 0,
                background: view === id ? "var(--paper-2)" : "transparent",
                color: "var(--ink)",
                textAlign: "left",
                fontSize: 13,
                fontWeight: view === id ? 600 : 400,
              }}
            >
              <Icon name={ic} size={14} />
              {l}
            </button>
          ))}
        </div>
      </aside>

      <main style={{ padding: 24, overflowY: "auto" }}>
        {view === "overview" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div>
              <div className="caps">Lời chào</div>
              <h1
                className="serif"
                style={{
                  margin: "2px 0 6px",
                  fontSize: 34,
                  letterSpacing: "0.01em",
                  textTransform: "uppercase",
                }}
              >
                Xin chào, Hải Đăng.
              </h1>
              <div style={{ color: "var(--ink-2)", fontSize: 13 }}>
                Bạn có 1 trận sắp diễn ra tại Sân 1 · 16:00 hôm nay.
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 12,
              }}
            >
              <StatCard label="Trận sắp tới" value="1" sub="hôm nay" />
              <StatCard
                label="Đã thi đấu"
                value="2"
                sub="thắng 2 · thua 0"
                accent="var(--court)"
              />
              <StatCard
                label="Điểm tích lũy"
                value={me.rating}
                sub="+42 tuần này"
              />
              <StatCard
                label="Hạng quốc gia"
                value="#4"
                sub="Đơn nam · Hạng A"
              />
            </div>
            <div
              style={{
                background: "var(--paper)",
                border: "1px solid var(--line)",
                borderRadius: 8,
              }}
            >
              <div
                style={{
                  padding: "12px 16px",
                  borderBottom: "1px solid var(--line)",
                  fontWeight: 600,
                  fontSize: 13,
                }}
              >
                Trận của tôi tại giải này
              </div>
              {[
                {
                  t: "18/04 16:00",
                  court: 1,
                  round: "Vòng 1/16",
                  opp: "Vũ Tiến Dũng · TP.HCM",
                  st: "upcoming",
                },
                {
                  t: "18/04 14:20",
                  court: 1,
                  round: "Vòng 1/16",
                  opp: "Trần Minh Quân · TP.HCM",
                  st: "live",
                  score: "21-18, 14-21, 17-14",
                },
                {
                  t: "17/04 10:30",
                  court: 3,
                  round: "Vòng 1/32",
                  opp: "Nguyễn Quang Hưng · Nghệ An",
                  st: "done",
                  score: "21-14, 21-19",
                },
              ].map((r, i) => (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "120px 60px 120px 1fr auto auto",
                    gap: 12,
                    padding: "12px 16px",
                    borderBottom: "1px solid var(--line-2)",
                    fontSize: 12.5,
                    alignItems: "center",
                  }}
                >
                  <div className="mono">{r.t}</div>
                  <div className="mono">Sân {r.court}</div>
                  <div style={{ color: "var(--ink-2)" }}>{r.round}</div>
                  <div>vs {r.opp}</div>
                  <div className="mono" style={{ color: "var(--ink-3)" }}>
                    {r.score || ""}
                  </div>
                  <div>
                    {r.st === "upcoming" && (
                      <span className="pill info">Sắp diễn ra</span>
                    )}
                    {r.st === "live" && (
                      <span className="pill live">
                        <span className="dot live-dot" />
                        LIVE
                      </span>
                    )}
                    {r.st === "done" && <span className="pill ok">Thắng</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {view === "register" && <RegisterForm />}
        {view === "profile" && <AthleteProfile me={me} />}
        {view === "matches" && (
          <div style={{ fontSize: 14, color: "var(--ink-2)" }}>
            Xem tab Tổng quan để quản lý trận của bạn.
          </div>
        )}
        {view === "ranking" && <RankingTable />}
      </main>
    </div>
  );
}

function RegisterForm() {
  return (
    <div style={{ maxWidth: 780 }}>
      <div className="caps">Đăng ký giải đấu</div>
      <h1 className="serif" style={{ margin: "2px 0 18px", fontSize: 30 }}>
        Giải Cầu Lông Các CLB Toàn Quốc 2026
      </h1>
      <div
        style={{
          background: "var(--paper)",
          border: "1px solid var(--line)",
          borderRadius: 8,
          padding: 20,
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        <div>
          <div className="caps" style={{ marginBottom: 6 }}>
            Thông tin cá nhân
          </div>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}
          >
            {[
              ["Họ và tên", "Nguyễn Hải Đăng"],
              ["Ngày sinh", "12/08/1998"],
              ["CCCD/CMND", "079098001234"],
              ["CLB / đơn vị", "CAND"],
            ].map(([l, v]) => (
              <Field key={l} label={l} value={v} />
            ))}
          </div>
        </div>
        <div>
          <div className="caps" style={{ marginBottom: 6 }}>
            Giấy tờ
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 10,
            }}
          >
            <div
              className="court-placeholder"
              style={{ height: 110, fontSize: 10 }}
            >
              ẢNH 3×4
            </div>
            <div
              className="court-placeholder"
              style={{ height: 110, fontSize: 10 }}
            >
              CCCD · MẶT TRƯỚC
            </div>
            <div
              className="court-placeholder"
              style={{ height: 110, fontSize: 10 }}
            >
              CCCD · MẶT SAU
            </div>
          </div>
          <div style={{ fontSize: 11, color: "var(--ink-3)", marginTop: 6 }}>
            Tệp &lt; 5MB · JPG/PNG · ảnh không mờ, không chỉnh sửa.
          </div>
        </div>
        <div>
          <div className="caps" style={{ marginBottom: 6 }}>
            Hạng mục tham dự
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {Object.entries(CATEGORIES).map(([k, v], i) => (
              <label
                key={k}
                style={{
                  padding: "8px 14px",
                  borderRadius: 6,
                  fontSize: 12.5,
                  cursor: "pointer",
                  border: "1px solid " + (i < 3 ? "var(--ink)" : "var(--line)"),
                  background: i < 3 ? "var(--ink)" : "var(--paper)",
                  color: i < 3 ? "white" : "var(--ink-2)",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <input
                  type="checkbox"
                  defaultChecked={i < 3}
                  style={{ accentColor: "var(--accent)" }}
                />
                {v}
              </label>
            ))}
          </div>
          <div style={{ fontSize: 11.5, color: "var(--ink-3)", marginTop: 6 }}>
            Lệ phí: 500.000 ₫/hạng × 3 = <b className="mono">1.500.000 ₫</b>
          </div>
        </div>
        <div
          style={{
            borderTop: "1px solid var(--line)",
            paddingTop: 14,
            display: "flex",
            alignItems: "center",
          }}
        >
          <label
            style={{
              fontSize: 12,
              color: "var(--ink-2)",
              display: "flex",
              gap: 8,
              alignItems: "center",
            }}
          >
            <input
              type="checkbox"
              defaultChecked
              style={{ accentColor: "var(--accent)" }}
            />
            Tôi đồng ý với điều lệ giải và cho phép xử lý dữ liệu cá nhân theo
            NĐ 13/2023/NĐ-CP.
          </label>
          <div style={{ flex: 1 }} />
          <button style={btnGhost}>Lưu nháp</button>
          <button
            style={{
              ...btnPrimary,
              marginLeft: 8,
              background: "var(--accent)",
            }}
          >
            Nộp hồ sơ & thanh toán VNPay →
          </button>
        </div>
      </div>
    </div>
  );
}
const Field = ({ label, value }) => (
  <label style={{ display: "block" }}>
    <div style={{ fontSize: 11, color: "var(--ink-3)", marginBottom: 4 }}>
      {label}
    </div>
    <input
      defaultValue={value}
      style={{
        width: "100%",
        padding: "9px 11px",
        border: "1px solid var(--line)",
        borderRadius: 6,
        background: "var(--paper)",
        fontSize: 13,
      }}
    />
  </label>
);

function AthleteProfile({ me }) {
  return (
    <div
      style={{
        maxWidth: 780,
        display: "flex",
        flexDirection: "column",
        gap: 14,
      }}
    >
      <div>
        <div className="caps">Hồ sơ</div>
        <h1 className="serif" style={{ margin: "2px 0 0", fontSize: 30 }}>
          {me.name}
        </h1>
      </div>
      <div
        style={{
          background: "var(--paper)",
          border: "1px solid var(--line)",
          borderRadius: 8,
          padding: 20,
          display: "grid",
          gridTemplateColumns: "120px 1fr",
          gap: 20,
        }}
      >
        <div
          className="court-placeholder"
          style={{ height: 150, fontSize: 10 }}
        >
          ảnh 3×4
        </div>
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}
        >
          {[
            ["Mã VĐV", me.id],
            ["CLB", me.club],
            ["Hạng", me.tier],
            ["Rating", me.rating],
            ["Năm sinh", "1998"],
            ["Tay thuận", "Phải"],
          ].map(([l, v]) => (
            <div key={l}>
              <div className="caps">{l}</div>
              <div style={{ fontSize: 13.5, marginTop: 2 }}>{v}</div>
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          background: "var(--paper)",
          border: "1px solid var(--line)",
          borderRadius: 8,
          padding: 20,
        }}
      >
        <h3 style={{ margin: 0, fontSize: 13 }}>Thành tích 12 tháng gần đây</h3>
        <div
          style={{
            display: "flex",
            gap: 20,
            marginTop: 12,
            alignItems: "flex-end",
            height: 100,
          }}
        >
          {[55, 72, 40, 88, 64, 92, 70, 80, 60, 95, 78, 85].map((h, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: 4,
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: `${h}%`,
                  background: i === 11 ? "var(--accent)" : "var(--ink)",
                  borderRadius: 2,
                }}
              />
              <div
                className="mono"
                style={{ fontSize: 9.5, color: "var(--ink-3)" }}
              >
                {
                  [
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "1",
                    "2",
                    "3",
                    "4",
                  ][i]
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function RankingTable() {
  return (
    <div style={{ maxWidth: 780 }}>
      <div className="caps">Bảng xếp hạng quốc gia</div>
      <h1 className="serif" style={{ margin: "2px 0 14px", fontSize: 30 }}>
        Đơn nam · tuần 16/2026
      </h1>
      <div
        style={{
          background: "var(--paper)",
          border: "1px solid var(--line)",
          borderRadius: 8,
          overflow: "hidden",
        }}
      >
        <table
          style={{ width: "100%", borderCollapse: "collapse", fontSize: 12.5 }}
        >
          <thead>
            <tr style={{ background: "var(--paper-2)", color: "var(--ink-3)" }}>
              {["#", "Vận động viên", "CLB", "Hạng", "Điểm", "Thay đổi"].map(
                (h) => (
                  <th
                    key={h}
                    className="caps"
                    style={{
                      padding: "9px 12px",
                      textAlign:
                        h === "Điểm" || h === "Thay đổi" ? "right" : "left",
                      fontWeight: 600,
                      borderBottom: "1px solid var(--line)",
                    }}
                  >
                    {h}
                  </th>
                ),
              )}
            </tr>
          </thead>
          <tbody>
            {RANKING_MS.map((r) => (
              <tr
                key={r.rank}
                style={{
                  background:
                    r.name === "Nguyễn Hải Đăng"
                      ? "var(--amber-soft)"
                      : "transparent",
                }}
              >
                <td
                  className="mono"
                  style={{
                    padding: "10px 12px",
                    borderBottom: "1px solid var(--line-2)",
                  }}
                >
                  {r.rank}
                </td>
                <td
                  style={{
                    padding: "10px 12px",
                    borderBottom: "1px solid var(--line-2)",
                    fontWeight: 500,
                  }}
                >
                  {r.name}
                </td>
                <td
                  style={{
                    padding: "10px 12px",
                    borderBottom: "1px solid var(--line-2)",
                  }}
                >
                  {r.club}
                </td>
                <td
                  style={{
                    padding: "10px 12px",
                    borderBottom: "1px solid var(--line-2)",
                  }}
                >
                  {r.tier}
                </td>
                <td
                  className="mono"
                  style={{
                    padding: "10px 12px",
                    borderBottom: "1px solid var(--line-2)",
                    textAlign: "right",
                    fontWeight: 600,
                  }}
                >
                  {r.pts.toLocaleString("vi-VN")}
                </td>
                <td
                  className="mono"
                  style={{
                    padding: "10px 12px",
                    borderBottom: "1px solid var(--line-2)",
                    textAlign: "right",
                    color:
                      r.chg > 0
                        ? "var(--court)"
                        : r.chg < 0
                          ? "var(--accent)"
                          : "var(--ink-3)",
                  }}
                >
                  {r.chg > 0 ? "▲" : r.chg < 0 ? "▼" : "—"}{" "}
                  {r.chg !== 0 ? Math.abs(r.chg) : ""}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ---------------- SPECTATOR SITE ---------------- */
function SpectatorView() {
  const [tab, setTab] = useS_pub("live");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        background: "var(--paper)",
        overflowY: "auto",
      }}
    >
      {/* Hero */}
      <section
        style={{
          background: "var(--ink)",
          color: "white",
          padding: "56px 48px 40px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -40,
            right: -40,
            width: 380,
            height: 380,
            borderRadius: "50%",
            border: "1px solid oklch(0.28 0.01 250)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            width: 300,
            height: 300,
            borderRadius: "50%",
            border: "1px solid oklch(0.28 0.01 250)",
          }}
        />
        <div
          style={{
            position: "relative",
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            alignItems: "flex-end",
            gap: 40,
          }}
        >
          <div style={{ flex: 1 }}>
            <div className="caps" style={{ color: "oklch(0.72 0.01 250)" }}>
              Giải đấu đang diễn ra · Ngày 1 / 9
            </div>
            <h1
              className="serif"
              style={{
                fontSize: 64,
                margin: "4px 0 12px",
                lineHeight: 0.95,
                letterSpacing: "-0.03em",
                maxWidth: 720,
              }}
            >
              National Club{" "}
              <span style={{ color: "var(--accent)" }}>Badminton</span>{" "}
              Championship 2026
            </h1>
            <div style={{ fontSize: 14, color: "oklch(0.8 0.01 250)" }}>
              18 – 26 tháng 4 · Nhà thi đấu Phú Thọ, TP. Hồ Chí Minh · 384 VĐV ·
              5 hạng mục
            </div>
            <div style={{ display: "flex", gap: 8, marginTop: 20 }}>
              <button
                style={{
                  background: "var(--accent)",
                  border: 0,
                  color: "white",
                  padding: "11px 18px",
                  borderRadius: 6,
                  fontSize: 13,
                  fontWeight: 600,
                  display: "flex",
                  gap: 8,
                  alignItems: "center",
                }}
              >
                <Icon name="ticket" size={14} /> Mua vé online
              </button>
              <button
                style={{
                  background: "transparent",
                  border: "1px solid oklch(0.35 0.01 250)",
                  color: "white",
                  padding: "11px 18px",
                  borderRadius: 6,
                  fontSize: 13,
                }}
              >
                Xem trực tiếp
              </button>
            </div>
          </div>
          <div
            style={{
              minWidth: 280,
              background: "oklch(0.24 0.01 250)",
              borderRadius: 8,
              padding: 16,
              border: "1px solid oklch(0.3 0.01 250)",
            }}
          >
            <div
              className="caps"
              style={{
                color: "oklch(0.72 0.01 250)",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span
                className="pill live"
                style={{ padding: "1px 6px", fontSize: 9.5 }}
              >
                <span className="dot live-dot" />
                LIVE
              </span>
              Đang diễn ra · Sân 3
            </div>
            <div
              style={{
                fontSize: 11.5,
                color: "oklch(0.75 0.01 250)",
                marginTop: 10,
              }}
            >
              Đôi nam · Tứ kết
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontSize: 13.5,
                marginTop: 8,
              }}
            >
              <span>Đức / Nam</span>
              <span className="mono serif" style={{ fontSize: 28 }}>
                8
              </span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontSize: 13.5,
                marginTop: 2,
              }}
            >
              <span>Anh / Nam</span>
              <span className="mono serif" style={{ fontSize: 28 }}>
                6
              </span>
            </div>
            <div
              className="mono"
              style={{
                fontSize: 10.5,
                color: "oklch(0.72 0.01 250)",
                marginTop: 8,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span>Set 3 · bộ quyết định</span>
              <span>19-21 · 21-17 · ...</span>
            </div>
          </div>
        </div>
      </section>

      <div
        style={{
          borderBottom: "1px solid var(--line)",
          padding: "0 48px",
          display: "flex",
          gap: 2,
          background: "var(--paper)",
          position: "sticky",
          top: 0,
          zIndex: 1,
        }}
      >
        {[
          ["live", "Đang diễn ra"],
          ["schedule", "Lịch thi đấu"],
          ["results", "Kết quả"],
          ["bracket", "Bảng đấu"],
          ["ranking", "BXH"],
          ["news", "Tin tức"],
          ["tickets", "Vé"],
        ].map(([id, l]) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            style={{
              padding: "14px 16px",
              border: 0,
              background: "transparent",
              fontSize: 13,
              fontWeight: tab === id ? 600 : 500,
              color: tab === id ? "var(--ink)" : "var(--ink-3)",
              borderBottom:
                "2px solid " + (tab === id ? "var(--accent)" : "transparent"),
            }}
          >
            {l}
          </button>
        ))}
      </div>

      <div
        style={{
          padding: "40px 48px",
          maxWidth: 1280,
          width: "100%",
          margin: "0 auto",
        }}
      >
        {tab === "live" && <PubLive />}
        {tab === "schedule" && <PubSchedule />}
        {tab === "results" && <PubResults />}
        {tab === "bracket" && <BracketView />}
        {tab === "ranking" && <PubRanking />}
        {tab === "news" && <PubNews />}
        {tab === "tickets" && <PubTickets />}
      </div>

      <footer
        style={{
          padding: "40px 48px 24px",
          color: "var(--ink-3)",
          fontSize: 11.5,
          borderTop: "1px solid var(--line)",
          marginTop: 40,
        }}
      >
        <div
          style={{ maxWidth: 1280, margin: "0 auto", display: "flex", gap: 40 }}
        >
          <div style={{ flex: 1 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                color: "var(--ink)",
              }}
            >
              <ShuttleMark />
              <div className="serif" style={{ fontSize: 18 }}>
                Shuttle·Ops
              </div>
            </div>
            <div style={{ marginTop: 8, maxWidth: 380 }}>
              Nền tảng quản lý giải cầu lông · dữ liệu thời gian thực · tuân thủ
              NĐ 13/2023/NĐ-CP về bảo vệ dữ liệu cá nhân.
            </div>
          </div>
          <div>
            <div className="caps" style={{ color: "var(--ink-2)" }}>
              Liên hệ
            </div>
            <div style={{ marginTop: 4 }}>BTC · support@shuttleops.vn</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function PubLive() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: 12,
      }}
    >
      {LIVE_MATCHES.map((m) => (
        <div
          key={m.id}
          style={{
            background: "var(--paper)",
            border: "1px solid var(--line)",
            borderRadius: 8,
            padding: 16,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span className="pill live">
              <span className="dot live-dot" />
              LIVE
            </span>
            <span className="caps">
              {CATEGORIES[m.cat]} · {m.round}
            </span>
            <div style={{ flex: 1 }} />
            <span
              className="mono"
              style={{ fontSize: 11, color: "var(--ink-3)" }}
            >
              Sân {m.court} · {m.elapsed}
            </span>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: 14,
              marginTop: 14,
              alignItems: "center",
            }}
          >
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>
                {m.a.name}
              </div>
              <div style={{ fontSize: 11.5, color: "var(--ink-3)" }}>
                {m.a.club}
              </div>
              <div style={{ marginTop: 6, fontSize: 14, fontWeight: 600 }}>
                {m.b.name}
              </div>
              <div style={{ fontSize: 11.5, color: "var(--ink-3)" }}>
                {m.b.club}
              </div>
            </div>
            <div className="mono" style={{ display: "flex", gap: 4 }}>
              {m.sets.map((s, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "6px 10px",
                    borderRadius: 4,
                    background:
                      i === m.current ? "var(--accent)" : "var(--paper-2)",
                    color: i === m.current ? "white" : "var(--ink)",
                  }}
                >
                  <div style={{ fontSize: 16, fontWeight: 700 }}>{s[0]}</div>
                  <div style={{ fontSize: 16, fontWeight: 700 }}>{s[1]}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function PubSchedule() {
  return (
    <div>
      <div
        style={{ display: "flex", gap: 8, marginBottom: 18, flexWrap: "wrap" }}
      >
        <button style={{ ...btnPrimary, background: "var(--ink)" }}>
          Hôm nay · 18/04
        </button>
        {[
          "19/04",
          "20/04",
          "21/04",
          "22/04",
          "23/04",
          "24/04",
          "25/04",
          "26/04",
        ].map((d) => (
          <button key={d} style={btnGhost}>
            {d}
          </button>
        ))}
      </div>
      <div
        style={{
          background: "var(--paper)",
          border: "1px solid var(--line)",
          borderRadius: 8,
          overflow: "hidden",
        }}
      >
        <table
          style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}
        >
          <thead>
            <tr style={{ background: "var(--paper-2)", color: "var(--ink-3)" }}>
              {["Giờ", "Sân", "Hạng", "Vòng", "Đấu", "Trạng thái"].map((h) => (
                <th
                  key={h}
                  className="caps"
                  style={{
                    padding: "10px 14px",
                    textAlign: "left",
                    fontWeight: 600,
                    borderBottom: "1px solid var(--line)",
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              ...LIVE_MATCHES.map((m) => ({
                ...m,
                status: "live",
                t: m.start,
              })),
              ...UPCOMING,
            ].map((m, i) => (
              <tr key={i}>
                <td
                  className="mono"
                  style={{
                    padding: "12px 14px",
                    borderBottom: "1px solid var(--line-2)",
                  }}
                >
                  {m.t || m.start}
                </td>
                <td
                  className="mono"
                  style={{
                    padding: "12px 14px",
                    borderBottom: "1px solid var(--line-2)",
                  }}
                >
                  Sân {m.court}
                </td>
                <td
                  style={{
                    padding: "12px 14px",
                    borderBottom: "1px solid var(--line-2)",
                  }}
                >
                  {CATEGORIES[m.cat]}
                </td>
                <td
                  style={{
                    padding: "12px 14px",
                    borderBottom: "1px solid var(--line-2)",
                    color: "var(--ink-2)",
                  }}
                >
                  {m.round}
                </td>
                <td
                  style={{
                    padding: "12px 14px",
                    borderBottom: "1px solid var(--line-2)",
                  }}
                >
                  {m.a?.name || m.a}{" "}
                  <span style={{ color: "var(--ink-3)", margin: "0 6px" }}>
                    vs
                  </span>{" "}
                  {m.b?.name || m.b}
                </td>
                <td
                  style={{
                    padding: "12px 14px",
                    borderBottom: "1px solid var(--line-2)",
                  }}
                >
                  {m.status === "live" ? (
                    <span className="pill live">
                      <span className="dot live-dot" />
                      LIVE
                    </span>
                  ) : (
                    <span className="pill scheduled">Lên lịch</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function PubResults() {
  const rs = [
    {
      d: "17/04",
      cat: "MS",
      w: "Nguyễn Hải Đăng",
      l: "Nguyễn Quang Hưng",
      score: "21-14, 21-19",
      r: "R64",
    },
    {
      d: "17/04",
      cat: "WS",
      w: "Nguyễn Thùy Linh",
      l: "Đặng Thị Mai",
      score: "21-12, 21-15",
      r: "R32",
    },
    {
      d: "17/04",
      cat: "MD",
      w: "Đức / Nam",
      l: "Anh / Long",
      score: "21-18, 19-21, 21-17",
      r: "R32",
    },
    {
      d: "17/04",
      cat: "XD",
      w: "Đức / Khánh",
      l: "Minh / Trang",
      score: "21-12, 21-13",
      r: "R32",
    },
    {
      d: "16/04",
      cat: "MS",
      w: "Lê Đức Phát",
      l: "Vũ Quốc Anh",
      score: "21-10, 21-14",
      r: "R64",
    },
    {
      d: "16/04",
      cat: "WD",
      w: "Linh / Trang",
      l: "Vân Anh / Thảo",
      score: "21-17, 14-21, 21-18",
      r: "R32",
    },
  ];
  return (
    <div
      style={{
        background: "var(--paper)",
        border: "1px solid var(--line)",
        borderRadius: 8,
        overflow: "hidden",
      }}
    >
      <table
        style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}
      >
        <thead>
          <tr style={{ background: "var(--paper-2)", color: "var(--ink-3)" }}>
            {["Ngày", "Hạng", "Vòng", "Thắng", "Thua", "Tỷ số"].map((h) => (
              <th
                key={h}
                className="caps"
                style={{
                  padding: "10px 14px",
                  textAlign: "left",
                  fontWeight: 600,
                  borderBottom: "1px solid var(--line)",
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rs.map((r, i) => (
            <tr key={i}>
              <td
                className="mono"
                style={{
                  padding: "12px 14px",
                  borderBottom: "1px solid var(--line-2)",
                }}
              >
                {r.d}
              </td>
              <td
                style={{
                  padding: "12px 14px",
                  borderBottom: "1px solid var(--line-2)",
                }}
              >
                {CATEGORIES[r.cat]}
              </td>
              <td
                style={{
                  padding: "12px 14px",
                  borderBottom: "1px solid var(--line-2)",
                  color: "var(--ink-2)",
                }}
              >
                {r.r}
              </td>
              <td
                style={{
                  padding: "12px 14px",
                  borderBottom: "1px solid var(--line-2)",
                  fontWeight: 600,
                }}
              >
                {r.w}
              </td>
              <td
                style={{
                  padding: "12px 14px",
                  borderBottom: "1px solid var(--line-2)",
                  color: "var(--ink-3)",
                }}
              >
                {r.l}
              </td>
              <td
                className="mono"
                style={{
                  padding: "12px 14px",
                  borderBottom: "1px solid var(--line-2)",
                }}
              >
                {r.score}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function PubRanking() {
  return <RankingTable />;
}

function PubNews() {
  const items = [...NEWS, ...NEWS.map((n) => ({ ...n, id: n.id + "b" }))];
  return (
    <div
      style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 14 }}
    >
      <div style={{ gridRow: "span 2" }}>
        <div
          className="court-placeholder"
          style={{ height: 320, borderRadius: 8, fontSize: 10 }}
        >
          highlight · 16:9
        </div>
        <div style={{ marginTop: 14 }}>
          <span className="pill">Highlight</span>
          <h2
            className="serif"
            style={{ fontSize: 28, lineHeight: 1.15, margin: "8px 0 6px" }}
          >
            Tuấn Đức thắng ngược ở set quyết định trận tứ kết đôi nam
          </h2>
          <div className="mono" style={{ fontSize: 11, color: "var(--ink-3)" }}>
            18/04 · 15:42 · 2 phút đọc
          </div>
          <p
            style={{
              fontSize: 13.5,
              color: "var(--ink-2)",
              lineHeight: 1.6,
              marginTop: 8,
            }}
          >
            Cặp đôi hạt giống số 2 đã lội ngược dòng thành công sau khi để thua
            set đầu tiên 19-21, vượt qua hai đối thủ trẻ từ Becamex với tỷ số
            cuối 21-17, 21-17 trong set thứ ba kéo dài hơn 40 phút.
          </p>
        </div>
      </div>
      {items.slice(0, 4).map((n, i) => (
        <div key={i}>
          <div
            className="court-placeholder"
            style={{ height: 140, borderRadius: 6, fontSize: 10 }}
          >
            tin · 16:9
          </div>
          <div style={{ marginTop: 8 }}>
            <span className="pill">{n.tag}</span>
            <h4 style={{ fontSize: 14, lineHeight: 1.35, margin: "6px 0 4px" }}>
              {n.title}
            </h4>
            <div
              className="mono"
              style={{ fontSize: 10.5, color: "var(--ink-3)" }}
            >
              {n.ts}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function PubTickets() {
  const tiers = [
    {
      name: "Phổ thông",
      price: 100_000,
      sub: "Khán đài Bắc · không ghế cố định",
      left: "Còn nhiều",
    },
    {
      name: "Ưu tiên",
      price: 250_000,
      sub: "Ghế ngồi gần sân 1-4",
      left: "Còn 120 vé",
    },
    {
      name: "VIP",
      price: 800_000,
      sub: "Ghế hàng đầu · đồ uống · khu check-in",
      left: "Còn 18 vé",
    },
  ];
  return (
    <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 20 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <div>
          <div className="caps">Vé trực tuyến</div>
          <h2 className="serif" style={{ fontSize: 30, margin: "4px 0 0" }}>
            Chọn hạng vé cho ngày thi đấu
          </h2>
        </div>
        {tiers.map((t, i) => (
          <div
            key={t.name}
            style={{
              background: i === 2 ? "var(--ink)" : "var(--paper)",
              color: i === 2 ? "white" : "var(--ink)",
              border: "1px solid " + (i === 2 ? "var(--ink)" : "var(--line)"),
              borderRadius: 8,
              padding: 18,
              display: "grid",
              gridTemplateColumns: "1fr auto auto",
              gap: 20,
              alignItems: "center",
            }}
          >
            <div>
              <div style={{ fontSize: 15, fontWeight: 600 }}>{t.name}</div>
              <div style={{ fontSize: 12.5, opacity: 0.75, marginTop: 3 }}>
                {t.sub}
              </div>
              <div
                className="mono"
                style={{ fontSize: 10.5, opacity: 0.6, marginTop: 4 }}
              >
                {t.left}
              </div>
            </div>
            <div className="serif" style={{ fontSize: 28 }}>
              {money(t.price).replace("\u00A0", " ")}
            </div>
            <button
              style={{
                background: i === 2 ? "var(--accent)" : "var(--ink)",
                color: "white",
                padding: "10px 16px",
                border: 0,
                borderRadius: 6,
                fontSize: 13,
                fontWeight: 600,
              }}
            >
              Mua vé
            </button>
          </div>
        ))}
      </div>
      <aside
        style={{
          background: "var(--paper-2)",
          border: "1px solid var(--line)",
          borderRadius: 8,
          padding: 18,
        }}
      >
        <div className="caps">Phương thức thanh toán</div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 8,
            marginTop: 10,
          }}
        >
          {["VNPay", "MoMo", "Chuyển khoản", "ZaloPay"].map((p) => (
            <div
              key={p}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: 10,
                border: "1px solid var(--line)",
                borderRadius: 6,
                background: "var(--paper)",
                fontSize: 12.5,
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 24,
                  background: "var(--paper-3)",
                  borderRadius: 3,
                }}
              />
              {p}
            </div>
          ))}
        </div>
        <div
          style={{
            marginTop: 14,
            fontSize: 11,
            color: "var(--ink-3)",
            lineHeight: 1.5,
          }}
        >
          Sau khi thanh toán thành công, vé điện tử (QR) sẽ được gửi qua email
          và tin nhắn. Quét mã tại cổng để vào khán đài.
        </div>
      </aside>
    </div>
  );
}

window.AthleteView = AthleteView;
window.SpectatorView = SpectatorView;
