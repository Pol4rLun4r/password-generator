import { useRef} from "react";
import useData from "../../../hooks/useData";

// style
import StyleRange from "./style/Range";

const Range = () => {
  const { setLength } = useData();

  const RangeValue = useRef<HTMLInputElement>();

  const test = () => {
    // @ts-ignore
    setLength(RangeValue.current?.value);
  }

  return (
    // @ts-ignore
    <StyleRange ref={RangeValue} onChange={() => test()} />
  )
}

export default Range;