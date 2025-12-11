const Story = () => {
  return (
    <section id="story" className="section-padding">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-card">
                  <img
                    src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&q=80"
                    alt="Artisan crafting porcelain"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-card">
                  <img
                    src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=600&q=80"
                    alt="Finished porcelain pieces"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="pt-8">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-card">
                  <img
                    src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?w=600&q=80"
                    alt="Porcelain details"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border border-dashed border-primary/10" />
          </div>

          {/* Content */}
          <div>
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              Our Heritage
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
              A Legacy of{" "}
              <span className="text-gradient">Excellence</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                For over two decades, Azure Porcelain has been dedicated to preserving
                and evolving the ancient art of fine porcelain making. Our journey
                began in a small workshop, where master artisans first combined
                traditional techniques with contemporary design sensibilities.
              </p>
              <p>
                Each piece that leaves our atelier carries within it centuries of
                accumulated wisdom. From the careful selection of kaolin clay to the
                precise control of kiln temperatures reaching 1300°C, every step in
                our process honors the traditions of the great ceramic masters while
                embracing modern innovation.
              </p>
              <p>
                Today, our collections grace the homes of discerning collectors
                worldwide, from private residences to museum exhibitions. We remain
                committed to the principle that true luxury lies not in excess, but
                in the perfection of craft.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-border">
              <div>
                <div className="w-12 h-12 rounded-full gradient-azure flex items-center justify-center mb-3">
                  <span className="text-primary-foreground text-lg">✦</span>
                </div>
                <h3 className="font-medium mb-1">Hand-Crafted</h3>
                <p className="text-sm text-muted-foreground">Every piece uniquely made</p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center mb-3">
                  <span className="text-accent-foreground text-lg">◈</span>
                </div>
                <h3 className="font-medium mb-1">Authentic</h3>
                <p className="text-sm text-muted-foreground">Traditional techniques</p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-3">
                  <span className="text-lg">∞</span>
                </div>
                <h3 className="font-medium mb-1">Timeless</h3>
                <p className="text-sm text-muted-foreground">Enduring beauty</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
