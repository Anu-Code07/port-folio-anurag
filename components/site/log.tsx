import { pkg, roles } from "@/lib/content";

export function Log() {
  return (
    <section id="log" className="wrap log" aria-labelledby="h-log" data-branch="log">
      <div className="opener">
        <h2 id="h-log">git merge --no-ff career</h2>
        <p>Four branches, all merged, no force-pushes. Payments at Juspay, dashboards at Karbon, mobile and rewards at Niyo, and now travel and commerce at Scapia.</p>
      </div>
      <ol className="branches">
        {roles.map((r) => (
          <li className="branch" key={r.company} data-merge>
            <svg className="merge" viewBox="0 0 52 100" preserveAspectRatio="none" aria-hidden="true">
              <path d="M1 0 V100" style={{ stroke: "var(--line-soft)" }} />
              <path d="M1 82 C 1 60, 40 58, 40 34 V0" data-draw pathLength={1} />
              <circle cx="40" cy="34" r="5" />
            </svg>
            <div>
              <p className="co">{r.company}</p>
              <p className="ro">{r.role}</p>
              <p className="pe">{r.period}</p>
            </div>
            <div>
              <p className="su">{r.summary}</p>
              <ul>{r.shipped.map((s) => <li key={s}>{s}</li>)}</ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

type Line = { indent: number; key?: string; value?: string; open?: string; close?: string; comma?: boolean };

function lines(): Line[] {
  const out: Line[] = [{ indent: 0, open: "{" }, { indent: 1, key: "name", value: "anurag", comma: true }, { indent: 1, key: "version", value: "4.10.0", comma: true }];
  const groups = Object.entries(pkg) as [string, readonly (readonly [string, string])[]][];
  groups.forEach(([group, entries], gi) => {
    out.push({ indent: 1, key: group, open: "{" });
    entries.forEach(([k, v], i) => out.push({ indent: 2, key: k, value: v, comma: i < entries.length - 1 }));
    out.push({ indent: 1, close: "}", comma: gi < groups.length - 1 });
  });
  out.push({ indent: 0, close: "}" });
  return out;
}

export function Stack() {
  const ls = lines();
  return (
    <section id="stack" className="wrap" aria-labelledby="h-stack" data-branch="stack">
      <div className="opener">
        <h2 id="h-stack">package.json</h2>
        <p>What I actually reach for, and where each one earned its place. No left-pad.</p>
      </div>
      <figure className="pkg">
        <div className="pkg-bar mono" aria-hidden="true"><span className="dots"><i /><i /><i /></span>~/anurag/package.json</div>
        <pre className="mono" aria-label="Stack as a package.json">
          {ls.map((l, i) => (
            <span className="ln" key={i}>
              <span className="no" aria-hidden="true">{i + 1}</span>
              <span>
                {"  ".repeat(l.indent)}
                {l.key !== undefined && <><span className="k">&quot;{l.key}&quot;</span><span className="p">: </span></>}
                {l.value !== undefined && <span className="v">&quot;{l.value}&quot;</span>}
                {l.open && <span className="p">{l.open}</span>}
                {l.close && <span className="p">{l.close}</span>}
                {l.comma && <span className="p">,</span>}
              </span>
            </span>
          ))}
        </pre>
      </figure>
    </section>
  );
}
