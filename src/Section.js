import React, { useEffect, useState } from 'react';
import { useSection } from './SectionContext';

const Section = ({ title, content }) => {
  const { sectionNumber, incrementSectionNumber } = useSection();
  const [currentNumber, setCurrentNumber] = useState(sectionNumber);

  useEffect(() => {
    setCurrentNumber(sectionNumber);
    incrementSectionNumber();
  }, []);

  return (
    <div>
      <h2>{currentNumber}. {title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Section;
