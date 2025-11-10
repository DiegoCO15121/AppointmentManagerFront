import "./index.css";
import AppRouter from "./router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { PrimeReactProvider } from "primereact/api";
import { ToastProvider } from "./components/general/toastContext";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <PrimeReactProvider>
        <ToastProvider>
          <AppRouter />
        </ToastProvider>
      </PrimeReactProvider>
    </QueryClientProvider>
  </StrictMode>
);
