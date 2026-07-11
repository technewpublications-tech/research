import Container from "./Container";
import Button from "./Button";
import Reveal from "./Reveal";

export default function CTASection({
  title = "Let's talk about your research.",
  subtitle = "Tell us what you're working on — we'll tell you honestly how we can help.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="py-24 md:py-32 bg-ink text-paper relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #F7F4EC 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <Container className="relative">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl md:text-5xl leading-[1.1] text-balance mb-5">
              {title}
            </h2>
            <p className="text-paper/70 text-lg mb-10 max-w-[50ch]">{subtitle}</p>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact-us" variant="secondary" className="!border-paper/30 !text-paper hover:!border-paper">
                Start a conversation
              </Button>
              <Button href="/faq" variant="ghost" className="!text-paper hover:!text-paper">
                Read the FAQ
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
