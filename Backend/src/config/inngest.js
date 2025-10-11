import { Inngest } from "inngest";
import { connectDB } from "./db.js";
import { User } from "../models/User.model.js";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "VSC" });

// ✅ FIXED — removed wrong parentheses, corrected structure
const syncUser = inngest.createFunction(
  { id: "sync-user", name: "Sync Clerk User" },
  { event: "clerk/user.created" },
  async ({ event }) => {
    await connectDB();

    const { id, email_addresses, first_name, last_name, image_url } = event.data;

    const newUser = {
      clerkId: id,
      email: email_addresses[0]?.email_address,
      name: `${first_name || ""} ${last_name || ""}`,
      image: image_url,
    };

    await User.create(newUser);
  }
);

const deleteUserFromDB = inngest.createFunction(
  { id: "delete-user-from-db", name: "Delete Clerk User" },
  { event: "clerk/user.deleted" },
  async ({ event }) => {
    await connectDB();
    const { id } = event.data;
    await User.deleteOne({ clerkId: id });
  }
);

export const functions = [syncUser, deleteUserFromDB];
