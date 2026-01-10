import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { randomRecipes } from "@/api/recipes/randomRecipes";
import Card from "./card";
import type { Recipes } from "@/type/Recepies";
import { CardSkeleton } from "./cardSkeleton";

export default function RandomRecipes() {
  const [recipes, setRecipes] = useState<Recipes[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const loadRecipes = async () => {
      try {
        const data = await randomRecipes();
        setRecipes(data);
      } catch (error) {
        console.error("Error fetching random recipes:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadRecipes();
  }, []);

  useEffect(() => {
    if (sliderRef.current) {
      setWidth(sliderRef.current.scrollWidth - sliderRef.current.offsetWidth);
    }
  }, [recipes, isLoading]);

  return (
    <section className="overflow-hidden">
      <motion.div
        ref={sliderRef}
        className="cursor-grab overflow-hidden"
        whileTap={{ cursor: "grabbing" }}
      >
        <header className="flex justify-between items-centerp px-3 pb-4">
          <h2 className="font-bold text-lg">Latest Recipes</h2>
          <button className="rounded-lg bg-muted text-muted-foreground px-4 py-2 text-sm hover:bg-foreground/10 hover:text-foreground transition-all">
            View all
          </button>
        </header>

        <motion.div
          className="flex gap-4 pl-3"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          {isLoading &&
            Array.from({ length: 6 }).map((_, i) => (
              <div key={`skeleton-${i}`} className="min-w-[220px]">
                <CardSkeleton />
              </div>
            ))}

          {!isLoading &&
            recipes.map((recipe) => (
              <div key={recipe.id} className="min-w-[220px]">
                <Card id={recipe.id} name={recipe.name} image={recipe.image} />
              </div>
            ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
