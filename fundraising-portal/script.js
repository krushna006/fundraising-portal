// Dummy API call 
fetch("https://mocki.io/v1/7d951fd4-12ba-4a7f-8165-53b6c01da046")
  .then(response => response.json())
  .then(data => {
    document.getElementById('internName').innerText = data.name;
    document.getElementById('referralCode').innerText = data.referralCode;
    document.getElementById('donations').innerText = data.donations;
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
