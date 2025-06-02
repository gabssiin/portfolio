// src/components/GeometricShapes.jsx
import React from "react";

// Cor de fundo padrão (similar ao seu layout) para elementos que precisam de contraste
const BG_COLOR = "#0B1B3B";

// 1. Forma 1 (Losango com quadrados internos)
const Shape1 = () => (
  <div
    style={{
      width: "50px",
      height: "50px",
      position: "relative",
      transform: "rotate(45deg)",
      overflow: "hidden",
    }}
  >
    <div
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        width: "50%",
        height: "50%",
        backgroundColor: "white",
      }}
    />
    <div
      style={{
        position: "absolute",
        top: "0",
        right: "0",
        width: "50%",
        height: "50%",
        backgroundColor: "white",
      }}
    />
    <div
      style={{
        position: "absolute",
        bottom: "0",
        left: "0",
        width: "50%",
        height: "50%",
        backgroundColor: "white",
      }}
    />
    <div
      style={{
        position: "absolute",
        bottom: "0",
        right: "0",
        width: "50%",
        height: "50%",
        backgroundColor: "white",
      }}
    />
  </div>
);

// 2. Forma 2 (Padrão de Damas - Quadrado)
const Shape2 = () => (
  <div
    style={{
      width: "50px",
      height: "50px",
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)", // 2 colunas de tamanho igual
      gridTemplateRows: "repeat(2, 1fr)", // 2 linhas de tamanho igual
    }}
  >
    <div style={{ backgroundColor: "white" }} /> {/* Canto superior esquerdo */}
    <div style={{ backgroundColor: BG_COLOR }} /> {/* Canto superior direito */}
    <div style={{ backgroundColor: BG_COLOR }} />{" "}
    {/* Canto inferior esquerdo */}
    <div style={{ backgroundColor: "white" }} /> {/* Canto inferior direito */}
  </div>
);

// 3. Forma 3 (Triângulos em Círculo Aparente)
const Shape3 = () => (
  <div
    style={{
      width: "50px",
      height: "50px",
      position: "relative",
      borderRadius: "50%", // Faz o div ser um círculo
      overflow: "hidden", // Recorta o que está fora do círculo
      backgroundColor: BG_COLOR, // Cor de fundo do círculo (será a cor entre os triângulos)
    }}
  >
    {/* Quatro triângulos rotacionados e posicionados para formar a "borda" branca */}
    <div
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        clipPath: "polygon(0 0, 100% 0, 50% 100%)",
        backgroundColor: "white",
        transformOrigin: "bottom center",
        transform: "translateY(-25%) rotate(0deg)",
      }}
    />
    <div
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        clipPath: "polygon(0 0, 100% 0, 50% 100%)",
        backgroundColor: "white",
        transformOrigin: "bottom center",
        transform: "translateY(-25%) rotate(90deg)",
      }}
    />
    <div
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        clipPath: "polygon(0 0, 100% 0, 50% 100%)",
        backgroundColor: "white",
        transformOrigin: "bottom center",
        transform: "translateY(-25%) rotate(180deg)",
      }}
    />
    <div
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        clipPath: "polygon(0 0, 100% 0, 50% 100%)",
        backgroundColor: "white",
        transformOrigin: "bottom center",
        transform: "translateY(-25%) rotate(270deg)",
      }}
    />
  </div>
);

// 4. Forma 4 (Quadrado com Círculo e Corte Diagonal)
const Shape4 = () => (
  <div
    style={{
      width: "50px",
      height: "50px",
      position: "relative",
      backgroundColor: BG_COLOR, // Cor de fundo do quadrado
      overflow: "hidden",
    }}
  >
    {/* Círculo branco posicionado na parte superior direita */}
    <div
      style={{
        position: "absolute",
        top: "-15px", // Ajuste para que parte do círculo fique fora
        right: "-15px",
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        backgroundColor: "white",
      }}
    />
    {/* Triângulo escuro central para o corte diagonal, rotacionado */}
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%) rotate(45deg)", // Centraliza e rotaciona
        width: "70.7px", // Tamanho para cobrir a área diagonal
        height: "70.7px",
        backgroundColor: BG_COLOR, // Cor do fundo para "cortar"
        clipPath: "polygon(0 0, 100% 0, 50% 100%)", // Forma de triângulo
        transformOrigin: "center",
      }}
    />
  </div>
);

