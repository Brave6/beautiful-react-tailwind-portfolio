import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Android Developer & UI Engineer
            </h3>

            <p className="text-muted-foreground">
              I'm an Android Developer focused on crafting clean, modern, and
              user-centered mobile experiences using Kotlin and the latest
              Android technologies. With hands-on experience building apps
              from the ground up, I specialize in developing intuitive,
              responsive, and maintainable front-end systems.
            </p>

            <p className="text-muted-foreground">
             From implementing sleek UI designs to integrating RESTful APIs
              and managing state with best practices, I take pride in writing
              scalable and efficient code. I’m always exploring new libraries,
              tools, and design patterns to keep my apps performant and
              future-ready.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="https://sethaldwin.netlify.app/assets/Tolentino,%20Seth%20Aldwin%20-%20Android%20Developer.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Android Development</h4>
                  <p className="text-muted-foreground">
                     Building Android apps using Kotlin, Jetpack Compose, XML, and modern
                    architecture patterns like MVVM with Retrofit and
                    Coroutines.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Implementation</h4>
                  <p className="text-muted-foreground">
                     Translating design concepts into pixel-perfect interfaces
                    that are responsive, accessible, and delightful to use.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Solo Project Development</h4>
                  <p className="text-muted-foreground">
                    Experienced in handling full app lifecycles — from design
                    and API integration to testing and deployment — as a solo
                    developer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
