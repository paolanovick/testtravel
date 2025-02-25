import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
function App() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("haciendo el fetch");
        fetch("https://travel-tool.net/admin/xml/allseasons.xml", {
            method: "GET",
            headers: {
                "Origin": "https://testtravel-smoky.vercel.app",
                "X-Requested-With": "XMLHttpRequest"
            }
        })
            .then(response => response.text())
            .then(data => console.log(data))
            .catch(error => console.error(error));
    }, []); // Este useEffect solo se ejecuta una vez al montar el componente
    return (_jsxs(_Fragment, { children: [_jsxs("div", { children: [_jsx("a", { rel: "noopener", href: "https://vitejs.dev", target: "_blank", children: _jsx("img", { src: viteLogo, className: "logo", alt: "Vite logo" }) }), _jsx("a", { rel: "noopener", href: "https://react.dev", target: "_blank", children: _jsx("img", { src: reactLogo, className: "logo react", alt: "React logo" }) })] }), _jsx("h1", { children: "Sitio de Paola" }), _jsxs("div", { className: "card", children: [_jsxs("button", { onClick: () => setCount((count) => count + 1), children: ["count is ", count] }), _jsxs("p", { children: ["Edit ", _jsx("code", { children: "src/App.tsx" }), " and save to test HMR"] })] }), _jsx("p", { className: "read-the-docs", children: "Click on the Vite and React logos to learn more" })] }));
}
export default App;
