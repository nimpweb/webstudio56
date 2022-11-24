import Page from "../components/Page";

const Projects =() => {
  return (
    <Page 
      title="Наши личные проекты" 
      pageTitle="Наши личные проекты"
      pageDescription="Те, кто доверился нашей работе"
      breadcrumbs={[
        { title: 'Главная', link: '/'},
        { title: 'Наши личные проекты', link: ''},
      ]}
    >
      <div className="pageWidthContainer">
        <div style={{width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
          <p style={{color: "rgba(100, 100, 100, .5)", fontSize: ".8rem"}}>Наши проекты...</p>
        </div>
      </div>
    </Page>
  )
};

export default Projects;