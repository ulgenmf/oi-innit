self.onmessage = async (event) => {
  const { token, ttsApiUrl, headers } = event.data;

  const response = await fetch(ttsApiUrl, {
    method: 'POST',
    headers: headers,
    body: `<speak version='1.0'><voice name='en-US-ChristopherNeural'>${token}</voice></speak>`
  });

  const audioBlob = await response.blob();
  const audioUrl = URL.createObjectURL(audioBlob);

  self.postMessage({ token, audioUrl });
};