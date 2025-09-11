import { Mail, User, Linkedin, Phone } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your visions. Feel free to reach out to
          me via email or connect with me on LinkedIn. Let's create something
          amazing together!
        </p>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Email */}
          <div className="gradient-border p-4 card-hover h-min">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                <Mail className="w-6 h-6" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">Email</h4>
                <a
                  href="mailto:aarondverde@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-md"
                >
                  aarondverde@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="gradient-border p-4 card-hover h-min">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                <Linkedin className="w-6 h-6" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">LinkedIn</h4>
                <a
                  href="https://www.linkedin.com/in/aaron-verde/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-md"
                >
                  www.linkedin.com/in/
                  aaron-verde
                </a>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="gradient-border p-4 card-hover h-min">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                <Phone className="w-6 h-6" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">Phone</h4>
                <a
                  href="tel:+14706997935"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-md"
                >
                  (470) 699-7935
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
