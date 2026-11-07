import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { APP_URL } from "@/lib/constants";

const POLICY_URL = `${APP_URL}/privacy`;

const PrivacyPolicy = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.replace(POLICY_URL);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-24 max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-foreground mb-4">Our privacy policy has moved</h1>
        <p className="text-lg text-muted-foreground mb-8">
          The current DOSE Academy Privacy Policy (updated November 6, 2026) is now hosted with
          the app at{" "}
          <a href={POLICY_URL} className="text-primary hover:underline font-medium">
            learn.getdose.app/privacy
          </a>
          .
        </p>
        <Button size="lg" variant="brand" className="shadow-medium group" asChild>
          <a href={POLICY_URL}>
            View the DOSE Academy Privacy Policy
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </Button>
        <p className="text-sm text-muted-foreground mt-8">
          You will be redirected to{" "}
          <a href={POLICY_URL} className="text-primary hover:underline">
            learn.getdose.app/privacy
          </a>{" "}
          automatically.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
