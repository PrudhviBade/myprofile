export default function Home() {
  return (
    <article>
      <header style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{ fontSize: '24px' }}>📍</span>
        <h1 style={{ fontSize: '28px', fontWeight: 700, color: 'var(--text-primary)' }}>about me</h1>
      </header>

      <section style={{ lineHeight: '1.6', fontSize: '15px', color: 'var(--text-primary)' }}>
        <p style={{ marginBottom: '16px' }}>
          hello, i’m prudhvi bade. 
        </p>

        <p style={{ marginBottom: '16px' }}>
          i’m a technology leader and finance enthusiast who enjoys operating at the intersection of deep systems and real business outcomes.
        </p>

        <p style={{ marginBottom: '24px' }}>
          i build and scale data platforms, lead engineering teams, and think obsessively about how data, products, and capital compound over time. my edge is translating complex technical problems into decisions that move the business needle.
        </p>

        <div style={{ margin: '32px 0', color: '#E5E5E7' }}>⸻</div>

        <p style={{ marginBottom: '16px', fontWeight: 500 }}>
          currently
        </p>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <li>• director of data & client technology at the modern data company</li>
          <li>• building scalable data fabrics and genbi products on dataos</li>
          <li>• leading data engineering and cloud ops teams across enterprise clients</li>
          <li>• running and scaling the hyderabad office</li>
        </ul>

        <div style={{ margin: '32px 0', color: '#E5E5E7' }}>⸻</div>

        <p style={{ marginBottom: '16px', fontWeight: 500 }}>
          previously
        </p>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <li>• program manager at google (google maps & geo data operations)</li>
          <li>• business strategy consultant at cognizant business consulting</li>
          <li>• led strategy for a $120m bid at kaiser</li>
          <li>• part of the team that launched india’s first mifi & 4g volte network at reliance jio</li>
          <li>• co-founder at gharpe.in</li>
          <li>• mba from iim shillong</li>
        </ul>

        <div style={{ margin: '32px 0', color: '#E5E5E7' }}>⸻</div>

        <p style={{ marginBottom: '16px', fontWeight: 500 }}>
          what drives me
        </p>

        <p style={{ marginBottom: '16px' }}>
          i like hard problems. ambiguous ones. the kind where technology, incentives, and people all collide.
          i care about leverage—systems that scale, teams that grow faster than linearly, and ideas that age well.
        </p>

        <p style={{ marginBottom: '16px' }}>
          this space is a working notebook. some thoughts will be polished. many won’t. all of them are honest.
        </p>

      </section>
    </article>
  );
}
