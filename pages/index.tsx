import { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <section>
      <input placeholder="받는사람" />
      <input placeholder="주소" />
      <input placeholder="우편번호" />
      <input placeholder="배송메시지" />
      <button>구매하기</button>
    </section>
  )
}

export default Home
