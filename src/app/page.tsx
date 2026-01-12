export default function Home() {
  return (
    <article>
      <header style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{ fontSize: '24px' }}>📍</span>
        <h1 style={{ fontSize: '28px', fontWeight: 700, color: 'var(--text-primary)' }}>about me</h1>
      </header>

      <section style={{ lineHeight: '1.6', fontSize: '15px' }}>
        <p style={{ marginBottom: '16px' }}>
          Hello, I'm <strong>Prudhvi Bade</strong>. I am a technology leader and finance enthusiast.
          Currently, I serve as the <strong>Director of Client Technology</strong> at <strong>The Modern Data Company</strong>.
        </p>

        <p style={{ marginBottom: '16px' }}>
          My professional journey has been centered around data and strategy. I've spent over 6 years at The Modern Data Company,
          moving from Senior Program Manager in the CEO's office to Director roles.
          Previously, I worked at <strong>Google</strong> (Program Manager) and <strong>Cognizant</strong> (Business Strategy Consultant).
        </p>

        <p style={{ marginBottom: '16px' }}>
          By night, I am a passionate voice in <strong>Equity Research</strong>. I believe in the power of fundamental analysis
          and first-principles thinking when it comes to the markets. I write about my findings and market observations
          on my <a href="https://prudhvibade.substack.com/" target="_blank">Substack</a>.
        </p>

        <h3 style={{ fontSize: '16px', fontWeight: 700, marginTop: '32px', marginBottom: '12px' }}>core expertise</h3>
        <ul style={{ listStyle: 'disc', paddingLeft: '20px', marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <li><strong>Data Architecture & Engineering</strong>: Building scalable data fabrics and GenBI products.</li>
          <li><strong>Business Strategy</strong>: Helping customers productize their data and extract value at scale.</li>
          <li><strong>Equity Research</strong>: Deep dives into company fundamentals and market themes.</li>
        </ul>

        <p style={{ marginBottom: '16px' }}>
          Originally a systems engineer at Jio and co-founder of Gharpe.in, I've always been driven by the
          challenge of building things from scratch and making complex systems work faster and better.
        </p>
      </section>
    </article>
  );
}
