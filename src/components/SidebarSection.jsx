function SidebarSection ({title, extensible}) {

  if (extensible !== 'false'){
    console.log("It's extensible")
  }

  return (
    <section className="sidebar-section" extensible={extensible}>
      <h2>{title}</h2>
    </section>
  )
}

export default SidebarSection;