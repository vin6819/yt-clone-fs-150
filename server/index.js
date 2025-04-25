const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 5001
app.use(cors())
app.use(express.json())
require('dotenv').config()

const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/search',
  params: {
    relatedToVideoId: '7ghhRHRP6t4',
    part: 'id,snippet',
    type: 'video',
    maxResults: '50'
  },
  headers: {
    'x-rapidapi-key': process.env.RAPID_API_KEY,
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  }
};

async function fetchData() {
	try {
		const response = await axios.request(options);
		return response.data.items
	} catch (error) {
		console.error(error);
	}
}


app.get('/get-videos', async (req, res) => {
    const response = await fetchData();
    console.log(response)
    res.send(response)
})

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`)
})