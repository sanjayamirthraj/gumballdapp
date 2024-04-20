import { Terminal } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./alert";
import { useAccount } from "wagmi";
import { useBalance } from "wagmi";

export default function BalanceAlert() {
  const { address } = useAccount();
  const { data } = useBalance({
    address,
  });

  return (
    <div className="">
      <div className="">
        <Alert>
          <Terminal className="h-4 w-4" />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            Your current balance is: {data?.formatted} {data?.symbol}
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
}
