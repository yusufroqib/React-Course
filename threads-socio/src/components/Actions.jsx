import { Flex } from "@chakra-ui/react";
import React from "react";

const Actions = ({ liked, setLiked }) => {
   return (
      <>
         <Flex cursor={"pointer"} gap={3} my={2} onClick={(e) => e.preventDefault()}>
            <svg
               aria-label="Unlike"
               class="x1lliihq x1n2onr6 x18l41xo"
               fill={liked ? "rgb(237, 73, 86)" : "transparent"}
               color={liked ? "rgb(237, 73, 86)" : ""}
               height="20"
               role="img"
               viewBox="0 0 20 20"
               width="20"
               onClick={() => setLiked(!liked)}
            >
               <title>Unlike</title>
               <path
                  d="M1.2 7.328c0 3.66 3.118 7.269 7.99 10.347.27.163.592.325.81.325.226 0 .548-.162.81-.325 4.87-3.078 7.99-6.687 7.99-10.347C18.8 4.189 16.595 2 13.737 2c-1.655 0-2.953.753-3.738 1.881C9.233 2.761 7.926 2 6.262 2c-2.85 0-5.063 2.19-5.063 5.328Z"
                  stroke="currentColor"
                  stroke-width="1.75"
               ></path>
            </svg>

            <svg
               aria-label="Reply"
               class="x1lliihq x1n2onr6 x1yxark7"
               fill="currentColor"
               height="20"
               role="img"
               viewBox="0 0 24 24"
               width="20"
            >
               <title>Reply</title>
               <path
                  d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
                  fill="none"
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-width="2"
               ></path>
            </svg>

            <svg
               aria-label="Repost"
               class="x1lliihq x1n2onr6 x1yxark7"
               fill="currentColor"
               height="20"
               role="img"
               viewBox="0 0 24 24"
               width="20"
            >
               <title>Repost</title>
               <path d="M19.998 9.497a1 1 0 0 0-1 1v4.228a3.274 3.274 0 0 1-3.27 3.27h-5.313l1.791-1.787a1 1 0 0 0-1.412-1.416L7.29 18.287a1.004 1.004 0 0 0-.294.707v.001c0 .023.012.042.013.065a.923.923 0 0 0 .281.643l3.502 3.504a1 1 0 0 0 1.414-1.414l-1.797-1.798h5.318a5.276 5.276 0 0 0 5.27-5.27v-4.228a1 1 0 0 0-1-1Zm-6.41-3.496-1.795 1.795a1 1 0 1 0 1.414 1.414l3.5-3.5a1.003 1.003 0 0 0 0-1.417l-3.5-3.5a1 1 0 0 0-1.414 1.414l1.794 1.794H8.27A5.277 5.277 0 0 0 3 9.271V13.5a1 1 0 0 0 2 0V9.271a3.275 3.275 0 0 1 3.271-3.27Z"></path>
            </svg>

            <svg
               aria-label="Share"
               class="x1lliihq x1n2onr6 x1yxark7"
               fill="currentColor"
               height="20"
               role="img"
               viewBox="0 0 24 24"
               width="20"
            >
               <title>Share</title>
               <line
                  fill="none"
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-width="2"
                  x1="22"
                  x2="9.218"
                  y1="3"
                  y2="10.083"
               ></line>
               <polygon
                  fill="none"
                  points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-width="2"
               ></polygon>
            </svg>
         </Flex>
      </>
   );
};

export default Actions;
