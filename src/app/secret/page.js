import { auth, currentUser } from "@clerk/nextjs/server";

export default async function Secret() {
  const user = await currentUser();
  console.log(user);
  return <div className="text-4xl">This is secret content!</div>;
}
