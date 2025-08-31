import React from 'react';
import Tippy from '@tippyjs/react'; // optional tooltip
import 'tippy.js/dist/tippy.css';

const Skill = ({ image, name }) => {
  return (
    <Tippy content={name} placement="top" animation="scale">
      <div className="w-[70px] h-[70px] rounded-full bg-[#1f1f1f]/80 flex items-center justify-center p-2 shadow-md hover:shadow-glow hover:scale-110 transition-transform duration-300 cursor-pointer">
        <img
          src={image}
          alt={name}
          className="w-full h-full rounded-full object-cover"
        />
      </div>
    </Tippy>
  );
};

export default Skill;
