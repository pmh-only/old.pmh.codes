import CategoryTitle from '../../components/categories/CategoryTitle'
import FrontendDemo from '../../components/categories/FrontendDemo'
import Container from '../../components/Container'

export default function BackendPage () {
  return (
    <Container backgroundColor="#d08770">
      <CategoryTitle title="FrontEnd"/>
      <FrontendDemo />
    </Container>
  )
}
