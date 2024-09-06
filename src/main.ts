//import { defaultConfig } from "../config.js";
//import { crawl, write } from "./core.js";
//await crawl(defaultConfig);
//await write(defaultConfig);
// Import các thư viện cần thiết
import React from 'react';
import ReactDOM from 'react-dom';

// Định nghĩa một interface để quản lý kiểu dữ liệu
interface HomePageProps {
  title: string;
  description: string;
  buttonText: string;
}

// Tạo component HomePage bằng TypeScript
const HomePage: React.FC<HomePageProps> = ({ title, description, buttonText }) => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>{title}</h1>
      <p>{description}</p>
      <button>{buttonText}</button>
    </div>
  );
};

// Đưa component vào DOM
ReactDOM.render(
  <HomePage 
    title="Welcome to Our Website" 
    description="This is the homepage of our awesome website." 
    buttonText="Get Started" 
  />,
  document.getElementById('root')
);

