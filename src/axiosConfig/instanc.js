import axios from 'axios'

const axiosInstance=axios.create({
    // https://api.rawg.io/api/games?key=37838b368bf34ab0bb5403e02b716a84
    // localhost:5555/Games
    // https://localhost:5555/Games

    // baseURL:'https://api.rawg.io/api/',

    baseURL:'http://localhost:5555',
  
    headers:{
        // 'authorization':"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjI1N2NjM2E0NjEyYzlmNGE4NjEyMjA0ZDZhNGIwYyIsInN1YiI6IjY0MGU2NTcxYjQyMjQyMDA4YTJkYTAzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BgiR1EugUT2ZQnyrgk-_tkCtCY5cNMOPjRY31qhhhPI",
        'authorization':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDBjYjcwZWMxNTIwNWE5NTk0OGIzMjciLCJkaXNwbGF5TmFtZSI6InNhZmEiLCJpYXQiOjE2ODExMzI4ODJ9.Xb5CHrdvSQg5DiFw99Pvt9LWHHgVaGGwNJHC9LqQ5nY"
    },
    params:{
        // 'key':'37838b368bf34ab0bb5403e02b716a84',
    }

})

export default axiosInstance