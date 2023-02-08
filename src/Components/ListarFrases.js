export default function ListarFrases(props) {
  var cond1 = false;
  var newTexto = [];
  props.texto.forEach((ele1) => {
    ele1.forEach((ele2) => newTexto.push([ele2.txt_ingles, ele2.txt_espanhol]));
  });

  if (cond1) {
    return (
      <>
        {props.texto.forEach((ele1) =>
          ele1.forEach((ele2) => console.log(ele2.txt_ingles))
        )}{" "}
      </>
    );
  } else {
    return (
      <>
        {newTexto.map((ele, ind) => (
          <div className="card bg-light">
            <div key={ind} className="card-body">
              <h5 className="card-title">{ele[0]}</h5>
              <p className="card-text">{ele[1]}</p>
            </div>
          </div>
        ))}
      </>
    );
  }
}
