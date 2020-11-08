const loadAllCoaches = () => {
  return fetch('http://localhost:8080/coach').then(response => response.json());
}

export default {
  loadAllCoaches,
}