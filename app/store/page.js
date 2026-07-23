import { redirect } from "next/navigation";

export default function Store() {
  // Jab bhi koi /store open karega, Next.js use automatic Home page (/) par bhej dega
  redirect("/");
  
  return null; 
}