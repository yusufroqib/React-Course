import { Link } from "react-router-dom";

const Editor = () => {
   return (
      <section>
         <h1>Editors Page</h1>
         <p>You must have been assigned an Editors role</p>

         <div className="flexGrow">
            <Link to="/"> Home</Link>
         </div>
      </section>
   );
};

export default Editor;
