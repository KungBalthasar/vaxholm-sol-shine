export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Vaxholm Sol & Batteri</h3>
            <p className="text-primary-foreground/80 text-sm">
              Hållbar energi anpassad för svenska förhållanden
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <p>📧 charlie@twiston.se</p>
              <p>📞 070 386 6696</p>
              <p>📍 Campusgränd 1, Vaxholm</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Tjänster</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Solceller för hem</li>
              <li>Batterilagring</li>
              <li>Företag & BRF</li>
              <li>Service & support</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>© 2025 Vaxholm Sol & Batteri | <a href="#" className="hover:text-primary-foreground transition-colors">Integritetspolicy</a></p>
        </div>
      </div>
    </footer>
  );
};
