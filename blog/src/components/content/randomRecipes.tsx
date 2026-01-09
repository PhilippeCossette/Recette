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
        className="cursor-grab overflow-hidden pl-3"
        whileTap={{ cursor: "grabbing" }}
      >
        <header>
          <h2 className="font-bold text-lg mb-4">Latest Recipes</h2>
        </header>

        <motion.div
          className="flex gap-4"
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
