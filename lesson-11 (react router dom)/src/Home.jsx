import Feed from './Feed'

const Home = ({ posts, isLoading, fetchError }) => {
  return (
    <main className='Home'>
        {isLoading && <p>Loading Pots...</p>}
        {fetchError && <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>}
        {!fetchError && !isLoading &&
        (posts.length ? (
          <Feed posts={ posts }/>
        ) : (
          <p style={{marginTop: "2rem"}}>Nothing to Display</p>
        ) )}
    </main>
  )
}

export default Home