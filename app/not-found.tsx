import Link from "next/link";
import Container from "@/components/Container";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <section className="py-32 md:py-40">
      <Container className="text-center">
        <p className="numeral text-2xl mb-4">404</p>
        <h1 className="font-display text-4xl md:text-5xl mb-5">This page went off to peer review.</h1>
        <p className="text-ink-soft max-w-md mx-auto mb-10">
          The page you're looking for doesn't exist, or may have moved. Let's get you back on track.
        </p>
        <div className="flex justify-center gap-4">
          <Button href="/">Back to home</Button>
          <Link href="/contact-us" className="inline-flex items-center px-6 py-3 text-ink-soft hover:text-ink transition-colors">
            Contact us
          </Link>
        </div>
      </Container>
    </section>
  );
}
