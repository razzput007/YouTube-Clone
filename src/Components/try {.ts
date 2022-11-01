try {
  const response = await fetch("https://youtube-v31.p.rapidapi.com/search?part=snippet&order=date&q=reactjs", {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '6791916b98msh4593cb9bb4027adp1fba92jsn2760623a0535',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  });

  if (response.ok) {
    const result = await response.json();
    console.log(result);
  }
} catch (err) {
  console.error(err);
}

export { };
