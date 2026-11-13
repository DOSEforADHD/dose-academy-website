import { Heart } from "lucide-react";
import { Card } from "@/components/ui/card";

const FounderNote = () => {
  return (
    <section className="py-16 px-4 bg-background" aria-labelledby="founder-note-heading">
      <div className="container mx-auto max-w-3xl">
        <Card className="p-8 md:p-12 border-2 border-primary/20 bg-gradient-to-b from-accent/30 to-background">
          <div className="flex items-center gap-3 mb-6">
            <Heart className="h-6 w-6 text-secondary shrink-0" aria-hidden="true" />
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              A note from our founder
            </p>
          </div>

          <h2 id="founder-note-heading" className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
            I wish I'd had this when I was 13.
          </h2>

          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              When I was 13, my working memory got the best of me. I forgot to write
              something down. To teach me a lesson, my father left me outside to wait
              in a parking lot for an hour.
            </p>
            <p>
              I remember that hour. But I didn't need a lesson about trying harder. I
              needed a way to catch the thought before it slipped away, and someone to
              understand that forgetting wasn't a character flaw. It was how my brain
              worked.
            </p>
            <p>
              DOSE Academy is the set of tools I needed at 13, built for the teens and
              parents navigating ADHD right now.
            </p>
            <p className="text-foreground font-semibold">
              So here is my promise: as long as I am CEO of DOSE, DOSE Academy will
              remain free for every teen and every parent. No trial clock. No credit card.
            </p>
          </div>

          <div className="mt-10 pt-6 border-t border-border">
            <p className="font-bold text-foreground">Steev Hodgson</p>
            <p className="text-sm text-muted-foreground">Founder &amp; CEO, DOSE</p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default FounderNote;
