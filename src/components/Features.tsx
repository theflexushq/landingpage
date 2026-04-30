import { FC } from 'react';
import { Shield, EyeOff, Lock, Zap, Globe, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: <EyeOff size={32} />,
    title: "Zero Metadata Tracking",
    description: "We don't log your messages, your trades, or your intent. Your transaction history stays between you and the blockchain."
  },
  {
    icon: <Lock size={32} />,
    title: "Hardened Encryption",
    description: "Industry-standard AES-256 encryption ensures your sharded keys never leave your encrypted vault without your PIN."
  },
  {
    icon: <Shield size={32} />,
    title: "Self-Custody First",
    description: "You own your keys. You own your crypto. FlexusCore provides the interface; you provide the control."
  },
  {
    icon: <Zap size={32} />,
    title: "Lightning Speed",
    description: "Optimized for the Solana network. Experience sub-second finality with zero compromise on your data privacy."
  },
  {
    icon: <Globe size={32} />,
    title: "Headless Interface",
    description: "No bulky apps or browser extensions. Interact privately through the chat apps you already use and trust."
  },
  {
    icon: <BarChart3 size={32} />,
    title: "Anonymous Markets",
    description: "Access prediction markets and DeFi pools without revealing your identity or connecting your local IP."
  }
];

export const Features: FC = () => {
  return (
    <section className="section" id="features">
      <h2 className="section-title">Privacy as the Core</h2>
      <p className="section-subtitle">
        Most wallets track your every move. We built Flexus to be the invisible, private layer between you and Solana.
      </p>

      <div className="features-grid">
        {features.map((f, i) => (
          <div key={i} className="feature-card">
            <div className="feature-icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
