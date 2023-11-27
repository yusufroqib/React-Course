import UserHeader from "../components/UserHeader";
import UserPosts from "../components/UserPosts";

const UserPage = () => {
   return (
      <>
         <UserHeader />
         <UserPosts
            likes={200}
            replies={50}
            username={"Kolisco"}
            postTitle={"Here we are guys. This is what I am doing..."}
         />
         <UserPosts
            likes={10}
            replies={20}
            username={"Rocco"}
            postTitle={"Hello World! Here we have it"}
         />
         <UserPosts
            likes={3}
            replies={1}
            username={"Muhammed"}
            postTitle={"This is awesome. Isn't it amazing?"}
         />
      </>
   );
};

export default UserPage;
