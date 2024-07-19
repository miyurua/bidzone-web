import { database } from "@/db/database";
import { bids } from "@/db/schema";

export default function Home() {
  return (
    <main className="">
      <form
        action={async (formData: FormData) => {
          "use server";

          await database.insert(bids).values({});
        }}
      >
        <input type="text" placeholder="bid" />
        <button className="border border-black rounded-md">Place Bid</button>
      </form>
    </main>
  );
}
