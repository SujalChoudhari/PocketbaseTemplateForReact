import { Route, Routes } from 'react-router-dom';
import { RequireAuth } from "./components/RequireAuth";
import { PocketProvider } from "./contexts/PocketContext";

import { SignUp } from './pages/Signup';
import { SignIn } from './pages/SignIn';

const App = () => {
  return (
    <PocketProvider>
      <Routes>
        {/* Those who require No Signup */}
        
        <Route index element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route element={<RequireAuth />}>
          {/* Those who require Signup */}
        </Route>
      </Routes>
    </PocketProvider>
  );
};

export default App;