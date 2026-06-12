import { redirect } from "next/navigation";

export default function FirstTimeVisitorsRedirect() {
  redirect("/first-time-buyers");
}
