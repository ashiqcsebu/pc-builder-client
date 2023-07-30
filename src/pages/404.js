/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useRouter } from "next/router";
import Error from "../../public/error.jpg"

const ErrorPage = () => {
  const router = useRouter();
  setTimeout(() => {
    router.push("/");
  }, 5000);

  return (
    <div>
      <img
        className="min-h-screen min-w-screen"
        src={Error}
        alt=""
        width={1380}
        height={800}
     
        
      />
    </div>
  );
};

export default ErrorPage;
