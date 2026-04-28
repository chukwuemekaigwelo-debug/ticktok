async function fetchJoke() {
  const setup = document.getElementById("setup");
  const punchline = document.getElementById("punchline");

  setup.textContent = "Loading joke...";
  punchline.textContent = "";

  try {
    const res = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await res.json();

    setup.textContent = data.setup;
    punchline.textContent = data.punchline;
  } catch (error) {
    setup.textContent = "Could not load joke!";
  }
}