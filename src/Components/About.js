import React from 'react';
import { Figure } from 'react-bootstrap';
import NavigationMenu from './NavigationMenu';

{/* make use of the React Bootstrap figures
component to display:
store's logo (image),
a short description of store,
two fictional images of store
and contact details. */}

const About = () => {
  return (
    <div>
      {/* navigation menu component that appears on every page of your
application. */}
      <h1>About Us</h1>
      <Figure>
        <Figure.Image
          width={171}
          height={180}
          alt="Store Logo"
          src="https://via.placeholder.com/200"
        />
        <Figure.Caption>
          <h3>Our Store</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
            lorem nec risus luctus, sit amet lacinia neque mattis. Integer
            tincidunt, magna et porttitor fringilla, velit metus vehicula mauris, ut
            consequat sapien risus nec nisi. Suspendisse ac odio in ex rutrum
            efficitur.
          </p>
        </Figure.Caption>
      </Figure>

      <Figure>
        <Figure.Image
          width={400}
          height={300}
          alt="Fictional Image 1"
          src="https://via.placeholder.com/400x300"
        />
        <Figure.Image
          width={400}
          height={300}
          alt="Fictional Image 2"
          src="https://via.placeholder.com/400x300"
        />
      </Figure>

      <h2>Contact Us</h2>
      <p>Email: example@example.com</p>
      <p>Phone: 123-456-7890</p>
    </div>
  );
};

export default About;

