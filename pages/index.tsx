import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import NavBar from "../components/ui/nav-bar";
import GumballCard from "../components/ui/gumball-card";
import { useAccount, useWriteContract } from "wagmi";
import NotConnectedCard from "../components/ui/not-connected";
import BalanceAlert from "../components/ui/balance-alert";
import TransactionCard from "../components/ui/transaction-count-card";
import Image from "next/image";

const Home: NextPage = () => {
  const { address, isConnected } = useAccount();

  return (
    <div
      className=" m-15 w-full
    h-full
    bg-gradient-to-r
    from-blue-500
    to-green-500
    p-10
    background-animatez-50 inset-0 "
    >
      <div className="p-2 m-2">
        <NavBar />
      </div>
      {isConnected ? (
        <div className="m-2 grid grid-cols-2 grid-rows- gap-2">
          <div className="grid grid-cols-1 grid-rows-4 gap-1">
            <GumballCard />
            <BalanceAlert />
          </div>
          <div className="col-auto">
            <TransactionCard />
          </div>
        </div>
      ) : (
        <div
          className=" m-15 w-full
        h-screen
        bg-gradient-to-r
        from-blue-500
        to-green-500
        p-10
        background-animatez-50 inset-0 "
        >
          <NotConnectedCard />
        </div>
      )}
    </div>
  );
};

export default Home;
