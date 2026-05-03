import { FC } from 'react';
import { MessageCircle, Send } from 'lucide-react';

export const Hero: FC = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-grain" />
      <div className="hero-glow" />

      <div className="hero-content">
        <div className="hero-badge fade-up">
          <span></span> The future of non-custodial wallets
        </div>

        <h1 className="hero-title fade-up delay-1">
          Privacy isn't an <span className="title-accent">option.</span> <br />
          It's the foundation.
        </h1>

        <p className="hero-sub fade-up delay-2">
          Flexus is the world's first privacy-first headless wallet. Experience secure Solana transactions via Telegram and WhatsApp with zero tracking, hardened encryption, and total self-custody.
        </p>

        <div className="hero-actions fade-up delay-3">
          <a href="https://t.me/flexusHQbot" className="btn-secondary" target='_blank'>
            <Send size={20} />
            Continue on Telegram
          </a>
          <div style={{ position: 'relative' }}>
            <a href="#" className="btn-secondary" style={{ opacity: 0.6, cursor: 'not-allowed' }}>
              <MessageCircle size={20} />
              Continue on WhatsApp
            </a>
            <span style={{
              position: 'absolute',
              top: '-10px',
              right: '0',
              background: 'var(--accent)',
              color: 'var(--bg)',
              fontSize: '0.65rem',
              fontWeight: 800,
              padding: '2px 8px',
              borderRadius: '10px',
              textTransform: 'uppercase'
            }}>
              Coming Soon
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
