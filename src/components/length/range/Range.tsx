import { useRef } from "react";
import useData from "../../../hooks/useData";

// style
import StyleRange from "./style/Range";

const Range = () => {
  const { setLength } = useData();

  const RangeValue = useRef<HTMLInputElement>();

  const getValue = () => {
    // @ts-ignore
    setLength(RangeValue.current?.value);
  }

  return (
    // @ts-ignore
    < StyleRange ref={RangeValue} onChange={() => getValue()} />
  )
}

export default Range;