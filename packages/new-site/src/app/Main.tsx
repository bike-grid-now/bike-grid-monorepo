import GridBackground from "@/components/GridBackground";
import Container from "@/components/Container";
import CallToAction from "@/components/CallToAction";
import { getCallsToAction } from "@/lib/sanity/callsToAction";
import { use } from "react";

function Main() {
  const callsToAction = use(getCallsToAction());

  return (
    <GridBackground className="py-16">
      <Container>
        <div>
          {callsToAction.map((action, index) => (
            <CallToAction
              href={action.link}
              text={action.text}
              key={index}
              index={index}
            />
          ))}
        </div>
      </Container>
    </GridBackground>
  );
}

export default Main;
