import { Github, Linkedin, Mail, PhoneCall, Send } from "lucide-react";
import { cn } from "../utils/util";
import { useToast } from "../utils/use-toast";
import { useState } from "react";

export const Contact = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    // e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      toast({
        title: "Message sent succesfully ✅",
        description: "I will get back to you shortly",
      });
      setSubmitted(false);
    }, 1000);
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-4xl ">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Lets Connect!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
          <div className="space-y-8 py-10">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email </h4>
                  <a
                    className="text-muted-foreground hover:text-primary transition-colors"
                    href="mailto:karanmehta29.km@gmail.com"
                  >
                    karanmehta29.km@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <PhoneCall className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium px-20">Phone</h4>
                  <a
                    className="text-muted-foreground hover:text-primary transition-colors"
                    href="tel:+918070720004"
                  >
                    +91 8070720004
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-8 pr-10">
              <h4 className="font-medium mb-4">Connect with Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/karan-mehta-896153233/"
                  target="_blank"
                >
                  <Linkedin />
                </a>
                <a href="https://github.com/karanmehta567" target="_blank">
                  <Github />
                </a>
                <a href="https://leetcode.com/u/mkaran94/" target="_blank">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                    alt="LeetCode"
                    style={{ width: 32, height: 32 }}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>
            <form
              action="https://formspree.io/f/mdkgjpyw"
              method="POST"
              className="space-y-6"
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  htmlFor="name"
                  className="font-medium block text-sm mb-2"
                >
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-transparent border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="font-medium block text-sm mb-2"
                >
                  Your E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-transparent border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="font-medium block text-sm mb-2"
                >
                  Your Message
                </label>
                <input
                  type="text"
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 border-transparent rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:rind-primary"
                />
              </div>
              <button
                type="submit"
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {submitted ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
