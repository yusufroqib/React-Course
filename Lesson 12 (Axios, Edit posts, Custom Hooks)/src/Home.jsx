import Feed  from "./Feed"



const Home = ({ posts, fetchError, isLoading}) => {
  return (
    // <main className="Home">
    //   {posts.length ? (
    //     <Feed posts={posts} />
    //   ) : (
    //     <p style={{ marginTop: "2rem" }}>Nothing To Display</p>
    //   )}
    // </main>
    <main className="Home">
      {isLoading && <p className="statusMsg">Loading posts...</p> }
      { !isLoading && fetchError && <p className="statusMsg" style={{color: "red"}}>{fetchError}</p> }
      { !isLoading && !fetchError && (
        posts.length ? <Feed posts = {posts} /> : <p className="statusMsg"> No post to display</p> )}
    </main>
  )
}

export default Home