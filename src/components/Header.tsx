import { Button } from "@/components/ui/button";

interface HeaderProps {
  onContactClick: () => void;
}

export const Header = ({ onContactClick }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-2 md:px-4 py-3 md:py-4 flex justify-between items-center">
        <h1 className="text-base md:text-xl font-semibold text-foreground">
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
