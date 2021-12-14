const spaceAge = (seconds) => {
  const yearsInAllPlanets = {
    Mercury: 0,
    Venus: 0,
    Earth: 0,
    Mars: 0,
    Jupiter: 0,
    Saturn: 0,
    Uranus: 0,
    Neptune: 0,
  };

  const secondsInYear = 31557600;
  const years = seconds / secondsInYear;

  for (let planet in yearsInAllPlanets) {
    yearsInAllPlanets[planet] =
       parseFloat((years /
      (planet === "Earth"
        ? 1
        : planet === "Mercury"
        ? 0.2408467
        : planet === "Venus"
        ? 0.61519726
        : planet === "Mars"
        ? 1.8808158
        : planet === "Jupiter"
        ? 11.862615
        : planet === "Saturn"
        ? 29.447498
        : planet === "Uranus"
        ? 84.016846
        : planet === "Neptune"
        ? 164.79132
        : 0)).toFixed(2));
  }

  return yearsInAllPlanets;
};

console.log(spaceAge(Math.round(Math.random() * 99999999)));
