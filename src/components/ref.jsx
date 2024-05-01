import Image from "next/image";
const Ref = ({ image, title }) => {
  return (
    <div className="w-[24%] flex flex-col mb-2.5">
      <Image src={`/ref/${image}.png`} width="1200" height="850" alt="" />
      <div className="bg-nmyellow text-white text-[0.7vw] py-[8px] px-[2px] text-center">
        {title}
      </div>
    </div>
  );
};

export default Ref;
