import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">

      <div className="container-narrow relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Content with glass background */}
          <div
            className="order-2 lg:order-1 text-center lg:text-left
            bg-white/40 dark:bg-black/40 backdrop-blur-xl p-8 rounded-3xl shadow-2xl"
          >
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4 animate-fade-up">
              Handcrafted Excellence
            </p>

            <h1
              className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.1] mb-6 animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              Timeless{" "}
              <span className="text-gradient">Azure</span>
              <br />
              Porcelain Art
            </h1>

            <p
              className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              Discover our collection of museum-quality porcelain, where ancient
              craftsmanship meets contemporary elegance. Each piece tells a story
              spanning centuries.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              <Button variant="hero" size="xl" asChild>
                <a href="#collections">
                  Explore Collections
                  <ArrowRight className="h-5 w-5 ml-2" />
                </a>
              </Button>

              <Button variant="outline" size="xl" asChild>
                <a href="#story">Our Story</a>
              </Button>
            </div>

            {/* Stats */}
            <div
              className="flex items-center justify-center lg:justify-start gap-8 md:gap-12 mt-12 pt-8 border-t border-border/50 animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div>
                <p className="font-serif text-3xl md:text-4xl font-semibold text-primary">
                  25+
                </p>
                <p className="text-sm text-muted-foreground">Years of Craft</p>
              </div>

              <div>
                <p className="font-serif text-3xl md:text-4xl font-semibold text-primary">
                  5000+
                </p>
                <p className="text-sm text-muted-foreground">Pieces Created</p>
              </div>

              <div>
                <p className="font-serif text-3xl md:text-4xl font-semibold text-primary">
                  98%
                </p>
                <p className="text-sm text-muted-foreground">Happy Collectors</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto">

              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/20 animate-[spin_60s_linear_infinite]" />

              {/* Main image */}
              <div className="absolute inset-8 rounded-full overflow-hidden shadow-2xl animate-float">
                <img
                  src="/Accuel.jpeg"
                  alt="Azure Porcelain Vase"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass px-6 py-3 rounded-full shadow-lg">
                <p className="text-sm font-medium">
                  <span className="text-primary">Limited Edition</span> • Ming Collection
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
