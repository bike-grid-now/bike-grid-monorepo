import React from "react";
import Container from "@/components/Container";
import PedalBike from "@material-symbols/svg-400/rounded/pedal_bike.svg";

export interface NavbarProps {
  title: string;
}

export default function Navbar(props: NavbarProps): JSX.Element {
  return (
    <nav className="sticky top-0 z-10 shadow-md bg-zinc-900 text-white py-5 text-lg font-semibold">
      <Container>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center justify-center">
            <PedalBike
              className="w-8 h-8 mr-2 fill-current"
              viewBox="0 0 48 48"
            />
            {props.title}
          </div>
        </div>
      </Container>
    </nav>
  );
}
