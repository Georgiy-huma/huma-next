function BackgroundImage({ item }) {
  return <h1 style={{ color: "white" }}>{item.title}</h1>
}

function Content({ item }) {
  return <div>{item.content}</div>
}

function Cta({ item }) {
  return <a href={item.link}>{item.title}</a>
}

const components = {
  header: BackgroundImage,
  content: Content,
  cta: Cta
}

export default function Builder(props) {
  const Component = components[props.type]

  return <Component item={props.item} />
}
