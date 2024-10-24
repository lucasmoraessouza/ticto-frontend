"use client"

import styles from "./header.module.scss";
import Logo from "../../assets/logo.svg";
import Image from "next/image";
import { useState } from "react";
import { TransactionModal } from "../TransactionModal";
export function Header() {
  const [openModal, setOpenModal] = useState<boolean>(false);

  function handleClickModal() {
    setOpenModal(!openModal);
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Image
          src={Logo}
          width={186}
          height={35}
          alt="logo"
          className={styles.logo}
        />
        <button className={styles.buttonTransaction} onClick={handleClickModal}>
          <span className={styles.buttonText}>Nova transação</span>
        </button>
      </div>
      <TransactionModal isOpen={openModal} onClose={handleClickModal} />
    </div>
  );
}
