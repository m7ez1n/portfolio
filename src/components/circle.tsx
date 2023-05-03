import Image from "next/image";

import styles from "@/styles/circle.module.css";

const Circle = () => (
  <div className="md:absolute md:bottom-0">
    <div className={styles.circle}></div>
    <Image
      src="/eu.png"
      alt="Mateus Pinheiro"
      width={665}
      height={795}
      className="relative md:right-0 md:bottom-0 bottom-5 right-5"
    />
  </div>
);

export default Circle;
