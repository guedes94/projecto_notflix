import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import categories from '../api'
import Banner from '../components/Banner'
import Row from '../components/Row'
import { UserContext } from '../contexts/UserContext'

function Home() {
  console.log(categories)
  //Utilizamos o hook useContext para podermos usar a informação do contexto
  const context = useContext(UserContext)
  //Importamos o hook do useNavigate para podermos usar a navegação sem ser necessarios links
  const navigate = useNavigate()

  if(!context.name || context.name === ''){
    navigate("/login")
  }

  return (
    <>
      <Banner />
      {categories.map((category) => {
        return (
          <Row
            key={category.name}
            title={category.title}
            path={category.path}
            isLarge={category.isLarge}
          />
        )
      })}
    </>
  )
}

export default Home
