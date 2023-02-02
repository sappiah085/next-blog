export function sortFunc(data) {
  const finance = [];
  const scholarships = [];
  const computerScience = [];
  const health = [];
  const events = [];
  const math = [];
  const fashion = [];
  const religion = [];
  const history = [];
  const music = [];
  data.forEach((el) => {
    if (el.tag === "finance") finance.push(el);
    if (el.tag === "scholarships") scholarships.push(el);
    if (el.tag === "events") events.push(el);
    if (el.tag === "computer_science") computerScience.push(el);
    if (el.tag === "health") health.push(el);
    if (el.tag === "math") math.push(el);
    if (el.tag === "fashion") fashion.push(el);
    if (el.tag === "religion") religion.push(el);
    if (el.tag === "history") history.push(el);
    if (el.tag === "music") music.push(el);
  });
  return {
    finance,
    scholarships,
    computerScience,
    health,
    events,
    math,
    fashion,
    music,
    religion,
    history,
  };
}
