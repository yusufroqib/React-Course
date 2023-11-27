import UserHeader from "../components/UserHeader";
import UserPosts from "../components/UserPosts";

const UserPage = () => {
   return (
      <>
         <UserHeader />
         <UserPosts
            likes={200}
            replies={50}
            postImg={"/post1.png"}
            postTitle={"Here we are guys. This is what I am doing..."}
         />
         <UserPosts
            likes={10}
            replies={20}
            postImg={""}
            postTitle={"Hello World! Here we have it"}
         />
         <UserPosts
            likes={3}
            replies={1}
            postImg={"/post3.png"}
            postTitle={"This is awesome. Isn't it amazing?"}
         />
      </>
   );
};

export default UserPage;
