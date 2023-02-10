import { Inter } from "@next/font/google";

import Container from "../components/container/Container";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <Container>my portfolio</Container>;
}