// 5. Forma 5 (Hélice de Quatro Pontas - Cruzeta Fina)
const Shape5 = () => (
  <div
    style={{
      width: "50px",
      height: "50px",
      position: "relative",
      backgroundColor: BG_COLOR, // Fundo para contraste
    }}
  >
    {/* Quatro retângulos para formar a hélice */}
    <div
      style={{
        position: "absolute",
        top: "0",
        left: "20px",
        width: "10px",
        height: "100%",
        backgroundColor: "white",
      }}
    />
    <div
      style={{
        position: "absolute",
        top: "20px",
        left: "0",
        width: "100%",
        height: "10px",
        backgroundColor: "white",
      }}
    />
  </div>
);

// 6. Forma 6 (Estrela de Quatro Pontas - Cruzeta com Triângulos)
const Shape6 = () => (
  <div
    style={{
      width: "50px",
      height: "50px",
      position: "relative",
      backgroundColor: BG_COLOR,
    }}
  >
    {/* Centro (quadrado) */}
    <div
      style={{
        position: "absolute",
        top: "15px",
        left: "15px",
        width: "20px",
        height: "20px",
        backgroundColor: "white",
      }}
    />
    {/* Quatro triângulos apontando para fora do centro */}
    <div
      style={{
        position: "absolute",
        top: "0",
        left: "15px",
        width: "0",
        height: "0",
        borderLeft: "10px solid transparent",
        borderRight: "10px solid transparent",
        borderBottom: "15px solid white",
      }}
    />
    <div
      style={{
        position: "absolute",
        bottom: "0",
        left: "15px",
        width: "0",
        height: "0",
        borderLeft: "10px solid transparent",
        borderRight: "10px solid transparent",
        borderTop: "15px solid white",
      }}
    />
    <div
      style={{
        position: "absolute",
        left: "0",
        top: "15px",
        width: "0",
        height: "0",
        borderTop: "10px solid transparent",
        borderBottom: "10px solid transparent",
        borderRight: "15px solid white",
      }}
    />
    <div
      style={{
        position: "absolute",
        right: "0",
        top: "15px",
        width: "0",
        height: "0",
        borderTop: "10px solid transparent",
        borderBottom: "10px solid transparent",
        borderLeft: "15px solid white",
      }}
    />
  </div>
);

// 7. Forma 7 (Canto Curvo)
const Shape7 = () => (
  <div
    style={{
      width: "50px",
      height: "50px",
      backgroundColor: "#fff", // A cor da forma
      borderRadius: "0 0 50px 0", // Curva apenas no canto superior direito
    }}
  />
);

// 8. Forma 8 (Chevron/Seta)
const Shape8 = () => (
  <div
    style={{
      width: "50px",
      height: "30px",
      position: "relative",
      backgroundColor: BG_COLOR, // Fundo para contraste
    }}
  >
    {/* Triângulo da ponta */}
    <div
      style={{
        position: "absolute",
        top: "0", // Ajusta para alinhar com o topo do div pai
        left: "0",
        width: "0",
        height: "0",
        borderTop: "15px solid transparent",
        borderBottom: "15px solid transparent",
        borderLeft: "30px solid white", // A cor da seta
      }}
    />
    {/* Corpo retangular da seta */}
    <div
      style={{
        position: "absolute",
        top: "0",
        right: "0",
        width: "20px",
        height: "30px",
        backgroundColor: "white", // A cor da seta
      }}
    />
  </div>
);

// 9. Forma 9 (Dois Semicírculos Verticais)
const Shape9 = () => (
  <div
    style={{
      width: "30px",
      height: "50px",
      position: "relative",
      backgroundColor: BG_COLOR, // Fundo para o espaço entre os semicírculos
    }}
  >
    <div
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "50%",
        backgroundColor: "white",
        borderRadius: "15px 15px 0 0",
      }}
    />
    <div
      style={{
        position: "absolute",
        bottom: "0",
        left: "0",
        width: "100%",
        height: "50%",
        backgroundColor: "white",
        borderRadius: "0 0 15px 15px",
      }}
    />
  </div>
);

