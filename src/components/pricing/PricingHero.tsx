import { Shield, CreditCard, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import logoImage from "@/assets/dose-academy-logo.png";

const PricingHero = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="mb-8 flex justify-center">
          <img 
            src={logoImage} 
            alt="DOSE Academy Logo" 
            className="h-20 w-20"
          />
        </div>
        
        <h1 className="text-5xl font-bold mb-6 text-foreground">
          Free for Every Teen and Family
        </h1>
        <p className="text-xl text-muted-foreground mb-10">
          Every DOSE Academy tool, free for individuals and parents. Custom packages for schools and districts.
        </p>
        
        <div className="flex flex-wrap justify-center gap-6">
          <Badge variant="outline" className="px-4 py-2 text-sm flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-success" />
            Free for Individuals &amp; Parents
          </Badge>
          <Badge variant="outline" className="px-4 py-2 text-sm flex items-center gap-2">
            <CreditCard className="h-4 w-4 text-primary" />
            No Credit Card Required
          </Badge>
          <Badge variant="outline" className="px-4 py-2 text-sm flex items-center gap-2">
            <Shield className="h-4 w-4 text-primary" />
            COPPA Compliant
          </Badge>
        </div>
      </div>
    </section>
  );
};

export default PricingHero;
