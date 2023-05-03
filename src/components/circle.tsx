import Image from "next/image";

import styles from "@/styles/circle.module.css";

const Circle = () => (
  <div className="absolute bottom-0">
    <div className={styles.circle}></div>
    <Image
      src="/eu.png"
      alt="Mateus Pinheiro"
      width={665}
      height={795}
      className="relative"
    />
  </div>
);

export default Circle;
