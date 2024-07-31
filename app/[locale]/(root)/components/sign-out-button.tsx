import { signOut } from "@/auth";
import { HoverBorderGradientButton } from "@/components/shared/hover-border-gradient";
import { LogOut } from "lucide-react";
import { getTranslations } from "next-intl/server";
const SignOutButton = async () => {
  const t = await getTranslations("LandingPage");

  const handleSignOut = async () => {
    "use server";
    await signOut();
  };
  return (
    <form action={handleSignOut}>
      <HoverBorderGradientButton>
        <div
          className="flex items-center text-secondary-foreground hover:text-hover
        transition-all text-sm duration-1000 ml-1 whitespace-nowrap px-3 py-2
        gap-2"
        >
          {t("Log out")} <LogOut className="ml-1 scale-75" />
        </div>
      </HoverBorderGradientButton>
    </form>
  );
};

export default SignOutButton;
