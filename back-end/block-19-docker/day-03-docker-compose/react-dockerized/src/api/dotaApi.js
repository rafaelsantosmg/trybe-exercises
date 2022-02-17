function fetApiDota() {
  return fetch("https://api.opendota.com/api/heroStats")
    .then(response => response.json())
    .catch(err => {
      console.error(err);
    });
}

export { fetApiDota };
