export default function Home() {
  return (
    <article>
      <header style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{ fontSize: '24px' }}>📍</span>
        <h1 style={{ fontSize: '28px', fontWeight: 700, color: 'var(--text-primary)' }}>about me</h1>
      </header>

      <section style={{ lineHeight: '1.6', fontSize: '15px', color: 'var(--text-primary)' }}>
        <p style={{ marginBottom: '16px' }}>
          hello, i’m prudhvi bade. most people call me prudhvi.
        </p>

        <p style={{ marginBottom: '16px' }}>
          i’m a director-level <span style={{ textDecoration: 'underline' }}>data and AI leader</span> specializing in large-scale data platforms. I build and lead high-performance teams across data engineering and ML systems while staying hands-on in architecture and code.
        </p>

        <p style={{ marginBottom: '16px' }}>
          beyond my core role, i build AI-driven equity research and investing frameworks. my edge is translating complex technical challenges into decisions that move the business needle. i hold a b.tech. and an mba from iim shillong.
        </p>

        <p style={{ marginBottom: '16px', fontWeight: 500, textDecoration: 'underline' }}>
          currently
        </p>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <li>• senior director (data and ai enablement) in gartner’s analyst team, focusing on agentic data management, data observability, and data architecture</li>
          <li>• pioneering research and translating complex system design entities into strategic insights that guide the next wave of ai, data products and data architecture</li>
        </ul>

        <p style={{ marginBottom: '16px', fontWeight: 500, textDecoration: 'underline' }}>
          previously
        </p>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <li>• director of data engineering and architecture at the modern data company, leading data engineering, science, and cloud ops teams to architect scalable solutions and build data products on dataos</li>
          <li>• implemented production-grade generative ai and llm solutions for enterprise clients</li>
          <li>• head of enterprise data delivery and led customer success at the modern data company</li>
          <li>• program manager at google (google maps & geo data operations)</li>
          <li>• business strategy consultant at cognizant business consulting, leading end-to-end deal strategy for a $120Mn bid at kaiser</li>
          <li>• part of the team that launched india’s first mifi & 4g volte network at reliance jio</li>
          <li>• co-founder at gharpe.in</li>
        </ul>

        <p style={{ marginBottom: '16px', fontWeight: 500, textDecoration: 'underline' }}>
          what drives me
        </p>

        <p style={{ marginBottom: '16px' }}>
          i like hard problems and care about systems that scale, teams that grow faster than linearly, and ideas that age well.
        </p>

        <p style={{ marginBottom: '16px' }}>
          this space is a working notebook. some thoughts will be polished. many won’t. <span style={{ textDecoration: 'underline' }}>all of them are honest.</span>
        </p>

      </section>
    </article>
  );
}
