async function fetchData() {
  console.log('Start fetching data');

  // Simulating an API call
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await response.json();

  console.log('Data:', data);
  console.log('Fetch operation complete');
}




const num = add(3, 4)

console.log(num)