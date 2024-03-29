import { type NextPage } from "next";
import Head from "next/head";

import { api } from "../utils/api";
import TitleSection from "../components/landing/TitleSection";
import SurveyCreationCard from "../components/landing/PollCreationCard";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-landing-pattern bg-cover bg-fixed bg-center bg-no-repeat ">
        <div className="container flex flex-col items-center justify-center gap-4">
          <TitleSection />
          <SurveyCreationCard />
        </div>
      </main>
    </>
  );
};

export default Home;

// const AuthShowcase: React.FC = () => {
//   const { data: sessionData } = useSession();

//   const { data: secretMessage } = api.example.getSecretMessage.useQuery(
//     undefined, // no input
//     { enabled: sessionData?.user !== undefined }
//   );

//   return (
//     <div className="flex flex-col items-center justify-center gap-4">
//       <p className="text-center text-2xl text-white">
//         {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
//         {secretMessage && <span> - {secretMessage}</span>}
//       </p>
//       <Button color={"green"}>Sign In / Create Account</Button>
//     </div>
//   );
// };
