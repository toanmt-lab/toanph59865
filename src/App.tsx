import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import { Layout } from "antd";
import Navbar from "./components/Header";
const { Content } = Layout;
function App() {
  return (
    <>
      {/* Navbar luôn giữ */}
      <Navbar />
      <Layout>
        <Content style={{ padding: 20 }}>
          <div className="max-w-6xl mx-auto mt-10 px-4 text-center">
            <Routes>
              {/* Trang chủ */}
              <Route
                path="/"
                element={
                  <h1 className="text-4xl font-bold mb-4">
                    Chào mừng đến với WEB2091
                  </h1>
                }
              />
              {/* Register */}
            </Routes>
          </div>
        </Content>
      </Layout>
      <Toaster />
    </>
  );
}
export default App;