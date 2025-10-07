import { Mail, Linkedin, Phone, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Your Formspree integration code
      const res = await fetch("https://formspree.io/f/xeorlayv", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(formData),
       });

      // Check for a successful Formspree response (200, 204, 301, 302)
      if (!res.ok) throw new Error("Formspree submission failed");

      await new Promise((res) => setTimeout(res, 1500)); // simulate delay

      toast({
        title: "Message sent!",
        description:
          "Thanks for reaching out — I’ll get back to you as soon as possible.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me via LinkedIn.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative"> {/* Removed bg-secondary/30, let background handle it */}
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your visions. Feel free to reach out via
          email or LinkedIn — let's create something amazing together!
        </p>

        {/* Grid: Info left, form right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side — Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6 md:text-left text-center">
              Contact Information
            </h3>

            <div className="space-y-10 flex flex-col md:items-start items-center ml-5">
              
              {/* Email */}
              <div className="flex items-center space-x-4"> 
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Email</h4>
                  <a
                    href="mailto:aarondverde@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    aarondverde@gmail.com
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              {/* ALIGNMENT FIX: Changed items-start to items-center */}
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Linkedin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">LinkedIn</h4>
                  <a
                    href="https://www.linkedin.com/in/aaron-verde/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    linkedin.com/in/aaron-verde
                  </a>
                </div>
              </div>

              {/* Phone */}
              {/* ALIGNMENT FIX: Changed items-start to items-center */}
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Phone</h4>
                  <a
                    href="tel:+14706997935"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    (470) 699-7935
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side — Contact Form */}
          <div className="bg-card p-8 rounded-lg shadow-xl"> {/* Changed shadow-xs to shadow-xl */}
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Type your name..."
                  // IMPROVED FOCUS/VALIDATION STYLE: Added transition-all
                  className="w-full px-4 py-3 rounded-md border border-input bg-background transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary invalid:focus:ring-red-500"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                  // IMPROVED FOCUS/VALIDATION STYLE
                  className="w-full px-4 py-3 rounded-md border border-input bg-background transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary invalid:focus:ring-red-500"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message..."
                  // IMPROVED FOCUS/VALIDATION STYLE
                  className="w-full px-4 py-3 rounded-md border border-input bg-background transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary resize-none invalid:focus:ring-red-500"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2",
                  isSubmitting && "opacity-70 cursor-not-allowed" // Dim when submitting
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send 
                  size={16} 
                  // ADDED: Spin animation for submitting state
                  className={cn(isSubmitting && "animate-spin-slow")} 
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};