// 10. Forma 10 (Dois Semicírculos Horizontais)
const Shape10 = () => (
  <div
    style={{
      width: "50px",
      height: "30px",
      position: "relative",
      backgroundColor: BG_COLOR, // Fundo para o espaço entre os semicírculos
    }}
  >
    <div
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        width: "50%",
        height: "100%",
        backgroundColor: "white",
        borderRadius: "30px 0 0 30px",
      }}
    />
    <div
      style={{
        position: "absolute",
        top: "0",
        right: "0",
        width: "50%",
        height: "100%",
        backgroundColor: "white",
        borderRadius: "0 30px 30px 0",
      }}
    />
  </div>
);

// 11. Forma 11 (Círculo Dividido ao Meio)
const Shape11 = () => (
  <div
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      backgroundColor: "white", // Cor da metade direita
      overflow: "hidden",
    }}
  >
    <div
      style={{
        width: "50%",
        height: "100%",
        backgroundColor: BG_COLOR,
        float: "left",
      }}
    />{" "}
    {/* Metade esquerda */}
  </div>
);

// 12. Forma 12 (Círculo Vazio/Anel)
const Shape12 = () => (
  <div
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      border: "3px solid white", // A cor do anel
      backgroundColor: "transparent",
    }}
  />
);

// 13. Forma 13 (Quadrado com Círculo Cortado)
const Shape13 = () => (
  <div
    style={{
      width: "50px",
      height: "50px",
      backgroundColor: "white", // Cor do quadrado de fundo
      position: "relative",
      overflow: "hidden",
    }}
  >
    {/* Círculo do mesmo tamanho que o div, mas com um ponto no meio */}
    <div
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        backgroundColor: BG_COLOR, // Cor do círculo
        position: "absolute",
        top: "0",
        left: "0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Ponto central */}
      <div
        style={{
          width: "15px",
          height: "15px",
          borderRadius: "50%",
          backgroundColor: "white",
        }}
      />
    </div>
  </div>
);

// 14. Forma 14 (Losango Simples)
const Shape14 = () => (
  <div
    style={{
      width: "50px",
      height: "50px",
      transform: "rotate(45deg)", // Rotação para criar o losango
      backgroundColor: "white", // Cor do losango
    }}
  />
);

// 15. Forma 15 (Triângulo com Círculo no Canto)
const Shape15 = () => (
  <div
    style={{
      width: "50px",
      height: "50px",
      position: "relative",
      backgroundColor: BG_COLOR, // Fundo para contraste
    }}
  >
    {/* Triângulo */}
    <div
      style={{
        width: "0",
        height: "0",
        borderLeft: "25px solid transparent",
        borderRight: "25px solid transparent",
        borderBottom: "50px solid white", // A cor do triângulo
        position: "absolute",
        bottom: "0",
        left: "0",
      }}
    />
    {/* Círculo posicionado no topo-esquerda do triângulo */}
    <div
      style={{
        position: "absolute",
        top: "5px",
        left: "5px",
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        backgroundColor: "white", // A cor do círculo
      }}
    />
  </div>
);

// 16. Forma 16 (Quadrado com Linha Diagonal)
const Shape16 = () => (
  <div
    style={{
      width: "50px",
      height: "50px",
      position: "relative",
      backgroundColor: "white", // Cor do quadrado base
      overflow: "hidden",
    }}
  >
    {/* Linha diagonal usando um gradiente */}
    <div
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        background: `linear-gradient(45deg, transparent 48%, ${BG_COLOR} 48%, ${BG_COLOR} 52%, transparent 52%)`,
      }}
    />
  </div>
);

