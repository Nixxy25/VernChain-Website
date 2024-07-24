

export const PrimaryButtons = ({children}) => {
  return (
    <div>
        <button className="rounded-3xl text-lg border border-[#b3de43] tracking-widest text-[#b3de43] px-4 py-2">
          {children}
        </button>
    </div>
  );
};

export const SecondaryButtons = ({children}) => {
  return (
    <div>
        <button className="rounded-3xl text-lg font-[400] border border-[#b3de43] bg-[#c9fa49] tracking-widest text-[#000000] px-4 py-2">
          {children}
        </button>
    </div>
  );
};


export const BlackButtons = ({children}) => {
  return (
    <div>
        <button className="rounded-3xl cursor-pointer text-lg text-[#b3de43] bg-[#2A2A2A] tracking-widest text-[#b3de43] px-4 py-2">
          {children}
        </button>
    </div>
  );
};




