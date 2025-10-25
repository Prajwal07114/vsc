import { useAuth } from "@clerk/clerk-react";
import { useQuery } from "@tanstack/react-query";

export const useStreamToken = () => {
  const { getToken } = useAuth();

  return useQuery({
    queryKey: ["streamToken"],
    queryFn: async () => {
      const clerkToken = await getToken(); // ✅ correctly used inside hook

      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/chat/token`, {
        headers: { Authorization: `Bearer ${clerkToken}` },
        credentials: "include",
      });

      if (!res.ok) throw new Error("Failed to fetch Stream token");
      return res.json(); // { token: "..." }
    },
    enabled: !!getToken,
  });
};
