const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        'X-RapidAPI-Host': process.env.REACT_APP_API_HOST
    }
};

const Movies = {
  // returns top 10 list of movies ordered by `release_date,desc`
  newReleases: async () => {
    return await fetch(`https://${process.env.REACT_APP_API_HOST}/title/v2/find?title=a&limit=10&sortArg=release_date%2Cdesc`, options)
    .then(response => response.json())
    .then(response => {
        return response.results ?? [];
    })
    .catch(error => {
        console.log(error);
        return [];
    })
  },

  // returns top 10 list of movies ordered by `user_rating,desc`
  topPicks: async (id) => {
    return await fetch(`https://${process.env.REACT_APP_API_HOST}/title/v2/find?title=a&limit=20&sortArg=user_rating%2Cdesc`, options)
    .then(response => response.json())
    .then(response => {
        return response.results ?? [];
    })
    .catch(error => {
        console.log(error);
        return [];
    })
  },

  search: async (q='', p=1) => {
    return await fetch(`https://${process.env.REACT_APP_API_HOST}/title/v2/find?title=${q}&limit=20&sortArg=release_date%2Cdesc`, options)
    .then(response => response.json())
    .then(response => {
        return response.results ?? [];
    })
    .catch(error => {
        console.log(error);
        return [];
    })
  }
};

export default Movies;