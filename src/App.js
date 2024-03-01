import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import AthleteDetails from "./AthleteDetails";
import AthleteSelector from "./athleteSelector";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const queryClient = new QueryClient({
    defaultOptions:{
        queries: {
            staleTime: Infinity,
            cacheTime: Infinity,
        }
    }
})
// App.defaultProps = {data}

function App(){
    return(
        <div>
        <Router>
            <QueryClientProvider client={queryClient}>
            <Routes>
                <Route path="/" element={<AthleteSelector />} />
                <Route path="/athletes/:id" element={<AthleteDetails />} />
            </Routes>
            </QueryClientProvider>
        </Router>
    </div>
    )
};

    // return(
    // <div>
    //     <AthleteSelector />
    //     {/* <Athlete /> */}
    // </div>
    // )


export default App;