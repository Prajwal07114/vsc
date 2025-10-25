import { useAuth } from "@clerk/clerk-react";

export const getStreamToken = async () => {
  try {
    const { getToken } = useAuth(); // ✅ getToken comes from useAuth hook
    const token = await getToken();

    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/chat/token`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
    });

    if (!res.ok) throw new Error("Failed to fetch Stream token");

    return res.json(); // { token: "..." }
  } catch (err) {
    console.error("Error fetching Stream token:", err);
    return { token: null };
  }
};
