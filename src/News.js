const News = (props)=>{
  return (
    <div>
      <h1>{props.name}</h1>
      <div className='box'>
        <pre>{props.extra}</pre>
        <p>{props.text}</p>
      </div>
    </div>
  )
}
export  default News;