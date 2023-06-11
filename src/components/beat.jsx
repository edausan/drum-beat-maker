import React, { useEffect, useState } from "react";

const Beat = () => {
  const [beatsNum, setBeatsNum] = useState([]);
  const [with16, setwith16] = useState(false);

  useEffect(() => {
    handleNums();
  }, []);

  const handleNums = () => {
    const nums = ["1", "2", "3", "4", "5", "6", "7", "8"].map((num) => {
      return {
        num,
        e: "e",
        n: "n",
        a: "a",
      };
    });
    setBeatsNum(nums);
  };

  return (
    <section className="flex flex-row gap-4">
      {beatsNum.map((beat) => {
        return <Column beat={beat} with16={with16} />;
      })}
    </section>
  );
};

const Column = ({ beat, with16 }) => {
  console.log({ beat });
  return (
    <section className="flex flex-col gap-3 text-md">
      <div className="flex flex-row gap-3">
        <div>
          {beat.num}
          <Buttons />
        </div>
        {with16 && (
          <>
            {" "}
            <div>
              {beat.e}
              <Buttons />
            </div>
            <div>
              {beat.n} <Buttons />
            </div>
            <div>	
              {beat.a} <Buttons />
            </div>
          </>
        )}
      </div>
    </section>
  );
};

const Buttons = () => {
	const [active, setActive]  = useState({
		h: false,
		s: false,
		k: false
	})

  return (
    <div className="flex flex-col gap-2 mt-2">
      <button onClick={() => setActive(prev => ({...prev, h: !prev.h}))} className={`${active.h ? "bg-sky-500" : ""}`}>H</button>
      <button onClick={() => setActive(prev => ({...prev, s: !prev.s}))} className={`${active.s ? "bg-sky-500" : ""}`}>S</button>
      <button onClick={() => setActive(prev => ({...prev, k: !prev.k}))} className={`${active.k ? "bg-sky-500" : ""}`}>K</button>
    </div>
  );
};

export default Beat;
