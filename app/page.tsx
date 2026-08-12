import { redirect } from "next/navigation";

export default function Home() {
  redirect("/work?work=ecosystem");
}
