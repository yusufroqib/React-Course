/*
 *  Write a function to check whether you have been successfully invited to the program.
 *  Given an array of users, the function should satisfies the conditions:
 * Return `true` if:
 *  - The `username` is identical to your username, yusufroqib
 *  - The `invitedBy` field is identical to another user's `inviteCode`
 * Else return `false`.
 */

export type User = {
    name: string;
    username: string;
    inviteCode: string;
    invitedBy?: string;
  };
  
  const MYSELF = "yusufroqib";
  
  export function amIInvited(users: User[]): boolean {
    
    const myDetails = users.find(({ username }) => username === MYSELF);

    const notMyDetails = users.filter((user)=> {
      return user.username !== MYSELF
    })
  
    const result = myDetails ? notMyDetails.some(({ inviteCode }) => inviteCode === myDetails.invitedBy) : false;

    return result
  }