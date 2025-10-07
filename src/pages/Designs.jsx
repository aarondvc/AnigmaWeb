import { DesignNavbar } from "../components/DesignNavbar";
import { DesignsSection } from "../components/DesignsSection";
import { SkyBackground } from "../components/SkyBackground";
import { ContactSection } from "../components/ContactSection";

export const Designs = () => {
   return(
      <div className="designs">
         <SkyBackground />
         <DesignNavbar />
         <DesignsSection />
         <ContactSection />
      </div>
   );
};