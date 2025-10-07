import { DesignNavbar } from "../components/DesignNavbar";
import { DesignsSection } from "../components/DesignsSection";
import { SkyBackground } from "../components/SkyBackground";

export const Designs = () => {
   return(
      <div className="designs">
         <SkyBackground />
         <DesignNavbar />
         <DesignsSection />
      </div>
   );
};