// 17. Forma 17 (Z em Quadrado)
const Shape17 = () => (
  <div
    style={{
      width: "50px",
      height: "50px",
      position: "relative",
      backgroundColor: BG_COLOR, // Fundo do quadrado
    }}
  >
    <div
      style={{
        position: "absolute",
        top: "10px",
        left: "10px",
        width: "30px",
        height: "10px",
        backgroundColor: "white",
      }}
    />{" "}
    {/* Linha superior */}
    <div
      style={{
        position: "absolute",
        top: "25px",
        left: "10px",
        width: "30px",
        height: "10px",
        backgroundColor: "white",
      }}
    />{" "}
    {/* Linha do meio */}
    <div
      style={{
        position: "absolute",
        top: "40px",
        left: "10px",
        width: "30px",
        height: "10px",
        backgroundColor: "white",
      }}
    />{" "}
    {/* Linha inferior */}
  </div>
);

// 18. Forma 18 (Quadrado Cortado na Diagonal - metade colorida)
const Shape18 = () => (
  <div
    style={{
      width: "50px",
      height: "50px",
      position: "relative",
      backgroundColor: BG_COLOR, // Cor da metade inferior/direita
    }}
  >
    <div
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        clipPath: "polygon(0 0, 100% 0, 0 100%)", // Forma de triângulo
        backgroundColor: "white", // Cor da metade superior/esquerda
      }}
    />
  </div>
);

// 19. Forma 19 (Círculo com Ponto Central)
const Shape19 = () => (
  <div
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      backgroundColor: "white", // Cor do círculo externo
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <div
      style={{
        width: "15px",
        height: "15px",
        borderRadius: "50%",
        backgroundColor: BG_COLOR,
      }}
    />{" "}
    {/* Ponto central */}
  </div>
);

// 20. Forma 20 (Hélice com Pontos)
const Shape20 = () => (
  <div
    style={{
      width: "50px",
      height: "50px",
      position: "relative",
      backgroundColor: BG_COLOR, // Fundo
    }}
  >
    {/* Barras cruzadas */}
    <div
      style={{
        position: "absolute",
        top: "20px",
        left: "0",
        width: "100%",
        height: "10px",
        backgroundColor: "white",
      }}
    />
    <div
      style={{
        position: "absolute",
        top: "0",
        left: "20px",
        width: "10px",
        height: "100%",
        backgroundColor: "white",
      }}
    />
    {/* Pontos nas pontas */}
    <div
      style={{
        position: "absolute",
        top: "5px",
        left: "5px",
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        backgroundColor: "white",
      }}
    />
    <div
      style={{
        position: "absolute",
        top: "5px",
        right: "5px",
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        backgroundColor: "white",
      }}
    />
    <div
      style={{
        position: "absolute",
        bottom: "5px",
        left: "5px",
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        backgroundColor: "white",
      }}
    />
    <div
      style={{
        position: "absolute",
        bottom: "5px",
        right: "5px",
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        backgroundColor: "white",
      }}
    />
  </div>
);

// 21. Forma 21 (Quadrado com Corte Curvo Interno)
const Shape21 = () => (
  <div
    style={{
      width: "50px",
      height: "50px",
      position: "relative",
      backgroundColor: "white", // Cor do quadrado
      overflow: "hidden",
    }}
  >
    {/* Círculo para criar o "corte" */}
    <div
      style={{
        position: "absolute",
        top: "-25px", // Metade do raio para mover o centro para a borda
        left: "-25px", // Metade do raio
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        backgroundColor: BG_COLOR, // Cor do corte
      }}
    />
  </div>
);

// 22. Forma 22 (Semicírculo Inferior)
const Shape22 = () => (
  <div
    style={{
      width: "50px",
      height: "25px", // Metade da largura para um semicírculo
      backgroundColor: "white",
      borderRadius: "0 0 50px 50px", // Apenas os cantos inferiores arredondados
    }}
  />
);

// Exporta todos os componentes de forma
export {
  Shape1,
  Shape2,
  Shape3,
  Shape4,
  Shape5,
  Shape6,
  Shape7,
  Shape8,
  Shape9,
  Shape10,
  Shape11,
  Shape12,
  Shape13,
  Shape14,
  Shape15,
  Shape16,
  Shape17,
  Shape18,
  Shape19,
  Shape20,
  Shape21,
  Shape22,
};
