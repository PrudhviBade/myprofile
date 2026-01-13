export default function Home() {
  return (
    <article>
      <header style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{ fontSize: '24px' }}>📍</span>
        <h1 style={{ fontSize: '28px', fontWeight: 700, color: 'var(--text-primary)' }}>about me</h1>
      </header>

      <section style={{ lineHeight: '1.6', fontSize: '15px' }}>
        <p style={{ marginBottom: '16px' }}>
          hello, i&apos;m prudhvi bade (rhymes with ...). i am a technology leader and finance enthusiast.
          i bridge the gap between complex data technology and strategic business outcomes—a rare blend
          of deep technical expertise and commercial acumen.
        </p>

        <p style={{ marginBottom: '16px' }}>
          currently:
        </p>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <li>• director of data, client technology at the modern data company</li>
          <li>• building scalable data fabrics and genbi products using dataos</li>
          <li>• leading data engineering and cloud ops teams</li>
          <li>• managing the hyderabad office operations</li>
        </ul>

        <p style={{ marginBottom: '16px' }}>
          previously:
        </p>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <li>• program manager at google (google maps & geo data ops)</li>
          <li>• business strategy consultant at cognizant business consulting</li>
          <li>• strategy consultant for a $120M bid at kaiser</li>
          <li>• launched india&apos;s first mifi & 4g volte network at reliance jio</li>
          <li>• co-founder of gharpe.in</li>
          <li>• studied mba at iim shillong</li>
        </ul>

        <p style={{ marginBottom: '16px' }}>
          i&apos;m also really good at equity research. i write a lot about investment opportunities
          in indian markets on my substack.
          i&apos;ve built several systems that help me invest in awesome companies, even when i&apos;m super busy.
        </p>

        <p style={{ marginBottom: '16px' }}>
          beyond work/finance, i love:
        </p>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <li>• technical analysis and charting on equities</li>
          <li>• whiteboard sessions and drawing architectural diagrams</li>
          <li>• test cricket and playing sports (badminton, tt, golf)</li>
          <li>• shipping software prototypes just to boast that i know stuff ;)</li>
        </ul>
      </section>
    </article>
  );
}
