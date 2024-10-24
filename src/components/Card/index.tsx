import Image from "next/image";
import inputIcon from "../../assets/icon-down-left.svg";
import outputIcon from "../../assets/icon-up-right.svg";
import styles from "./card.module.scss";

type CardType = "input" | "output" | "total";

interface CardProps {
  type: CardType;
  value: string;
}

export function Card({ type, value }: CardProps) {
  const isInput = type === "input";
  const isOutput = type === "output";
  const isTotal = type === "total";

  const title = isInput ? "Entradas" : isOutput ? "Saídas" : "Saldo total";
  const icon = isInput ? inputIcon : outputIcon;

  return (
    <div className={`${styles.container} ${isTotal && styles.total}`}>
      <div className={styles.content}>
        <div className={styles.header}>
          <span className={`${styles.title}  ${isTotal && styles.total}`}>
            {title}
          </span>
          {!isTotal && <Image src={icon} alt="Icon" width={19} height={19} />}
        </div>
        <span className={`${styles.value} ${isTotal && styles.valueTotal}`}>
          R$ {value}
        </span>
      </div>
    </div>
  );
}
