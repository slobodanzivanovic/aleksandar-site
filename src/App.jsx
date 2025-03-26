import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./general/Router.jsx";
import { Loading } from "./components/Loading.jsx";
import { Header } from "./components/Header.jsx";

export const PageWithHeader = ({ children }) => (
  <div className="flex h-full flex-col">{children}</div>
);

export const App = () => (
  <BrowserRouter>
    <div className="flex flex-col h-full">
      <Suspense
        fallback={
          <PageWithHeader>
            <Loading name="suspense" />
          </PageWithHeader>
        }
      >
        <div className="h-full bg-[#222222]">
          <Header />
          <div className="p-4 lg:p-24">
            <Router />
          </div>
        </div>
      </Suspense>
    </div>
  </BrowserRouter>
);
