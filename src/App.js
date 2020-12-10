import React from "react";
import Header from '@/components/header/index';
import Footer from '@/components/footer/index';
import styles from '@/css/index.scss'


function App() {
  return (
    <div className="box">
      <Header/>
      <div className={styles.title}>一个app</div>
      <Footer/>
    </div>
  );
}

export default App;
