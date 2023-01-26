import Head from "next/head";
import TitleSection from "./TitleSection";
import SurveyCreationCard from "./PollCreationCard";

export function Landing() {
    return ( 
        <>
        <Head>
          <title>Poller</title>
          <meta name="description" content="Create polls for free" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="flex min-h-screen flex-col items-center justify-center bg-landing-pattern bg-cover bg-fixed bg-center bg-no-repeat pt-5">
          <div className="container flex flex-col items-center justify-center gap-4">
            <TitleSection />
            <SurveyCreationCard />
          </div>
        </main>
      </>
    )
}