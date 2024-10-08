import "./_Certifications.css";
import Image from "next/image";

const Certification: React.FC = () => {
  return (
    <>
      <div className="certification-background">
        <Image
          src="/assets/aws-associate.png"
          width={200}
          height={200}
          alt="mck-logo"
        />
        <Image
          src="/assets/az-900.png"
          width={200}
          height={200}
          alt="mck-logo"
        />
      </div>
    </>
  );
};

export default Certification;
