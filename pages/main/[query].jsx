import Navbar from "../components/navbar/navbar";
import Pagination from "@mui/material/Pagination";
import { Box } from "@mui/material";
import { secondLinks, links } from "../pages";
import { useDispatch, useSelector } from "react-redux";
import { setFrom } from "../redux/actiontypes/actiontypes";
import { Container } from "@mui/material";
import AllComp from "../components/all/all";
import { sortFunc } from "../components/sort/sort";
import { setQuery } from "../redux/actiontypes/actiontypes";
import Footer from "../components/footer/footer";
import { db } from "../firebase/firebase";
import {
  collection,
  query,
  where,
  getDocs,
  orderBy,
  Timestamp,
} from "firebase/firestore";
import { useEffect } from "react";

function convert(seconds, nano) {
  return new Timestamp(seconds, nano).toDate().toDateString();
}
export async function getStaticPaths() {
  const paths = secondLinks.map((el) => {
    return { params: { query: el.link.slice(1) } };
  });
  return {
    paths: paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const data = [];
  const q = query(
    collection(db, "blogs"),
    params.query !== "all" && where("tag", "==", params.query),
    orderBy("date", "desc")
  );
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    data.push({
      ...doc.data(),
      id: doc.id,
      date: convert(doc.data().date.seconds, doc.data().date.nanoseconds),
      comments: [],
    });
  });
  return {
    props: { dataFromBase: data },
  };
}
export default function MainBody({ dataFromBase }) {
  const set = useDispatch();

  const dataList = dataFromBase;
  const data = useSelector((state) => state.blogs.query);
  const from = useSelector((state) => state.blogs.from);
  const {
    finance,
    events,
    computerScience,
    health,
    scholarships,
    math,
    music,
    religion,
    fashion,
    history,
  } = sortFunc(data.slice(from, from + 14));
  useEffect(() => {
    set(setQuery(dataList));
  }, [dataList, set]);
  return (
    <Container
      disableGutters
      maxWidth="xl"
      sx={{ overflowY: "scroll", height: "100vh" }}
    >
      <Navbar name="YorBest" icons navItems={secondLinks} links={links} />
      <AllComp
        finance={finance}
        events={events}
        computerScience={computerScience}
        health={health}
        scholarships={scholarships}
        math={math}
        music={music}
        religion={religion}
        fashion={fashion}
        history={history}
      />
      <Box
        maxWidth="md"
        component="span"
        sx={{
          margin: "1em  auto",
          display: "flex",
          width: "100%",
          justifyContent: "flex-end",
        }}
      >
        {data.length > 15 && (
          <Pagination
            onChange={(event, number) => set(setFrom(15 * number - 15))}
            siblingCount={1}
            boundaryCount={0}
            count={Math.ceil(data.length / 15)}
            variant="outlined"
            shape="rounded"
          />
        )}
      </Box>
      <div className="sharethis-sticky-share-buttons"></div>
      {/* <div class="sharethis-privacy-policy"></div> */}
      <Footer />
    </Container>
  );
}
