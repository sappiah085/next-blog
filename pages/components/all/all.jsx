import Feature from "../feature/featured";
export default function AllComp({
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
}) {
  return (
    <>
      {scholarships.length ? (
        <Feature data={scholarships} short={true} label="Scholarships" />
      ) : null}
      {finance.length ? (
        <Feature
          smallDirection="row-reverse"
          size={1200}
          label="Finance"
          data={finance}
        />
      ) : null}
      {events.length ? (
        <Feature
          smallDirection="row"
          size={1200}
          label="Events"
          data={events}
        />
      ) : null}
      {health.length ? <Feature data={health} short={true} label="health" /> : null}
      {computerScience.length ? (
        <Feature
          smallDirection="row-reverse"
          size={1200}
          label="computer Science"
          data={computerScience}
        />
      ) : null}
      {math.length ? (
        <Feature short={true} label="Mathematics" data={math} />
      ) : null}
      {music.length ? (
        <Feature data={music} short={true} label="Music" />
      ) : null}
      {religion.length ? (
        <Feature
          smallDirection="row-reverse"
          size={1200}
          label="Religion"
          data={religion}
        />
      ) : null}
      {fashion.length ? (
        <Feature
          smallDirection="row-reverse"
          size={1200}
          label="Fashion"
          data={fashion}
        />
      ) : null}
      {history.length ? (
        <Feature
          smallDirection="row"
          size={1200}
          label="History"
          data={history}
        />
      ) : null}
    </>
  );
}
