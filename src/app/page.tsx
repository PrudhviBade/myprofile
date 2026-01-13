export default function Home() {
  return (
    <article>
      <header style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{ fontSize: '24px' }}>📍</span>
        <h1 style={{ fontSize: '28px', fontWeight: 700, color: 'var(--text-primary)' }}>about me</h1>
      </header>

      <section style={{ lineHeight: '1.6', fontSize: '15px' }}>
        <p style={{ marginBottom: '24px' }}>
          I’m <strong>Prudhvi Bade</strong>. I bridge the gap between complex data technology and strategic business outcomes—a rare blend of deep technical expertise and commercial acumen.
        </p>

        <h3 style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--text-secondary)', letterSpacing: '0.05em', marginBottom: '16px' }}>
          Currently 2020 — 2026
        </h3>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '32px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <li>
            <strong>Director of Data, Client Technology @ The Modern Data Company</strong>
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginTop: '4px' }}>
              Architecting scalable data fabrics and GenBI products using DataOS. I help customers productize their data and unlock value at scale.
            </p>
          </li>
          <li>
            <strong>Team Leadership & Operations</strong>
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginTop: '4px' }}>
              Built and led the Data Engineering and Cloud Ops teams for 3 years. Managed Hyderabad office operations and spearheaded recruitment and marketing collateral initiatives.
            </p>
          </li>
        </ul>

        <h3 style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--text-secondary)', letterSpacing: '0.05em', marginBottom: '16px' }}>
          Previously 2016 — 2020
        </h3>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '32px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <li>
            <strong>Program Manager @ Google</strong>
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginTop: '4px' }}>
              Led Geo Data Operations for Google Maps. Developed RCNN models and drove revenue across Trust & Safety and Imagery teams.
            </p>
          </li>
          <li>
            <strong>Strategy Consultant @ Cognizant</strong>
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginTop: '4px' }}>
              Won the Shining Star and Best Project Manager awards for managing a $120M successful bid at Kaiser.
            </p>
          </li>
          <li>
            <strong>Entrepreneurship & Early Career</strong>
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginTop: '4px' }}>
              Launched <strong>Gharpe.in</strong> (grocery delivery) in 2015. Developed India’s first MiFi & 4G VoLTE network at <strong>Reliance Jio</strong>.
            </p>
          </li>
        </ul>

        <h3 style={{ fontSize: '16px', fontWeight: 700, marginTop: '40px', marginBottom: '16px' }}>More about me</h3>
        <p style={{ marginBottom: '16px' }}>
          Beyond the technical stack, I’m an avid <strong>Equity Researcher</strong>. I focus on technical analysis and fundamental research in Indian markets, building systems that provide high-conviction investment opportunities even amidst a busy professional schedule.
        </p>
        <p>
          I document my findings and market observations on my <a href="https://prudhvibade.substack.com/" target="_blank" style={{ textDecoration: 'underline' }}>Substack</a>.
        </p>
      </section>
    </article>
  );
}
