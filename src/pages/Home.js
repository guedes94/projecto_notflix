import categories from '../api'
import Banner from '../components/Banner'
import Row from '../components/Row'

function Home() {
  console.log(categories)
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
