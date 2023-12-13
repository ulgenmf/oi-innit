
const url = "https://tts.verbatik.com/api/v1/tts";
const headers = {
  'Content-Type': 'application/ssml+xml',
  'Authorization': 'Bearer $2y\$10\$s1j7fhdjh80Q2X14CR9aJu / Zr4AiA2KlzV3hiyhni.JDS6GX4KV7C',
};
const data = `
<speak version='1.0'>
    <voice name='en-US-ChristopherNeural'>Hello, world!</voice>
</speak>
`;

fetch(url, {
  method: 'POST',
  headers: headers,
  body: data
})
  .then(response => {
    if (!response.ok) throw new Error(`Unexpected response ${response.statusText}`);
    return pipeline(response.body, fs.createWriteStream('output.mp3'));
  })