import {
  Navigation,
  PaymentArea,
  ConditionArea,
  InformationModal,
} from "../Exporter";

const BigComponent = () => {
  return (
    <div className="container">
      <nav>
        <Navigation />
      </nav>
      <main>
        <PaymentArea />
      </main>
      <footer>
        <ConditionArea />
        <InformationModal />
      </footer>
    </div>
  );
};

export default BigComponent;
