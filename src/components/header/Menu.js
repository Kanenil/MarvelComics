import React from "react";
import NavigationLink from "../../elements/Links/NavigationLink";

export default function Menu() {
  return (
    <>
      <NavigationLink to="/" name="Home" />
      <NavigationLink to="/contact" name="Contact" />
      <NavigationLink to="/testimonials" name="Testimonials" />
      <NavigationLink to="/about" name="About" />
      <NavigationLink to="/comics" name="Comics" />
    </>
  );
}
