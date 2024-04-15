import Image from "next/image";
const Ref = ({ image, title }) => {
  return (
    <div className="refContainer">
      <Image src={`/ref/${image}.png`} width="1200" height="850" alt="" />
      <div className="subtitle">{title}</div>
    </div>
  );
};

export default Ref;
