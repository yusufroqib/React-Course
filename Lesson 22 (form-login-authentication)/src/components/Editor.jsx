import React from "react";

const Editor = () => {
   return (
      <section>
         <h1>Editor's Page</h1>
         <p>You must have been assigned an Editor's role</p>

         <div className="flexGrow">
            <Link to="/"> Home</Link>
         </div>
      </section>
   );
};

export default Editor;
