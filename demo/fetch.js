fetch('https://karka.academy/api/action.php')
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    if (data) {
      console.log(data);
      // Further processing of the fetched data
    } else {
      console.log("Empty response received.");
    }
  })
  .catch((error) => console.log(error));
