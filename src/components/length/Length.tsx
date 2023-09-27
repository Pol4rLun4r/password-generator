// style
import Container from "./style/Container"
import Content from "./style/Content"
import { StyleLength, StyleLengthValue, ContainerLength } from "./style/Length"

// components
import Range from "./range/Range"

// context
import useData from "../../hooks/useData"

const Length = () => {
  const { length } = useData();

  return (
    <Container>
      <ContainerLength>
        <StyleLength>Length:</StyleLength>
        <StyleLengthValue>{length}</StyleLengthValue>
      </ContainerLength>
      <Content>
        <div>4</div>
        <Range />
        <div>32</div>
      </Content>
    </Container>
  )
}

export default Length