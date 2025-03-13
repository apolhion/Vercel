import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Checkout from "@/pages/checkout";
import Instagram from "@/pages/instagram";
import { PurchaseNotification } from "@/components/shared/purchase-notification";
import { CountdownProvider } from "./contexts/CountdownContext";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/instagram" component={Instagram} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CountdownProvider>
        <Router />
        <PurchaseNotification />
        <Toaster />
      </CountdownProvider>
    </QueryClientProvider>
  );
}

export default App;