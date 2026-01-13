export default function Home() {
  return (
    <article>
      <header style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{ fontSize: '24px' }}>📍</span>
        <h1 style={{ fontSize: '28px', fontWeight: 700, color: 'var(--text-primary)' }}>about me</h1>
      </header>

      <section style={{ lineHeight: '1.6', fontSize: '15px', color: 'var(--text-primary)' }}>
        <p style={{ marginBottom: '16px' }}>
          hello, i’m prudhvi bade. Mostly people call me Prudhvi.
        </p>

        <p style={{ marginBottom: '16px' }}>
          i’m a technology leader and finance enthusiast who enjoys operating at the intersection of deep systems and real business outcomes.i obsessively think about how data platforms, data products, and capital compound over time. my edge is translating complex technical problems into decisions that move the business needle.
        </p>

        <p style={{ marginBottom: '16px', fontWeight: 500, textDecoration: 'underline' }}>
          currently
        </p>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <li>• director of data & client technology at the modern data company</li>
          <li>• architecting scalable data solutions and building data products on dataos</li>
          <li>• leading data engineering, science and cloud ops teams across enterprise clients</li>
          <li>• running and scaling the Modern Data's hyderabad office</li>
        </ul>

        <p style={{ marginBottom: '16px', fontWeight: 500, textDecoration: 'underline' }}>
          previously
        </p>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <li>• program manager at google (google maps & geo data operations)</li>
          <li>• business strategy consultant at cognizant business consulting</li>
          <li>• led end to end deal strategy for a $120m bid at kaiser</li>
          <li>• part of the team that launched india’s first mifi & 4g volte network at reliance jio</li>
          <li>• co-founder at gharpe.in</li>
          <li>• mba from iim shillong</li>
        </ul>

        <p style={{ marginBottom: '16px', fontWeight: 500, textDecoration: 'underline' }}>
          what drives me
        </p>

        <p style={{ marginBottom: '16px' }}>
          i like hard problems. ambiguous ones. the kind where technology, incentives, and people all collide.
          i care about systems that scale, teams that grow faster than linearly, and ideas that age well.
        </p>

        <p style={{ marginBottom: '16px' }}>
          this space is a working notebook. some thoughts will be polished. many won’t. <span style={{ textDecoration: 'underline' }}>all of them are honest.</span>
        </p>

      </section>
    </article>
  );
}
