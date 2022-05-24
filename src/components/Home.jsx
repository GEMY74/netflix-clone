import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setDisneyMovies } from "./redux/reducer/MovieReducer";
import db from "../firebase";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Orignal from "./Orignal";
import Trending from "./Trending";
import NewTodisney from "./NewTodisney";
import Hollywood from "./Hollywood";
import DisneyKids from "./DisneyKids";

const Home = () => {
  const dispatch = useDispatch();

  let hollywoods = [];
  let newTos = [];
  let kidsTvs = [];
  let originals = [];
  let trendings = [];

  useEffect(() => {
    db.collection("Movies").onSnapshot((snap) => {
      snap.docs.map((doc) => {
        // console.log(doc.data());

        switch (doc.data().type) {
          case "hollywood":
            hollywoods = [...hollywoods, { id: doc.id, ...doc.data() }];
            break;

          case "newTo":
            newTos = [...newTos, { id: doc.id, ...doc.data() }];
            break;

          case "kidsTv":
            kidsTvs = [...kidsTvs, { id: doc.id, ...doc.data() }];
            break;

          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;

          case "trending":
            trendings = [...trendings, { id: doc.id, ...doc.data() }];
            break;

          default:
            break;
        }
      });

      dispatch(
        setDisneyMovies({
          hollywood: hollywoods,
          newTo: newTos,
          kidsTv: kidsTvs,
          original: originals,
          trending: trendings,
        })
      );
    });
  }, []);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Orignal />
      <Trending />
      <NewTodisney />
      <Hollywood />
      <DisneyKids />
    </Container>
  );
};

export default Home;

const Container = styled.main`
  min-height: calc(Movies100vh - 70px);
  padding: 10px calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;
  &:before {
    content: "";
    background: url(/assests/images/home-background.png) center center / cover
      no-repeat fixed;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
