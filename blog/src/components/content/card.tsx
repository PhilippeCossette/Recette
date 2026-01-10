import { Link } from "react-router";
import { useState } from "react";

type Recipe = {
  id: number;
  name: string;
  image: string;
};

export default function Card({ id, name, image }: Recipe) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <article className="bg-card">
      <div className="relative rounded-lg overflow-hidden bg-muted h-32">
        {!imageLoaded && (
          <div className="absolute inset-0 animate-pulse bg-muted-foreground/20" />
        )}

        <img
          src={image}
          alt={name}
          draggable={false}
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-32 object-cover transition-opacity duration-300 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      <header className="py-2">
        <h2 className="truncate text-xs font-bold select-none">{name}</h2>
      </header>
    </article>
  );
}
