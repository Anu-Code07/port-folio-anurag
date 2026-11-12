import { roles, stack } from "@/lib/content";

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

export function Stack() {
  return (
    <section id="stack" className="wrap" aria-labelledby="h-stack" data-branch="stack">
      <div className="opener">
        <h2 id="h-stack">package.json</h2>
        <p>The dependencies I actually use, grouped by the problems they solve. No left-pad.</p>
      </div>
      <div className="stack">
        {stack.map((g) => (
          <div key={g.group}>
            <h3>{g.group}</h3>
            <ul>{g.items.map((i) => <li key={i}>{i}</li>)}</ul>
          </div>
        ))}
      </div>
    </section>
  );
}
