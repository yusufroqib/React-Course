import { Link } from 'react-router-dom'
import Users from './Users'

const Admin = () => {
  return (
    <section>
        <h1>Admin Page</h1>
        <br />
        {/* <p>You must have been assigned an Admin Role</p> */}
        <Users />

        <div className="flexGrow">
            <Link to='/'>Home</Link>
        </div>
    </section>
  )
}

export default Admin