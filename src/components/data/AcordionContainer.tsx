import Acordion from '../molecules/Acordion';

const AccordionContainer = () => {
  return (
    <Acordion
      featuredText="Frequently Asked Questions"
      featuredTextSize="xxl"
      description="Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us."
      buttonText="More info"
      onButtonClick={() => console.log('Botón clickeado')}
    />
  );
};

export default AccordionContainer;