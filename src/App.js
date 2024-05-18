import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Section1 from './Section1';
import Section2 from './Section2';

const App = () => {
  return (
      <div>
        <Header />
        <main>
          <h1>Hello, World!</h1>
          <p>This is a web site for my first project.</p>
          <Section1 />
          <Section2 />
        </main>
        <Footer />
      </div>
  );
};

export default App;
