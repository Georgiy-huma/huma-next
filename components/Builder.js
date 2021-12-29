function BackgroundImage({ item }) {
  return <h1 style={{ color: "white" }}>{item.title}</h1>
}

function Content({ item }) {
  console.log('Content', item)
  return <div>{item.Content}</div>
}

function Cta({ item }) {
  return <a href={item.link}>{item.title}</a>
}

const components = {
  header: BackgroundImage,
  content: Content,
  cta: Cta
}

export default function Builder(props) { // type and item
  // console.log('Builder props.item', props.item)
  const Component = components[props.type]
  // console.log('[builder.js]', Component)

  return <Component key={props.id} item={props.item} />
}
