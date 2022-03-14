import Header from '../components/Header/Header';
import Presentation from '../components/Presentation/Presentation';

import NewTopic from "../components/NewTopic/NewTopic";
import NewTopic1 from "../components/NewTopic1/NewTopic1";
import NewTopic3 from "../components/NewTopic3/NewTopic3";
import Footer from "../components/Footer/Footer";

import { useEffect } from 'react'

function Home() {

  useEffect(() => {
    window.scrollTo(0,0);
  }, [])

  return (
    <div style={{ alignItems: "center", overflowX: "hidden" }}>
      <Header></Header>
      <Presentation></Presentation>
      <NewTopic title="ROTINA" description="TIMELINE"></NewTopic>
      <NewTopic1 title="INDIVÍDUO" description="PERFIL"></NewTopic1>
      <NewTopic3 title="CRIAÇÃO" description="GITHUB"></NewTopic3>
      <Footer></Footer>
    </div>
  );
}

export default Home;