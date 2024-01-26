const currentYear = document.getElementById("year");

const getCurrentYear = async () => {
  const response = await fetch("https://whatyearisit-eta.vercel.app/year");
  const { year } = await response.json();
  console.log(year);
  currentYear.textContent = year;
};

getCurrentYear();
