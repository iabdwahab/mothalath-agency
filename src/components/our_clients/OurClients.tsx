import Container from "../Container";

function OurClients() {
  const clientsLogosList = [];

  for (let i = 1; i <= 8; i++) {
    clientsLogosList.push(`/mothalath-agency/imgs/our_clients/client-${i}.png`);
  }

  const clientsLogosElements = clientsLogosList.map((logo, index) => {
    return (
      <div>
        <img key={index} src={logo} alt="Image" />
      </div>
    );
  });

  console.log(clientsLogosElements);

  return (
    <section className="py-section">
      <Container className="flex flex-wrap items-center justify-center gap-8">
        {clientsLogosElements}
      </Container>
    </section>
  );
}
export default OurClients;
