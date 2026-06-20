import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function FinalCTASection() {
  const { ref, isRevealed } = useScrollReveal<HTMLElement>();

  return (
    <section className="final-cta" ref={ref}>
      <div className="final-cta__bg" style={{ backgroundImage: 'url(/kayak.JPG)' }} />
      <div className="final-cta__overlay" />
      <div className={`final-cta__content ${isRevealed ? 'revealed' : ''}`} style={{ opacity: isRevealed ? 1 : 0, transform: isRevealed ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)' }}>
        <h2 className="final-cta__title">Ready to Explore Palawan?</h2>
        <p className="final-cta__subtitle">
          Let us handle the journey so you can focus on the adventure. Book your ride today.
        </p>
        <a href="/contact" className="btn btn--primary btn--lg">Start Your Journey</a>
      </div>
    </section>
  );
}
