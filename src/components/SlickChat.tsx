import mascotImage from "@/assets/dose-mascot-custom.png";
import { APP_URL } from "@/lib/constants";

// Slick chat now lives in the app and requires a signed-in, age-verified user (13+).
// Anonymous website chat is intentionally not offered — this is a CTA into the app instead.
const SlickChat = () => {
  return (
    <a
      href={`${APP_URL}/auth`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-3 rounded-full bg-primary py-2 pl-2 pr-5 shadow-lg transition-transform hover:scale-105 active:scale-95 border-2 border-primary-foreground/20"
      aria-label="Chat with Slick in the app — sign in at learn.getdose.app"
    >
      <span className="h-12 w-12 rounded-full bg-background/10 flex items-center justify-center overflow-hidden flex-shrink-0">
        <img src={mascotImage} alt="Slick" className="h-11 w-11 object-contain" />
      </span>
      <span className="text-primary-foreground text-sm font-semibold leading-tight max-w-[160px]">
        Chat with Slick in the app
      </span>
    </a>
  );
};

export default SlickChat;
