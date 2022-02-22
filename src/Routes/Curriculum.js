import Header from '../components/Header/Header';
import InfoCardLeft from '../components/ComponentesCurriculo/InfoCardLeft/InfoCardLeft';
import InfoCardRight from '../components/ComponentesCurriculo/InfoCardRight/InfoCardRight';
import Footer from '../components/Footer/Footer';

import styled from 'styled-components';

import { useEffect } from 'react'

export default function Curriculum () {
    const CurriculumBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    
    `
    const Curriculo = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding-top: 30px;
    `
    useEffect(() => {
        window.scrollTo(0,0);
    }, [])
    return (
        <CurriculumBox>
            <Header></Header>
            <Curriculo>
                <InfoCardRight ano="2022" mes="FEVEREIRO" premio="Engenharia de Computação-UNICAMP-Vestibular" quem="Universidade de Campinas" link1="LISTÃO" link1href="https://www.comvest.unicamp.br/vest2022/F2/aprova2/chamada2/letras/l.html"></InfoCardRight>
                <InfoCardLeft ano="2022" mes="FEVEREIRO" premio="Engenharia de Agrícola-UNICAMP-Vagas Olímpicas" quem="Universidade de Campinas" link1="LISTÃO" link1href="https://www.comvest.unicamp.br/vest2022/vo/vo_aprova/chamada1/chamada1.html"></InfoCardLeft>
                <InfoCardRight ano="2022" mes="FEVEREIRO" premio="Engenharia de Computação-Esc. Politécnica da USP" quem="Fuvest" link1="LISTÃO" link1href="https://www.fuvest.br/wp-content/uploads/fuvest_2022_chamada_1.pdf"></InfoCardRight>
                <InfoCardLeft ano="2022" mes="JANEIRO" premio="1° EP/7° AC Engenharia Mecânica - UNESP" quem="Vunesp" link1="LISTÃO" link1href="https://documento.vunesp.com.br/documento/stream/MjY1OTU3Ng%3d%3d"></InfoCardLeft>
                <InfoCardRight ano="2022" mes="JANEIRO" premio="Medalha de Prata-OBMEP" quem="IMPA" link1="PREMIADOS" link1href="http://premiacao.obmep.org.br/16aobmep/verRelatorioPremiadosPrata.do.htm"></InfoCardRight>
                <InfoCardLeft ano="2022" mes="JANEIRO" premio="Menção Honrosa-OBF" quem="SBF" link1="PREMIADOS" link1href="http://www.sbfisica.org.br/v1/olimpiada/2021/index.php/16-obf/283-vencedores-da-obf-2021-3-serie"></InfoCardLeft>
                <InfoCardRight ano="2022" mes="JANEIRO" premio="Coord. Geral Grêmio Estudantil" quem="EE Barão Geraldo de Rezende" link1="CERTIFICAÇÃO" link1href="https://drive.google.com/file/d/1BJUFsy4fDRN_7RM6Ze5gnvrbwd7Fm9Yf/view?usp=sharing"></InfoCardRight>
                <InfoCardLeft ano="2021" mes="DEZEMBRO" premio="Bronze-Olimpíada da Tríplice Fronteira (Sapientia)" quem="Instituto Vertere" link1="DADOS" link1href="https://drive.google.com/drive/folders/1yiEU_nllSX7lg69NveMBetkgjDGXd_TY?usp=sharing"></InfoCardLeft>
                <InfoCardRight ano="2021" mes="DEZEMBRO" premio="Intr. ao estudo dos limites" quem="UFRGS" link1="CERTIFICAÇÃO" link1href="https://drive.google.com/file/d/1kqnL2xNlDsCVIvcwVmqAESzCDRIaRYnu/view?usp=sharing"></InfoCardRight>
                <InfoCardLeft ano="2021" mes="DEZEMBRO" premio="Insígnia de Papiro-OBLing" quem="MCTI" link1="PREMIADOS" link1href="https://docs.google.com/spreadsheets/d/1j6wvozYjuPLHZt8xDpOdoJSvGdGEtU2GbIZdX-cDzIE/edit?usp=sharing"></InfoCardLeft>
                <InfoCardRight ano="2021" mes="NOVEMBRO" premio="Vencedor BRICS Math Olympiad" quem="Dragon Learn" link1="CERTIFICAÇÃO" link1href="https://drive.google.com/file/d/1X4s7DH6JCAisq8PWiJlZsVHF9-xt1KbR/view?usp=sharing"></InfoCardRight>
                <InfoCardLeft ano="2021" mes="NOVEMBRO" premio="Bronze-American Math. Olymp." quem="Southern Illinois Uni." link1="CERTIFICAÇÃO" link1href="https://drive.google.com/file/d/1UGO_Ahr5pmCgv8EI_Ifm98GjIzTmCBxM/view?usp=sharing"></InfoCardLeft>
                <InfoCardRight ano="2021" mes="OUTUBRO" premio="1° Lugar-Eng. de Computação-UFRGS" quem="UFRGS" link1="LISTÃO" link1href="https://vestibular.ufrgs.br/ps2021-2/listao/arquivo_l.html"></InfoCardRight>
                <InfoCardLeft ano="2021" mes="OUTUBRO" premio="Ouro-O. B. Biologia Sintética" quem="MCTI" link1="CERTIFICAÇÃO" link1href="https://drive.google.com/file/d/1vQmkqsQnOBu4xCMj0-LyG-zPzSZHYwyo/view?usp=sharing"></InfoCardLeft>
                <InfoCardRight ano="2021" mes="SETEMBRO" premio="Medalha de Ouro-ONC" quem="MCTI" link1="CERTIFICAÇÃO" link1href="https://drive.google.com/file/d/1TKZ-4pno442mf2u1USfpqt_bZ2241aEV/view?usp=sharing"></InfoCardRight>
                <InfoCardLeft ano="2021" mes="SETEMBRO" premio="Premiado CUCo" quem="FUVEST" link1="CERTIFICAÇÃO" link1href="https://drive.google.com/drive/u/1/folders/1BDO2UIyVvdX0lrVh2zHPM493ZOO7KMJo"></InfoCardLeft>
                <InfoCardRight ano="2021" mes="SETEMBRO" premio="Bronze-Olimpíada Br. de Química" quem="ABQ" link1="PREMIADOS" link1href="https://obquimica.org/resultados/download/228"></InfoCardRight>
                <InfoCardLeft ano="2021" mes="SETEMBRO" premio="Bronze-Olim. Br. de Medicina" quem="Instituto Vertere" link1="CERTIFICAÇÃO" link1href="https://drive.google.com/file/d/1B5IaMYFEXG11RBHfyZcxGdlVgFtt1OYD/view?usp=sharing"></InfoCardLeft>
                <InfoCardRight ano="2021" mes="AGOSTO" premio="Participação Olimpíada Pocket" quem="Instituto Vertere" link1="CERTIFICAÇÃO" link1href="https://drive.google.com/file/d/1AyOi4rbw5oHUHzYFa1htLFeaF8MJfRgQ/view?usp=sharing"></InfoCardRight>
                <InfoCardLeft ano="2021" mes="AGOSTO" premio="Troféu Mandacaru" quem="Mandacaru Sol. Educacionais" link1="CERTIFICAÇÃO" link1href="https://drive.google.com/drive/u/1/folders/10nPVczOqueXsHwobf3pXwe6P3f_WGhni"></InfoCardLeft>
                <InfoCardRight ano="2021" mes="AGOSTO" premio="Ouro-Olím. Mandacaru de Mat." quem="Mandacaru Sol. Educacionais" link1="CERTIFICAÇÃO" link1href="https://drive.google.com/drive/u/1/folders/10nPVczOqueXsHwobf3pXwe6P3f_WGhni"></InfoCardRight>
                <InfoCardLeft ano="2021" mes="JUNHO" premio="Destaque Escola Pública-OQSP" quem="ABQ" link1="CERTIFICAÇÃO" link1href="https://drive.google.com/drive/u/1/folders/1AYef-m6TCGRu4AssgkHp5QCXlt6oBHmr"></InfoCardLeft>
                <InfoCardRight ano="2021" mes="JUNHO" premio="Bronze-OQSP" quem="ABQ" link1="CERTIFICAÇÃO" link1href="https://drive.google.com/drive/u/1/folders/1AYef-m6TCGRu4AssgkHp5QCXlt6oBHmr"></InfoCardRight>
                <InfoCardLeft ano="2021" mes="FEVEREIRO" premio="Melhor Treineiro FUVEST" quem="Fuvest" link1="CERTIFICAÇÃO" link1href="https://drive.google.com/drive/u/1/folders/1pNO00iATazzOstixVHatXqFS_twarEHG"></InfoCardLeft>
                <InfoCardRight ano="2020" mes="NOVEMBRO" premio="Parcipação na OBF" quem="SBF" link1="CERTIFICAÇÃO" link1href="https://drive.google.com/file/d/1cPQn--eC0JyTOEdkRsvKyGCBsI0_HNqe/view?usp=sharing"></InfoCardRight>
                <InfoCardLeft ano="2019" mes="DEZEMBRO" premio="14° PIC" quem="OBMEP" link1="CERTIFICAÇÃO" link1href="https://drive.google.com/file/d/18EyHwY6zY0TjqkGRKBKrYdb7WUpsooPt/view?usp=sharing"></InfoCardLeft>
                <InfoCardRight ano="2019" mes="DEZEMBRO" premio="Mérito Escolar Clevelandense " quem="Prefeitura de Clevelândia" link1="CERTIFICAÇÃO" link1href="https://drive.google.com/file/d/1AU88-D1q5oaUFlLyK3c0QYcIuK8WCJ3U/view?usp=sharing"></InfoCardRight>
                <InfoCardLeft ano="2019" mes="JUNHO" premio="Criando um negócio de sucesso" quem="UnB" link1="CERTIFICAÇÃO" link1href="https://drive.google.com/file/d/1ALMthv_DKS0i_9KjfJKQaemTXwwOnH9g/view?usp=sharing"></InfoCardLeft>
                <InfoCardRight ano="2018" mes="DEZEMBRO" premio="Medalha de Bronze-OBMEP" quem="IMPA" link1="CERTIFICAÇÃO" link1href="https://drive.google.com/file/d/1A3tkRBYrhDUzPqnmj-K1xouXftIQdLXQ/view?usp=sharing"></InfoCardRight>
                <InfoCardLeft ano="2018" mes="AGOSTO" premio="Discurso-Conferência Direitos Humanos" quem="Prefeitura Municipal de Abelardo Luz" link1="MATÉRIA" link1href="https://www.abelardoluz.sc.gov.br/noticias/index/ver/codMapaItem/13571/codNoticia/509027"></InfoCardLeft>
                <InfoCardRight ano="2016" mes="FEVEREIRO" premio="Menção Honrosa-OBMEP" quem="IMPA" link1="CERTIFICAÇÃO" link1href="https://drive.google.com/file/d/19lRDc6e0C2m_cpezwOOjnKCcGT3XlFfG/view?usp=sharing"></InfoCardRight>
                <InfoCardLeft ano="2016" mes="NOVEMBRO" premio="Mérito Escolar Clevelandense" quem="Prefeitura de Clevelândia" link1="CERTIFICAÇÃO" link1href="https://drive.google.com/file/d/19cGkhnPKLF6VKbYLJll0MMdkvXD7pzYk/view?usp=sharing"></InfoCardLeft>
                <InfoCardRight ano="2015" mes="FEVEREIRO" premio="Curso Infomática Mix" quem="CDI" link1="CERTIFICAÇÃO" link1href="https://drive.google.com/file/d/19R-5OTCDyBP9UmCXuB2HLbaQUDGp2t8K/view?usp=sharing"></InfoCardRight>
                <InfoCardLeft ano="2014" mes="DEZEMBRO" premio="Projeto Multimídia" quem="Prefeitura Municipal de Clevelândia" link1="CERTIFICAÇÃO" link1href="https://drive.google.com/file/d/19Ke68sNxIyOeGosmiF5rJJfwcAzjs47y/view?usp=sharing"></InfoCardLeft>
                <InfoCardRight ano="2014" mes="OUTUBRO" premio="Prêmio Tabuada" quem="EM Pr° Antônio Marcelino Pontes" link1="CERTIFICAÇÃO" link1href="https://drive.google.com/file/d/19IQQbW_C-2UvdEt8jtKVdKcldNrdBdxx/view?usp=sharing"></InfoCardRight>
                <InfoCardLeft ano="2012" mes="JUNHO" premio="Aluno Destaque-2° ano EF" quem="Prefeitura Municipal de Clevelândia" link1="CERTIFICAÇÃO" link1href="https://drive.google.com/drive/folders/1tqjXNuNQoxd4jtXkvvJl6FMy4epbbnqA?usp=sharing"></InfoCardLeft>
            </Curriculo>
            <Footer></Footer>
        </CurriculumBox>
    );
}
