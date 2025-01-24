import React, { useEffect, useState, useRef } from "react";

const Typewriter = ({ text, speed }) => {
  const [displayText, setDisplayText] = useState("");
  const hasTyped = useRef(false);

  useEffect(() => {
    if (hasTyped.current) return;

    hasTyped.current = true;

    let index = 0;

    const type = () => {
      if (index < text.length) {
        setDisplayText((prev) => prev + text.charAt(index));
        index++;
        setTimeout(type, speed);
      }
    };

    type();

    return () => clearTimeout(type);
  }, [text, speed]);

  return (
    <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
      {displayText}
    </h2>
  );
};

export default Typewriter;
