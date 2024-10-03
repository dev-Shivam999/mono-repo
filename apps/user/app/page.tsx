import Image from "next/image";
import { Button } from "@repo/ui/button";
import {PrismaClient} from "@repo/db/client"

const client = new PrismaClient()

export default function Home() {
  return (
    <div>
      hi
      <Button appName="lol" children="lol" className="text-yellow-500"/>
    </div>
  );
}
