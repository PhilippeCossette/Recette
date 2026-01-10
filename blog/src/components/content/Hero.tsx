export default function Hero() {
  return (
    <section className="px-6 py-16 text-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Simple recipes. Real food.
      </h1>

      <p className="text-muted-foreground max-w-xl mx-auto mb-6">
        Discover easy, delicious recipes made for everyday cooking. No fluff.
        Just food you’ll actually cook.
      </p>

      <div className="flex justify-center gap-4">
        <button className="px-5 py-2 rounded-lg bg-primary text-primary-foreground">
          Browse recipes
        </button>
        <button className="px-5 py-2 rounded-lg border">Meal ideas</button>
      </div>
    </section>
  );
}
