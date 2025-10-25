import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ClerkProvider } from "@clerk/clerk-react";
import {
  Routes,
  Route,
  BrowserRouter,
  useLocation,
  useNavigationType,
  createRoutesFromChildren,
  matchRoutes,
} from "react-router";
import { Toaster } from "react-hot-toast";


import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "./provider/AuthProvider.jsx";

const queryClient = new QueryClient();

// Import your Publishable Key
VITE_CLERK_PUBLISHABLE_KEY=pk_test_Z3VpZGVkLWN1Yi04NS5jbGVyay5hY2NvdW50cy5kZXYk


if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <App />
          </AuthProvider>
          <Toaster position="top-right" />
        </QueryClientProvider>
      </BrowserRouter>
    </ClerkProvider>
  </StrictMode>
);