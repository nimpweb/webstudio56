import Page from "../components/Page";

const Clients =() => {
  return (
    <Page 
      title="Наши клиенты" 
      pageTitle="Наши клиенты"
      pageDescription="Те, кто доверился нашей работе"
      breadcrumbs={[
        { title: 'Главная', link: '/'},
        { title: 'Наши клиенты', link: ''},
      ]}
    >
      <div className="pageWidthContainer">
        <div style={{width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
          <p style={{color: "rgba(100, 100, 100, .5)", fontSize: ".8rem"}}>Список компаний, который нам доверились...</p>
        </div>
      </div>
    </Page>
  )
};

export default Clients;