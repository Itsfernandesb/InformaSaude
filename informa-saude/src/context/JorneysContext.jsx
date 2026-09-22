import { createContext, useContext, useReducer } from "react";

const estadoInicial = {
  diasAprendidos: 241,
  progressoSemanal: [true, true, true, true, false, false, false],
  xpHistorico: [1636, 707, 1636],
  jornadas: 6,
  minutos: 63,
};

const JornadasContext = createContext(undefined);

function reducer(state, action) {
  if (action.type !== "jornada-completa") return state;

  const proximoProgresso = [...state.progressoSemanal];
  const proximoDia = proximoProgresso.findIndex((completo) => !completo);

  if (proximoDia >= 0) proximoProgresso[proximoDia] = true;
  return {
    ...state, 
    diasAprendidos: state.diasAprendidos + (proximoDia >= 0 ? 1 : 0),
    progressoSemanal: proximoProgresso,
    xpHistorico: [state.xpHistorico[0] ?? 0, state.xpHistorico[1] ?? 0, (state.xpHistorico[2] ?? 0) + 320],
    jornadas: state.jornadas + 1,
    minutos: state.minutos + 18,
  };
}

export function JornadasProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, estadoInicial);
  return (
    <JornadasContext.Provider value={{...state, jornadaCompleta: () => dispatch({ type: "jornada-completa" })}}>
      {children}
    </JornadasContext.Provider>
  );
}

export function useJornadas() {
  const contexto = useContext(JornadasContext);

  if (!contexto) throw new Error("useJornadas deve ser usado dentro do JornadasProvider");
}