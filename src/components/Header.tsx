import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  onContactClick: () => void;
}

export const Header = ({ onContactClick }: HeaderProps) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      // Only apply hide/show logic on mobile (screen width < 768px)
      if (window.innerWidth < 768) {
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      } else {
        setVisible(true);
      }
      
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.location.href = "/";
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-2 md:px-4 py-3 md:py-4 flex justify-between items-center">
        <h1 
          onClick={handleLogoClick}
          className="text-base md:text-xl font-semibold text-foreground cursor-pointer hover:opacity-80 transition-opacity"
        >
          Vaxholm Sol & Batteri
        </h1>
        <nav className="flex items-center gap-2 md:gap-6">
          <a href="#tjanster" className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors">
            Tjänster
          </a>
          <a href="#process" className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors">
            Process
          </a>
          <a href="#projekt" className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors">
            Projekt
          </a>
          <Button onClick={onContactClick} size="sm" className="text-xs md:text-sm px-2 md:px-4">
            Kontakt
          </Button>
        </nav>
      </div>
    </header>
  );
};
