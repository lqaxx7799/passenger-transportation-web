const loadAllCoaches = () => {
  return fetch('http://localhost:8080/coach').then(response => response.json());
}

const addNewCoach = (coach) => {
  return fetch('http://localhost:8080/coach', {
    method: 'POST',
    body: JSON.stringify(coach),
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then(response => response.json());
}

export default {
  loadAllCoaches,
  addNewCoach,
}