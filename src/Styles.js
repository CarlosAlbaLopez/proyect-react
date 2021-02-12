import * as React from "react";
import "./box-styles.css";

// Usa className para el tamaño y style (backgroundColor) para el color
// A cada elemento se le debe aplicar la clase "box" también

// Añade una prop className a cada uno y aplica la clase correcta
// Las clases disponibles son: box, box--large, box--medium, box--small

// Añade también una prop style a cada uno de forma que su background color
// encaje con lo que dice el texto. Añade también `fontStyle: 'italic'`

// const smallBox = (
//   <div
//     className="box--small box"
//     style={{ backgroundColor: "lightblue", fontStyle: "italic" }}
//   >
//     small lightblue box
//   </div>
// );
// const mediumBox = (
//   <div
//     className="box--medium box"
//     style={{ backgroundColor: "pink", fontStyle: "italic" }}
//   >
//     medium pink box
//   </div>
// );
// const largeBox = (
//   <div
//     className="box--large box"
//     style={{ backgroundColor: "orange", fontStyle: "italic" }}
//   >
//     large orange box
//   </div>
// );

// function Styles() {
//   return (
//     <div>
//       {smallBox}
//       {mediumBox}
//       {largeBox}
//     </div>
//   );
// }

const Box = (props) => (
  <div className={`box box--${props.size}`} style={props.style}>
    {props.children}
  </div>
);

function Styles() {
  return (
    <div>
      <Box
        size="small"
        style={{ backgroundColor: "lightblue", fontStyle: "italic" }}
      >
        small lightblue box
      </Box>
      <Box
        size="medium"
        style={{ backgroundColor: "pink", fontStyle: "italic" }}
      >
        medium pink box
      </Box>
      <Box
        size="large"
        style={{ backgroundColor: "orange", fontStyle: "italic" }}
      >
        large orange box
      </Box>
    </div>
  );
}

export default Styles;
