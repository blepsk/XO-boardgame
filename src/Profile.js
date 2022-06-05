import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Button } from './App-styled'

const Profile = () => {
  const [data, setData] = useState([])
  const access_token = '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'

  useEffect(() => {
    axios
      .get('https://api.github.com/user', {
        headers: {
          Authorization: `token ${access_token}`,
        },
      })
      .then(function (response) {
        setData(response.data)
      })
      .catch((error) => console.log(error))
  }, [])
  console.log(data)

  return (
    <div className="card">
      <img className="avatar" src={data.avatar_url} alt="avatar" />
      <h1 className="header">{data.login}</h1>
      <h3>Name : {data.name}</h3>
      <h3>{data.bio}</h3>
      <h3>{data.location}</h3>
      <h3>Email : {data.email}</h3>
      <h3>Github Profile : {data.html_url}</h3>
      <Button primary>
        <Link to="/Game">XO board game</Link>
      </Button>
    </div>
  )
}

export default Profile
