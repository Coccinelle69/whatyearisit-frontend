const currentYear = document.getElementById("year");

const getCurrentYear = async () => {
  const response = await fetch("https://whatyearisit-eta.vercel.app/year");
  //   const response = await fetch("http://localhost:3000/year");
  const responseData = await response.json();
  console.log(year);
  currentYear.textContent = responseData.year;
};

getCurrentYear();
