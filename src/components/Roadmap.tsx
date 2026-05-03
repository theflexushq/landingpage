import { FC } from 'react';
import { CheckCircle2, Circle } from 'lucide-react';

const roadmapItems = [
  {
    phase: "Phase 1",
    title: "Telegram Alpha",
    description: "Launch of core features: Buy, Sell, Receive and Send with integrated zero-trust encryption.",
    status: "active",
    current: true
  },
  {
    phase: "Phase 2",
    title: "Privacy Audit & WhatsApp",
    description: "Launch of core features.",
    status: "upcoming"
  },
  {
    phase: "Phase 3",
    // title: "Anonymous Liquidity",
    title: "Coming Soon",
    description: "Antcipate.",
    // description: "Integration with privacy-preserving DeFi protocols.",
    status: "upcoming"
  },
  {
    phase: "Phase 4",
    // title: "Global Privacy Layer",
    title: "Coming Soon",
    description: "Anticipate.",
    // description: "Expansion into decentralized messaging protocols for 100% censorship-resistant access.",
    status: "upcoming"
  }
];

export const Roadmap: FC = () => {
  return (
    <section className="section" id="roadmap">
      <h2 className="section-title">The Privacy Roadmap</h2>
      <p className="section-subtitle">
        Building the future of anonymous, headless interaction on Solana.
      </p>

      <div className="roadmap-container">
        {roadmapItems.map((item, i) => (
          <div key={i} className={`roadmap-item ${item.status === 'active' ? 'active' : ''}`}>
            <div className="roadmap-dot">
              {item.status === 'active' ? <CheckCircle2 size={18} className="accent" /> : <Circle size={18} />}
            </div>
            <div className="roadmap-content">
              <span className="roadmap-tag">{item.phase} {item.current && "• Current"}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
