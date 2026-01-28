import React from "react";

const Menu = () => {
  return (
    <section
      className="w-full py-20 sm:py-24 lg:py-32 px-4 sm:px-8 lg:px-20"
      style={{ backgroundColor: "#e0b95c" }}
    >
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.35em] text-xs sm:text-sm
                        text-[#3d0806] mb-4">
            Our Menu
          </p>

          <h2
            className="font-cormorant italic text-4xl sm:text-5xl md:text-6xl
                       text-[#3d0806] leading-tight"
          >
            A Celebration of Flavours
          </h2>
        </div>

        {/* MENU GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* COLUMN 1 */}
          <div className="space-y-10">

            <MenuItem
              title="Steamed Momos"
              desc="Handcrafted dumplings filled with seasoned vegetables or meat"
              price="₹220"
            />

            <MenuItem
              title="Thukpa"
              desc="Hearty Tibetan noodle soup with fresh vegetables and herbs"
              price="₹280"
            />

            <MenuItem
              title="Chilli Chicken"
              desc="Indo-Chinese classic tossed with peppers and garlic"
              price="₹320"
            />

          </div>

          {/* COLUMN 2 */}
          <div className="space-y-10">

            <MenuItem
              title="Pad Thai"
              desc="Rice noodles stir-fried with tamarind, peanuts, and herbs"
              price="₹340"
            />

            <MenuItem
              title="Thai Green Curry"
              desc="Coconut-based curry infused with Thai basil and spices"
              price="₹360"
            />

            <MenuItem
              title="Honey Chilli Potatoes"
              desc="Crispy potatoes glazed with sweet and spicy sauce"
              price="₹260"
            />

          </div>
        </div>

        {/* FOOTER NOTE */}
        <div className="text-center mt-20">
          <p className="text-[#3d0806]/70 text-sm sm:text-base italic">
            *Our menu changes with seasons to bring you the freshest flavours.*
          </p>
        </div>

      </div>
    </section>
  );
};

const MenuItem = ({ title, desc, price }) => {
  return (
    <div className="flex items-start gap-4">

      {/* TEXT */}
      <div className="flex-1">
        <div className="flex items-center justify-between gap-4">
          <h4 className="font-cormorant italic text-xl sm:text-2xl
                         text-[#3d0806]">
            {title}
          </h4>
          <span className="text-[#3d0806] font-medium">
            {price}
          </span>
        </div>

        <div className="border-b border-dotted border-[#3d0806]/40 my-2" />

        <p className="text-[#3d0806]/80 text-sm sm:text-base leading-relaxed">
          {desc}
        </p>
      </div>

    </div>
  );
};

export default Menu;
